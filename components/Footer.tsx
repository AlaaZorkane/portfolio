import React, { FC } from "react";
import Icon from "./Icon";

const Footer: FC = () => {
  const socialLinks = [
    { title: "linkedin", link: "https://www.linkedin.com/in/AlaaZorkane" },
    { title: "github", link: "https://www.github.com/AlaaZorkane" },
    { title: "twitter", link: "https://www.twitter.com/AlaaZork" },
  ];
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="flex flex-col items-center">
        <div className="flex">
          {socialLinks.map((social) => (
            <a
              key={social.title}
              href={social.link}
              target="blank_"
              rel="noreferrer"
              className="m-3"
            >
              <Icon icon={social.title} size="20"></Icon>
            </a>
          ))}
        </div>
        <p className="tracking-widest">© 2020 Alaa Zorkane</p>
      </div>
    </footer>
  );
};

export default Footer;
