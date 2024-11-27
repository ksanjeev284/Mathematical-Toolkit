export const solveLinear = (a: number, b: number): number => {
  // ax + b = 0
  return -b / a;
};

export const solveQuadratic = (a: number, b: number, c: number): [number, number] => {
  // ax² + bx + c = 0
  const discriminant = b * b - 4 * a * c;
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return [x1, x2];
};

export const linearEquationSystem2x2 = (
  a1: number, b1: number, c1: number,
  a2: number, b2: number, c2: number
): [number, number] => {
  // a1x + b1y = c1
  // a2x + b2y = c2
  const determinant = a1 * b2 - a2 * b1;
  const x = (c1 * b2 - c2 * b1) / determinant;
  const y = (a1 * c2 - a2 * c1) / determinant;
  return [x, y];
};