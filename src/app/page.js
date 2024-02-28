import Image from "next/image";
import styles from "./page.module.css";
import Skills from "./components/skills";

function About() {
  return (
    <section>
      <p>
        Back in 2021, when pandemy happened I was working as laboratory analyst.
        I was thinking about how to improve my skills.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <p>Projects</p>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
    </>
  );
}
