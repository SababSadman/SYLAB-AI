import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export const GlowEffect = ({ children, intensity = 1, color = "79, 70, 229" }) => (
  <motion.div
    animate={{
      boxShadow: [
        `0 0 20px rgba(${color}, ${0.1 * intensity})`,
        `0 0 40px rgba(${color}, ${0.3 * intensity})`,
        `0 0 20px rgba(${color}, ${0.1 * intensity})`
      ]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="relative rounded-2xl"
  >
    {children}
  </motion.div>
);

export const FloatingElement = ({ children, delay = 0, y = 10 }) => (
  <motion.div
    animate={{
      y: [0, -y, 0]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export const ScanLine = ({ color = "20, 184, 166" }) => {
  const isHex = color.startsWith('#');
  const bgColor = isHex ? `${color}20` : `rgba(${color}, 0.1)`;
  
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ 
        background: `linear-gradient(to bottom, transparent, ${bgColor}, transparent)` 
      }}
      animate={{
        y: ["-100%", "100%"]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export const ParticleField = ({ count = 15, color = "29, 175, 180" }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: `rgb(${color})`, opacity: 0.2 }}
        initial={{
          x: Math.random() * 100 + '%',
          y: Math.random() * 100 + '%',
          opacity: 0
        }}
        animate={{
          x: [null, Math.random() * 100 + '%'],
          y: [null, Math.random() * 100 + '%'],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
);

export const HolographicCard = ({ children, className = "" }) => (
  <motion.div
    className={`relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm ${className}`}
    whileHover={{ scale: 1.02, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

export const MetricCard = ({ value, label, prefix = "", suffix = "", delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  
  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      delay: delay
    });
    return controls.stop;
  }, [count, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-6 rounded-2xl glass-card flex flex-col items-center justify-center text-center space-y-1"
    >
      <div className="text-3xl font-black text-primary flex items-center">
        <span>{prefix}</span>
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};
