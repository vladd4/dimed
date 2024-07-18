import BlogPage from "@/components/Blog/BlogPage";
import { getData } from "@/utils/getDataHelper";

export default async function Blog() {
  const items = await getData("/blog");
  const blogs = JSON.parse(items.body);
  return (
    <>
      <BlogPage blogs={blogs} />
    </>
  );
}
