import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import DoctorCard from "./DoctorCard";
import styles from "./Doctors.module.scss";

export default function DoctorsPage() {
  return (
    <>
      <BreadCrumbs link_href="/doctors" link_label="Лікарі" />
      <section className={styles.root}>
        <article className={styles.doctor_list}>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </article>
      </section>
    </>
  );
}
