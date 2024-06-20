import ContentLoader from "react-content-loader";
import styles from "./Blog.module.scss";

const BlogLoader = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={350}
    viewBox="0 0 1200 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={styles.loader}
  >
    <rect x="0" y="0" rx="30" ry="30" width="1200" height="350" />
  </ContentLoader>
);

export default BlogLoader;
