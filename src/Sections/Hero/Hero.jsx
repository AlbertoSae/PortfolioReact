import React from 'react'
import './Hero.css'
import profileImg from '../../assets/profile.png'
import { Icons } from '../../assets/iconRegistry'
import { useTranslation } from 'react-i18next';

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

          <div className='hero-socials'>
          <a 
              href="https://github.com/AlbertoSae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-link"
            >
                <div
                  className='hero-social-icon-wrapper'
                  style={{
                    maskImage: `url(${Icons.Social.github})`,
                    WebkitMaskImage: `url(${Icons.Social.github})`
                  }}
                  aria-label='GitHub'
                />
            </a>

            <a 
              href="https://www.linkedin.com/in/alberto-saez-canada/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <div
                className='hero-social-icon-wrapper'
                style={{
                  maskImage: `url(${Icons.Social.linkedin})`,
                  WebkitMaskImage: `url(${Icons.Social.linkedin})`
                }}
                aria-label='LinkedIn'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
