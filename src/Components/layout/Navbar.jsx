import React, { useState } from 'react';
import LanguageSelector from '../ui/LanguageSelector';
import ThemeToggle from '../ui/ThemeToggle';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

import profileImg from '../../assets/profileWBG.png';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav>
      <div className="navbar-container">
        {/* Left: Brand */}
        <div className="navbar-brand">
          <img src={profileImg} alt="Profile" className="brand-logo" />
          <h1 className="brand-name">Alberto Sáez Cañada</h1>
        </div>

        {/* Hamburger Toggle (Mobile Only) */}
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Center: Navigation Links */}
        <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li><a href="#hero" onClick={closeMenu}>{t('nav.home')}</a></li>
            <li><a href="#aboutme" onClick={closeMenu}>{t('nav.about')}</a></li>
            <li><a href="#projects" onClick={closeMenu}>{t('nav.projects')}</a></li>
            <li><a href="#stack" onClick={closeMenu}>{t('nav.stack')}</a></li>
            <li><a href="#contact" onClick={closeMenu}>{t('nav.contact')}</a></li>
          </ul>
        </div>

        {/* Right: Controls */}
        <div className="navbar-controls">
          <button className="dev-mode-btn">~@DevMode</button>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

