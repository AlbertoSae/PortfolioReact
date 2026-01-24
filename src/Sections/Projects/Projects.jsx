import React, { useState } from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';

// Placeholder icons (assuming they exist or will be added, using generic paths for now)

import GithubIcon from '../../assets/Icons/Social/github.png';

const Projects = () => {
  const { t } = useTranslation();
  const [expandedImage, setExpandedImage] = useState(null);

  const projects = ['project1', 'project2', 'project3', 'project4'];

  // Example images for demonstration. In a real scenario, these would come from project data.
  const projectImages = [
    'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Project+1',
    'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Project+2',
    'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Project+3',
    'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Project+4'
  ];

  const techIcons = [
    'https://via.placeholder.com/30x30/333/fff?text=JS',
    'https://via.placeholder.com/30x30/333/fff?text=R',
    'https://via.placeholder.com/30x30/333/fff?text=C'
  ];

  const handleImageClick = (img) => {
    setExpandedImage(img);
  };

  const closeExpanded = () => {
    setExpandedImage(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t('sections.projects.title')}</h2>
      
      <div className="projects-container">
        <ul className="projects-list">
          {projects.map((projKey, index) => (
            <li key={projKey} className="project-card">
              <div className="project-images" onClick={() => handleImageClick(projectImages[index])}>
                <img src={projectImages[index]} alt={t(`sections.projects.items.${projKey}.title`)} />
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{t(`sections.projects.items.${projKey}.title`)}</h3>
                <p className="project-desc">{t(`sections.projects.items.${projKey}.description1`)}</p>
                <p className="project-desc">{t(`sections.projects.items.${projKey}.description2`)}</p>
              </div>

              <div className="project-tech">
                {techIcons.map((icon, i) => (
                  <img key={i} src={icon} alt="tech icon" className="tech-icon" title="Tech" />
                ))}
              </div>

              <div className="project-actions">
                <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">
                  <div 
                    className="action-icon"
                    style={{
                      maskImage: `url(${GithubIcon})`,
                      WebkitMaskImage: `url(${GithubIcon})`
                    }}
                    aria-label="GitHub"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="demo-button">
                  {t('sections.projects.view_demo')}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {expandedImage && (
        <div className="image-overlay" onClick={closeExpanded}>
          <div className="expanded-container">
            <img src={expandedImage} alt="Expanded" className="expanded-image" />
            <button className="close-overlay">×</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
