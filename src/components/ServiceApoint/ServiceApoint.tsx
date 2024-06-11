import styles from "./ServiceApoint.module.scss";

export default function ServiceApoint() {
  return (
    <section className={styles.root}>
      <p className={styles.label}>
        Запишіться на лікувальний масаж в DIMED вже сьогодні!
      </p>
      <p>
        Звертаючись до нашого центру DIMED у Вінниці, ви можете розраховувати на
        індивідуальний підхід, який враховує ваші потреби та проблеми зі
        здоров'ям. Наші кваліфіковані фахівці з масажу зроблять все можливе, щоб
        забезпечити вам максимальний комфорт та позитивний результат від
        лікувального масажу.
      </p>
      <div className={styles.button_block}>
        <div>
          <p>Лікувальний масаж</p>
          <span>300 грн</span>
        </div>
        <button>Записатись на прийом</button>
      </div>
    </section>
  );
}
