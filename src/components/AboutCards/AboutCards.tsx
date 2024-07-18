import { collection, getDocs } from "firebase/firestore";
import styles from "./AboutCards.module.scss";
import CardsLoader from "./CardsLoader";
import { NumberCard } from "@/app/types/general.types";
import { db } from "@/firebase";

async function getData() {
  const collectionRef = collection(db, "about-numbers");
  const data = await getDocs(collectionRef);

  const serviceItems = data.docs.map((doc) => ({
    heading: doc.get("heading") as string,
    description: doc.get("description") as string,
    number: doc.get("number") as string,
  })) as NumberCard[];

  serviceItems.sort((a, b) => {
    const numberA = parseInt(a.number);
    const numberB = parseInt(b.number);

    if (numberA < numberB) {
      return -1;
    }
    if (numberA > numberB) {
      return 1;
    }
    return 0;
  });

  return serviceItems;
}

export default async function AboutCards() {
  const numberCards = await getData();
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
