import DoctorsSlider from "./DoctorsSlider";
import styles from "./Slider.module.scss";

export default function DoctorsSliderBlock() {
  return (
    <section className={styles.root}>
      <h2>Галерея</h2>
      <DoctorsSlider />
    </section>
  );
}
