import BlogPage from "@/components/BlogPage/BlogPage";
import { getBlogById } from "@/controllers/blog";
import { decrypt } from "@/utils/stringEncryptor";

export async function generateMetadata({ searchParams }: any) {
  const blogId = searchParams.id;
  const decryptedId = decrypt(blogId);
  const blog = await getBlogById(decryptedId);

  if (blog !== undefined) {
    return {
      title: decryptedId,
      openGraph: {
        images: [blog.image_1],
      },
    };
  } else return null;
}

export default function BlogItemPage({ searchParams }: any) {
  const blogId = searchParams.id;
  const decryptedId = decrypt(blogId);
  return <BlogPage id={decryptedId} />;
}
