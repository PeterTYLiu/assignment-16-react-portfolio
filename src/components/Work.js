import React from "react";
import Projects from "../projects.json";
import ProjectCard from "./ProjectCard";

function Work() {
  let myProjects = Object.values(Projects);
  return (
    <div>
      {myProjects.map((project) => (
        <ProjectCard
          title={project.title}
          shortDesc={project.shortDesc}
          key={project.id}
          thumbnail={project.thumbnail}
          id={project.id}
        />
      ))}
    </div>
  );
}

export default Work;
