"use client";
import React from "react";
import { motion } from "framer-motion";
import ShuffleButton from "../../components/ShuffleButton";

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-16 text-center text-orange-100">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-orange-400 drop-shadow-[0_0_10px_#ff7a00]"
      >
        Aurora Ember Dashboard 🔥
      </motion.h1>

      {/* Shuffle Section */}
      <div className="mt-10">
        <ShuffleButton />
        <p className="mt-4 text-sm text-orange-200/70">
          Tap to reshuffle Aurora’s playlist
        </p>
      </div>

      {/* Analytics Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl px-6">
        {[
          { label: "Total Shuffles", value: 128 },
          { label: "Avg Session", value: "3.7 min" },
          { label: "Active Users", value: "24" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800/80 border border-orange-500/20 p-4 text-center shadow-md shadow-orange-400/10"
          >
            <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
            <p className="text-sm text-orange-100/70 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Portfolio CTA */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/pythonprincessux/Aurora-UX-Portfolio"
          target="_blank"
          className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
        >
          🌐 Explore Aurora UX Portfolio
        </a>
      </div>
    </main>
  );
}