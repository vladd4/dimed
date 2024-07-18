import styles from "./Video.module.scss";
import { DetailsServiceItem } from "@/app/types/general.types";

type VideoProps = {
  service_item: DetailsServiceItem;
};

export default function VideoComp({ service_item }: VideoProps) {
  return (
    <section className={styles.root}>
      <h2>Приклад роботи:</h2>
      {service_item !== undefined && service_item.video_id !== "" && (
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
