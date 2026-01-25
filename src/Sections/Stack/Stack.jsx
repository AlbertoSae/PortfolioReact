import React from 'react';
import './Stack.css';
import { useTranslation } from 'react-i18next';
import { Icons } from '../../assets/iconRegistry';

const Stack = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="stack-section">
      <h2 className="section-title">{t('sections.stack.title')}</h2>
      
      <article className="stack-grid">
        {/* top-left: Security & Norms (6 cols, 4 rows) */}
        <div className="stack-card card-security">
          <div className="card-group">
            <h4>{t('sections.stack.categories.audit')}</h4>
            <div className="icon-group">
              <div className="stack-item">
                  <p>Nmap</p>
              </div>
              <div className="stack-item">
                  <p>Wireshark</p>
              </div>
              <div className="stack-item">
                  <p>Burp Suite</p>
              </div>
              <div className="stack-item">
                  <p>Metasploit</p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <h4>{t('sections.stack.categories.norms')}</h4>
            <div className="icon-group">
              <div className="stack-item"><span>Metodología Magerit</span></div>
              <div className="stack-item"><span>Esquema Nacional de Seguridad (ENS)</span></div>
              <div className="stack-item"><span>ISO 27001</span></div>
              <div className="stack-item"><span>ISO 27002</span></div>
            </div>
          </div>
        </div>

        {/* top-right: Tools & OS (6 cols, 4 rows) */}
        <div className="stack-card card-tools">
          <div className="card-group">
            <h4>{t('sections.stack.categories.tools')}</h4>
            <div className="icon-group">
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Software.n8n})` }}
                ></div>
                <span>n8n</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Software.Git})` }}
                ></div>
                <span>Git</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Software.Docker})` }}
                ></div>
                <span>Docker</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Software.odoo})` }}
                ></div>
                <span>Odoo</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Software.VB})` }}
                ></div>
                <span>VirtualBox</span>
              </div>
            </div>
          </div>
          <div className="card-group">
            <h4>{t('sections.stack.categories.os')}</h4>
            <div className="os-icons-row">
              <div className="stack-item-os">
                <div className="stack-item">
                  <div 
                    className="stack-icon-masked" 
                    style={{ '--icon-url': `url(${Icons.OS.kali})` }}
                  ></div>
                  <span>Kali Linux</span>
                </div>
                <div className="item-versions">
                  <span>kali linux standar</span>
                  <span>kali linux Purple</span>
                </div>
              </div>

              <div className="stack-item-os">
                <div className="stack-item">
                  <div 
                    className="stack-icon-masked" 
                    style={{ '--icon-url': `url(${Icons.OS.linux})` }}
                  ></div>
                  <span>Linux</span>
                </div>
                <div className="item-versions">
                  <span>Ubuntu server 22.04</span>
                  <span>Ubuntu desktop 22.04</span>
                  <span>Debian</span>
                </div>
              </div>

              <div className="stack-item-os">
                <div className="stack-item">
                  <div 
                    className="stack-icon-masked" 
                    style={{ '--icon-url': `url(${Icons.OS.wd})` }}
                  ></div>
                  <span>Windows</span>
                </div>
                <div className="item-versions">
                  <span>windows 10</span>
                  <span>windows 11 pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom-left-1: Languages (3 cols, 2 rows) */}
        <div className="stack-card card-languages">
          <h4>{t('sections.stack.categories.languages')}</h4>
          <div className="icon-group">
            <div className="stack-item">
              <div 
                className="stack-icon-masked" 
                style={{ '--icon-url': `url(${Icons.Languages.es})` }}
              ></div>
              <span>Español</span>
            </div>
            <div className="stack-item">
              <div 
                className="stack-icon-masked" 
                style={{ '--icon-url': `url(${Icons.Languages.en})` }}
              ></div>
              <span>Inglés</span>
            </div>
            <div className="stack-item">
              <div 
                className="stack-icon-masked" 
                style={{ '--icon-url': `url(${Icons.Languages.ru})` }}
              ></div>
              <span>Ruso</span>
            </div>
          </div>
        </div>

        {/* bottom-left-2: Soft Skills (5 cols, 4 rows) */}
        <div className="stack-card card-soft-skills">
          <h4>{t('sections.stack.categories.soft_skills')}</h4>
          <div className="icon-group wrap">
            <div className="stack-item ss-leadership"><span>{t('sections.stack.soft_skills_list.leadership')}</span></div>
            <div className="stack-item ss-openness"><span>{t('sections.stack.soft_skills_list.openness')}</span></div>
            <div className="stack-item ss-creativity"><span>{t('sections.stack.soft_skills_list.creativity')}</span></div>
            <div className="stack-item ss-adaptability"><span>{t('sections.stack.soft_skills_list.adaptability')}</span></div>
            <div className="stack-item ss-learning"><span>{t('sections.stack.soft_skills_list.learning')}</span></div>
            <div className="stack-item ss-prevention"><span>{t('sections.stack.soft_skills_list.prevention')}</span></div>
            <div className="stack-item ss-projects"><span>{t('sections.stack.soft_skills_list.projects')}</span></div>
          </div>
        </div>

        {/* central-bottom: Development (6 cols, 6 rows) */}
        <div className="stack-card card-development">
          <h4>{t('sections.stack.categories.development')}</h4>
          <div className="card-development-rows">
            <div className="icon-group-centered">
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Languages.py})` }}
                ></div>
                <span>Python</span>
              </div>
              <div className="stack-item" >
                <div 
                  className="stack-icon-masked item-js" 
                  style={{ '--icon-url': `url(${Icons.Languages.js})` }}
                ></div>
                <span>JavaScript</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Languages.kt})` }}
                ></div>
                <span>Kotlin</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Languages.java})` }}
                ></div>
                <span>Java</span>
              </div>
            </div>
            <div className="icon-group-centered">
              <div className="stack-item">
                <div 
                  className="stack-icon-masked item-react" 
                  style={{ '--icon-url': `url(${Icons.Framework.react})` }}
                ></div>
                <span>React</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Framework.node})` }}
                ></div>
                <span>Node.js</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Framework.android})` }}
                ></div>
                <span>AndroidStudio</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Framework.javaSw})` }}
                ></div>
                <span>JavaSwing</span>
              </div>
            </div>
          </div>
        </div>

        {/* right-margin: Data & Design (3 cols, 6 rows) */}
        <div className="stack-card card-data-design">
          <div className="card-group column">
            <h4>{t('sections.stack.categories.database')}</h4>
            <div className="icon-group wrap">
              <div className="stack-item">
                <div 
                  className="stack-icon-masked item-postgres" 
                  style={{ '--icon-url': `url(${Icons.DDBB.postgres})` }}
                ></div>
                <span>PostgreSQL</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked item-mongo" 
                  style={{ '--icon-url': `url(${Icons.DDBB.mongo})` }}
                ></div>
                <span>MongoDB</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.DDBB.mysql})` }}
                ></div>
                <span>MySQL</span>
              </div>
            </div>
          </div>
          <div className="card-group column">
            <h4>{t('sections.stack.categories.design')}</h4>
            <div className="icon-group wrap">
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Design.figma})` }}
                ></div>
                <span>Figma</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Design.photoshop})` }}
                ></div>
                <span>Photoshop</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${Icons.Design.blender})` }}
                ></div>
                <span>Blender3D</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked item-html" 
                  style={{ '--icon-url': `url(${Icons.Design.html5})` }}
                ></div>
                <span>html</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked item-css" 
                  style={{ '--icon-url': `url(${Icons.Design.css3})` }}
                ></div>
                <span>css</span>
              </div>
              <div className="stack-item">
                <div 
                  className="stack-icon-masked item-md" 
                  style={{ '--icon-url': `url(${Icons.Design.md})` }}
                ></div>
                <span>Markdown</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Stack;
