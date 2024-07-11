"use client";

import Image from "next/image";

import styles from "./Header.module.scss";

import Link from "next/link";

import Logo from "@/../public/logo_welcome 1.svg";
import Phone from "@/../public/phone-icon.svg";

import { useAppDispatch } from "../../hooks/redux-hooks";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { setShowBurger } from "@/redux/slices/hamburgerSlice";

import { AlignJustify } from "lucide-react";

import { links } from "@/static_store/header_links";

export default function Header() {
  const dispatch = useAppDispatch();
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image alt="DIMED" src={Logo} width={238} height={51} />
        </Link>
        <nav>
          {links.map((link) => {
            return (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            );
          })}
          <Image
            id="alert-open"
            alt="Contact Us"
            src={Phone}
            onClick={() => dispatch(setShowAlert(true))}
          />
        </nav>
        <div className={styles.mobile_div}>
          <Image
            id="alert-open"
            alt="Contact Us"
            className={styles.phone_mobile}
            src={Phone}
            onClick={() => dispatch(setShowAlert(true))}
          />
          <AlignJustify
            className={styles.hamburger_icon}
            size={40}
            onClick={() => dispatch(setShowBurger(true))}
          />
        </div>
      </div>
    </header>
  );
}
