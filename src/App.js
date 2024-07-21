// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cornell from './components/Cornell';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cornell" element={<Cornell />} />
      </Routes>
    </Router>
  );
}

export default App;
