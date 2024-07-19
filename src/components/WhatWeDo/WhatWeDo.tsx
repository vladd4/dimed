import styles from "./WhatDo.module.scss";

import { Circle } from "lucide-react";

import Link from "next/link";

import { getWhatDo } from "@/controllers/services";
import { encrypt } from "@/utils/stringEncryptor";

type WhatProps = {
  isAdmin?: boolean;
};

export default async function WhatWeDo({ isAdmin }: WhatProps) {
  const res = await getWhatDo();

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
            {hrebet !== undefined ? (
              hrebet.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${encrypt(condition)}`}
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
            {sugloby !== undefined ? (
              sugloby.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${encrypt(condition)}`}
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
            {pain !== undefined ? (
              pain.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${encrypt(condition)}`}
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
