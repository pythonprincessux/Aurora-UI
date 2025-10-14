"use client";

import { motion } from "framer-motion";

export default function EmberDivider() {
  return (
    <div className="relative w-full h-1 mt-24 mb-12">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-700 blur-sm opacity-70"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
    </div>
  );
}