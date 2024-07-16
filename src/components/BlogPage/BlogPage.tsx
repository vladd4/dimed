import BlogDetails from "@/components/BlogDetails/BlogDetails";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

type BlogProps = {
  id: string;
};

export default function BlogPage({ id }: BlogProps) {
  return (
    <>
      <BreadCrumbs
        link_href={`/blog/blog-item/id=${id}`}
        link_label={`${id}`}
        isBlog
      />
      <BlogDetails id={id!} />
    </>
  );
}
