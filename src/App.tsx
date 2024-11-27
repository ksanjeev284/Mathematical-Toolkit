import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BasicMath from './pages/BasicMath';
import NumberTheory from './pages/NumberTheory';
import Statistics from './pages/Statistics';
import Geometry from './pages/Geometry';
import Finance from './pages/Finance';
import Advanced from './pages/Advanced';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-math" element={<BasicMath />} />
            <Route path="/number-theory" element={<NumberTheory />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/geometry" element={<Geometry />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/advanced" element={<Advanced />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;