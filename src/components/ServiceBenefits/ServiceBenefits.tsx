"use client";

import { Circle } from "lucide-react";

import styles from "./ServBenefits.module.scss";
import { useAppSelector } from "@/hooks/redux-hooks";

export default function ServiceBenefits() {
  const { status, service_item } = useAppSelector(
    (state) => state.serviceDetails
  );
  return (
    <section className={styles.root}>
      <div className={styles.text_block}>
        <h2>Основні переваги:</h2>
        {status === "loaded"
          ? service_item !== null &&
            service_item.benefits.map((item) => {
              return (
                <div key={item.name} className={styles.text_item}>
                  <Circle fill="#294273" color="#294273" size={15} />
                  <p>
                    <b>{item.name}: </b>
                    {item.description}
                  </p>
                </div>
              );
            })
          : "Loading..."}
      </div>
      <div className={styles.text_block}>
        <h2>Ефекти, які надає:</h2>
        {status === "loaded"
          ? service_item !== null &&
            service_item.effects.map((item) => {
              return (
                <div key={item.name} className={styles.text_item}>
                  <Circle fill="#294273" color="#294273" size={15} />
                  <p>
                    <b>{item.name}: </b>
                    {item.description}
                  </p>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </section>
  );
}
