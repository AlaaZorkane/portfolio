import React, { FC, ReactNode } from "react";
import { NextSeo } from "next-seo";
import Navigation from "./Navigation";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NextSeo
        titleTemplate="Alaa Zorkane | %s"
        description="Hello, my name is Alaa Zorkane, I make applications, libraries, servers and everything in between!"
      />
      <div className="flex flex-col h-screen container mx-auto px-6">
        <Navigation />
        {children}
      </div>
    </>
  );
};

export default Layout;
