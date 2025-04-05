import React, { useEffect, useState } from 'react';

const LanguageToggle: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ko'>('en');
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const getCurrentLangFromHash = (): 'en' | 'ko' => {
    const hash = window.location.hash;
    if (hash.includes('/en/ko')) return 'ko';
    return 'en';
  };

  const changeLang = (targetLang: 'en' | 'ko') => {
    const frame = document.querySelector('iframe.goog-te-menu-frame');
    if (!frame) return;

    const innerDoc = (frame as HTMLIFrameElement).contentDocument;
    const langItems = innerDoc?.querySelectorAll('.goog-te-menu2-item span.text');

    langItems?.forEach((el) => {
      const text = el.textContent?.toLowerCase();
      if (targetLang === 'ko' && text?.includes('korean')) {
        (el as HTMLElement).click();
      } else if (targetLang === 'en' && text?.includes('english')) {
        (el as HTMLElement).click();
      }
    });
  };

  // 언어 상태 감지
  useEffect(() => {
    const detectLang = () => setLang(getCurrentLangFromHash());
    detectLang();

    window.addEventListener('hashchange', detectLang);
    return () => window.removeEventListener('hashchange', detectLang);
  }, []);

  // iframe 로딩 감지
  useEffect(() => {
    const interval = setInterval(() => {
      const frame = document.querySelector('iframe.goog-te-menu-frame');
      if (frame) {
        setIsIframeLoaded(true);
        clearInterval(interval);
      }
    }, 300);
  }, []);

  const handleToggle = () => {
    const nextLang = lang === 'en' ? 'ko' : 'en';
    changeLang(nextLang);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={!isIframeLoaded}
      style={{
        cursor: isIframeLoaded ? 'pointer' : 'not-allowed',
        opacity: isIframeLoaded ? 1 : 0.5,
      }}
    >
      {lang === 'en' ? '한국어로 번역' : 'Back to English'}
    </button>
  );
};

export default LanguageToggle;
