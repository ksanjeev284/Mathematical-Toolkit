import React from 'react';
import { CalculatorCard } from '../components/Calculator';
import { NumberInput } from '../components/NumberInput';

const Finance = () => {
  const [principal, setPrincipal] = React.useState(0);
  const [rate, setRate] = React.useState(0);
  const [time, setTime] = React.useState(0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Financial Calculations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CalculatorCard title="Simple Interest">
          <NumberInput label="Principal" value={principal} onChange={setPrincipal} />
          <NumberInput label="Rate (%)" value={rate} onChange={setRate} />
          <NumberInput label="Time (years)" value={time} onChange={setTime} />
          <div className="space-y-2">
            <p>Interest: {(principal * rate * time / 100).toFixed(2)}</p>
            <p>Total Amount: {(principal + (principal * rate * time / 100)).toFixed(2)}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Compound Interest">
          <NumberInput label="Principal" value={principal} onChange={setPrincipal} />
          <NumberInput label="Rate (%)" value={rate} onChange={setRate} />
          <NumberInput label="Time (years)" value={time} onChange={setTime} />
          <div className="space-y-2">
            <p>Interest: {(principal * Math.pow(1 + rate/100, time) - principal).toFixed(2)}</p>
            <p>Total Amount: {(principal * Math.pow(1 + rate/100, time)).toFixed(2)}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Discount">
          <NumberInput label="Original Price" value={principal} onChange={setPrincipal} />
          <NumberInput label="Discount (%)" value={rate} onChange={setRate} />
          <div className="space-y-2">
            <p>Discount Amount: {(principal * rate / 100).toFixed(2)}</p>
            <p>Final Price: {(principal - (principal * rate / 100)).toFixed(2)}</p>
          </div>
        </CalculatorCard>
      </div>
    </div>
  );
};

export default Finance;