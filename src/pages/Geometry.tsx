import React from 'react';
import { CalculatorCard } from '../components/Calculator';
import { NumberInput } from '../components/NumberInput';

const Geometry = () => {
  const [radius, setRadius] = React.useState(0);
  const [length, setLength] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Geometry</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CalculatorCard title="Circle">
          <NumberInput label="Radius" value={radius} onChange={setRadius} />
          <div className="space-y-2">
            <p>Circumference: {(2 * Math.PI * radius).toFixed(2)}</p>
            <p>Area: {(Math.PI * radius * radius).toFixed(2)}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Rectangle">
          <NumberInput label="Length" value={length} onChange={setLength} />
          <NumberInput label="Width" value={width} onChange={setWidth} />
          <div className="space-y-2">
            <p>Perimeter: {2 * (length + width)}</p>
            <p>Area: {length * width}</p>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Rectangular Prism">
          <NumberInput label="Length" value={length} onChange={setLength} />
          <NumberInput label="Width" value={width} onChange={setWidth} />
          <NumberInput label="Height" value={height} onChange={setHeight} />
          <div className="space-y-2">
            <p>Volume: {length * width * height}</p>
            <p>Surface Area: {2 * (length * width + length * height + width * height)}</p>
          </div>
        </CalculatorCard>
      </div>
    </div>
  );
};

export default Geometry;