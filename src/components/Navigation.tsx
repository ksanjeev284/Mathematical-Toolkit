import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Calculator className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">Math Toolkit</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/basic-math"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/basic-math'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Basic Math
            </Link>
            <Link
              to="/number-theory"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/number-theory'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Number Theory
            </Link>
            <Link
              to="/statistics"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/statistics'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Statistics
            </Link>
            <Link
              to="/geometry"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/geometry'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Geometry
            </Link>
            <Link
              to="/finance"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/finance'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Finance
            </Link>
            <Link
              to="/advanced"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/advanced'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Advanced
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;