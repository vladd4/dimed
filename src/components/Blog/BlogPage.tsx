import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import BlogItem from "./BlogItem";

import styles from "./Blog.module.scss";
import React from "react";
import BlogLoader from "./BlogLoader";
import BlogMobileLoader from "./BlogMobileLoader";
import { BlogItem as BlogItemType } from "@/app/types/general.types";

type Props = {
  blogs: BlogItemType[] | null;
};

export default function BlogPage({ blogs }: Props) {
  return (
    <>
      <BreadCrumbs link_href="/blog" link_label="Блог" />
      <section className={styles.root}>
        <h2>Корисні статті</h2>
        <article className={styles.blog_list}>
          {blogs !== null
            ? blogs.map((blog) => {
                return <BlogItem key={blog.heading_1} blog={blog} />;
              })
            : [...new Array(3)].map((_, index) => (
                <React.Fragment key={index}>
                  <BlogLoader />
                  <BlogMobileLoader />
                </React.Fragment>
              ))}
        </article>
      </section>
    </>
  );
}
