import Image from "next/image";

import styles from "./Footer.module.scss";

import Logo from "@/../public/logo-black.png";
import Face from "@/../public/face.png";
import Insta from "@/../public/insta.png";
import Teleg from "@/../public/teleg.png";

import { Clock, MapPin, Phone } from "lucide-react";

import Link from "next/link";

export default function Footer() {
  return (
    <section className={styles.root} id="contacts">
      <h2>Контакти</h2>
      <footer className={styles.footer}>
        <div className={styles.logo_block}>
          <Link className={styles.image_link} href="/">
            <Image alt="DIMED" src={Logo} width={238} height={51} />
          </Link>
          <p>Безопераційне відновлення хребта та суглобів</p>
          <p>Центр вертебрології</p>
          <div className={styles.socials}>
            <a href="https://sdsd">
              <Image alt="Facebook" src={Face} width={41} height={41} />
            </a>
            <a href="https://sdsd">
              <Image alt="Instagram" src={Insta} width={41} height={41} />
            </a>
            <a href="https://sdsd">
              <Image alt="Telegram" src={Teleg} width={41} height={41} />
            </a>
          </div>
        </div>
        <div className={styles.links_block}>
          <div>
            <h3>Пацієнту</h3>
            <Link href="/services">Послуги</Link>
            <Link href="/doctors">Лікарі</Link>
          </div>
          <div>
            <h3>Про клініку</h3>
            <Link href="/">Ліцензія та сертифікати</Link>
            <Link href="/about">Про нас</Link>
          </div>
          <div className={styles.icons_block}>
            <div className={`${styles.icons_item} ${styles.clock}`}>
              <Clock size={20} /> <p>Пн-Нд: 09:00 - 21:00</p>
            </div>
            <a href="https'/sd" className={styles.icons_item}>
              <MapPin size={20} />
              <p>м. Вінниця, вул. Миколи Оводова, 93 </p>
            </a>
            <a href="https'/sd" className={styles.icons_item}>
              <Phone size={20} /> <p>+38 (097) 991 42 03</p>
            </a>
          </div>
        </div>
      </footer>
      <p className={styles.copy}>© 2024 DIMED – Центр вертебрології</p>
    </section>
  );
}
