import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PrivatePage from './pages/PrivatePage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/LoginPage">Login</Link></li>
          <li><Link to="/RegisterPage">Register</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/PrivatePage" element={<PrivatePage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
export default App;