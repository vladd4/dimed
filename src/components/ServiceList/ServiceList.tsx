"use client";

import Image from "next/image";

import styles from "./ServiceList.module.scss";

import { Circle } from "lucide-react";

import React, { useState } from "react";

import { service_icons } from "@/static_store/service_icons";

import ServImage from "@/../public/service-icons/consult.png";

import ServiceListLoader from "./ServiceListLoader";

import Link from "next/link";
import ServiceMobileLoader from "./ServiceMobileLoader";
import { ServiceItem } from "@/app/types/general.types";
import { encrypt } from "@/utils/stringEncryptor";

type ServiceListProps = {
  isPricing?: boolean;
  services?: ServiceItem[];
  serviceLabel?: string;
};

export default function ServiceList({
  isPricing,
  services,
  serviceLabel,
}: ServiceListProps) {
  const [isClickedPrice, setisClickedPrice] = useState<string[]>([]);
  const [isClickedService, setisClickedService] = useState<string>("");

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
      <p>{serviceLabel}</p>
      <article className={styles.list_block}>
        <div className={styles.list}>
          {services !== undefined
            ? services.map((service) => {
                let icon =
                  service_icons.find((item) => item.name === service.name)
                    ?.icon || ServImage;
                return (
                  <React.Fragment key={service.name}>
                    <div
                      onClick={
                        isPricing
                          ? () => handleShowTable(service.name)
                          : () => handleShowServiceInfo(service.name)
                      }
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
                            <Link
                              href={`/services/service?id=${encrypt(serv)}`}
                              className={styles.mobile_service}
                              key={serv}
                              onClick={() => {
                                sessionStorage.setItem("service-heading", serv);
                              }}
                            >
                              {serv}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </React.Fragment>
                );
              })
            : [...new Array(6)].map((_, index) => (
                <React.Fragment key={index}>
                  <ServiceListLoader key={index} />
                  <ServiceMobileLoader />
                </React.Fragment>
              ))}
        </div>
        {!isPricing && (
          <div
            className={`${styles.service_info} ${
              isClickedService !== "" ? styles.show_info : ""
            }`}
          >
            {services !== undefined &&
              services.map((item) => {
                if (item.name === isClickedService) {
                  return item.whatDo.map((serv) => (
                    <Link
                      href={`/services/service?id=${encrypt(serv)}`}
                      onClick={() => {
                        sessionStorage.setItem("service-heading", serv);
                      }}
                      className={styles.list_item}
                      key={serv}
                    >
                      <Circle fill="#294273" color="#294273" size={11} />
                      <p>{serv}</p>
                    </Link>
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
