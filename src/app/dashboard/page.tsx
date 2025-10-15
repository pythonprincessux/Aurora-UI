"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { label: "☁️ Total Streams", value: 128400, color: "from-amber-400 to-orange-600" },
    { label: "💿 Tracks Played", value: 9432, color: "from-purple-400 to-violet-600" },
    { label: "⏱ Avg. Session Time", value: 6.7, suffix: "m", color: "from-blue-400 to-indigo-600" },
    { label: "🪄 True Shuffle Accuracy", value: 99.3, suffix: "%", color: "from-pink-400 to-amber-500" },
  ];

  // Animated number logic
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, i) => {
      const target = stat.value;
      let current = 0;
      const step = target / 80; // smoother animation
      return setInterval(() => {
        current += step;
        if (current >= target) {
          clearInterval(timers[i]);
          current = target;
        }
        setCounts(prev => {
          const copy = [...prev];
          copy[i] = current;
          return copy;
        });
      }, 20);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-amber-950 text-zinc-200 px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-b from-amber-300 via-orange-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,170,50,0.4)]">
          Aurora Cloud Dashboard
        </h1>
        <p className="mt-4 text-zinc-400 text-lg">
          Real-time performance metrics — powered by motion, gradient, and code.
        </p>

        {/* Analytics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl p-6 text-center bg-gradient-to-b ${stat.color} shadow-[0_0_30px_rgba(255,170,40,0.2)] hover:shadow-[0_0_60px_rgba(255,200,60,0.3)] transition-all`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white drop-shadow-md">
                {counts[i].toFixed(stat.value < 100 ? 1 : 0)}
                {stat.suffix ?? ""}
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-100/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Aurora UI */}
        <div className="mt-16">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 hover:bg-amber-400/20 transition-colors"
          >
            ← Back to Aurora UI
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-sm text-zinc-500">
          ✨ Designed, animated, and built by <strong className="text-amber-300">Kiara McRae</strong> ✨
        </footer>
      </div>
    </main>
  );
}