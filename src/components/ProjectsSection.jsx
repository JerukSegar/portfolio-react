import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project Data - sama seperti di script.js
  const projectsData = {
    'jemuran': {
        title: 'JEMURAN THE GAME',
        mainImage: 'logo_jemuran.png',
        gallery: [
            'logo_jemuran.png',
            'jemuran-gameplay1.png',
            'jemuran-gameplay2.png',
            'jemuran-character.png'
        ],
        description: 'A management-survival game where the players take on the role of a child tasked with laundry duty by his mother Balance time, resources, and unexpected events while keeping the laundry safe from various hazards.',
        techStack: [
            'Genre: Management/Survival',
            'Game Engine: Godot 4.0',
            'Programming: GDScript',
            'Art Style: 2D Pixel Art, Top-down',
            'Platform: Windows PC',
            'Genre: Management, Survival, Simulation'
        ],
        roles: [
            'Game Artist & Asset Designer',
            'Developed visual style and art direction',
            'Created item sprites'
        ],
        features: [
            'Resource management mechanics',
            'Progressive difficulty system',
            'Multiple levels'
        ],
        demoVideo: '', // Kosong untuk unavailable
        projectType: 'game'
    },
    'sproste': {
        title: 'SPROSTE',
        mainImage: 'logo_sproste.png',
        gallery: [
            'logo_sproste.png',
            'sproste-menu.png',
            'sproste-gameplay1.png',
            'sproste-gameplay2.png',
            'sproste-character.png'
        ],
        description: 'A 2D, physics-based environmental puzzle game in which players assume the role of an exploration robot navigating a barren, trash-filled world to find a plant.',
        techStack: [
            'Game Engine: Unity',
            'Programming: C#',
            'Physics: Unity Physics 2D',
            'Art Style: 2D Pixel Art, Side-scroller',
            'Platform: Windows PC',
            'Auido: Open-sourced'
        ],
        roles: [
            'Lead Game Artist',
            'Developed visual style and art direction',
            'Created UI/UX elements',
            'Created main character sprites',
            'Created environment and backgrounds',
            'Created HUD elements'
        ],
        features: [
            'Physics-based puzzle mechanics',
            'Interactive environment destruction',
            'narrative storytelling',
            'narrative storytelling',
            'Intuitive UI/UX'
        ],
        demoVideo: '', // Kosong untuk unavailable
        projectType: 'game'
    },
    'portfolio': {
        title: 'PORTFOLIO WEBSITE',
        mainImage: 'profile.png',
        gallery: [
            'profile.png',
            'pcview.png',
            'mobileview.jpg'
        ],
        description: 'A React-based portfolio website showcasing my projects and skills as a programmer and game artist.',
        techStack: [
            'Frontend: React, JavaScript (ES6+)',
            'State Management: React Hooks (useState, useEffect)',
            'Styling: CSS3 with CSS Variables & Flexbox/Grid',
            'Animation: Framer Motion & CSS Transitions',
            'Build Tool: React App',
            'Deployment: Vercel',
            'Version Control: Git & GitHub'
        ],
        roles: [
            'Frontend Developer & UI/UX Designer',
            'Converted vanilla JS website to React components',
            'Implemented state management with React Hooks',
            'Developed responsive and interactive UI',
            'Integrated smooth animations and transitions',
            'Optimized performance and SEO'
        ],
        features: [
            'Fully responsive design',
            'Component-based React architecture',
            'Responsive design for all devices', 
            'Smooth page transitions and animations',
            'Interactive project modals and galleries',
            'Dynamic content rendering',
            'Fast loading with optimized assets',
            'Clean and maintainable code structure'
        ],
        webLink: 'https://portfolio-react-omega-sage.vercel.app/',
        projectType: 'website'
    },
    'penalty-shooter': {
        title: 'PENALTY SHOOTER SIMULATOR (unfinished)',
        mainImage: 'project4.jpg',
        gallery: [
            'project4.jpg'
        ],
        description: 'A web based football penalty shootout simulator. Experience the tension of penalty kicks with dynamic difficulty.',
        techStack: [
            'Frontend: HTML5, CSS3, JavaScript (ES6+)',
            'Game Engine: Vanilla JavaScript Canvas',
            'Deployment: Vercel',
            'Version Control: Git & GitHub'
        ],
        roles: [
            'Full-stack Developer',
            'Game Designer',
            'Engineered custom physics simulation',
            'Developed goalkeeper algorithms',
            'Designed user interface and controls',
            'Implemented game state management'
        ],
        features: [
            'Realistic ball physics and trajectory',
            'Adaptive AI goalkeeper intelligence',
            'Multiple difficulty levels',
            'Score tracking',
            'Responsive touch controls'
        ],
        webLink: 'https://penalty-sim.vercel.app/',
        projectType: 'website'
    },
  };

  const [activeImage, setActiveImage] = useState('');

  const openModal = (projectKey) => {
    setSelectedProject(projectsData[projectKey]);
    setActiveImage(projectsData[projectKey].mainImage);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImage('');
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = 'placeholder.jpg';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="section-divider">
          <span className="divider-line"></span>
          <span className="divider-icon">✦</span>
          <span className="divider-line"></span>
        </div>
        
        {/* Team Projects */}
        <div className="project-category">
          <h3 className="project-category-title">Team Projects</h3>
          <div className="projects-grid">
            {/* Jemuran Project */}
            <div className="project-card">
              <img src="logo_jemuran.png" alt="Jemuran the Game" onError={handleImageError} />
              <div className="project-info">
                <h3>JEMURAN THE GAME</h3>
                <p>A management genre game where the player plays as a little kid who is assigned to look after the laundry by his mother.</p>
                <div className="project-tech">
                  <span>GODOT</span>
                  <span>Pixel 2D</span>
                  <span>Management</span>
                </div>
                <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); openModal('jemuran'); }}>
                  View Details
                </a>
              </div>
            </div>

            {/* Sproste Project */}
            <div className="project-card">
              <img src="logo_sproste.png" alt="Sproste" onError={handleImageError} />
              <div className="project-info">
                <h3>SPROSTE</h3>
                <p>A 2D, physics-based environmental puzzle game where players control an exploration robot in a trash-filled world.</p>
                <div className="project-tech">
                  <span>Unity</span>
                  <span>Pixel 2D</span>
                  <span>Puzzle</span>
                </div>
                <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); openModal('sproste'); }}>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div className="project-category">
          <h3 className="project-category-title">Personal Projects</h3>
          <div className="projects-grid">
            {/* Portfolio Project */}
            <div className="project-card">
              <img src="profile.png" alt="Portfolio Website" onError={handleImageError} />
              <div className="project-info">
                <h3>PORTFOLIO WEBSITE</h3>
                <p>Personal portfolio website to showcase my projects and skills as a programmer and game artist.</p>
                <div className="project-tech">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
                <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); openModal('portfolio'); }}>
                  View Details
                </a>
              </div>
            </div>

            {/* Penalty Shooter Project */}
            <div className="project-card">
              <img src="project4.jpg" alt="Penalty Shooter Simulator" onError={handleImageError} />
              <div className="project-info">
                <h3>PENALTY SHOOTER SIMULATOR</h3>
                <p>A website that contains a simulation of a penalty shootout in football.</p>
                <div className="project-tech">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
                <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); openModal('penalty-shooter'); }}>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal" id="projectModal" style={{display: 'block'}}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              
              <div className="modal-body">
                <div className="modal-gallery">
                  <div className="main-image">
                    <img 
                      src={activeImage || selectedProject.mainImage} 
                      alt={selectedProject.title}
                      id="modalMainImage"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="thumbnail-gallery">
                    {selectedProject.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${(activeImage === image || (!activeImage && index === 0)) ? 'active' : ''}`}
                        onClick={() => setActiveImage(image)}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="project-details">
                  <h2 id="modalTitle">{selectedProject.title}</h2>
                  
                  <div className="detail-section">
                    <h3>
                      {selectedProject.projectType === 'website' ? 'Project Description' : 'Game Description'}
                    </h3>
                    <p id="modalDescription">{selectedProject.description}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Technologies & Specifications</h3>
                    <ul className="tech-list" id="modalTechStack">
                      {selectedProject.techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h3>My Roles & Responsibilities</h3>
                    <ul className="roles-list" id="modalRoles">
                      {selectedProject.roles.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Key Features</h3>
                    <ul className="features-list" id="modalFeatures">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Links Section */}
                  <div className="detail-section">
                    <h3 id="linksTitle">
                      {selectedProject.projectType === 'website' ? 'Web Link' : 'Demo Video'}
                    </h3>
                    <div className="links-container" id="modalLinks">
                      {selectedProject.projectType === 'website' ? (
                        selectedProject.webLink ? (
                          <a href={selectedProject.webLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            <i className="fas fa-external-link-alt"></i> Visit Website
                          </a>
                        ) : (
                          <div className="unavailable-link">
                            <i className="fas fa-clock"></i> Link Unavailable
                          </div>
                        )
                      ) : (
                        selectedProject.demoVideo ? (
                          <a href={selectedProject.demoVideo} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            <i className="fas fa-play-circle"></i> Watch Demo Video
                          </a>
                        ) : (
                          <div className="unavailable-link">
                            <i className="fas fa-clock"></i> Video Unavailable
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;