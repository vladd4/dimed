"use client";

import Image from "next/image";

import styles from "./ServiceDetails.module.scss";

import { CircleCheck, CircleX } from "lucide-react";
import { useAppSelector } from "@/hooks/redux-hooks";

type ServProps = {
  id: string;
};

export default function ServiceDetails({ id }: ServProps) {
  const { status, service_item } = useAppSelector(
    (state) => state.serviceDetails
  );

  const paragraphs = service_item?.paragraph.split(". ");

  return (
    <section className={styles.root}>
      <article className={styles.top_block}>
        <Image
          alt="Massage"
          src={
            status === "loaded" && service_item !== null
              ? service_item.image
              : ""
          }
          width={940}
          height={630}
        />
        <div className={styles.text_block}>
          <h2>{id}</h2>
          <p>
            {status === "loaded"
              ? paragraphs !== undefined &&
                paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                    {index < paragraphs.length - 1 ? "." : ""}
                  </p>
                ))
              : "Loading..."}
          </p>
        </div>
      </article>
      <article className={styles.bottom_block}>
        <div className={styles.bottom_div}>
          <h2>Показання</h2>
          {status === "loaded"
            ? service_item !== null &&
              service_item.pokazania.map((item) => {
                return (
                  <div key={item.name} className={styles.bottom_item}>
                    <CircleCheck
                      size={35}
                      color="#294273"
                      fill="#ecf4ff"
                      className={styles.svg}
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })
            : "Loading..."}
        </div>
        <div className={styles.bottom_div}>
          <h2>Протипоказання</h2>
          {status === "loaded"
            ? service_item !== null &&
              service_item.anti_pokazania.map((item) => {
                return (
                  <div key={item.name} className={styles.bottom_item}>
                    <CircleX
                      size={40}
                      color="#ecf4ff"
                      fill="#294273"
                      style={{ marginTop: "-1%" }}
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </article>
    </section>
  );
}
