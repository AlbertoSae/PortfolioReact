import LanguageSelector from '../ui/LanguageSelector';
import ThemeToggle from '../ui/ThemeToggle';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

import profileImg from '../../assets/profileWBG.png';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <div className="navbar-container">
        {/* Left: Brand */}
        <div className="navbar-brand">
          <img src={profileImg} alt="Profile" className="brand-logo" />
          <h1 className="brand-name">Alberto Sáez Cañada</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="navbar-center">
          <ul className="navbar-list">
            <li><a href="#hero">{t('nav.home')}</a></li>
            <li><a href="#aboutme">{t('nav.about')}</a></li>
            <li><a href="#projects">{t('nav.projects')}</a></li>
            <li><a href="#stack">{t('nav.stack')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
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
