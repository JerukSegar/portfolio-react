import React, { useState } from 'react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = {
    jemuran: {
      title: "Jemuran the Game",
      image: "/logo_jemuran.png",
      description: "A survival game developed with 5 other developers. I was responsible for creating visual elements including characters and environments.",
      tech: ["Godot", "Pixel 2D"],
      type: "team"
    },
    sproste: {
      title: "Sproste", 
      image: "/logo_sproste.png",
      description: "A side-scrolling puzzle game developed with 3 other developers. As the Artist, I was responsible for the visual aspects.",
      tech: ["Unity", "Pixel 2D"],
      type: "team"
    },
    portfolio: {
      title: "Portfolio Website",
      image: "/profile.png",
      description: "Personal portfolio website to showcase my projects and skills as a programmer and game artist.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      type: "personal"
    }
  };

  const openModal = (projectKey) => {
    setSelectedProject(projectsData[projectKey]);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
              <img src="/logo_jemuran.png" alt="Jemuran the Game" />
              <div className="project-info">
                <h3>Jemuran the Game</h3>
                <p>A survival game developed with 5 other developers. I was responsible for creating visual elements including characters and environments.</p>
                <div className="project-tech">
                  <span>Godot</span>
                  <span>Pixel 2D</span>
                </div>
                <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); openModal('jemuran'); }}>
                  View Details
                </a>
              </div>
            </div>

            {/* Sproste Project */}
            <div className="project-card">
              <img src="/logo_sproste.png" alt="Sproste" />
              <div className="project-info">
                <h3>Sproste</h3>
                <p>A side-scrolling puzzle game developed with 3 other developers. As the Artist, I was responsible for the visual aspects.</p>
                <div className="project-tech">
                  <span>Unity</span>
                  <span>Pixel 2D</span>
                </div>
                <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); openModal('sproste'); }}>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal" style={{display: 'block'}}>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <span className="close" onClick={closeModal}>&times;</span>
              </div>
              <div className="modal-body">
                <div className="modal-gallery">
                  <div className="main-image">
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  </div>
                </div>
                <div className="project-details">
                  <div className="detail-section">
                    <h3>Description</h3>
                    <p>{selectedProject.description}</p>
                  </div>
                  <div className="detail-section">
                    <h3>Technologies</h3>
                    <ul className="tech-list">
                      {selectedProject.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
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