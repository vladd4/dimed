"use client";

import styles from "./Slider.module.scss";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import DoctorCard from "../Doctors/DoctorCard";

const DoctorsSlider = () => {
  return (
    <Splide
      options={{
        height: "auto",
        type: "loop",
        focus: "center",
        drag: true,
        perPage: 3,
        gap: "2%",
        autoplay: true,
        interval: 1500,
        pagination: true,
        arrows: true,
        breakpoints: {
          850: {
            perPage: 3,
          },
          650: {
            pagination: false,
            perPage: 2,
            arrows: false,
          },
        },
      }}
      className={styles.slider}
      id="doctors-slider"
    >
      {/* <SplideSlide>
        <DoctorCard isFull />
      </SplideSlide>
      <SplideSlide>
        <DoctorCard isFull />
      </SplideSlide>
      <SplideSlide>
        <DoctorCard isFull />
      </SplideSlide>
      <SplideSlide>
        <DoctorCard isFull />
      </SplideSlide>
      <SplideSlide>
        <DoctorCard isFull />
      </SplideSlide> */}
    </Splide>
  );
};

export default DoctorsSlider;
