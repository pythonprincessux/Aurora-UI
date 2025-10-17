"use client";

import React from "react";
import Link from "next/link";

export default function EmailExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0b] via-black to-[#1a0e08] text-zinc-200">
      {/* Hero */}
      <section className="text-center pt-24 pb-16 px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-orange-400 to-amber-600 drop-shadow-[0_0_35px_rgba(255,170,40,0.4)] animate-pulse-slow">
          Aurora Email & Marketing Experience
        </h1>
        <p className="mt-4 text-lg text-zinc-400 max-w-3xl mx-auto">
          Accessible. Responsive. Compliant. <br />
          Showcasing real-world email systems built with HTML, CSS, and WCAG principles — tested with{" "}
          <span className="text-amber-300">Litmus</span> and{" "}
          <span className="text-amber-300">Email on Acid</span>.
        </p>
      </section>

      {/* Templates Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-8 md:grid-cols-2">
        {[
          {
            title: "Aurora Product Launch Email",
            desc: "Responsive announcement template using hybrid fluid layout and inline CSS.",
            link: "/emails/product-launch.html",
            badge: "WCAG 2.1 AA",
          },
          {
            title: "Newsletter Template",
            desc: "Semantic, screen-reader-friendly design tested in Gmail, Outlook, and Apple Mail.",
            link: "/emails/newsletter.html",
            badge: "Responsive + Semantic",
          },
          {
            title: "Promotional Offer Email",
            desc: "CAN-SPAM compliant layout with accessible color contrast and clear unsubscribe links.",
            link: "/emails/promo.html",
            badge: "CAN-SPAM Certified",
          },
        ].map((email, i) => (
          <a
            key={i}
            href={email.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-amber-400/10 bg-zinc-900/40 p-6
                       shadow-[0_0_35px_rgba(255,170,40,0.15)] hover:shadow-[0_0_55px_rgba(255,200,60,0.28)]
                       transition-all duration-300 relative overflow-hidden"
          >
            {/* Glow hover accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <h3 className="text-amber-300 text-xl font-semibold mb-2">{email.title}</h3>
            <p className="text-zinc-400 text-sm mb-4">{email.desc}</p>
            <span className="inline-block text-[12px] px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-medium">
              {email.badge}
            </span>
          </a>
        ))}
      </section>

      {/* QA & Accessibility Section */}
      <section className="mx-auto max-w-5xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-4">
          QA & Accessibility Testing
        </h2>
        <p className="text-zinc-400 mb-6">Each template has been validated for:</p>

        <ul className="space-y-3 text-zinc-300">
          <li>✅ WCAG 2.1 AA color contrast and semantic heading hierarchy</li>
          <li>✅ ARIA roles for assistive technology readability</li>
          <li>✅ CAN-SPAM compliance (clear sender info, unsubscribe link)</li>
          <li>
            ✅ Cross-client testing using{" "}
            <span className="text-amber-300">Litmus</span> and{" "}
            <span className="text-amber-300">Email on Acid</span>
          </li>
        </ul>

        <p className="mt-8 text-sm text-zinc-500 italic">
          *Rendering verified across Gmail, Outlook, Apple Mail, and iOS Mail.*
        </p>
      </section>

      {/* How I Build Section */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-6">
          How I Build Accessible Emails
        </h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Every email is built with a balance of visual polish and technical care:
        </p>

        <ul className="mt-4 space-y-3 text-zinc-300">
          <li>• Hybrid fluid tables for true responsiveness across clients</li>
          <li>• Inline CSS for consistent rendering in Gmail and Outlook</li>
          <li>• Semantic markup + ARIA labels for screen readers</li>
          <li>• Compliance and performance — under 100 KB total size</li>
        </ul>
      </section>

      {/* Resume Access Section */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <h2 className="text-3xl font-semibold text-amber-300 mb-6">
          View My Resume
        </h2>
        <p className="text-zinc-400 leading-relaxed mb-8">
          Explore my certifications, UX and front-end experience, and project leadership skills — all in one place.
        </p>
        <a
          href="/KiaraMcRae_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-400/20 px-6 py-2 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300"
        >
          📄 View My Resume
        </a>
      </section>

      {/* CTA */}
      <section className="text-center pb-16">
        <Link
          href="/visual-design"
          className="rounded-full bg-amber-500/10 border border-amber-400/20 px-6 py-2 text-amber-300
                     hover:bg-amber-500/20 hover:text-amber-200 transition-all duration-300"
        >
          ← Back to Visual Design
        </Link>
      </section>
    </main>
  );
}