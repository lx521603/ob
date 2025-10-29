import type { ImageInfo, OpenGraphImage } from '@/types';
import { siteConfig } from '@/config';

// Process images for responsive layouts
export function processImageLayout(images: ImageInfo[]): {
  layout: 'single' | 'grid-2' | 'grid-3' | 'grid-4';
  images: ImageInfo[];
} {
  const count = images.length;

  if (count === 1) return { layout: 'single', images };
  if (count === 2) return { layout: 'grid-2', images };
  if (count === 3) return { layout: 'grid-3', images };
  if (count >= 4) return { layout: 'grid-4', images: images.slice(0, 4) };

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

// Find consecutive images in markdown
export function findConsecutiveImages(content: string): Array<{
  images: ImageInfo[];
  startIndex: number;
  endIndex: number;
}> {
  const lines = content.split('\n');
  const imageGroups: Array<{
    images: ImageInfo[];
    startIndex: number;
    endIndex: number;
  }> = [];

  let currentGroup: ImageInfo[] = [];
  let groupStart = -1;

  lines.forEach((line, index) => {
    const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);

    if (imageMatch) {
      const [, alt, src] = imageMatch;
      if (currentGroup.length === 0) groupStart = index;
      currentGroup.push({ src: src.trim(), alt: alt.trim() || 'Image' });
    } else if (line.trim() === '' && currentGroup.length > 0) {
      // empty line, continue group
      return;
    } else {
      if (currentGroup.length > 1) {
        imageGroups.push({
          images: [...currentGroup],
          startIndex: groupStart,
          endIndex: index - 1,
        });
      }
      currentGroup = [];
      groupStart = -1;
    }
  });

  if (currentGroup.length > 1) {
    imageGroups.push({
      images: [...currentGroup],
      startIndex: groupStart,
      endIndex: lines.length - 1,
    });
  }

  return imageGroups;
}

// Strip Obsidian double bracket syntax
export function stripObsidianBrackets(imagePath: string): string {
  if (!imagePath) return '';
  if (imagePath.startsWith('[[') && imagePath.endsWith(']]')) {
    return imagePath.slice(2, -2);
  }
  return imagePath;
}

// Optimize image paths (generic)
export function optimizeImagePath(imagePath: string): string {
  if (!imagePath || typeof imagePath !== 'string') return '/attachments/placeholder.jpg';
  const cleanPath = stripObsidianBrackets(imagePath.trim());
  if (!cleanPath) return '/attachments/placeholder.jpg';
  if (/^https?:\/\//.test(cleanPath)) return cleanPath;
  if (cleanPath.startsWith('/')) return cleanPath;
  return `/${cleanPath}`;
}

// Optimize page/post/content images
export function optimizeContentImagePath(
  imagePath: string,
  contentType: 'posts' | 'projects' | 'documentation' | 'pages',
  contentSlug?: string,
  contentId?: string
): string {
  if (!imagePath || typeof imagePath !== 'string') {
    return `/${contentType}/attachments/placeholder.jpg`;
  }

  const cleanPath = stripObsidianBrackets(imagePath.trim());
  if (!cleanPath) return `/${contentType}/attachments/placeholder.jpg`;

  if (/^https?:\/\//.test(cleanPath)) return cleanPath;
  if (cleanPath.startsWith('/')) return cleanPath;

  const isFolderBased = contentId && contentId.includes('/') && contentId.endsWith('/index.md');

  if (isFolderBased && (cleanPath.startsWith('./') || !cleanPath.startsWith('/'))) {
    const imageName = cleanPath.startsWith('./') ? cleanPath.slice(2) : cleanPath;
    return `/${contentType}/${contentSlug}/${imageName}`;
  }

  if (cleanPath.startsWith('./images/')) return cleanPath.replace('./images/', `/${contentType}/attachments/`);
  if (cleanPath.startsWith('images/')) return `/${contentType}/${cleanPath}`;
  if (cleanPath.startsWith('./attachments/')) return cleanPath.replace('./attachments/', `/${contentType}/attachments/`);
  if (cleanPath.startsWith('attachments/')) return `/${contentType}/${cleanPath}`;
  if (!cleanPath.includes('/')) {
    if (isFolderBased && contentSlug) return `/${contentType}/${contentSlug}/${cleanPath}`;
    return `/${contentType}/attachments/${cleanPath}`;
  }

  return `/${contentType}/attachments/${cleanPath}`;
}

// Process images for lightbox
export function processImagesForLightbox(images: ImageInfo[]): ImageInfo[] {
  return images.map(image => ({
    ...image,
    src: typeof image.src === 'string' ? optimizeImagePath(image.src) : '/attachments/placeholder.jpg',
    alt: image.alt?.trim() || 'Image',
  }));
}

// Generate srcset for responsive images
export function generateSrcSet(imagePath: string, widths: number[] = [320, 640, 768, 1024, 1280]): string {
  if (!imagePath || /^https?:\/\//.test(imagePath)) return imagePath || '';
  const basePath = imagePath.replace(/\.[^.]+$/, '');
  const extension = imagePath.match(/\.[^.]+$/)?.[0] || '.jpg';
  return widths.map(w => `${basePath}-${w}w${extension} ${w}w`).join(', ');
}

// OG / fallback images
export function getDefaultOGImage(): OpenGraphImage {
  return { url: '/open-graph.png', alt: siteConfig.seo.defaultOgImageAlt, width: 1200, height: 630 };
}

export function getFallbackOGImage(site?: URL): OpenGraphImage {
  const baseUrl = site?.toString() || siteConfig.site;
  return { url: `${baseUrl}/open-graph.png`, alt: siteConfig.seo.defaultOgImageAlt, width: 1200, height: 630 };
}

// Helpers
export function isExternalImage(imagePath: string): boolean {
  return /^https?:\/\//.test(imagePath);
}

export function getImageAlt(image: ImageInfo, fallback = 'Image'): string {
  return image.alt?.trim() || fallback;
}

export function isValidImageFormat(imagePath: string): boolean {
  return /\.(jpe?g|png|gif|webp|svg|bmp|tiff|ico)$/i.test(imagePath || '');
}

export function getMimeTypeFromPath(imagePath: string): string {
  const ext = imagePath.toLowerCase().match(/\.([^.]+)$/)?.[1];
  switch (ext) {
    case 'jpg':
    case 'jpeg': return 'image/jpeg';
    case 'png': return 'image/png';
    case 'gif': return 'image/gif';
    case 'webp': return 'image/webp';
    case 'svg': return 'image/svg+xml';
    case 'bmp': return 'image/bmp';
    case 'tiff':
    case 'tif': return 'image/tiff';
    case 'ico': return 'image/x-icon';
    default: return 'image/jpeg';
  }
}

export function getOptimizedFormat(imagePath: string): string {
  if (!imagePath) return imagePath || '';
  if (imagePath.endsWith('.svg')) return imagePath;
  return imagePath.replace(/\.(jpg|jpeg|png|gif|bmp|tiff|tif)$/i, '.webp');
}

export function canOptimizeImageFormat(imagePath: string): boolean {
  const ext = imagePath.toLowerCase().match(/\.([^.]+)$/)?.[1];
  return !['svg', 'webp', 'ico'].includes(ext || '');
}