"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConstructionUXOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A0E08] via-[#2B1042] to-[#0B0B0B] text-zinc-100 px-6 pt-24 pb-20">
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-400 to-purple-500 drop-shadow-[0_0_25px_rgba(255,180,70,0.4)]"
        >
          Construction UX Study
        </motion.h1>

        <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">
          A human-systems engineering case study exploring project management systems in construction.
          This study focused on how user-centered design improves coordination, scheduling, and site
          safety through data visualization and workflow automation.
        </p>

        <div className="mt-12 text-sm text-zinc-500 space-y-1">
          <p>
            🔹 <strong>Tech Stack:</strong> Figma, Power BI, Smartsheet, Tableau
          </p>
          <p>
            🔹 <strong>Focus:</strong> Human Systems Engineering, Construction Data UX
          </p>
          <p>
            🔹 <strong>Designed & led by:</strong>{" "}
            <span className="text-amber-300 font-medium">Kiara McRae</span>
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/projects/delta-it"
            className="px-6 py-3 border border-zinc-700 rounded-full text-zinc-300 hover:bg-zinc-800 transition"
          >
            ← Back to Delta IT
          </Link>
          <Link
            href="/projects/amazon"
            className="px-6 py-3 bg-amber-500/10 border border-amber-400/30 rounded-full text-amber-300 hover:bg-amber-400/20 transition"
          >
            Next: Engineering Amazon →
          </Link>
        </div>
      </section>
    </main>
  );
}