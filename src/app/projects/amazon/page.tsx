"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AmazonEngineeringOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1C1220] to-[#2B1042] text-zinc-100 px-6 pt-24 pb-20">
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-amber-400 to-orange-500 drop-shadow-[0_0_25px_rgba(255,180,70,0.4)]"
        >
          Engineering Amazon Project
        </motion.h1>

        <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">
          A systems design and optimization project focusing on Amazon’s warehouse logistics.
          Explored IoT integration, data visualization, and UX flow for robotics and human interface
          systems to enhance operational efficiency and workplace safety.
        </p>

        <div className="mt-12 text-sm text-zinc-500 space-y-1">
          <p>
            🔹 <strong>Tech Stack:</strong> AWS IoT, Python, Tableau, Figma, Next.js
          </p>
          <p>
            🔹 <strong>Focus:</strong> Automation, Warehouse Optimization, Systems UX
          </p>
          <p>
            🔹 <strong>Led by:</strong>{" "}
            <span className="text-amber-300 font-medium">Kiara McRae</span>
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/projects/construction-ux"
            className="px-6 py-3 border border-zinc-700 rounded-full text-zinc-300 hover:bg-zinc-800 transition"
          >
            ← Back to Construction UX
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 bg-purple-500/10 border border-purple-400/30 rounded-full text-purple-300 hover:bg-purple-400/20 transition"
          >
            Return to Projects Hub →
          </Link>
        </div>
      </section>
    </main>
  );
}