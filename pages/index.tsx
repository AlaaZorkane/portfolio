import React, { FC } from "react";
import Hello from "@/components/Hello";
import SkillsTable from "@/components/SkillsTable";

const IndexPage: FC = () => (
  <section className="flex items-center justify-between flex-wrap">
    <div className="flex flex-col mb-6">
      <Hello />
      <SkillsTable />
    </div>
    <img
      className="mx-auto"
      width="500"
      src="/assets/doodles/hero.svg"
      alt="hero"
    />
  </section>
);

export default IndexPage;
