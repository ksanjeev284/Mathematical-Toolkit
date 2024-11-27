import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface CalculatorProps {
  title: string;
  children: React.ReactNode;
}

export const CalculatorCard: React.FC<CalculatorProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
};