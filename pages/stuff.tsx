import React, { FC } from "react";
import { NextSeo } from "next-seo";

const MiscPage: FC = () => {
  return (
    <>
      <NextSeo title="Other" />
      <h1 className="text-3xl font-light tracking-wider">
        Here goes everything else...
      </h1>
    </>
  );
};

export default MiscPage;
