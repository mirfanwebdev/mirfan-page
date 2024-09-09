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
    url: "https://github.com/mirfanwebdev",
    icon: <AiFillGithub />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/m-irfan-webdev/",
    icon: <AiFillLinkedin />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mirfanwebdev",
    icon: <FaXTwitter />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/m.irfan_16",
    icon: <AiOutlineInstagram />,
  },
  {
    name: "Email",
    url: "mailto:m.irfanwebdev@gmail.com",
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
          target="_blank"
        >
          <p className={styles.icon}>{contact.icon}</p>
          <p className={styles.alt}>{contact.name}</p>
        </Link>
      ))}
    </aside>
  );
}
