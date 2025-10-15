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
  BarChart,
  Bar,
} from "recharts";

const shuffleData = [
  { day: "Mon", plays: 420, users: 88 },
  { day: "Tue", plays: 512, users: 102 },
  { day: "Wed", plays: 488, users: 97 },
  { day: "Thu", plays: 540, users: 110 },
  { day: "Fri", plays: 620, users: 120 },
  { day: "Sat", plays: 710, users: 140 },
  { day: "Sun", plays: 689, users: 128 },
];

const DashboardV2 = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-orange-950 text-white py-16 px-6 flex flex-col items-center overflow-x-hidden">
      {/* ✨ Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,170,64,0.4)]"
      >
        Aurora Cloud Dashboard v2
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-zinc-400 text-sm mt-3 text-center max-w-2xl"
      >
        Advanced analytics for Aurora Shuffle — performance, user engagement, and session trends.
      </motion.p>

      {/* 🔥 Metric Cards */}
      <section className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 w-full max-w-5xl">
        {[
          { label: "Total Plays", value: "3,872", color: "from-amber-500 to-orange-600" },
          { label: "Active Users", value: "212", color: "from-orange-400 to-yellow-400" },
          { label: "Avg Duration", value: "4.6m", color: "from-rose-500 to-pink-500" },
          { label: "Shuffles Today", value: "147", color: "from-violet-500 to-purple-600" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-5 rounded-2xl text-center bg-gradient-to-br ${stat.color} shadow-md shadow-black/40 hover:scale-[1.04] transition-all`}
          >
            <p className="text-xs uppercase text-zinc-950/80 font-bold tracking-wide">
              {stat.label}
            </p>
            <p className="text-2xl font-extrabold text-white mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </section>

      {/* 📈 Line Chart */}
      <section className="mt-20 w-full max-w-5xl bg-zinc-900/40 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-semibold text-amber-400 mb-4"
        >
          Weekly Shuffle Sessions
        </motion.h2>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={shuffleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #ffb347",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="plays"
              stroke="#ff7a00"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#ffb347" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* 📊 Bar Chart */}
      <section className="mt-12 w-full max-w-5xl bg-zinc-900/40 backdrop-blur-lg p-6 rounded-2xl border border-zinc-800">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-semibold text-amber-400 mb-4"
        >
          User Growth & Engagement
        </motion.h2>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={shuffleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #ffb347",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="users" fill="#ff7a00" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 💫 Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center text-zinc-500 text-sm"
      >
        <p>✨ Aurora Cloud Dashboard v2 — designed by <span className="text-amber-400">Kiara McRae</span></p>
        <p className="text-xs mt-1">© 2025 Aurora Ember • All Rights Reserved</p>
      </motion.footer>
    </main>
  );
};

export default DashboardV2;