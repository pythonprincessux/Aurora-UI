"use client";

import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function ChartCard() {
  const [data, setData] = useState([
    { day: "Mon", sessions: 5 },
    { day: "Tue", sessions: 8 },
    { day: "Wed", sessions: 4 },
    { day: "Thu", sessions: 7 },
    { day: "Fri", sessions: 10 },
    { day: "Sat", sessions: 6 },
    { day: "Sun", sessions: 9 },
  ]);

  // Mock dynamic updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((d) => ({
          ...d,
          sessions: Math.max(2, Math.min(12, d.sessions + (Math.random() * 4 - 2))),
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl bg-gradient-to-br from-orange-900 via-black to-orange-800 p-6 rounded-2xl shadow-2xl border border-orange-500/30">
      <h2 className="text-2xl font-bold text-orange-300 mb-4 text-center">🔥 Shuffle Sessions Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffb347" opacity={0.1} />
          <XAxis dataKey="day" stroke="#ffa94d" />
          <YAxis stroke="#ffa94d" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #ff9a3c",
              borderRadius: "10px",
              color: "#fff",
            }}
          />
          <Line type="monotone" dataKey="sessions" stroke="#ff7b00" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-orange-200 mt-4 italic">Updated in real time 🔄</p>
    </div>
  );
}