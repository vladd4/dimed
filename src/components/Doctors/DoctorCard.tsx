import Image from "next/image";
import styles from "./Doctors.module.scss";

import DoctorImage from "@/../public/doctor.png";

type CardProps = {
  isFull?: boolean;
};

export default function DoctorCard({ isFull }: CardProps) {
  return (
    <section
      className={`${styles.item_root} ${isFull ? styles.full_width : ""}`}
    >
      <Image alt="Blog" src={DoctorImage} width={450} height={600} />
      <div className={styles.text_block}>
        <h2>Lorem ipsum ipsum doloripsum dolor</h2>
        <p>consectetur adipiscing elitconsectetur adipiscing elit</p>
      </div>
    </section>
  );
}
