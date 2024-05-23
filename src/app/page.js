import Skills from "./components/skills";
import Projects from "./components/projects";
import styles from "./page.module.css";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h3>About Me</h3>
      <p>
        Back in 2021, when pandemic happened, I was working as laboratory
        analyst. Today I pursue my passion for problem-solving and create
        meaningful website, then my journey into font end web development began.
      </p>
      <p>
        Through intensive bootcamp and self-learning, I have acquired
        proficiency to build <b>responsive web</b>. I have learned the
        fundamental of HTML, CSS, JavaScript, and React. I also have knowledge
        to build <b>single page applications</b> with NextJS and Redux.
      </p>
      <p>
        With my background, I bring unique prespective. My analytical mindset
        combine with my newfound technical skills, allows me to deliver high
        quality work. I thrive in colaborative environment, and dedicated to
        continous learning and growth in field of web development.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        2024. Build with <b>NextJS</b> and deployed with <b>Vercel</b> by{" "}
        <b>M. Irfan</b>
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
