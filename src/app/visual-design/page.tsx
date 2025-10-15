"use client";

import React from "react";
import Link from "next/link";

export default function VisualDesignPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0b] via-black to-[#1a0e08] text-zinc-200">
      {/* Hero */}
      <section className="relative text-center pt-24 pb-16 px-6">
        <h1
          className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text
                     bg-gradient-to-b from-amber-300 via-orange-400 to-amber-600
                     drop-shadow-[0_0_45px_rgba(255,170,50,0.4)] animate-pulse-slow"
        >
          Kiara McRae
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Designer · Builder · Visionary — blending human-centered design with intelligent systems.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <Link
            href="/"
            className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300
                       hover:bg-amber-500/20 transition-all duration-300"
          >
            View Aurora
          </Link>
          <Link
            href="/projects"
            className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300
                       hover:bg-amber-500/20 transition-all duration-300"
          >
            See My Work
          </Link>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-8 md:grid-cols-2">
        {[
          {
            title: "Aurora UI (Ember Edition)",
            desc: "Spotify-style cloud app with True Shuffle and motion-driven UI.",
            link: "/dashboard",
          },
          {
            title: "Aurora Cloud Dashboard v2",
            desc: "Data visualization suite (Recharts) with themed analytics.",
            link: "/dashboard/v2",
          },
          {
            title: "Delta IT Automation Simulation",
            desc: "AI automation proposal for enterprise workflows.",
            link: "#",
          },
          {
            title: "Construction UX Study",
            desc: "Human Systems Engineering meets field project management.",
            link: "#",
          },
        ].map((proj, i) => (
          <Link
            key={i}
            href={proj.link}
            className="group rounded-2xl border border-amber-400/10 bg-zinc-900/40 p-6
                       shadow-[0_0_35px_rgba(255,170,40,0.15)] hover:shadow-[0_0_55px_rgba(255,200,60,0.28)]
                       transition-all duration-300"
          >
            <h3 className="text-amber-300 text-xl font-semibold mb-2">
              {proj.title}
            </h3>
            <p className="text-zinc-400 text-sm">{proj.desc}</p>
          </Link>
        ))}
      </section>

      {/* Why Aurora Section */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-4">
          Why I Created Aurora UI
        </h2>
        <p className="text-zinc-300 leading-relaxed text-[17px]">
          Aurora UI was born out of my drive to merge everything I do — design, leadership,
          and engineering — into one living example. I wanted to build a space that didn’t
          just talk about my skills but <em>showed</em> them in motion: clean design systems,
          responsive code, animations, and real interactivity. It started as a technical
          challenge but became a full reflection of who I am — someone who delivers beauty,
          logic, and purpose in every project.
        </p>
      </section>

      {/* About Me */}
      <section className="mx-auto max-w-3xl px-6 pb-6 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-4">About Me</h2>

        <div className="space-y-5 text-zinc-300 leading-relaxed text-[17px]">
          <p>
            I design and build systems that feel effortless. My work sits at the intersection of{" "}
            <span className="text-amber-300">UX strategy</span>,{" "}
            <span className="text-amber-300">front-end engineering</span>, and{" "}
            <span className="text-amber-300">automation</span> — translating messy, real-world
            constraints into products that look sharp and perform even sharper.
          </p>
          <p>
            I’m comfortable owning the full stack of delivery: shaping the problem, crafting the
            interaction model, prototyping with production-ready code, and instrumenting the
            experience so we can learn and iterate fast. I love motion as a teaching tool — subtle
            animation that guides the eye and reduces cognitive load.
          </p>
          <p>
            Recent focus areas: resilient UI patterns, data visualizations that actually inform
            decisions, and “human-in-the-loop” workflows where AI assists without taking over.
          </p>
          <p>
            I lead with empathy and vision. My background in operations, leadership, and human
            systems engineering gives me a unique lens — I see how design decisions ripple through
            teams, workflows, and outcomes. I care deeply about equity, clarity, and making tech
            <em> feel human</em> again.
          </p>
          <p className="text-zinc-400">
            TL;DR — I lead, design, and automate with taste. If you value velocity and craft,
            we’ll get along.
          </p>
        </div>
      </section>

      {/* Digital Resume */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-4">
          Digital Résumé
        </h2>
        <p className="text-zinc-400 mb-6">
          Explore my experience, certifications, and impact metrics in one place.
        </p>
        <a
          href="https://drive.google.com/file/d/1JbD9YourResumeLinkHere/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-amber-500/10 border border-amber-400/20 px-6 py-2 text-amber-300
                     hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300"
        >
          📄 View My Resume
        </a>
      </section>

      {/* Contact / CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <h2 className="text-2xl font-semibold text-amber-300 mb-6">
          Let’s Connect
        </h2>

        <p className="text-zinc-400 mb-8">
          Whether it’s building beautiful systems, leading teams, or designing for scale —
          I’m always open to meaningful collaborations and forward-thinking opportunities.
        </p>

        {/* Glowing “Let’s Work Together” pulse */}
        <p className="text-amber-400 text-lg font-medium mb-10 animate-pulse-slow drop-shadow-[0_0_25px_rgba(255,170,40,0.45)]">
          ✨ Let’s Work Together ✨
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kiara-mcraetopperformer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300
                       hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300"
          >
            LinkedIn
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kiarammcrae@gmail.com&su=Let's%20Connect%20via%20Aurora%20UI&body=Hi%20Kiara%2C%0A%0AI%20just%20explored%20Aurora%20UI%20and%20wanted%20to%20connect%20because..."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Kiara McRae"
            className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300
                       hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300"
          >
            Email Me
          </a>

          {/* Phone */}
          <a
            href="tel:6787708243"
            aria-label="Call Kiara McRae"
            className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300
                       hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300"
          >
            📞 Call Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/pythonprincessux"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300
                       hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}