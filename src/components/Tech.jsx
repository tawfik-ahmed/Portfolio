import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constans";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

const Tech = () => {
  const [eventSource, setEventSource] = useState(undefined);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      setEventSource(rootElement);
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap  justify-center gap-10">
        {technologies.map((tech, index) => (
          <div key={tech.name} className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
      <Canvas
        frameloop="demand"
        gl={{ preserveDrawingBuffer: false }}
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        eventSource={eventSource}
      >
        <Preload all />
      </Canvas>
    </>
  );
};

export default SectionWrapper(Tech, "");
