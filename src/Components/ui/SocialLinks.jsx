import React from 'react';
import './SocialLinks.css';
import { Icons } from '../../assets/iconRegistry';

const SocialLinks = ({ variant = "row", className = "", showLabels = false }) => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/AlbertoSae",
      icon: Icons.Social.github
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alberto-saez-canada/",
      icon: Icons.Social.linkedin
    }
  ];

  return (
    <div className={`social-links-container ${variant} ${className}`}>
      {socials.map((social) => (
        <a 
          key={social.name}
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link-item"
          aria-label={social.name}
        >
          <div 
            className="social-icon-wrapper"
            style={{ 
              maskImage: `url(${social.icon})`,
              WebkitMaskImage: `url(${social.icon})`
            }}
          />
          {showLabels && <span className="social-label">{social.name}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
