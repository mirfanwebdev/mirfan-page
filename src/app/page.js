import Image from "next/image";
import binarImg from "@/app/assets/binar-car-screenshot.png";
import frontImg from "@/app/assets/front-mentor-3.jpg";
import Skills from "./components/skills";
import { MdArrowOutward } from "react-icons/md";
import styles from "./page.module.css";
import Link from "next/link";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h3>About</h3>
      <p>
        Back in 2021, when pandemic happened, I was working as laboratory
        analyst. Today I am pursue my passion for problem-solving and create
        meaningful website, and then my journey into web development began.
      </p>
      <p>
        Through intensive bootcamp and self-learning, I have acquired
        proficiency to build responsive web. I have learned the fundamental of
        HTML, CSS, JavaScript, and React. I also have knowledge to build single
        page applications with NextJS and Redux.
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

function Projects() {
  const projectList = [
    {
      url: "https://23001028-14-kel2-car-rental-platinum-customer.vercel.app/",
      image: binarImg,
      title: "Binar Car Rental - Customer",
      details:
        "Binar bootcamp assignment project, web app for renting cars. Login and register your account, view and search your desired car, and set your renting duration. Create order and pick your bank payment.",
      stacks: ["Vite", "React", "Redux Toolkit", "Ant Design", "Vercel"],
    },
    // {
    //   title: "Restoku - Restaurant Admin",
    //   details:
    //     "Admin dashboard web application for managing restaurant menus. Login and create your account, view sales data, and manage your menu. Add, edit and delete the menu.",
    //   stacks: ["Vite", "React", "Redux Toolkit", "Tailwind", "Vercel"],
    // },
    // {
    //   title: "M. Irfan portofolio site",
    //   details: "My personal portofolio site build with NextJS and Vercel",
    //   stacks: ["NextJS", "Module CSS", "Vercel"],
    // },
    {
      url: "https://www.frontendmentor.io/profile/mirfanwebdev",
      image: frontImg,
      title: "Frontendmentor.io - M. Irfan challenge solutions",
      details:
        "Solutions for Frontend Mentor challenges. View solutions from design challenge and implement with determined tech stacks",
    },
  ];
  return (
    <section id="projects" className={styles.projectSection}>
      <h3>Projects</h3>
      {projectList.map((project) => (
        <Link
          href={project?.url}
          target="_blank"
          rel="noopener noreferrer"
          key={project.title}
          className={styles.projectsContainer}
        >
          {project.image && (
            <Image
              src={project.image}
              className={styles.image}
              width={150}
              alt="project image"
            />
          )}
          <div className={styles.info}>
            <h3>
              {project.title} <MdArrowOutward />
            </h3>
            <p>{project.details}</p>
            <div className={styles.stacks}>
              {project.stacks?.map((stack) => (
                <p key={stack}>{stack}</p>
              ))}
            </div>
          </div>
        </Link>
      ))}
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
