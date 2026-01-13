---
title: '第一步：从模板到基础导航'
pubDate: 2026-01-07T09:00:00Z
description: '记录 Astro 教程的初始设置和基本的页面/导航构建过程。'
author: '小空'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'Astro 标志'
tags: ["astro", "基础", "导航"]
---

今天开始了 Astro 的学习之旅。

## 为什么选择 Astro？

Astro 是一个现代化的静态网站生成器，以下特点吸引了我：

- ⚡ **超快加载** — 默认零 JavaScript，天生快速
- 🎯 **简单易用** — 类似 HTML 的 `.astro` 格式容易上手
- 🔧 **灵活强大** — 支持 React、Vue、Svelte 等框架
- 📚 **优秀文档** — 官方中文教程详尽全面

## 初始化与项目设置

首先使用了 Astro 官方的教程模板进行了初始化：

```bash
npm create astro@latest -- --template minimal
```

这一步构建了项目的完整骨架，包括 package.json、配置文件和基础的页面结构。

## 创建基础页面

我创建了最重要的三个基础页面：

### 首页（index.astro）
网站的入口，展示欢迎信息和网站简介。

### 关于页（about.astro）
介绍个人背景、技能和项目信息的页面。

### 博客页（blog.astro）
用于展示所有博客文章的列表页面。

## 建立导航系统

为了让用户能够顺畅地在页面间跳转，我添加了一个简单但有效的导航链接系统。虽然此时还是硬编码的链接，但为后续的组件化奠定了基础。

## 收获

这一步让我理解了 Astro 的基础概念：

- 文件系统路由的工作原理
- `.astro` 文件的基本结构
- Frontmatter 的使用方式
- 模板语法和组件概念

下一步，我计划添加更多交互性和样式优化。
