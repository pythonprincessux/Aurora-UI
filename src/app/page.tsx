"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { trueShuffle } from "../utils/shuffle"; // correct relative path for your setup
import Link from "next/link";

export default function Home() {
  const [playlist, setPlaylist] = useState([
    "Sunrise Intro",
    "Violet Skies",
    "Midnight Loop",
    "Stardust Flow",
    "Ember Trails",
  ]);
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [shuffling, setShuffling] = useState(false);

  const handleShuffle = () => {
    setShuffling(true);
    const newPlaylist = trueShuffle([...playlist]);
    setPlaylist(newPlaylist);
    setCurrentTrack(newPlaylist[0]);
    setTimeout(() => setShuffling(false), 600);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-950 via-black to-black text-center text-white px-4 py-20 overflow-hidden">
      {/* Title */}
      <h1 className="text-5xl sm:text-6xl font-bold text-orange-400 drop-shadow-[0_0_15px_rgba(255,122,0,0.6)]">
        Aurora UI
      </h1>
      <p className="mt-4 text-zinc-400 max-w-md">
        Where ember meets code — sleek gradients, motion, and music collide.
      </p>

      {/* Shuffle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleShuffle}
        className="mt-8 px-6 py-3 rounded-full bg-orange-500 text-black font-semibold shadow-md shadow-orange-700/50 hover:bg-orange-400 transition"
      >
        {shuffling ? "Shuffling..." : "Shuffle Track 🔄"}
      </motion.button>

      {/* Current Track Display */}
      <motion.p
        className="mt-4 text-lg text-orange-300 italic"
        key={currentTrack}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        🎧 {currentTrack}
      </motion.p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-3xl">
        {/* Visual Design */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-xl p-6 bg-gradient-to-b from-orange-950 to-black border border-orange-800/40 shadow-md shadow-orange-900/40"
        >
          <h3 className="text-orange-300 font-semibold mb-2 flex items-center justify-center gap-2">
            🌅 Visual Design
          </h3>
          <p className="text-zinc-400 text-sm">
            Explore the gradient universe — built with Tailwind and motion.
          </p>
        </motion.div>

        {/* True Shuffle */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-xl p-6 bg-gradient-to-b from-orange-950 to-black border border-orange-800/40 shadow-md shadow-orange-900/40"
        >
          <h3 className="text-orange-300 font-semibold mb-2 flex items-center justify-center gap-2">
            🎧 True Shuffle
          </h3>
          <p className="text-zinc-400 text-sm">
            Experience real algorithmic randomness — no repeats until all tracks play.
          </p>
        </motion.div>

        {/* Dashboard */}
        <Link href="/dashboard">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl p-6 bg-gradient-to-b from-orange-950 to-black border border-orange-800/40 shadow-md shadow-orange-900/40 cursor-pointer"
          >
            <h3 className="text-orange-300 font-semibold mb-2 flex items-center justify-center gap-2">
              📊 Dashboard
            </h3>
            <p className="text-zinc-400 text-sm">
              Explore Aurora Cloud analytics and visual insights.
            </p>
          </motion.div>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-zinc-500">
        © 2025 <span className="text-orange-400">Aurora Ember</span> • Designed by{" "}
        <strong className="text-orange-300">Kiara McRae</strong>
      </footer>
    </main>
  );
}