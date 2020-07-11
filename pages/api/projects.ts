import { NextApiRequest, NextApiResponse } from "next";
import { NormalizedData, Project } from "@/interfaces";
import projects from "@/data/projects.json";

export default (
  _req: NextApiRequest,
  res: NextApiResponse<NormalizedData<Project>>
): void => {
  res.status(200).json(projects);
};
