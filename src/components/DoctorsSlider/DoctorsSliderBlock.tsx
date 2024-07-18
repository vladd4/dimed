import { MoveRight } from "lucide-react";
import DoctorsSlider from "./DoctorsSlider";

import styles from "./Slider.module.scss";
import Link from "next/link";

import { getDoctors } from "@/controllers/doctors";

export default async function DoctorsSliderBlock() {
  const doctors = await getDoctors();
  return (
    <section className={styles.root}>
      <h2>Команда</h2>
      <DoctorsSlider doctors={doctors} />
      <Link href="/doctors">
        Вся команда <MoveRight />
      </Link>
    </section>
  );
}
