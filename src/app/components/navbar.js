"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { MdArrowOutward } from "react-icons/md";

const links = [
  {
    label: "Home",
    href: "/",
    id: "home",
  },
  {
    label: "About",
    href: "#about",
    id: "about",
  },
  {
    label: "Skills",
    href: "#skills",
    id: "skills",
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
];

export default function Navbar() {
  const [location, setLocation] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    setLocation(window.location.hash);
  }, []);

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    // console.log(sections);
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  const handleLocation = (param) => {
    setLocation(param);
  };

  // console.log(active);
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            className={
              active == link.id ||
              (active == link.id && location == `#${link.href}`)
                ? styles.active
                : ""
            }
            key={link.href}
            href={link.href}
            onClick={() => handleLocation(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link className={styles.resume} target="_blank" href="resume.pdf">
        Resume <MdArrowOutward />
      </Link>
    </nav>
  );
}
