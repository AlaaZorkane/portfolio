import React, { FC, useContext } from "react";
import DomainContext from "./DomainContext";

type Props = {
  onChange: (newDomain: string) => void;
  active: string;
};

const DomainsNavigator: FC<Props> = ({ onChange, active }) => {
  const domains = useContext(DomainContext).allIds;
  return (
    <div className="flex justify-between flex-wrap border-black border-2 rounded-sm select-none">
      <div className="flex">
        {domains.map((domain) => (
          <div
            onClick={() => onChange(domain)}
            className={`p-3 cursor-pointer font-bold tracking-wider ${
              active === domain ? "bg-black text-white" : "hover:bg-gray-200"
            }`}
            key={domain}
          >
            {domain}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainsNavigator;
