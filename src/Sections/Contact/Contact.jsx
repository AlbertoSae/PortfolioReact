import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../Components/ui/SectionHeader';
import SocialLinks from '../../Components/ui/SocialLinks';

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
};

export default Contact;

