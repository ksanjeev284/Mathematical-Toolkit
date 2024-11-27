import React from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  Divide,
  Percent,
  Binary,
  LineChart,
  Circle,
  Calculator,
} from 'lucide-react';

const categories = [
  {
    title: 'Basic Math',
    path: '/basic-math',
    icon: Plus,
    description: 'Addition, Subtraction, Multiplication, Division, and more',
    color: 'bg-blue-500',
  },
  {
    title: 'Number Theory',
    path: '/number-theory',
    icon: Calculator,
    description: 'Prime Numbers, Factors, GCD, LCM',
    color: 'bg-green-500',
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: LineChart,
    description: 'Mean, Median, Mode, Standard Deviation',
    color: 'bg-purple-500',
  },
  {
    title: 'Geometry',
    path: '/geometry',
    icon: Circle,
    description: 'Areas, Volumes, Trigonometry',
    color: 'bg-yellow-500',
  },
  {
    title: 'Finance',
    path: '/finance',
    icon: Percent,
    description: 'Interest, Profit & Loss, Discounts',
    color: 'bg-red-500',
  },
  {
    title: 'Advanced',
    path: '/advanced',
    icon: Binary,
    description: 'Calculus, Matrices, Complex Numbers',
    color: 'bg-indigo-500',
  },
];

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Mathematical Toolkit
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your comprehensive solution for all mathematical calculations and
          computations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.path}
              to={category.path}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`${category.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;