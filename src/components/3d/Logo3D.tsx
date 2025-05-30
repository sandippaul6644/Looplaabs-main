import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface LogoProps {
  text?: string;
  partnerText?: string;
}

const Logo: React.FC<LogoProps> = ({ text = "LoopLabs", partnerText = "GOLD PARTNER WITH HUNGRYTOP" }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const partnerMesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        (Math.sin(t / 2) * Math.PI) / 10,
        0.05
      );
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        (Math.sin(t / 2) * Math.PI) / 10,
        0.05
      );
    }
    if (partnerMesh.current) {
      partnerMesh.current.rotation.y = mesh.current?.rotation.y || 0;
      partnerMesh.current.rotation.x = mesh.current?.rotation.x || 0;
    }
  });
  
  return (
    <group>
      <mesh ref={mesh} position={[0, 0.5, 0]}>
        <Center>
          <Text3D
            font="/fonts/inter_bold.json"
            size={1.5}
            height={0.2}
            curveSegments={32}
            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={8}
          >
            {text}
            <meshStandardMaterial
              color="#0ea5e9"
              metalness={0.8}
              roughness={0.3}
            />
          </Text3D>
        </Center>
      </mesh>
      <mesh ref={partnerMesh} position={[0, -1, 0]}>
        <Center>
          <Text3D
            font="/fonts/inter_bold.json"
            size={0.4}
            height={0.1}
            curveSegments={32}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.01}
            bevelOffset={0}
            bevelSegments={8}
          >
            {partnerText}
            <meshStandardMaterial
              color="#cca147"
              metalness={0.9}
              roughness={0.2}
            />
          </Text3D>
        </Center>
      </mesh>
    </group>
  );
};

interface Logo3DProps {
  text?: string;
  partnerText?: string;
}

const Logo3D: React.FC<Logo3DProps> = ({ text, partnerText }) => {
  return (
    <Canvas className="canvas-container\" camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Logo text={text} partnerText={partnerText} />
    </Canvas>
  );
};

export default Logo3D;