import React, { useState } from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import SocialLinks from '../../ui/SocialLinks';
import Modal from '../../ui/Modal';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

    const toggleLegalModal = () => setIsLegalModalOpen(!isLegalModalOpen);

    // Simple function to convert **text** to <strong>text</strong>
    const renderContent = (content) => {
        const parts = content.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-branding">
                        <h3 className="footer-name">Alberto Sáez Cañada</h3>
                        <p className="footer-role">{t('footer.role')}</p>
                        <div className="footer-status">
                            <span className="footer-status-dot"></span>
                            <span className="footer-status-text">{t('footer.available')}</span>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-nav">
                            <h4>{t('footer.navigation')}</h4>
                            <ul>
                                <li><a href="#aboutme">{t('nav.about')}</a></li>
                                <li><a href="#projects">{t('nav.projects')}</a></li>
                                <li><a href="#stack">{t('nav.stack')}</a></li>
                                <li><a href="#contact">{t('nav.contact')}</a></li>
                            </ul>
                        </div>

                        <div className="footer-resources">
                            <h4>{t('footer.resources')}</h4>
                            <div className="footer-resources-content">
                                <a href="#cv" className="footer-cv-btn">
                                    {t('hero.download_cv')}
                                </a>
                                <p className="footer-version">{t('footer.cv_version')}</p>
                            </div>
                        </div>

                        <div className="footer-contact">
                            <h4>{t('footer.contact_title')}</h4>
                            <SocialLinks className="footer-socials" />
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <p>© {currentYear} Alberto Sáez Cañada. {t('footer.rights')}</p>
                        <span className="legal-link" onClick={toggleLegalModal}>
                            {t('footer.legal_link')}
                        </span>
                    </div>
                    
                    <div className="footer-tech-stack">
                        <span>{t('footer.created_with')}</span>
                        <span>React</span>
                        <span>Vite</span>
                        <span>I18Next</span>
                    </div>
                </div>
            </div>

            <Modal 
                isOpen={isLegalModalOpen} 
                onClose={toggleLegalModal} 
                title={t('footer.legal_title')}
                footer={(
                    <button className="legal-close-btn" onClick={toggleLegalModal}>
                        {t('footer.legal_close')}
                    </button>
                )}
            >
                {renderContent(t('footer.legal_content'))}
            </Modal>
        </footer>
    );
};

export default Footer;


