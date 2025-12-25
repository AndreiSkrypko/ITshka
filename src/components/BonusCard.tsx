import { Handshake, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCity } from "@/contexts/CityContext";

const BonusCard = () => {
  const { t, i18n } = useTranslation();
  const { cityConfig } = useCity();
  const lang = i18n.language as 'ru' | 'en' | 'pl';
  
  // Уникальное описание для каждого города (избегаем дублирования контента)
  const getDescription = () => {
    return cityConfig.uniqueContent.bonusDescription[lang];
  };
  
  return (
    <div
      className="group relative overflow-hidden rounded-3xl animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500" />
      
      {/* Content */}
      <div className="relative px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center gap-3 sm:gap-4 md:gap-6">
        {/* Icon */}
        <div className="relative flex-shrink-0" aria-hidden="true">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
            <Handshake className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
          </div>
          {/* Glow */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-snug mb-0.5 sm:mb-1">
            <span className="text-primary">{t('bonus.title')}</span> {t('bonus.titleAccent')}
          </h3>
          <p className="text-white/60 text-[11px] sm:text-xs md:text-sm leading-relaxed line-clamp-2">
            {getDescription()}
          </p>
        </div>
        
        {/* Arrow */}
        <div className="hidden sm:flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default BonusCard;
