import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import SearchPost from './pages/SearchPost';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <Router>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/search" element={<SearchPost />} />
      </Routes>
    </Router>
  );
}

export default App;
