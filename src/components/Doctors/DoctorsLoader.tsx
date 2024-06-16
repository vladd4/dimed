import ContentLoader from "react-content-loader";

import styles from "./Doctors.module.scss";

type LoaderProps = {
  isFull?: boolean;
};

const DoctorsLoader = ({ isFull }: LoaderProps) => (
  <ContentLoader
    speed={2}
    width={440}
    height={600}
    viewBox="0 0 440 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={`${styles.loader} ${isFull ? styles.full_loader : ""}`}
  >
    <rect x="0" y="0" rx="15" ry="15" width="440" height="600" />
  </ContentLoader>
);

export default DoctorsLoader;
