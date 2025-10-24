import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

import AboutUs from './pages/AboutUs.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home title="About Us" />} />
          <Route path="/about" element={<AboutUs title="About Us" />} />
          <Route path="/portfolio" element={<Portfolio title="Portfolio" />} />
          <Route path="/careers" element={<Careers title="Careers" />} />
          <Route path="/contact" element={<Contact title="Contact" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
