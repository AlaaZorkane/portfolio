import React, { FC, useContext } from "react";
import DomainContext from "./DomainContext";
import Icon from "../Icon";

type Props = {
  selected: string;
};

const DomainSkills: FC<Props> = ({ selected }) => {
  const { skills } = useContext(DomainContext).byId[selected];
  return (
    <div className="flex flex-col border-2 rounded-sm border-black border-t-0 py-2">
      {skills.map((skill) => (
        <div className="flex flex-row p-1 ml-2" key={skill.name}>
          <h3 className="capitalize w-20 mr-1">{skill.name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, key) => (
              <Icon
                key={key}
                icon={key + 1 <= skill.stars ? "circleFill" : "circleEmpty"}
                size="10"
                className="mr-2"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DomainSkills;
