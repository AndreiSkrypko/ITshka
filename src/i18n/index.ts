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
  'BY': 'ru', 'RU': 'ru', 'KZ': 'ru', 'UA': 'ru', 
  'KG': 'ru', 'UZ': 'ru', 'TJ': 'ru', 'MD': 'ru', 
  'AM': 'ru', 'AZ': 'ru', 'GE': 'ru', 'PL': 'pl',
};

// Получаем начальный язык синхронно (без блокирующих запросов)
const getInitialLanguage = (): string => {
  // 1. Проверяем localStorage
  const savedLang = localStorage.getItem('i18nextLng');
  if (savedLang && ['ru', 'en', 'pl'].includes(savedLang)) {
    return savedLang;
  }
  
  // 2. Проверяем язык браузера
  const browserLang = navigator.language.split('-')[0];
  if (['ru', 'en', 'pl'].includes(browserLang)) {
    return browserLang;
  }
  
  // 3. По умолчанию русский
  return 'ru';
};

// Инициализация i18n (синхронная, без блокировки)
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en', 'pl'],
    interpolation: {
      escapeValue: false
    }
  });

// Отложенное определение страны по IP (только если нет сохранённого языка)
// Выполняется в фоне после загрузки страницы, НЕ блокирует рендеринг
if (typeof window !== 'undefined' && !localStorage.getItem('i18nextLng')) {
  // Откладываем на 2 секунды после загрузки
  setTimeout(() => {
    fetch('https://ipapi.co/json/', { 
      signal: AbortSignal.timeout(2000)
    })
      .then(res => res.json())
      .then(data => {
        const detectedLang = countryToLanguage[data.country_code] || 'en';
        if (i18n.language !== detectedLang) {
          i18n.changeLanguage(detectedLang);
          localStorage.setItem('i18nextLng', detectedLang);
        }
      })
      .catch(() => {
        // Ошибка - просто оставляем текущий язык
        localStorage.setItem('i18nextLng', i18n.language);
      });
  }, 2000);
}

export default i18n;



