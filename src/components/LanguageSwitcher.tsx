import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'ru', name: 'RU', flag: '🇷🇺' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'pl', name: 'PL', flag: '🇵🇱' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('i18nextLng', langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking/touching outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-[150]" ref={dropdownRef}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 active:bg-white/15 transition-all duration-300 touch-manipulation cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary pointer-events-none" />
        <span className="text-xs sm:text-sm font-medium text-white pointer-events-none">{currentLang.name}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 py-1.5 sm:py-2 w-28 sm:w-32 rounded-xl bg-[#0a0f14] border border-white/10 shadow-xl overflow-hidden z-[200]"
          role="listbox"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                changeLanguage(lang.code);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                changeLanguage(lang.code);
              }}
              role="option"
              aria-selected={currentLang.code === lang.code}
              className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 text-left hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation cursor-pointer ${
                currentLang.code === lang.code ? 'bg-primary/20 text-primary' : 'text-white/70'
              }`}
            >
              <span className="text-base sm:text-lg pointer-events-none">{lang.flag}</span>
              <span className="text-xs sm:text-sm font-medium pointer-events-none">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;


