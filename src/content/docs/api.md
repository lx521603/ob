---

title: API 接口文档
description: Astro Modular 主题的完整 API 参考文档
category: Astro Modular
order: 3
version: 1.1.0
lastModified: 2025-10-23
image:
imageAlt:
hideCoverImage: false
hideTOC: false
draft: false
featured: true
aliases:

· api-reference
· API参考

---

本文档提供 Astro Modular 主题的完整 API 参考，包括工具函数和配置选项。

内容集合

文章集合

```typescript
interface PostData {
  title: string;          // 标题
  description: string;    // 描述
  date: Date;            // 发布日期
  tags?: string[];       // 标签数组
  draft?: boolean;       // 是否为草稿
  image?: string;        // 封面图片
  imageAlt?: string;     // 图片替代文本
  imageOG?: boolean;     // 是否用作开放图谱图片
  hideCoverImage?: boolean; // 是否隐藏封面图片
  hideTOC?: boolean;     // 是否隐藏目录
  targetKeyword?: string; // 目标关键词
  noIndex?: boolean;     // 是否禁止索引
}
```

页面集合

```typescript
interface PageData {
  title: string;          // 标题
  description: string;    // 描述
  draft?: boolean;       // 是否为草稿
  lastModified?: Date;   // 最后修改日期
  image?: string;        // 封面图片
  imageAlt?: string;     // 图片替代文本
  hideCoverImage?: boolean; // 是否隐藏封面图片
  hideTOC?: boolean;     // 是否隐藏目录
  noIndex?: boolean;     // 是否禁止索引
}
```

项目集合

```typescript
interface ProjectData {
  title: string;          // 标题
  description: string;    // 描述
  date: Date;            // 创建日期
  categories?: string[];  // 分类数组
  repositoryUrl?: string; // 代码仓库地址
  demoUrl?: string;      // 演示地址
  status?: string;       // 状态 - "已完成", "进行中", "暂停" 等
  image?: string;        // 封面图片
  imageAlt?: string;     // 图片替代文本
  hideCoverImage?: boolean; // 是否隐藏封面图片
  hideTOC?: boolean;     // 是否隐藏目录
  draft?: boolean;       // 是否为草稿
  noIndex?: boolean;     // 是否禁止索引
  featured?: boolean;    // 是否推荐
}
```

文档集合

```typescript
interface DocumentationData {
  title: string;          // 标题
  description: string;    // 描述
  category: string;      // 分类
  order: number;         // 排序序号
  lastModified?: Date;   // 最后修改日期
  version?: string;      // 版本号
  image?: string;        // 封面图片
  imageAlt?: string;     // 图片替代文本
  hideCoverImage?: boolean; // 是否隐藏封面图片
  hideTOC?: boolean;     // 是否隐藏目录
  draft?: boolean;       // 是否为草稿
  noIndex?: boolean;     // 是否禁止索引
  showTOC?: boolean;     // 是否显示目录
  featured?: boolean;    // 是否推荐
}
```

特殊集合

```typescript
interface SpecialData {
  title: string;          // 标题
  description: string;    // 描述
  hideTOC?: boolean;     // 是否隐藏目录
}
```

特殊页面：

· home.md - 首页简介内容
· 404.md - 404 错误页面内容
· posts.md - 文章索引页面（仅标题和描述）
· projects.md - 项目索引页面内容
· docs.md - 文档索引页面内容

配置 API

站点配置接口

