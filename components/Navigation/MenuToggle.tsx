import React, { FC } from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

type Props = {
  toggle: () => void;
};

/**
 * Inspired from https://codesandbox.io/s/framer-motion-side-menu-mx2rw (framer docs)
 */
const MenuToggle: FC<Props> = ({ toggle }) => (
  <motion.div
    onClick={toggle}
    className="focus:outline-none"
    initial={{ x: -10, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 30 }}
  >
    <svg width="25" height="25" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.div>
);

export default MenuToggle;
