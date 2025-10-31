---
title: 配置指南
description: 完整指南：设置、配置和自定义你的 Astro Modular 博客主题。
category: Astro Modular
order: 1
version: 1.0.0
lastModified: 2025-10-23
image: "[[attachments/astro-modular-configuration.png]]"
imageAlt: Astro Modular 预览，显示不同的主题和布局选项。
hideCoverImage: false
hideTOC: false
draft: false
featured: true
aliases:
  - astro-modular-configuration
---

本综合指南涵盖了设置和自定义模块化 Astro 博客所需的一切，专为希望以最小阻力发布内容的 Obsidian 用户设计。

## 先决条件与设置

你需要：
- **Node.js 18+**
- **pnpm**（推荐）或 npm
- 基本的 Markdown 熟悉度
- Obsidian（可选）

### 安装

```bash
# 安装 pnpm
npm install -g pnpm

# 安装依赖
pnpm install

# 预览
pnpm dev # 或 pnpm preview
# 在 http://localhost:5000 可用

# 构建生产版本
pnpm build
```

配置

核心设置

在 src/config.ts 中配置所有内容。配置按部分组织：

```typescript
export const siteConfig = {
  site: 'https://yourdomain.com',
  title: '你的博客标题',
  description: '你的博客描述',
  author: '你的名字',  // 所有文章的全局作者
  language: 'zh-CN',
}
```

自定义

主题与布局

在配置中选择主题和布局选项：

```typescript
// 全局设置
theme: "oxygen",
customThemeFile: "custom", 
availableThemes: "all", 
fonts: {
  source: "local",
  families: {
    body: "Inter",
    heading: "Inter",
    mono: "JetBrains Mono", 
  },
  display: "swap",
},
layout: {
  contentWidth: "45rem",
},
tableOfContents: {
  enabled: true,        // 所有文章的全局目录开关
  depth: 4,            // 最大标题深度（2-6，其中 2=H2，3=H3 等）
},
footer: {
  enabled: true,
  content: `© 2025 {author}。基于 Astro Modular 构建。`,
  showSocialIconsInFooter: true,
},
hideScrollBar: false,  // 隐藏浏览器滚动条
scrollToTop: true,     // 显示返回顶部按钮
featureButton: "mode", // "mode" | "graph" | "theme" | "none" - 主功能按钮的作用
seo: {
  defaultOgImageAlt: "Astro Modular 标志。",
},
deployment: {
  platform: "netlify", // "netlify" | "vercel" | "github-pages" - 设置重定向配置
},
```

当前主题选项包括 Oxygen、Minimal、Atom、Ayu、Catppuccin、Charcoal、Dracula、Everforest、Flexoki、Gruvbox、macOS、Nord、Obsidian、Rosé Pine、Sky、Solarized、Things 和 Custom。使用 pnpm dev 可以实时查看主题更改。

自定义主题

你可以通过以下方式创建自己的自定义主题：

1. 重命名模板：将 src/themes/custom/custom.ts 重命名为你想要的名称
2. 修改颜色：更新颜色比例以匹配你的设计
3. 更新配置：
   · 在 src/config.ts 中设置 theme: "custom"
   · 设置 customThemeFile: "your-theme-name"（不带 .ts 扩展名的文件名）
4. 测试：使用 pnpm dev 实时查看主题更改

系统会自动找到并使用你的自定义主题！

有关详细说明和最佳实践，请参阅 src/themes/custom/README.md。

字体配置

使用灵活的加载选项自定义标题、正文文本和代码的字体：

```typescript
fonts: {
  source: "local", // "local" 用于自托管字体，"cdn" 用于 Google Fonts CDN
  families: {
    body: "Inter",      // 正文文本字体家族
    heading: "Inter",   // 标题字体家族  
    mono: "JetBrains Mono", // 等宽字体家族
  },
  display: "swap", // 字体加载策略："swap"、"fallback" 或 "optional"
}
```

字体加载选项：

· 本地字体（source: "local"）：自托管字体以获得更好的性能和隐私
· CDN 字体（source: "cdn"）：Google Fonts CDN 提供无限的字体选择

建议的字体组合：

· 默认：heading: "Inter", body: "Inter", mono: "JetBrains Mono"
· 现代：heading: "Montserrat", body: "Lato", mono: "Fira Code"
· 优雅：heading: "Playfair Display", body: "Source Sans Pro", mono: "Source Code Pro"
· 衬线：heading: "Merriweather", body: "Merriweather", mono: "IBM Plex Mono"

