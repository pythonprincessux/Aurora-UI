"use client";

import { motion } from "framer-motion";
import { Activity, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: <Activity size={26} className="text-orange-400" />,
    label: "Total Plays",
    value: "1,285",
    color: "from-orange-400 to-yellow-300",
  },
  {
    icon: <Clock size={26} className="text-orange-400" />,
    label: "Avg Duration",
    value: "4m 37s",
    color: "from-orange-300 to-amber-200",
  },
  {
    icon: <Users size={26} className="text-orange-400" />,
    label: "Active Users",
    value: "64",
    color: "from-orange-500 to-yellow-400",
  },
];

export default function ShuffleStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.06 }}
          className="flex flex-col items-center justify-center rounded-2xl py-6 bg-black/40 border border-orange-500/20 shadow-[0_0_25px_rgba(255,120,0,0.25)]"
        >
          <div className="mb-2">{stat.icon}</div>
          <h3
            className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color} font-semibold text-lg`}
          >
            {stat.label}
          </h3>
          <p className="text-2xl font-bold text-yellow-300 mt-1">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
}