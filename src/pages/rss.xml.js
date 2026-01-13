import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "小空的 Astro 学习之旅",
    description: "记录学习 Astro 框架的笔记、项目进展与个人想法。内容涵盖基础页面构建、组件系统、动态加载、布局优化等主题。",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/**/*.md")),
    author: "小空",
    customData: `
      <language>zh-cn</language>
      <copyright>© 2026 小空. All rights reserved.</copyright>
      <managingEditor>小空</managingEditor>
      <webMaster>小空</webMaster>
    `,
  });
}
