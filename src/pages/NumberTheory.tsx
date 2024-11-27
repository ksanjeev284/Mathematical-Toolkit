import React from 'react';
import { CalculatorCard } from '../components/Calculator';
import { NumberInput } from '../components/NumberInput';
import * as NumberTheory from '../utils/numberTheory';

const NumberTheoryPage = () => {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Number Theory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CalculatorCard title="Prime Numbers">
          <NumberInput label="Number" value={num1} onChange={setNum1} />
          <div className="space-y-2">
            <p>Is Prime? {NumberTheory.isPrime(num1) ? 'Yes' : 'No'}</p>
            <p>Prime Factors: {NumberTheory.primeFactors(num1).join(', ')}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="GCD and LCM">
          <NumberInput label="First Number" value={num1} onChange={setNum1} />
          <NumberInput label="Second Number" value={num2} onChange={setNum2} />
          <div className="space-y-2">
            <p>GCD: {NumberTheory.gcd(num1, num2)}</p>
            <p>LCM: {NumberTheory.lcm(num1, num2)}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Factorial">
          <NumberInput label="Number" value={num1} onChange={setNum1} />
          <div className="space-y-2">
            <p>Factorial: {NumberTheory.factorial(num1)}</p>
          </div>
        </CalculatorCard>
      </div>
    </div>
  );
};

export default NumberTheoryPage;