import { motion } from 'framer-motion';

const TechVisualization = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Holographic Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute border border-[#00ff88] rounded-full opacity-10"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Data Nodes */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 150;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00ff88] rounded-full opacity-40 shadow-[0_0_4px_rgba(0,255,136,0.3)]"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        );
      })}

      {/* Central Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#00ff88] rounded-full opacity-60 shadow-[0_0_8px_rgba(0,255,136,0.4)]"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 8px rgba(0, 255, 136, 0.4)",
            "0 0 15px rgba(0, 255, 136, 0.6)",
            "0 0 8px rgba(0, 255, 136, 0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00ff88] rounded-full opacity-30 shadow-[0_0_2px_rgba(0,255,136,0.3)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Connection Lines */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-20"
            style={{
              left: '50%',
              top: '50%',
              width: '200px',
              transform: `translate(-50%, -50%) rotate(${angle}rad)`,
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        );
      })}

      {/* Scanning Lines */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-15"
          style={{
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
};

export default TechVisualization; 