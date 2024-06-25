"use client";

import Image from "next/image";

import styles from "./Blog.module.scss";

import BlogImage from "@/../public/blog-image.png";

import Link from "next/link";

import { MoveRight } from "lucide-react";

type BlogItemProps = {
  blog: {
    heading_1: string;
    heading_2?: string;
    heading_3?: string;
    heading_4?: string;
    heading_5?: string;
    paragraph_1: string;
    paragraph_2?: string;
    paragraph_3?: string;
    paragraph_4?: string;
    paragraph_5?: string;
    image_1: string;
    image_2?: string;
    author: string;
    date: string;
  };
};

export default function BlogItem({ blog }: BlogItemProps) {
  const handleBlogClick = () => {
    window.sessionStorage.setItem("blog", JSON.stringify(blog));
  };

  return (
    <section className={styles.item_root}>
      <Image
        alt="Blog"
        src={blog.image_1 ? blog.image_1 : BlogImage}
        width={650}
        height={450}
      />
      <div className={styles.text_block}>
        <h2>{blog.heading_1}</h2>
        <p>{blog.paragraph_1}</p>
        <p></p>
        <Link
          href={`/blog/blog-item?id=${blog.heading_1}`}
          onClick={handleBlogClick}
        >
          Детальніше <MoveRight />
        </Link>
      </div>
    </section>
  );
}
