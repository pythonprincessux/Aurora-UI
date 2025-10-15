"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ShuffleButton from "../../components/ShuffleButton";

export default function DashboardPage() {
  const tracks = [
    "🌸 Aurora Bloom",
    "🌅 Sunrise Intro",
    "💜 Violet Skies",
    "🌙 Midnight Loop",
    "🔥 Stardust Flow",
    "🪶 Ember Trails",
  ];

  const data = [
    { day: "Mon", sessions: 14 },
    { day: "Tue", sessions: 28 },
    { day: "Wed", sessions: 22 },
    { day: "Thu", sessions: 30 },
    { day: "Fri", sessions: 41 },
    { day: "Sat", sessions: 19 },
    { day: "Sun", sessions: 25 },
  ];

  const stats = [
    { label: "TOTAL PLAYS", value: "1,264", color: "from-amber-400 to-orange-500" },
    { label: "AVG. DURATION", value: "4.8m", color: "from-pink-400 to-rose-500" },
    { label: "ACTIVE USERS", value: "342", color: "from-yellow-400 to-amber-500" },
    { label: "SHUFFLE SESSIONS", value: "97", color: "from-violet-500 to-purple-600" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-black via-zinc-900 to-orange-900 text-white py-20">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,170,64,0.4)]"
      >
        Aurora Cloud Dashboard ☁️
      </motion.h1>

      <p className="text-zinc-400 mt-2 mb-8">
        Real-time insight into your Aurora environment
      </p>

      <ShuffleButton />

      {/* Playlist */}
      <ul className="mt-8 space-y-2 text-center text-zinc-300">
        {tracks.map((track, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="text-lg"
          >
            {track}
          </motion.li>
        ))}
      </ul>

      {/* Graph Section */}
      <div className="mt-12 w-full max-w-4xl h-64 bg-zinc-900/50 rounded-2xl p-6 shadow-lg shadow-black/40 backdrop-blur-sm">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffb34720" />
            <XAxis dataKey="day" stroke="#ffb347" />
            <YAxis stroke="#ffb347" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sessions"
              stroke="#ff7a00"
              strokeWidth={3}
              dot={{ r: 4, fill: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Cards */}
      <section className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className={`p-6 rounded-2xl text-center bg-gradient-to-br ${stat.color} shadow-lg shadow-black/40 hover:scale-[1.03] transition-all`}
          >
            <p className="text-xs uppercase tracking-widest text-zinc-900/90 font-semibold">
              {stat.label}
            </p>
            <p className="text-4xl font-extrabold text-white drop-shadow-md mt-2">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <div className="mt-10 text-center">
        <a
          href="/dashboard/v2"
          className="text-sm font-semibold text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-all"
        >
          View Aurora Cloud Analytics (v2) →
        </a>
      </div>
    </main>
  );
}