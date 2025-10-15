"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsHub() {
  const projects = [
    {
      title: "Aurora Cloud Dashboard",
      emoji: "🌈",
      desc: "Dynamic analytics interface with shuffle logic and glowing visuals.",
      href: "/dashboard",
      colors:
        "from-amber-400/10 via-orange-400/10 to-pink-500/10 hover:from-amber-500/20 hover:to-pink-500/20",
    },
    {
      title: "Delta IT Internship Simulation",
      emoji: "🛫",
      desc: "AI automation proposal for Delta’s IT innovation team.",
      href: "/projects/delta-it",
      colors:
        "from-blue-400/10 via-cyan-400/10 to-purple-400/10 hover:from-blue-500/20 hover:to-purple-500/20",
    },
    {
      title: "Construction UX Study",
      emoji: "🏗️",
      desc: "Human-systems UX design study improving construction workflows.",
      href: "/projects/construction-ux",
      colors:
        "from-amber-400/10 via-yellow-400/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20",
    },
    {
      title: "Engineering Amazon Project",
      emoji: "⚙️",
      desc: "IoT-driven warehouse optimization with AWS and UX insights.",
      href: "/projects/amazon",
      colors:
        "from-purple-400/10 via-violet-400/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A0E08] to-[#2B1042] text-zinc-100 px-6 pt-24 pb-24">
      <section className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-gradient-to-b from-amber-400 via-orange-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,180,70,0.4)]"
        >
          Featured Projects
        </motion.h1>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
          A curated collection of technical and UX projects that merge design, data, and automation.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`rounded-2xl border border-zinc-700 bg-gradient-to-br ${p.colors} p-6 shadow-[0_0_40px_rgba(255,180,70,0.1)] hover:shadow-[0_0_60px_rgba(255,180,70,0.2)] transition-all duration-300`}
            >
              <h2 className="text-2xl font-semibold text-amber-300 flex items-center justify-center gap-2">
                {p.emoji} {p.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
              <Link
                href={p.href}
                className="inline-block mt-6 px-5 py-2 border border-amber-400/30 text-amber-200 rounded-full hover:bg-amber-500/10 transition"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="inline-block text-sm text-zinc-400 hover:text-amber-300 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}