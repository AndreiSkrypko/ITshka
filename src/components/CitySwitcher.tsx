import { useCity } from '@/contexts/CityContext';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { CityCode, cities } from '@/config/cities';

const CitySwitcher = () => {
  const { currentCity, setCity } = useCity();
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentCityConfig = cities[currentCity];
  const currentCityName = currentCityConfig.name[i18n.language as 'ru' | 'en' | 'pl'] || currentCityConfig.name.ru;

  const changeCity = (cityCode: CityCode) => {
    setCity(cityCode);
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

  const cityList: Array<{ code: CityCode; name: string; flag: string }> = [
    { code: 'minsk', name: cities.minsk.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.minsk.name.ru, flag: '🇧🇾' },
    { code: 'lida', name: cities.lida.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.lida.name.ru, flag: '🇧🇾' },
    { code: 'warsaw', name: cities.warsaw.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.warsaw.name.ru, flag: '🇵🇱' },
    { code: 'almaty', name: cities.almaty.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.almaty.name.ru, flag: '🇰🇿' },
    { code: 'nur-sultan', name: cities['nur-sultan'].name[i18n.language as 'ru' | 'en' | 'pl'] || cities['nur-sultan'].name.ru, flag: '🇰🇿' },
    { code: 'shymkent', name: cities.shymkent.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.shymkent.name.ru, flag: '🇰🇿' },
    { code: 'karaganda', name: cities.karaganda.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.karaganda.name.ru, flag: '🇰🇿' },
    { code: 'aktobe', name: cities.aktobe.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.aktobe.name.ru, flag: '🇰🇿' },
    { code: 'taraz', name: cities.taraz.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.taraz.name.ru, flag: '🇰🇿' },
    { code: 'pavlodar', name: cities.pavlodar.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.pavlodar.name.ru, flag: '🇰🇿' },
    { code: 'oskemen', name: cities.oskemen.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.oskemen.name.ru, flag: '🇰🇿' },
    { code: 'semey', name: cities.semey.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.semey.name.ru, flag: '🇰🇿' },
    { code: 'atyrau', name: cities.atyrau.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.atyrau.name.ru, flag: '🇰🇿' },
    { code: 'berlin', name: cities.berlin.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.berlin.name.ru, flag: '🇩🇪' },
    { code: 'paris', name: cities.paris.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.paris.name.ru, flag: '🇫🇷' },
    { code: 'london', name: cities.london.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.london.name.ru, flag: '🇬🇧' },
    { code: 'rome', name: cities.rome.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.rome.name.ru, flag: '🇮🇹' },
    { code: 'madrid', name: cities.madrid.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.madrid.name.ru, flag: '🇪🇸' },
    { code: 'amsterdam', name: cities.amsterdam.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.amsterdam.name.ru, flag: '🇳🇱' },
    { code: 'brussels', name: cities.brussels.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.brussels.name.ru, flag: '🇧🇪' },
    { code: 'vienna', name: cities.vienna.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.vienna.name.ru, flag: '🇦🇹' },
    { code: 'prague', name: cities.prague.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.prague.name.ru, flag: '🇨🇿' },
    { code: 'stockholm', name: cities.stockholm.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.stockholm.name.ru, flag: '🇸🇪' },
    { code: 'copenhagen', name: cities.copenhagen.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.copenhagen.name.ru, flag: '🇩🇰' },
    { code: 'helsinki', name: cities.helsinki.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.helsinki.name.ru, flag: '🇫🇮' },
    { code: 'oslo', name: cities.oslo.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.oslo.name.ru, flag: '🇳🇴' },
    { code: 'dublin', name: cities.dublin.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.dublin.name.ru, flag: '🇮🇪' },
    { code: 'lisbon', name: cities.lisbon.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.lisbon.name.ru, flag: '🇵🇹' },
    { code: 'athens', name: cities.athens.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.athens.name.ru, flag: '🇬🇷' },
    { code: 'budapest', name: cities.budapest.name[i18n.language as 'ru' | 'en' | 'pl'] || cities.budapest.name.ru, flag: '🇭🇺' }
  ];

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onTouchEnd={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 active:bg-white/15 transition-all duration-300 touch-manipulation"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
        <span className="text-xs sm:text-sm font-medium text-white">{currentCityName}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 py-1.5 sm:py-2 w-32 sm:w-36 rounded-xl bg-[#0a0f14] border border-white/10 shadow-xl overflow-hidden z-[9999]"
          role="listbox"
        >
          {cityList.map((city) => (
            <button
              key={city.code}
              onClick={() => changeCity(city.code)}
              onTouchEnd={(e) => {
                e.preventDefault();
                changeCity(city.code);
              }}
              role="option"
              aria-selected={currentCity === city.code}
              className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 text-left hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation ${
                currentCity === city.code ? 'bg-primary/20 text-primary' : 'text-white/70'
              }`}
            >
              <span className="text-base sm:text-lg">{city.flag}</span>
              <span className="text-xs sm:text-sm font-medium">{city.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySwitcher;

