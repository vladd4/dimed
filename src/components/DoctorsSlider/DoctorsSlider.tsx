"use client";

import styles from "./Slider.module.scss";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import DoctorCard from "../Doctors/DoctorCard";
import DoctorsLoader from "../Doctors/DoctorsLoader";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { fetchDoctors } from "@/redux/slices/doctorsSlice";

import { useEffect } from "react";

const DoctorsSlider = () => {
  const dispatch = useAppDispatch();
  const doctorSlice = useAppSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  return (
    <Splide
      options={{
        height: "auto",
        drag: true,
        perPage: 3,
        gap: "2%",
        autoplay: true,
        interval: 1500,
        pagination: true,
        arrows: true,
        breakpoints: {
          800: {
            perPage: 2,
          },
          650: {
            perPage: 1,
          },
        },
      }}
      className={styles.slider}
      id="doctors-slider"
    >
      {doctorSlice.status === "loaded" && doctorSlice.doctors !== null
        ? doctorSlice.doctors.slice(0, 6).map((doctor) => {
            return (
              <SplideSlide key={doctor.name}>
                <DoctorCard
                  key={doctor.name}
                  name={doctor.name}
                  position={doctor.position}
                  image={doctor.image}
                  isFull
                />
              </SplideSlide>
            );
          })
        : [...new Array(6)].map((_, index) => {
            return (
              <SplideSlide key={index}>
                <DoctorsLoader key={index} isFull />
              </SplideSlide>
            );
          })}
    </Splide>
  );
};

export default DoctorsSlider;
