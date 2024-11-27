export const mean = (numbers: number[]): number => {
  return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
};

export const median = (numbers: number[]): number => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
};

export const mode = (numbers: number[]): number[] => {
  const frequency: { [key: number]: number } = {};
  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  
  const maxFreq = Math.max(...Object.values(frequency));
  return Object.entries(frequency)
    .filter(([_, freq]) => freq === maxFreq)
    .map(([num]) => Number(num));
};

export const variance = (numbers: number[]): number => {
  const avg = mean(numbers);
  return mean(numbers.map(num => Math.pow(num - avg, 2)));
};

export const standardDeviation = (numbers: number[]): number => {
  return Math.sqrt(variance(numbers));
};