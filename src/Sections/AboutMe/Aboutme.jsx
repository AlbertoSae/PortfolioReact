import React from 'react'
import './AboutMe.css'
import { useTranslation } from 'react-i18next'
import NetWorkBadge from '../../assets/Icons/Badges/NetWB.png'
import IOTBadge from '../../assets/Icons/Badges/IOT.png'
import ICiberBadge from '../../assets/Icons/Badges/ICiber.png'
import JCiberCPBadge from '../../assets/Icons/Badges/JCiberCP.png'
import TypingEffect from '../../Components/ui/TypingEffect'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <section id='aboutme' className='aboutme-section'>
      <h2 className='section-title'>{t('sections.about.title')}</h2>

      <div className='aboutme-container'>
        {/* Article 1: Console & Description */}
        <article className='aboutme-intro'>
          <div className='console-container'>
            <div className='console-header'>
              <span className='dot red'></span>
              <span className='dot yellow'></span>
              <span className='dot green'></span>
              <span className='console-title'>about_me.py</span>
            </div>
            <div className='console-body'>
              <pre>
                <code>
                  {/*Simulacion de codigo en consola*/}
                  <span className='code-keyword'>class</span>{' '}
                  <span className='code-class'>Message</span>:{'\n'}
                  {'    '}
                  <span className='code-keyword'>def</span>{' '}
                  <span className='code-function'>__init__</span>(
                  <span className='code-variable'>self</span>):{'\n'}
                  {'        '}
                  <span className='code-variable'>self</span>.quote ={' '}
                  <span className='code-string'>
                    "{t('sections.about.code')}"
                  </span>
                  {'\n\n'}
                  {'    '}
                  <span className='code-keyword'>def</span>{' '}
                  <span className='code-function'>display</span>(
                  <span className='code-variable'>self</span>):{'\n'}
                  {'        '}
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
              <li>
                <div className='icon-item'>
                  <img
                    src={NetWorkBadge}
                    alt='Badge'
                    className='placeholder-img'
                  />
                  <p>08/2025</p>
                </div>
              </li>
              <li>
                <div className='icon-item'>
                  <img src={IOTBadge} alt='Badge' className='placeholder-img' />
                  <p>06/2025</p>
                </div>
              </li>
              <li>
                <div className='icon-item'>
                  <img
                    src={ICiberBadge}
                    alt='Badge'
                    className='placeholder-img'
                  />
                  <p>06/2025</p>
                </div>
              </li>
              <li>
                <div className='icon-item'>
                  <img
                    src={JCiberCPBadge}
                    alt='Badge'
                    className='placeholder-img'
                  />
                  <p>2025- {t('sections.about.now')}</p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutMe
