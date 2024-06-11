import Image from "next/image";
import styles from "./ServiceDetails.module.scss";

import Photo from "@/../public/фото масаж2 1.png";
import { CircleCheck, CircleX } from "lucide-react";

export default function ServiceDetails() {
  return (
    <section className={styles.root}>
      <article className={styles.top_block}>
        <Image alt="Massage" src={Photo} width={940} height={630} />
        <div className={styles.text_block}>
          <h2>Лікувальний масаж</h2>
          <p>
            У сучасному світі, коли стрес та фізичне навантаження стають
            невід'ємною частиною нашого життя, лікувальний масаж виявляється
            ефективним методом відновлення здоров'я та покращення самопочуття.
            Цей вид масажу, який пропонується в нашому центрі DIMED у Вінниці,
            який спеціалізується на лікуванні гриж, проблем суглобів та хребта,
            пропонуючи клієнтам індивідуалізований підхід та комплексну
            підтримку.
          </p>
          <p>
            Лікувальний масаж - це один з методів механічного впливу на пацієнта
            , а саме на м’язи ,фасції,сухожилки-кріплення м’язів.В лікувальному
            масажі використовуються техніки класичного масажу , такі як :
            поглажування,розтирання,розминання, прийоми вібрації.
          </p>
        </div>
      </article>
      <article className={styles.bottom_block}>
        <div className={styles.bottom_div}>
          <h2>Показання</h2>
          <div className={styles.bottom_item}>
            <CircleCheck
              size={50}
              color="#294273"
              fill="#ecf4ff"
              className={styles.svg}
            />
            <div>
              <h3>Суглобові захворювання</h3>
              <p>
                Зважаючи на покращення кровообігу та розслаблення м'язів, масаж
                може зменшити біль та стабілізувати рухомість суглобів.
              </p>
            </div>
          </div>
          <div className={styles.bottom_item}>
            <CircleCheck
              size={45}
              color="#294273"
              fill="#ecf4ff"
              className={styles.svg}
            />
            <div>
              <h3>Захворювання хребта</h3>
              <p>
                Лікувальний масаж сприяє розслабленню м'язів, виправленню
                постави та зменшенню болю в області хребта.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom_div}>
          <h2>Протипоказання</h2>
          <div className={styles.bottom_item}>
            <CircleX
              size={35}
              color="#ecf4ff"
              fill="#294273"
              style={{ marginTop: "-1%" }}
            />
            <div>
              <h3>Гострі запалення шкіри або інфекції</h3>
              <p>
                У цих випадках масаж може погіршити стан та поширити інфекцію.
              </p>
            </div>
          </div>
          <div className={styles.bottom_item}>
            <CircleX
              size={50}
              color="#ecf4ff"
              fill="#294273"
              className={styles.svg}
            />
            <div>
              <h3>Підвищена температура тіла</h3>
              <p>
                Масаж не рекомендується при підвищенні температури тіла,
                оскільки це може загострити симптоми.
              </p>
            </div>
          </div>
          <div className={styles.bottom_item}>
            <CircleX
              size={40}
              color="#ecf4ff"
              fill="#294273"
              style={{ marginTop: "-1.5%" }}
            />
            <div>
              <h3>Тромбози та серйозні серцево-судинні захворювання</h3>
              <p>
                У таких випадках масаж може бути небезпечним без лікарського
                консультування.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
