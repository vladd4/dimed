import { Circle } from "lucide-react";

import styles from "./ServBenefits.module.scss";

export default function ServiceBenefits() {
  return (
    <section className={styles.root}>
      <div className={styles.text_block}>
        <h2>Основні переваги лікувального масажу:</h2>
        <div className={styles.text_item}>
          <Circle fill="#294273" color="#294273" size={15} />
          <p>
            <b>Покращення кровообігу: </b>
            Масаж стимулює кровообіг, що сприяє швидшому виділенню токсинів та
            поживних речовин у тканини організму.
          </p>
        </div>
        <div className={styles.text_item}>
          <Circle fill="#294273" color="#294273" size={14} />
          <p>
            <b>Релаксація м'язів: </b>
            Регулярний масаж допомагає вирішувати проблеми зі спанням, нервовою
            напругою та загальним стресом.
          </p>
        </div>
        <div className={styles.text_item}>
          <Circle fill="#294273" color="#294273" size={15} />
          <p>
            <b>Покращення постави: </b>
            Шляхом вирівнювання м'язів і підтримки правильної постави, масаж
            може зменшити навантаження на хребет і суглоби.
          </p>
        </div>
      </div>
      <div className={styles.text_block}>
        <h2>Ефекти, які надає лікувальний масаж:</h2>
        <div className={styles.text_item}>
          <Circle fill="#294273" color="#294273" size={15} />
          <p>
            <b>Зменшення болю та дискомфорту: </b>
            Масаж допомагає знизити інтенсивність болю та дискомфорту в області
            суглобів та хребта.
          </p>
        </div>
        <div className={styles.text_item}>
          <Circle fill="#294273" color="#294273" size={11} />
          <p>
            <b>Покращення рухомості: </b>
            Регулярний масаж сприяє збільшенню гнучкості та рухомості суглобів.
          </p>
        </div>
        <div className={styles.text_item}>
          <Circle fill="#294273" color="#294273" size={16} />
          <p>
            <b>Загальне покращення самопочуття: </b>
            Після сеансу масажу багато клієнтів відчувають збільшення енергії,
            покращення настрою та зниження рівня стресу.
          </p>
        </div>
      </div>
    </section>
  );
}
