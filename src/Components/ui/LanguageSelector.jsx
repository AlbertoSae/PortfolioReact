import { useTranslation } from 'react-i18next';
import './LanguageSelector.css'; // Assuming you might want to style it

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button 
        onClick={() => changeLanguage('en')} 
        className={i18n.language === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('es')} 
        className={i18n.language === 'es' ? 'active' : ''}
      >
        ES
      </button>
      <button 
        onClick={() => changeLanguage('ru')} 
        className={i18n.language === 'ru' ? 'active' : ''}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSelector;
