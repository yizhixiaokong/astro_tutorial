# Astro 教程项目

## 📍 在线访问

🌐 **[点击访问项目](https://yizhixiaokong.github.io/astro_tutorial/)**

## 项目说明

本项目是基于 [Astro 官方教程](https://docs.astro.build/zh-cn/tutorial) 创建的基础页面。

## 项目特点

- ✨ 基于 Astro 官方教程的基础示例
- � 现代暗黑模式支持，自动适配系统主题
- 🎨 优化的 CSS 架构（模块化设计、CSS 变量系统）
- 📝 使用 **Astro Content Collections**（类型安全的内容管理）
- 📱 完全响应式设计
- 🖼️ Astro Image 组件优化（自动图片压缩、格式转换）
- 🚀 快速的静态网站生成
- 🔄 GitHub Actions 自动部署
- 💾 完整的 RSS 源支持

## 项目结构

```
src/
├── blog/                # 博客文章（Markdown）
│   ├── post-1.md
│   ├── post-2.md
│   └── ...
├── components/          # Astro 组件
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Navigation.astro
│   ├── Social.astro
│   ├── ThemeIcon.astro
│   ├── Greeting.jsx
│   └── BlogPost.astro
├── layouts/             # 布局组件
│   ├── BaseLayout.astro
│   └── MarkdownPostLayout.astro
├── pages/               # 页面文件
│   ├── index.astro
│   ├── about.astro
│   ├── blog.astro
│   ├── rss.xml.js
│   ├── posts/
│   │   └── [...slug].astro  # 动态路由
│   └── tags/
│       ├── index.astro
│       └── [tag].astro
├── styles/              # 全局样式（模块化）
│   ├── global.css
│   ├── base/
│   ├── components/
│   └── themes/
├── utils/               # 工具函数
│   └── links.ts         # 路由链接处理
└── content.config.ts    # Content Collections 配置
```

## 如何开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

4. 部署到 GitHub Pages：
```bash
git push origin main
```
GitHub Actions 会自动构建并部署到 GitHub Pages。

## 部署说明

本项目配置了 GitHub Actions 自动部署工作流（`.github/workflows/deploy.yml`）：
- 在 `main` 分支有提交时自动触发
- 自动构建项目
- 自动部署到 GitHub Pages

访问地址：https://yizhixiaokong.github.io/astro_tutorial/

## 主要技术

- **框架**：Astro（静态网站生成器）
- **内容管理**：Astro Content Collections（Zod schema 验证）
- **样式**：CSS 模块化 + CSS 变量系统
- **交互**：Preact 岛屿架构
- **类型**：TypeScript 全栈支持
- **图片优化**：Astro Image 组件
- **主题**：暗黑模式（class-based + localStorage）

## 学习要点

这个项目展示了：
1. ✅ Astro 组件基础和布局系统
2. ✅ Astro Content Collections 的完整使用（类型安全、构建时验证）
3. ✅ 动态路由（`[...slug].astro`）和静态生成（`getStaticPaths()`）
4. ✅ 暗黑模式实现（CSS 变量 + 主题切换）
5. ✅ 响应式导航和菜单
6. ✅ 标签系统和分类页面
7. ✅ RSS 源生成
8. ✅ GitHub Pages 部署流程
9. ✅ TypeScript 在 `.astro` 文件中的使用

## 参考资源

- [Astro 官方文档](https://docs.astro.build/zh-cn/)
- [Astro 官方教程](https://docs.astro.build/zh-cn/tutorial)

## 许可证

本项目遵循 Astro 官方示例的相关许可。
