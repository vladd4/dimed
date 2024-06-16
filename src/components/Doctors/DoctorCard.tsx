import styles from "./Doctors.module.scss";

import { Pencil, Trash2 } from "lucide-react";

type CardProps = {
  isFull?: boolean;
  isAdmin?: boolean;
  name: string;
  position: string;
  image: string;
};

export default function DoctorCard({
  isFull,
  isAdmin,
  name,
  position,
  image,
}: CardProps) {
  return (
    <section
      className={`${styles.item_root} ${isFull ? styles.full_width : ""} ${
        isAdmin ? styles.admin_item : ""
      }`}
    >
      {isAdmin && (
        <div className={styles.admin_controls}>
          <Pencil size={22} />
          <Trash2 size={22} />
        </div>
      )}
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.text_block}>
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
    </section>
  );
}
