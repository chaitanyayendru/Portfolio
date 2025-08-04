import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = ({ geometry, position, rotation, color, speed = 1 }) => {
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
      {Array.from({ length: 20 }, (_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <Sphere args={[0.1, 8, 8]} />
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

const GeometricShapesScene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00cc6a" />
      
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
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const GeometricShapes = () => {
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
        <GeometricShapesScene />
      </Canvas>
    </div>
  );
};

export default GeometricShapes; 