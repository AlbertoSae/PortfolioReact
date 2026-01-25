import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../Components/ui/SectionHeader';
import Modal from '../../Components/ui/Modal';
import ProjectCard from '../../Components/ui/ProjectCard';
import MediaRenderer from '../../Components/ui/MediaRenderer';
import useCarousel from '../../hooks/useCarousel';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Carousel logic extracted to a custom hook
  const { 
    currentIndex, 
    currentItem: expandedMedia, 
    next: nextMedia, 
    prev: prevMedia, 
    goTo: goToMedia,
    reset: resetCarousel 
  } = useCarousel(selectedProject?.images);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    resetCarousel();
  };

  const closeExpanded = () => {
    setSelectedProject(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
      if (e.key === 'Escape') closeExpanded();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextMedia, prevMedia]);

  const scroll = (direction) => {
    if (projectsRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      projectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <SectionHeader title={t('sections.projects.title')} />
      
      <div className="projects-container">
        <button className="projects-nav-btn prev" onClick={() => scroll('left')} aria-label="Previous">&#10094;</button>
        
        <ul className="projects-list" ref={projectsRef}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onImageClick={handleProjectClick} 
            />
          ))}
        </ul>

        <button className="projects-nav-btn next" onClick={() => scroll('right')} aria-label="Next">&#10095;</button>

        <div className="projects-scroll-dots">
          {projects.map((p, idx) => (
            <span key={p.id} className="scroll-dot" onClick={() => projectsRef.current.scrollTo({ left: idx * 400, behavior: 'smooth' })}></span>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={closeExpanded} variant="image">
        <div className="modal-carousel-container">
          {selectedProject?.images.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={prevMedia}>&#10094;</button>
              <button className="carousel-btn next" onClick={nextMedia}>&#10095;</button>
              
              <div className="carousel-dots">
                {selectedProject.images.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); goToMedia(idx); }}
                  />
                ))}
              </div>
            </>
          )}
          
          <MediaRenderer 
            src={expandedMedia} 
            alt="Expanded Media" 
            className="modal-expanded-img"
            onClick={nextMedia}
          />
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
