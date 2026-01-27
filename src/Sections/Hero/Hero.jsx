import React, { useState } from 'react';
import './Hero.css';
import profileImg from '../../assets/profile.png';
import { useTranslation } from 'react-i18next';
import SocialLinks from '../../Components/ui/SocialLinks';
import Modal from '../../Components/ui/Modal';// modal en construccion

/**
 * SECCIÓN 1: Hero
 */
const Hero = () => {
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
    <section id='hero'>
      <div className='hero-image-container'>
        <img src={profileImg} alt='Profile' className='hero-profile-img' />
      </div>
      <div className='hero-text-container'>
        <h1 className='hero-title'>Alberto Sáez Cañada</h1>
        <h2 className='hero-subtitle'>{t('hero.subtitle')}</h2>

        <div className='hero-actions'>
          <a 
            href='#cv' 
            className='hero-btn' 
            onClick={(e) => {
              e.preventDefault();
              openLegalModal('legal_build');//En Construccion
            }}
          >
            {t('hero.download_cv')}
          </a>

          <SocialLinks className="hero-socials" />
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

export default Hero;