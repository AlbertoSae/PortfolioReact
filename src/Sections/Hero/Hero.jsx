import React from 'react';
import './Hero.css';
import profileImg from '../../assets/profile.png';
import { useTranslation } from 'react-i18next';
import SocialLinks from '../../Components/ui/SocialLinks';

/**
 * SECCIÓN 1: Hero
 */
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id='hero'>
      <div className='hero-image-container'>
        <img src={profileImg} alt='Profile' className='hero-profile-img' />
      </div>
      <div className='hero-text-container'>
        <h1 className='hero-title'>Alberto Sáez Cañada</h1>
        <h2 className='hero-subtitle'>{t('hero.subtitle')}</h2>

        <div className='hero-actions'>
          <a href='#cv' className='hero-btn'>
            {t('hero.download_cv')}
          </a>

          <SocialLinks className="hero-socials" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

