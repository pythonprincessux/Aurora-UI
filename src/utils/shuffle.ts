// src/utils/shuffle.ts
// Fisher–Yates Shuffle Algorithm — Aurora Edition 🌌
// Ensures unbiased randomization (no repeats until all items have been played)

export function trueShuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  let currentIndex = shuffled.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap current element with the random one
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
}