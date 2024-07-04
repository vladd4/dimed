"use client";

import { useAppDispatch } from "@/hooks/redux-hooks";
import styles from "./ServiceApoint.module.scss";
import { setShowAlert } from "@/redux/slices/alertSlice";

type AppointProps = {
  id: string;
};

export default function ServiceApoint({ id }: AppointProps) {
  const dispatch = useAppDispatch();
  return (
    <section className={styles.root}>
      <p className={styles.label}>Запишіться в DIMED вже сьогодні!</p>
      <p>
        Звертаючись до нашого центру DIMED у Вінниці, ви можете розраховувати на
        індивідуальний підхід, який враховує ваші потреби та проблеми зі
        здоров'ям.
      </p>
      <div className={styles.button_block}>
        <div>
          <p>{id}</p>
        </div>
        <button onClick={() => dispatch(setShowAlert(true))} id="open-alert">
          Записатись на прийом
        </button>
      </div>
    </section>
  );
}
