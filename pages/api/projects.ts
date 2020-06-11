import { NextApiRequest, NextApiResponse } from "next";
import { NormalizedProjects } from "@/interfaces";
import projects from "@/data/projects.json";

export default (
  _req: NextApiRequest,
  res: NextApiResponse<NormalizedProjects>
): void => {
  res.status(200).json(projects);
};
