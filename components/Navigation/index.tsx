import React, { FC } from "react";
import Logo from "../Logo";
import { NavLink } from "@/interfaces";
import NavLinks from "./NavLinks";
import MenuLinks from "./MenuLinks";

const links: NavLink[] = [
  { title: "whoami", location: "/" },
  { title: "projects", location: "/projects" },
  { title: "blog", location: "/blog" },
  { title: "misc", location: "/misc" },
];

// TODO: Add border down to indicate current page
const Navigation: FC = () => {
  return (
    <nav className="flex py-6 items-center justify-between z-10 bg-white">
      <div>
        <Logo />
      </div>
      <div className="block sm:hidden">
        <MenuLinks links={links} />
      </div>
      <div className="hidden sm:block">
        <NavLinks links={links} />
      </div>
    </nav>
  );
};

export default Navigation;
