import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const HolographicDisplay = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base Platform */}
      <mesh position={[0, -2, 0]}>
        <Cylinder args={[2, 2, 0.2, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Holographic Projection */}
      <group position={[0, 0, 0]}>
        {/* Central Core */}
        <mesh position={[0, 0, 0]}>
          <Sphere args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color="#00ff88" 
            emissive="#00ff88"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Orbiting Rings */}
        {Array.from({ length: 3 }, (_, i) => (
          <mesh key={i} position={[0, 0, 0]}>
            <Cylinder args={[1.5 + i * 0.5, 1.5 + i * 0.5, 0.05, 16]} />
            <meshStandardMaterial 
              color="#00ff88" 
              emissive="#00ff88"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
              wireframe
            />
          </mesh>
        ))}

        {/* Data Nodes */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 1.2;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * 0.3, Math.sin(angle) * radius]}>
              <Sphere args={[0.08, 8, 8]} />
              <meshStandardMaterial 
                color="#00cc6a" 
                emissive="#00cc6a"
                emissiveIntensity={0.4}
                transparent
                opacity={0.8}
              />
            </mesh>
          );
        })}

        {/* Connection Lines */}
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <mesh key={i} position={[0, 0, 0]} rotation={[0, angle, 0]}>
              <Cylinder args={[0.02, 0.02, 2.5, 8]} />
              <meshStandardMaterial 
                color="#00ff88" 
                emissive="#00ff88"
                emissiveIntensity={0.2}
                transparent
                opacity={0.4}
              />
            </mesh>
          );
        })}
      </group>

      {/* Floating Data Particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 4,
            Math.random() * 2 - 1,
            (Math.random() - 0.5) * 4
          ]}
        >
          <Sphere args={[0.03, 6, 6]} />
          <meshBasicMaterial 
            color="#00ff88" 
            transparent 
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

const TechModel = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00cc6a" />
        
        <HolographicDisplay />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default TechModel; 