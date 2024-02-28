import Link from "next/link";
import styles from "./navbar.module.css";

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
    label: "Skillset",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <Link className={styles.resume} href="/resume">
        Resume
      </Link>
    </nav>
  );
}
