"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import styles from "./GalerySlider.module.scss";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { useEffect } from "react";
import { fetchImages } from "@/redux/slices/aboutSlice";

type Props = {
  images?: string[];
  isAbout?: boolean;
};

const GalerySlider = ({ images, isAbout }: Props) => {
  const dispatch = useAppDispatch();
  const aboutSlice = useAppSelector((state) => state.about);

  useEffect(() => {
    if (isAbout) {
      dispatch(fetchImages());
    }
  }, [dispatch]);

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
      {isAbout
        ? aboutSlice.images !== null &&
          aboutSlice.images.map((image) => (
            <SplideSlide key={image}>
              <div
                className={styles.slider_div}
                style={{ backgroundImage: `url(${image})` }}
              />
            </SplideSlide>
          ))
        : images &&
          images.map((item) => (
            <SplideSlide key={item}>
              <div
                className={styles.slider_div}
                style={{ backgroundImage: `url(${item})` }}
              />
            </SplideSlide>
          ))}
    </Splide>
  );
};

export default GalerySlider;
