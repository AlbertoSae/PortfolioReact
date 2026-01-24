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
                  <img src="" alt="" />
                  <p>Nmap</p>
              </div>
              <div className="stack-item">
                  <img src="" alt="" />
                  <p>Wireshark</p>
              </div>
              <div className="stack-item">
                  <img src="" alt="" />
                  <p>Burp Suite</p>
              </div>
              <div className="stack-item">
                  <img src="" alt="" />
                  <p>Metasploit</p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <h4>{t('sections.stack.categories.norms')}</h4>
            <div className="icon-group">
              <div className="stack-item"><span>ISO 27001</span></div>
              <div className="stack-item"><span>ENS</span></div>
            </div>
          </div>
        </div>

        {/* top-right: Tools & OS (6 cols, 4 rows) */}
        <div className="stack-card card-tools">
          <div className="card-group">
            <h4>{t('sections.stack.categories.tools')}</h4>
            <div className="icon-group">
              <div className="stack-item">
                <img src={Icons.Software.n8n} alt="logo" />
                <span>n8n</span>
              </div>
              <div className="stack-item">
                <img src={Icons.Software.Git} alt="logo" />
                <span>Git</span>
              </div>
              <div className="stack-item">
                <img src={Icons.Software.Docker} alt="logo" />
                <span>Docker</span>
              </div>
              <div className="stack-item">
                <img src={Icons.Software.odoo} alt="logo" />
                <span>Odoo</span>
              </div>
              <div className="stack-item">
                <img src={Icons.Software.VB} alt="logo" />
                <span>VirtualBox</span>
              </div>
            </div>
          </div>
          <div className="card-group">
            <h4>{t('sections.stack.categories.os')}</h4>
            <div className="icon-group">
              <div className="stack-item">
                <img src={Icons.OS.kali} alt="logo" />
                <span>Kali Linux</span>
              </div>
              <div className="stack-item">
                <img src={Icons.OS.linux} alt="logo" />
                <span>Linux</span>
              </div>
              <div className="stack-item">
                <img src={Icons.OS.wd} alt="logo" />
                <span>Windows</span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom-left-1: Languages (3 cols, 2 rows) */}
        <div className="stack-card card-languages">
          <h4>{t('sections.stack.categories.languages')}</h4>
          <div className="icon-group">
            <div className="stack-item">
              <img src="" alt="logo" />
              <span>ES</span>
            </div>
            <div className="stack-item">
              <img src="" alt="logo" />
              <span>EN</span>
            </div>
            <div className="stack-item">
              <img src="" alt="logo" />
              <span>RU</span>
            </div>
          </div>
        </div>

        {/* bottom-left-2: Soft Skills (5 cols, 4 rows) */}
        <div className="stack-card card-soft-skills">
          <h4>{t('sections.stack.categories.soft_skills')}</h4>
          <div className="icon-group">
            <div className="stack-item">
              <img src="" alt="logo" />
              <span>Teamwork</span>
            </div>
            <div className="stack-item">
              <img src="" alt="logo" />
              <span>Problem Solving</span>
            </div>
          </div>
        </div>

        {/* central-bottom: Development (6 cols, 6 rows) */}
        <div className="stack-card card-development">
          <h4>{t('sections.stack.categories.development')}</h4>
          <div className="icon-group wrap">
            <div className="stack-item">
              <img src={Icons.Framework.react} alt="logo" />
              <span>React</span>
            </div>
            <div className="stack-item">
              <img src={Icons.Framework.node} alt="logo" />
              <span>Node.js</span>
            </div>
            <div className="stack-item">
              <img src={Icons.Languages.py} alt="logo" />
              <span>Python</span>
            </div>
            <div className="stack-item">
              <img src={Icons.Languages.js} alt="logo" />
              <span>JavaScript</span>
            </div>
            <div className="stack-item">
              <img src="" alt="logo" />
              <span>HTML/CSS</span>
            </div>
          </div>
        </div>

        {/* right-margin: Data & Design (3 cols, 6 rows) */}
        <div className="stack-card card-data-design">
          <div className="card-group column">
            <h4>{t('sections.stack.categories.database')}</h4>
            <div className="icon-group vertical">
              <div className="stack-item">
                <img src={Icons.DDBB.postgres} alt="logo" />
                <span>PostgreSQL</span>
              </div>
              <div className="stack-item">
                <img src={Icons.DDBB.mongo} alt="logo" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className="card-group column">
            <h4>{t('sections.stack.categories.design')}</h4>
            <div className="icon-group vertical">
              <div className="stack-item">
                <img src={Icons.Design.figma} alt="logo" />
                <span>Figma</span>
              </div>
              <div className="stack-item">
                <img src={Icons.Design.photoshop} alt="logo" />
                <span>Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Stack;
