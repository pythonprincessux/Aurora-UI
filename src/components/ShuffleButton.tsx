"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ShuffleButton() {
  const router = useRouter();
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = () => {
    const audio = new Audio("/sounds/shuffle-click.mp3");
    audio.play();

    setIsShuffling(true);

    // Simulate data refresh animation
    setTimeout(() => {
      setIsShuffling(false);
      router.refresh(); // refresh dashboard data
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShuffle}
        disabled={isShuffling}
        className={`px-8 py-4 text-lg font-semibold rounded-full transition-all ${
          isShuffling
            ? "bg-orange-800/70 text-orange-200 cursor-wait"
            : "bg-gradient-to-r from-orange-500 to-amber-400 text-black shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40"
        }`}
      >
        {isShuffling ? "Shuffling..." : "Shuffle Now 🔀"}
      </motion.button>

      <p className="text-sm text-zinc-400 mt-2">
        {isShuffling
          ? "Refreshing playlist data..."
          : "Tap to reshuffle Aurora’s playlist"}
      </p>
    </div>
  );
}