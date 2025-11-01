// 使用 TypeScript 类型的站点配置

// 文章卡片的长宽比选项
export type AspectRatio = 
  | "16:9" 
  | "4:3"
  | "3:2"
  | "og"
  | "square"
  | "golden"
  | "custom";

export interface SiteConfig {
  // 站点信息
  site: string;
  title: string;
  description: string;
  author: string;
  language: string;
  
  // 全局设置
  theme: "minimal" | "oxygen" | "atom" | "ayu" | "catppuccin" | "charcoal" | "dracula" | "everforest" | "flexoki" | "gruvbox" | "macos" | "nord" | "obsidian" | "rose-pine" | "sky" | "solarized" | "things" | "custom";
  customThemeFile?: string; // src/themes/custom/ 中的文件名（例如："my-cool-theme" 对应 my-cool-theme.ts）
  availableThemes: "default" | Array<string>; // 控制用户可以选择哪些主题 - "default" 显示所有内置主题，数组可以包含自定义主题文件名
  fonts: {
    source: "local" | "cdn";
    families: {
      body: string;
      heading: string;
      mono: string;
    };
    display: "swap" | "fallback" | "optional";
  };
  layout: {
    contentWidth: string;
  };
  tableOfContents: {
    enabled: boolean;
    depth: number;
  };
  footer: {
    enabled: boolean;
    content: string;
    showSocialIconsInFooter: boolean;
  };
  // [CONFIG:HIDE_SCROLL_BAR]
  hideScrollBar: boolean;
  scrollToTop: boolean;
  featureButton: "mode" | "graph" | "theme" | "none";
  seo: {
    defaultOgImageAlt: string;
  };
  deployment: {
    platform: "netlify" | "vercel" | "github-pages";
  };
  
  // 命令面板
  commandPalette: {
    enabled: boolean;
    shortcut: string;
    placeholder: string;
    search: {
      posts: boolean;
      pages: boolean;
      projects: boolean;
      docs: boolean;
    };
    sections: {
      quickActions: boolean;
      pages: boolean;
      social: boolean;
    };
    quickActions: {
      enabled: boolean;
      toggleMode: boolean;
      graphView: boolean;
      changeTheme: boolean;
    };
  };
  
  // 个人资料图片
  profilePicture: {
    enabled: boolean;
    image: string;
    alt: string;
    size: "sm" | "md" | "lg";
    url?: string;
    placement: "footer" | "header";
    style: "circle" | "square" | "none";
  };
  
  // 导航
  navigation: {
    showNavigation: boolean;
    style: "minimal" | "traditional";
    showMobileMenu: boolean;
    pages: Array<{ title: string; url: string }>;
    social: Array<{ title: string; url: string; icon: string }>;
  };
  
  // 首页选项
  homeOptions: {
    featuredPost: {
      enabled: boolean;
      type: "latest" | "featured";
      slug?: string; // 仅在类型为 "featured" 时使用
    };
    recentPosts: {
      enabled: boolean;
      count: number;
    };
    projects: {
      enabled: boolean;
      count: number;
    };
    docs: {
      enabled: boolean;
      count: number;
    };
    blurb: {
      placement: "above" | "below" | "none";
    };
  };
  
  // 文章选项
  postOptions: {
    postsPerPage: number;
    readingTime: boolean;
    wordCount: boolean;
    tags: boolean;
    linkedMentions: {
      enabled: boolean;
      linkedMentionsCompact: boolean;
    };
    graphView: {
      enabled: boolean;
      showInSidebar: boolean;
      maxNodes: number;
      showOrphanedPosts: boolean;
    };
    postNavigation: boolean;
    showPostCardCoverImages: "all" | "featured" | "home" | "posts" | "featured-and-posts" | "none";
    postCardAspectRatio: AspectRatio;
    customPostCardAspectRatio?: string;
    comments: {
      enabled: boolean;
      provider: string;
      repo: string;
      repoId: string;
      category: string;
      categoryId: string;
      mapping: string;
      strict: string;
      reactions: string;
      metadata: string;
      inputPosition: string;
      theme: string;
      lang: string;
      loading: string;
    };
  };
  
