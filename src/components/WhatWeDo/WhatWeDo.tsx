"use client";

import styles from "./WhatDo.module.scss";

import { Circle, Trash2 } from "lucide-react";

import { useEffect } from "react";

import { fetchServices } from "@/redux/slices/serviceSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import Link from "next/link";

type WhatProps = {
  isAdmin?: boolean;
};

export default function WhatWeDo({ isAdmin }: WhatProps) {
  const { status, sugloby, hrebet, pain } = useAppSelector(
    (state) => state.services
  );
  const dispatch = useAppDispatch();

  const handleDiseaseClick = (cond: string) => {
    sessionStorage.setItem("disease-heading", cond);
  };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  return (
    <section className={`${styles.root} ${isAdmin ? styles.admin_root : ""}`}>
      {!isAdmin && <h2>Що ми лікуємо?</h2>}
      <article className={styles.cards_block}>
        <div className={styles.card}>
          <h2>Лікування захворювання хребта</h2>
          <div className={styles.card_list}>
            {status === "loaded" && hrebet !== null ? (
              hrebet.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${condition}`}
                    key={condition}
                    className={styles.list_item}
                    onClick={() => handleDiseaseClick(condition)}
                  >
                    {isAdmin && <Trash2 className={styles.delete} size={20} />}
                    <Circle fill="#294273" color="#294273" size={11} />
                    <p>{condition}</p>
                  </Link>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
            {isAdmin && (
              <form className={styles.add_form}>
                <input type="text" placeholder="Назва..." />
                <button>Додати</button>
              </form>
            )}
          </div>
        </div>
        <div className={styles.card}>
          <h2>Лікування захворювань суглобів</h2>
          <div className={styles.card_list}>
            {status === "loaded" && sugloby !== null ? (
              sugloby.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${condition}`}
                    key={condition}
                    className={styles.list_item}
                    onClick={() => handleDiseaseClick(condition)}
                  >
                    {isAdmin && <Trash2 className={styles.delete} size={20} />}
                    <Circle fill="#294273" color="#294273" size={11} />
                    <p>{condition}</p>
                  </Link>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
            {isAdmin && (
              <form className={styles.add_form}>
                <input type="text" placeholder="Назва..." />
                <button>Додати</button>
              </form>
            )}
          </div>
        </div>
        <div className={styles.card}>
          <h2>Лікування гострого та хронічного болю</h2>
          <div className={styles.card_list}>
            {status === "loaded" && pain !== null ? (
              pain.map((condition) => {
                return (
                  <Link
                    href={`/diseases?id=${condition}`}
                    key={condition}
                    className={styles.list_item}
                    onClick={() => handleDiseaseClick(condition)}
                  >
                    {isAdmin && <Trash2 className={styles.delete} size={20} />}
                    <Circle fill="#294273" color="#294273" size={11} />
                    <p>{condition}</p>
                  </Link>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
            {isAdmin && (
              <form className={styles.add_form}>
                <input type="text" placeholder="Назва..." />
                <button>Додати</button>
              </form>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
