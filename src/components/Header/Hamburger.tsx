"use client";

import styles from "./Hamburger.module.scss";

import Link from "next/link";

import { X } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { setShowBurger } from "@/redux/slices/hamburgerSlice";

import { useEffect } from "react";

import { links } from "@/static_store/header_links";

export default function Hamburger() {
  const { showBurger } = useAppSelector((state) => state.hamburger);
  const dispatch = useAppDispatch();

  const handleCloseBurger = () => {
    dispatch(setShowBurger(false));
  };

  useEffect(() => {
    if (showBurger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showBurger]);

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
