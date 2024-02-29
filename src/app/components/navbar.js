"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { MdArrowOutward } from "react-icons/md";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

export default function Navbar() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const onLocationChange = () => {
      setLocation(window.location.hash);
    };
    // window.addEventListener("hashchange", onLocationChange);
    // return () => window.removeEventListener("hashchange", onLocationChange);
  }, []);
  const handleLocation = (param) => {
    setLocation(param);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            className={location == link.href ? styles.active : ""}
            key={link.href}
            href={link.href}
            onClick={() => handleLocation(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link className={styles.resume} href="/resume">
        Resume <MdArrowOutward />
      </Link>
    </nav>
  );
}