支持的字体（本地模式）：

· 无衬线：Inter、Roboto、Open Sans、Lato、Poppins、Source Sans Pro、Nunito、Montserrat
· 衬线：Playfair Display、Merriweather、Lora、Crimson Text、PT Serif、Libre Baskerville
· 等宽：Fira Code、JetBrains Mono、Source Code Pro、IBM Plex Mono、Cascadia Code

CDN 模式优势：

· 任何 Google Font 都能立即使用
· 无需安装包
· 无限的字体选择

本地模式优势：

· 更好的性能（无外部请求）
· 增强的隐私（无跟踪）
· 离线工作
· 更快的加载时间

系统会优雅地处理不支持的字体，回退到系统字体，确保你的网站永远不会崩溃。

命令面板

命令面板提供即时导航和搜索功能：

```typescript
commandPalette: {
    enabled: true,
    shortcut: "ctrl+K",
    placeholder: "搜索文章",
    search: {
      posts: true,
      pages: false,
      projects: false,
      docs: false,
    },
    sections: {
      quickActions: true,
      pages: true,
      social: true,
    },
    quickActions: {
      enabled: true,        // 启用快速操作部分
      toggleMode: true,     // 显示深色/浅色模式切换
      graphView: true,      // 显示图谱视图按钮
      changeTheme: true,    // 显示主题切换器
    },
}
```

功能：

· 即时搜索：按 Ctrl+K（或你定义的其他快捷键）搜索文章、页面和项目
· 快速操作：主题切换、导航快捷方式
· 可自定义：更改快捷键、占位符文本和启用的部分

个人资料图片

使用可配置的个人资料图片添加个人风格：

```typescript
profilePicture: {
  enabled: true,
  image: "/profile.jpg",        // 图片路径（放在 public/ 目录中）
  alt: "个人资料图片",       // 可访问性的替代文本
  size: "md",                   // "sm" (32px), "md" (48px), 或 "lg" (64px)
  url: "/about",                // 点击时链接的可选 URL
  placement: "footer",          // "footer" 或 "header"
  style: "circle",              // "circle", "square", 或 "none"
}
```

功能：

· 灵活放置：页眉（替换文本标志）或页脚
· 多种样式：圆形（个人资料照片）、方形（标志）、无（横幅）
· 响应式：移动端和桌面端的不同布局
· 主题感知：样式适应所有可用主题

导航配置

自定义网站的导航菜单和社交链接：

```typescript
navigation: {
  showNavigation: true,           // 显示/隐藏主导航
  style: "traditional",           // "minimal" 或 "traditional" 导航样式
  showMobileMenu: true,           // 显示移动菜单切换
  pages: [                        // 导航菜单项
    { title: "文章", url: "/posts" },
    { title: "项目", url: "/projects" },
    { title: "文档", url: "/docs" },
    { title: "关于", url: "/about" },
  ],
  social: [                       // 社交媒体链接
    { title: "GitHub", url: "https://github.com/username", icon: "github" },
    { title: "X", url: "https://x.com/username", icon: "x-twitter" },
  ],
}
```

导航样式：

· 传统：全尺寸文本，居中对齐
· 极简：较小文本，右对齐

首页配置

首页内容由 homeOptions 部分控制：

· 精选文章：显示最新文章或特定精选文章
· 最近文章：显示最近文章，可配置数量
· 项目与文档：显示精选项目和文档
· 首页简介：控制放置或完全禁用

当只启用一种内容类型时，它会获得特殊处理，带有居中的"查看全部"链接。当只显示简介时，它会显示为一个适当的页面，带有 H1 标题和圆角容器样式。

文章选项

在 postOptions 部分配置文章相关功能：

```typescript
postOptions: {
  postsPerPage: 6,
  readingTime: true,
  wordCount: true,
  tableOfContents: true,
  tags: true,
  linkedMentions: {
    enabled: true,
    linkedMentionsCompact: false,
  },
  graphView: {
    enabled: true,
    showInSidebar: true,
    showInCommandPalette: true,  // 在命令面板中显示图谱按钮
    maxNodes: 100,               // 要显示的最大节点数
    showOrphanedPosts: true,     // 显示没有连接的文章
  },
  postNavigation: true,
  showPostCardCoverImages: "featured-and-posts",
  postCardAspectRatio: "og",
  customPostCardAspectRatio: "2.5/1",
  comments: {
    enabled: false,
    provider: "giscus",
    // ... 其他评论设置
  },
}
```

