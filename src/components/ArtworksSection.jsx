import React, { useState } from 'react';

const ArtworksSection = () => {
  const [activeFilter, setActiveFilter] = useState('characters');

  const artworksData = [
    { id: 1, image: "/character1.png", title: "Dante", category: "characters" },
    { id: 2, image: "/character3.png", title: "Emak", category: "characters" },
    { id: 3, image: "/character2.gif", title: "Jabrig", category: "characters" },
    { id: 4, image: "/ui1.png", title: "Pause Menu", category: "ui" },
    { id: 5, image: "/ui2.png", title: "Level Select", category: "ui" },
    { id: 6, image: "/props1.gif", title: "Devil Sword", category: "props" },
    { id: 7, image: "/props2.gif", title: "Api", category: "props" },
    { id: 8, image: "/ilustration1.png", title: "Sword", category: "illustrations" },
    { id: 9, image: "/pibi.png", title: "Pibi", category: "illustrations" },
    { id: 10, image: "/ilustration4.png", title: "Changli", category: "illustrations" },
    { id: 11, image: "/piano.png", title: "Piano", category: "illustrations" },
    { id: 12, image: "/kopi1920.png", title: "Coffee", category: "illustrations" }
  ];

  const filteredArtworks = artworksData.filter(artwork => 
    artwork.category === activeFilter
  );

  return (
    <section id="artworks" className="artworks">
      <div className="container">
        <h2 className="section-title">Artwork</h2>
        <div className="section-divider">
          <span className="divider-line"></span>
          <span className="divider-icon">✦</span>
          <span className="divider-line"></span>
        </div>

        {/* Filter Buttons */}
        <div className="artworks-filter">
          <button 
            className={`artworks-filter-btn ${activeFilter === 'characters' ? 'active' : ''}`}
            onClick={() => setActiveFilter('characters')}
          >
            Characters
          </button>
          <button 
            className={`artworks-filter-btn ${activeFilter === 'environments' ? 'active' : ''}`}
            onClick={() => setActiveFilter('environments')}
          >
            Environments
          </button>
          <button 
            className={`artworks-filter-btn ${activeFilter === 'ui' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ui')}
          >
            UI Elements
          </button>
          <button 
            className={`artworks-filter-btn ${activeFilter === 'props' ? 'active' : ''}`}
            onClick={() => setActiveFilter('props')}
          >
            Props
          </button>
          <button 
            className={`artworks-filter-btn ${activeFilter === 'illustrations' ? 'active' : ''}`}
            onClick={() => setActiveFilter('illustrations')}
          >
            Illustrations
          </button>
        </div>

        {/* Artworks Grid */}
        <div className="artworks-grid">
          {filteredArtworks.map(artwork => (
            <div key={artwork.id} className="artwork-item" data-category={artwork.category}>
              <img src={artwork.image} alt={artwork.title} />
              <div className="artwork-overlay">
                <h3>{artwork.title}</h3>
                <span className="artwork-category">{artwork.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtworksSection;