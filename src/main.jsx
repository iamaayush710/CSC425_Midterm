// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Registration from './components/Registration';  // Import the Registration component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/registration" element={<Registration />} />  {/* Route for registration */}
      </Routes>
    </Router>
  </React.StrictMode>
);
