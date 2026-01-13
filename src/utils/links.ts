/**
 * 链接处理工具
 * 自动将相对路径添加 base 前缀
 */

const BASE = import.meta.env.BASE_URL || '/';

/**
 * 将路径转换为完整 URL（包含 base 前缀）
 * @example
 * getLink('/blog') => '/astro_tutorial/blog/' 或 '/blog/'
 */
export function getLink(path: string): string {
  // 移除开头的斜杠，BASE 已经包含
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${cleanPath}`;
}

/**
 * 生成标签链接
 */
export function getTagLink(tag: string): string {
  return getLink(`tags/${tag}`);
}

/**
 * 生成文章链接
 */
export function getPostLink(postId: string): string {
  return getLink(`posts/${postId}`);
}
