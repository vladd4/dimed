"use client";

import styles from "./Slider.module.scss";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import DoctorCard from "../Doctors/DoctorCard";
import DoctorsLoader from "../Doctors/DoctorsLoader";
import { DoctorCard as DoctorCardType } from "@/app/types/general.types";

type DoctorProps = {
  doctors?: DoctorCardType[];
};

const DoctorsSlider = ({ doctors }: DoctorProps) => {
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
      {doctors !== undefined
        ? doctors.slice(0, 6).map((doctor) => {
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