```typescript
interface SiteConfig {
  // 站点信息
  site: string;          // 站点URL
  title: string;         // 站点标题
  description: string;   // 站点描述
  author: string;       // 作者
  language: string;     // 语言
  
  // 全局设置
  theme: "minimal" | "oxygen" | "atom" | "ayu" | "catppuccin" | "charcoal" | "dracula" | "everforest" | "flexoki" | "gruvbox" | "macos" | "nord" | "obsidian" | "rose-pine" | "sky" | "solarized" | "things" | "custom"; // 主题
  customThemeFile?: string; // 自定义主题文件
  availableThemes: "all" | Array<ThemeName>; // 可用主题
  fonts: {               // 字体设置
    source: "local" | "cdn"; // 字体来源
    families: {          // 字体族
      body: string;      // 正文字体
      heading: string;   // 标题字体
      mono: string;      // 等宽字体
    };
    display: "swap" | "fallback" | "optional"; // 字体显示方式
  };
  layout: {              // 布局设置
    contentWidth: string; // 内容宽度
  };
  tableOfContents: {     // 目录设置
    enabled: boolean;    // 是否启用
    depth: number;       // 深度
  };
  footer: {              // 页脚设置
    enabled: boolean;    // 是否启用
    content: string;     // 页脚内容
    showSocialIconsInFooter: boolean; // 是否在页脚显示社交图标
  };
  hideScrollBar: boolean; // 是否隐藏滚动条
  scrollToTop: boolean;  // 是否显示返回顶部按钮
  featureButton: "mode" | "graph" | "theme" | "none"; // 功能按钮
  seo: {                 // SEO设置
    defaultOgImageAlt: string; // 默认开放图谱图片替代文本
  };
  deployment: {          // 部署设置
    platform: "netlify" | "vercel" | "github-pages"; // 部署平台
  };
  
  // 命令面板
  commandPalette: {
    enabled: boolean;    // 是否启用
    shortcut: string;    // 快捷键
    placeholder: string; // 占位符文本
    search: {           // 搜索范围
      posts: boolean;   // 文章
      pages: boolean;   // 页面
      projects: boolean; // 项目
      docs: boolean;    // 文档
    };
    sections: {         // 面板分区
      quickActions: boolean; // 快捷操作
      pages: boolean;   // 页面
      social: boolean;  // 社交链接
    };
    quickActions: {     // 快捷操作
      enabled: boolean; // 是否启用
      toggleMode: boolean; // 切换模式
      graphView: boolean; // 图谱视图
      changeTheme: boolean; // 切换主题
    };
  };
  
  // 个人资料图片
  profilePicture: {
    enabled: boolean;   // 是否启用
    image: string;      // 图片路径
    alt: string;        // 替代文本
    size: "sm" | "md" | "lg"; // 尺寸
    url?: string;       // 链接地址
    placement: "footer" | "header"; // 位置
    style: "circle" | "square" | "none"; // 样式
  };
  
  // 导航
  navigation: {
    showNavigation: boolean; // 是否显示导航
    style: "minimal" | "traditional"; // 导航样式
    showMobileMenu: boolean; // 是否显示移动端菜单
    pages: Array<{ title: string; url: string }>; // 页面导航
    social: Array<{ title: string; url: string; icon: string }>; // 社交链接
  };
  
  // 首页选项
  homeOptions: {
    featuredPost: {     // 推荐文章
      enabled: boolean; // 是否启用
      type: "latest" | "featured"; // 类型
      slug?: string;    // 文章slug
    };
    recentPosts: {      // 最近文章
      enabled: boolean; // 是否启用
      count: number;    // 显示数量
    };
    projects: {         // 项目
      enabled: boolean; // 是否启用
      count: number;    // 显示数量
    };
    docs: {             // 文档
      enabled: boolean; // 是否启用
      count: number;    // 显示数量
    };
    blurb: {            // 简介
      placement: "above" | "below" | "none"; // 位置
    };
  };
  
  // 文章选项
  postOptions: {
    postsPerPage: number; // 每页文章数
    readingTime: boolean; // 是否显示阅读时间
    wordCount: boolean;   // 是否显示字数统计
    tags: boolean;        // 是否显示标签
    linkedMentions: {     // 链接提及
      enabled: boolean;   // 是否启用
      linkedMentionsCompact: boolean; // 紧凑模式
    };
    graphView: {          // 图谱视图
      enabled: boolean;   // 是否启用
      showInSidebar: boolean; // 在侧边栏显示
      showInCommandPalette: boolean; // 在命令面板显示
      maxNodes: number;   // 最大节点数
      showOrphanedPosts: boolean; // 显示孤立文章
    };
    postNavigation: boolean; // 文章导航
    showPostCardCoverImages: "all" | "featured" | "home" | "posts" | "featured-and-posts" | "none"; // 文章卡片封面图片显示
    postCardAspectRatio: AspectRatio; // 文章卡片宽高比
    customPostCardAspectRatio?: string; // 自定义文章卡片宽高比
    comments: {           // 评论系统
      enabled: boolean;   // 是否启用
      provider: string;   // 提供商
      repo: string;       // 仓库
      repoId: string;     // 仓库ID
      category: string;   // 分类
      categoryId: string; // 分类ID
      mapping: string;    // 映射
      strict: string;     // 严格模式
      reactions: string;  // 反应
      metadata: string;   // 元数据
      inputPosition: string; // 输入框位置
      theme: string;      // 主题
      lang: string;       // 语言
      loading: string;    // 加载状态
    };
  };
  
  // 可选内容类型
  optionalContentTypes: {
    projects: boolean;   // 项目
    docs: boolean;       // 文档
  };
}
```

