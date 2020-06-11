import React, { FC } from "react";
import { Project } from "@/interfaces";

const ProjectCard: FC<Project> = ({ title, description, techs }) => {
  return (
    <div className="border-2 border-black rounded p-3 border-l-4 lg:border-2 bg-white">
      <div className="mb-3 lg:h-40">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-lg font-light">{description}</p>
      </div>
      <div className="flex flex-wrap -mx-1 overflow-hidden">
        {techs.map((tech) => (
          <div
            className="border-2 border-black px-2 py-1 mr-2 font-bold"
            key={tech}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
