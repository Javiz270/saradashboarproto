import { useTranslation } from 'react-i18next';

const LANG_KEY = 'sara-language';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.startsWith('en') ? 'en' : 'es';

  function switchLanguage(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem(LANG_KEY, lang);
  }

  return (
    <div className="language-switcher" role="group" aria-label={t('navbar.language')}>
      <button
        type="button"
        className={current === 'es' ? 'lang-btn lang-btn--active' : 'lang-btn'}
        onClick={() => switchLanguage('es')}
      >
        ES
      </button>
      <span className="lang-divider">|</span>
      <button
        type="button"
        className={current === 'en' ? 'lang-btn lang-btn--active' : 'lang-btn'}
        onClick={() => switchLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}
