export type CityCode = 'minsk' | 'lida' | 'warsaw';

export interface CityConfig {
  code: CityCode;
  name: {
    ru: string;
    en: string;
    pl: string;
  };
  nameLocative: {
    ru: string; // предложный падеж: в Минске, в Лиде
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
    nameLocative: {
      ru: 'Минске',
      en: 'Minsk',
      pl: 'Mińsku'
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
        'веб студия минск недорого',
        'создание сайта минск цена',
        'разработка сайта минск стоимость',
        'заказать сайт минск дешево',
        'создание лендинга минск',
        'разработка интернет магазина минск',
        'создание корпоративного сайта минск',
        'сайт визитка минск цена',
        'seo оптимизация сайта минск',
        'продвижение сайта минск яндекс',
        'продвижение сайта минск google',
        'создание сайта для компании минск',
        'разработка сайта для бизнеса минск',
        'веб дизайн минск студия',
        'создание сайта без предоплаты минск',
        'itshka минск',
        'itshka создание сайтов минск'
      ],
      en: [
        'website development minsk',
        'web development minsk',
        'create website minsk',
        'website design minsk',
        'web studio minsk',
        'website development belarus',
        'web development belarus',
        'landing page minsk',
        'online store development minsk',
        'corporate website minsk',
        'business website minsk',
        'responsive website minsk',
        'seo optimization minsk',
        'itshka minsk',
        'itshka website development'
      ],
      pl: [
        'tworzenie stron www mińsk',
        'tworzenie stron internetowych mińsk',
        'pozycjonowanie stron mińsk',
        'strony www mińsk',
        'sklepy internetowe mińsk',
        'strony firmowe mińsk',
        'projektowanie stron mińsk',
        'itshka mińsk',
        'itshka tworzenie stron mińsk'
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
    nameLocative: {
      ru: 'Лиде',
      en: 'Lida',
      pl: 'Lidzie'
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
        'веб студия лида недорого',
        'создание сайта лида цена',
        'разработка сайта лида стоимость',
        'заказать сайт лида дешево',
        'создание лендинга лида',
        'разработка интернет магазина лида',
        'создание корпоративного сайта лида',
        'сайт визитка лида цена',
        'seo оптимизация сайта лида',
        'продвижение сайта лида яндекс',
        'продвижение сайта лида google',
        'создание сайта для компании лида',
        'разработка сайта для бизнеса лида',
        'веб дизайн лида студия',
        'создание сайта без предоплаты лида',
        'веб студия гродненская область',
        'создание сайтов гродно',
        'itshka лида',
        'itshka создание сайтов лида'
      ],
      en: [
        'website development lida',
        'web development lida',
        'create website lida',
        'website design lida',
        'web studio lida',
        'website development belarus',
        'web development belarus',
        'landing page lida',
        'online store development lida',
        'corporate website lida',
        'business website lida',
        'responsive website lida',
        'seo optimization lida',
        'itshka lida',
        'itshka website development'
      ],
      pl: [
        'tworzenie stron www lida',
        'tworzenie stron internetowych lida',
        'pozycjonowanie stron lida',
        'strony www lida',
        'sklepy internetowe lida',
        'strony firmowe lida',
        'projektowanie stron lida',
        'itshka lida',
        'itshka tworzenie stron lida'
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
    nameLocative: {
      ru: 'Варшаве',
      en: 'Warsaw',
      pl: 'Warszawie'
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
        'веб студия варшава недорого',
        'создание сайта варшава цена',
        'разработка сайта варшава стоимость',
        'заказать сайт варшава дешево',
        'создание лендинга варшава',
        'разработка интернет магазина варшава',
        'создание корпоративного сайта варшава',
        'сайт визитка варшава цена',
        'seo оптимизация сайта варшава',
        'продвижение сайта варшава google',
        'создание сайта для компании варшава',
        'разработка сайта для бизнеса варшава',
        'веб дизайн варшава студия',
        'создание сайта без предоплаты варшава',
        'itshka варшава',
        'itshka создание сайтов варшава'
      ],
      en: [
        'website development warsaw',
        'web development warsaw',
        'create website warsaw',
        'website design warsaw',
        'web studio warsaw',
        'website development poland',
        'web development poland',
        'landing page warsaw',
        'online store development warsaw',
        'corporate website warsaw',
        'business website warsaw',
        'responsive website warsaw',
        'seo optimization warsaw',
        'tworzenie stron www warszawa',
        'tworzenie stron internetowych warszawa',
        'pozycjonowanie stron warszawa',
        'itshka warsaw',
        'itshka website development'
      ],
      pl: [
        'tworzenie stron www warszawa',
        'tworzenie stron internetowych warszawa',
        'pozycjonowanie stron warszawa',
        'strony www warszawa',
        'sklepy internetowe warszawa',
        'strony firmowe warszawa',
        'projektowanie stron warszawa',
        'tworzenie stron warszawa cena',
        'strony internetowe warszawa tanie',
        'landing page warszawa',
        'sklep internetowy warszawa',
        'strona firmowa warszawa',
        'seo warszawa',
        'pozycjonowanie warszawa',
        'website development warsaw',
        'itshka warszawa',
        'itshka tworzenie stron warszawa'
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

