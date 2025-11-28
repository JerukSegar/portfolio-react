import React, { useState } from 'react';

import { smoothScroll } from '../utils/smoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScroll(targetId);
    setIsMenuOpen(false); // Tutup menu mobile setelah klik
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Portfolio</a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#artworks" className="nav-link" onClick={(e) => handleNavClick(e, 'artworks')}>Artworks</a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </div>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

// ⚠️ TAMBAHKAN BARIS INI DI AKHIR FILE:
export default Navbar;