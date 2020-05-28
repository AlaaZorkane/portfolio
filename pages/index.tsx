import Navigation from "@/components/Navigation";
import React, { FC } from "react";

const IndexPage: FC = () => (
  <div className="h-screen leading-normal tracking-normal font-serif">
    <Navigation />
    <img src="/assets/doodles/hero.svg" alt="hero" />
  </div>
);

export default IndexPage;
