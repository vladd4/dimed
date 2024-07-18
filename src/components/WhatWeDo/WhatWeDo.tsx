import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import styles from "./WhatDo.module.scss";

import { Circle } from "lucide-react";

import Link from "next/link";
import { db } from "@/firebase";

type WhatProps = {
  isAdmin?: boolean;
};

async function getData() {
  const collectionRef = collection(db, "disease");
  const data = await getDocs(collectionRef);
  let hrebet: string[] = [];
  let pain: string[] = [];
  let sugloby: string[] = [];

  data.docs.forEach((doc: QueryDocumentSnapshot) => {
    const disease = doc;
    if (disease.id === "hrebet") {
      hrebet = disease.data().values as string[];
    }
    if (disease.id === "pain") {
      pain = disease.data().values as string[];
    }
    if (disease.id === "sugloby") {
      sugloby = disease.data().values as string[];
    }
  });

  return {
    hrebet,
    pain,
    sugloby,
  };
}

export default async function WhatWeDo({ isAdmin }: WhatProps) {
  const res = await getData();

  const hrebet = res.hrebet as string[];
  const pain = res.pain as string[];
  const sugloby = res.sugloby as string[];

  return (
    <section className={`${styles.root} ${isAdmin ? styles.admin_root : ""}`}>
      {!isAdmin && <h2>Що ми лікуємо?</h2>}
      <article className={styles.cards_block}>
        <div className={styles.card}>
          <h2>Лікування захворювання хребта</h2>
          <div className={styles.card_list}>
            {hrebet !== null ? (
              hrebet.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${condition}`}
                    key={condition}
                    className={styles.list_item}
                  >
                    <Circle fill="#294273" color="#294273" size={11} />
                    <p>{condition}</p>
                  </Link>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className={styles.card}>
          <h2>Лікування захворювань суглобів</h2>
          <div className={styles.card_list}>
            {sugloby !== null ? (
              sugloby.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${condition}`}
                    key={condition}
                    className={styles.list_item}
                  >
                    <Circle fill="#294273" color="#294273" size={11} />
                    <p>{condition}</p>
                  </Link>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className={styles.card}>
          <h2>Лікування гострого та хронічного болю</h2>
          <div className={styles.card_list}>
            {pain !== null ? (
              pain.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${condition}`}
                    key={condition}
                    className={styles.list_item}
                  >
                    <Circle fill="#294273" color="#294273" size={11} />
                    <p>{condition}</p>
                  </Link>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
