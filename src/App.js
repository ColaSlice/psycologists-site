import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PrivatePage from './pages/PrivatePage';
import RegisterPage from './pages/RegisterPage';
import MessagePage from './pages/MessagePage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  /*
  let auth = {'token':false};
    if (localStorage.getItem("ok")) {
        auth = {'token':true};
    }
    */
  return (
    <>
      <nav>
        <ul className='neo_ul'>
          <li className='neo_li'><Link to="/">Home</Link></li>
          <li className='neo_li'><Link to="/LoginPage">Login</Link></li>
          <li className='neo_li'><Link to="/RegisterPage">Register</Link></li>
          <li className='neo_li'><Link to="/MessagePage">Message</Link></li>
          <li className='neo_li'><Link to="/PrivatePage">Bruger side</Link></li>
        </ul>
      </nav>
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