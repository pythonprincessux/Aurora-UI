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
            className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300 hover:bg-amber-500/20 transition-all duration-300"
          >
            View Aurora
          </Link>
          <Link
            href="/projects"
            className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300 hover:bg-amber-500/20 transition-all duration-300"
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
            <h3 className="text-amber-300 text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-zinc-400 text-sm">{proj.desc}</p>
          </Link>
        ))}
      </section>

      {/* Why Aurora */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-4">Why I Created Aurora UI</h2>
        <p className="text-zinc-300 leading-relaxed text-[17px]">
          Aurora UI was born out of my drive to merge everything I do — design, leadership,
          and engineering — into one living example. I wanted to build a space that didn’t
          just talk about my skills but <em>showed</em> them in motion: clean design systems,
          responsive code, animations, and real interactivity. It started as a technical
          challenge but became a full reflection of who I am — someone who delivers beauty,
          logic, and purpose in every project.
        </p>
      </section>

      {/* How Aurora Was Built */}
      <section className="mx-auto max-w-5xl px-6 pb-28 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-6">How Aurora Was Built</h2>
        <p className="text-zinc-400 mb-10 leading-relaxed text-[17px]">
          Aurora UI is more than a portfolio — it’s a full-stack demonstration of
          design systems, automation, and scalable cloud architecture. Every layer
          was built to reflect modern enterprise engineering practices while keeping
          the human experience front and center.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Frontend */}
          <div className="rounded-2xl border border-amber-400/10 bg-zinc-900/40 p-6 shadow-[0_0_35px_rgba(255,170,40,0.15)]">
            <h3 className="text-xl text-amber-300 font-semibold mb-2">Frontend Foundation</h3>
            <ul className="space-y-2 text-zinc-400 text-[15px] leading-relaxed">
              <li>⚡ Built with <span className="text-amber-300">Next.js 15</span> + TypeScript for hybrid static and dynamic rendering.</li>
              <li>🎨 Styled using <span className="text-amber-300">TailwindCSS</span> and the Aurora Gradient System.</li>
              <li>🧠 Added <span className="text-amber-300">True Shuffle</span> logic via Fisher–Yates algorithm for unbiased randomness.</li>
              <li>🎧 Integrated ambient audio and Framer Motion for immersive UI interactions.</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-amber-400/10 bg-zinc-900/40 p-6 shadow-[0_0_35px_rgba(255,170,40,0.15)]">
            <h3 className="text-xl text-amber-300 font-semibold mb-2">Infrastructure & Deployment</h3>
            <ul className="space-y-2 text-zinc-400 text-[15px] leading-relaxed">
              <li>🐳 Containerized using <span className="text-amber-300">Docker</span> for consistent cross-environment builds.</li>
              <li>☁️ Configured for <span className="text-amber-300">Kubernetes</span> orchestration with scalable deployment files.</li>
              <li>⚙️ Integrated CI/CD pipelines via <span className="text-amber-300">GitHub Actions</span> + Terraform (IaC ready).</li>
              <li>🚀 Auto-deployed to <span className="text-amber-300">Vercel</span> for continuous delivery and preview environments.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-zinc-400 text-[16px] leading-relaxed">
          <p>
            Aurora was engineered as both a technical sandbox and a storytelling tool.
            It bridges creativity and computation — blending gradients, motion, and
            data into a cohesive experience that feels alive.
          </p>
          <p className="mt-4 text-amber-300 font-medium">
            Built entirely by Kiara McRae · Designed for scalability · Driven by passion ✨
          </p>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mx-auto max-w-6xl px-6 pb-32 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-8">
          Aurora Architecture Diagram
        </h2>

        <p className="text-zinc-400 mb-12 leading-relaxed text-[17px]">
          A visual map of how Aurora connects design, logic, and infrastructure —
          showing how each layer supports the next in a seamless developer experience.
        </p>

        <div className="relative mx-auto max-w-5xl bg-zinc-900/40 rounded-3xl border border-amber-400/10 p-10 shadow-[0_0_45px_rgba(255,170,40,0.15)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              { icon: "🧑‍💻", title: "User", desc: "Interacts via browser UI" },
              { icon: "💻", title: "Frontend", desc: "Next.js · Tailwind · TypeScript" },
              { icon: "📦", title: "Container Layer", desc: "Docker · GitHub Actions" },
              { icon: "☁️", title: "Cloud", desc: "Vercel · Kubernetes · Terraform" },
            ].map((layer, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-b from-[#ffb34733] to-[#ff7f5033] flex flex-col items-center justify-center text-lg">
                  <span className="text-3xl mb-2">{layer.icon}</span>
                  <span className="font-semibold text-amber-300">{layer.title}</span>
                </div>
                <p className="mt-3 text-zinc-400 text-sm">{layer.desc}</p>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
        </div>

        <p className="mt-10 text-zinc-400 text-[15px]">
          Each layer was designed to reflect my workflow — from front-end craft to
          cloud automation. Aurora demonstrates not just what I build, but{" "}
          <em>how</em> I engineer it.
        </p>
      </section>

      {/* Next Evolution Roadmap */}
      <section className="mx-auto max-w-6xl px-6 pb-32 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-8">
          The Next Evolution of Aurora
        </h2>

        <p className="text-zinc-400 mb-12 leading-relaxed text-[17px]">
          Aurora continues to evolve — each new phase blends UX, data, and automation
          into a smarter, more connected experience. Here’s what’s next on the horizon. 🌠
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "🧠 AI Integration", text: "Predictive playlist logic and adaptive dashboards using Vertex AI and Python microservices." },
            { title: "📊 Aurora Cloud Dashboard v3", text: "Live analytics streaming, expanded metrics, and sentiment insights powered by event tracking." },
            { title: "🎨 Aurora Design System", text: "Component library for scalable, accessible, multi-theme UI." },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl bg-zinc-900/40 border border-amber-400/10 p-6 shadow-[0_0_35px_rgba(255,170,40,0.15)] hover:shadow-[0_0_55px_rgba(255,200,60,0.28)] transition-all duration-300">
              <h3 className="text-amber-300 font-semibold text-xl mb-2">{card.title}</h3>
              <p className="text-zinc-400 text-sm">{card.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-zinc-400 text-[15px]">
          These milestones represent Aurora’s mission — uniting UX, code, and automation into one glowing ecosystem. ✨
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
            <span className="text-amber-300">automation</span> — translating real-world constraints
            into products that look sharp and perform even sharper.
          </p>
          <p>
            I lead with empathy and vision. My background in operations, leadership, and human
            systems engineering gives me a unique lens — I see how design decisions ripple through
            teams, workflows, and outcomes. I care deeply about equity, clarity, and making tech{" "}
            <em>feel human</em> again.
          </p>
        </div>
      </section>

      {/* Résumé + Contact */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-4">Digital Résumé</h2>
        <a href="https://drive.google.com/file/d/1JbD9YourResumeLinkHere/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-500/10 border border-amber-400/20 px-6 py-2 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300">
          📄 View My Resume
        </a>

        <h2 className="text-2xl font-semibold text-amber-300 mb-6 mt-16">Let’s Connect</h2>
        <p className="text-zinc-400 mb-8">
          I’m always open to meaningful collaborations and forward-thinking opportunities.
        </p>

        <p className="text-amber-400 text-lg font-medium mb-10 animate-pulse-slow drop-shadow-[0_0_25px_rgba(255,170,40,0.45)]">
          ✨ Let’s Work Together ✨
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://www.linkedin.com/in/kiara-mcraetopperformer" target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300">LinkedIn</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kiarammcrae@gmail.com&su=Let's%20Connect%20via%20Aurora%20UI&body=Hi%20Kiara%2C%0A%0AI%20just%20explored%20Aurora%20UI%20and%20wanted%20to%20connect%20because..." target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300">Email Me</a>
          <a href="tel:6787708243" className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300">📞 Call Me</a>
          <a href="https://github.com/pythonprincessux" target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-500/10 border border-amber-400/20 px-5 py-2 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300">GitHub</a>
        </div>
      </section>
    </main>
  );
}