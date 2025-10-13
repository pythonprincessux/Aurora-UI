'use client';
import './globals.css';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dawn' | 'midnight'>('dawn');
  const [transitioning, setTransitioning] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [particles, setParticles] = useState<number[]>([]);

  // Generate particles
  useEffect(() => {
    const arr = Array.from({ length: 15 }, (_, i) => i);
    setParticles(arr);
  }, []);

  // Aurora background
  useEffect(() => {
    const body = document.body;
    if (theme === 'dawn') {
      body.style.background =
        'linear-gradient(to bottom right, var(--aurora-dawn-from), var(--aurora-dawn-via), var(--aurora-dawn-to))';
    } else {
      body.style.background =
        'linear-gradient(to bottom right, var(--aurora-midnight-from), var(--aurora-midnight-via), var(--aurora-midnight-to))';
    }
  }, [theme]);

  // Background flow (auto morph every 15s)
  useEffect(() => {
    const interval = setInterval(() => {
      setTheme(prev => (prev === 'dawn' ? 'midnight' : 'dawn'));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Mouse glow
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setGlowPos({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleThemeSwitch = () => {
    setTransitioning(true);
    setTimeout(() => {
      setTheme(theme === 'dawn' ? 'midnight' : 'dawn');
      setTimeout(() => setTransitioning(false), 1000);
    }, 400);
  };

  return (
    <html lang="en">
      <body className="text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden animate-auroraPulse">
        
        {/* Floating particles */}
        {particles.map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 50}%`,
              animationDuration: `${20 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Glow tracking mouse */}
        <div
          className="absolute pointer-events-none transition-transform duration-300 ease-out"
          style={{
            top: `${glowPos.y}%`,
            left: `${glowPos.x}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-[40vw] h-[40vw] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-[120px] rounded-full" />
        </div>

        {/* Transition shimmer */}
        {transitioning && (
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-600 opacity-30 blur-3xl animate-auroraFade pointer-events-none"></div>
        )}

        {/* Toggle Button */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={handleThemeSwitch}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all shadow-md button-shimmer"
          >
            {theme === 'dawn' ? '🌙 Aurora Midnight' : '🌅 Aurora Dawn'}
          </button>
        </div>

        {children}
      </body>
    </html>
  );
}