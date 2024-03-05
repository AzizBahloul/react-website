// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Weather from './pages/Weather/Weather';
import Calculator from './pages/Calculator/Calculator';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Login from './pages/LoginPage/Login';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path='/Movies' element={<Movies/>} />
            <Route path='/Login' element={<Login/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
