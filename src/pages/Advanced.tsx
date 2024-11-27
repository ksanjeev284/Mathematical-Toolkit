import React, { useState } from 'react';
import { CalculatorCard } from '../components/Calculator';
import { NumberInput } from '../components/NumberInput';
import { MatrixInput } from '../components/MatrixInput';
import * as AdvancedMath from '../utils/advancedMath';

const Advanced = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [coefficients, setCoefficients] = useState('1,2,3');
  const [matrix2x2, setMatrix2x2] = useState([[1, 0], [0, 1]]);
  const [matrix3x3, setMatrix3x3] = useState([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
  const [matrixA, setMatrixA] = useState([[1, 0], [0, 1]]);
  const [matrixB, setMatrixB] = useState([[1, 0], [0, 1]]);

  const coefficientsArray = coefficients.split(',').map(n => parseFloat(n)).filter(n => !isNaN(n));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Mathematics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CalculatorCard title="Calculus">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Polynomial Coefficients (comma-separated)
            </label>
            <input
              type="text"
              value={coefficients}
              onChange={(e) => setCoefficients(e.target.value)}
              placeholder="1,2,3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <p>Original: {coefficientsArray.map((c, i) => `${c}x^${i}`).join(' + ')}</p>
            <p>Derivative: {AdvancedMath.derivative(coefficientsArray).map((c, i) => `${c}x^${i}`).join(' + ')}</p>
            <p>Integral: {AdvancedMath.integral(coefficientsArray).map((c, i) => `${c}x^${i}`).join(' + ') + ' + C'}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="2x2 Matrix Operations">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Matrix</h3>
          <MatrixInput
            rows={2}
            cols={2}
            matrix={matrix2x2}
            onChange={setMatrix2x2}
          />
          <div className="mt-4 space-y-2">
            <p>Determinant: {AdvancedMath.determinant2x2(matrix2x2)}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="3x3 Matrix Operations">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Matrix</h3>
          <MatrixInput
            rows={3}
            cols={3}
            matrix={matrix3x3}
            onChange={setMatrix3x3}
          />
          <div className="mt-4 space-y-2">
            <p>Determinant: {AdvancedMath.determinant3x3(matrix3x3)}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Matrix Multiplication">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Matrix A</h3>
          <MatrixInput
            rows={2}
            cols={2}
            matrix={matrixA}
            onChange={setMatrixA}
          />
          <h3 className="text-sm font-medium text-gray-700 mt-4 mb-2">Matrix B</h3>
          <MatrixInput
            rows={2}
            cols={2}
            matrix={matrixB}
            onChange={setMatrixB}
          />
          <div className="mt-4 space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Result (A × B):</h3>
            <div className="grid gap-2">
              {AdvancedMath.matrixMultiply(matrixA, matrixB).map((row, i) => (
                <div key={i} className="flex gap-2">
                  {row.map((value, j) => (
                    <div key={j} className="w-16 px-2 py-1 bg-gray-100 rounded-md text-center">
                      {value.toFixed(2)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Trigonometric Functions">
          <NumberInput label="Angle (degrees)" value={x} onChange={setX} />
          <div className="space-y-2">
            <p>Sine: {Math.sin(x * Math.PI / 180).toFixed(4)}</p>
            <p>Cosine: {Math.cos(x * Math.PI / 180).toFixed(4)}</p>
            <p>Tangent: {Math.tan(x * Math.PI / 180).toFixed(4)}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Complex Numbers">
          <NumberInput label="Real Part" value={x} onChange={setX} />
          <NumberInput label="Imaginary Part" value={y} onChange={setY} />
          <div className="space-y-2">
            <p>Magnitude: {Math.sqrt(x * x + y * y).toFixed(4)}</p>
            <p>Phase (rad): {Math.atan2(y, x).toFixed(4)}</p>
          </div>
        </CalculatorCard>
      </div>
    </div>
  );
};

export default Advanced;