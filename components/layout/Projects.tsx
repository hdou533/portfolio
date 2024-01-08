import React from "react";
import { projects } from "@/libs/data";
import ProjectCard from "../ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full text-white flex flex-col justify-center items-center mb-20"
    >
      <div className="text-center">
        <h1 className="uppercase text-3xl font-bold underline decoration-secondary underline-offset-8 lg:text-5xl">
          Projects
        </h1>
      </div>
      <div className="my-12 p-8 grid grid-cols-1 xl:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            desc={project.desc}
            demolink={project.demolink}
            codelink={project.codelink}
            thumbnail={project.thumbnail}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
