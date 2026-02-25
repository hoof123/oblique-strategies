export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return {
    background: `hsl(${hue}, 60%, 85%)`,
    color: `hsl(${hue}, 60%, 20%)`,
  };
}