宽高比类型

```typescript
type AspectRatio = 
  | "16:9"     // 16:9
  | "4:3"      // 4:3
  | "3:2"      // 3:2
  | "og"       // 开放图谱比例
  | "square"   // 正方形
  | "golden"   // 黄金比例
  | "custom";  // 自定义
```

工具函数

SEO 生成

```typescript
// 为文章生成SEO数据
generatePostSEO(post: Post, url: string): SEOData

// 为项目生成SEO数据
generateProjectSEO(project: Project, url: string): SEOData

// 为文档生成SEO数据
generateDocumentationSEO(doc: Documentation, url: string): SEOData

// 为页面生成SEO数据
generatePageSEO(page: Page, url: string): SEOData
```

Markdown 处理

```typescript
// 使用所有插件处理markdown内容
processMarkdown(content: string): {
  excerpt: string;        // 摘要
  wordCount: number;     // 字数统计
  hasMore: boolean;      // 是否有更多内容
  readingTime: ReadingTime; // 阅读时间
  headings: Heading[];   // 标题数组
}

// 计算阅读时间
calculateReadingTime(content: string): ReadingTime

// 生成目录
generateTOC(headings: Heading[]): Heading[]
```

图片优化

```typescript
// 优化文章图片路径
optimizePostImagePath(image: string, slug: string, id?: string): string

// 获取备用开放图谱图片
getFallbackOGImage(): OpenGraphImage

// 处理基于文件夹的图片
processFolderImages(content: string, slug: string): string
```

内部链接处理

```typescript
// 处理维基链接（仅文章）
remarkWikilinks(): Plugin

// 处理标准markdown链接（所有内容类型）
remarkStandardLinks(): Plugin

// 组合内部链接处理
remarkInternalLinks(): Plugin

// 将相对URL映射到站点URL
mapRelativeUrlToSiteUrl(url: string): string
```

主题管理

```typescript
// 获取组件的主题颜色
getGraphThemeColors(): GraphThemeColors

// 更新主题CSS变量
updateThemeCSSVariables(theme: string): Promise<void>

// 更改主题并持久化
changeTheme(theme: string): Promise<void>
```

图谱数据处理

```typescript
// 从文章生成图谱数据
generateGraphData(posts: Post[]): GraphData

// 为本地视图过滤图谱数据
filterGraphDataForPost(graphData: GraphData, postSlug: string): GraphData
```

Mermaid 图表支持

```typescript
// 使用懒加载初始化Mermaid
renderAllDiagrams(): void

// 处理主题更改对图表的影响
handleThemeChange(): void

// 清除图表缓存
clearMermaidCache(): void
```

Obsidian 嵌入处理

```typescript
// 处理Obsidian嵌入语法
remarkObsidianEmbeds(): Plugin

// 支持的嵌入类型：
// - 音频: ![[audio.mp3]]
// - 视频: ![[video.mp4]]
// - YouTube: ![](https://youtube.com/watch?v=ID)
// - PDF: ![[document.pdf]]
// - Twitter: ![](https://twitter.com/user/status/ID)
```

组件属性

PostCard 组件

```typescript
interface PostCardProps {
  post: Post | Project | Documentation; // 文章数据
  eager?: boolean;      // 是否立即加载
  showCoverImage?: boolean; // 是否显示封面图片
  aspectRatio?: AspectRatio; // 宽高比
  customAspectRatio?: string; // 自定义宽高比
}
```

TableOfContents 组件

