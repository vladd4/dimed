"use client";

import Image from "next/image";
import styles from "./ServiceList.module.scss";

import { Circle } from "lucide-react";
import { useState } from "react";
import { services } from "@/static_store/services";

type ServiceListProps = {
  isPricing?: boolean;
};

export default function ServiceList({ isPricing }: ServiceListProps) {
  const [isClickedPrice, setisClickedPrice] = useState<number[]>([]);
  const [isClickedService, setisClickedService] = useState<number>(0);

  const handleShowTable = (id: number) => {
    setisClickedPrice((prev) => {
      if (prev.includes(id)) {
        return prev.filter((clickedId) => clickedId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleShowServiceInfo = (id: number) => {
    if (isClickedService === id) {
      setisClickedService(0);
    } else {
      setisClickedService(id);
    }
  };
  return (
    <section className={styles.root}>
      <h2>{isPricing ? "Ціни" : "Послуги"}</h2>
      <p>
        Nam sed laoreet est. Fusce a porttitor sapien. Nunc egestas feugiat
        placerat.Aenean ac bibendum leo, vitae fringilla tellus.: 
      </p>
      <article className={styles.list_block}>
        <div className={styles.list}>
          {services.map((service) => {
            return (
              <>
                <div
                  onClick={
                    isPricing
                      ? () => handleShowTable(service.id)
                      : () => handleShowServiceInfo(service.id)
                  }
                  key={service.label}
                  className={`${styles.card} ${
                    isPricing ? styles.pricing_card : ""
                  } ${
                    isPricing && isClickedPrice.includes(service.id)
                      ? styles.pricing_clicked
                      : ""
                  } ${
                    isClickedService === service.id
                      ? styles.service_clicked
                      : ""
                  }`}
                >
                  <Image
                    alt="Service"
                    src={service.image}
                    width={200}
                    height={200}
                  />
                  <h2>{service.label}</h2>
                </div>
                {isPricing && (
                  <div
                    className={`${styles.table} ${
                      isClickedPrice.includes(service.id)
                        ? styles.show_table
                        : ""
                    }`}
                  >
                    <div className={styles.table_item}>
                      <p>Лікувальний (оздоровчий) масаж спини</p>
                      <span>600 грн</span>
                    </div>
                    <div className={styles.table_item}>
                      <p>Загальний оздоровчий масаж 90хв.</p>
                      <span>800 грн</span>
                    </div>
                    <div className={styles.table_item}>
                      <p>Лікувальний (оздоровчий) масаж спини</p>
                      <span>600 грн</span>
                    </div>
                    <div className={styles.table_item}>
                      <p>Загальний оздоровчий масаж 90хв.</p>
                      <span>800 грн</span>
                    </div>
                    <div className={styles.table_item}>
                      <p>Лікувальний (оздоровчий) масаж спини</p>
                      <span>600 грн</span>
                    </div>
                    <div className={styles.table_item}>
                      <p>Загальний оздоровчий масаж 90хв.</p>
                      <span>800 грн</span>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        {!isPricing && (
          <div
            className={`${styles.service_info} ${
              isClickedService !== 0 ? styles.show_info : ""
            }`}
          >
            {services.map((item) => {
              if (item.id === isClickedService) {
                return item.services.map((serv) => (
                  <div className={styles.list_item} key={serv}>
                    <Circle fill="#294273" color="#294273" size={11} />
                    <p>{serv}</p>
                  </div>
                ));
              }
              return null;
            })}
          </div>
        )}
      </article>
    </section>
  );
}
