import React from 'react'
import './Hero.css'
import githubIcon from '../../assets/Icons/Social/github.png'
import linkedinIcon from '../../assets/Icons/Social/linkedin.png'
import profileImg from '../../assets/profile.png'

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
            <div
              className='hero-social-icon-wrapper'
              style={{
                maskImage: `url(${githubIcon})`,
                WebkitMaskImage: `url(${githubIcon})`
              }}
              aria-label='GitHub'
            />

            <div
              className='hero-social-icon-wrapper'
              style={{
                maskImage: `url(${linkedinIcon})`,
                WebkitMaskImage: `url(${linkedinIcon})`
              }}
              aria-label='LinkedIn'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
