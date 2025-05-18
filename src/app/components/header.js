import Image from "next/image";
import Contact from "./contact";
import styles from "./header.module.css";
export default function Header() {
  const imageUrl =
    "https://res.cloudinary.com/djvcn4e3e/image/upload/v1706504867/personal/mirfan-profile.jpg";
  return (
    <header className={styles.header}>
      <div className={styles.summary}>
        <h1>M. Irfan</h1>
        <h2>Fullstack Web Developer</h2>
        <p>
          Science and tech enthusiast who pursue his passion in web development.
        </p>
      </div>
      <Image
        className={styles.photo}
        src={imageUrl}
        width={250}
        height={250}
        priority={true}
        alt="photo of mirfan"
      />
      {/* <p>--photo-image--</p> */}
      <Contact />
    </header>
  );
}
