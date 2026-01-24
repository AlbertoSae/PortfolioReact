import React from 'react';

import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects">
      <h2>{t('sections.projects')}</h2>
    </section>
  );
}

export default Projects;
