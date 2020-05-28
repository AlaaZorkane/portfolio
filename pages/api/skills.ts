import { NextApiRequest, NextApiResponse } from "next";
import { Domain } from "@/interfaces";

// TODO: hook this with firebase in the next major version
export default (_req: NextApiRequest, res: NextApiResponse<Domain[]>): void => {
  const mock = [
    {
      title: "langs",
      skills: [
        { name: "javascript", stars: 5 },
        { name: "typescript", stars: 4 },
        { name: "C/C++", stars: 2 },
        { name: "Python", stars: 3 },
      ],
    },
    {
      title: "frontend",
      skills: [
        { name: "Vue", stars: 4 },
        { name: "React", stars: 3 },
        { name: "Vuetify", stars: 4 },
        { name: "Bulma", stars: 2 },
        { name: "Tailwind", stars: 1 },
      ],
    },
    {
      title: "backend",
      skills: [
        { name: "Express", stars: 4 },
        { name: "Firebase", stars: 3 },
        { name: "Mongodb", stars: 3 },
        { name: "Postgre", stars: 1 },
      ],
    },
    {
      title: "tools",
      skills: [
        { name: "Git", stars: 4 },
        { name: "Docker", stars: 3 },
        { name: "Bash", stars: 2 },
        { name: "Figma", stars: 4 },
      ],
    },
  ];
  res.status(200).json(mock);
};
