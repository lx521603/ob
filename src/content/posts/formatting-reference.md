---
title: 格式化参考
date: 2025-09-08
description: 探索此博客主题中可用的所有 Markdown、扩展 Markdown 和其他嵌入功能。
tags:
 - markdown
 - formatting
 - tutorial
 - reference
 - meta
 - blog
image: "[[attachments/mountains.png]]"
imageAlt: 山脉和水域。
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword:
draft: false
---

本文展示了 Astro Modular 中可用的所有 Markdown、扩展 Markdown 和其他嵌入功能。请将此作为参考指南和功能展示。

基础格式化

文本强调

· 粗体文本 使用 **粗体** 或 __粗体__
· 斜体文本 使用 *斜体* 或 _斜体_
· 粗体和斜体 使用 ***文本***
· ~~删除线~~ 使用 ~~文本~~
· ==高亮文本== 使用 ==文本==
· 行内代码 使用反引号

标题

标题 1

标题 2

标题 3

标题 4

标题 5

标题 6

```markdown
# 标题 1
## 标题 2
### 标题 3
#### 标题 4
##### 标题 5
###### 标题 6
```

标注和提示

我们的主题支持 Obsidian 风格的标注，带有适当的图标和样式。每种标注类型都有其自己的配色方案和匹配的 Lucide 图标。

基础标注

[!note] 注意
这是一个注意标注。用于读者应该了解的一般信息。

[!tip] 提示
这是一个提示标注。非常适合有用的建议和最佳实践。

[!important] 重要
这是一个重要标注。用于突出显示关键信息。

[!warning] 警告
这是一个警告标注。用于提醒读者注意潜在问题。

[!caution] 谨慎
这是一个谨慎标注。用于危险或有风险的情况。

自定义标题

[!note] 自定义注意标题
您可以通过在标注类型后添加文本来自定义任何标注的标题。

[!tip] 专业提示
自定义标题帮助您为标注提供更多上下文。

可折叠标注

您可以通过在标注类型后添加 +（默认展开）或 -（默认折叠）来使标注可折叠：

[!note]+ 默认展开
此标注开始时展开，可以通过点击切换按钮或标题来折叠。

[!warning]- 默认折叠
此标注开始时折叠，可以通过点击切换按钮或标题来展开。

[!tip]+ 带自定义标题的可折叠标注
您可以将可折叠功能与自定义标题结合使用，以更好地控制内容组织。

扩展标注类型

[!info] 信息
信息标注提供额外的上下文或详细信息。

[!success] 成功
成功标注突出显示积极结果或成就。

[!question] 问题
问题标注可用于提出问题或突出显示不确定的领域。

[!example] 示例
示例标注非常适合展示代码示例或演示。

[!quote] 引用
引用标注可用于突出显示重要引用或参考文献。

媒体内容

图片

带标题的单张图片

/posts/attachments/mountains.png
照片由 Antoine Rault 拍摄，发布于 Unsplash

多图片布局

此主题根据图片数量自动将连续的图片排列在响应式网格布局中。图片可以放置在一起，中间没有空行，以创建这些布局。

两张图片并排

https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop

三张图片排成一行

https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop

四张图片排成一行

https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=800&h=600&fit=crop

如何使用多图片/画廊

只需将多张图片放在一起，中间没有空行：

```markdown
![图片 1](image1.jpg)
![图片 2](image2.jpg)
![图片 3](image3.jpg)
```

在移动设备上，所有布局都会切换到单列以获得更好的可读性。

视频文件

![[attachments/video.mp4|滴眼药水视频]]

视频文件嵌入为 HTML5 视频播放器，带有控件和响应式设计。

YouTube 视频

https://www.youtube.com/watch?v=ZhizarvwLnU

YouTube 视频自动嵌入，具有响应式设计和优化设置。

音频文件

![[attachments/sound.wav|sound.wav]]

音频文件嵌入为 HTML5 音频播放器，带有控件和文件名显示。

PDF 文档

![[attachments/document.pdf|document.pdf]]

PDF 嵌入为内联查看器，带有下载链接。

