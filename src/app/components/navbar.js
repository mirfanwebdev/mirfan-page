"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { MdArrowOutward } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

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
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLocation(window.location.hash);
  }, []);

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    // console.log(sections);
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
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

  // console.log(active);
  return (
    <nav className={styles.nav}>
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
          Resume <MdArrowOutward />
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