```typescript
interface TableOfContentsProps {
  headings: Heading[];  // 标题数组
  maxDepth?: number;    // 最大深度
}
```

CommandPalette 组件

```typescript
interface CommandPaletteProps {
  enabled: boolean;     // 是否启用
  shortcut: string;     // 快捷键
  placeholder: string;  // 占位符文本
  search: {            // 搜索范围
    posts: boolean;    // 文章
    pages: boolean;    // 页面
    projects: boolean; // 项目
    docs: boolean;     // 文档
  };
  sections: {          // 面板分区
    quickActions: boolean; // 快捷操作
    pages: boolean;    // 页面
    social: boolean;   // 社交链接
  };
}
```

GraphModal 组件

```typescript
interface GraphModalProps {
  enabled: boolean;     // 是否启用
  maxNodes: number;     // 最大节点数
  showOrphanedPosts: boolean; // 显示孤立文章
}
```

LocalGraph 组件

```typescript
interface LocalGraphProps {
  postSlug: string;     // 文章slug
  enabled: boolean;     // 是否启用
  maxNodes: number;     // 最大节点数
}
```

MermaidDiagram 组件

```typescript
interface MermaidDiagramProps {
  source: string;       // 图表源码
  theme?: string;       // 主题
}
```

ImageWrapper 组件

```typescript
interface ImageWrapperProps {
  src: string;          // 图片源
  alt: string;          // 替代文本
  width?: number;       // 宽度
  height?: number;      // 高度
  loading?: "lazy" | "eager"; // 加载方式
  fetchpriority?: "high" | "low" | "auto"; // 获取优先级
  class?: string;       // CSS类名
}
```

GiscusComments 组件

```typescript
interface GiscusCommentsProps {
  enabled: boolean;     // 是否启用
  repo: string;         // 仓库
  repoId: string;       // 仓库ID
  category: string;     // 分类
  categoryId: string;   // 分类ID
  mapping: string;      // 映射
  strict: string;       // 严格模式
  reactions: string;    // 反应
  metadata: string;     // 元数据
  inputPosition: string; // 输入框位置
  theme: string;        // 主题
  lang: string;         // 语言
  loading: string;      // 加载状态
}
```

类型定义

核心类型

```typescript
interface Heading {
  depth: number;        // 标题深度
  slug: string;         // 锚点slug
  text: string;         // 标题文本
}

interface ReadingTime {
  text: string;         // 阅读时间文本
  minutes: number;      // 分钟数
  time: number;         // 时间（秒）
  words: number;        // 字数
}

interface SEOData {
  title: string;        // 标题
  description: string;  // 描述
  canonical: string;    // 规范URL
  ogImage?: OpenGraphImage; // 开放图谱图片
  ogType: 'website' | 'article'; // 开放图谱类型
  twitterCard: 'summary' | 'summary_large_image'; // Twitter卡片类型
  twitterSite?: string; // Twitter站点
  twitterCreator?: string; // Twitter创建者
}

interface OpenGraphImage {
  url: string;          // 图片URL
  width: number;        // 宽度
  height: number;       // 高度
  alt: string;          // 替代文本
}

interface GraphData {
  nodes: GraphNode[];   // 节点数组
  connections: GraphConnection[]; // 连接数组
}

interface GraphNode {
  id: string;           // 节点ID
  type: "post";         // 节点类型
  title: string;        // 标题
  slug: string;         // slug
  date: string;         // 日期
  connections: number;  // 连接数
}

interface GraphConnection {
  source: string;       // 源节点
  target: string;       // 目标节点
  type: string;         // 连接类型
}

interface GraphThemeColors {
  postFill: string;     // 文章填充色
  postStroke: string;   // 文章描边色
  postText: string;     // 文章文本色
  tagFill: string;      // 标签填充色
  tagStroke: string;    // 标签描边色
  tagText: string;      // 标签文本色
  linkStroke: string;   // 链接描边色
  highlight: string;    // 高亮色
  background: string;   // 背景色
  backgroundSecondary: string; // 次要背景色
}
```

插件类型

```typescript
// 用于markdown处理的Remark插件
type RemarkPlugin = Plugin<[any?], Root>;

// 用于HTML处理的Rehype插件
type RehypePlugin = Plugin<[any?], Root, Root>;
```

