import React from 'react';
import { CalculatorCard } from '../components/Calculator';
import { NumberInput } from '../components/NumberInput';
import * as BasicOps from '../utils/basicOperations';
import ErrorBoundary from '../components/ErrorBoundary';
import { validateNumber } from '../utils/validation';

const BasicMath = () => {
  const [num1, setNum1] = React.useState<number>(0);
  const [num2, setNum2] = React.useState<number>(0);
  const [error1, setError1] = React.useState<string>('');
  const [error2, setError2] = React.useState<string>('');

  const handleNum1Change = (value: number) => {
    setNum1(value);
    const validation = validateNumber(value);
    setError1(validation.message);
  };

  const handleNum2Change = (value: number) => {
    setNum2(value);
    const validation = validateNumber(value);
    setError2(validation.message);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Basic Mathematics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ErrorBoundary>
          <CalculatorCard title="Arithmetic Operations">
            <NumberInput 
              label="First Number" 
              value={num1} 
              onChange={handleNum1Change}
              error={error1}
            />
            <NumberInput 
              label="Second Number" 
              value={num2} 
              onChange={handleNum2Change}
              error={error2}
            />
            {!error1 && !error2 && (
              <div className="space-y-2">
                <p>Addition: {BasicOps.add(num1, num2)}</p>
                <p>Subtraction: {BasicOps.subtract(num1, num2)}</p>
                <p>Multiplication: {BasicOps.multiply(num1, num2)}</p>
                <p>Division: {num2 !== 0 ? BasicOps.divide(num1, num2).toFixed(2) : 'Cannot divide by zero'}</p>
              </div>
            )}
          </CalculatorCard>
        </ErrorBoundary>

        <ErrorBoundary>
          <CalculatorCard title="Powers and Roots">
            <NumberInput 
              label="Base" 
              value={num1} 
              onChange={handleNum1Change}
              error={error1}
            />
            <NumberInput 
              label="Exponent" 
              value={num2} 
              onChange={handleNum2Change}
              error={error2}
            />
            {!error1 && !error2 && (
              <div className="space-y-2">
                <p>Power: {BasicOps.power(num1, num2)}</p>
                <p>nth Root: {num2 !== 0 ? BasicOps.root(num1, num2 || 1).toFixed(2) : 'Invalid root'}</p>
              </div>
            )}
          </CalculatorCard>
        </ErrorBoundary>

        <ErrorBoundary>
          <CalculatorCard title="Percentages">
            <NumberInput 
              label="Value" 
              value={num1} 
              onChange={handleNum1Change}
              error={error1}
            />
            <NumberInput 
              label="Total" 
              value={num2} 
              onChange={handleNum2Change}
              error={error2}
            />
            {!error1 && !error2 && (
              <div className="space-y-2">
                <p>Percentage: {num2 !== 0 ? BasicOps.percentage(num1, num2).toFixed(2) : 'Invalid total'}%</p>
                <p>Modulus: {num2 !== 0 ? BasicOps.modulus(num1, num2) : 'Cannot divide by zero'}</p>
              </div>
            )}
          </CalculatorCard>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default BasicMath;