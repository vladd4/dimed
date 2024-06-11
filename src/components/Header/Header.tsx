"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

import Logo from "@/../public/logo-black.png";
import Phone from "@/../public/phone-icon.svg";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setShowAlert } from "@/redux/slices/alertSlice";

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
      </div>
    </header>
  );
}