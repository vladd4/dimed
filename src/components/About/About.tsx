import Image from "next/image";

import styles from "./About.module.scss";

import AboutImage from "@/../public/Group-5.webp";

import Link from "next/link";

import { MoveRight } from "lucide-react";

export default function About() {
  return (
    <section className={styles.root}>
      <div className={styles.text_block}>
        <h2>Довіряйте своє здоров’я професіоналам центру “Dimed”</h2>
        <p>
          Центр вертебрології та реабілітації у Вінниці- “Dimed” радий
          представити вам нашу команду лікарів , фізичних терапевтів та
          масажистів , які нададуть ввесь спектр необхідної допомоги у
          відновленні здоровʼя.
        </p>
        <p>
          Наша команда надає ряд послуг, а саме консультації невролога,
          вертебролога, сучасні інтенсивні фізіотерапевтичні процедури, якісний
          лікувальний масаж, комплексну індивідуально підібрану лікувальну
          фізкультуру. Кожен пацієнт отримає індивідуальний план лікування.
        </p>
        <p>
          Наш заклад спеціалізується на захворюваннях опорно-рухового апарата -
          а саме: хребта , суглобів та мʼязів .
        </p>
        <Link href="/about">
          Детальніше <MoveRight />
        </Link>
      </div>
      <Image alt="About" src={AboutImage} width={636} height={489} />
    </section>
  );
}
