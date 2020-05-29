import React, { FC, ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navigation />
      <div className="container mx-auto p-6">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
