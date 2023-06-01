import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './utils/NavBar';

import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PrivatePage from './pages/PrivatePage';
import RegisterPage from './pages/RegisterPage';
import MessagePage from './pages/MessagePage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route element={<PrivatePage />} path="/PrivatePage" exact/>
          <Route element={<MessagePage />} path="/MessagePage" exact/>
        </Route>
      </Routes>
    </>
  );
}
export default App;