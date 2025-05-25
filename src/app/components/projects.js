import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import projectList from "@/app/lib/projectList";
import styles from "./projects.module.css";
import SectionTitle from "./SectionTitle";
import TechStackPill from "./TechStackPill";
export default function Projects() {
  return (
    <section id="projects" className={styles.projectSection}>
      <SectionTitle>Projects</SectionTitle>

      {projectList.map((project) => (
        <div key={project.title} className={styles.projectsContainer}>
          <Image
            src={project.image}
            className={styles.image}
            alt="project image"
          />

          <div className={styles.info}>
            <h3>
              <Link
                href={project?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.links}></span>
                {project.title} <MdArrowOutward />
              </Link>
            </h3>
            <p>{project.details}</p>

            {project.gitUrl && (
              <Link
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.git}
              >
                <BsGithub />
                <p>GitHub</p>
              </Link>
            )}

            <TechStackPill stacksArray={project.stacks} />
          </div>
        </div>
      ))}
    </section>
  );
}
