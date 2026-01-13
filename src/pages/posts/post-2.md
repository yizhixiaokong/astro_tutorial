---
layout: ../../layouts/MarkdownPostLayout.astro
title: '进阶：静态页面优化与功能完善'
pubDate: 2026-01-07
description: '利用变量、条件渲染丰富页面内容，并完善博客系统的基础结构。'
author: '小空'
image:
    url: 'https://docs.astro.build/assets/arc.webp'
    alt: '弧线背景下的 Astro 标志'
tags: ["astro", "变量", "条件渲染"]
---

在基础框架搭好后，我进行了多项优化（\`feat(site): 统一 pageTitle 并优化首页/博客/关于页\`）。

## 变量与一致性
引入了 \`pageTitle\` 变量，统一管理各页面的标题。这使得代码更具维护性，同时也优化了首页、博客和关于页的文案。

## 关于页的深度定制
在“关于”页中，我通过 Frontmatter 定义了详细的 \`identity\` 和 \`skills\` 数据：
- 标注了自己作为**后端工程师 / 前端爱好者**的身份。
- 详细罗列了常用技能。
- 练习了**条件渲染**：根据协作状态显示提示文案，并展示实时学习进度。

## 博客功能的起步
同时，我在博客页中新增了文章列表（\`feat(blog): 添加文章列表并新增示例文章\`），正式开始了内容创作。
