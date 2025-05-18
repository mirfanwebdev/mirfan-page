import { expList as list } from "@/app/lib/expList";
import styles from "./experiences.module.css";

export default function Experiences() {
  return (
    <section id="experiences" className={styles.experienceSection}>
      <h3>Experiences</h3>

      <ul className={styles.listContainer}>
        {list.map((item) => (
          <li className={styles.experienceContainer} key={item.id}>
            <p className={styles.date}>{item.date}</p>
            <div className={styles.experienceItem}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
