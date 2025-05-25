import { expList as list } from "@/app/lib/expList";
import styles from "./experiences.module.css";
import SectionTitle from "./SectionTitle";
import TechStackPill from "./TechStackPill";

export default function Experiences() {
  return (
    <section id="experiences" className={styles.experienceSection}>
      <SectionTitle>Experiences</SectionTitle>

      <ul className={styles.listContainer}>
        {list.map((item) => (
          <li className={styles.experienceContainer} key={item.id}>
            <p className={styles.date}>{item.date}</p>
            <div className={styles.experienceItem}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <TechStackPill stacksArray={item.stacks} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
