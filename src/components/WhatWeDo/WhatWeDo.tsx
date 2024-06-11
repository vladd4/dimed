import { Circle } from "lucide-react";
import styles from "./WhatDo.module.scss";

const conditions_1 = [
  "Остеохондроз",
  "Кили (грижі) міжхребцевих дисків",
  "Протрузії міжхребцевих дисків",
  "Спондилоартроз",
  "Спондилолістез (зміщення) хребців",
  "Радикулопатія",
  "Цервікалгія",
  "Торакалгія",
  "Люмбалгія",
  "Патологічні деформації хребта",
  "Реабілітація після переломів",
  "Реабілітація після спортивних травм",
];

const conditions_2 = [
  "Остеопороз",
  "Артрози (гонартроз, коксартроз)",
  "Артрит",
  "Бурсит",
  "Контрактури",
  "Подагра",
  "Тендиніти",
  "Плантарний фасциїт",
  "П'яткова шпора",
  "Реабілітація після переломів",
  "Реабілітація після спортивних травм",
];

const conditions_3 = [
  "Головний біль, головокружіння, запаморочення",
  "Тунельний синдром",
  "Невралгія лицевого нерву",
  "Міжреберна невралгія",
  "Біль в спині",
  "Біль в шиї",
];

export default function WhatWeDo() {
  return (
    <section className={styles.root}>
      <h2>Що ми лікуємо?</h2>
      <article className={styles.cards_block}>
        <div className={styles.card}>
          <h2>Лікування захворювання хребта</h2>
          <div className={styles.card_list}>
            {conditions_1.map((condition) => {
              return (
                <div key={condition} className={styles.list_item}>
                  <Circle fill="#294273" color="#294273" size={11} />
                  <p>{condition}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.card}>
          <h2>Лікування захворювань суглобів</h2>
          <div className={styles.card_list}>
            {conditions_2.map((condition) => {
              return (
                <div key={condition} className={styles.list_item}>
                  <Circle fill="#294273" color="#294273" size={11} />
                  <p>{condition}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.card}>
          <h2>Лікування гострого та хронічного болю</h2>
          <div className={styles.card_list}>
            {conditions_3.map((condition) => {
              return (
                <div key={condition} className={styles.list_item}>
                  <Circle fill="#294273" color="#294273" size={11} />
                  <p>{condition}</p>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}
