import Link from "next/link";
import styles from "./BreadCrumbs.module.scss";
import { MoveRight } from "lucide-react";

type BreadCrumbsProps = {
  link_label: string;
  link_href: string;
  isBlog?: boolean;
};

export default function BreadCrumbs({
  link_label,
  link_href,
  isBlog,
}: BreadCrumbsProps) {
  return (
    <section className={styles.root}>
      <Link href="/">Головна</Link>
      <MoveRight />
      {isBlog && (
        <>
          <Link href="/blog">Блог</Link>
          <MoveRight />
        </>
      )}
      <Link href={link_href} className={styles.disabled_link}>
        {link_label}
      </Link>
    </section>
  );
}
