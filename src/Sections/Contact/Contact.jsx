import React from 'react';

import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <h2>{t('sections.contact')}</h2>
    </section>
  );
}

export default Contact;
