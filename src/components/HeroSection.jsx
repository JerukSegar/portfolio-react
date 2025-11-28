import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Hi, I'm <span className="highlight">Muhammad Abian Moksa Gunarto</span></h1>
            <p className="hero-subtitle">Programmer & Game Artist</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Project</a>
              <a href="#contact" className="btn btn-secondary">Contact</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/profile.png" alt="Muhammad Abian Moksa Gunarto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;