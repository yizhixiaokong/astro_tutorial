---
layout: ../../layouts/MarkdownPostLayout.astro
title: '第二步：静态页面优化与功能完善'
pubDate: 2026-01-07
description: '利用变量、条件渲染丰富页面内容，并完善博客系统的基础结构。'
author: '小空'
image:
    url: 'https://docs.astro.build/assets/arc.webp'
    alt: '弧线背景下的 Astro 标志'
tags: ["astro", "变量", "条件渲染"]
---

在基础框架搭好后，我进行了多项优化和功能完善，让网站更加专业和实用。

## 变量与一致性管理

### pageTitle 的引入

一开始每个页面都硬编码了标题，这样不仅代码重复，而且修改时容易遗漏。我引入了 `pageTitle` 变量来统一管理：

```astro
const pageTitle = "博客";
```

通过在各页面中定义这个变量，不仅提高了代码的维护性，还能通过传递 props 给布局组件来实现动态标题。

## 关于页的深度开发

### 个人信息结构化

```astro
const identity = {
  firstName: "小空",
  country: "中国",
  occupation: "后端工程师 / 前端爱好者",
  hobbies: ["阅读", "编程", "音乐", "动漫"],
};
```

通过 JavaScript 对象来组织个人信息，使得数据更加结构化，也为未来的数据绑定做好了准备。

### 技能展示与条件渲染

我定义了详细的技能分类和等级，并使用 `.map()` 进行动态渲染：

- 后端：Node.js、Golang、Python
- 数据库：MySQL、PostgreSQL、MongoDB
- 前端：HTML/CSS/JavaScript、Astro、React
- DevOps：Docker、GitHub Actions、Git

这是我第一次使用 Astro 的条件渲染和循环功能。

### 状态管理与条件显示

```astro
const status = {
  openToCollab: true,
  learningProgress: 0.45,
};
```

利用这个状态对象，我能够根据条件动态显示不同的内容——比如是否显示合作邀请提示。

## 博客系统的初步完善

### 文章列表功能

在博客页中添加了文章列表，包含指向各篇文章的链接。虽然此时还是硬编码的列表，但已经初步形成了博客系统的雏形。

### 示例文章

为了演示博客系统的完整功能，我创建了三篇示例文章，包含不同的内容和标签。

## 技术亮点

这一步的关键学习点：

- ✅ 数据结构与模板渲染的配合
- ✅ JSX 语法中的条件判断
- ✅ 数组的 `.map()` 方法在模板中的应用
- ✅ 样式作用域和变量的高级用法

## 展望

虽然这一步已经初见成效，但我意识到还有很多可以优化的地方，比如组件的复用、数据的动态加载等。这些将在后续步骤中逐一探索。
