import ContentLoader from "react-content-loader";
import styles from "./AboutCards.module.scss";

const CardsLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={250}
    viewBox="0 0 280 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={styles.loader}
  >
    <rect x="0" y="0" rx="30" ry="30" width="280" height="250" />
  </ContentLoader>
);

export default CardsLoader;
