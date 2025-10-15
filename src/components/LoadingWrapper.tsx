"use client";

import { useState, useEffect } from "react";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-900 to-orange-900 text-amber-400 text-3xl font-semibold animate-pulse">
        Loading Aurora...
      </div>
    );
  }

  return <>{children}</>;
}