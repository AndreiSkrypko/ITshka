import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useCity } from "@/contexts/CityContext";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { cityConfig } = useCity();
  const currentPhone = cityConfig.phone;
  const lang = i18n.language as 'ru' | 'en' | 'pl';
  // Всегда используем склонение для русского языка
  const cityName = lang === 'ru' 
    ? cityConfig.nameLocative[lang] 
    : cityConfig.name[lang] || cityConfig.name.ru;
  const studioText = lang === 'ru' 
    ? `Веб-студия в ${cityName}`
    : lang === 'en'
    ? `Web Studio in ${cityName}`
    : `Studio Internetowe w ${cityName}`;

  return (
    <header className="absolute top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-5">
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <div className="flex items-center gap-0.5">
            <span className="text-xl sm:text-2xl md:text-3xl font-black text-primary drop-shadow-[0_0_20px_hsl(174_72%_38%/0.4)]">
              IT
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-black text-white">
              shka
            </span>
          </div>
          {/* Glow effect under logo */}
          <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        <div className="hidden md:block h-8 w-px bg-white/10" />
        <span className="hidden md:inline text-sm text-white/40 font-medium">
          {studioText}
        </span>
      </div>
      
      {/* Right side */}
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
        {/* Language Switcher */}
        <LanguageSwitcher />
        
        {/* Phone */}
        <a 
          href={`tel:${currentPhone.tel}`} 
          className="flex items-center gap-2 sm:gap-3 group"
          aria-label={`${t('header.callAria')}: ${currentPhone.display}`}
        >
          <div className="relative">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
            </div>
            {/* Ping animation on hover */}
            <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-primary/20 animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '1.5s' }} aria-hidden="true" />
          </div>
          <div className="hidden sm:block">
            <span className="block text-xs text-white/50 font-medium">{t('header.callUs')}</span>
            <span className="block font-bold text-white group-hover:text-primary transition-colors">
              {currentPhone.display}
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;


