import React, { FC, useState } from "react";
import Icon from "./Icon";

// TODO: Add border down to indicate current page
const Navigation: FC = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    { title: "whoami", link: "/" },
    { title: "projects", link: "/projects" },
    { title: "blog", link: "/blog" },
    { title: "misc", link: "/misc" },
  ];
  return (
    <nav className="flex max-w-screen-lg mx-auto items-center justify-between flex-wrap p-6">
      <img
        src="/assets/Logo.svg"
        alt="alaazorkane-logo"
        width="70"
        className="animate__animated animate__zoomIn"
      />
      <div
        className="block sm:hidden cursor-pointer"
        onClick={() => setMenu(!menu)}
      >
        <Icon icon="menu" size="25" />
      </div>
      <div
        className={`${
          menu ? "block" : "hidden"
        } animate__animated animate__fadeIn w-full flex-grow sm:flex sm:flex-grow-0 sm:items-center sm:w-auto`}
      >
        <div className="text-lg">
          {links.map((link) => (
            <a
              className="block sm:inline-block sm:mx-3 sm:border-transparent sm:pb-2 my-5 border-b pb-1 border-black transition duration-200 ease-in-out transform hover:translate-x-1 sm:hover:translate-x-0 sm:hover:-translate-y-1"
              href="#"
              key={link.title}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
