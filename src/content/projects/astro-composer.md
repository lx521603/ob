---

title: Astro Composer
description: 一个 Obsidian 插件，通过自动化文件重命名、笔记属性管理和内部链接转换，轻松创建和管理 Astro 博客文章。
date: 2025-08-20
categories:

· Obsidian
· Astro
· 插件
  repositoryUrl:
  projectUrl: https://github.com/davidvkimball/obsidian-astro-composer
  status: in-progress
  image: "[[attachments/rock.png]]"
  imageAlt: 灰色岩石墙面
  hideCoverImage: false
  hideTOC: false
  draft: false
  featured: true
  aliases:
· obsidian-astro-composer
· obsidian-astro-编辑器

---

项目概述

Astro Composer 是一个功能强大的 Obsidian 插件，旨在为 Astro 静态站点简化博客工作流程。它提供自动化文件重命名、文章前置元数据的笔记属性管理，以及 Obsidian 和 Astro 格式之间的无缝内部链接转换。

核心功能

· 新建文章对话框：创建新的 Markdown 文件时自动提示输入标题，生成烤肉串命名格式的文件名（例如："我的博客文章" → 我的博客文章.md）
· 属性标准化：更新笔记属性以匹配可自定义的模板，同时保留现有的前置元数据值
· 草稿管理：可选择为草稿文件添加下划线前缀，使其在 Astro 构建时隐藏
· 内部链接转换：将 Obsidian 维基链接和 Markdown 内部链接转换为 Astro 友好的 Markdown 链接
· 可配置的工作流程：可自定义文章文件夹、链接基础路径、创建模式、日期格式和排除目录
· 重命名文章命令：通过更新标题属性轻松重命名笔记，自动获得烤肉串命名格式的文件/文件夹更新

技术实现

该插件使用 TypeScript 构建，遵循 Obsidian 插件开发的最佳实践，与 Obsidian 的文件系统无缝集成，为内容创作者提供流畅的用户体验。

使用场景

· 内容创作者：简化和优化创建和管理博客文章的过程
· Astro 开发者：弥合 Obsidian 笔记记录和 Astro 发布之间的差距
· 技术文档作者：保持一致的格式和文件组织
· 博主：专注于内容创作而非文件管理

安装与使用

该插件可以直接安装到 Obsidian 的 .obsidian/plugins/ 目录中，并通过 Obsidian 的设置界面进行配置。它支持基于文件和基于文件夹的文章结构，为不同的 Astro 设置提供灵活性。

项目状态

该项目正在进行中并积极维护。最新版本包含强大的自动化功能和全面的配置选项，适用于各种 Astro 工作流程。

<a href="https://github.com/davidvkimball/obsidian-astro-composer" class="no-styling no-underline" target="_blank"><button class="btn btn-primary w-full">
查看项目
</button></a>