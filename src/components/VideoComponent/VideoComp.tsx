import styles from "./Video.module.scss";

export default function VideoComp() {
  return (
    <section className={styles.root}>
      <h2>Приклад роботи:</h2>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/CsR5AdoTJfI"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className={styles.video}
      />
    </section>
  );
}
