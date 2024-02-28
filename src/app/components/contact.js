import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import styles from "./contact.module.css";

const contactList = [
  {
    name: "Github",
    url: "https://github.com/mirfan",
    icon: <AiFillGithub />,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/mirfan",
    icon: <AiFillLinkedin />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mirfan",
    icon: <FaXTwitter />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mirfan",
    icon: <AiOutlineInstagram />,
  },
  {
    name: "Email",
    url: "mailto:6HwCt@example.com",
    icon: <AiOutlineMail />,
  },
];

export default function Contact() {
  return (
    <aside className={styles.contact}>
      {contactList.map((contact) => (
        <Link
          className={styles.iconContainer}
          key={contact.url}
          href={contact.url}
        >
          <p className={styles.icon}>{contact.icon}</p>
          <p className={styles.alt}>{contact.name}</p>
        </Link>
      ))}
    </aside>
  );
}
