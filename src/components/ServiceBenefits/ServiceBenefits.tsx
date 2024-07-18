import { Circle } from "lucide-react";

import styles from "./ServBenefits.module.scss";
import { DetailsServiceItem } from "@/app/types/general.types";

type ServProps = {
  service_item: DetailsServiceItem;
};

export default function ServiceBenefits({ service_item }: ServProps) {
  return (
    <section className={styles.root}>
      <div className={styles.text_block}>
        <h2>Основні переваги:</h2>
        {service_item !== undefined &&
          service_item.benefits.map((item) => {
            return (
              <div key={item.name} className={styles.text_item}>
                <Circle fill="#294273" color="#294273" size={10} />
                <p>
                  <b>{item.name}: </b>
                  {item.description}
                </p>
              </div>
            );
          })}
      </div>
      <div className={styles.text_block}>
        <h2>Ефекти, які надає:</h2>
        {service_item !== undefined &&
          service_item.effects.map((item) => {
            return (
              <div key={item.name} className={styles.text_item}>
                <Circle fill="#294273" color="#294273" size={10} />
                <p>
                  <b>{item.name}: </b>
                  {item.description}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
