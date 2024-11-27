import React from 'react';

interface MatrixInputProps {
  rows: number;
  cols: number;
  matrix: number[][];
  onChange: (matrix: number[][]) => void;
}

export const MatrixInput: React.FC<MatrixInputProps> = ({
  rows,
  cols,
  matrix,
  onChange,
}) => {
  const handleChange = (row: number, col: number, value: string) => {
    const newMatrix = matrix.map((r) => [...r]);
    newMatrix[row][col] = parseFloat(value) || 0;
    onChange(newMatrix);
  };

  return (
    <div className="grid gap-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-2">
          {Array.from({ length: cols }).map((_, j) => (
            <input
              key={j}
              type="number"
              value={matrix[i][j]}
              onChange={(e) => handleChange(i, j, e.target.value)}
              className="w-16 px-2 py-1 border border-gray-300 rounded-md"
            />
          ))}
        </div>
      ))}
    </div>
  );
};