// Утилита для выбора телефона в зависимости от региона пользователя

// Европейские страны (кроме Беларуси, России, Украины)
const EUROPEAN_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'IS', 'NO',
  'CH', 'AL', 'BA', 'ME', 'MK', 'RS', 'XK', 'AD', 'LI', 'MC',
  'SM', 'VA', 'MD', 'TR'
];

// Страны Америки
const AMERICAN_COUNTRIES = [
  'US', 'CA', 'MX', 'BR', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC',
  'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA',
  'UY', 'JM', 'TT', 'BZ', 'BS', 'BB', 'SR', 'GY', 'GF', 'FK'
];

// Телефоны
export const PHONE_BY = {
  display: '+375 29 121-09-08',
  tel: '+375291210908'
};

export const PHONE_EU = {
  display: '+48 502 420 839',
  tel: '+48502420839'
};

/**
 * Определяет регион пользователя по коду страны
 */
export const getRegionByCountry = (countryCode: string): 'by' | 'eu' | 'other' => {
  if (countryCode === 'BY' || countryCode === 'RU' || countryCode === 'UA') {
    return 'by';
  }
  if (EUROPEAN_COUNTRIES.includes(countryCode)) {
    return 'eu';
  }
  if (AMERICAN_COUNTRIES.includes(countryCode)) {
    return 'eu'; // Для Америки тоже используем европейский номер
  }
  return 'other';
};

/**
 * Получает телефон в зависимости от региона
 */
export const getPhoneByRegion = (region: 'by' | 'eu' | 'other'): typeof PHONE_BY => {
  if (region === 'eu' || region === 'other') {
    return PHONE_EU;
  }
  return PHONE_BY;
};

/**
 * Определяет телефон по коду страны
 */
export const getPhoneByCountry = (countryCode: string): typeof PHONE_BY => {
  const region = getRegionByCountry(countryCode);
  return getPhoneByRegion(region);
};

