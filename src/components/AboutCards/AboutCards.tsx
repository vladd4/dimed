import { getData } from "@/utils/getDataHelper";
import styles from "./AboutCards.module.scss";
import CardsLoader from "./CardsLoader";
import { NumberCard } from "@/app/types/general.types";

export default async function AboutCards() {
  const items = await getData("/card");
  const numberCards = items.body as NumberCard[];

  return (
    <section className={styles.root}>
      {numberCards !== null
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