使用 ![[attachments/document.pdf#page=3]] 选择要显示的特定 PDF 页面。

Twitter/X 帖子

https://x.com/davidvkimball/status/1933196479801536736

Twitter 帖子嵌入时具有主题感知样式，与您网站的亮色/暗色模式匹配。

按钮

这些按钮使用您现有的调色板，并完美适应亮色/暗色主题。如果您愿意，可以将它们包装在内部或外部链接中：

<div class="btn-group my-8">
  <a href="https://google.com" class="no-styling no-underline" target="_blank"><button class="btn btn-primary">主要操作</button></a>
  <a href="https://google.com" class="no-styling no-underline" target="_blank"><button class="btn btn-secondary">次要</button></a>
    <a href="https://google.com" class="no-styling no-underline" target="_blank"><button class="btn btn-outline">轮廓</button></a>
      <a href="https://google.com" class="no-styling no-underline" target="_blank"><button class="btn btn-ghost">微妙</button></a>
</div>```html
<div class="btn-group-center my-8">
  <a href="https://google.com" class="no-styling no-underline" target="_blank"><button class="btn btn-primary">主要操作</button></a>
  <a href="https://google.com" class="no-styling no-underline" target="_blank"><button class="btn btn-secondary">次要</button></a>
    <a href="https://google.com" class="no-styling no-underline" target="_blank"><button class="btn btn-outline">轮廓</button></a>
      <a href="https://google.com" class="no-styling no-underline" target="_blank"><button class="btn btn-ghost">微妙</button></a>
</div>
```

列表

无序列表

· 第一项
· 第二项
  · 嵌套项
  · 另一个嵌套项
    · 深层嵌套项
· 第三项

有序列表

1. 第一步
2. 第二步
   1. 子步骤 A
   2. 子步骤 B
      1. 子子步骤
3. 第三步

任务列表

· 已完成任务
· 未完成任务
· 另一个已完成任务
  · 嵌套未完成任务
  · 嵌套已完成任务
· 最终未完成任务

链接和引用

外部链接

这是一个外部链接。

内部链接

您可以使用双括号（维基链接）或标准 markdown 创建内部链接。

例如：[[快速开始|快速开始]] 或 Astro Suite Obsidian 知识库指南 (Astro Modular)。

```markdown
例如：[[快速开始|快速开始]] 或 [Astro Suite 知识库 (Modular) 指南](astro-suite-vault-modular-guide)。
```

这是一个带锚点的内部链接：[[sample-folder-based-post/index#文件夹方法的优势|文件夹方法的优势]]

这是一个相对链接：Mermaid 图表测试

引用链接

这是一个[引用链接][1]，这是另一个[引用链接][markdown]。

[1]: https://example.com
[markdown]: https://daringfireball.net/projects/markdown/

链接图片

/posts/attachments/mountains.png

```
[![山脉](/posts/attachments/mountains.png)](https://obsidian.md)
```

数学符号

此主题包含全面的 LaTeX 数学支持，使用 KaTeX 进行快速、客户端渲染。所有数学在亮色和暗色主题中都能无缝工作。

行内数学

使用单美元符号表示行内数学：$E = mc^2$ 或 $\int_0^{2\pi} d\theta x+e^{-i\theta}$。

显示数学

使用双美元符号表示居中对齐的显示数学：

\begin{vmatrix}a & b\\
c & d
\end{vmatrix}=ad-bc

f(x) = x^2 + 3x + 2

常见数学符号

分数和上标

· 分数：$\frac{a}{b}$, $\frac{x^2 + 1}{x - 1}$
· 上标：$x^2$, $e^{i\pi} + 1 = 0$
· 下标：$x_1$, $H_2O$

希腊字母

· $\alpha, \beta, \gamma, \delta, \epsilon, \theta, \lambda, \mu, \pi, \sigma, \phi, \omega$
· $\Gamma, \Delta, \Theta, \Lambda, \Pi, \Sigma, \Phi, \Omega$

数学符号

· 求和：$\sum_{i=1}^{n} x_i$
· 乘积：$\prod_{i=1}^{n} x_i$
· 积分：$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$
· 极限：$\lim_{x \to 0} \frac{\sin x}{x} = 1$

矩阵和向量

\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix}

复杂方程

\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}

i\hbar\frac{\partial}{\partial t}\Psi(\vec{r},t) = \hat{H}\Psi(\vec{r},t)

标注中的数学

数学在标注中完美工作：

[!note] 数学证明
勾股定理指出，对于直角三角形：

a^2 + b^2 = c^2

其中 $c$ 是斜边，$a$ 和 $b$ 是其他两条边。

[!tip] 分部积分法
分部积分法的公式是：

\int u \, dv = uv - \int v \, du

这对于涉及函数乘积的积分特别有用。

高级数学排版

对齐方程

\begin{align}
f(x) &= ax^2 + bx + c \\
f'(x) &= 2ax + b \\
f''(x) &= 2a
\end{align}

分段函数

f(x) = \begin{cases}
x^2 & \text{如果 } x \geq 0 \\
-x^2 & \text{如果 } x < 0
\end{cases}

集合符号

· 自然数：$\mathbb{N} = {1, 2, 3, \ldots}$
· 实数：$\mathbb{R}$
· 复数：$\mathbb{C}$
· 集合并：$A \cup B$
· 集合交：$A \cap B$
· 子集：$A \subseteq B$

带文本的数学

您可以无缝地将数学与常规文本混合。例如，二次公式是 $x = \frac{1}{2}$，这给出了任何二次方程 $ax^2 + bx + c = 0$ 的根。

Obsidian 兼容性

所有数学符号在 Obsidian 和您发布的博客中工作方式相同：

· 行内数学：$...$ 语法
· 显示数学：$$...$$ 语法
· LaTeX 命令：完全支持标准 LaTeX 数学命令
· 希腊字母：使用 \alpha, \beta 等
· 符号：使用 \sum, \int, \infty 等

代码块

行内代码

使用 const variable = 'value' 表示行内代码片段。

JavaScript

```javascript
function greetUser(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to our blog, ${name}`;
}

const user = "Developer";
greetUser(user);
```

Python

```python
def calculate_fibonacci(n):
    """计算第 n 个斐波那契数。"""
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# 示例用法
for i in range(10):
    print(f"F({i}) = {calculate_fibonacci(i)}")
```

CSS

```css
.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  color: white;
  padding: 12px 24px;
  transition: transform 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
}
```

Bash/Shell

```bash
#!/bin/bash
echo "设置开发环境..."

