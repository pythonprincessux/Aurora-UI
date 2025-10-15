"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AuroraOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120C0A] via-[#1A0E08] to-black text-zinc-100 px-6 pt-24 pb-20">
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-orange-500 drop-shadow-[0_0_25px_rgba(255,170,70,0.4)]"
        >
          Aurora UI — Ember Edition
        </motion.h1>

        <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">
          A Spotify-style cloud app demonstrating the Aurora aesthetic — where sleek gradients,
          motion, and real algorithmic randomness meet. Features True Shuffle (Fisher–Yates),
          a glowing Tailwind interface, and ambient sound effects.
        </p>

        <div className="mt-12 text-sm text-zinc-500">
          <p>
            🔹 Built with <strong>Next.js, Tailwind CSS, and Framer Motion</strong>
          </p>
          <p>
            🔹 Designed, directed, and developed by{" "}
            <strong className="text-amber-300">Kiara McRae</strong>
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-amber-500/10 border border-amber-400/30 rounded-full text-amber-300 hover:bg-amber-400/20 transition"
          >
            See Aurora Cloud Dashboard
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-zinc-700 rounded-full text-zinc-300 hover:bg-zinc-800 transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}