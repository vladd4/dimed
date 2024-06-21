"use client";

import { useAppSelector } from "@/hooks/redux-hooks";
import styles from "./Video.module.scss";

export default function VideoComp() {
  const { service_item } = useAppSelector((state) => state.serviceDetails);

  return (
    <section className={styles.root}>
      <h2>Приклад роботи:</h2>
      {service_item !== null && service_item.video_id !== "" && (
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${service_item?.video_id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          className={styles.video}
        />
      )}
    </section>
  );
}
