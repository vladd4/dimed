import ContentLoader from "react-content-loader";
import styles from "./ServiceList.module.scss";

const ServiceMobileLoader = () => (
  <ContentLoader
    speed={2}
    width={530}
    height={180}
    viewBox="0 0 530 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={styles.mobile_loader}
  >
    <rect x="0" y="0" rx="15" ry="15" width="530" height="170" />
  </ContentLoader>
);

export default ServiceMobileLoader;
