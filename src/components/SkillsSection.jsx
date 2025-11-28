import React, { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillsData = {
    programming: [
      { name: 'C++', icon: 'fab fa-cuttlefish' },
      { name: 'GO', icon: 'fab fa-golang' }
    ],
    frontend: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js-square' }
    ],
    tools: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Figma', icon: 'fab fa-figma' },
      { name: 'Aseprite', icon: 'fas fa-paint-brush' },
      { name: 'RenPy', icon: 'fas fa-gamepad' },
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'Code::Blocks', icon: 'fas fa-cogs' }
    ],
    'game-art': [
      { name: 'Pixel Art', icon: 'fas fa-th-large' },
      { name: 'Character Design', icon: 'fas fa-user' },
      { name: 'UI/UX', icon: 'fas fa-desktop' },
      { name: 'Environments', icon: 'fas fa-tree' }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider">
          <span className="divider-line"></span>
          <span className="divider-icon">✦</span>
          <span className="divider-line"></span>
        </div>
        
        {/* Skills Filter Buttons - NOW WITH REACT STATE! */}
        <div className="skills-filter">
          <button 
            className={`skills-filter-btn ${activeCategory === 'programming' ? 'active' : ''}`}
            onClick={() => setActiveCategory('programming')}
          >
            Programming
          </button>
          <button 
            className={`skills-filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`skills-filter-btn ${activeCategory === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools')}
          >
            Tools
          </button>
          <button 
            className={`skills-filter-btn ${activeCategory === 'game-art' ? 'active' : ''}`}
            onClick={() => setActiveCategory('game-art')}
          >
            Game Art
          </button>
        </div>
        
        {/* Skills Content - DYNAMIC WITH REACT! */}
        <div className="skills-content">
          <div className="skills-category active">
            <div className="skills-grid">
              {skillsData[activeCategory].map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={skill.icon}></i>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;