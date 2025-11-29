import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllTeamProjects, setShowAllTeamProjects] = useState(false);
  const [showAllPersonalProjects, setShowAllPersonalProjects] = useState(false);

  // Project Data - diperbarui dengan tags khusus
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
            'Game Engine: Godot 4.0',
            'Programming: GDScript',
            'Art Style: 2D Pixel Art, Top-down',
            'Platform: Windows PC',
            'Genre: Management, Survival, Simulation',
            'Auido: Open-sourced'
        ],
        tags: ['Godot', '2D Game'],
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
        demoVideo: '',
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
            'Genre: Puzzle Adventure',
            'Auido: Open-sourced'
        ],
        tags: ['Unity','2D Game'],
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
        demoVideo: '',
        projectType: 'game'
    },
    'content-management-app': {
        title: 'CONTENT MANAGEMENT APP BACKEND',
        mainImage: 'project5.png',
        gallery: [
            'project5.jpg'
        ],
        description: 'A comprehensive content management application for scheduling, organizing, and tracking social media/content performance. Features include content scheduling, view tracking, and content categorization.',
        techStack: [
            'Backend: Go (Golang)',
            'Data Structure: Arrays & Structs',
            'Algorithm: Bubble Sort'
        ],
        tags: ['Golang', 'Backend'],
        roles: [
            'Backend Developer',
            'Developed search and sorting functionalities'
        ],
        features: [
            'Content scheduling with date/time management',
            'Unique content code validation system',
            'View tracking and performance analytics',
            'Content categorization and organization',
            'Search functionality by unique codes',
            'Sorting by view count (descending order)',
            'Content idea suggestion system',
            'Input validation and error handling'
        ],
        webLink: 'https://github.com/JerukSegar/GoLanguage-contentManagement.git',
        projectType: 'website'
    },
    'portfolio': {
        title: 'PORTFOLIO WEBSITE',
        mainImage: 'profile.png',
        gallery: [
            'profile.png',
            'pcview.png',
            'mobileview.jpg'
        ],
        description: 'A React built portfolio website showcasing my projects and skills as a programmer and game artist.',
        techStack: [
            'Frontend: React, JavaScript (ES6+)',
            'State Management: React Hooks (useState, useEffect)',
            'Styling: CSS3 with CSS Variables & Flexbox/Grid',
            'Animation: Framer Motion & CSS Transitions',
            'Build Tool: React App',
            'Deployment: Vercel',
            'Version Control: Git & GitHub'
        ],
        tags: ['React', 'Frontend'],
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
        tags: ['JavaScript', 'HTML', 'CSS'],
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
    'placeholder': {
        title: '[PLACEHOLDER]',
        mainImage: 'placeholder.jpg',
        gallery: [
            'placeholder.jpg'
        ],
        description: '[PLACEHOLDER PROJECT DESCRIPTION]',
        techStack: [
            '[PLACEHOLDER]: Technology 1',
            '[PLACEHOLDER]: Technology 2',
            '[PLACEHOLDER]: Technology 3'
        ],
        tags: ['TECH1', 'TECH2', 'TECH3'],
        roles: [
            '[PLACEHOLDER ROLE 1]',
            '[PLACEHOLDER ROLE 2]',
            '[PLACEHOLDER ROLE 3]'
        ],
        features: [
            '[PLACEHOLDER FEATURE 1]',
            '[PLACEHOLDER FEATURE 2]',
            '[PLACEHOLDER FEATURE 3]'
        ],
        webLink: '',
        projectType: 'website'
    },
  };

  // Project arrays untuk masing-masing kategori
  const teamProjects = ['jemuran', 'sproste', 'content-management-app'];
  const personalProjects = ['portfolio', 'penalty-shooter', 'placeholder'];

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

  // Render project card - DIPERBAIKI: menggunakan tags khusus
  const renderProjectCard = (projectKey) => {
    const project = projectsData[projectKey];
    return (
      <div key={projectKey} className="project-card">
        <img src={project.mainImage} alt={project.title} onError={handleImageError} />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); openModal(projectKey); }}>
            View Details
          </a>
        </div>
      </div>
    );
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
            {/* Tampilkan 2 project pertama */}
            {teamProjects.slice(0, 2).map(projectKey => renderProjectCard(projectKey))}
            
            {/* Tampilkan project tambahan jika showAllTeamProjects true */}
            {showAllTeamProjects && teamProjects.slice(2).map(projectKey => renderProjectCard(projectKey))}
          </div>
          
          {/* View More / View Less Button */}
          {teamProjects.length > 2 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              {!showAllTeamProjects ? (
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowAllTeamProjects(true)}
                >
                  View More Team Projects
                </button>
              ) : (
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowAllTeamProjects(false)}
                >
                  View Less
                </button>
              )}
            </div>
          )}
        </div>

        {/* Personal Projects */}
        <div className="project-category">
          <h3 className="project-category-title">Personal Projects</h3>
          <div className="projects-grid">
            {/* Tampilkan 2 project pertama */}
            {personalProjects.slice(0, 2).map(projectKey => renderProjectCard(projectKey))}
            
            {/* Tampilkan project tambahan jika showAllPersonalProjects true */}
            {showAllPersonalProjects && personalProjects.slice(2).map(projectKey => renderProjectCard(projectKey))}
          </div>
          
          {/* View More / View Less Button */}
          {personalProjects.length > 2 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              {!showAllPersonalProjects ? (
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowAllPersonalProjects(true)}
                >
                  View More Personal Projects
                </button>
              ) : (
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowAllPersonalProjects(false)}
                >
                  View Less
                </button>
              )}
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal" id="projectModal" style={{display: 'block'}}>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <span className="close" onClick={closeModal}>&times;</span>
              </div>
              
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