# 安装依赖
npm install

# 启动开发服务器
npm run dev

echo "开发服务器已启动在 http://localhost:3000"
```

表格

基础表格

功能 支持 备注
Markdown ✅ 完整 CommonMark 支持
维基链接 ✅ Obsidian 风格双括号
标注 ✅ 多种类型带图标
数学 ✅ 使用 KaTeX 渲染的 LaTeX 数学
图表 ✅ Mermaid 图表支持

高级表格

语言 用例 性能 学习曲线
JavaScript Web 开发 ⭐⭐⭐⭐ 简单
Python 数据科学 ⭐⭐⭐ 简单
Rust 系统编程 ⭐⭐⭐⭐⭐ 困难
Go 后端服务 ⭐⭐⭐⭐ 中等

块引用

简单引用

预测未来的最好方式就是创造它。
— Alan Kay

嵌套引用

这是一个顶级引用。

这是第一个引用内的嵌套引用。

这是嵌套更深的引用。

回到顶级。

水平分割线

您可以使用三个破折号创建水平分割线：

---

或三个星号：

---

或三个下划线：

---

键盘快捷键

按 <kbd>Ctrl</kbd> + <kbd>C</kbd> 复制，按 <kbd>Ctrl</kbd> + <kbd>V</kbd> 粘贴。

使用 <kbd>Cmd</kbd> + <kbd>K</kbd> 打开命令面板。

特殊字符和符号

· 版权：©
· 商标：™
· 注册商标：®
· 箭头：← ↑ → ↓ ↔ ↕
· 符号：★ ☆ ♠ ♣ ♥ ♦
· 货币：$ € £ ¥

HTML 元素

有时您需要使用 HTML 进行更复杂的格式化：

<details>
<summary>点击展开</summary>此内容默认隐藏，可以通过点击摘要来展开。

</details><small>小号文本用于细则</small>

与 Obsidian 兼容

所有这些格式化选项也应该出现在 Obsidian 中，根据您使用的主题会有一些差异。

快速参考

· 粗体：**文本** 或 __文本__
· 斜体：*文本* 或 _文本_
· 代码：`代码`
· 高亮：==文本==
· 链接：[文本](url) 或 [[维基链接]]
· 图片：![替代文本](url)
· 列表：- 或 1. 用于有序列表
· 任务：- [ ] 和 - [x]
· 表格：使用 | 分隔列
· 引用：以 > 开始行
· 标注：> [!类型]
· 水平分割线：---

祝您写作愉快！