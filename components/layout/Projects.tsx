"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import { fetchProjects } from "@/utils/fetchProjects";

interface Project {
  _id: string;
  title: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
  cover: { url: string };
  tags: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjectData = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    loadProjectData();
  }, []);

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
            key={project._id}
            title={project.title}
            desc={project.description}
            demolink={project.demoUrl}
            codelink={project.codeUrl}
            coverUrl={project.cover.url}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
