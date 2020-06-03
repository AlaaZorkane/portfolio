import React, { FC, useContext } from "react";
import DomainContext from "./DomainContext";

type Props = {
  onChange: (newDomain: string) => void;
};

// TODO: Current tab indicator
const DomainsNavigator: FC<Props> = ({ onChange }) => {
  const domains = useContext(DomainContext).allIds;
  return (
    <div className="flex justify-between flex-wrap border-black border-2 rounded-sm select-none">
      <div className="flex inline-block">
        {domains.map((domain) => (
          <button
            onClick={() => onChange(domain)}
            className="hover:bg-gray-200 p-3 cursor-pointer focus:outline-none font-bold tracking-wider"
            key={domain}
          >
            {domain}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DomainsNavigator;
