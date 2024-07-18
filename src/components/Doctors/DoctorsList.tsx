import styles from "./Doctors.module.scss";

import DoctorCard from "./DoctorCard";
import DoctorsLoader from "./DoctorsLoader";

import { getDoctors } from "@/controllers/doctors";

type ListProps = {
  isAdmin?: boolean;
};

export default async function DoctorsList({ isAdmin }: ListProps) {
  const doctors = await getDoctors();
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
