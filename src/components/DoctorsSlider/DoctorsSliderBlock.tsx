import { MoveRight } from "lucide-react";
import DoctorsSlider from "./DoctorsSlider";

import styles from "./Slider.module.scss";
import Link from "next/link";
import { DoctorCard } from "@/app/types/general.types";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

async function getData() {
  const collectionRef = collection(db, "doctors");
  const data = await getDocs(collectionRef);

  return data.docs.map((doc: QueryDocumentSnapshot) => ({
    name: doc.get("name"),
    position: doc.get("position"),
    image: doc.get("image"),
  })) as DoctorCard[];
}

export default async function DoctorsSliderBlock() {
  const doctors = await getData();

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
