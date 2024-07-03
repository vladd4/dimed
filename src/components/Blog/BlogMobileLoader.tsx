import ContentLoader from "react-content-loader";
import styles from "./Blog.module.scss";

const BlogMobileLoader = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={1800}
    viewBox="0 0 1200 1800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={styles.mobile_loader}
  >
    <rect x="0" y="0" rx="30" ry="30" width="1200" height="1800" />
  </ContentLoader>
);

export default BlogMobileLoader;
