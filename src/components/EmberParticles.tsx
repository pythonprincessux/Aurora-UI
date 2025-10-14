"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Ember {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function EmberParticles() {
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 4,
      size: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setEmbers(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, ember.opacity, 0],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-gradient-to-t from-orange-600 to-yellow-400 blur-sm"
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size * 2,
            filter: "blur(1px)",
            boxShadow: "0 0 12px rgba(255,140,0,0.4)",
          }}
        />
      ))}
    </div>
  );
}