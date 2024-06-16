import GalerySlider from "./GalerySlider";

import styles from "./GalerySlider.module.scss";

export default function GaleryBlock() {
  return (
    <section className={styles.root}>
      <h2>Галерея</h2>
      <GalerySlider />
    </section>
  );
}
