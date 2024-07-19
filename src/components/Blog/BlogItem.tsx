"use client";

import Image from "next/image";

import styles from "./Blog.module.scss";

import BlogImage from "@/../public/blog-image.png";

import Link from "next/link";

import { MoveRight } from "lucide-react";
import { BlogItem as BlogItemType } from "@/app/types/general.types";
import { encrypt } from "@/utils/stringEncryptor";

type BlogItemProps = {
  blog: BlogItemType;
};

export default function BlogItem({ blog }: BlogItemProps) {
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
        <Link href={`/blog/blog-item?id=${encrypt(blog.heading_1)}`}>
          Детальніше <MoveRight />
        </Link>
      </div>
    </section>
  );
}
