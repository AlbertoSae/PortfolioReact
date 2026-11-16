import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../Components/ui/SectionHeader';
import SocialLinks from '../../Components/ui/SocialLinks';
import { Icons } from '../../assets/iconRegistry';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <SectionHeader 
        title={t('sections.contact.title')} 
        subtitle={t('sections.contact.subtitle')} 
      />

      <div className="contact-container">
        {/* Left Column: Social Networks */}
        <div className="contact-socials">
          <h4 className="contact-column-title">{t('sections.contact.social_title')}</h4>
          <SocialLinks variant="column" showLabels={true} className="contact-social-links" />
        </div>

        {/* Right Column: Malt Card */}
        <div className="contact-malt-card">
          <h4 className="contact-question">
            {t('sections.contact.malt_question', '¿Tienes un proyecto en mente?')}
          </h4>
          <p className="contact-malt-desc">
            {t('sections.contact.malt_desc', 'Puedes contactarme y contratar mis servicios directamente a través de Malt.')}
          </p>
          {/* Logo / Enlace a Malt */}
          <a 
            href="https://www.malt.com/profile/albertosaezcanada"
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-malt-link"
            aria-label="Perfil de Malt"
          >
            <div className="contact-malt-badge">
              <img src={Icons.Social.malt} alt="Malt" className="contact-malt-img" />
            </div>
            <span className="contact-malt-cta">
              {t('sections.contact.malt_cta', 'Ver perfil en Malt →')}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

