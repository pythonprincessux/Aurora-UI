"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import ShuffleButton from "../components/ShuffleButton";

export default function HomePage() {
  // ----- playlist -----
  const tracks = useMemo(
    () => [
      "🌸 Aurora Bloom",
      "🌞 Sunrise Intro",
      "💜 Violet Skies",
      "🌙 Midnight Loop",
      "🔥 Stardust Flow",
      "🕊️ Ember Trails",
    ],
    []
  );

  const [playlist, setPlaylist] = useState<string[]>(tracks);

  // Fisher-Yates Shuffle
  const shuffle = () => {
    const a = [...tracks];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setPlaylist(a);
  };

  // 🔥 Ambient crackle logic (fixed for ambient.mp3)
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ambientOn, setAmbientOn] = useState(false);

  const ensureAudio = () => {
    if (!audioRef.current) {
      const el = new Audio("/sounds/ambient.mp3"); // ✅ your correct filename
      el.loop = true;
      el.volume = 0.0;
      audioRef.current = el;
    }
    return audioRef.current!;
  };

  const fadeAudio = (fadeIn: boolean) => {
    const audio = ensureAudio();
    const step = 0.05;
    let volume = fadeIn ? 0 : 1;
    audio.volume = volume;

    if (fadeIn) {
      audio
        .play()
        .then(() => console.log("🔥 Ambient sound started"))
        .catch((err) => console.warn("Audio play blocked:", err));
    }

    const fade = setInterval(() => {
      if (fadeIn && volume < 1) {
        volume = Math.min(1, volume + step);
        audio.volume = volume;
      } else if (!fadeIn && volume > 0) {
        volume = Math.max(0, volume - step);
        audio.volume = volume;
      } else {
        clearInterval(fade);
        if (!fadeIn) {
          audio.pause();
          console.log("🌑 Ambient sound paused");
        }
      }
    }, 100);
  };

  const toggleAmbient = () => {
    const next = !ambientOn;
    setAmbientOn(next);
    fadeAudio(next);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0b] via-black to-[#1a0e08] text-zinc-200">
      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-10 text-center">
        <h1
          className="text-6xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text
                     bg-gradient-to-b from-amber-300 via-orange-400 to-amber-600
                     drop-shadow-[0_0_45px_rgba(255,170,50,0.4)] animate-pulse-slow"
        >
          Aurora UI
        </h1>

        <p className="mt-4 text-lg text-zinc-400">
          Where ember meets code — sleek gradients, motion, and music collide.
        </p>

        <div className="mt-8 flex justify-center">
          <ShuffleButton onClick={shuffle} />
        </div>

        <ul className="mt-6 space-y-2 text-lg text-amber-300/90">
          {playlist.map((track, i) => (
            <li key={i}>{track}</li>
          ))}
        </ul>
      </section>

      {/* Cards Section */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Visual Design */}
          <Link
            href="/visual-design"
            className="group rounded-2xl border border-amber-400/10 bg-zinc-900/40 p-6
                       shadow-[0_0_35px_rgba(255,170,40,0.15)] hover:shadow-[0_0_55px_rgba(255,200,60,0.28)]
                       transition-all duration-300"
          >
            <div className="text-yellow-300 text-lg font-semibold flex items-center gap-2">
              🎨 <span>Visual Design</span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Explore the gradient universe — built with Tailwind and motion.
            </p>
          </Link>

          {/* True Shuffle */}
          <div
            className="group rounded-2xl border border-amber-400/10 bg-zinc-900/40 p-6
                       shadow-[0_0_35px_rgba(255,170,40,0.15)] hover:shadow-[0_0_55px_rgba(255,200,60,0.28)]
                       transition-all duration-300"
          >
            <div className="text-yellow-300 text-lg font-semibold flex items-center gap-2">
              🎧 <span>True Shuffle</span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Experience real algorithmic randomness — no repeats until all
              tracks play.
            </p>
          </div>

          {/* Dashboard */}
          <Link
            href="/dashboard"
            className="group rounded-2xl border border-amber-400/10 bg-zinc-900/40 p-6
                       shadow-[0_0_35px_rgba(255,170,40,0.15)] hover:shadow-[0_0_55px_rgba(255,200,60,0.28)]
                       transition-all duration-300"
          >
            <div className="text-yellow-300 text-lg font-semibold flex items-center gap-2">
              📊 <span>Dashboard</span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Aurora Cloud analytics and visual insights.
            </p>
          </Link>
        </div>
      </section>

      {/* Ambient toggle */}
      <button
        onClick={toggleAmbient}
        className="fixed left-6 bottom-6 rounded-full bg-zinc-900/70 border border-amber-400/20
                   px-4 py-2 text-sm text-amber-200 shadow-[0_0_25px_rgba(255,170,40,0.18)]
                   hover:bg-zinc-800/70 transition-colors"
      >
        {ambientOn ? "🔥 Ambient: On" : "🌑 Ambient: Off"}
      </button>

      {/* Footer */}
      <footer className="pb-10 text-center text-xs text-zinc-500">
        ✨ Made with 💖, creativity, and ember glow by{" "}
        <strong className="text-amber-300">Kiara McRae</strong> ✨
        <br />
        © 2025 Aurora Ember • All Rights Reserved
      </footer>
    </main>
  );
}