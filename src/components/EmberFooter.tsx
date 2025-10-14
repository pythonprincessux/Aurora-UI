"use client";

export default function EmberFooter() {
  return (
    <footer className="py-8 text-center text-sm text-orange-300/70 relative z-10">
      <div className="flex flex-col items-center gap-3">
        <p className="text-orange-400/80 tracking-wide">
          ✨ Made with 🔥 and coffee by <strong>Kiara McRae</strong>
        </p>
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 blur-sm opacity-70" />
        <p className="text-xs text-orange-500/60 mt-2">
          © 2025 Aurora Platform • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}