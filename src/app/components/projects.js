import Link from "next/link";
import Image from "next/image";
import binarImg from "@/app/assets/binar-car-screenshot.png";
import huddleImg from "@/app/assets/huddle-screenshot.png";
import notifImg from "@/app/assets/notification-screenshot.png";
import frontImg from "@/app/assets/front-mentor-3.jpg";
import irfanImg from "@/app/assets/mirfan-page.png";
import { MdArrowOutward } from "react-icons/md";
import styles from "./projects.module.css";
export default function Projects({ id }) {
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
    {
      url: "",
      image: irfanImg,
      title: "M. Irfan's portofolio site",
      details: "My personal portofolio site build with NextJS and Vercel",
      stacks: ["NextJS", "CSS-modules", "Vercel"],
    },
    {
      url: "https://mirfanwebdev.github.io/frontendmentor-huddle-landingpage/",
      image: huddleImg,
      title: "Huddle Landing Page - Frontendmentor.io",
      details:
        "Challenge from Frontend Mentor to make responsive landing page, build with Tailwind",
      stacks: ["HTML", "Tailwind"],
    },
    {
      url: "https://mirfanwebdev.github.io/frontendmentor-notification/",
      image: notifImg,
      title: "Notification Page - Frontendmentor.io",
      details:
        "Challenge from Frontend Mentor to make notification page, build with JavaScript",
      stacks: ["HTML", "JavaScript"],
    },
    {
      url: "https://www.frontendmentor.io/profile/mirfanwebdev",
      image: frontImg,
      title: "Frontendmentor.io - M. Irfan challenge solutions",
      details:
        "Solutions for Frontend Mentor challenges. View solutions from design challenge and implementation with determined tech stacks",
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
          <Image
            src={project.image}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 10vw"
            width={200}
            alt="project image"
          />
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
