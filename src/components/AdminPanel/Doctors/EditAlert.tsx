import Image from "next/image";
import styles from "./Doctor.module.scss";

import Image1 from "@/../public/doctor.png";

export default function EditAlert() {
  return (
    <>
      <section className={styles.edit_root}>
        <h2>Редагувати лікаря</h2>
        <form>
          <Image alt="Docotr" src={Image1} width={300} height={700} />
          <input type="text" placeholder="ПІБ" />
          <input type="text" placeholder="Посада" />
          <input
            type="file"
            id="image"
            accept="image/png, image/gif, image/jpeg, image/jpg, image/webp, image/avif"
          />
          <button type="submit">Зберегти</button>
        </form>
      </section>
      <div className={styles.overlay} />
    </>
  );
}
