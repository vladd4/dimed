import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styles from "./Blog.module.scss";
import BlogItem from "./BlogItem";

export default function BlogPage() {
  return (
    <>
      <BreadCrumbs link_href="/blog" link_label="Блог" />
      <section className={styles.root}>
        <h2>Корисні статті</h2>
        <article className={styles.blog_list}>
          <BlogItem id={1} />
          <BlogItem id={2} />
          <BlogItem id={3} />
        </article>
      </section>
    </>
  );
}
