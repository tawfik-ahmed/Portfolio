import React, { Suspense, useEffect, useState } from "react";
import { useLoader, Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Girl = ({ isMobile }) => {
  const girl = useGLTF("./girlModel/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="#915eff" />
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
        object={girl.scene}
        scale={isMobile ? 2.5 : 6.3}
        position={isMobile ? [0, -4.2, -1.2] : [0, -10, -0.9]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />
      <pointLight
        color="#915eff"
        intensity={100}
        position={[0, 0, 2]}
        distance={10}
        decay={2}
      />
    </mesh>
  );
};

const GirlCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const onMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  if (!initialized) {
    return <div></div>;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: isMobile ? [20, 3, 5] : [50, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Girl isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GirlCanvas;
