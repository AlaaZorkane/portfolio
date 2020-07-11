import React, { FC } from "react";
import { NavLink } from "@/interfaces";
import Link from "next/link";
import SocialLinks from "../SocialLinks";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  links: NavLink[];
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { default: { duration: 1 } } },
};

const NavLinks: FC<Props> = ({ links }) => {
  const router = useRouter();
  const linkBaseStyle = "mr-4 cursor-pointer border-b-2 hover:border-black";
  const linkProps = {
    whileHover: { y: -3 },
    variants: item,
  };
  return (
    <motion.div
      className="flex flex-row text-lg"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {links.map((link) => {
        if (!link.external)
          return (
            <Link href={link.location} key={link.title} passHref>
              <motion.a
                {...linkProps}
                className={`${linkBaseStyle} ${
                  router.pathname === link.location && "border-black"
                }`}
                title={link.title}
              >
                {link.title}
              </motion.a>
            </Link>
          );
        return (
          <motion.a
            {...linkProps}
            href={link.location}
            className={`${linkBaseStyle} external`}
            title={link.title}
            key={link.title}
            target="_blank"
            rel="noreferrer"
          >
            {link.title}
          </motion.a>
        );
      })}
      <SocialLinks className="inline-flex" />
    </motion.div>
  );
};

export default NavLinks;
