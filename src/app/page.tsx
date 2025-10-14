"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ShuffleButton from "@/components/ShuffleButton";

export default function DashboardPage() {
  const [chartData, setChartData] = useState<number[]>([5, 8, 3, 9, 6, 7]);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [playlist, setPlaylist] = useState<string[]>([
    "🌅 Sunrise Intro",
    "💜 Violet Skies",
    "🌙 Midnight Loop",
    "🔥 Stardust Flow",
    "💫 Ember Trails",
  ]);

  // Shuffle the playlist order whenever shuffleCount changes
  useEffect(() => {
    if (shuffleCount > 0) {
      const newData = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10)
      );
      setChartData(newData);

      // Shuffle playlist tracks visually
      setPlaylist((prev) => [...prev].sort(() => Math.random() - 0.5));
    }
  }, [shuffleCount]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-900 to-orange-900 text-white overflow-hidden">
      {/* 🟠 Ambient Ember Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🔥 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]"
      >
        Aurora Ember Dashboard 🔥
      </motion.h1>

      {/* 🔀 Shuffle Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="z-10"
      >
        <ShuffleButton />
      </motion.div>

      {/* 🎵 Playlist Section */}
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 space-y-2 text-lg font-medium"
      >
        {playlist.map((track, i) => (
          <li
            key={i}
            className="bg-gradient-to-r from-orange-900/50 to-amber-700/30 text-orange-200 px-6 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-orange-400/30 transition-all duration-300"
          >
            {track}
          </li>
        ))}
      </motion.ul>

      {/* 📊 Mini Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 w-full max-w-xl px-6"
      >
        <h2 className="text-lg font-semibold mb-3 text-orange-300/90">
          Shuffle Stats Overview
        </h2>

        <div className="relative w-full h-32 bg-zinc-900/50 rounded-2xl border border-orange-800/40 overflow-hidden backdrop-blur-sm">
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <motion.polyline
              fill="none"
              stroke="#ff7a00"
              strokeWidth="2"
              points={chartData.map((val, i) => `${i * 20},${40 - val * 3}`).join(" ")}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="flex justify-between text-xs text-zinc-500 mt-2">
          <span>Total Plays</span>
          <span>Avg Duration</span>
          <span>Active Users</span>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-orange-400">
              {shuffleCount + 7}
            </span>
            <span className="text-xs text-zinc-400">Sessions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-amber-400">
              {(Math.random() * 5 + 3).toFixed(1)}m
            </span>
            <span className="text-xs text-zinc-400">Avg Time</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-green-400">
              +{(Math.random() * 20).toFixed(0)}%
            </span>
            <span className="text-xs text-zinc-400">Growth</span>
          </div>
        </div>
      </motion.div>

      {/* ⚡ Footer */}
      <footer className="mt-20 text-center text-xs text-orange-400/60">
        © 2025 Aurora Ember • Designed by Kiara McRae
      </footer>
    </div>
  );
}