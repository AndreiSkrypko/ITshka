export type CityCode = 'minsk' | 'lida' | 'warsaw';

export interface CityConfig {
  code: CityCode;
  name: {
    ru: string;
    en: string;
    pl: string;
  };
  region: {
    ru: string;
    en: string;
    pl: string;
  };
  phone: {
    display: string;
    tel: string;
  };
  geo: {
    region: string;
    placename: string;
    position: string;
    ICBM: string;
  };
  countryCode: string;
  keywords: {
    ru: string[];
    en: string[];
    pl: string[];
  };
}

export const cities: Record<CityCode, CityConfig> = {
  minsk: {
    code: 'minsk',
    name: {
      ru: 'Минск',
      en: 'Minsk',
      pl: 'Mińsk'
    },
    region: {
      ru: 'Минская область',
      en: 'Minsk Region',
      pl: 'Obwód miński'
    },
    phone: {
      display: '+375 29 121-09-08',
      tel: '+375291210908'
    },
    geo: {
      region: 'BY-MI',
      placename: 'Минск',
      position: '53.9045;27.5615',
      ICBM: '53.9045, 27.5615'
    },
    countryCode: 'BY',
    keywords: {
      ru: [
        'создание сайтов минск',
        'разработка сайтов минск',
        'заказать сайт минск',
        'сайт под ключ минск',
        'веб студия минск',
        'создание сайтов минская область',
        'сделать сайт минск',
        'изготовление сайтов минск',
        'разработка сайтов недорого минск',
        'создание сайта для бизнеса минск',
        'лендинг минск',
        'интернет магазин минск',
        'корпоративный сайт минск',
        'сайт визитка минск',
        'одностраничный сайт минск',
        'адаптивный сайт минск',
        'мобильная версия сайта минск',
        'продвижение сайтов минск',
        'веб разработка минск',
        'веб дизайн минск',
        'создание сайтов беларусь',
        'разработка сайтов беларусь',
        'itshka'
      ],
      en: [
        'website development minsk',
        'web development minsk',
        'create website minsk',
        'website design minsk',
        'web studio minsk',
        'itshka'
      ],
      pl: [
        'tworzenie stron www mińsk',
        'tworzenie stron internetowych mińsk',
        'pozycjonowanie stron mińsk',
        'itshka'
      ]
    }
  },
  lida: {
    code: 'lida',
    name: {
      ru: 'Лида',
      en: 'Lida',
      pl: 'Lida'
    },
    region: {
      ru: 'Гродненская область',
      en: 'Grodno Region',
      pl: 'Obwód grodzieński'
    },
    phone: {
      display: '+375 29 121-09-08',
      tel: '+375291210908'
    },
    geo: {
      region: 'BY-HR',
      placename: 'Лида',
      position: '53.8833;25.2997',
      ICBM: '53.8833, 25.2997'
    },
    countryCode: 'BY',
    keywords: {
      ru: [
        'создание сайтов лида',
        'разработка сайтов лида',
        'заказать сайт лида',
        'сайт под ключ лида',
        'веб студия лида',
        'создание сайтов гродненская область',
        'сделать сайт лида',
        'изготовление сайтов лида',
        'разработка сайтов недорого лида',
        'создание сайта для бизнеса лида',
        'лендинг лида',
        'интернет магазин лида',
        'корпоративный сайт лида',
        'сайт визитка лида',
        'одностраничный сайт лида',
        'адаптивный сайт лида',
        'мобильная версия сайта лида',
        'продвижение сайтов лида',
        'веб разработка лида',
        'веб дизайн лида',
        'создание сайтов беларусь',
        'разработка сайтов беларусь',
        'itshka'
      ],
      en: [
        'website development lida',
        'web development lida',
        'create website lida',
        'website design lida',
        'web studio lida',
        'itshka'
      ],
      pl: [
        'tworzenie stron www lida',
        'tworzenie stron internetowych lida',
        'pozycjonowanie stron lida',
        'itshka'
      ]
    }
  },
  warsaw: {
    code: 'warsaw',
    name: {
      ru: 'Варшава',
      en: 'Warsaw',
      pl: 'Warszawa'
    },
    region: {
      ru: 'Мазовецкое воеводство',
      en: 'Masovian Voivodeship',
      pl: 'Województwo mazowieckie'
    },
    phone: {
      display: '+48 502 420 839',
      tel: '+48502420839'
    },
    geo: {
      region: 'PL-MZ',
      placename: 'Варшава',
      position: '52.2297;21.0122',
      ICBM: '52.2297, 21.0122'
    },
    countryCode: 'PL',
    keywords: {
      ru: [
        'создание сайтов варшава',
        'разработка сайтов варшава',
        'заказать сайт варшава',
        'сайт под ключ варшава',
        'веб студия варшава',
        'создание сайтов мазовецкое воеводство',
        'сделать сайт варшава',
        'изготовление сайтов варшава',
        'разработка сайтов недорого варшава',
        'создание сайта для бизнеса варшава',
        'лендинг варшава',
        'интернет магазин варшава',
        'корпоративный сайт варшава',
        'сайт визитка варшава',
        'одностраничный сайт варшава',
        'адаптивный сайт варшава',
        'мобильная версия сайта варшава',
        'продвижение сайтов варшава',
        'веб разработка варшава',
        'веб дизайн варшава',
        'itshka'
      ],
      en: [
        'website development warsaw',
        'web development warsaw',
        'create website warsaw',
        'website design warsaw',
        'web studio warsaw',
        'tworzenie stron www warszawa',
        'tworzenie stron internetowych warszawa',
        'pozycjonowanie stron warszawa',
        'itshka'
      ],
      pl: [
        'tworzenie stron www warszawa',
        'tworzenie stron internetowych warszawa',
        'pozycjonowanie stron warszawa',
        'website development warsaw',
        'itshka'
      ]
    }
  }
};

// Маппинг стран на города (для автоопределения)
export const countryToCity: Record<string, CityCode> = {
  'BY': 'minsk', // По умолчанию Минск для Беларуси
  'PL': 'warsaw',
  'RU': 'minsk',
  'UA': 'minsk'
};

// Маппинг городов по названию (для более точного определения)
export const cityNameToCode: Record<string, CityCode> = {
  'minsk': 'minsk',
  'минск': 'minsk',
  'mińsk': 'minsk',
  'lida': 'lida',
  'лида': 'lida',
  'warsaw': 'warsaw',
  'warszawa': 'warsaw',
  'варшава': 'warsaw'
};

