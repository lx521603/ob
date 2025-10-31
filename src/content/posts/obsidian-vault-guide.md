---
title: Obsidian 知识库使用指南
date: 2025-09-10
description: 如何使用包含的 Astro Suite Obsidian 知识库。
tags:
  - 教程
  - 设置
  - 配置
  - astro
  - obsidian
image: "[[attachments/astro-composer-suite-for-obsidian.png]]"
imageAlt: Astro 和 Obsidian 徽标垂直堆叠，中间有一个"+"号。
imageOG: true
hideCoverImage: true
hideTOC: false
targetKeyword: astro suite obsidian vault
draft: false
aliases:
  - astro-suite-vault-modular-guide
  - astro-suite-obsidian-vault-guide-astro-modular
---
![Astro 和 Obsidian 徽标垂直堆叠，中间有一个"+"号。](/posts/attachments/astro-composer-suite-for-obsidian.png)

## 概述

所有插件、快捷键绑定和主题都可以根据您的喜好进行自定义，但以下是默认启用的配置。

## 设计理念

1. 即插即用的 Astro 博客体验
2. 强调可定制性和模块化
3. 后端和前端的视觉一致性

## 主题

为了开箱即用的自定义体验，使用了 [Minimal](https://minimal.guide/home) 主题。它采用低调的配色方案，并提供高对比度选项。

默认还安装了 [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings)、[Hider](https://github.com/kepano/obsidian-hider) 和 [Style Settings](https://obsidian.md/plugins?id=obsidian-style-settings) 社区插件，让您完全控制使用体验。

## CSS 代码片段

`astro-modular-styling` 为嵌入的 HTML 元素提供与主题在前端处理方式相似的外观，例如表单和按钮样式。

> [!tip]- 提示：可选的 CSS 代码片段
> 一个名为 `custom-draggable-top-area.css` 的可选自定义 CSS 代码片段，在窗口框架隐藏且没有标签栏时，使移动窗口更加容易。还有针对 Windows 和 Mac 的特定版本，具有操作系统特定的 UI 偏移量，或者使用基础版本无偏移。所有这些都可以在"设置 > 外观 > CSS 代码片段"中配置。这些在移动设备上都不生效。
> 
> 包含 `hide-properties-heading-and-add-properties-button.css`，如果您更愿意使用 CSS 代码片段而不是本文后面提到的 Style Settings 插件。
> 
> `hide-tabs-icon-mobile.css` 移除 Obsidian 移动版中的标签图标。如果您启用 Disable Tabs 插件，可能也想启用此代码片段。
> 
> `hide-longpress-flair-mobile.css` 和 `hide-header-title-mobile.css` 也都与简化移动界面相关。启用这些代码片段中的任何一个来隐藏这些元素。

## 重要快捷键

以下是为本主题特别设置的一些重要快捷键指南：
- 切换左侧面板：`CTRL + ALT + Z`
- 切换右侧面板：`CTRL + ALT + X`
- 切换标签栏：`CTRL + ALT + S`
- 向后导航：`ALT + ←`
- 向前导航：`ALT + →`
- 打开主页：`CTRL + M`
- 添加新属性：`CTRL + ;`
- 切换当前笔记的属性可见性：`CTRL + ALT + P`
- 切换阅读视图：`CTRL + E`
- 切换禅模式：`CTRL + SHIFT + Z`
- 插入图片：`CTRL + '`
- 插入图片到属性：`CTRL + SHIFT + '`
- 插入标注：`CTRL + SHIFT + C`
- 重命名当前笔记：`CTRL + R`
- 打开 SEO 审核：`CTRL + SHIFT + A`
- 启动终端：`CTRL + SHIFT + D`
- 打开 Astro 配置文件：`CTRL + SHIFT + ,`
- Git：提交并同步 `CTRL + SHIFT + S`

如果您在 Mac 上，`CTRL` = `CMD`。

## 插件

禁用的默认核心插件：
- Canvas
- 每日笔记
- 笔记组合器
- 页面预览
- 模板
- 同步

启用的社区插件：
- Alias Filename History
- Astro Composer
- Default New Tab Page
- Git
- Hider
- Homepage
- Image Inserter
- Minimal Theme Settings
- Paste image into property
- Paste image rename
- Property Over Filename
- ProZen
- SEO
- Shell commands
- Style Settings
- Title-Only Tab

### Astro Composer 和 Alias Filename History

方便轻松创建新笔记作为 Astro 博客文章、页面、项目或文档。只需使用 `CTRL + N` 创建新笔记，输入标题大小写或包含特殊字符的标题，生成的笔记或文件夹名称将是标题的烤肉串命名版本，不包含特殊字符。这非常适合自动化内容页面 slug。

您还可以定义和设置默认属性，这些属性可以自动生成或为任何打开的笔记手动设置。"标准化属性"命令可以帮助设置或重新组织任何缺失的属性或标签，特别是如果您以后更新属性模板。

与其他主题不同，您可以使用维基链接或标准 Markdown 链接，***无需***使用"为 Astro 转换内部链接"命令将其转换为 Astro 的内部链接。本主题支持任何在 Obsidian 中有效的内部链接。

您还可以通过右键单击标题并选择"复制标题链接"轻松获取指向标题的链接。

`CTRL + R` 允许您轻松重命名博客文章，笔记文件名（或父文件夹）会自动更新为烤肉串命名格式。发生这种情况时，旧文件名将通过 Alias Filename History 插件默认存储为别名。这意味着旧文章或页面 URL 的重定向将转到当前文章的 slug，这在 Astro 中配置。

您可以调整许多设置，包括用于忽略名称的正则表达式（如 `Untitled` 或 `_` 前缀）、存储名称的超时时间（秒），或者如果您使用基于文件夹的文章选项，还可以查找父文件夹名称的更改。

### Homepage 和 Default New Tab Page

这两个插件协同工作，使您的默认屏幕是一个 `.base` 文件，该文件是您所有博客文章的目录，按倒序排列。您可以根据自己的喜好自定义笔记属性和视图。

Base 嵌套在一个名为 `_bases` 的文件夹中，因为 Astro 会忽略带有下划线前缀的文件和文件夹，让您可以在 Obsidian 中使用它而不会为实时站点处理它。

我称之为"Home Base"。

### Minimal Theme Settings、Hider 和 Style Settings

如前所述，这些插件让您保持专注和无干扰，同时允许自定义您的体验。

如果您希望隐藏任何面板，可以使用 `CTRL + ALT + Z` 隐藏左侧面板，`CTRL + ALT + X` 隐藏右侧面板，或 `CTRL + ALT + S` 隐藏标签栏。再次按下将重新显示。

在 Style Settings 中，唯一修改的选项是隐藏 Properties 标题和"添加属性"按钮。如果您愿意，可以禁用此插件并使用 `hide-properties-heading-and-add-properties-button.css` CSS 代码片段。

### Paste Image Rename 和 Paste Image Into Property

快速拖放图像文件或直接从剪贴板粘贴，并给它们提供烤肉串命名、SEO 友好的名称。两者都可以直接在笔记内容或属性中使用。

### Image Inserter

只需几次击键即可轻松从 Unsplash 或其他来源拉取图像。只需使用 `CTRL + '` 插入图像 - 并通过 Paste Image Rename 插件立即为其设置 SEO 友好的文件名。使用 `CTRL + SHIFT + '` 插入到指定属性中。

### Title-Only Tab

从 `title` 属性中提取，而不是使用文件名作为任何标签。

### Property Over Filename

在链接或搜索笔记时，您可以使用 `title` 属性作为其主要标识符，这在视觉上和语义上对于内容之间的链接和搜索更有帮助，因为笔记文件名是文章/页面的烤肉串命名 slug 而不是标题。

当您链接到另一个笔记时，其 `title` 会自动设置为超链接文本，但您可以在插入后轻松更改它。

### ProZen

禅模式提供了另一个快速选项来专注于写作。按下 `CTRL + SHIFT + Z` 将进入禅模式：自动全屏，除内容外的所有元素都被移除。然后使用 `ESC` 退出。

如果您不喜欢使用 Hider 移除 UI，并希望根据需要一次性切换所有 UI，此插件是一个很好的替代方案。或者，您可以使用 Minimal 主题中包含的专注模式。

### SEO

获取对您内容的快速审核，用于搜索引擎排名和 AI 解析。您可以快速查看整个知识库的快照，或深入查看特定文章。

### Shell commands 和 Commander

Shell commands 帮助我们快速打开两个东西：终端和 Astro 的 `config.ts` 文件。

要快速打开终端，请使用 `Start Terminal` 命令。它已针对 Windows、macOS 和 Linux 修改，在相关目录中启动终端，以便您可以轻松执行标准包管理器命令，如 `npm` 或 `pnpm`。可以使用 `CTRL + SHIFT + D` 激活。

要快速打开您的 `config.ts` 文件，只需使用 `Astro Configuration` 命令。您也可以按 `CTRL + SHIFT + ,` 用默认应用程序打开它。

Commander 帮助我们将每个这些操作的按钮放置在文件资源管理器 UI 上。

> [!warning]- Linux 用户警告
> 在 Linux 上，没有通用的方法来打开默认终端。此外，广泛使用的 Flatpak（通过 Flathub）采用了非平凡的沙盒技术，这带来了进一步的挑战。为了解决这个问题，两个命令都使用 FreeDesktop 的 `xdg-open` 来访问配置文件并启动文件管理器。大多数文件管理器都提供类似"在终端中打开"的右键选项，因此如果您使用 Linux 发行版，可以依赖该功能。

### BRAT（临时）

仅在 Alias Filename History、Astro Composer、Disable Tabs、SEO 和 Property Over Filename 插件在 Obsidian 插件目录中可用之前，临时用于加载它们。此知识库的未来版本将移除 BRAT，转而使用官方版本。

### Git

使用 [Git](https://obsidian.md/plugins?id=obsidian-git) 插件，您可以使用 `CTRL + SHIFT + S` 轻松发布到您的 Astro 博客，而无需离开 Obsidian。只需启用插件并使用 git 配置即可开启。

### Disable Tabs

默认关闭，但如果启用，打开任何新标签页只会替换当前标签页。当您隐藏标签栏且不想要多个标签页时特别有用。如果您启用此插件，您可能希望使用上面提到的那些可选 CSS 代码片段来使窗口管理更容易。

当与 Homepage 和 New Default Tab 插件结合使用时，`CTRL + T` 和 `CTRL + M` 基本上做同样的事情。
```