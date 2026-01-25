import React from 'react';
import './Stack.css';
import { useTranslation } from 'react-i18next';
import { Icons } from '../../assets/iconRegistry';
import SectionHeader from '../../Components/ui/SectionHeader';

const Stack = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="stack-section">
      <SectionHeader title={t('sections.stack.title')} />
      
      <article className="stack-grid">
        {/* top-left: Security & Norms */}
        <div className="stack-card card-security">
          <div className="card-group">
            <h4>{t('sections.stack.categories.audit')}</h4>
            <div className="icon-group">
              {['Nmap', 'Wireshark', 'Burp Suite', 'Metasploit'].map(tool => (
                <div key={tool} className="stack-item">
                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-group">
            <h4>{t('sections.stack.categories.norms')}</h4>
            <div className="icon-group">
              {['Metodología Magerit', 'Esquema Nacional de Seguridad (ENS)', 'ISO 27001', 'ISO 27002'].map(norm => (
                <div key={norm} className="stack-item"><span>{norm}</span></div>
              ))}
            </div>
          </div>
        </div>

        {/* top-right: Tools & OS */}
        <div className="stack-card card-tools">
          <div className="card-group">
            <h4>{t('sections.stack.categories.tools')}</h4>
            <div className="icon-group">
              {[
                { name: 'n8n', icon: Icons.Software.n8n },
                { name: 'Git', icon: Icons.Software.Git },
                { name: 'Docker', icon: Icons.Software.Docker },
                { name: 'Odoo', icon: Icons.Software.odoo },
                { name: 'VirtualBox', icon: Icons.Software.VB }
              ].map(tool => (
                <div key={tool.name} className="stack-item">
                  <div 
                    className="stack-icon-masked" 
                    style={{ '--icon-url': `url(${tool.icon})` }}
                  ></div>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card-group">
            <h4>{t('sections.stack.categories.os')}</h4>
            <div className="os-icons-row">
              {[
                { name: 'Kali Linux', icon: Icons.OS.kali, versions: ['kali linux standar', 'kali linux Purple'] },
                { name: 'Linux', icon: Icons.OS.linux, versions: ['Ubuntu server 22.04', 'Ubuntu desktop 22.04', 'Debian'] },
                { name: 'Windows', icon: Icons.OS.wd, versions: ['windows 10', 'windows 11 pro'] }
              ].map(os => (
                <div key={os.name} className="stack-item-os">
                  <div className="stack-item">
                    <div 
                      className="stack-icon-masked" 
                      style={{ '--icon-url': `url(${os.icon})` }}
                    ></div>
                    <span>{os.name}</span>
                  </div>
                  <div className="item-versions">
                    {os.versions.map(v => <span key={v}>{v}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom-left-1: Languages */}
        <div className="stack-card card-languages">
          <h4>{t('sections.stack.categories.languages')}</h4>
          <div className="icon-group">
            {[
              { name: 'Español', icon: Icons.Languages.es },
              { name: 'Inglés', icon: Icons.Languages.en },
              { name: 'Ruso', icon: Icons.Languages.ru }
            ].map(lang => (
              <div key={lang.name} className="stack-item">
                <div 
                  className="stack-icon-masked" 
                  style={{ '--icon-url': `url(${lang.icon})` }}
                ></div>
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* bottom-left-2: Soft Skills */}
        <div className="stack-card card-soft-skills">
          <h4>{t('sections.stack.categories.soft_skills')}</h4>
          <div className="icon-group wrap">
            {[
              'leadership', 'openness', 'creativity', 'adaptability', 'learning', 'prevention', 'projects'
            ].map(skill => (
              <div key={skill} className={`stack-item ss-${skill}`}>
                <span>{t(`sections.stack.soft_skills_list.${skill}`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* central-bottom: Development */}
        <div className="stack-card card-development">
          <h4>{t('sections.stack.categories.development')}</h4>
          <div className="card-development-rows">
            <div className="icon-group-centered">
              {[
                { name: 'Python', icon: Icons.Languages.py },
                { name: 'JavaScript', icon: Icons.Languages.js, className: 'item-js' },
                { name: 'Kotlin', icon: Icons.Languages.kt },
                { name: 'Java', icon: Icons.Languages.java }
              ].map(lang => (
                <div key={lang.name} className="stack-item">
                  <div 
                    className={`stack-icon-masked ${lang.className || ''}`}
                    style={{ '--icon-url': `url(${lang.icon})` }}
                  ></div>
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
            <div className="icon-group-centered">
              {[
                { name: 'React', icon: Icons.Framework.react, className: 'item-react' },
                { name: 'Node.js', icon: Icons.Framework.node },
                { name: 'AndroidStudio', icon: Icons.Framework.android },
                { name: 'JavaSwing', icon: Icons.Framework.javaSw }
              ].map(fw => (
                <div key={fw.name} className="stack-item">
                  <div 
                    className={`stack-icon-masked ${fw.className || ''}`}
                    style={{ '--icon-url': `url(${fw.icon})` }}
                  ></div>
                  <span>{fw.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right-margin: Data & Design */}
        <div className="stack-card card-data-design">
          <div className="card-group column">
            <h4>{t('sections.stack.categories.database')}</h4>
            <div className="icon-group wrap">
              {[
                { name: 'PostgreSQL', icon: Icons.DDBB.postgres, className: 'item-postgres' },
                { name: 'MongoDB', icon: Icons.DDBB.mongo, className: 'item-mongo' },
                { name: 'MySQL', icon: Icons.DDBB.mysql }
              ].map(db => (
                <div key={db.name} className="stack-item">
                  <div 
                    className={`stack-icon-masked ${db.className || ''}`}
                    style={{ '--icon-url': `url(${db.icon})` }}
                  ></div>
                  <span>{db.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card-group column">
            <h4>{t('sections.stack.categories.design')}</h4>
            <div className="icon-group wrap">
              {[
                { name: 'Figma', icon: Icons.Design.figma },
                { name: 'Photoshop', icon: Icons.Design.photoshop },
                { name: 'Blender3D', icon: Icons.Design.blender },
                { name: 'html', icon: Icons.Design.html5, className: 'item-html' },
                { name: 'css', icon: Icons.Design.css3, className: 'item-css' },
                { name: 'Markdown', icon: Icons.Design.md, className: 'item-md' }
              ].map(tool => (
                <div key={tool.name} className="stack-item">
                  <div 
                    className={`stack-icon-masked ${tool.className || ''}`}
                    style={{ '--icon-url': `url(${tool.icon})` }}
                  ></div>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Stack;

