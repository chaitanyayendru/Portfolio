import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = ({ geometry, position, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry === 'sphere' && <Sphere args={[0.5, 16, 16]} />}
      {geometry === 'box' && <Box args={[1, 1, 1]} />}
      {geometry === 'torus' && <Torus args={[0.5, 0.2, 8, 16]} />}
      {geometry === 'octahedron' && <Octahedron args={[0.5]} />}
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const FloatingParticles = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 15 }, (_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8
          ]}
        >
          <Sphere args={[0.08, 8, 8]} />
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

const DNAHelix = () => {
  const groupRef = useRef();
  const strand1 = [];
  const strand2 = [];

  // Generate DNA strand positions
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 4;
    const radius = 0.8;
    const height = (i - 6) * 0.25;
    
    strand1.push([
      Math.cos(angle) * radius,
      height,
      Math.sin(angle) * radius
    ]);
    
    strand2.push([
      Math.cos(angle + Math.PI) * radius,
      height,
      Math.sin(angle + Math.PI) * radius
    ]);
  }

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {strand1.map((position, index) => (
        <mesh key={`strand1-${index}`} position={position}>
          <Sphere args={[0.08, 8, 8]} />
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      {strand2.map((position, index) => (
        <mesh key={`strand2-${index}`} position={position}>
          <Sphere args={[0.08, 8, 8]} />
          <meshStandardMaterial
            color="#00cc6a"
            emissive="#00cc6a"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const Unified3DScene = ({ mode = 'hero' }) => {
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
        
        {mode === 'hero' && (
          <>
            <FloatingParticles />
            <AnimatedShape 
              geometry="sphere" 
              position={[-3, 2, 0]} 
              color="#00ff88" 
              speed={1.5}
            />
            <AnimatedShape 
              geometry="box" 
              position={[3, -2, 0]} 
              color="#00cc6a" 
              speed={1}
            />
            <AnimatedShape 
              geometry="torus" 
              position={[0, 3, 0]} 
              color="#33ffaa" 
              speed={2}
            />
            <AnimatedShape 
              geometry="octahedron" 
              position={[0, -3, 0]} 
              color="#00ff88" 
              speed={1.2}
            />
            <AnimatedShape 
              geometry="sphere" 
              position={[4, 0, 0]} 
              color="#00cc6a" 
              speed={0.8}
            />
            <AnimatedShape 
              geometry="box" 
              position={[-4, 0, 0]} 
              color="#33ffaa" 
              speed={1.3}
            />
          </>
        )}
        
        {mode === 'about' && (
          <DNAHelix />
        )}
        
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

export default Unified3DScene; 