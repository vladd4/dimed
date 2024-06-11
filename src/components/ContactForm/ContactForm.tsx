import styles from "./Form.module.scss";

export default function ContactForm() {
  return (
    <section className={styles.root}>
      <h2>Зворотній зв'язок</h2>
      <p>
        Залиште дані для запису та ми звʼяжемося з Вами протягом найближчого
        часу!
      </p>
      <form>
        <div className={styles.input_block}>
          <input type="text" placeholder="Ім'я" />
          <input type="text" placeholder="+380(__)___-__-__" />
        </div>
        <div className={styles.buttons_block}>
          <h2>Як з вами краще зв’язатись?</h2>
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
          <button>Залишити заявку</button>
        </div>
      </form>
    </section>
  );
}
