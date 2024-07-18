import BlogPage from "@/components/Blog/BlogPage";

import { getBlog } from "@/controllers/blog";

export default async function Blog() {
  const blogs = await getBlog();
  return <BlogPage blogs={blogs} />;
}
