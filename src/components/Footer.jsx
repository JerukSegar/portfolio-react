import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/JerukSegar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-abian-moksa-gunarto-792596322/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/abianjeruk?igsh=aTNjMDgydnNwcTlw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://steamcommunity.com/profiles/76561199506685033" target="_blank" rel="noopener noreferrer" aria-label="Steam">
            <i className="fab fa-steam"></i>
          </a>
          <a href="https://myanimelist.net/profile/JerukJeruk" target="_blank" rel="noopener noreferrer" aria-label="MyAnimeList">
            <i className="fas fa-list-alt"></i>
          </a>
        </div>
        <p>&copy; 2025 Muhammad Abian Moksa Gunarto. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;