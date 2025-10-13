'use client';

import { useState } from 'react';
import { trueShuffle } from '../utils/shuffle';

export default function Home() {
  const [playlist, setPlaylist] = useState<string[]>([
    '🌅 Sunrise Intro',
    '💜 Violet Skies',
    '🌙 Midnight Loop',
    '🔥 Stardust Flow',
    '🌸 Aurora Bloom',
  ]);
  const [loading, setLoading] = useState(false);

  const handleShuffle = () => {
    setLoading(true);
    setTimeout(() => {
      setPlaylist(trueShuffle(playlist));
      setLoading(false);
    }, 500);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white text-center space-y-6 transition-all duration-500">
      <h1 className="text-5xl font-bold drop-shadow-md">✨ Aurora UI ✨</h1>
      <p className="text-lg opacity-90">True Shuffle Demo — Powered by Next.js + Tailwind + TypeScript</p>

      <button
        onClick={handleShuffle}
        disabled={loading}
        className="px-6 py-3 bg-white/10 rounded-xl backdrop-blur-md hover:bg-white/20 shadow-lg transition-all"
      >
        {loading ? 'Shuffling...' : '🔀 Shuffle Tracks'}
      </button>

      <ul className="space-y-3 mt-6">
        {playlist.map((track, i) => (
          <li
            key={i}
            className="text-lg bg-white/10 rounded-xl px-4 py-2 w-80 mx-auto shadow-md backdrop-blur-md hover:bg-white/20 transition-all"
          >
            {track}
          </li>
        ))}
      </ul>
    </main>
  );
}