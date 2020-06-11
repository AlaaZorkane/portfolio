import React, { FC } from "react";
import { NextSeo } from "next-seo";
import Hello from "@/components/Hello";
import SkillsTable from "@/components/SkillsTable";
import { motion } from "framer-motion";

const IndexPage: FC = () => {
  return (
    <>
      <NextSeo title="Software Engineer" />
      <div className="my-auto">
        <section className="flex justify-between flex-wrap">
          <motion.div
            className="flex flex-col mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
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
                className="px-10 mb-2 border-2 rounded py-2 border-black bg-white hover:bg-gray-200 uppercase font-bold focus:outline-none"
              >
                get in touch
              </a>
            </div>
          </motion.div>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30 }}
            whileHover={{ rotateZ: 3 }}
            src={require("@/assets/doodles/hero.png")}
            alt="hero"
            className="w-4/6 sm:w-auto xl:w-5/12 mb-4 sm:mb-0 mx-auto lg:mx-0"
          />
        </section>
      </div>
    </>
  );
};

export default IndexPage;
