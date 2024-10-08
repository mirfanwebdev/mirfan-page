import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiRedux, SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { SiVuedotjs } from "react-icons/si";
import styles from "./skills.module.css";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <DiHtml5 />,
    },
    {
      name: "CSS",
      icon: <DiCss3 />,
    },
    { name: "JS", icon: <DiJsBadge /> },
    {
      name: "React",
      icon: <DiReact />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      name: "Next",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "TS",
      icon: <SiTypescript />,
    },
    {
      name: "Git",
      icon: <DiGit />,
    },
    {
      name: "Vue",
      icon: <SiVuedotjs />,
    },
  ];
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
