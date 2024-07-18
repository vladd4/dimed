import BlogPage from "@/components/BlogPage/BlogPage";
import { getBlogById } from "@/controllers/blog";

export async function generateMetadata({ searchParams }: any) {
  const blogId = searchParams.id;

  const blog = await getBlogById(blogId);

  if (blog !== undefined) {
    return {
      title: blogId,
      openGraph: {
        images: [blog.image_1],
      },
    };
  } else return null;
}

export default function BlogItemPage({ searchParams }: any) {
  const blogId = searchParams.id;
  return <BlogPage id={blogId} />;
}
