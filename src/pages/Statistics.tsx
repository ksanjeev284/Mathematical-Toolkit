import React from 'react';
import { CalculatorCard } from '../components/Calculator';
import * as Stats from '../utils/statistics';
import { validateNumberArray } from '../utils/validation';
import ErrorBoundary from '../components/ErrorBoundary';

const Statistics = () => {
  const [numbers, setNumbers] = React.useState('');
  const [error, setError] = React.useState('');
  const numberArray = numbers.split(',').map(n => parseFloat(n)).filter(n => !isNaN(n));

  const handleInputChange = (value: string) => {
    setNumbers(value);
    const validation = validateNumberArray(value);
    setError(validation.message);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ErrorBoundary>
          <CalculatorCard title="Basic Statistics">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter numbers (comma-separated)
              </label>
              <input
                type="text"
                value={numbers}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="1,2,3,4,5"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  error ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
              )}
            </div>
            {!error && numberArray.length >= 2 && (
              <div className="space-y-2">
                <p>Mean: {Stats.mean(numberArray).toFixed(2)}</p>
                <p>Median: {Stats.median(numberArray).toFixed(2)}</p>
                <p>Mode: {Stats.mode(numberArray).join(', ')}</p>
              </div>
            )}
          </CalculatorCard>
        </ErrorBoundary>

        <ErrorBoundary>
          <CalculatorCard title="Variance & Standard Deviation">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter numbers (comma-separated)
              </label>
              <input
                type="text"
                value={numbers}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="1,2,3,4,5"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  error ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
              )}
            </div>
            {!error && numberArray.length >= 2 && (
              <div className="space-y-2">
                <p>Variance: {Stats.variance(numberArray).toFixed(2)}</p>
                <p>Standard Deviation: {Stats.standardDeviation(numberArray).toFixed(2)}</p>
              </div>
            )}
          </CalculatorCard>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Statistics;