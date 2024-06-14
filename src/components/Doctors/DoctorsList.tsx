"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import DoctorCard from "./DoctorCard";
import styles from "./Doctors.module.scss";
import { useEffect } from "react";
import { fetchDoctors } from "@/redux/slices/doctorsSlice";
import DoctorsLoader from "./DoctorsLoader";

type ListProps = {
  isAdmin?: boolean;
};

export default function DoctorsList({ isAdmin }: ListProps) {
  const dispatch = useAppDispatch();
  const doctorSlice = useAppSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  return (
    <section className={styles.root}>
      <article className={styles.doctor_list}>
        {doctorSlice.status === "loaded" && doctorSlice.doctors !== null
          ? doctorSlice.doctors.map((doctor) => {
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