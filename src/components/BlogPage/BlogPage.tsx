"use client";

import BlogDetails from "@/components/BlogDetails/BlogDetails";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { useSearchParams } from "next/navigation";

export default function BlogPage() {
  const params = useSearchParams();
  const id = params.get("id");
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
