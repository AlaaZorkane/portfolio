import { NextApiRequest, NextApiResponse } from "next";
import { NormalizedDomains } from "@/interfaces";

// TODO: hook this with firebase in the next major version
export default (
  _req: NextApiRequest,
  res: NextApiResponse<NormalizedDomains>
): void => {
  const mock = {
    byId: {
      langs: {
        title: "langs",
        skills: [
          { name: "javascript", stars: 5 },
          { name: "typescript", stars: 4 },
          { name: "C/C++", stars: 2 },
          { name: "Python", stars: 3 },
        ],
      },
      frontend: {
        title: "frontend",
        skills: [
          { name: "Vue", stars: 4 },
          { name: "React", stars: 3 },
          { name: "Vuetify", stars: 4 },
          { name: "Tailwind", stars: 2 },
        ],
      },
      backend: {
        title: "backend",
        skills: [
          { name: "Express", stars: 4 },
          { name: "Firebase", stars: 3 },
          { name: "Mongodb", stars: 3 },
          { name: "Postgre", stars: 1 },
        ],
      },
      tools: {
        title: "tools",
        skills: [
          { name: "Git", stars: 4 },
          { name: "Docker", stars: 3 },
          { name: "Bash", stars: 2 },
          { name: "Figma", stars: 4 },
        ],
      },
    },
    allIds: ["langs", "frontend", "backend", "tools"],
  };
  res.status(200).json(mock);
};
