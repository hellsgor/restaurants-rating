export function calcRating(estimates: number[]): number {
  return (
    Math.round(
      (estimates.reduce((acc, item) => acc + item, 0) / estimates.length) * 10,
    ) / 10
  );
}
