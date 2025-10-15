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

// Example dataset for your graph
const chartData = [
  { day: "Mon", sessions: 4.8 },
  { day: "Tue", sessions: 6.1 },
  { day: "Wed", sessions: 3.9 },
  { day: "Thu", sessions: 6.7 },
  { day: "Fri", sessions: 5.4 },
  { day: "Sat", sessions: 4.9 },
  { day: "Sun", sessions: 5.8 },
];

export default function DashboardPage() {
  const stats = [
    { label: "Total Plays", value: "1,264" },
    { label: "Avg Duration", value: "4.8m" },
    { label: "Active Users", value: "342" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-extrabold text-orange-300 drop-shadow-[0_0_18px_rgba(255,160,64,0.25)]"
      >
        Aurora Ember Dashboard 🔥
      </motion.h1>

      <p className="mt-2 text-center text-zinc-300/80">
        Shuffle insights • live preview
      </p>

      {/* Shuffle Button */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <ShuffleButton />
      </div>

      {/* Graph Section */}
      <section className="mt-10 rounded-2xl border border-orange-900/40 bg-zinc-900/40 p-6 shadow-[inset_0_0_60px_rgba(255,160,64,0.08)]">
        <h2 className="mb-4 text-lg font-semibold text-orange-200/90">
          Shuffle Stats Overview
        </h2>

        <div className="h-[260px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 24, bottom: 0, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2b2b2b" />
              <XAxis dataKey="day" stroke="#ffa94d" />
              <YAxis stroke="#ffa94d" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1b1b1b",
                  border: "1px solid #ffa94d",
                }}
                itemStyle={{ color: "#FFD8A8" }}
              />
              <Line
                type="monotone"
                dataKey="sessions"
                stroke="#ff7a00"
                strokeWidth={3}
                dot={{ r: 5, fill: "#fff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Analytics Mini Cards */}
        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-orange-900/40 bg-gradient-to-b from-zinc-900/40 to-zinc-950/60 px-4 py-5 text-center shadow-md shadow-orange-900/20"
            >
              <p className="text-xs uppercase tracking-wider text-orange-300/70">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-orange-200">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </section>
      </section>

      {/* Link to Cloud v2 */}
      <div className="mt-10 text-center">
        <a
          href="/dashboard/v2"
          className="text-sm font-semibold text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-all"
        >
          Try Aurora Cloud Dashboard v2 →
        </a>
      </div>
    </main>
  );
}