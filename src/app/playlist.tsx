"use client";
import React, { useState } from "react";
import { trueShuffle } from "../utils/shuffle";

export default function Playlist() {
  const initialTracks = [
    "☀️ Sunrise Intro",
    "💜 Violet Skies",
    "🌙 Midnight Loop",
    "🔥 Stardust Flow",
    "🌸 Aurora Bloom",
  ];

  const [playlist, setPlaylist] = useState(initialTracks);
  const [loading, setLoading] = useState(false);

  const handleShuffle = () => {
    setLoading(true);
    setTimeout(() => {
      setPlaylist(trueShuffle([...initialTracks]));
      setLoading(false);
    }, 400);
  };

  return (
    <div className="text-center mt-10 space-y-4">
      <h1 className="text-3xl font-semibold text-pink-400">
        🎶 Aurora Shuffle Player
      </h1>

      <button
        onClick={handleShuffle}
        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
      >
        {loading ? "Shuffling..." : "Shuffle Tracks"}
      </button>

      <ul className="mt-6 space-y-2">
        {playlist.map((track, index) => (
          <li
            key={index}
            className="bg-white/10 backdrop-blur-lg text-white py-2 px-4 rounded-xl shadow-md hover:bg-white/20 transition-all"
          >
            {index + 1}. {track}
          </li>
        ))}
      </ul>
    </div>
  );
}