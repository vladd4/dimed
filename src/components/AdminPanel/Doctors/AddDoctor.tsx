import styles from "./Doctor.module.scss";

export default function AddDoctor() {
  return (
    <section className={styles.root}>
      <h2>Додати лікаря</h2>
      <form>
        <input type="text" placeholder="ПІБ" />
        <input type="text" placeholder="Посада" />
        <input
          type="file"
          id="image"
          accept="image/png, image/gif, image/jpeg, image/jpg, image/webp, image/avif"
        />
        <button type="submit">Додати</button>
      </form>
    </section>
  );
}
