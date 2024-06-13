import styles from "./Admin.module.scss";

import Link from "next/link";

export default function AdminHeader() {
  return (
    <section className={styles.header}>
      <h1>DIMED Admin</h1>
      <nav>
        <Link href="/admin-panel">Лікарі</Link>
        <Link href="/admin-panel/pricing">Ціни</Link>
        <Link href="/admin-panel/blog">Блог</Link>
        <Link href="/admin-panel/what-do">Що ми лікуємо</Link>
      </nav>
      <button>Вийти</button>
    </section>
  );
}
