import styles from "./Doctors.module.scss";

import DoctorCard from "./DoctorCard";
import DoctorsLoader from "./DoctorsLoader";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

type DoctorCard = {
  name: string;
  position: string;
  image: string;
};

type ListProps = {
  isAdmin?: boolean;
};

async function getData() {
  const collectionRef = collection(db, "doctors");
  const data = await getDocs(collectionRef);

  return data.docs.map((doc: QueryDocumentSnapshot) => ({
    name: doc.get("name"),
    position: doc.get("position"),
    image: doc.get("image"),
  })) as DoctorCard[];
}

export default async function DoctorsList({ isAdmin }: ListProps) {
  const doctors = await getData();

  return (
    <section className={styles.root}>
      <article className={styles.doctor_list}>
        {doctors !== null
          ? doctors.map((doctor) => {
              return (
                <DoctorCard
                  key={doctor.name}
                  name={doctor.name}
                  position={doctor.position}
                  image={doctor.image}
                  isAdmin={isAdmin}
                />
              );
            })
          : [...new Array(6)].map((_, index) => {
              return <DoctorsLoader key={index} />;
            })}
      </article>
    </section>
  );
}
