import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const OrbitRing = ({ size, thickness, rotationX, rotationY, rotationZ, color, duration, electronCount }) => {
  const electrons = useMemo(() => {
    return Array.from({ length: electronCount }, (_, i) => ({
      id: i,
      angle: (360 / electronCount) * i,
      offset: Math.random() * 30 - 15,
    }));
  }, [electronCount]);

  return (
    <motion.div
      className="atom-orbit-ring"
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        borderColor: `rgba(63, 255, 0, 0.15)`,
        transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`,
      }}
      animate={{ rotateZ: [rotationZ, rotationZ + 360] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {electrons.map((e) => (
        <motion.div
          key={e.id}
          className="atom-electron"
          style={{
            width: 8,
            height: 8,
            background: color,
            boxShadow: `0 0 12px ${color}, 0 0 24px ${color}`,
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${e.angle}deg) translateY(-${size / 2}px)`,
          }}
        />
      ))}
    </motion.div>
  );
};

function AtomAnimation() {
  return (
    <div className="atom-container">
      <div className="atom-nucleus" />
      <OrbitRing size={140} thickness={1} rotationX={60} rotationY={0} rotationZ={0} color="#3FFF00" duration={6} electronCount={2} />
      <OrbitRing size={180} thickness={1} rotationX={0} rotationY={45} rotationZ={90} color="#00D4FF" duration={8} electronCount={3} />
      <OrbitRing size={120} thickness={1} rotationX={-30} rotationY={-20} rotationZ={45} color="#3FFF00" duration={5} electronCount={2} />
      <div className="atom-glow-ring" />
    </div>
  );
}

export default AtomAnimation;
