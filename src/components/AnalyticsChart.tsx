"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", sessions: 8 },
  { day: "Tue", sessions: 14 },
  { day: "Wed", sessions: 11 },
  { day: "Thu", sessions: 18 },
  { day: "Fri", sessions: 22 },
  { day: "Sat", sessions: 25 },
  { day: "Sun", sessions: 17 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-black/40 border border-orange-500/20 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,120,0,0.25)]">
      <h2 className="text-xl font-semibold text-orange-400 mb-4 text-center">🔥 Shuffle Sessions (Past 7 Days)</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="day" stroke="#ffa366" />
          <YAxis stroke="#ffa366" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(255,120,0,0.4)",
              color: "#ffa366",
            }}
          />
          <Line
            type="monotone"
            dataKey="sessions"
            stroke="#ff7300"
            strokeWidth={3}
            dot={{ fill: "#ffa366", strokeWidth: 2 }}
            activeDot={{ r: 6, stroke: "#ff9e40", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}