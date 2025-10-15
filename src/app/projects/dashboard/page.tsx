"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A0E08] via-[#2B1042] to-[#120C0A] text-zinc-100 px-6 pt-24 pb-20">
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-400 to-purple-400 drop-shadow-[0_0_25px_rgba(255,180,70,0.4)]"
        >
          Aurora Cloud Dashboard v2
        </motion.h1>

        <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">
          The next evolution of Aurora’s analytics interface — visualizing cloud data, shuffle
          sessions, and engagement metrics in real-time. Designed with responsive layout logic and
          animated counters powered by Recharts and Framer Motion.
        </p>

        <div className="mt-12 text-sm text-zinc-500 space-y-1">
          <p>
            🔹 <strong>Tech Stack:</strong> Next.js, Tailwind, Recharts.js, Framer Motion
          </p>
          <p>
            🔹 <strong>Focus:</strong> Real-time visualization, animation, and interactive UX
          </p>
          <p>
            🔹 <strong>Designed & built by:</strong>{" "}
            <span className="text-amber-300 font-medium">Kiara McRae</span>
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/projects/aurora"
            className="px-6 py-3 border border-zinc-700 rounded-full text-zinc-300 hover:bg-zinc-800 transition"
          >
            ← Back to Aurora
          </Link>
          <Link
            href="/projects/delta-it"
            className="px-6 py-3 bg-amber-500/10 border border-amber-400/30 rounded-full text-amber-300 hover:bg-amber-400/20 transition"
          >
            Next: Delta IT Internship →
          </Link>
        </div>
      </section>
    </main>
  );
}