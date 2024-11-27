// Basic arithmetic operations
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divide = (a: number, b: number): number => b !== 0 ? a / b : NaN;
export const power = (base: number, exponent: number): number => Math.pow(base, exponent);
export const root = (number: number, n: number): number => Math.pow(number, 1/n);
export const modulus = (a: number, b: number): number => a % b;
export const percentage = (value: number, total: number): number => (value / total) * 100;