import { NextApiRequest, NextApiResponse } from "next";
import { NormalizedDomains } from "@/interfaces";
import skills from "@/data/skills.json";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<NormalizedDomains>
): Promise<void> => {
  res.status(200).json(skills);
};
