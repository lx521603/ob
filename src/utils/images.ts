import type { ImageInfo, OpenGraphImage } from '@/types';
import { siteConfig } from '@/config';

// Process images for responsive layouts
export function processImageLayout(images: ImageInfo[]): {
  layout: 'single' | 'grid-2' | 'grid-3' | 'grid-4';
  images: ImageInfo[];
} {
  const count = images.length;

  if (count === 1) {
    return { layout: 'single', images };
  } else if (count === 2) {
    return { layout: 'grid-2', images };
  } else if (count === 3) {
    return { layout: 'grid-3', images };
  } else if (count >= 4) {
    return { layout: 'grid-4', images: images.slice(0, 4) };
  }

  return { layout: 'single', images };
}

// Extract images from markdown content
export function extractImagesFromContent(content: string): ImageInfo[] {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+?)(?:\s+"([^"]*)")?\)/g;
  const images: ImageInfo[] = [];
  let match;

  while ((match = imageRegex.exec(content)) !== null) {
    const [, alt, src, title] = match;
    images.push({
      src: src.trim(),
      alt: alt.trim() || 'Image',
      caption: title ? title.trim() : undefined,
    });
  }

  return images;
}

// Strip Obsidian double bracket syntax
export function stripObsidianBrackets(imagePath: string): string {
  if (!imagePath) return imagePath;
  if (imagePath.startsWith('[[') && imagePath.endsWith(']]')) {
    return imagePath.slice(2, -2);
  }
  return imagePath;
}

// Optimize image path for posts
export function optimizePostImagePath(imagePath: string, postSlug?: string, postId?: string): string {
  if (!imagePath || typeof imagePath !== 'string') return '/posts/attachments/placeholder.jpg';

  const cleanPath = stripObsidianBrackets(imagePath.trim());
  if (!cleanPath) return '/posts/attachments/placeholder.jpg';

  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) return cleanPath;
  if (cleanPath.startsWith('/')) return cleanPath;
  if (cleanPath.startsWith('/posts/attachments/')) return cleanPath;

  const isFolderBasedPost = postId && postId.includes('/') && postId.endsWith('/index.md');
  
  if (isFolderBasedPost && (cleanPath.startsWith('./') || (!cleanPath.startsWith('/') && !cleanPath.startsWith('http')))) {
    const imageName = cleanPath.startsWith('./') ? cleanPath.slice(2) : cleanPath;
    return `/posts/${postSlug}/${imageName}`;
  }

  if (cleanPath.startsWith('./images/')) return cleanPath.replace('./images/', '/posts/attachments/');
  if (cleanPath.startsWith('images/')) return `/posts/${cleanPath}`;
  if (cleanPath.startsWith('./attachments/')) return cleanPath.replace('./attachments/', '/posts/attachments/');
  if (cleanPath.startsWith('attachments/')) return `/posts/${cleanPath}`;
  if (!cleanPath.includes('/')) return isFolderBasedPost && postSlug ? `/posts/${postSlug}/${cleanPath}` : `/posts/attachments/${cleanPath}`;

  return `/posts/attachments/${cleanPath}`;
}

// Optimize generic content image
export function optimizeContentImagePath(imagePath: string, contentType: 'posts' | 'projects' | 'documentation' | 'pages', contentSlug?: string, contentId?: string): string {
  const urlPath = contentType === 'documentation' ? 'docs' : contentType;
  if (!imagePath || typeof imagePath !== 'string') return `/${urlPath}/attachments/placeholder.jpg`;

  const cleanPath = stripObsidianBrackets(imagePath.trim());
  if (!cleanPath) return `/${urlPath}/attachments/placeholder.jpg`;
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) return cleanPath;
  if (cleanPath.startsWith('/')) return cleanPath;
  if (cleanPath.startsWith(`/${urlPath}/attachments/`)) return cleanPath;

  const isFolderBasedContent = contentId && contentId.includes('/') && contentId.endsWith('/index.md');

  if (isFolderBasedContent && (cleanPath.startsWith('./') || (!cleanPath.startsWith('/') && !cleanPath.startsWith('http')))) {
    const imageName = cleanPath.startsWith('./') ? cleanPath.slice(2) : cleanPath;
    return `/${urlPath}/${contentSlug}/${imageName}`;
  }

  if (cleanPath.startsWith('./images/')) return cleanPath.replace('./images/', `/${urlPath}/attachments/`);
  if (cleanPath.startsWith('images/')) return `/${urlPath}/${cleanPath}`;
  if (cleanPath.startsWith('./attachments/')) return cleanPath.replace('./attachments/', `/${urlPath}/attachments/`);
  if (cleanPath.startsWith('attachments/')) return `/${urlPath}/${cleanPath}`;
  if (!cleanPath.includes('/')) return isFolderBasedContent && contentSlug ? `/${urlPath}/${contentSlug}/${cleanPath}` : `/${urlPath}/attachments/${cleanPath}`;

  return `/${urlPath}/attachments/${cleanPath}`;
}

// Get fallback OG image
export function getFallbackOGImage(site?: URL): OpenGraphImage {
  const baseUrl = site ? site.toString() : siteConfig.site;
  return {
    url: `${baseUrl}/open-graph.png`,
    alt: siteConfig.seo.defaultOgImageAlt,
    width: 1200,
    height: 630,
  };
}

// Check if image is external
export function isExternalImage(imagePath: string): boolean {
  return imagePath.startsWith('http://') || imagePath.startsWith('https://');
}