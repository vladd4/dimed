"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import styles from "./AboutCards.module.scss";
import { useEffect } from "react";
import { fetchNumbers } from "@/redux/slices/aboutSlice";
import CardsLoader from "./CardsLoader";

const number_cards = [
  {
    number: "01",
    label: "Унікальне інноваційне обладнання",
    description:
      "Ми використовуємо виключно сертифіковане, європейське, високоінтенсине обладння для отримання швидшого та якіснішого відновлення наших пацієнтів.",
  },
  {
    number: "02",
    label: "Лікуємо пацієнтів з гострим та хронічним болем",
    description:
      "Спектр наших послуг дозволяє працювати з різними по важкості пацієнтами.",
  },
  {
    number: "03",
    label: "Високий рівень професіоналізму",
    description:
      "У нас працюють лише досвідчені фахівці, які є професіоналами у своїх галузях.",
  },
  {
    number: "04",
    label: "Спеціалізуємося на резорбції (зменшенні) міжхребцевих гриж",
    description:
      "Маємо результати пацієнтів, які отримали гарні результати резорбції без операції та зменшили грижу в 3 рази.",
  },
];

export default function AboutCards() {
  const dispatch = useAppDispatch();
  const { status, numberCards } = useAppSelector((state) => state.about);

  useEffect(() => {
    dispatch(fetchNumbers());
  }, [dispatch]);

  return (
    <section className={styles.root}>
      {status === "loaded" && numberCards !== null
        ? numberCards.map((card) => {
            return (
              <div key={card.number} className={styles.card_item}>
                <span>{`0${card.number}`}</span>
                <p className={styles.lable}>{card.heading}</p>
                <p>{card.description}</p>
              </div>
            );
          })
        : [...new Array(4)].map((_, index) => <CardsLoader key={index} />)}
    </section>
  );
}
