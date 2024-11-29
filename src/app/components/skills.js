import { skillList as skills } from "@/app/lib/skillList";
import styles from "./skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skillSection}>
      <h3>Skills</h3>
      <ul className={styles.skillList}>
        {skills.map((skill) => (
          <li className={styles.skillItem} key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
