import React from 'react';
import './Hero.css';
import profileImg from '../../assets/profile.png';
import { useTranslation } from 'react-i18next';
import SocialLinks from '../../Components/ui/SocialLinks';
import { Icons } from '../../assets/iconRegistry';

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
          {/* Logo / Enlace a Malt */}
          <a 
            href="https://www.malt.com/profile/albertosaezcanada" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-malt-link"
            aria-label="Perfil de Malt"
          >
            <img src={Icons.Social.malt} alt="Malt" className="hero-malt-img" />
          </a>

          <SocialLinks className="hero-socials" />
        </div>
      </div>
    </section>
  );
};

export default Hero;