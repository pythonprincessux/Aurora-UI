"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function VisualDesignPage() {
  const projects = [
    {
      title: "🔥 Aurora UI (Ember Edition)",
      desc: "Spotify-style cloud app with True Shuffle and glowing gradients. Built with Next.js + Tailwind + TypeScript.",
      link: "/projects/aurora",
    },
    {
      title: "📊 Aurora Cloud Dashboard v2",
      desc: "Real-time analytics with animated counters and data visualization powered by Recharts and Framer Motion.",
      link: "/dashboard",
    },
    {
      title: "✈️ Delta IT Internship Simulation",
      desc: "AI-powered automation proposal combining UiPath workflows and Google Cloud data processing.",
      link: "/projects/delta-it",
    },
    {
      title: "🏗️ Construction UX Study",
      desc: "Human Systems Engineering meets project management — improving on-site communication through UX design.",
      link: "/projects/construction-ux",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-violet-800 to-orange-900 text-zinc-100">
      {/* Hero Banner */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-violet-400 drop-shadow-[0_0_40px_rgba(255,180,100,0.4)]"
        >
          Kiara McRae — Designer, Builder, Visionary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300"
        >
          I design and build human-centered systems that blend art, data, and automation.
        </motion.p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 hover:bg-amber-400/20 transition-all"
          >
            View Aurora
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-violet-400/10 border border-violet-300/30 text-violet-300 hover:bg-violet-400/20 transition-all"
          >
            See Projects
          </Link>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-semibold text-amber-300 mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-zinc-300 leading-relaxed"
        >
          I merge UX strategy with engineering precision to build tools that feel as intuitive as
          they are intelligent. I lead, design, and automate — all with the goal of making tech more
          human.
        </motion.p>
      </section>

      {/* Project Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl p-6 bg-gradient-to-b from-zinc-900/70 to-black/70 border border-amber-400/10 shadow-[0_0_30px_rgba(255,170,60,0.1)] hover:shadow-[0_0_50px_rgba(255,190,80,0.25)]"
          >
            <h3 className="text-xl font-semibold text-amber-300 mb-2">{p.title}</h3>
            <p className="text-sm text-zinc-400">{p.desc}</p>
            <Link href={p.link} className="mt-4 inline-block text-amber-400 text-sm font-medium hover:text-amber-300">
              Explore →
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Contact + Footer */}
      <footer className="text-center py-10 text-sm text-zinc-400 border-t border-zinc-800">
        <p>
          ✨ Designed & built by <strong className="text-amber-300">Kiara McRae</strong> ✨
        </p>
        <div className="mt-4 flex justify-center gap-6 text-amber-300 text-sm">
          <a href="https://linkedin.com/in/kiaramcrae" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/kiaramcrae" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:kiarammcrae@gmail.com">Email</a>
        </div>
      </footer>
    </main>
  );
}