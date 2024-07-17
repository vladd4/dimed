import { MoveRight } from "lucide-react";
import DoctorsSlider from "./DoctorsSlider";

import styles from "./Slider.module.scss";
import Link from "next/link";
import { DoctorCard } from "@/app/types/general.types";
import { getData } from "@/utils/getDataHelper";

export default async function DoctorsSliderBlock() {
  const res = await getData("/doctors");
  const doctors = res.body as DoctorCard[];
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
