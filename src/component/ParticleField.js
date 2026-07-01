import React, { useMemo } from 'react';

const PARTICLE_COUNT = 60;

function ParticleField() {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 4,
      opacity: Math.random() * 0.4 + 0.1,
      driftX: (Math.random() - 0.5) * 40,
      driftY: (Math.random() - 0.5) * 40,
      hue: Math.random() > 0.6 ? '--cyber-cyan' : '--cyber-green',
    }));
  }, []);

  return (
    <div className="particle-field">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle-dot"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            '--opacity': p.opacity,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            background: p.hue === '--cyber-green' ? '#3FFF00' : '#00D4FF',
            boxShadow: p.hue === '--cyber-green'
              ? '0 0 6px #3FFF00'
              : '0 0 6px #00D4FF',
          }}
        />
      ))}
    </div>
  );
}

export default ParticleField;
