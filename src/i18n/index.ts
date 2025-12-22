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
  
  // 2. Проверяем кэш IP API для быстрого определения страны (приоритет над языком браузера)
  try {
    const ipCacheKey = 'ipapi_cache';
    const ipCache = sessionStorage.getItem(ipCacheKey);
    if (ipCache) {
      const cachedData = JSON.parse(ipCache);
      const now = Date.now();
      // Кэш действителен 1 час
      if (now - cachedData.timestamp < 3600000 && cachedData.data?.country_code) {
        const detectedLang = countryToLanguage[cachedData.data.country_code];
        if (detectedLang && ['ru', 'en', 'pl'].includes(detectedLang)) {
          return detectedLang;
        }
      }
    }
    
    // Также проверяем кэш для языка (если есть)
    const langCacheKey = 'ipapi_lang_cache';
    const langCache = sessionStorage.getItem(langCacheKey);
    if (langCache) {
      const cachedData = JSON.parse(langCache);
      const now = Date.now();
      if (now - cachedData.timestamp < 3600000 && cachedData.country_code) {
        const detectedLang = countryToLanguage[cachedData.country_code];
        if (detectedLang && ['ru', 'en', 'pl'].includes(detectedLang)) {
          return detectedLang;
        }
      }
    }
  } catch (e) {
    // Игнорируем ошибки кэша
  }
  
  // 3. Проверяем язык браузера (но только если он не противоречит логике определения по стране)
  // Для Польши приоритет у польского языка, даже если браузер на другом языке
  const browserLang = navigator.language.split('-')[0];
  if (['ru', 'en', 'pl'].includes(browserLang)) {
    // Если браузер на польском, используем его (может быть пользователь из Польши)
    if (browserLang === 'pl') {
      return 'pl';
    }
    return browserLang;
  }
  
  // 4. По умолчанию русский
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
// Выполняется быстро, но не блокирует рендеринг
if (typeof window !== 'undefined' && !localStorage.getItem('i18nextLng')) {
  // Выполняем определение быстрее для лучшего UX
  const scheduleDetection = () => {
    // Используем небольшой таймаут для немедленного выполнения после загрузки
    setTimeout(detectLanguageByIP, 100);
  };
  
  const detectLanguageByIP = () => {
    // Проверяем кэш
    const cacheKey = 'ipapi_lang_cache';
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      try {
        const cachedData = JSON.parse(cached);
        const now = Date.now();
        // Кэш действителен 1 час
        if (now - cachedData.timestamp < 3600000) {
          const detectedLang = countryToLanguage[cachedData.country_code] || 'en';
          if (i18n.language !== detectedLang) {
            i18n.changeLanguage(detectedLang);
            localStorage.setItem('i18nextLng', detectedLang);
          }
          return;
        }
      } catch (e) {
        // Игнорируем ошибки кэша
      }
    }
    
    fetch('https://ipapi.co/json/', { 
      signal: AbortSignal.timeout(2000),
      cache: 'default'
    })
      .then(res => res.json())
      .then(data => {
        // Сохраняем в кэш для IP API (используется и для определения города)
        try {
          const ipCacheKey = 'ipapi_cache';
          sessionStorage.setItem(ipCacheKey, JSON.stringify({
            data: data,
            timestamp: Date.now()
          }));
        } catch (e) {
          // Игнорируем ошибки сохранения
        }
        
        // Сохраняем в кэш для языка
        try {
          sessionStorage.setItem(cacheKey, JSON.stringify({
            country_code: data.country_code,
            timestamp: Date.now()
          }));
        } catch (e) {
          // Игнорируем ошибки сохранения
        }
        
        const detectedLang = countryToLanguage[data.country_code] || 'en';
        // Принудительно меняем язык, если определили страну (особенно важно для Польши)
        if (i18n.language !== detectedLang) {
          i18n.changeLanguage(detectedLang);
          localStorage.setItem('i18nextLng', detectedLang);
        }
      })
      .catch(() => {
        // Ошибка - просто оставляем текущий язык
        localStorage.setItem('i18nextLng', i18n.language);
      });
  };
  
  scheduleDetection();
}

export default i18n;



