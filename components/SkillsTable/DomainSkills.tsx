import React, { FC, useContext } from "react";
import DomainContext from "./DomainContext";
import Icon from "../Icon";

type Props = {
  selected: string;
};

const DomainSkills: FC<Props> = ({ selected }) => {
  const { skills } = useContext(DomainContext).byId[selected];
  return (
    <div className="flex flex-col border-4 border-black border-t-0 py-2">
      {skills.map((skill) => (
        <div className="flex flex-row p-1 ml-2" key={skill.name}>
          <h3 className="capitalize w-20 mr-1">{skill.name}</h3>
          <div className="flex">
            {[...Array(skill.stars)].map((key) => (
              <Icon key={key} icon="circleFill" size="10" className="mr-2" />
            ))}
            {[...Array(5 - skill.stars)].map((key) => (
              <Icon key={key} icon="circleEmpty" size="10" className="mr-2" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DomainSkills;