错误处理

开发模式

· 优雅降级 - 对缺失图片使用占位符系统
· 详细错误日志 - 提供有用的错误信息
· 继续处理 - 对缺失资源发出警告但继续处理
· 占位符图片 - 自动用于缺失资源

生产模式

· 严格验证 - 对所有必需资源进行验证
· 构建失败 - 对缺失关键资源导致构建失败
· 优化的错误处理 - 最小化性能开销
· 清洁的控制台输出 - 专业部署体验

错误类型

```typescript
interface MissingImageError {
  type: 'missing-image'; // 缺失图片错误
  path: string;         // 图片路径
  source: string;       // 错误来源
  line: number;         // 行号
  fallback: string;     // 备用方案
}

interface MissingTagError {
  type: 'missing-tag';  // 缺失标签错误
  tag: string;          // 标签名
  source: string;       // 错误来源
  line: number;         // 行号
}

interface ConfigurationError {
  type: 'configuration'; // 配置错误
  field: string;        // 字段名
  message: string;      // 错误信息
  suggestion: string;   // 建议
}
```

性能考虑

图片加载

· 懒加载 - 对首屏以下图片使用懒加载
· 立即加载 - 对首屏内容使用立即加载
· WebP格式优先 - 优先使用WebP格式并提供回退方案
· 响应式图片生成 - 生成多种尺寸的图片
· 占位符系统 - 对缺失图片使用占位符

搜索性能

· 防抖搜索输入 - 防止过多查询请求
· 缓存搜索结果 - 对重复查询缓存结果
· Fuse.js模糊搜索 - 集成Fuse.js实现精确搜索
· 虚拟滚动 - 对大型结果集使用虚拟滚动

主题性能

· CSS自定义属性 - 用于动态主题切换
· 主题缓存 - 对图谱组件进行主题缓存
· 懒加载主题 - 对自定义主题使用懒加载
· 优化的颜色计算 - 优化图谱渲染的颜色计算

Mermaid 性能

· 交叉观察器 - 使用懒加载图表
· 图表缓存 - 按源码和主题缓存图表
· 渐进式加载 - 使用骨架屏状态
· 内存管理 - 自动清理防止内存泄漏

图谱性能

· D3力导向模拟 - 使用优化设置
· 节点过滤 - 为本地图谱视图过滤节点
· 事件清理 - 防止内存泄漏
· 高效渲染 - SVG优化渲染

构建过程

资源同步

```typescript
// 支持的媒体类型
const supportedMediaTypes = {
  images: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'tiff', 'tif', 'ico'], // 图片格式
  audio: ['mp3', 'wav', 'ogg', 'm4a', '3gp', 'flac', 'aac'], // 音频格式
  video: ['mp4', 'webm', 'ogv', 'mov', 'mkv', 'avi'], // 视频格式
  documents: ['pdf'] // 文档格式
};
```

RSS 和 Atom 订阅源

· 自动生成 - 在构建过程中自动生成
· 文章过滤 - 生产环境中排除草稿
· 图片支持 - 集成开放图谱支持
· 分类映射 - 从文章标签映射分类
· 缓存头 - 优化性能的缓存设置

部署平台

· Netlify: netlify.toml 包含重定向和构建设置
· Vercel: vercel.json 包含重定向和缓存头
· GitHub Pages: public/redirects.txt 用于重定向

开发工具

脚本命令

```bash
# 开发
pnpm run dev              # 启动开发服务器
pnpm run build            # 生产环境构建
pnpm run check-images     # 检查缺失图片
pnpm run sync-images      # 从内容目录同步图片到公共目录
pnpm run process-aliases  # 处理内容别名
pnpm run generate-deployment-config # 生成部署配置

# 版本管理
pnpm run version          # 获取当前主题版本
```

配置验证

· TypeScript接口 - 所有配置选项的类型定义
· 运行时验证 - 关键设置的运行时验证
· 有用的错误信息 - 提供建议的错误信息
· 默认回退 - 对缺失配置提供默认值

此API参考文档提供了Astro Modular主题所有方面的完整文档，从内容集合到工具函数和组件接口。