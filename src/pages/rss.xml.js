import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  const sortedBlog = blog.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: "小空的 Astro 学习之旅",
    description:
      "记录学习 Astro 框架的笔记、项目进展与个人想法。内容涵盖基础页面构建、组件系统、动态加载、布局优化等主题。",
    site: context.site,
    items: sortedBlog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${context.site}posts/${post.id}/`,
    })),
    author: "小空",
    customData: `
      <language>zh-cn</language>
      <copyright>© 2026 小空. All rights reserved.</copyright>
      <managingEditor>小空</managingEditor>
      <webMaster>小空</webMaster>
    `,
  });
}
