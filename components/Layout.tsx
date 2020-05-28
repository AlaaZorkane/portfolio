import React, { FC, ReactNode } from "react";
import Navigation from "./Navigation";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="w-full max-w-screen-lg mx-auto px-6">{children}</div>
    </div>
  );
};

export default Layout;
