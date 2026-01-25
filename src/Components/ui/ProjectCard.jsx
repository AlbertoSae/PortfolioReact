import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icons } from '../../assets/iconRegistry';
import MediaRenderer from './MediaRenderer';
import './ProjectCard.css';

const ProjectCard = ({ project, onImageClick }) => {
  const { t } = useTranslation();

  return (
    <li className="project-card">
      <div className="project-images" onClick={() => onImageClick(project)}>
        <MediaRenderer 
          src={project.images[0]} 
          alt={t(`sections.projects.items.${project.id}.title`)} 
          className="project-preview-media"
          isPreview={true}
        />
      </div>
      
      <div className="project-info">
        <h3 className="project-title">{t(`sections.projects.items.${project.id}.title`)}</h3>
        <p className="project-desc">{t(`sections.projects.items.${project.id}.description1`)}</p>
        <p className="project-desc">{t(`sections.projects.items.${project.id}.description2`)}</p>
      </div>

      <div className="project-tech">
        {project.tech.map((item, i) => (
          item.type === 'original' ? (
            <img key={i} src={item.icon} alt="Tech Icon" className="tech-icon-original" />
          ) : (
            <div 
              key={i} 
              className="tech-icon-wrapper"
              style={{ 
                maskImage: `url(${item.icon})`,
                WebkitMaskImage: `url(${item.icon})`
              }}
              title="Technology"
            />
          )
        ))}
      </div>

      <div className="project-actions">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          <div 
            className="action-icon"
            style={{
              maskImage: `url(${Icons.Social.github})`,
              WebkitMaskImage: `url(${Icons.Social.github})`
            }}
            aria-label="GitHub"
          />
        </a>
        {project.hasDemo && (
          <a href="#" target="_blank" rel="noopener noreferrer" className="demo-button">
            {t('sections.projects.view_demo')}
          </a>
        )}
      </div>
    </li>
  );
};

export default ProjectCard;
