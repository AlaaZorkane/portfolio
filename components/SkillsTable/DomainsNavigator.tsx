import React, { FC } from "react";
import { Domain } from "@/interfaces";
import Icon from "../Icon";

type Props = {
  domains: Domain[];
};

// TODO: Current tab indicator
const DomainsNavigator: FC<Props> = ({ domains }) => {
  return (
    <div className="flex justify-between flex-wrap border-black border-4 select-none">
      <div className="flex inline-block font-bold">
        {domains.map((domain) => (
          <a
            href="#"
            className="hover:bg-gray-200 p-3 cursor-pointer animate__animated animate__fadeIn"
            key={domain.title}
          >
            {domain.title}
          </a>
        ))}
      </div>
      <div className="flex p-3 cursor-pointer font-bold">
        <Icon icon="expand" size="15" />
      </div>
    </div>
  );
};

export default DomainsNavigator;
