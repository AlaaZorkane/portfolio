import React, { FC, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";

// TODO: Add border down to indicate current page
const Navigation: FC = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    { title: "whoami", location: "/" },
    { title: "projects", location: "/projects" },
    { title: "blog", location: "/blog" },
    { title: "misc", location: "/misc" },
  ];
  return (
    <nav className="flex py-6 items-center justify-between flex-wrap sm:flex-no-wrap">
      <div>
        <Logo size="50" />
      </div>
      <div
        className="block sm:hidden cursor-pointer flex flex-row"
        onClick={() => setMenu(!menu)}
      >
        <Icon icon="menu" size="25" />
      </div>
      <div className={`${menu ? "block" : "hidden"} w-full sm:w-auto sm:block`}>
        <div className="text-lg">
          {links.map((link) => (
            <Link href={link.location} key={link.title}>
              <a
                onClick={() => setMenu(false)}
                className="block sm:inline-block sm:mx-3 sm:border-transparent sm:pb-2 my-5 border-b pb-1 border-black transition duration-200 ease-in-out transform hover:translate-x-1 sm:hover:translate-x-0 sm:hover:-translate-y-1"
              >
                {link.title}
              </a>
            </Link>
          ))}
          <SocialLinks className="flex flex-row sm:inline-flex" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
