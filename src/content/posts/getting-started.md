---
title: 快速开始
date: 2025-09-06
description: Astro Modular 快速开始指南 - 几分钟内让您的博客运行起来。
tags:
 - tutorial
 - setup
 - quick-start
 - astro
 - blog
image: "[[attachments/sunset.jpg]]"
imageAlt: 日落天际线。
imageOG: true
hideCoverImage: false
hideTOC: false
targetKeyword: astro blog quick start
draft: false
---

欢迎使用 Astro Modular！本快速开始指南将在几分钟内让您的博客运行起来。请选择您偏好的工作流程。

前提条件与安装

您需要：

· Node.js 18+
· pnpm（推荐）或 npm

快速设置

```bash
# 安装 pnpm
npm install -g pnpm

# 安装依赖
pnpm install

# 预览
pnpm dev # 或 pnpm preview
# 可在 http://localhost:5000 访问

# 生产环境构建
pnpm build
```

选择您的工作流程

使用 Obsidian？

完美！Astro Modular 专为 Obsidian 用户设计。

快速开始：

1. 作为知识库打开文件夹：在 Obsidian 中导航到 src/content/
2. 信任作者并启用预配置的插件
3. 使用 Astro Modular Settings 向导配置您的主题和偏好设置
4. 使用包含的模板和快捷键开始写作

您将获得：

· 无缝发布：在 Obsidian 中写作，通过 git 发布到您的博客
· 多功能内部链接支持：[[维基链接]] 和 markdown 链接完美工作
· Obsidian 特定功能：标注、高亮等显示效果精美
· 预配置插件和快捷键：全部针对博客优化

下一步：

· 阅读 Obsidian 知识库指南 获取详细设置
· 使用 Astro Modular Settings 插件自定义您的主题和偏好设置
· 使用包含的模板开始撰写您的第一篇文章

不使用 Obsidian？

没问题！您仍然可以使用任何编辑器与 Astro Modular。

快速开始：

1. 编辑 src/config.ts 自定义您的站点设置
2. 创建内容 在 src/content/posts/ 中使用标准 markdown
3. 部署 当准备好时

下一步：

· 阅读 完整设置指南 获取详细配置
· 探索 格式化参考 了解 markdown 功能
· 在 src/config.ts 中自定义您的主题和布局

基本配置

在 src/config.ts 中更新这些核心设置：

```typescript
export const siteConfig = {
  site: 'https://yourdomain.com',
  title: '您的博客标题',
  description: '您的博客描述',
  author: '您的姓名',
  language: 'zh',
}
```

主要功能

17+ 精美主题

在 Oxygen、Minimal、Nord、Dracula 等主题之间切换。使用 Ctrl+K → "更改主题" 进行即时切换。

命令面板

按 Ctrl+K 进行即时导航、搜索和主题切换。

响应式与快速

针对性能优化，具有自动图片优化和懒加载。

智能链接

· 维基链接（Obsidian 用户）：[[文章标题]]
· 标准链接（所有用户）：[文章标题](posts/文章-slug)

内容类型

· 文章 - 带有标签和链接提及的博客文章
· 页面 - 静态页面，如关于、联系
· 项目 - 作品集项目和展示
· 文档 - 指南和参考

下一步

对于 Obsidian 用户：

1. 设置知识库 - 在 Obsidian 中打开 src/content/
2. 使用插件配置 - 使用 Astro Modular Settings
3. 开始写作 - 使用包含的模板和快捷键
4. 阅读知识库指南 - Obsidian 知识库指南

对于非 Obsidian 用户：

1. 自定义您的站点 - 编辑 src/config.ts
2. 阅读完整指南 - 完整设置指南
3. 探索功能 - 格式化参考
4. 开始写作 - 创建您的第一篇文章

需要帮助？

· 完整设置指南：配置文档
· Obsidian 知识库指南：Obsidian 知识库指南
· 格式化参考：格式化参考

您的模块化 Astro 博客已准备就绪！