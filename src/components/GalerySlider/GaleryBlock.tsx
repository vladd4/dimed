import GalerySlider from "./GalerySlider";

import styles from "./GalerySlider.module.scss";

type Props = {
  images?: string[];
  isAbout?: boolean;
};

export default function GaleryBlock({ images, isAbout }: Props) {
  return (
    <section className={styles.root}>
      <h2>Галерея</h2>
      <GalerySlider images={images} isAbout={isAbout} />
    </section>
  );
}