目录：

启用目录是所有文章的全局开关。这与其他内容类型（如页面）不同，后者通过 frontmatter 获得每页的 TOC 开关。

关联提及功能：

· linkedMentions: true - 在页面末尾启用关联提及部分，显示哪些文章引用了当前文章
· linkedMentionsCompact: false - 为关联提及选择详细视图（默认）或紧凑视图

封面图片选项：

· "all" - 在所有文章卡片上显示封面图片
· "featured" - 仅在精选文章部分和精选文章上显示
· "home" - 仅在首页部分（精选和最近）显示
· "posts" - 仅在文章页面、标签页面和文章卡片上显示
· "featured-and-posts" - 在精选文章部分和文章页面/标签卡片上显示（但不在最近文章部分显示）
· "none" - 从不在文章卡片上显示封面图片

注意： 此设置仅影响文章卡片。项目和文档卡片在可用时始终显示封面图片。

文章卡片宽高比：
配置文章卡片封面图片的宽高比：

```typescript
postOptions: {
  postCardAspectRatio: "og", // 默认：OpenGraph 标准
  customPostCardAspectRatio: undefined, // 用于自定义比例
}
```

宽高比选项：

· "og" (1.91:1) - OpenGraph 标准（默认）
· "16:9" (1.78:1) - 标准宽屏
· "4:3" (1.33:1) - 传统
· "3:2" (1.5:1) - 经典摄影
· "square" (1:1) - 方形
· "golden" (1.618:1) - 黄金比例
· "custom" - 使用你自己的比例

自定义宽高比例示例：

```typescript
postOptions: {
  postCardAspectRatio: "custom",
  customPostCardAspectRatio: "2.5/1" // 自定义 2.5:1 比例
}
```

注意：这仅影响文章卡片（列表、首页、标签页面）。单个文章的封面图片保持其原始宽高比。

评论系统

该主题包含一个由 Giscus 驱动的评论系统，使用 GitHub Discussions。以下是设置方法：

启用评论

在你的 src/config.ts 中启用评论：

```typescript
postOptions: {
  comments: {
    enabled: true,  // 启用/禁用评论
    // ... 其他评论设置
  }
}
```

GitHub 设置

1. 在你的仓库中启用 Discussions：
   · 转到你的 GitHub 仓库
   · 点击 Settings → General
   · 滚动到 "Features" 部分
   · 勾选 "Discussions" 并点击 "Set up discussions"
2. 创建讨论分类：
   · 转到仓库中的 Discussions 标签
   · 点击 "New category"
   · 命名为 "General"
   · 将格式设置为 "Announcement"（防止随机用户创建新讨论）
   · 描述："博客文章评论"
3. 获取 Giscus 配置：
   · 访问 giscus.app
   · 输入你的仓库：username/repo-name
   · 选择 "General" 作为讨论分类
   · 复制生成的 Repository ID 和 Category ID
4. 更新你的配置：

```typescript
postOptions: {
  comments: {
    enabled: true,
    provider: "giscus",
    repo: "username/repo-name",        // 你的 GitHub 仓库
    repoId: "R_kgDO...",              // 来自 Giscus 的 Repository ID
    category: "General",               // 讨论分类
    categoryId: "DIC_kwDO...",        // 来自 Giscus 的 Category ID
    mapping: "pathname",               // 文章如何映射到讨论
    strict: "0",                      // 允许在任何文章上评论
    reactions: "1",                   // 启用反应
    metadata: "0",                    // 隐藏讨论元数据
    inputPosition: "bottom",          // 评论输入位置
    theme: "preferred_color_scheme",  // 遵循用户的主题偏好
    lang: "zh-CN",                    // 语言
    loading: "lazy",                  // 懒加载评论
  }
}
```

工作原理

· 每篇博客文章自动创建一个 GitHub 讨论
· 访问者需要 GitHub 账户才能评论
· 评论同时显示在你的博客和 GitHub Discussions 中
· 你通过 GitHub 的界面进行审核
· "Announcement" 格式防止随机讨论创建

审核与控制

· 直接删除评论在 GitHub Discussions 中
· 通过 GitHub 的用户管理阻止用户
· 锁定讨论以防止新评论
· 置顶重要评论到顶部
· 使用 GitHub 的内容策略进行自动审核

