import React, { FC } from "react";
import { NavLink } from "@/interfaces";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";

type Props = {
  links: NavLink[];
};

const MenuLinks: FC<Props> = ({ links }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MenuLinks;
