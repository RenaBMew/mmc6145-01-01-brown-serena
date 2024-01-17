import React from "react";
import { codeProjects, designProjects } from "../projectdata";
import styles from "../styles/projects.module.css";

export default function ProjectList() {
  return (
    <section id="projects">
      <h2>Coding Projects</h2>
      <div className={styles.projectBox}>
        {codeProjects.map((project) => (
          <div className={styles.projectContainer} key={project.id}>
            <a href={project.link} target="_new">
              <img
                src={project.image}
                className={styles.projectImage}
                alt="Project Image"
              />
              <div className={styles.projectCaption}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <h2>Design Projects</h2>
      <div className={styles.projectBox}>
        {designProjects.map((project) => (
          <div className={styles.projectContainer} key={project.id}>
            <a href={project.link} target="_new">
              <img
                src={project.image}
                className={styles.projectImage}
                alt="Project Image"
              />
              <div className={styles.projectCaption}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
