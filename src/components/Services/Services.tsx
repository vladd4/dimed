"use client";

import Image from "next/image";
import styles from "./Services.module.scss";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";
import { services } from "@/static_store/services";
import { useState } from "react";

export default function Services() {
  const [isClickedService, setisClickedService] = useState<number>(0);

  const handleShowServiceInfo = (id: number) => {
    if (isClickedService === id) {
      setisClickedService(0);
    } else {
      setisClickedService(id);
    }
  };
  return (
    <section className={styles.root}>
      <h2>Послуги</h2>
      <p>
        Nam sed laoreet est. Fusce a porttitor sapien. Nunc egestas feugiat
        placerat.Aenean ac bibendum leo, vitae fringilla tellus.: 
      </p>
      <article className={styles.cards_block}>
        {services.map((service) => {
          return (
            <div className={styles.service_block}>
              <div key={service.label} className={styles.card}>
                <Image
                  alt="Service"
                  src={service.image}
                  width={200}
                  height={200}
                />
                <h2>{service.label}</h2>
                <p>{service.description}</p>
                <p
                  className={styles.more_btn}
                  onClick={() => handleShowServiceInfo(service.id)}
                >
                  Детальніше
                  {isClickedService === service.id ? (
                    <ChevronUp size={22} />
                  ) : (
                    <ChevronDown size={22} />
                  )}
                </p>
              </div>
              <div
                className={`${styles.serv_list} ${
                  isClickedService === service.id ? styles.show_list : ""
                }`}
              >
                {service.services.map((serv) => {
                  return (
                    <div className={styles.list_item} key={service.id}>
                      <Circle fill="#294273" color="#294273" size={11} />
                      <p>{serv}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}