  // 可选内容类型
  optionalContentTypes: {
    projects: boolean;
    docs: boolean;
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// ASTRO MODULAR 配置
// ═══════════════════════════════════════════════════════════════════════════════
// 
// ⚠️ 重要：像 // [CONFIG:KEY] 这样的注释标记被 Astro Modular Settings Obsidian 插件使用。
// 不要移除这些标记，否则插件将无法自动更新您的配置。
// 
// 大多数设置都有有用的注释说明它们的作用。
// 
// ═══════════════════════════════════════════════════════════════════════════════
export const siteConfig: SiteConfig = {
  // 站点信息
  // [CONFIG:SITE_URL]
  site: "https://sai.st",
  // [CONFIG:SITE_TITLE]
  title: "Sai",
  // [CONFIG:SITE_DESCRIPTION]
  description: "一个为 Obsidian 用户设计的灵活博客主题。",
  // [CONFIG:SITE_AUTHOR]
  author: "Sai",
  // [CONFIG:SITE_LANGUAGE]
  language: "zh-CN",

  // 全局设置
  // [CONFIG:THEME]
  theme: "oxygen", // 可用主题: "minimal" | "oxygen" | "atom" | "ayu" | "catppuccin" | "charcoal" | "dracula" | "everforest" | "flexoki" | "gruvbox" | "macos" | "nord" | "obsidian" | "rose-pine" | "sky" | "solarized" | "things" | "custom"
  // [CONFIG:CUSTOM_THEME_FILE]
  customThemeFile: "custom", // 仅当上面主题设置为 "custom" 时使用。src/themes/custom/ 中的文件名（不带 .ts 扩展名）
  // [CONFIG:AVAILABLE_THEMES]
  availableThemes: "default", // "default" 显示所有内置主题，或主题名称数组如 ["oxygen", "minimal", "obsidianite"] 来限制选择（可以包含自定义主题文件名）
  fonts: {
    // [CONFIG:FONT_SOURCE]
    source: "local", // "local" 用于自托管的 @fontsource 字体，"cdn" 用于 Google Fonts CDN
    families: {
      // [CONFIG:FONT_BODY]
      body: "Inter",      // 正文字体家族
      // [CONFIG:FONT_HEADING]
      heading: "Inter",   // 标题字体家族  
      // [CONFIG:FONT_MONO]
      mono: "JetBrains Mono", // 等宽字体家族
    },
    // [CONFIG:FONT_DISPLAY]
    display: "swap", // 字体显示策略: "swap"（推荐）、"fallback" 或 "optional"
  },
  layout: {
    // [CONFIG:LAYOUT_CONTENT_WIDTH]
    contentWidth: "45rem",
  },
  tableOfContents: {
    // [CONFIG:TABLE_OF_CONTENTS_ENABLED]
    enabled: true,
    // [CONFIG:TABLE_OF_CONTENTS_DEPTH]
    depth: 4, // 目录中包含的最大标题深度（2-6，其中 2=H2，3=H3，等等）
  },
  footer: {
    // [CONFIG:FOOTER_ENABLED]
    enabled: true,
    // [CONFIG:FOOTER_CONTENT]
    content: `© 2025 {author}. 使用 <a href="https://github.com/lx521603/ob" target="_blank">Astro</a> 构建。`,
    // [CONFIG:FOOTER_SHOW_SOCIAL_ICONS]
    showSocialIconsInFooter: true,
  },
  //[CONFIG:HIDE_SCROLL_BAR]
  hideScrollBar: false,
  // [CONFIG:SCROLL_TO_TOP]
  scrollToTop: true,
  // [CONFIG:FEATURE_BUTTON]
  featureButton: "mode", // "mode" | "graph" | "theme" | "none"
  seo: {
    // [CONFIG:SEO_DEFAULT_OG_IMAGE_ALT]
    defaultOgImageAlt: "Sai 博客", // 默认 Open Graph 图片的替代文本，public/open-graph.png
  },
  deployment: {
    // [CONFIG:DEPLOYMENT_PLATFORM]
    platform: "netlify", // "netlify" | "vercel" | "github-pages" - 为所选平台设置重定向配置
  },

  // 命令面板
  commandPalette: {
    // [CONFIG:COMMAND_PALETTE_ENABLED]
    enabled: true,
    // [CONFIG:COMMAND_PALETTE_SHORTCUT]
    shortcut: "ctrl+K",
    // [CONFIG:COMMAND_PALETTE_PLACEHOLDER]
    placeholder: "搜索文章",
    search: {
      // [CONFIG:COMMAND_PALETTE_SEARCH_POSTS]
      posts: true,
      // [CONFIG:COMMAND_PALETTE_SEARCH_PAGES]
      pages: false,
      // [CONFIG:COMMAND_PALETTE_SEARCH_PROJECTS]
      projects: false,
      // [CONFIG:COMMAND_PALETTE_SEARCH_DOCS]
      docs: false,
    },
    sections: {
      // [CONFIG:COMMAND_PALETTE_SECTIONS_QUICK_ACTIONS]
      quickActions: true,
      // [CONFIG:COMMAND_PALETTE_SECTIONS_PAGES]
      pages: true,
      // [CONFIG:COMMAND_PALETTE_SECTIONS_SOCIAL]
      social: true,
    },
    quickActions: {
      // [CONFIG:COMMAND_PALETTE_QUICK_ACTIONS_ENABLED]
      enabled: true,
      // [CONFIG:COMMAND_PALETTE_QUICK_ACTIONS_TOGGLE_MODE]
      toggleMode: true,
      // [CONFIG:COMMAND_PALETTE_QUICK_ACTIONS_GRAPH_VIEW]
      graphView: true,
      // [CONFIG:COMMAND_PALETTE_QUICK_ACTIONS_CHANGE_THEME]
      changeTheme: true,
    },
  },

  // 个人资料图片
  profilePicture: {
    // [CONFIG:PROFILE_PICTURE_ENABLED]
    enabled: false, 
    // [CONFIG:PROFILE_PICTURE_IMAGE]
    image: "/profile.jpg", // 个人资料图片路径（放在 public/ 目录中）
    // [CONFIG:PROFILE_PICTURE_ALT]
    alt: "个人资料图片",
    // [CONFIG:PROFILE_PICTURE_SIZE]
    size: "md", // "sm" (32px), "md" (48px), 或 "lg" (64px) - 仅影响页脚位置
    // [CONFIG:PROFILE_PICTURE_URL]
    url: "/about", // 可选
    // [CONFIG:PROFILE_PICTURE_PLACEMENT]
    placement: "footer", // "footer" 或 "header"
    // [CONFIG:PROFILE_PICTURE_STYLE]
    style: "circle", // "circle", "square", 或 "none"
  },

  // 导航
  navigation: {
    // [CONFIG:NAVIGATION_SHOW_NAVIGATION]
    showNavigation: true,
    // [CONFIG:NAVIGATION_STYLE]
    style: "traditional", // 'minimal' 或 'traditional'
    // [CONFIG:NAVIGATION_SHOW_MOBILE_MENU]
    showMobileMenu: true,
    // [CONFIG:NAVIGATION_PAGES]
    pages: [
      { title: "博客", url: "/posts" },
      { title: "项目", url: "/projects" },
      { title: "文档", url: "/docs" },
      { title: "关于", url: "/about" },
      { title: "GitHub", url: "https://github.com/lx521603" },
    ],
    // [CONFIG:NAVIGATION_SOCIAL]
    social: [
      {
        title: "X",
        url: "https://x.com/oniyt1980",
        icon: "x-twitter",
      },
      {
        title: "GitHub",
        url: "https://github.com/lx521603",
        icon: "github",
      },
    ],
  },

  // 可选内容类型 - 启用/禁用可选内容部分（优先于 homeOptions）
  optionalContentTypes: {
    // [CONFIG:OPTIONAL_CONTENT_TYPES_PROJECTS]
    projects: true, // 启用项目部分
    // [CONFIG:OPTIONAL_CONTENT_TYPES_DOCS]
    docs: true, // 启用文档部分
  },

  // 首页选项
  homeOptions: {
    featuredPost: {
      // [CONFIG:HOME_OPTIONS_FEATURED_POST_ENABLED]
      enabled: true, // 在首页显示特色文章
      // [CONFIG:HOME_OPTIONS_FEATURED_POST_TYPE]
      type: "latest", // "latest" 或 "featured"
      // [CONFIG:HOME_OPTIONS_FEATURED_POST_SLUG]
      slug: "getting-started", // 特色文章的 slug（例如 "post-title"）。仅在类型为 "featured" 时使用
    },
    recentPosts: {
      // [CONFIG:HOME_OPTIONS_RECENT_POSTS_ENABLED]
      enabled: true, // 在首页显示最近文章
      // [CONFIG:HOME_OPTIONS_RECENT_POSTS_COUNT]
      count: 7, // 显示的最近文章数量
    },
    projects: {
      // [CONFIG:HOME_OPTIONS_PROJECTS_ENABLED]
      enabled: true, // 在首页显示特色项目
      // [CONFIG:HOME_OPTIONS_PROJECTS_COUNT]
      count: 2, // 显示的项目数量
    },
    docs: {
      // [CONFIG:HOME_OPTIONS_DOCS_ENABLED]
      enabled: true, // 在首页显示特色文档
      // [CONFIG:HOME_OPTIONS_DOCS_COUNT]
      count: 3, // 显示的文档数量
    },
    blurb: {
      // [CONFIG:HOME_OPTIONS_BLURB_PLACEMENT]
      placement: "below", // 'above'（在顶部）、'below'（在内容之后）或 'none'（禁用）
    },
  },

  // 文章选项
  postOptions: {
    // [CONFIG:POST_OPTIONS_POSTS_PER_PAGE]
    postsPerPage: 6,
    // [CONFIG:POST_OPTIONS_READING_TIME]
    readingTime: true,
    // [CONFIG:POST_OPTIONS_WORD_COUNT]
    wordCount: true,
    // [CONFIG:POST_OPTIONS_TAGS]
    tags: true,
    linkedMentions: {
      // [CONFIG:POST_OPTIONS_LINKED_MENTIONS_ENABLED]
      enabled: true,
      // [CONFIG:POST_OPTIONS_LINKED_MENTIONS_COMPACT]
      linkedMentionsCompact: false,
    },
    graphView: {
      // [CONFIG:POST_OPTIONS_GRAPH_VIEW_ENABLED]
      enabled: true,
      // [CONFIG:POST_OPTIONS_GRAPH_VIEW_SHOW_IN_SIDEBAR]
      showInSidebar: true,
      // [CONFIG:POST_OPTIONS_GRAPH_VIEW_MAX_NODES]
      maxNodes: 100,
      // [CONFIG:POST_OPTIONS_GRAPH_VIEW_SHOW_ORPHANED_POSTS]
      showOrphanedPosts: true,
    },
    // [CONFIG:POST_OPTIONS_POST_NAVIGATION]
    postNavigation: true,
    // [CONFIG:POST_OPTIONS_SHOW_POST_CARD_COVER_IMAGES]
    showPostCardCoverImages: "featured-and-posts", // "all" | "featured" | "home" | "posts" | "featured-and-posts" | "none"
    // [CONFIG:POST_OPTIONS_POST_CARD_ASPECT_RATIO]
    postCardAspectRatio: "og", // "16:9" | "4:3" | "3:2" | "og" | "square" | "golden" | "custom"
    // [CONFIG:POST_OPTIONS_CUSTOM_POST_CARD_ASPECT_RATIO]
    customPostCardAspectRatio: "2.5/1", // 仅当 postCardAspectRatio 为 "custom" 时使用（例如："2.5/1"）
    comments: {
      // [CONFIG:POST_OPTIONS_COMMENTS_ENABLED]
      enabled: false,
      // [CONFIG:POST_OPTIONS_COMMENTS_PROVIDER]
      provider: "giscus",
      // [CONFIG:POST_OPTIONS_COMMENTS_REPO]
      repo: "lx521603/ob",
      // [CONFIG:POST_OPTIONS_COMMENTS_REPO_ID]
      repoId: "",
      // [CONFIG:POST_OPTIONS_COMMENTS_CATEGORY]
      category: "General",
      // [CONFIG:POST_OPTIONS_COMMENTS_CATEGORY_ID]
      categoryId: "",
      // [CONFIG:POST_OPTIONS_COMMENTS_MAPPING]
      mapping: "pathname",
      // [CONFIG:POST_OPTIONS_COMMENTS_STRICT]
      strict: "0",
      // [CONFIG:POST_OPTIONS_COMMENTS_REACTIONS]
      reactions: "1",
      // [CONFIG:POST_OPTIONS_COMMENTS_METADATA]
      metadata: "0",
      // [CONFIG:POST_OPTIONS_COMMENTS_INPUT_POSITION]
      inputPosition: "bottom",
      // [CONFIG:POST_OPTIONS_COMMENTS_THEME]
      theme: "preferred_color_scheme",
      // [CONFIG:POST_OPTIONS_COMMENTS_LANG]
      lang: "zh-CN",
      // [CONFIG:POST_OPTIONS_COMMENTS_LOADING]
      loading: "lazy",
    },
  },
};

// 工具函数
export function getFeature(feature: keyof Omit<SiteConfig["postOptions"], "postsPerPage" | "showPostCardCoverImages" | "postCardAspectRatio" | "customPostCardAspectRatio" | "linkedMentions" | "graphView" | "comments">): boolean {
  return siteConfig.postOptions[feature];
}

export function getCommandPaletteShortcut(): string {
  return siteConfig.commandPalette.shortcut;
}

export function getContentWidth(): string {
  return siteConfig.layout.contentWidth;
}

export function getTheme(): "minimal" | "oxygen" | "atom" | "ayu" | "catppuccin" | "charcoal" | "dracula" | "everforest" | "flexoki" | "gruvbox" | "macos" | "nord" | "obsidian" | "rose-pine" | "sky" | "solarized" | "things" | "custom" {
  return siteConfig.theme;
}

export function getPostCardAspectRatio(): string {
  const { postCardAspectRatio, customPostCardAspectRatio } = siteConfig.postOptions;
  
  switch (postCardAspectRatio) {
    case "16:9":
      return "16 / 9";
    case "4:3":
      return "4 / 3";
    case "3:2":
      return "3 / 2";
    case "og":
      return "1.91 / 1";
    case "square":
      return "1 / 1";
    case "golden":
      return "1.618 / 1";
    case "custom":
      return customPostCardAspectRatio || "1.91 / 1"; // 如果未提供自定义值，则回退到 OpenGraph
    default:
      return "1.91 / 1"; // 默认使用 OpenGraph
  }
}

export function getHeadingFont(): string {
  return siteConfig.fonts.families.heading;
}

export function getProseFont(): string {
  return siteConfig.fonts.families.body;
}

export function getTableOfContentsDepth(): number {
  return siteConfig.tableOfContents.depth;
}

export function getTableOfContentsEnabled(): boolean {
  return siteConfig.tableOfContents.enabled;
}

export function getFontFamily(fontName: string): string {
  // 将字体名称转换为 CSS font-family 并添加后备字体
  const fontMap: Record<string, string> = {
    'Inter': "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    'Roboto': "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Open Sans': "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Lato': "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Poppins': "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Source Sans Pro': "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Nunito': "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Montserrat': "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Playfair Display': "'Playfair Display', Georgia, 'Times New Roman', serif",
    'Merriweather': "'Merriweather', Georgia, 'Times New Roman', serif",
    'Lora': "'Lora', Georgia, 'Times New Roman', serif",
    'Crimson Text': "'Crimson Text', Georgia, 'Times New Roman', serif",
    'PT Serif': "'PT Serif', Georgia, 'Times New Roman', serif",
    'Libre Baskerville': "'Libre Baskerville', Georgia, 'Times New Roman', serif",
    'Fira Code': "'Fira Code', 'Monaco', 'Consolas', 'Courier New', monospace",
    'JetBrains Mono': "'JetBrains Mono', 'Monaco', 'Consolas', 'Courier New', monospace",
    'Source Code Pro': "'Source Code Pro', 'Monaco', 'Consolas', 'Courier New', monospace",
    'IBM Plex Mono': "'IBM Plex Mono', 'Monaco', 'Consolas', 'Courier New', monospace",
    'Cascadia Code': "'Cascadia Code', 'Monaco', 'Consolas', 'Courier New', monospace",
  };
  
  return fontMap[fontName] || `'${fontName}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
}

export function getGoogleFontsUrl(headingFont: string, bodyFont: string): string {
  // 常用且可用的 Google Fonts
  const googleFonts = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Poppins', 'Source Sans Pro', 
    'Nunito', 'Montserrat', 'Playfair Display', 'Merriweather', 'Lora', 
    'Crimson Text', 'PT Serif', 'Libre Baskerville', 'Fira Code', 
    'JetBrains Mono', 'Source Code Pro', 'IBM Plex Mono', 'Cascadia Code'
  ];
  
  const fonts = new Set<string>();
  
  // 如果是 Google Fonts 则添加
  if (googleFonts.includes(headingFont)) {
    fonts.add(headingFont);
  }
  if (googleFonts.includes(bodyFont)) {
    fonts.add(bodyFont);
  }
  
  // 如果不需要 Google Fonts，返回空字符串
  if (fonts.size === 0) {
    return '';
  }
  
  // 生成 Google Fonts URL
  const fontList = Array.from(fonts).map(font => {
    // 为每种字体添加常用字重
    const weights = font.includes('Mono') ? '300;400;500;600;700' : '300;400;500;600;700';
    return `${font.replace(/\s+/g, '+')}:wght@${weights}`;
  }).join('&family=');
  
  return `https://fonts.googleapis.com/css2?family=${fontList}&display=swap`;
}

// 字体加载工具函数
export function getFontSource(): "local" | "cdn" {
  return siteConfig.fonts.source;
}

export function getFontDisplay(): "swap" | "fallback" | "optional" {
  return siteConfig.fonts.display;
}

// 主题显示名称工具函数，用于 UI 格式化
export function getThemeDisplayName(themeName: string): string {
  // 特殊情况的正确格式化
  const specialCases: Record<string, string> = {
    'rose-pine': 'Rosé Pine',
    'macos': 'macOS'
  };
  
  // 如果存在特殊情况则返回
  if (specialCases[themeName]) {
    return specialCases[themeName];
  }
  
  // 通用格式化：首字母大写并用空格替换连字符
  return themeName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getFontFamilies() {
  return siteConfig.fonts.families;
}

export function shouldLoadLocalFonts(): boolean {
  return siteConfig.fonts.source === "local";
}

export function shouldLoadCdnFonts(): boolean {
  return siteConfig.fonts.source === "cdn";
}

// siteConfig 的验证函数
function validateSiteConfig(config: SiteConfig): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // 必填字段
  if (!config.site || !config.site.startsWith('http')) {
    errors.push('站点 URL 缺失或无效。请在 site 字段中设置完整的 URL，如 "https://yourdomain.com"。');
  }
  if (!config.title || config.title.trim() === '') {
    errors.push('站点标题是必需的，不能为空。为您的博客设置一个描述性标题。');
  }
  if (!config.description || config.description.trim() === '') {
    errors.push('站点描述是必需的，不能为空。为您的博客设置一个简要描述。');
  }
  if (!config.author || config.author.trim() === '') {
    errors.push('作者名称是必需的，不能为空。设置您的姓名或博客作者。');
  }

  // 主题验证
  const validThemes = ['minimal', 'oxygen', 'atom', 'ayu', 'catppuccin', 'charcoal', 'dracula', 'everforest', 'flexoki', 'gruvbox', 'macos', 'nord', 'obsidian', 'rose-pine', 'sky', 'solarized', 'things', 'custom'];
  if (!validThemes.includes(config.theme)) {
    errors.push(`选择的主题无效："${config.theme}"。请从以下选项中选择：Minimal、Oxygen、Atom、Ayu、Catppuccin、Charcoal、Dracula、Everforest、Flexoki、Gruvbox、macOS、Nord、Obsidian、Rose Pine、Sky、Solarized 或 Things。对于自定义主题，请使用 "custom" 并设置 customThemeFile。`);
  }
  if (config.theme === 'custom') {
    if (!config.customThemeFile || config.customThemeFile.trim() === '') {
      errors.push('当主题设置为 "custom" 时，需要自定义主题文件。将 customThemeFile 设置为 src/themes/custom/ 中的文件名（不带 .ts 扩展名）。');
    }
  }

  // 可用主题验证
  if (config.availableThemes !== 'default' && !Array.isArray(config.availableThemes)) {
    errors.push('availableThemes 必须是 "default" 或主题名称数组。');
  }
  if (Array.isArray(config.availableThemes)) {
    if (config.availableThemes.length === 0) {
      errors.push('availableThemes 数组不能为空。使用 "default" 显示所有内置主题或在数组中指定主题名称。');
    }
    // 注意：我们无法在构建时验证自定义主题文件是否存在，因为它们是动态的
    // 运行时将优雅地处理缺失的自定义主题文件
  }

  // 字体配置验证
  if (!['local', 'cdn'].includes(config.fonts.source)) {
    errors.push(`字体源必须是 "local"（自托管字体）或 "cdn"（Google Fonts）。当前值 "${config.fonts.source}" 无效。`);
  }
  if (!config.fonts.families.body || config.fonts.families.body.trim() === '') {
    errors.push('正文字体家族是必需的。将 fonts.families.body 设置为有效的字体名称，如 "Inter"、"Roboto" 或 "Open Sans"。');
  }
  if (!config.fonts.families.heading || config.fonts.families.heading.trim() === '') {
    errors.push('标题字体家族是必需的。将 fonts.families.heading 设置为有效的字体名称，如 "Inter"、"Roboto" 或 "Playfair Display"。');
  }
  if (!config.fonts.families.mono || config.fonts.families.mono.trim() === '') {
    errors.push('等宽字体家族是必需的。将 fonts.families.mono 设置为有效的字体名称，如 "JetBrains Mono"、"Fira Code" 或 "Source Code Pro"。');
  }
  if (!['swap', 'fallback', 'optional'].includes(config.fonts.display)) {
    errors.push('字体显示策略必须是以下之一："swap"、"fallback" 或 "optional"。当前值无效。');
  }

  // 数值验证
  if (config.postOptions.postsPerPage < 1 || config.postOptions.postsPerPage > 50) {
    errors.push(`每页文章数必须在 1 到 50 之间。当前值为 ${config.postOptions.postsPerPage}。调整 postOptions.postsPerPage。`);
  }
  if (config.tableOfContents.depth < 2 || config.tableOfContents.depth > 6) {
    errors.push(`目录深度必须在 2 到 6 之间（其中 2=H2，3=H3，等等）。当前值为 ${config.tableOfContents.depth}。调整 tableOfContents.depth。`);
  }
  if (config.homeOptions.recentPosts.count < 1) {
    errors.push('最近文章数量必须至少为 1。调整 homeOptions.recentPosts.count。');
  }
  if (config.homeOptions.projects.count < 1) {
    errors.push('项目数量必须至少为 1。调整 homeOptions.projects.count。');
  }
  if (config.homeOptions.docs.count < 1) {
    errors.push('文档数量必须至少为 1。调整 homeOptions.docs.count。');
  }

  // 内容宽度验证
  if (!config.layout.contentWidth || !config.layout.contentWidth.match(/^\d+(\.\d+)?(rem|px|em)$/)) {
    errors.push(`内容宽度必须是有效的 CSS 长度值，如 "45rem"、"800px" 或 "90em"。当前值 "${config.layout.contentWidth}" 无效。`);
  }

  // 导航样式验证
  if (!['minimal', 'traditional'].includes(config.navigation.style)) {
    errors.push(`导航样式必须是 "minimal" 或 "traditional"。当前值 "${config.navigation.style}" 无效。`);
  }

  // 封面图片选项验证
  const validCoverImageOptions = ['all', 'featured', 'home', 'posts', 'featured-and-posts', 'none'];
  if (!validCoverImageOptions.includes(config.postOptions.showPostCardCoverImages)) {
    errors.push(`显示文章卡片封面图片必须是以下之一："all"、"featured"、"home"、"posts"、"featured-and-posts" 或 "none"。当前值 "${config.postOptions.showPostCardCoverImages}" 无效。`);
  }

  // 长宽比验证
  const validAspectRatios = ['16:9', '4:3', '3:2', 'og', 'square', 'golden', 'custom'];
  if (!validAspectRatios.includes(config.postOptions.postCardAspectRatio)) {
    errors.push(`文章卡片长宽比必须是以下之一："16:9"、"4:3"、"3:2"、"og"、"square"、"golden" 或 "custom"。当前值 "${config.postOptions.postCardAspectRatio}" 无效。`);
  }

  // 自定义长宽比验证
  if (config.postOptions.postCardAspectRatio === 'custom') {
    if (!config.postOptions.customPostCardAspectRatio || !config.postOptions.customPostCardAspectRatio.match(/^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/)) {
      errors.push(`当 postCardAspectRatio 为 "custom" 时，必须提供格式为 "width / height" 的自定义长宽比（例如："2.5 / 1"）。当前值 "${config.postOptions.customPostCardAspectRatio}" 无效。`);
    }
  }

  // 首页选项验证
  if (!['above', 'below', 'none'].includes(config.homeOptions.blurb.placement)) {
    errors.push(`首页简介位置必须是 "above"、"below" 或 "none"。当前值 "${config.homeOptions.blurb.placement}" 无效。`);
  }
  
  // 特色文章验证
  if (!['latest', 'featured'].includes(config.homeOptions.featuredPost.type)) {
    errors.push(`特色文章类型必须是 "latest" 或 "featured"。当前值 "${config.homeOptions.featuredPost.type}" 无效。`);
  }
  
  // 仅在类型为 "featured" 时验证 slug - 当类型为 "latest" 时 slug 是可选的
  if (config.homeOptions.featuredPost.type === 'featured' && (!config.homeOptions.featuredPost.slug || config.homeOptions.featuredPost.slug.trim() === '')) {
    errors.push('当类型为 "featured" 时，特色文章 slug 是必需的。将 homeOptions.featuredPost.slug 设置为文章 slug（URL 中 /posts/ 之后的部分）。');
  }

  // 语言验证
  if (!config.language || !config.language.match(/^[a-z]{2}(-[A-Z]{2})?$/)) {
    errors.push('语言必须是有效的语言代码，如 "en" 或 "en-US"。当前值无效。');
  }

  // 页脚验证
  if (typeof config.footer.enabled !== 'boolean') {
    errors.push('页脚启用设置必须是布尔值（true 或 false）。');
  }
  if (config.footer.enabled && (!config.footer.content || config.footer.content.trim() === '')) {
    errors.push('启用页脚时，页脚内容是必需的。将 footer.content 设置为您的页脚文本。');
  }
  if (typeof config.footer.showSocialIconsInFooter !== 'boolean') {
    errors.push('页脚社交图标设置必须是布尔值（true 或 false）。');
  }

  // 个人资料图片验证
  if (config.profilePicture.enabled) {
    if (!config.profilePicture.image || config.profilePicture.image.trim() === '') {
      errors.push('启用 profilePicture.enabled 时，个人资料图片路径是必需的。将 profilePicture.image 设置为您的图片路径（例如，public/ 目录中的 "/profile.jpg"）。');
    }
    if (!config.profilePicture.alt || config.profilePicture.alt.trim() === '') {
      errors.push('启用 profilePicture.enabled 时，个人资料图片替代文本是必需的。将 profilePicture.alt 设置为描述您的个人资料图片以提供无障碍访问。');
    }
    if (!['sm', 'md', 'lg'].includes(config.profilePicture.size)) {
      errors.push(`个人资料图片大小必须是 "sm" (32px)、"md" (48px) 或 "lg" (64px)。当前值 "${config.profilePicture.size}" 无效。`);
    }
    if (!['footer', 'header'].includes(config.profilePicture.placement)) {
      errors.push(`个人资料图片位置必须是 "footer" 或 "header"。当前值 "${config.profilePicture.placement}" 无效。`);
    }
    if (!['circle', 'square', 'none'].includes(config.profilePicture.style)) {
      errors.push(`个人资料图片样式必须是 "circle"、"square" 或 "none"。当前值 "${config.profilePicture.style}" 无效。`);
    }
        if (config.profilePicture.url && !config.profilePicture.url.startsWith('/') && !config.profilePicture.url.startsWith('http')) {
          errors.push(`个人资料图片 URL 必须是以前缀 "/" 或 "http" 开头的有效路径。当前值 "${config.profilePicture.url}" 无效。`);
        }
        if (config.profilePicture.url && config.profilePicture.url.trim() === '') {
          errors.push('如果提供了个人资料图片 URL，则不能为空。');
        }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// 导入时验证配置
const validation = validateSiteConfig(siteConfig);
if (!validation.isValid) {
  throw new Error(`站点配置无效。请修复以下问题：\n${validation.errors.join('\n')}`);
}

// 将配置导出为默认值
export default siteConfig;