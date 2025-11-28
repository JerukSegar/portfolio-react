import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about">
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
              <h3>1</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>4</h3>
              <p>Finished Projects</p>
            </div>
            <div className="stat">
              <h3>2</h3>
              <p>Team Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;