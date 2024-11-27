export const permutation = (n: number, r: number): number => {
  if (n < r) return 0;
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= (n - i);
  }
  return result;
};

export const combination = (n: number, r: number): number => {
  if (n < r) return 0;
  return permutation(n, r) / permutation(r, r);
};

export const probability = (favorableOutcomes: number, totalOutcomes: number): number => {
  return favorableOutcomes / totalOutcomes;
};

export const binomialProbability = (n: number, k: number, p: number): number => {
  return combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
};