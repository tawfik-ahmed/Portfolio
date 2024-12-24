import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constans";

const Tech = () => {
  return (
    <div className="flex flex-wrap  justify-center gap-10">
      {technologies.map((tech, index) => (
        <div key={tech.name} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
