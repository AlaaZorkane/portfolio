import React, { FC } from "react";
import { NextSeo } from "next-seo";
import Hello from "@/components/Hello";
import SkillsTable from "@/components/SkillsTable";

const IndexPage: FC = () => (
  <>
    <NextSeo title="Software Engineer" />
    <div className="my-auto">
      <section className="flex justify-between flex-wrap">
        <div className="flex flex-col mb-6">
          <Hello />
          <SkillsTable />
          <div className="mt-5">
            <h4 className="mb-4 font-light tracking-wider">
              Want us to work together?
            </h4>
            <a
              href="mailto:alaazorkane@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="px-10 mb-2 border-2 rounded py-2 border-black bg-white uppercase font-bold hover:bg-gray-200 focus:outline-none"
            >
              get in touch
            </a>
          </div>
        </div>
        <img
          src="/assets/doodles/hero.png"
          alt="hero"
          className="w-4/6 sm:w-auto xl:w-5/12 mb-4 sm:mb-0 mx-auto lg:mx-0"
        />
      </section>
    </div>
  </>
);

export default IndexPage;
