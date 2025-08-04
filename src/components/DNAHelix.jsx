import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const DNAStrand = ({ strand, color, offset = 0 }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5 + offset;
    }
  });

  return (
    <group ref={groupRef}>
      {strand.map((position, index) => (
        <mesh key={index} position={position}>
          <Sphere args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const DNAHelixScene = () => {
  const groupRef = useRef();
  const strand1 = [];
  const strand2 = [];

  // Generate DNA strand positions
  for (let i = 0; i < 15; i++) {
    const angle = (i / 15) * Math.PI * 4;
    const radius = 1;
    const height = (i - 7) * 0.3;
    
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
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00cc6a" />
      
      <group ref={groupRef}>
        <DNAStrand strand={strand1} color="#00ff88" />
        <DNAStrand strand={strand2} color="#00cc6a" offset={Math.PI} />
      </group>
    </>
  );
};

const DNAHelix = () => {
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
        <DNAHelixScene />
      </Canvas>
    </div>
  );
};

export default DNAHelix; 