隐私考虑

评论是公开可见的，并与用户的 GitHub 个人资料相关联。考虑添加关于评论的隐私政策部分（请参阅包含的隐私政策页面作为参考）。

内容结构

```
src/content/
├── posts/                   # 博客文章
│   ├── attachments/           # 共享的文章图片、音频或其他附件。
│   ├── getting-started.md   # 基于文件的文章
│   └── sample-folder-post/  # 基于文件夹的文章
│       ├── index.md         # 主内容文件
│       ├── hero-image.jpg   # 文章特定资源
│       └── diagram.png
├── pages/                   # 静态页面
│   ├── attachments/           # 共享的页面图片、音频或其他附件。
│   ├── about.md
│   ├── contact.md
│   └── privacy-policy.md
├── special/                 # 特殊页面
│   ├── home.md             # 首页简介内容
│   ├── 404.md              # 404 错误页面
│   ├── projects.md         # 项目索引页面内容
│   └── docs.md             # 文档索引页面内容
├── projects/                # 精选项目
│   ├── attachments/           # 共享的项目图片、音频或其他附件。
│   └── sample-project/      # 基于文件夹的项目
│       ├── index.md
│       └── screenshot.png
├── docs/                    # 文档
│   ├── attachments/           # 共享的文档图片、音频或其他附件。
│   └── sample-guide.md      # 文档文件
└── .obsidian/               # Obsidian 仓库设置
    ├── plugins/             # 已配置的插件
    ├── themes/              # Minimal 主题
    └── snippets/            # 自定义 CSS 片段
```

内容组织

特殊内容集合

特殊索引页面由 src/content/special/ 中的 special 内容集合处理：

· home.md - 首页简介内容
· 404.md - 404 错误页面
· posts.md - 文章索引页面（标题、描述、H1）
· projects.md - 项目索引页面内容
· docs.md - 文档索引页面内容

这些页面具有固定的 URL 和最少的 frontmatter，以防止核心功能意外中断。除了 posts.md 仅使用 frontmatter 字段外，大多数都支持 frontmatter 以下的内容。

可选内容类型

你可以在 src/config.ts 中全局启用/禁用可选内容部分：

```typescript
optionalContentTypes: {
  projects: true, // 启用项目部分
  docs: true,     // 启用文档部分
},
```

禁用时，动态索引页面会重定向到 404，允许你在 src/content/pages/ 中创建静态回退页面（例如，pages/projects.md）。

标签

标签在 Obsidian 和你的博客之间同步，创建：

· 相关文章的标签页面
· 命令面板过滤
· 有组织的导航

草稿

· 开发环境：所有文章可见
· 生产环境：仅发布文章
· 在 frontmatter 中使用 draft: true 隐藏

编写文章

在 src/content/posts/ 中创建文章，使用以下 frontmatter：

```markdown
---
title: "{{title}}"
date: {{date}}
description: ""
tags: []
image: ""
imageAlt: ""
imageOG: false
hideCoverImage: false
targetKeyword: ""
hideTOC: false
draft: true
---

## 从 H2 标题开始

使用带有增强功能的 markdown 编写。

使用 [[wikilinks]] 或 [markdown 链接](/posts/post.md) 连接文章。

> [!note] Obsidian 标注
> 工作方式与 Obsidian 中完全相同！
```

由于文章标题被硬编码为 H1，你的内容应该从 H2 标题开始。

你也可以创建基于文件夹的文章，如此处所示：Sample Folder-Based Post。基本文件名是 index.md，父文件夹文件名用作文章的 slug。

创建页面

关于页面代表了一个你可以轻松复制的标准页面。它的 frontmatter 如下所示：

```markdown
---
title: "{{title}}"
description: ""
hideTOC: false
noIndex: false
---

## 从 H2 标题开始

使用带有增强功能的 markdown 编写。
```

像文章一样，H1 从标题 frontmatter 硬编码，但页面获得一个唯一的 noIndex 属性，用于设置页面是否应在搜索引擎中索引或包含在站点地图中。对于你不想索引的页面（如感谢页面）很有帮助。

其他页面详情

联系页面有一个嵌入其中的可选表单，填写后会转到感谢页面。它预先配置为开箱即用地与 Netlify 配合使用，你只需在项目上启用表单检测。

如果你不想要，可以编辑或删除可选的隐私政策页面。

special/home.md 控制首页简介的内容。向 special/404.md 添加内容将在任何"未找到"页面上显示。

