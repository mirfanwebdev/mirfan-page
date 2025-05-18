import Skills from "./components/skills";
import Projects from "./components/projects";
import styles from "./page.module.css";
import Experiences from "./components/experiences";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h3>About Me</h3>
      <p>
        Fullstack Developer with passion for problem-solving and create
        meaningful website.
      </p>
      <p>
        Through working experience and intensive bootcamp, I have acquired
        proficiency to build <b>responsive website</b>. I have learned the
        fundamental both in frontend and backend. I have knowledge of HTML, CSS,
        JavaScript, React, and Vue. I also have knowledge to build{" "}
        <b>RESTful API</b> with NodeJS, ExpressJS, and Laravel.
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
        2025. Build with <b>NextJS</b> and deployed with <b>Vercel</b> by{" "}
        <b>M. Irfan</b>
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
