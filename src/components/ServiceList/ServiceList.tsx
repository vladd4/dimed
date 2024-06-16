"use client";

import Image from "next/image";

import styles from "./ServiceList.module.scss";

import { Circle } from "lucide-react";

import { useEffect, useState } from "react";

import { service_icons } from "@/static_store/service_icons";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { fetchPricingAll } from "@/redux/slices/pricingSlice";

import ServImage from "@/../public/service-icons/consult.png";

import ServiceListLoader from "./ServiceListLoader";

type ServiceListProps = {
  isPricing?: boolean;
};

export default function ServiceList({ isPricing }: ServiceListProps) {
  const [isClickedPrice, setisClickedPrice] = useState<string[]>([]);
  const [isClickedService, setisClickedService] = useState<string>("");

  const { status, services } = useAppSelector((state) => state.pricing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPricingAll());
  }, [dispatch]);

  const handleShowTable = (id: string) => {
    setisClickedPrice((prev) => {
      if (prev.includes(id)) {
        return prev.filter((clickedId) => clickedId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleShowServiceInfo = (id: string) => {
    if (isClickedService === id) {
      setisClickedService("");
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
          {status === "loaded" && services !== null
            ? services.map((service) => {
                let icon =
                  service_icons.find((item) => item.name === service.name)
                    ?.icon || ServImage;
                return (
                  <>
                    <div
                      onClick={
                        isPricing
                          ? () => handleShowTable(service.name)
                          : () => handleShowServiceInfo(service.name)
                      }
                      key={service.name}
                      className={`${styles.card} ${
                        isPricing && isClickedPrice.includes(service.name)
                          ? styles.pricing_clicked
                          : ""
                      } ${
                        isClickedService === service.name
                          ? styles.pricing_clicked
                          : ""
                      }`}
                    >
                      <Image
                        alt="Service"
                        src={icon}
                        width={200}
                        height={200}
                      />
                      <h2>{service.name}</h2>
                    </div>
                    {isPricing ? (
                      <div
                        className={`${styles.table} ${
                          isClickedPrice.includes(service.name)
                            ? styles.show_table
                            : ""
                        }`}
                      >
                        {service.price.map((item) => {
                          return (
                            <div key={item.name} className={styles.table_item}>
                              <p>{item.name}</p>
                              <span>{item.price} грн</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div
                        className={`${styles.table} ${
                          isClickedService === service.name
                            ? styles.show_table_mobile
                            : ""
                        } ${styles.table_mobile}`}
                      >
                        {service.whatDo.map((serv) => {
                          return (
                            <p className={styles.mobile_service} key={serv}>
                              {serv}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </>
                );
              })
            : [...new Array(6)].map((_, index) => (
                <ServiceListLoader key={index} />
              ))}
        </div>
        {!isPricing && (
          <div
            className={`${styles.service_info} ${
              isClickedService !== "" ? styles.show_info : ""
            }`}
          >
            {status === "loaded" &&
              services !== null &&
              services.map((item) => {
                if (item.name === isClickedService) {
                  return item.whatDo.map((serv) => (
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
