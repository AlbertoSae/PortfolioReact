import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../Components/ui/SectionHeader';
import SocialLinks from '../../Components/ui/SocialLinks';
import Modal from '../../Components/ui/Modal';// modal en construccion

const Contact = () => {
  const { t } = useTranslation();

{/* Modal Bajo construccion desde aqui */}
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: null });

  const openLegalModal = (type) => setLegalModal({ isOpen: true, type });
  const closeLegalModal = () => setLegalModal({ isOpen: false, type: null });

  const getModalContent = () => {
    if (!legalModal.type) return null;
    
    const titleKey = `footer.${legalModal.type}_title`;
    const contentKey = `footer.${legalModal.type}_content`;
    
    return {
      title: t(titleKey),
      content: renderContent(t(contentKey))
    };
  };

  const renderContent = (content) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const modalData = getModalContent();
  /* Modal Bajo construccion  hasta aqui*/ 

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
            <button type="submit" className="contact-submit-btn" onClick={(e) => {
              e.preventDefault();
              openLegalModal('legal_build');//En Construccion
            }}>
              {t('sections.contact.form.submit')}
            </button>
            <p className="contact-form-disclaimer">
              {t('sections.contact.form.disclaimer')}
            </p>
          </form>
        </div>
      </div>
      {/* Modal Bajo construccion */}
      <Modal 
        isOpen={legalModal.isOpen} 
        onClose={closeLegalModal} 
        title={modalData?.title}
        footer={(
          <button className="legal-close-btn" onClick={closeLegalModal}>
            {t('footer.legal_close')}
          </button>
        )}
      >
        {modalData?.content}
      </Modal>
    </section>
  );
};

export default Contact;

