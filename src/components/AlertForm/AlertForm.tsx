"use client";

import { X } from "lucide-react";
import styles from "./AlertForm.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export default function AlertForm() {
  const dispatch = useAppDispatch();
  const { showAlert } = useAppSelector((state) => state.alert);
  const alertRef = useRef(null);

  const handleCloseForm = (state: boolean) => {
    dispatch(setShowAlert(state));
  };

  // useClickOutside(
  //   alertRef,
  //   showAlert,
  //   handleCloseForm,
  //   document?.getElementById("alert-open") &&
  //     document.getElementById("alert-open")
  // );

  return (
    <>
      <section
        ref={alertRef}
        className={`${styles.root} ${showAlert ? styles.show_alert : ""}`}
      >
        <X
          className={styles.close_span}
          size={40}
          onClick={() => handleCloseForm(false)}
        />
        <div className={styles.form}>
          <h2>Записатись на прийом</h2>
          <input type="text" placeholder="Ім'я" />
          <input type="text" placeholder="+380(__)___-__-__" />
          <div className={styles.radio_block}>
            <p className={styles.label}>Як з вами краще зв'язатись?</p>
            <div className={styles.radio_btns}>
              <div className={styles.radio_input}>
                <input type="radio" />
                <p>Напишіть мені у Viber</p>
              </div>
              <div className={styles.radio_input}>
                <input type="radio" />
                <p>Подзвоніть мені</p>
              </div>
            </div>
          </div>
          <button>Записатись на прийом</button>
        </div>
      </section>
      <div
        className={`${styles.overlay} ${showAlert ? styles.show_alert : ""}`}
      />
    </>
  );
}
