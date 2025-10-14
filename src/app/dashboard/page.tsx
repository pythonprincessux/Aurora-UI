"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const initialTracks = [
    "🌅 Sunrise Intro",
    "💜 Violet Skies",
    "🌙 Midnight Loop",
    "🔥 Stardust Flow",
    "💫 Ember Trails",
  ];

  const [playlist, setPlaylist] = useState(initialTracks);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShuffle = () => {
    setPlaylist((prev) => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
    setShuffleCount((c) => c + 1);
  };

  if (!mounted) {
    // render skeleton (prevents hydration mismatch)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-zinc-400">
        <h1 className="text-3xl font-bold mb-4 text-orange-400/70">
          Aurora Ember Dashboard 🔥
        </h1>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-900 to-orange-900 text-white overflow-hidden">
      {/* Glow backdrop */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]"
      >
        Aurora Ember Dashboard 🔥
      </motion.h1>

      {/* Shuffle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShuffle}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="z-10 px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full text-black font-semibold shadow-lg hover:shadow-orange-400/40 transition-all duration-200"
      >
        Shuffle Now 🔀
      </motion.button>

      {/* Playlist */}
      <motion.ul
        key={shuffleCount}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mt-10 space-y-3 text-lg font-medium"
      >
        {playlist.map((track, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            className="bg-gradient-to-r from-orange-900/50 to-amber-700/30 text-orange-200 px-6 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-orange-400/30 transition-all duration-300"
          >
            {track}
          </motion.li>
        ))}
      </motion.ul>

      {/* Analytics */}
      <div className="mt-16 w-full max-w-md text-center">
        <h2 className="text-lg font-semibold mb-2 text-orange-300/90">
          Shuffle Stats Overview
        </h2>

        {/* Hydration-safe values */}
        <p className="text-sm text-zinc-400">
          🎧 Total Sessions:{" "}
          <span className="text-orange-400 font-semibold">
            {shuffleCount + 7}
          </span>{" "}
          | Avg Time:{" "}
          <span className="text-amber-300 font-semibold">
            {mounted ? (6 + shuffleCount * 0.1).toFixed(1) : "6.0"}m
          </span>{" "}
          | Growth:{" "}
          <span className="text-green-400 font-semibold">
            +{mounted ? (1 + shuffleCount).toFixed(0) : "1"}%
          </span>
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-xs text-orange-400/60">
        © 2025 Aurora Ember • Designed by Kiara McRae
      </footer>
    </div>
  );
}