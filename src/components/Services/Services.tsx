"use client";

import styles from "./Services.module.scss";

import Image from "next/image";

import { ChevronDown, ChevronUp, Circle } from "lucide-react";

import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { fetchPricingAll } from "@/redux/slices/pricingSlice";

import { service_icons } from "@/static_store/service_icons";

import ServImage from "@/../public/service-icons/consult.png";

import ServiceLoader from "./ServiceLoader";
import { fetchServiceLabel } from "@/redux/slices/serviceSlice";
import Link from "next/link";

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
  const { serviceLabel } = useAppSelector((state) => state.services);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPricingAll());
    dispatch(fetchServiceLabel());
  }, [dispatch]);
  return (
    <section className={styles.root}>
      <h2>Послуги</h2>
      <p>{serviceLabel}</p>
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
                      <Link
                        href={`/services/service?id=${serv}`}
                        className={styles.list_item}
                        key={index}
                      >
                        <Circle fill="#294273" color="#294273" size={11} />
                        <p>{serv}</p>
                      </Link>
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
