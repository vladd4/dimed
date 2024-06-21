import { MoveRight } from "lucide-react";
import DoctorsSlider from "./DoctorsSlider";

import styles from "./Slider.module.scss";
import Link from "next/link";

export default function DoctorsSliderBlock() {
  return (
    <section className={styles.root}>
      <h2>Команда</h2>
      <DoctorsSlider />
      <Link href="/doctors">
        Вся команда <MoveRight />
      </Link>
    </section>
  );
}
