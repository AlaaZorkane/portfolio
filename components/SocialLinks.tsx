import React, { FC } from "react";
import Icon from "./Icon";

type Props = {
  className?: string;
};

const SocialLinks: FC<Props> = ({ className }) => {
  const socialLinks = [
    { title: "linkedin", link: "https://www.linkedin.com/in/AlaaZorkane" },
    { title: "github", link: "https://www.github.com/AlaaZorkane" },
    { title: "twitter", link: "https://www.twitter.com/AlaaZork" },
  ];
  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <a
          key={social.title}
          href={social.link}
          target="blank_"
          rel="noreferrer"
          className="mx-2 transition duration-200 ease-in-out transform sm:hover:translate-x-0 sm:hover:-translate-y-1"
        >
          <Icon icon={social.title} size="20"></Icon>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
