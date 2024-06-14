"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./Services.module.scss";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";
// import { services } from "@/static_store/services";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { fetchPricingAll } from "@/redux/slices/pricingSlice";

import { service_icons } from "@/static_store/service_icons";

import ServImage from "@/../public/service-icons/consult.png";
import ServiceLoader from "./ServiceLoader";

export default function Services() {
  const [isClickedService, setisClickedService] = useState<string>("");

  const handleShowServiceInfo = (id: string) => {
    if (isClickedService === id) {
      setisClickedService("");
    } else {
      setisClickedService(id);
    }
  };
  const { services, status } = useAppSelector((state) => state.pricing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPricingAll());
  }, [dispatch]);
  return (
    <section className={styles.root}>
      <h2>Послуги</h2>
      <p>
        Nam sed laoreet est. Fusce a porttitor sapien. Nunc egestas feugiat
        placerat.Aenean ac bibendum leo, vitae fringilla tellus.: 
      </p>
      <article className={styles.cards_block}>
        {status === "loaded" && services !== null
          ? services.map((service) => {
              let icon =
                service_icons.find((item) => item.name === service.name)
                  ?.icon || ServImage;

              return (
                <div className={styles.service_block} key={service.name}>
                  <div className={styles.card}>
                    <Image alt="Service" src={icon} width={200} height={200} />
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <p
                      className={styles.more_btn}
                      onClick={() => handleShowServiceInfo(service.name)}
                    >
                      Детальніше
                      {isClickedService === service.name ? (
                        <ChevronUp size={22} />
                      ) : (
                        <ChevronDown size={22} />
                      )}
                    </p>
                  </div>
                  <div
                    className={`${styles.serv_list} ${
                      isClickedService === service.name ? styles.show_list : ""
                    }`}
                  >
                    {service.whatDo.map((serv, index) => (
                      <div className={styles.list_item} key={index}>
                        <Circle fill="#294273" color="#294273" size={11} />
                        <p>{serv}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          : [...new Array(6)].map((_, index) => <ServiceLoader key={index} />)}
      </article>
    </section>
  );
}
