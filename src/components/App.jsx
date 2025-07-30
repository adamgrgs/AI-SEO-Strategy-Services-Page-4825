import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './pages/SalesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="*" element={<SalesPage />} />
      </Routes>
    </Router>
  );
}

export default App;