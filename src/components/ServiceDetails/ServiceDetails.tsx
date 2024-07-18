import Image from "next/image";

import styles from "./ServiceDetails.module.scss";

import { CircleCheck, CircleX } from "lucide-react";
import { DetailsServiceItem } from "@/app/types/general.types";

type ServProps = {
  id: string;
  service_item: DetailsServiceItem;
};

export default function ServiceDetails({ id, service_item }: ServProps) {
  const paragraphs = service_item?.paragraph.split("/n");

  return (
    <section className={styles.root}>
      <article className={styles.top_block}>
        {service_item !== undefined && (
          <Image
            alt="Massage"
            src={service_item.image}
            width={940}
            height={630}
          />
        )}

        <div className={styles.text_block}>
          <h2>{id}</h2>
          {paragraphs !== undefined &&
            paragraphs.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
        </div>
      </article>
      <article className={styles.bottom_block}>
        <div className={styles.bottom_div}>
          <h2>Показання</h2>
          {service_item !== undefined &&
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
            })}
        </div>
        <div className={styles.bottom_div}>
          <h2>Протипоказання</h2>
          {service_item !== undefined &&
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
            })}
        </div>
      </article>
    </section>
  );
}
