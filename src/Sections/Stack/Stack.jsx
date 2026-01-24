import React from 'react';

import { useTranslation } from 'react-i18next';

const Stack = () => {
  const { t } = useTranslation();
  return (
    <section id="stack">
      <h2>{t('sections.stack')}</h2>
    </section>
  );
}

export default Stack;
