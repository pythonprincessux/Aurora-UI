"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { trueShuffle } from "../utils/shuffle";

export default function ShuffleButton() {
  const playlist = [
    "🌸 Aurora Bloom",
    "☀️ Sunrise Intro",
    "💜 Violet Skies",
    "🌙 Midnight Loop",
    "🔥 Stardust Flow",
    "🌋 Ember Trails",
  ];

  const [tracks, setTracks] = useState<string[]>(playlist);
  const [isHydrated, setIsHydrated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only after hydration can we safely render dynamic state
    setIsHydrated(true);
  }, []);

  const handleShuffle = () => {
    if (!isHydrated) return;
    setLoading(true);

    // Optional sound
    try {
      const audio = new Audio("/sounds/shuffle-click.mp3");
      audio.play().catch(() => {});
    } catch {}

    setTimeout(() => {
      setTracks(trueShuffle([...playlist]));
      setLoading(false);
    }, 300);
  };

  if (!isHydrated) {
    // Prevent mismatch by showing static fallback during SSR
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <button
          disabled
          className="rounded-xl bg-gray-700/50 px-6 py-3 font-semibold text-gray-400 cursor-not-allowed"
        >
          Loading...
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleShuffle}
        className="rounded-xl bg-gradient-to-r from-orange-600 to-yellow-400 px-6 py-3 font-semibold text-black shadow-lg hover:shadow-orange-400/40 transition-all duration-200"
      >
        {loading ? "Shuffling..." : "Shuffle Now 🔀"}
      </motion.button>

      <ul className="mt-4 space-y-2 text-orange-200 font-medium tracking-wide">
        {tracks.map((song, i) => (
          <li key={i}>{song}</li>
        ))}
      </ul>
    </div>
  );
}