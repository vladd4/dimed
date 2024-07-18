import styles from "./BlogDetails.module.scss";

import Image from "next/image";

import Image1 from "@/../public/фото3 1.png";

import Loader from "../Loader";

import { getBlogById } from "@/controllers/blog";

type BlogProps = {
  id: string;
};

export default async function BlogDetails({ id }: BlogProps) {
  const blog = await getBlogById(id);

  return blog === undefined ? (
    <Loader />
  ) : (
    <section className={styles.root}>
      <article className={styles.top_block}>
        <Image
          alt="Blog"
          src={blog.image_1 ? blog.image_1 : Image1}
          width={1100}
          height={730}
        />
        <div className={styles.text_block}>
          <h2>{blog.heading_1}</h2>
          <p>{blog.paragraph_1}</p>
        </div>
      </article>
      <div className={styles.blog_text}>
        {blog.heading_2 && <h2>{blog.heading_2}</h2>}
        {blog.paragraph_2 && <p>{blog.paragraph_2}</p>}
      </div>
      <div className={styles.blog_text}>
        {blog.heading_3 && <h2>{blog.heading_3}</h2>}
        {blog.paragraph_3 && <p>{blog.paragraph_3}</p>}
      </div>
      {blog.image_2 && (
        <Image
          alt="Image blog 2"
          src={blog.image_2}
          width={900}
          height={600}
          className={styles.bottom_image}
        />
      )}

      <div className={styles.blog_text}>
        {blog.heading_4 && <h2>{blog.heading_4}</h2>}
        {blog.paragraph_4 && <p>{blog.paragraph_4}</p>}
      </div>
      <div className={styles.blog_text}>
        {blog.heading_5 && <h2>{blog.heading_5}</h2>}
        {blog.paragraph_5 && <p>{blog.paragraph_5}</p>}
      </div>
      <p className={styles.author}>
        {blog.author ? blog.author : "Автор статті"},{" "}
        {blog.date ? blog.date : new Date().toUTCString()}
      </p>
    </section>
  );
}
