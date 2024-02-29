import Image from "next/image";
import styles from "./page.module.css";
import Skills from "./components/skills";

function About() {
  return (
    <section id="about">
      <p>
        Back in 2021, when pandemic happened I was working as laboratory
        analyst. I was thinking about how to improve my skills.
      </p>
    </section>
  );
}

function Projects() {
  const projectList = [
    {
      title: "Binar Car Rental - Customer",
      details:
        "Binar bootcamp assignment project, web app for renting cars. Login and register your account, view and search your desired car, and set your renting duration. Create order and pick your bank payment.",
      stacks: ["Vite", "React", "Redux Toolkit", "Ant Design", "Vercel"],
    },
    {
      title: "Restoku - Restaurant Admin",
      details:
        "Admin dashboard web application for managing restaurant menus. Login and create your account, view sales data, and manage your menu. Add, edit and delete the menu.",
      stacks: ["Vite", "React", "Redux Toolkit", "Tailwind", "Vercel"],
    },
    {
      title: "M. Irfan portofolio site",
      details: "My personal portofolio site build with NextJS and Vercel",
      stacks: ["NextJS", "Module CSS", "Vercel"],
    },
    {
      title: "Frontendmentor.io - M. Irfan challenge solutions",
      details:
        "Solutions for Frontend Mentor challenges. View solutions from design challenge and implement with determined tech stacks",
    },
  ];
  return (
    <section id="projects">
      <p>Projects</p>
      <div>
        --project-container--
        <div>--project-picture--</div>
        <div>
          <h3>--project-title-</h3>
          <p>--project-details-</p>
        </div>
      </div>
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
