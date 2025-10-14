"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl
                 bg-black/50 backdrop-blur-md border border-orange-500/30
                 rounded-2xl px-8 py-3 flex justify-between items-center
                 shadow-[0_0_25px_rgba(255,120,0,0.3)]"
    >
      {/* Logo / Title */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link href="/" className="text-orange-400 text-lg font-semibold tracking-wide">
          ⚡ Aurora Ember
        </Link>
      </motion.div>

      {/* Nav Links */}
      <div className="flex gap-6 text-sm text-orange-200">
        <motion.div whileHover={{ scale: 1.15 }}>
          <Link href="/">Home</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.15 }}>
          <Link href="/dashboard">Dashboard</Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}