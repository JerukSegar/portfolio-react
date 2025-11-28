import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="section-divider">
          <span className="divider-line"></span>
          <span className="divider-icon">✦</span>
          <span className="divider-line"></span>
        </div>
        
        <div className="download-cv-section">
          <a href="path-to-your-cv.pdf" download className="btn btn-primary download-cv-btn">
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>abianmoksa25@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Bandung, Indonesia</p>
              </div>
            </div>
          </div>
          <form className="contact-form" action="https://formspree.io/f/myzolekl" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;