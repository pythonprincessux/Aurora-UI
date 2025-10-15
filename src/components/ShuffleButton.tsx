"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface ShuffleButtonProps {
  onClick: () => void;
}

export default function ShuffleButton({ onClick }: ShuffleButtonProps) {
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  // ensure the audio is created once
  const ensureAudio = () => {
    if (!clickSoundRef.current) {
      clickSoundRef.current = new Audio("/sounds/shuffle-click.mp3");
      clickSoundRef.current.volume = 0.6;
    }
    return clickSoundRef.current;
  };

  const handleClick = () => {
    const sound = ensureAudio();
    // play short click sound
    sound.currentTime = 0;
    sound
      .play()
      .catch((err) => console.warn("Shuffle click blocked:", err));

    onClick(); // trigger shuffle logic
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-b from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500
                 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_0_25px_rgba(255,170,60,0.4)]
                 transition-all duration-200"
    >
      Shuffle Now 🔀
    </motion.button>
  );
}