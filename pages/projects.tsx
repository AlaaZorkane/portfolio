import React, { FC } from "react";
import { NextSeo } from "next-seo";
import ProjectCard from "@/components/ProjectCard";
import { NormalizedData, Project } from "@/interfaces";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const ProjectsPage: FC = () => {
  const { data } = useSWR<NormalizedData<Project>>("/api/projects", fetcher);
  if (!data) return <p>Loading...</p>;
  const projects = data.allIds;
  return (
    <>
      <NextSeo title="Projects" />
      <section className="flex flex-wrap -mx-3 z-10 sm:mt-10">
        {projects.map((projectId) => {
          const { title, description, techs } = data.byId[projectId];
          return (
            <div
              className="my-3 px-3 w-full overflow-hidden lg:w-1/3"
              key={projectId}
            >
              <ProjectCard
                title={title}
                techs={techs}
                description={description}
              />
            </div>
          );
        })}
      </section>
      <a
        className="mx-auto lg:mx-0 hover:underline cursor-pointer mb-3"
        href="https://github.com/alaazorkane"
        target="_blank"
        rel="noreferrer"
      >
        More on my Github!
      </a>
      <img
        src={require("@/assets/doodles/bulb.png")}
        alt="bulb-doodle"
        className="absolute hidden lg:block bottom-0 w-1/3"
        style={{ right: "10%" }}
      />
    </>
  );
};

export default ProjectsPage;
