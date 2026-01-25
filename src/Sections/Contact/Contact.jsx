import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import { Icons } from '../../assets/iconRegistry';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t('sections.contact.title')}</h2>
      <h3 className="section-subtitle">{t('sections.contact.subtitle')}</h3>

      <div className="contact-container">
        {/* Left Column: Social Networks */}
        <div className="contact-socials">
          <h4 className="contact-column-title">{t('sections.contact.social_title')}</h4>
          <div className="contact-social-links">
            <a 
              href="https://github.com/AlbertoSae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-social-item"
            >
              <div 
                className="contact-icon-mask" 
                style={{ 
                  maskImage: `url(${Icons.Social.github})`,
                  WebkitMaskImage: `url(${Icons.Social.github})`
                }}
              />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/alberto-saez-canada/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-social-item"
            >
              <div 
                className="contact-icon-mask" 
                style={{ 
                  maskImage: `url(${Icons.Social.linkedin})`,
                  WebkitMaskImage: `url(${Icons.Social.linkedin})`
                }}
              />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div className="contact-form-card">
          <h4 className="contact-column-title">{t('sections.contact.form_title')}</h4>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">{t('sections.contact.form.name')}</label>
              <input type="text" id="name" name="name" required placeholder={t('sections.contact.form.name')} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('sections.contact.form.email')}</label>
              <input type="email" id="email" name="email" required placeholder={t('sections.contact.form.email')} />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('sections.contact.form.subject')}</label>
              <input type="text" id="subject" name="subject" required placeholder={t('sections.contact.form.subject')} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('sections.contact.form.message')}</label>
              <textarea id="message" name="message" rows="5" required placeholder={t('sections.contact.form.message')}></textarea>
            </div>
            <button type="submit" className="contact-submit-btn">
              {t('sections.contact.form.submit')}
            </button>
            <p className="contact-form-disclaimer">
              {t('sections.contact.form.disclaimer')}
            </p>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Contact;

