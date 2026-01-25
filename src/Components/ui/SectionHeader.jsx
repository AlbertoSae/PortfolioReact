import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, className = "" }) => {
  if (!title) return null;

  return (
    <div className={`section-header-container ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
    </div>
  );
};

export default SectionHeader;
