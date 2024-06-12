"use client";

import styles from "./GalerySlider.module.scss";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import Image1 from "@/../public/фото1jpg.png";
import Image2 from "@/../public/фото2.png";
import Image3 from "@/../public/фото3.png";

import d from "../../../public/фото1jpg.png";
import Image from "next/image";
const GalerySlider = () => {
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
            perPage: 2,
          },
          650: {
            perPage: 1,
          },
        },
      }}
      className={styles.slider}
      id="galery-slider"
    >
      <SplideSlide>
        <Image alt="Image" src={Image1} width={570} height={380} />
      </SplideSlide>
      <SplideSlide>
        <Image alt="Image" src={Image2} width={570} height={380} />
      </SplideSlide>
      <SplideSlide>
        <Image alt="Image" src={Image3} width={570} height={380} />
      </SplideSlide>
      <SplideSlide>
        <Image alt="Image" src={Image1} width={570} height={380} />
      </SplideSlide>
      <SplideSlide>
        <Image alt="Image" src={Image2} width={570} height={380} />
      </SplideSlide>
      <SplideSlide>
        <Image alt="Image" src={Image3} width={570} height={380} />
      </SplideSlide>
    </Splide>
  );
};

export default GalerySlider;
