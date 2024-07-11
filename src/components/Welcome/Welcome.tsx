"use client";

import styles from "./Welcome.module.scss";

import Image from "next/image";

import Logo from "@/../public/logo_welcome 1.svg";

import { useAppDispatch } from "../../hooks/redux-hooks";
import { setShowAlert } from "@/redux/slices/alertSlice";

export default function Welcome() {
  const dispatch = useAppDispatch();
  return (
    <>
      <section className={styles.root}>
        <article className={styles.wrapper}>
          <Image alt="DIMED" src={Logo} width={238} height={51} />
          <h1>Безопераційне відновлення хребта та суглобів</h1>
          <h1>Центр вертебрології</h1>
          <button id="alert-open" onClick={() => dispatch(setShowAlert(true))}>
            Записатись на прийом
          </button>
        </article>
      </section>
      <button
        id="alert-open"
        className={styles.mobile_btn}
        onClick={() => dispatch(setShowAlert(true))}
      >
        Записатись на прийом
      </button>
    </>
  );
}
