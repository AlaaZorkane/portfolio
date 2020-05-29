import React, { FC } from "react";
import Hello from "@/components/Hello";
import SkillsTable from "@/components/SkillsTable";

const IndexPage: FC = () => (
  <section className="flex items-center justify-between flex-wrap sm:justify-around sm:flex-no-wrap">
    <div className="flex flex-col mb-6">
      <Hello />
      <SkillsTable />
      <div className="mt-5">
        <h4 className="mb-4 font-light tracking-wider">
          Want us to work together?
        </h4>
        <a
          href="mailto:someone@mail.com"
          target="_blank"
          rel="noreferrer"
          className="px-10 mb-2 border-4 py-2 border-black uppercase font-bold hover:bg-gray-200 focus:outline-none"
        >
          get in touch
        </a>
      </div>
    </div>
    <img
      src="/assets/doodles/hero.svg"
      alt="hero"
      className="w-4/6 sm:w-auto mb-4 sm:mb-0 mx-auto sm:mx-0"
    />
  </section>
);

export default IndexPage;
