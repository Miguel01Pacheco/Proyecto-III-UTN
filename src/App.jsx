import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { UserProvider } from './contexts/UserContext';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <UserProvider>
      <ThemeToggle>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeToggle>
    </UserProvider>
  );
};

export default App;
