import useSWR from "swr";
import React, { FC } from "react";
import DomainsNavigator from "./DomainsNavigator";
import { Domain } from "@/interfaces";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Skills: FC = () => {
  const { data }: { data?: Domain[] } = useSWR("/api/skills", fetcher);
  // TODO: Some fancy loading skeleton
  if (!data) return <p>Loading...</p>;
  return (
    <div className="flex flex-col flex-grow">
      <DomainsNavigator domains={data} />
    </div>
  );
};

export default Skills;
