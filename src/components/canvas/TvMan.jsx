import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const TV = ({ isMobile }) => {
  const tv = useGLTF("./tvman/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={20} groundColor="#915eff" />
      <pointLight intensity={1} position={[10, 10, 10]} />
      <directionalLight
        intensity={2}
        position={[5, 5, 5]}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={tv.scene}
        scale={isMobile ? 0.0575 : 0.06875}
        position={isMobile ? [0, -9.175, -0.055] : [0, -11.5, -0.1]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />
      <pointLight
        color="#915eff"
        intensity={1000}
        position={[0, 0, 2]}
        distance={10}
        decay={2}
      />
    </mesh>
  );
};

const TvManCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: isMobile ? [20, 3, 5] : [50, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <TV isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TvManCanvas;
