const clamp = (number: number, a: number, b: number): number =>
  Math.min(Math.max(number, Math.min(a, b)), Math.max(a, b));

export { clamp };
