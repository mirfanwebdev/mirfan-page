import { skillList as skills } from "@/app/lib/skillList";

import styles from "./skills.module.css";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className={styles.skillSection}>
      <SectionTitle>Skills</SectionTitle>
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
