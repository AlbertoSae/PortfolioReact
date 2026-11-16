import React, { useState } from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import SocialLinks from '../../ui/SocialLinks';
import Modal from '../../ui/Modal';
import LegalContent from '../../ui/LegalContent';
import { Icons } from '../../../assets/iconRegistry';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    const [legalModal, setLegalModal] = useState({ isOpen: false, type: null });

    const openLegalModal = (type) => setLegalModal({ isOpen: true, type });
    const closeLegalModal = () => setLegalModal({ isOpen: false, type: null });

    const getModalContent = () => {
        if (!legalModal.type) return null;
        
        // Maps the type to translation keys
        const titleKey = `footer.${legalModal.type}_title`;
        const contentKey = `footer.${legalModal.type}_content`;
        const isMarkdownDoc = ['legal_notice', 'privacy_policy', 'cookie_policy'].includes(legalModal.type);
        return {
            title: t(titleKey),
content: isMarkdownDoc ? (
                <LegalContent content={t(contentKey)} />
            ) : (
                renderContent(t(contentKey))
            )
        };
    };

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

    const modalData = getModalContent();

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
                                {/* Logo / Enlace a Malt */}
                                <a 
                                    href="https://www.malt.com/profile/albertosaezcanada" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-malt-btn"
                                    aria-label="Perfil de Malt"
                                >
                                    <img src={Icons.Social.malt} alt="Malt" className="footer-malt-img" />
                                </a>
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
                       <div className="legal-links-container">
                            <span className="legal-link" onClick={() => openLegalModal('legal_notice')}>
                                {t('footer.legal_notice_title')}
                            </span>
                            <span className="legal-link" onClick={() => openLegalModal('privacy_policy')}>
                                {t('footer.privacy_policy_title')}
                            </span>
                            <span className="legal-link" onClick={() => openLegalModal('cookie_policy')}>
                                {t('footer.cookie_policy_title')}
                            </span>
                            <span className="legal-link" onClick={() => openLegalModal('legal')}>
                                {t('footer.legal_link')}
                            </span>
                        </div>
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
                isOpen={legalModal.isOpen} 
                onClose={closeLegalModal} 
                title={modalData?.title}
                footer={(
                    <button className="legal-close-btn" onClick={closeLegalModal}>
                        {t('footer.legal_close')}
                    </button>
                )}
            >
                <div className="legal-modal-markdown">
                    {modalData?.content}
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;


