---

title: Mermaid 图表测试
description: 测试各种 Mermaid 图表类型，确保正确渲染和主题集成。
date: 2025-09-07
tags:

· 格式化
· obsidian
  draft: false
  image:
  imageAlt:
  imageOG: false
  hideCoverImage: false
  hideTOC: false
  targetKeyword:
  aliases:
· mermaid-test
· mermaid-diagram-test

---

本文测试 Mermaid 图表集成，使用各种图表类型确保正确渲染和主题兼容性。

流程图

```mermaid
graph TD
    A[开始] --> B{是否?}
    B -->|是| C[确定]
    C --> D[重新思考]
    D --> B
    B ---->|否| E[结束]
```

序列图

```mermaid
sequenceDiagram
    participant 爱丽丝
    participant 鲍勃
    participant 约翰
    爱丽丝->>约翰: 你好约翰，最近怎么样？
    loop 健康检查
        约翰->>约翰: 对抗疑病症
    end
    Note right of 约翰: 理性思维占上风！
    约翰-->>爱丽丝: 很好！
    约翰->>鲍勃: 你呢？
    鲍勃-->>约翰: 非常好！
```

类图

```mermaid
classDiagram
    class 动物 {
        +String 名称
        +int 年龄
        +发出声音()
    }
    class 狗 {
        +String 品种
        +吠叫()
    }
    class 猫 {
        +String 颜色
        +喵叫()
    }
    动物 <|-- 狗
    动物 <|-- 猫
```

状态图

```mermaid
stateDiagram-v2
    [*] --> 静止
    静止 --> [*]
    静止 --> 移动
    移动 --> 静止
    移动 --> 崩溃
    崩溃 --> [*]
```

实体关系图

```mermaid
erDiagram
    客户 ||--o{ 订单 : 下单
    订单 ||--|{ 订单项 : 包含
    客户 }|..|{ 配送地址 : 使用
```

用户旅程图

```mermaid
journey
    title 我的工作日
    section 去上班
      泡茶: 5: 我
      上楼: 3: 我
      工作: 1: 我, 猫
    section 回家
      下楼: 5: 我
      坐下: 5: 我
```

甘特图

```mermaid
gantt
    title 甘特图示例
    dateFormat  YYYY-MM-DD
    section 第一部分
    任务A           :a1, 2024-01-01, 30d
    任务B           :after a1  , 20d
    section 第二部分
    任务C           :2024-01-12  , 12d
    任务D           : 24d
```

饼图

```mermaid
pie title 志愿者领养的宠物
    "狗" : 386
    "猫" : 85
    "老鼠" : 15
```

Git 图谱

```mermaid
    gitGraph
       commit
	   commit
	   branch 开发分支
	   checkout 开发分支
	   commit
	   commit
	   checkout 主分支
	   merge 开发分支
	   commit
	   commit
```

带样式的复杂流程图

```mermaid
graph TD
    A[圣诞节] -->|获得资金| B(去购物)
    B --> C{让我想想}
    C -->|选项一| D[笔记本电脑]
    C -->|选项二| E[iPhone]
    C -->|选项三| F[fa:fa-car 汽车]
    D --> G[fa:fa-laptop fa:fa-code 笔记本电脑]
    E --> H[fa:fa-mobile iPhone]
    F --> I[fa:fa-car 汽车]
```

错误处理测试

这应该显示错误状态：

```mermaid
graph TD
    A[无效语法
    B --> C
    无效命令
```

主题集成

图表应自动适应当前主题（亮色/暗色），并使用主题颜色以更好地与整体设计集成。

响应式设计

所有图表都应该是响应式的，在移动设备上表现良好，具有适当的缩放和溢出处理。