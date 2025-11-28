import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  // Custom hook untuk detect when section masuk viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider">
          <span className="divider-line"></span>
          <span className="divider-icon">✦</span>
          <span className="divider-line"></span>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>I'm currently studying at Telkom University, majoring in Informatics. I have a strong interest in programming and game development. Although still a beginner, I have a strong passion for learning and an enthusiasm for developing both technical and creative skills.</p>
            <p>I'm currently focused on learning the C++ programming language and improving my artistic skills by drawing characters and environments in a pixel art style. I enjoy working on team projects and learning from more experienced developers. I'm eager to contribute to project teams and in an environment that supports growth. I'm open to mentorship and collaboration that can accelerate my learning early in my career.</p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <motion.h3
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Counter target={1} duration={0.8} isInView={isInView} />
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Years of Experience
              </motion.p>
            </div>
            <div className="stat">
              <motion.h3
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Counter target={5} duration={1.2} isInView={isInView} />
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                Finished Projects
              </motion.p>
            </div>
            <div className="stat">
              <motion.h3
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Counter target={2} duration={0.8} isInView={isInView} />
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Team Projects
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Counter Component
const Counter = ({ target, duration, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60); // 60 FPS
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // 60 FPS

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span>{Math.round(count)}</span>;
};

export default AboutSection;