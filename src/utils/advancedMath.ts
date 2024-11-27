// Advanced mathematical operations
export const derivative = (coefficients: number[]): number[] => {
  return coefficients.slice(1).map((coef, index) => coef * (index + 1));
};

export const integral = (coefficients: number[]): number[] => {
  return [0, ...coefficients.map((coef, index) => coef / (index + 1))];
};

export const determinant2x2 = (matrix: number[][]): number => {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
};

export const determinant3x3 = (matrix: number[][]): number => {
  return (
    matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
    matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
    matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])
  );
};

export const matrixMultiply = (a: number[][], b: number[][]): number[][] => {
  const result: number[][] = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < b[0].length; j++) {
      result[i][j] = 0;
      for (let k = 0; k < b.length; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
};