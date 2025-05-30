import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedSphereProps {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}

const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ position, color, speed, distort }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01 * speed;
    }
  });
  
  return (
    <Sphere ref={mesh} position={position} args={[1, 64, 64]}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={distort} 
        speed={speed} 
        roughness={0.5} 
        metalness={0.8}
      />
    </Sphere>
  );
};

interface SceneProps {
  count?: number;
}

const Scene: React.FC<SceneProps> = ({ count = 3 }) => {
  const colors = ['#0ea5e9', '#cca147', '#f97316'];
  
  return (
    <Canvas className="canvas-container\" camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
      
      {Array.from({ length: count }).map((_, i) => (
        <AnimatedSphere 
          key={i} 
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
          ]} 
          color={colors[i % colors.length]} 
          speed={0.2 + Math.random() * 0.8}
          distort={0.3 + Math.random() * 0.3}
        />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    </Canvas>
  );
};

export default Scene;