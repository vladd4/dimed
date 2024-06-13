"use client";

import styles from "./Hamburger.module.scss";
import Link from "next/link";

import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { setShowBurger } from "@/redux/slices/hamburgerSlice";

const links = [
  {
    label: "Послуги",
    href: "/services",
  },
  {
    label: "Ціна",
    href: "/pricing",
  },
  {
    label: "Про нас",
    href: "/about",
  },
  {
    label: "Блог",
    href: "/blog",
  },
  {
    label: "Лікарі",
    href: "/doctors",
  },
  {
    label: "Контакти",
    href: "/#contacts",
  },
];

export default function Hamburger() {
  const { showBurger } = useAppSelector((state) => state.hamburger);
  const dispatch = useAppDispatch();

  const handleCloseBurger = () => {
    dispatch(setShowBurger(false));
  };

  return (
    <article
      className={`${styles.root} ${showBurger ? styles.show_burger : ""}`}
    >
      <X className={styles.close_span} size={40} onClick={handleCloseBurger} />
      {links.map((link) => {
        return (
          <Link key={link.href} href={link.href} onClick={handleCloseBurger}>
            {link.label}
          </Link>
        );
      })}
    </article>
  );
}
