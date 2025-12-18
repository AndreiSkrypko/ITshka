import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './locales/ru.json';
import en from './locales/en.json';
import pl from './locales/pl.json';

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  pl: { translation: pl }
};

// Маппинг стран на языки
const countryToLanguage: Record<string, string> = {
  // Русскоязычные страны
  'BY': 'ru', // Беларусь
  'RU': 'ru', // Россия
  'KZ': 'ru', // Казахстан
  'UA': 'ru', // Украина
  'KG': 'ru', // Киргизия
  'UZ': 'ru', // Узбекистан
  'TJ': 'ru', // Таджикистан
  'MD': 'ru', // Молдова
  'AM': 'ru', // Армения
  'AZ': 'ru', // Азербайджан
  'GE': 'ru', // Грузия
  
  // Польша
  'PL': 'pl',
};

// Определение языка по стране
const detectLanguageByCountry = async (): Promise<string> => {
  // Сначала проверяем localStorage
  const savedLang = localStorage.getItem('i18nextLng');
  if (savedLang && ['ru', 'en', 'pl'].includes(savedLang)) {
    return savedLang;
  }

  try {
    // Определяем страну по IP
    const response = await fetch('https://ipapi.co/json/', { 
      signal: AbortSignal.timeout(3000) // Таймаут 3 секунды
    });
    const data = await response.json();
    const countryCode = data.country_code;
    
    // Возвращаем язык по стране или английский по умолчанию
    const language = countryToLanguage[countryCode] || 'en';
    localStorage.setItem('i18nextLng', language);
    return language;
  } catch (error) {
    // Если не удалось определить - используем язык браузера или русский
    const browserLang = navigator.language.split('-')[0];
    if (['ru', 'en', 'pl'].includes(browserLang)) {
      return browserLang;
    }
    return 'ru';
  }
};

// Инициализация i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // Начальный язык (будет изменён после определения)
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en', 'pl'],
    interpolation: {
      escapeValue: false
    }
  });

// Асинхронное определение языка после загрузки
detectLanguageByCountry().then((lang) => {
  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }
});

export default i18n;

