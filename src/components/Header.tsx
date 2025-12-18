import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12 py-5">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex items-center gap-0.5">
            <span className="text-2xl md:text-3xl font-black text-primary drop-shadow-[0_0_20px_hsl(174_72%_38%/0.4)]">
              IT
            </span>
            <span className="text-2xl md:text-3xl font-black text-white">
              shka
            </span>
          </div>
          {/* Glow effect under logo */}
          <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        <div className="hidden md:block h-8 w-px bg-white/10" />
        <span className="hidden md:inline text-sm text-white/40 font-medium">
          {t('header.studio')}
        </span>
      </div>
      
      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <LanguageSwitcher />
        
        {/* Phone */}
        <a 
          href="tel:+375291210908" 
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            {/* Ping animation on hover */}
            <div className="absolute inset-0 rounded-xl bg-primary/20 animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '1.5s' }} />
          </div>
          <div className="hidden sm:block">
            <span className="block text-xs text-white/40 font-medium">Call us</span>
            <span className="block font-bold text-white group-hover:text-primary transition-colors">
              +375 29 121-09-08
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
