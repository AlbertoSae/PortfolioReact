import React, { useState } from 'react';
import './AboutMe.css';
import { useTranslation } from 'react-i18next';
import { Icons } from '../../assets/iconRegistry';
import TypingEffect from '../../Components/ui/TypingEffect';
import SectionHeader from '../../Components/ui/SectionHeader';
import Modal from '../../Components/ui/Modal';

const AboutMe = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgUrl) => setSelectedImage(imgUrl);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id='aboutme' className='aboutme-section'>
      <SectionHeader title={t('sections.about.title')} />

      <div className='aboutme-container'>
        {/* Article 1: Console & Description */}
        <article className='aboutme-intro'>
          <div className='console-container'>
            <div className='console-header'>
              <div className='dot red'></div>
              <div className='dot yellow'></div>
              <div className='dot green'></div>
              <span className='console-title'>about_me.py</span>
            </div>
            <div className='console-body'>
              <pre>
                <code>
                  {/*Simulacion de codigo en consola*/}
                  <span className='code-keyword'>class</span>{' '}
                  <span className='code-class'>Message</span>:{'\n'}
                  {'    '}
                  <span className='code-keyword'>def</span>{' '}
                  <span className='code-function'>__init__</span>(
                  <span className='code-variable'>self</span>):{'\n'}
                  {'        '}
                  <span className='code-variable'>self</span>.quote ={' '}
                  <span className='code-string'>
                    "{t('sections.about.code')}"
                  </span>
                  {'\n\n'}
                  {'    '}
                  <span className='code-keyword'>def</span>{' '}
                  <span className='code-function'>display</span>(
                  <span className='code-variable'>self</span>):{'\n'}
                  {'        '}
                  <span className='code-builtIn'>print</span>(
                  <span className='code-variable'>self</span>.quote){'\n\n'}
                  <span className='code-variable'>message</span> ={' '}
                  <span className='code-class'>Message</span>(){'\n'}
                  <span className='code-variable'>message</span>.
                  <span className='code-function'>display</span>()
                </code>
              </pre>
            </div>
          </div>

          <div className='intro-text'>
            <h3>{t('sections.about.subtitle')}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t('sections.about.description1')
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: t('sections.about.description2')
              }}
            ></p>
          </div>
        </article>

        {/* Article 2: Placeholder */}
        <article className='aboutme-placeholder'>
          <div className='centered-box'>
            <TypingEffect text={t('sections.about.code')} />
          </div>
        </article>

        {/* Article 3: Lists & Icons */}
        <article className='aboutme-details'>
          <div className='details-left'>
            <h4>{t('sections.about.training')}</h4>
            <ul>
              <li>{t('sections.about.training1')}</li>
              <li>{t('sections.about.training2')}</li>
              <li>{t('sections.about.training3')}</li>
              <li>{t('sections.about.training4')}</li>
              <li>{t('sections.about.training5')}</li>
            </ul>
          </div>
          <div className='details-right'>
            <ul className='icon-list'>
              {[
                { img: Icons.Badges.NetWBBadge, date: "08/2025" },
                { img: Icons.Badges.IOTBadge, date: "06/2025" },
                { img: Icons.Badges.ICiberBadge, date: "06/2025" },
                { img: Icons.Badges.JCiberCPBadge, date: `2025- ${t('sections.about.now')}` }
              ].map((badge, idx) => (
                <li key={idx}>
                  <div className='icon-item'>
                    <img
                      src={badge.img}
                      alt='Badge'
                      className='placeholder-img clickable-badge'
                      onClick={() => openModal(badge.img)}
                    />
                    <p>{badge.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>

      <Modal 
        isOpen={!!selectedImage} 
        onClose={closeModal} 
        variant="image"
      >
        <img src={selectedImage} alt='Enlarged Badge' />
      </Modal>
    </section>
  );
};

export default AboutMe;


