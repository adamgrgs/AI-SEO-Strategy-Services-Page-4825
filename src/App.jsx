import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './pages/SalesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PredictivePlatformPage from './pages/PredictivePlatformPage';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import NeonFrameworkPage from './pages/NeonFrameworkPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/predictive-platform" element={<PredictivePlatformPage />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/neon-framework" element={<NeonFrameworkPage />} />
      </Routes>
    </Router>
  );
}

export default App;