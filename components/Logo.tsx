import React, { FC } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const Logo: FC = () => {
  const [name, toggleName] = useCycle(false, true);
  const [easter, toggleEaster] = useCycle(false, true);
  return (
    <div className="flex flex-row">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        viewBox="0 0 458 458"
        overflow="visible"
        whileHover={{ x: 5 }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30 }}
        onMouseDown={() => toggleEaster()}
        onMouseUp={() => toggleEaster()}
        onMouseEnter={() => toggleName()}
        onMouseLeave={() => toggleName()}
      >
        <motion.path d="M229 450.8C186.333 450.8 147.933 441.2 113.8 422C80.2 402.267 53.5333 375.6 33.8 342C14.6 307.867 5 269.733 5 227.6C5 184.933 14.6 146.8 33.8 113.2C53.5333 79.0667 80.2 52.4 113.8 33.2C147.933 13.4666 186.333 3.59997 229 3.59997C271.667 3.59997 309.8 13.4666 343.4 33.2C377 52.4 403.4 79.0667 422.6 113.2C442.333 146.8 452.2 184.933 452.2 227.6V422C452.2 428.933 450.067 434.8 445.8 439.6C441.533 443.867 435.667 446 428.2 446C421.267 446 415.4 443.867 410.6 439.6C406.333 434.8 404.2 428.933 404.2 422V359.6C386.6 387.333 362.6 409.467 332.2 426C301.8 442.533 267.4 450.8 229 450.8ZM229 406C262.6 406 292.467 398.267 318.6 382.8C345.267 366.8 366.067 345.467 381 318.8C396.467 291.6 404.2 261.2 404.2 227.6C404.2 193.467 396.467 163.067 381 136.4C366.067 109.2 345.267 87.8667 318.6 72.4C292.467 56.4 262.6 48.4 229 48.4C195.933 48.4 166.067 56.4 139.4 72.4C112.733 87.8667 91.6667 109.2 76.2 136.4C60.7333 163.067 53 193.467 53 227.6C53 261.2 60.7333 291.6 76.2 318.8C91.6667 345.467 112.733 366.8 139.4 382.8C166.067 398.267 195.933 406 229 406Z" />
      </motion.svg>
      <AnimatePresence>
        {name && (
          <motion.p
            className="self-center ml-1 text-xl tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ x: 5, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30 }}
            exit={{ x: 0, opacity: 0 }}
          >
            {easter ? "laaaaaaa" : "laa Zorkane"}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Logo;
