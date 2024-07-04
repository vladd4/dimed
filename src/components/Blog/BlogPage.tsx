"use client";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import BlogItem from "./BlogItem";

import styles from "./Blog.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import React, { useEffect } from "react";
import { fetchBlogs } from "@/redux/slices/blogSlice";
import BlogLoader from "./BlogLoader";
import BlogMobileLoader from "./BlogMobileLoader";

export default function BlogPage() {
  const dispatch = useAppDispatch();
  const { status, blogs } = useAppSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      <BreadCrumbs link_href="/blog" link_label="Блог" />
      <section className={styles.root}>
        <h2>Корисні статті</h2>
        <article className={styles.blog_list}>
          {status === "loaded" && blogs !== null
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