创建项目

在 src/content/projects/ 中创建项目以展示你的工作。项目支持单个文件和基于文件夹的组织：

```markdown
---
title: "{{title}}"
description: "项目描述"
date: {{date}}
categories: ["Web Development", "Open Source"]
repositoryUrl: "https://github.com/username/repo"
projectUrl: "https://your-project.com"
status: "completed"  # "in-progress" 或 "completed"
image: "cover.jpg"
imageAlt: "项目截图"
hideCoverImage: false
hideTOC: false
draft: false
featured: true
---
```

精选标志：启用时在首页显示。

创建文档

在 src/content/docs/ 中创建文档以获取指南和参考：

```markdown
---
title: "{{title}}"
description: "文档描述"
category: "Setup"  # 可选 - 如果缺失则创建"未分类"
order: 1
version: "1.0.0"
lastModified: 2024-01-15
image: "hero.jpg"
imageAlt: "文档截图"
hideCoverImage: false
hideTOC: false
draft: false
featured: true
---
```

按 order 数字在分类中对文档进行排序。使用 featured 在启用时在首页显示。

自动别名和重定向

当你在 Obsidian 中重命名内容类型（默认为文章或页面，但可在设置中配置）时，旧文件名会自动存储为别名。Astro 处理这些别名并创建重定向规则，因此旧 URL 继续工作。你不需要手动添加别名 - 当你使用 Obsidian 的重命名功能时，它们会自动出现。

Obsidian 集成

使用包含的仓库

1. 在 Obsidian 中打开 src/content/
2. 信任作者并启用插件（Astro Composer、Minimal 主题）
3. 开始写作

仓库提供：

· 预配置插件 针对此 Astro 博客优化
· 可调整主题 用于无干扰写作
· 可选 CSS 片段 自定义你的体验
· 自定义热键 用于加速文章创建和发布

阅读指南获取更详细的信息。

要删除 Obsidian，只需删除 .obsidian 文件夹。

关键功能

命令面板

按 Ctrl+K（或自定义热键）进行即时导航、搜索和深色/浅色模式切换。

文章内部链接和连接

· [[文章标题|自定义文本]] - wikilinks（仅文章）
· [文章标题](posts/post-slug.md) - 标准 markdown 链接
· [文章标题](/posts/post-slug) - 相对标准 markdown 链接（这些适用于除页面*之外的所有内容类型）
· 关联提及 自动显示文章连接，带有可折叠界面
· 紧凑或详细视图 关联提及显示选项

<small>*因为标准页面位于 pages 文件夹下，特殊页面位于 special 文件夹下，相对链接不会在 Obsidian 中按预期工作以链接并在你的博客上显示。如果你不关心它在 Obsidian 中工作，你可以做类似 <code>关于</code> 的事情，它将在你的网站上按预期工作。</small>

在内容类型之间链接

Wikilinks 对文章无缝工作，但仅限于文章集合。对于链接到其他内容类型（页面、项目、文档），请使用标准 markdown 链接：

· 文章：[[file-name|文章标题]]、[文章标题](posts/file-name.md) 或 [文章标题](/posts/file-name)
· 页面：[页面标题](file-name.md)（例如，[关于](pages/about.md)
· 项目：[项目名称](projects/file-name.md)
· 文档：[文档](docs/file-name.md)

为什么有这个限制？ Wikilinks 为简单起见假设是文章，并保持无缝的 Obsidian 体验。标准 markdown 链接提供对你链接到哪种内容类型的显式控制，防止在多个内容类型可能具有相似标题时混淆。

图片优化

· WebP 转换 以提高性能
· 响应式网格 用于多张图片
· 内置懒加载

SEO 和性能

· 自动站点地图 和 RSS 源
· Open Graph 元标签
· 针对性能和可访问性优化
· 静态生成

部署

```bash
pnpm build
```

生成一个静态站点，准备好用于任何具有自动优化的托管平台。

故障排除

常见问题：

· 图片路径：检查 src/content/posts/attachments/ 中的文件夹结构
· Wikilinks：确保目标文章存在且已发布
· 构建错误：验证 frontmatter 语法

下一步

1. 自定义 src/config.ts
2. 编写 你的第一篇文章
3. 探索 格式化参考
4. 设置 Obsidian 仓库工作流
5. 部署 并分享

你的模块化 Astro 博客已准备好迎接你的内容！

```
```