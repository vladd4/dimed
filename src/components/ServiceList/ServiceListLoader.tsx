import ContentLoader from "react-content-loader";
import styles from "./ServiceList.module.scss";

const ServiceListLoader = () => (
  <ContentLoader
    speed={2}
    width={530}
    height={120}
    viewBox="0 0 530 120"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={styles.loader}
  >
    <rect x="0" y="0" rx="15" ry="15" width="530" height="115" />
  </ContentLoader>
);

export default ServiceListLoader;
