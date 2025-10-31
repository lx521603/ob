---

title: SourceTree 与 Git 设置指南
description: 为您的 Astro Modular 博客设置 SourceTree 和 Git 的完整指南
category: 可选软件
order: 2
version: 1.0.0
lastModified: 2024-01-15
image: "[[sourcetree.png]]"
imageAlt: 蓝色背景的 SourceTree 徽标
hideCoverImage: false
hideTOC: false
draft: false
featured: false
aliases:

· sourcetree-and-git
· sourcetree-和-git

---

本综合指南将引导您为 Astro Modular 博客设置 SourceTree 和 Git，实现无缝的版本控制和部署工作流程。

前提条件

开始之前，请确保您拥有：

· GitHub 账户
· 准备好的 Astro Modular 博客项目
· 基本的版本控制概念理解

步骤 1：安装 Git

Windows 系统

1. 从 git-scm.com 下载 Git
2. 使用默认设置运行安装程序
3. 验证安装：打开命令提示符并运行 git --version

macOS 系统

1. 安装 Xcode 命令行工具：xcode-select --install
2. 或从 git-scm.com 下载
3. 验证安装：打开终端并运行 git --version

Linux 系统

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# CentOS/RHEL
sudo yum install git

# 验证安装
git --version
```

步骤 2：配置 Git

设置您的 Git 身份信息：

```bash
git config --global user.name "您的姓名"
git config --global user.email "您的邮箱@example.com"
```

可选：为 GitHub 设置 SSH 密钥

1. 生成 SSH 密钥：ssh-keygen -t ed25519 -C "您的邮箱@example.com"
2. 添加到 SSH 代理：ssh-add ~/.ssh/id_ed25519
3. 复制公钥：cat ~/.ssh/id_ed25519.pub
4. 添加到 GitHub：设置 → SSH 和 GPG 密钥 → 新建 SSH 密钥

步骤 3：安装 SourceTree

下载和安装

1. 访问 sourcetreeapp.com
2. 下载免费版本
3. 使用默认设置安装
4. 使用您的 Atlassian 账户登录（免费）

首次启动设置

1. 选择"我还没有仓库"
2. 连接您的 GitHub 账户
3. 授权 SourceTree 访问您的仓库

步骤 4：初始化博客仓库

选项 A：在 GitHub 上创建新仓库

1. 访问 GitHub.com → 新建仓库
2. 命名为 您的博客名称
3. 选择公开或私有
4. 不要初始化 README（我们将在本地进行）

选项 B：使用现有仓库

如果您已有仓库，请跳至步骤 5。

步骤 5：在 SourceTree 中克隆仓库

1. 打开 SourceTree
2. 点击"克隆"按钮
3. 输入您的仓库 URL：
   · HTTPS：https://github.com/用户名/您的博客名称.git
   · SSH：git@github.com:用户名/您的博客名称.git
4. 选择项目的本地文件夹
5. 点击"克隆"

步骤 6：设置 Astro 博客

复制博客文件

1. 将所有 Astro Modular 文件复制到克隆的仓库文件夹中
2. 确保您拥有：
   · 包含内容的 src/ 目录
   · package.json 和 pnpm-lock.yaml
   · astro.config.mjs
   · 所有其他必要文件

初始提交

1. 在 SourceTree 中，您将看到所有文件列为"未暂存文件"
2. 点击"全部暂存"将所有文件添加到暂存区
3. 编写提交信息："初始博客设置"
4. 点击"提交"
5. 点击"推送"上传到 GitHub

步骤 7：配置部署

使用 Netlify

1. 访问 netlify.com
2. 连接您的 GitHub 账户
3. 选择您的博客仓库
4. 构建设置：
   · 构建命令：pnpm run build
   · 发布目录：dist
5. 部署！

使用 Vercel

1. 访问 vercel.com
2. 导入您的 GitHub 仓库
3. 框架预设：Astro
4. 部署！

步骤 8：使用 SourceTree 的日常工作流程

进行更改

1. 在 Obsidian 或您的编辑器中编辑博客内容
2. 打开 SourceTree
3. 在"工作目录"选项卡中查看更改
4. 暂存特定文件或"全部暂存"
5. 编写描述性的提交信息
6. 点击"提交"
7. 点击"推送"与 GitHub 同步

最佳实践

· 频繁提交：小而专注的提交更好
· 编写清晰的信息："添加关于 X 的新博客文章"而不是"更新文件"
· 推送前先拉取：始终先拉取最新更改
· 使用分支：为主要更改创建功能分支

步骤 9：高级 Git 工作流程

创建分支

1. 在 SourceTree 中，点击"分支" → "新建分支"
2. 描述性命名：feature/新主题 或 fix/拼写修正
3. 进行您的更改
4. 提交并推送分支
5. 在 GitHub 上创建拉取请求

合并更改

1. 切换到主分支
2. 拉取最新更改
3. 合并您的功能分支
4. 删除功能分支

解决冲突

1. SourceTree 将显示冲突标记
2. 编辑文件以解决冲突
3. 暂存已解决的文件
4. 提交解决方案

步骤 10：备份和恢复

定期备份

· 您的代码自动在 GitHub 上备份
· 考虑对您的内容进行额外备份
· 使用 Git 的内置历史记录进行恢复

从错误中恢复

· 撤销上次提交：右键点击提交 → "将当前分支重置到此提交"
· 恢复更改：右键点击文件 → "丢弃更改"
· 查看历史记录：点击任何提交查看更改内容

常见问题故障排除

身份验证问题

· HTTPS：使用个人访问令牌代替密码
· SSH：确保 SSH 密钥已添加到 GitHub 账户

合并冲突

· 不要惊慌！冲突是正常的
· 仔细阅读冲突标记
· 如有疑问，请寻求帮助

大文件问题

· Git 不适用于大型二进制文件
· 对图片和视频使用 Git LFS
· 或将资源存储在外部（CDN 等）

仓库大小

· 使用 .gitignore 排除不必要的文件
· 如果仓库变得太大，清理历史记录

与 Obsidian 集成

Obsidian 中的 Git 集成

1. 安装 "Obsidian Git" 插件
2. 配置自动提交设置
3. 您的 Obsidian 仓库更改将自动提交

工作流程

1. 在 Obsidian 中写作
2. Obsidian Git 自动提交更改
3. SourceTree 拉取并推送到 GitHub
4. Netlify/Vercel 自动部署

后续步骤

设置好 Git 和 SourceTree 后：

1. 探索 SourceTree 功能：学习储藏、拣选和变基
2. 设置 CI/CD：自动化您的部署流水线
3. 协作：邀请他人为您的博客做出贡献
4. 备份策略：实施额外的备份解决方案

获取帮助

· SourceTree 文档：confluence.atlassian.com
· Git 文档：git-scm.com/doc
· GitHub 帮助：docs.github.com

记住：Git 和 SourceTree 是强大的工具，将使管理您的博客变得更加容易。花时间学习基础知识，不要犹豫先在测试仓库中进行实验！