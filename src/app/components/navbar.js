"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { MdArrowOutward } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import { linkList as links } from "../lib/linkList";

export default function Navbar() {
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    setLocation(window.location.hash);
  }, []);

  useEffect(() => {
    let sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
      threshold: 0.5,
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

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLink = (param) => {
    handleLocation(param);
    handleOpen();
  };

  const handleLocation = (param) => {
    setLocation(param);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.nav}>
      {open ? (
        <div className={styles.outerMenu}></div>
      ) : (
        <div
          className={styles.outerMenu}
          style={{ backgroundColor: "transparent", zIndex: "-1" }}
        ></div>
      )}
      <div className={styles.mobileMenu} style={{ right: open ? "0" : "" }}>
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
              onClick={() => handleLink(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link className={styles.resume} target="_blank" href="resume.pdf">
          Resume{" "}
          <span className={styles.arrow}>
            <MdArrowOutward />
          </span>
        </Link>
      </div>
      <div className={styles.toggle}>
        {open ? (
          <IoClose onClick={handleOpen} />
        ) : (
          <IoMenu onClick={handleOpen} />
        )}
      </div>
    </nav>
  );
}
