export const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

export const lcm = (a: number, b: number): number => {
  return Math.abs(a * b) / gcd(a, b);
};

export const factorial = (n: number): number => {
  if (n < 0) return NaN;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

export const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

export const primeFactors = (n: number): number[] => {
  const factors: number[] = [];
  let num = n;
  
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num = num / i;
    }
  }
  
  return factors;
};