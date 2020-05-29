import useSWR from "swr";
import React, { FC, useState } from "react";
import DomainsNavigator from "./DomainsNavigator";
import { NormalizedDomains } from "@/interfaces";
import DomainSkills from "./DomainSkills";
import DomainContext from "./DomainContext";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const SkillsTable: FC = () => {
  const [domain, setDomain] = useState("langs");
  const { data } = useSWR<NormalizedDomains>("/api/skills", fetcher);
  // TODO: Some fancy loading skeleton
  if (!data) return <p>Loading...</p>;
  const handleDomainChange = (newDomain: string) => {
    //mutate();
    setDomain(newDomain);
  };
  return (
    <DomainContext.Provider value={data}>
      <div className="flex flex-col flex-grow tracking-wider">
        <DomainsNavigator onChange={handleDomainChange} />
        <DomainSkills selected={domain} />
      </div>
    </DomainContext.Provider>
  );
};

export default SkillsTable;
