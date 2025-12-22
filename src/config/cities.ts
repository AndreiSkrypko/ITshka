export type CityCode = 'minsk' | 'lida' | 'warsaw' | 'brest' | 'vitebsk' | 'gomel' | 'grodno' | 'mogilev' | 'baranovichi' | 'bobruisk' | 'pinsk' | 'orsha' | 'maladzyechna' | 'salihorsk' | 'navapolatsk' | 'polatsk' | 'mazyr' | 'slutsk' | 'moscow' | 'spb' | 'novosibirsk' | 'ekaterinburg' | 'kazan' | 'nizhny-novgorod' | 'chelyabinsk' | 'samara' | 'omsk' | 'rostov-on-don' | 'ufa' | 'krasnoyarsk' | 'voronezh' | 'perm' | 'volgograd' | 'almaty' | 'nur-sultan' | 'shymkent' | 'karaganda' | 'aktobe' | 'taraz' | 'pavlodar' | 'oskemen' | 'semey' | 'atyrau' | 'berlin' | 'paris' | 'london' | 'rome' | 'madrid' | 'amsterdam' | 'brussels' | 'vienna' | 'prague' | 'stockholm' | 'copenhagen' | 'helsinki' | 'oslo' | 'dublin' | 'lisbon' | 'athens' | 'budapest';

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
  // Уникальные описания для каждого города (избегаем дублирования контента)
  uniqueContent: {
    heroDescription: {
      ru: string;
      en: string;
      pl: string;
    };
    bonusDescription: {
      ru: string;
      en: string;
      pl: string;
    };
    cityFeatures: {
      ru: string[];
      en: string[];
      pl: string[];
    };
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
        'создать сайт минск',
        'сайт дешево минск',
        'сайт бесплатно минск',
        'сайт на заказ минск',
        'заказать сайт недорого минск',
        'создать сайт самому минск',
        'сайт под ключ недорого минск',
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
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Столица Беларуси — центр IT-инноваций. Мы создаём современные сайты для минских компаний, используя передовые технологии и учитывая специфику столичного рынка.',
        en: 'The capital of Belarus is the center of IT innovation. We create modern websites for Minsk companies using cutting-edge technologies and considering the specifics of the capital market.',
        pl: 'Stolica Białorusi to centrum innowacji IT. Tworzymy nowoczesne strony internetowe dla firm z Mińska, wykorzystując najnowsze technologie i uwzględniając specyfikę rynku stołecznego.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Минске и Минской области. Понимаем особенности столичного рынка и создаём сайты, которые помогают компаниям выделиться среди конкурентов.',
        en: 'We work with businesses in Minsk and Minsk Region. We understand the specifics of the capital market and create websites that help companies stand out from competitors.',
        pl: 'Pracujemy z firmami w Mińsku i obwodzie mińskim. Rozumiemy specyfikę rynku stołecznego i tworzymy strony internetowe, które pomagają firmom wyróżnić się wśród konkurentów.'
      },
      cityFeatures: {
        ru: [
          'Столичный уровень качества',
          'Опыт работы с крупными компаниями',
          'Понимание столичного рынка',
          'Быстрая разработка и запуск'
        ],
        en: [
          'Capital-level quality',
          'Experience with large companies',
          'Understanding of the capital market',
          'Fast development and launch'
        ],
        pl: [
          'Jakość na poziomie stolicy',
          'Doświadczenie z dużymi firmami',
          'Zrozumienie rynku stołecznego',
          'Szybki rozwój i uruchomienie'
        ]
      }
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
        'создать сайт лида',
        'сайт дешево лида',
        'сайт бесплатно лида',
        'сайт на заказ лида',
        'заказать сайт недорого лида',
        'создать сайт самому лида',
        'сайт под ключ недорого лида',
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
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Гродненская область — регион с богатой историей и развивающимся бизнесом. Создаём сайты для лидских компаний с учётом местной специфики и потребностей регионального рынка.',
        en: 'Grodno Region is an area with rich history and developing business. We create websites for Lida companies considering local specifics and needs of the regional market.',
        pl: 'Obwód grodzieński to region z bogatą historią i rozwijającym się biznesem. Tworzymy strony internetowe dla firm z Lidy, uwzględniając lokalną specyfikę i potrzeby rynku regionalnego.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Лиде и Гродненской области. Знаем особенности регионального рынка и помогаем местным компаниям выйти на новый уровень с помощью качественного сайта.',
        en: 'We work with businesses in Lida and Grodno Region. We know the specifics of the regional market and help local companies reach a new level with a quality website.',
        pl: 'Pracujemy z firmami w Lidzie i obwodzie grodzieńskim. Znamy specyfikę rynku regionalnego i pomagamy lokalnym firmom osiągnąć nowy poziom dzięki wysokiej jakości stronie internetowej.'
      },
      cityFeatures: {
        ru: [
          'Опыт работы в регионе',
          'Понимание местного рынка',
          'Доступные цены',
          'Персональный подход'
        ],
        en: [
          'Regional experience',
          'Understanding of local market',
          'Affordable prices',
          'Personal approach'
        ],
        pl: [
          'Doświadczenie regionalne',
          'Zrozumienie lokalnego rynku',
          'Przystępne ceny',
          'Podejście osobiste'
        ]
      }
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
        'создать сайт варшава',
        'сайт дешево варшава',
        'сайт бесплатно варшава',
        'сайт на заказ варшава',
        'заказать сайт недорого варшава',
        'создать сайт самому варшава',
        'сайт под ключ недорого варшава',
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
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Варшава — крупнейший IT-центр Польши. Мы создаём современные сайты для варшавских компаний, сочетая белорусское качество разработки с пониманием польского рынка.',
        en: 'Warsaw is the largest IT center in Poland. We create modern websites for Warsaw companies, combining Belarusian development quality with understanding of the Polish market.',
        pl: 'Warszawa to największe centrum IT w Polsce. Tworzymy nowoczesne strony internetowe dla firm warszawskich, łącząc białoruską jakość rozwoju ze zrozumieniem polskiego rynku.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Варшаве и Мазовецком воеводстве. Понимаем особенности польского рынка и создаём сайты, которые помогают компаниям эффективно работать в цифровой среде.',
        en: 'We work with businesses in Warsaw and Masovian Voivodeship. We understand the specifics of the Polish market and create websites that help companies work effectively in the digital environment.',
        pl: 'Pracujemy z firmami w Warszawie i województwie mazowieckim. Rozumiemy specyfikę polskiego rynku i tworzymy strony internetowe, które pomagają firmom efektywnie działać w środowisku cyfrowym.'
      },
      cityFeatures: {
        ru: [
          'Опыт работы на польском рынке',
          'Понимание местных требований',
          'Качественная разработка',
          'Поддержка на польском языке'
        ],
        en: [
          'Experience in Polish market',
          'Understanding of local requirements',
          'Quality development',
          'Support in Polish'
        ],
        pl: [
          'Doświadczenie na rynku polskim',
          'Zrozumienie lokalnych wymagań',
          'Wysokiej jakości rozwój',
          'Wsparcie w języku polskim'
        ]
      }
    }
  },
  brest: {
    code: 'brest',
    name: {
      ru: 'Брест',
      en: 'Brest',
      pl: 'Brześć'
    },
    nameLocative: {
      ru: 'Бресте',
      en: 'Brest',
      pl: 'Brześciu'
    },
    region: {
      ru: 'Брестская область',
      en: 'Brest Region',
      pl: 'Obwód brzeski'
    },
    phone: {
      display: '+375 29 121-09-08',
      tel: '+375291210908'
    },
    geo: {
      region: 'BY-BR',
      placename: 'Брест',
      position: '52.0975;23.7341',
      ICBM: '52.0975, 23.7341'
    },
    countryCode: 'BY',
    keywords: {
      ru: [
        'создание сайтов брест',
        'разработка сайтов брест',
        'заказать сайт брест',
        'сайт под ключ брест',
        'веб студия брест',
        'создание сайтов брестская область',
        'сделать сайт брест',
        'изготовление сайтов брест',
        'разработка сайтов недорого брест',
        'создание сайта для бизнеса брест',
        'лендинг брест',
        'интернет магазин брест',
        'корпоративный сайт брест',
        'сайт визитка брест',
        'одностраничный сайт брест',
        'адаптивный сайт брест',
        'мобильная версия сайта брест',
        'продвижение сайтов брест',
        'веб разработка брест',
        'веб дизайн брест',
        'веб студия брест недорого',
        'создание сайта брест цена',
        'разработка сайта брест стоимость',
        'заказать сайт брест дешево',
        'создание лендинга брест',
        'разработка интернет магазина брест',
        'создание корпоративного сайта брест',
        'сайт визитка брест цена',
        'seo оптимизация сайта брест',
        'продвижение сайта брест яндекс',
        'продвижение сайта брест google',
        'создание сайта для компании брест',
        'разработка сайта для бизнеса брест',
        'веб дизайн брест студия',
        'создание сайта без предоплаты брест',
        'создать сайт брест',
        'сайт дешево брест',
        'сайт бесплатно брест',
        'сайт на заказ брест',
        'заказать сайт недорого брест',
        'создать сайт самому брест',
        'сайт под ключ недорого брест',
        'itshka брест',
        'itshka создание сайтов брест'
      ],
      en: [
        'website development brest',
        'web development brest',
        'create website brest',
        'website design brest',
        'web studio brest',
        'website development belarus',
        'web development belarus',
        'landing page brest',
        'online store development brest',
        'corporate website brest',
        'business website brest',
        'responsive website brest',
        'seo optimization brest',
        'itshka brest',
        'itshka website development'
      ],
      pl: [
        'tworzenie stron www brześć',
        'tworzenie stron internetowych brześć',
        'pozycjonowanie stron brześć',
        'strony www brześć',
        'sklepy internetowe brześć',
        'strony firmowe brześć',
        'projektowanie stron brześć',
        'itshka brześć',
        'itshka tworzenie stron brześć'
      ]
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Брест — западные ворота Беларуси, важный торговый и туристический центр. Создаём сайты для брестских компаний с учётом близости к границе и международной специфики региона.',
        en: 'Brest is the western gateway of Belarus, an important trade and tourism center. We create websites for Brest companies considering proximity to the border and international specifics of the region.',
        pl: 'Brześć to zachodnia brama Białorusi, ważne centrum handlowe i turystyczne. Tworzymy strony internetowe dla firm brzeskich, uwzględniając bliskość granicy i międzynarodową specyfikę regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Бресте и Брестской области. Понимаем важность приграничного положения и создаём сайты, которые помогают компаниям работать с международными партнёрами.',
        en: 'We work with businesses in Brest and Brest Region. We understand the importance of border position and create websites that help companies work with international partners.',
        pl: 'Pracujemy z firmami w Brześciu i obwodzie brzeskim. Rozumiemy wagę położenia przygranicznego i tworzymy strony internetowe, które pomagają firmom współpracować z międzynarodowymi partnerami.'
      },
      cityFeatures: {
        ru: [
          'Опыт работы в приграничном регионе',
          'Понимание международной специфики',
          'Многоязычная поддержка',
          'Адаптация под разные рынки'
        ],
        en: [
          'Experience in border region',
          'Understanding of international specifics',
          'Multilingual support',
          'Adaptation to different markets'
        ],
        pl: [
          'Doświadczenie w regionie przygranicznym',
          'Zrozumienie specyfiki międzynarodowej',
          'Wsparcie wielojęzyczne',
          'Adaptacja do różnych rynków'
        ]
      }
    }
  },
  vitebsk: {
    code: 'vitebsk',
    name: {
      ru: 'Витебск',
      en: 'Vitebsk',
      pl: 'Witebsk'
    },
    nameLocative: {
      ru: 'Витебске',
      en: 'Vitebsk',
      pl: 'Witebsku'
    },
    region: {
      ru: 'Витебская область',
      en: 'Vitebsk Region',
      pl: 'Obwód witebski'
    },
    phone: {
      display: '+375 29 121-09-08',
      tel: '+375291210908'
    },
    geo: {
      region: 'BY-VI',
      placename: 'Витебск',
      position: '55.1904;30.2049',
      ICBM: '55.1904, 30.2049'
    },
    countryCode: 'BY',
    keywords: {
      ru: [
        'создание сайтов витебск',
        'разработка сайтов витебск',
        'заказать сайт витебск',
        'сайт под ключ витебск',
        'веб студия витебск',
        'создание сайтов витебская область',
        'сделать сайт витебск',
        'изготовление сайтов витебск',
        'разработка сайтов недорого витебск',
        'создание сайта для бизнеса витебск',
        'лендинг витебск',
        'интернет магазин витебск',
        'корпоративный сайт витебск',
        'сайт визитка витебск',
        'одностраничный сайт витебск',
        'адаптивный сайт витебск',
        'мобильная версия сайта витебск',
        'продвижение сайтов витебск',
        'веб разработка витебск',
        'веб дизайн витебск',
        'веб студия витебск недорого',
        'создание сайта витебск цена',
        'разработка сайта витебск стоимость',
        'заказать сайт витебск дешево',
        'создание лендинга витебск',
        'разработка интернет магазина витебск',
        'создание корпоративного сайта витебск',
        'сайт визитка витебск цена',
        'seo оптимизация сайта витебск',
        'продвижение сайта витебск яндекс',
        'продвижение сайта витебск google',
        'создание сайта для компании витебск',
        'разработка сайта для бизнеса витебск',
        'веб дизайн витебск студия',
        'создание сайта без предоплаты витебск',
        'создать сайт витебск',
        'сайт дешево витебск',
        'сайт бесплатно витебск',
        'сайт на заказ витебск',
        'заказать сайт недорого витебск',
        'создать сайт самому витебск',
        'сайт под ключ недорого витебск',
        'itshka витебск',
        'itshka создание сайтов витебск'
      ],
      en: [
        'website development vitebsk',
        'web development vitebsk',
        'create website vitebsk',
        'website design vitebsk',
        'web studio vitebsk',
        'website development belarus',
        'web development belarus',
        'landing page vitebsk',
        'online store development vitebsk',
        'corporate website vitebsk',
        'business website vitebsk',
        'responsive website vitebsk',
        'seo optimization vitebsk',
        'itshka vitebsk',
        'itshka website development'
      ],
      pl: [
        'tworzenie stron www witebsk',
        'tworzenie stron internetowych witebsk',
        'pozycjonowanie stron witebsk',
        'strony www witebsk',
        'sklepy internetowe witebsk',
        'strony firmowe witebsk',
        'projektowanie stron witebsk',
        'itshka witebsk',
        'itshka tworzenie stron witebsk'
      ]
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Витебск — культурная столица Беларуси, город с богатыми традициями. Создаём сайты для витебских компаний, сочетая современные технологии с пониманием культурного наследия региона.',
        en: 'Vitebsk is the cultural capital of Belarus, a city with rich traditions. We create websites for Vitebsk companies, combining modern technologies with understanding of the region\'s cultural heritage.',
        pl: 'Witebsk to kulturalna stolica Białorusi, miasto z bogatymi tradycjami. Tworzymy strony internetowe dla firm witebskich, łącząc nowoczesne technologie ze zrozumieniem dziedzictwa kulturalnego regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Витебске и Витебской области. Понимаем специфику культурного региона и создаём сайты, которые отражают уникальность местных компаний.',
        en: 'We work with businesses in Vitebsk and Vitebsk Region. We understand the specifics of the cultural region and create websites that reflect the uniqueness of local companies.',
        pl: 'Pracujemy z firmami w Witebsku i obwodzie witebskim. Rozumiemy specyfikę regionu kulturalnego i tworzymy strony internetowe, które odzwierciedlają unikalność lokalnych firm.'
      },
      cityFeatures: {
        ru: [
          'Опыт работы в культурном регионе',
          'Понимание местной специфики',
          'Креативный подход',
          'Уникальный дизайн'
        ],
        en: [
          'Experience in cultural region',
          'Understanding of local specifics',
          'Creative approach',
          'Unique design'
        ],
        pl: [
          'Doświadczenie w regionie kulturalnym',
          'Zrozumienie lokalnej specyfiki',
          'Kreatywne podejście',
          'Unikalny design'
        ]
      }
    }
  },
  gomel: {
    code: 'gomel',
    name: {
      ru: 'Гомель',
      en: 'Gomel',
      pl: 'Homel'
    },
    nameLocative: {
      ru: 'Гомеле',
      en: 'Gomel',
      pl: 'Homlu'
    },
    region: {
      ru: 'Гомельская область',
      en: 'Gomel Region',
      pl: 'Obwód homelski'
    },
    phone: {
      display: '+375 29 121-09-08',
      tel: '+375291210908'
    },
    geo: {
      region: 'BY-HO',
      placename: 'Гомель',
      position: '52.4345;30.9754',
      ICBM: '52.4345, 30.9754'
    },
    countryCode: 'BY',
    keywords: {
      ru: [
        'создание сайтов гомель',
        'разработка сайтов гомель',
        'заказать сайт гомель',
        'сайт под ключ гомель',
        'веб студия гомель',
        'создание сайтов гомельская область',
        'сделать сайт гомель',
        'изготовление сайтов гомель',
        'разработка сайтов недорого гомель',
        'создание сайта для бизнеса гомель',
        'лендинг гомель',
        'интернет магазин гомель',
        'корпоративный сайт гомель',
        'сайт визитка гомель',
        'одностраничный сайт гомель',
        'адаптивный сайт гомель',
        'мобильная версия сайта гомель',
        'продвижение сайтов гомель',
        'веб разработка гомель',
        'веб дизайн гомель',
        'веб студия гомель недорого',
        'создание сайта гомель цена',
        'разработка сайта гомель стоимость',
        'заказать сайт гомель дешево',
        'создание лендинга гомель',
        'разработка интернет магазина гомель',
        'создание корпоративного сайта гомель',
        'сайт визитка гомель цена',
        'seo оптимизация сайта гомель',
        'продвижение сайта гомель яндекс',
        'продвижение сайта гомель google',
        'создание сайта для компании гомель',
        'разработка сайта для бизнеса гомель',
        'веб дизайн гомель студия',
        'создание сайта без предоплаты гомель',
        'создать сайт гомель',
        'сайт дешево гомель',
        'сайт бесплатно гомель',
        'сайт на заказ гомель',
        'заказать сайт недорого гомель',
        'создать сайт самому гомель',
        'сайт под ключ недорого гомель',
        'itshka гомель',
        'itshka создание сайтов гомель'
      ],
      en: [
        'website development gomel',
        'web development gomel',
        'create website gomel',
        'website design gomel',
        'web studio gomel',
        'website development belarus',
        'web development belarus',
        'landing page gomel',
        'online store development gomel',
        'corporate website gomel',
        'business website gomel',
        'responsive website gomel',
        'seo optimization gomel',
        'itshka gomel',
        'itshka website development'
      ],
      pl: [
        'tworzenie stron www homel',
        'tworzenie stron internetowych homel',
        'pozycjonowanie stron homel',
        'strony www homel',
        'sklepy internetowe homel',
        'strony firmowe homel',
        'projektowanie stron homel',
        'itshka homel',
        'itshka tworzenie stron homel'
      ]
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Гомель — второй по величине город Беларуси, важный промышленный и экономический центр. Создаём сайты для гомельских компаний с учётом промышленной специфики региона.',
        en: 'Gomel is the second largest city in Belarus, an important industrial and economic center. We create websites for Gomel companies considering the industrial specifics of the region.',
        pl: 'Homel to drugie co do wielkości miasto Białorusi, ważne centrum przemysłowe i ekonomiczne. Tworzymy strony internetowe dla firm homelskich, uwzględniając przemysłową specyfikę regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Гомеле и Гомельской области. Понимаем особенности промышленного региона и создаём сайты, которые помогают компаниям эффективно представлять свои услуги.',
        en: 'We work with businesses in Gomel and Gomel Region. We understand the specifics of the industrial region and create websites that help companies effectively present their services.',
        pl: 'Pracujemy z firmami w Homlu i obwodzie homelskim. Rozumiemy specyfikę regionu przemysłowego i tworzymy strony internetowe, które pomagają firmom efektywnie prezentować swoje usługi.'
      },
      cityFeatures: {
        ru: [
          'Опыт работы с промышленными компаниями',
          'Понимание B2B рынка',
          'Техническая экспертиза',
          'Масштабируемые решения'
        ],
        en: [
          'Experience with industrial companies',
          'Understanding of B2B market',
          'Technical expertise',
          'Scalable solutions'
        ],
        pl: [
          'Doświadczenie z firmami przemysłowymi',
          'Zrozumienie rynku B2B',
          'Ekspertyza techniczna',
          'Rozwiązania skalowalne'
        ]
      }
    }
  },
  grodno: {
    code: 'grodno',
    name: {
      ru: 'Гродно',
      en: 'Grodno',
      pl: 'Grodno'
    },
    nameLocative: {
      ru: 'Гродно',
      en: 'Grodno',
      pl: 'Grodnie'
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
      placename: 'Гродно',
      position: '53.6884;23.8258',
      ICBM: '53.6884, 23.8258'
    },
    countryCode: 'BY',
    keywords: {
      ru: [
        'создание сайтов гродно',
        'разработка сайтов гродно',
        'заказать сайт гродно',
        'сайт под ключ гродно',
        'веб студия гродно',
        'создание сайтов гродненская область',
        'сделать сайт гродно',
        'изготовление сайтов гродно',
        'разработка сайтов недорого гродно',
        'создание сайта для бизнеса гродно',
        'лендинг гродно',
        'интернет магазин гродно',
        'корпоративный сайт гродно',
        'сайт визитка гродно',
        'одностраничный сайт гродно',
        'адаптивный сайт гродно',
        'мобильная версия сайта гродно',
        'продвижение сайтов гродно',
        'веб разработка гродно',
        'веб дизайн гродно',
        'веб студия гродно недорого',
        'создание сайта гродно цена',
        'разработка сайта гродно стоимость',
        'заказать сайт гродно дешево',
        'создание лендинга гродно',
        'разработка интернет магазина гродно',
        'создание корпоративного сайта гродно',
        'сайт визитка гродно цена',
        'seo оптимизация сайта гродно',
        'продвижение сайта гродно яндекс',
        'продвижение сайта гродно google',
        'создание сайта для компании гродно',
        'разработка сайта для бизнеса гродно',
        'веб дизайн гродно студия',
        'создание сайта без предоплаты гродно',
        'создать сайт гродно',
        'сайт дешево гродно',
        'сайт бесплатно гродно',
        'сайт на заказ гродно',
        'заказать сайт недорого гродно',
        'создать сайт самому гродно',
        'сайт под ключ недорого гродно',
        'itshka гродно',
        'itshka создание сайтов гродно'
      ],
      en: [
        'website development grodno',
        'web development grodno',
        'create website grodno',
        'website design grodno',
        'web studio grodno',
        'website development belarus',
        'web development belarus',
        'landing page grodno',
        'online store development grodno',
        'corporate website grodno',
        'business website grodno',
        'responsive website grodno',
        'seo optimization grodno',
        'itshka grodno',
        'itshka website development'
      ],
      pl: [
        'tworzenie stron www grodno',
        'tworzenie stron internetowych grodno',
        'pozycjonowanie stron grodno',
        'strony www grodno',
        'sklepy internetowe grodno',
        'strony firmowe grodno',
        'projektowanie stron grodno',
        'itshka grodno',
        'itshka tworzenie stron grodno'
      ]
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Гродно — старинный город с европейской атмосферой, важный центр западной Беларуси. Создаём сайты для гродненских компаний, сочетая современный дизайн с уважением к историческому наследию.',
        en: 'Grodno is an ancient city with European atmosphere, an important center of western Belarus. We create websites for Grodno companies, combining modern design with respect for historical heritage.',
        pl: 'Grodno to starożytne miasto z europejską atmosferą, ważne centrum zachodniej Białorusi. Tworzymy strony internetowe dla firm grodzieńskich, łącząc nowoczesny design z szacunkiem dla dziedzictwa historycznego.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Гродно и Гродненской области. Понимаем особенности западного региона и создаём сайты, которые помогают компаниям эффективно работать на местном и международном рынках.',
        en: 'We work with businesses in Grodno and Grodno Region. We understand the specifics of the western region and create websites that help companies work effectively on local and international markets.',
        pl: 'Pracujemy z firmami w Grodnie i obwodzie grodzieńskim. Rozumiemy specyfikę regionu zachodniego i tworzymy strony internetowe, które pomagają firmom efektywnie działać na rynkach lokalnych i międzynarodowych.'
      },
      cityFeatures: {
        ru: [
          'Опыт работы в западном регионе',
          'Понимание европейских стандартов',
          'Качественный дизайн',
          'Международная ориентация'
        ],
        en: [
          'Experience in western region',
          'Understanding of European standards',
          'Quality design',
          'International orientation'
        ],
        pl: [
          'Doświadczenie w regionie zachodnim',
          'Zrozumienie standardów europejskich',
          'Wysokiej jakości design',
          'Orientacja międzynarodowa'
        ]
      }
    }
  },
  mogilev: {
    code: 'mogilev',
    name: {
      ru: 'Могилев',
      en: 'Mogilev',
      pl: 'Mohylew'
    },
    nameLocative: {
      ru: 'Могилеве',
      en: 'Mogilev',
      pl: 'Mohylewie'
    },
    region: {
      ru: 'Могилевская область',
      en: 'Mogilev Region',
      pl: 'Obwód mohylewski'
    },
    phone: {
      display: '+375 29 121-09-08',
      tel: '+375291210908'
    },
    geo: {
      region: 'BY-MA',
      placename: 'Могилев',
      position: '53.8945;30.3307',
      ICBM: '53.8945, 30.3307'
    },
    countryCode: 'BY',
    keywords: {
      ru: [
        'создание сайтов могилев',
        'разработка сайтов могилев',
        'заказать сайт могилев',
        'сайт под ключ могилев',
        'веб студия могилев',
        'создание сайтов могилевская область',
        'сделать сайт могилев',
        'изготовление сайтов могилев',
        'разработка сайтов недорого могилев',
        'создание сайта для бизнеса могилев',
        'лендинг могилев',
        'интернет магазин могилев',
        'корпоративный сайт могилев',
        'сайт визитка могилев',
        'одностраничный сайт могилев',
        'адаптивный сайт могилев',
        'мобильная версия сайта могилев',
        'продвижение сайтов могилев',
        'веб разработка могилев',
        'веб дизайн могилев',
        'веб студия могилев недорого',
        'создание сайта могилев цена',
        'разработка сайта могилев стоимость',
        'заказать сайт могилев дешево',
        'создание лендинга могилев',
        'разработка интернет магазина могилев',
        'создание корпоративного сайта могилев',
        'сайт визитка могилев цена',
        'seo оптимизация сайта могилев',
        'продвижение сайта могилев яндекс',
        'продвижение сайта могилев google',
        'создание сайта для компании могилев',
        'разработка сайта для бизнеса могилев',
        'веб дизайн могилев студия',
        'создание сайта без предоплаты могилев',
        'создать сайт могилев',
        'сайт дешево могилев',
        'сайт бесплатно могилев',
        'сайт на заказ могилев',
        'заказать сайт недорого могилев',
        'создать сайт самому могилев',
        'сайт под ключ недорого могилев',
        'itshka могилев',
        'itshka создание сайтов могилев'
      ],
      en: [
        'website development mogilev',
        'web development mogilev',
        'create website mogilev',
        'website design mogilev',
        'web studio mogilev',
        'website development belarus',
        'web development belarus',
        'landing page mogilev',
        'online store development mogilev',
        'corporate website mogilev',
        'business website mogilev',
        'responsive website mogilev',
        'seo optimization mogilev',
        'itshka mogilev',
        'itshka website development'
      ],
      pl: [
        'tworzenie stron www mohylew',
        'tworzenie stron internetowych mohylew',
        'pozycjonowanie stron mohylew',
        'strony www mohylew',
        'sklepy internetowe mohylew',
        'strony firmowe mohylew',
        'projektowanie stron mohylew',
        'itshka mohylew',
        'itshka tworzenie stron mohylew'
      ]
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Могилев — один из старейших городов Беларуси, важный экономический центр восточного региона. Создаём сайты для могилевских компаний с учётом региональной специфики и потребностей местного бизнеса.',
        en: 'Mogilev is one of the oldest cities in Belarus, an important economic center of the eastern region. We create websites for Mogilev companies considering regional specifics and needs of local business.',
        pl: 'Mohylew to jedno z najstarszych miast Białorusi, ważne centrum ekonomiczne regionu wschodniego. Tworzymy strony internetowe dla firm mohylewskich, uwzględniając specyfikę regionalną i potrzeby lokalnego biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Могилеве и Могилевской области. Понимаем особенности восточного региона и создаём сайты, которые помогают компаниям развиваться и привлекать новых клиентов.',
        en: 'We work with businesses in Mogilev and Mogilev Region. We understand the specifics of the eastern region and create websites that help companies develop and attract new customers.',
        pl: 'Pracujemy z firmami w Mohylewie i obwodzie mohylewskim. Rozumiemy specyfikę regionu wschodniego i tworzymy strony internetowe, które pomagają firmom rozwijać się i przyciągać nowych klientów.'
      },
      cityFeatures: {
        ru: [
          'Опыт работы в восточном регионе',
          'Понимание местного рынка',
          'Доступные решения',
          'Надёжная поддержка'
        ],
        en: [
          'Experience in eastern region',
          'Understanding of local market',
          'Affordable solutions',
          'Reliable support'
        ],
        pl: [
          'Doświadczenie w regionie wschodnim',
          'Zrozumienie lokalnego rynku',
          'Przystępne rozwiązania',
          'Niezawodne wsparcie'
        ]
      }
    }
  },
  baranovichi: {
    code: 'baranovichi',
    name: { ru: 'Барановичи', en: 'Baranavichy', pl: 'Baranowicze' },
    nameLocative: { ru: 'Барановичах', en: 'Baranavichy', pl: 'Baranowiczach' },
    region: { ru: 'Брестская область', en: 'Brest Region', pl: 'Obwód brzeski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-BR', placename: 'Барановичи', position: '53.1303;26.0134', ICBM: '53.1303, 26.0134' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов барановичи', 'разработка сайтов барановичи', 'заказать сайт барановичи', 'сайт под ключ барановичи', 'веб студия барановичи', 'сделать сайт барановичи', 'лендинг барановичи', 'интернет магазин барановичи', 'корпоративный сайт барановичи', 'веб разработка барановичи', 'создать сайт барановичи', 'сайт дешево барановичи', 'сайт бесплатно барановичи', 'сайт на заказ барановичи', 'заказать сайт недорого барановичи', 'создать сайт самому барановичи', 'сайт под ключ недорого барановичи', 'itshka барановичи'],
      en: ['website development baranovichi', 'web development baranovichi', 'create website baranovichi', 'web studio baranovichi', 'itshka baranovichi'],
      pl: ['tworzenie stron baranowicze', 'strony www baranowicze', 'itshka baranowicze']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Барановичи — крупный промышленный центр Брестской области. Создаём современные сайты для барановичских компаний с учётом промышленной специфики и потребностей развивающегося бизнеса.',
        en: 'Baranavichy is a major industrial center of Brest Region. We create modern websites for Baranovichi companies considering industrial specifics and needs of developing business.',
        pl: 'Baranowicze to ważne centrum przemysłowe obwodu brzeskiego. Tworzymy nowoczesne strony internetowe dla firm z Baranowicz, uwzględniając specyfikę przemysłową i potrzeby rozwijającego się biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Барановичах и Брестской области. Понимаем особенности промышленного города и создаём сайты, которые помогают компаниям эффективно работать на региональном рынке.',
        en: 'We work with businesses in Baranovichi and Brest Region. We understand the specifics of an industrial city and create websites that help companies work effectively in the regional market.',
        pl: 'Pracujemy z firmami w Baranowiczach i obwodzie brzeskim. Rozumiemy specyfikę miasta przemysłowego i tworzymy strony internetowe, które pomagają firmom efektywnie działać na rynku regionalnym.'
      },
      cityFeatures: {
        ru: ['Опыт работы в промышленном регионе', 'Понимание B2B рынка', 'Техническая экспертиза', 'Быстрая разработка'],
        en: ['Experience in industrial region', 'Understanding of B2B market', 'Technical expertise', 'Fast development'],
        pl: ['Doświadczenie w regionie przemysłowym', 'Zrozumienie rynku B2B', 'Ekspertyza techniczna', 'Szybki rozwój']
      }
    }
  },
  bobruisk: {
    code: 'bobruisk',
    name: { ru: 'Бобруйск', en: 'Babruysk', pl: 'Bobrujsk' },
    nameLocative: { ru: 'Бобруйске', en: 'Babruysk', pl: 'Bobrujsku' },
    region: { ru: 'Могилевская область', en: 'Mogilev Region', pl: 'Obwód mohylewski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-MA', placename: 'Бобруйск', position: '53.1500;29.2333', ICBM: '53.1500, 29.2333' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов бобруйск', 'разработка сайтов бобруйск', 'заказать сайт бобруйск', 'сайт под ключ бобруйск', 'веб студия бобруйск', 'сделать сайт бобруйск', 'лендинг бобруйск', 'интернет магазин бобруйск', 'корпоративный сайт бобруйск', 'веб разработка бобруйск', 'создать сайт бобруйск', 'сайт дешево бобруйск', 'сайт бесплатно бобруйск', 'сайт на заказ бобруйск', 'заказать сайт недорого бобруйск', 'создать сайт самому бобруйск', 'сайт под ключ недорого бобруйск', 'itshka бобруйск'],
      en: ['website development bobruisk', 'web development bobruisk', 'create website bobruisk', 'web studio bobruisk', 'itshka bobruisk'],
      pl: ['tworzenie stron bobrujsk', 'strony www bobrujsk', 'itshka bobrujsk']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Бобруйск — один из крупнейших городов Могилевской области с богатой историей. Создаём сайты для бобруйских компаний, сочетая современные технологии с пониманием местной специфики.',
        en: 'Babruysk is one of the largest cities in Mogilev Region with rich history. We create websites for Babruysk companies, combining modern technologies with understanding of local specifics.',
        pl: 'Bobrujsk to jedno z największych miast obwodu mohylewskiego z bogatą historią. Tworzymy strony internetowe dla firm z Bobrujska, łącząc nowoczesne technologie ze zrozumieniem lokalnej specyfiki.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Бобруйске и Могилевской области. Знаем особенности крупного регионального центра и создаём сайты, которые помогают компаниям привлекать клиентов.',
        en: 'We work with businesses in Babruysk and Mogilev Region. We know the specifics of a large regional center and create websites that help companies attract customers.',
        pl: 'Pracujemy z firmami w Bobrujsku i obwodzie mohylewskim. Znamy specyfikę dużego centrum regionalnego i tworzymy strony internetowe, które pomagają firmom przyciągać klientów.'
      },
      cityFeatures: {
        ru: ['Опыт работы в крупном регионе', 'Понимание местного рынка', 'Качественная разработка', 'Персональный подход'],
        en: ['Experience in large region', 'Understanding of local market', 'Quality development', 'Personal approach'],
        pl: ['Doświadczenie w dużym regionie', 'Zrozumienie lokalnego rynku', 'Wysokiej jakości rozwój', 'Podejście osobiste']
      }
    }
  },
  pinsk: {
    code: 'pinsk',
    name: { ru: 'Пинск', en: 'Pinsk', pl: 'Pińsk' },
    nameLocative: { ru: 'Пинске', en: 'Pinsk', pl: 'Pińsku' },
    region: { ru: 'Брестская область', en: 'Brest Region', pl: 'Obwód brzeski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-BR', placename: 'Пинск', position: '52.1167;26.1000', ICBM: '52.1167, 26.1000' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов пинск', 'разработка сайтов пинск', 'заказать сайт пинск', 'сайт под ключ пинск', 'веб студия пинск', 'сделать сайт пинск', 'лендинг пинск', 'интернет магазин пинск', 'корпоративный сайт пинск', 'веб разработка пинск', 'создать сайт пинск', 'сайт дешево пинск', 'сайт бесплатно пинск', 'сайт на заказ пинск', 'заказать сайт недорого пинск', 'создать сайт самому пинск', 'сайт под ключ недорого пинск', 'itshka пинск'],
      en: ['website development pinsk', 'web development pinsk', 'create website pinsk', 'web studio pinsk', 'itshka pinsk'],
      pl: ['tworzenie stron pińsk', 'strony www pińsk', 'itshka pińsk']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Пинск — старинный город с уникальной архитектурой и развивающимся бизнесом. Создаём сайты для пинских компаний с учётом исторического наследия и современных потребностей рынка.',
        en: 'Pinsk is an ancient city with unique architecture and developing business. We create websites for Pinsk companies considering historical heritage and modern market needs.',
        pl: 'Pińsk to starożytne miasto z unikalną architekturą i rozwijającym się biznesem. Tworzymy strony internetowe dla firm z Pińska, uwzględniając dziedzictwo historyczne i nowoczesne potrzeby rynku.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Пинске и Брестской области. Понимаем важность исторического контекста и создаём сайты, которые отражают уникальность местных компаний.',
        en: 'We work with businesses in Pinsk and Brest Region. We understand the importance of historical context and create websites that reflect the uniqueness of local companies.',
        pl: 'Pracujemy z firmami w Pińsku i obwodzie brzeskim. Rozumiemy wagę kontekstu historycznego i tworzymy strony internetowe, które odzwierciedlają unikalność lokalnych firm.'
      },
      cityFeatures: {
        ru: ['Опыт работы в историческом регионе', 'Понимание культурного контекста', 'Уникальный дизайн', 'Современные технологии'],
        en: ['Experience in historical region', 'Understanding of cultural context', 'Unique design', 'Modern technologies'],
        pl: ['Doświadczenie w regionie historycznym', 'Zrozumienie kontekstu kulturalnego', 'Unikalny design', 'Nowoczesne technologie']
      }
    }
  },
  orsha: {
    code: 'orsha',
    name: { ru: 'Орша', en: 'Orsha', pl: 'Orsza' },
    nameLocative: { ru: 'Орше', en: 'Orsha', pl: 'Orszy' },
    region: { ru: 'Витебская область', en: 'Vitebsk Region', pl: 'Obwód witebski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-VI', placename: 'Орша', position: '54.5083;30.4172', ICBM: '54.5083, 30.4172' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов орша', 'разработка сайтов орша', 'заказать сайт орша', 'сайт под ключ орша', 'веб студия орша', 'сделать сайт орша', 'лендинг орша', 'интернет магазин орша', 'корпоративный сайт орша', 'веб разработка орша', 'создать сайт орша', 'сайт дешево орша', 'сайт бесплатно орша', 'сайт на заказ орша', 'заказать сайт недорого орша', 'создать сайт самому орша', 'сайт под ключ недорого орша', 'itshka орша'],
      en: ['website development orsha', 'web development orsha', 'create website orsha', 'web studio orsha', 'itshka orsha'],
      pl: ['tworzenie stron orsza', 'strony www orsza', 'itshka orsza']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Орша — важный транспортный узел и промышленный центр Витебской области. Создаём сайты для оршанских компаний с учётом логистической специфики и потребностей бизнеса.',
        en: 'Orsha is an important transport hub and industrial center of Vitebsk Region. We create websites for Orsha companies considering logistics specifics and business needs.',
        pl: 'Orsza to ważny węzeł transportowy i centrum przemysłowe obwodu witebskiego. Tworzymy strony internetowe dla firm z Orszy, uwzględniając specyfikę logistyczną i potrzeby biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Орше и Витебской области. Понимаем важность транспортного положения и создаём сайты, которые помогают компаниям эффективно работать.',
        en: 'We work with businesses in Orsha and Vitebsk Region. We understand the importance of transport position and create websites that help companies work effectively.',
        pl: 'Pracujemy z firmami w Orszy i obwodzie witebskim. Rozumiemy wagę położenia transportowego i tworzymy strony internetowe, które pomagają firmom efektywnie działać.'
      },
      cityFeatures: {
        ru: ['Опыт работы в транспортном регионе', 'Понимание логистики', 'Эффективные решения', 'Быстрая разработка'],
        en: ['Experience in transport region', 'Understanding of logistics', 'Efficient solutions', 'Fast development'],
        pl: ['Doświadczenie w regionie transportowym', 'Zrozumienie logistyki', 'Efektywne rozwiązania', 'Szybki rozwój']
      }
    }
  },
  maladzyechna: {
    code: 'maladzyechna',
    name: { ru: 'Молодечно', en: 'Maladzyechna', pl: 'Mołodeczno' },
    nameLocative: { ru: 'Молодечно', en: 'Maladzyechna', pl: 'Mołodecznie' },
    region: { ru: 'Минская область', en: 'Minsk Region', pl: 'Obwód miński' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-MI', placename: 'Молодечно', position: '54.3167;26.8500', ICBM: '54.3167, 26.8500' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов молодечно', 'разработка сайтов молодечно', 'заказать сайт молодечно', 'сайт под ключ молодечно', 'веб студия молодечно', 'сделать сайт молодечно', 'лендинг молодечно', 'интернет магазин молодечно', 'корпоративный сайт молодечно', 'веб разработка молодечно', 'создать сайт молодечно', 'сайт дешево молодечно', 'сайт бесплатно молодечно', 'сайт на заказ молодечно', 'заказать сайт недорого молодечно', 'создать сайт самому молодечно', 'сайт под ключ недорого молодечно', 'itshka молодечно'],
      en: ['website development maladzyechna', 'web development maladzyechna', 'create website maladzyechna', 'web studio maladzyechna', 'itshka maladzyechna'],
      pl: ['tworzenie stron mołodeczno', 'strony www mołodeczno', 'itshka mołodeczno']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Молодечно — динамично развивающийся город Минской области. Создаём сайты для молодечненских компаний с учётом близости к столице и потребностей растущего бизнеса.',
        en: 'Maladzyechna is a dynamically developing city in Minsk Region. We create websites for Maladzyechna companies considering proximity to the capital and needs of growing business.',
        pl: 'Mołodeczno to dynamicznie rozwijające się miasto w obwodzie mińskim. Tworzymy strony internetowe dla firm z Mołodeczna, uwzględniając bliskość stolicy i potrzeby rozwijającego się biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Молодечно и Минской области. Понимаем преимущества близости к столице и создаём сайты, которые помогают компаниям конкурировать на рынке.',
        en: 'We work with businesses in Maladzyechna and Minsk Region. We understand the advantages of proximity to the capital and create websites that help companies compete in the market.',
        pl: 'Pracujemy z firmami w Mołodecznie i obwodzie mińskim. Rozumiemy zalety bliskości stolicy i tworzymy strony internetowe, które pomagają firmom konkurować na rynku.'
      },
      cityFeatures: {
        ru: ['Опыт работы в столичном регионе', 'Понимание конкурентной среды', 'Современные решения', 'Быстрая разработка'],
        en: ['Experience in capital region', 'Understanding of competitive environment', 'Modern solutions', 'Fast development'],
        pl: ['Doświadczenie w regionie stołecznym', 'Zrozumienie środowiska konkurencyjnego', 'Nowoczesne rozwiązania', 'Szybki rozwój']
      }
    }
  },
  salihorsk: {
    code: 'salihorsk',
    name: { ru: 'Солигорск', en: 'Salihorsk', pl: 'Soligorsk' },
    nameLocative: { ru: 'Солигорске', en: 'Salihorsk', pl: 'Soligorsku' },
    region: { ru: 'Минская область', en: 'Minsk Region', pl: 'Obwód miński' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-MI', placename: 'Солигорск', position: '52.7833;27.5333', ICBM: '52.7833, 27.5333' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов солигорск', 'разработка сайтов солигорск', 'заказать сайт солигорск', 'сайт под ключ солигорск', 'веб студия солигорск', 'сделать сайт солигорск', 'лендинг солигорск', 'интернет магазин солигорск', 'корпоративный сайт солигорск', 'веб разработка солигорск', 'создать сайт солигорск', 'сайт дешево солигорск', 'сайт бесплатно солигорск', 'сайт на заказ солигорск', 'заказать сайт недорого солигорск', 'создать сайт самому солигорск', 'сайт под ключ недорого солигорск', 'itshka солигорск'],
      en: ['website development salihorsk', 'web development salihorsk', 'create website salihorsk', 'web studio salihorsk', 'itshka salihorsk'],
      pl: ['tworzenie stron soligorsk', 'strony www soligorsk', 'itshka soligorsk']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Солигорск — центр горнодобывающей промышленности Беларуси. Создаём сайты для солигорских компаний с учётом промышленной специфики и потребностей горнодобывающего сектора.',
        en: 'Salihorsk is the center of mining industry in Belarus. We create websites for Salihorsk companies considering industrial specifics and needs of the mining sector.',
        pl: 'Soligorsk to centrum przemysłu wydobywczego na Białorusi. Tworzymy strony internetowe dla firm z Soligorska, uwzględniając specyfikę przemysłową i potrzeby sektora wydobywczego.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Солигорске и Минской области. Понимаем особенности промышленного города и создаём сайты, которые помогают компаниям эффективно работать.',
        en: 'We work with businesses in Salihorsk and Minsk Region. We understand the specifics of an industrial city and create websites that help companies work effectively.',
        pl: 'Pracujemy z firmami w Soligorsku i obwodzie mińskim. Rozumiemy specyfikę miasta przemysłowego i tworzymy strony internetowe, które pomagają firmom efektywnie działać.'
      },
      cityFeatures: {
        ru: ['Опыт работы с промышленными компаниями', 'Понимание горнодобывающего сектора', 'Техническая экспертиза', 'Надёжные решения'],
        en: ['Experience with industrial companies', 'Understanding of mining sector', 'Technical expertise', 'Reliable solutions'],
        pl: ['Doświadczenie z firmami przemysłowymi', 'Zrozumienie sektora wydobywczego', 'Ekspertyza techniczna', 'Niezawodne rozwiązania']
      }
    }
  },
  navapolatsk: {
    code: 'navapolatsk',
    name: { ru: 'Новополоцк', en: 'Navapolatsk', pl: 'Nowopołock' },
    nameLocative: { ru: 'Новополоцке', en: 'Navapolatsk', pl: 'Nowopołocku' },
    region: { ru: 'Витебская область', en: 'Vitebsk Region', pl: 'Obwód witebski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-VI', placename: 'Новополоцк', position: '55.5333;28.6667', ICBM: '55.5333, 28.6667' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов новополоцк', 'разработка сайтов новополоцк', 'заказать сайт новополоцк', 'сайт под ключ новополоцк', 'веб студия новополоцк', 'сделать сайт новополоцк', 'лендинг новополоцк', 'интернет магазин новополоцк', 'корпоративный сайт новополоцк', 'веб разработка новополоцк', 'создать сайт новополоцк', 'сайт дешево новополоцк', 'сайт бесплатно новополоцк', 'сайт на заказ новополоцк', 'заказать сайт недорого новополоцк', 'создать сайт самому новополоцк', 'сайт под ключ недорого новополоцк', 'itshka новополоцк'],
      en: ['website development navapolatsk', 'web development navapolatsk', 'create website navapolatsk', 'web studio navapolatsk', 'itshka navapolatsk'],
      pl: ['tworzenie stron nowopołock', 'strony www nowopołock', 'itshka nowopołock']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Новополоцк — молодой промышленный город с развитой нефтехимической отраслью. Создаём сайты для новополоцких компаний с учётом промышленной специфики и современных технологий.',
        en: 'Navapolatsk is a young industrial city with developed petrochemical industry. We create websites for Navapolatsk companies considering industrial specifics and modern technologies.',
        pl: 'Nowopołock to młode miasto przemysłowe z rozwiniętym przemysłem petrochemicznym. Tworzymy strony internetowe dla firm z Nowopołocka, uwzględniając specyfikę przemysłową i nowoczesne technologie.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Новополоцке и Витебской области. Понимаем особенности промышленного центра и создаём сайты, которые помогают компаниям развиваться.',
        en: 'We work with businesses in Navapolatsk and Vitebsk Region. We understand the specifics of an industrial center and create websites that help companies develop.',
        pl: 'Pracujemy z firmami w Nowopołocku i obwodzie witebskim. Rozumiemy specyfikę centrum przemysłowego i tworzymy strony internetowe, które pomagają firmom rozwijać się.'
      },
      cityFeatures: {
        ru: ['Опыт работы в промышленном регионе', 'Понимание нефтехимической отрасли', 'Современные технологии', 'Быстрая разработка'],
        en: ['Experience in industrial region', 'Understanding of petrochemical industry', 'Modern technologies', 'Fast development'],
        pl: ['Doświadczenie w regionie przemysłowym', 'Zrozumienie przemysłu petrochemicznego', 'Nowoczesne technologie', 'Szybki rozwój']
      }
    }
  },
  polatsk: {
    code: 'polatsk',
    name: { ru: 'Полоцк', en: 'Polatsk', pl: 'Połock' },
    nameLocative: { ru: 'Полоцке', en: 'Polatsk', pl: 'Połocku' },
    region: { ru: 'Витебская область', en: 'Vitebsk Region', pl: 'Obwód witebski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-VI', placename: 'Полоцк', position: '55.4833;28.8000', ICBM: '55.4833, 28.8000' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов полоцк', 'разработка сайтов полоцк', 'заказать сайт полоцк', 'сайт под ключ полоцк', 'веб студия полоцк', 'сделать сайт полоцк', 'лендинг полоцк', 'интернет магазин полоцк', 'корпоративный сайт полоцк', 'веб разработка полоцк', 'создать сайт полоцк', 'сайт дешево полоцк', 'сайт бесплатно полоцк', 'сайт на заказ полоцк', 'заказать сайт недорого полоцк', 'создать сайт самому полоцк', 'сайт под ключ недорого полоцк', 'itshka полоцк'],
      en: ['website development polatsk', 'web development polatsk', 'create website polatsk', 'web studio polatsk', 'itshka polatsk'],
      pl: ['tworzenie stron połock', 'strony www połock', 'itshka połock']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Полоцк — древнейший город Беларуси с богатым историческим наследием. Создаём сайты для полоцких компаний, сочетая современный дизайн с уважением к историческому контексту.',
        en: 'Polatsk is the oldest city in Belarus with rich historical heritage. We create websites for Polatsk companies, combining modern design with respect for historical context.',
        pl: 'Połock to najstarsze miasto Białorusi z bogatym dziedzictwem historycznym. Tworzymy strony internetowe dla firm z Połocka, łącząc nowoczesny design z szacunkiem dla kontekstu historycznego.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Полоцке и Витебской области. Понимаем важность исторического наследия и создаём сайты, которые отражают уникальность древнего города.',
        en: 'We work with businesses in Polatsk and Vitebsk Region. We understand the importance of historical heritage and create websites that reflect the uniqueness of the ancient city.',
        pl: 'Pracujemy z firmami w Połocku i obwodzie witebskim. Rozumiemy wagę dziedzictwa historycznego i tworzymy strony internetowe, które odzwierciedlają unikalność starożytnego miasta.'
      },
      cityFeatures: {
        ru: ['Опыт работы в историческом регионе', 'Понимание культурного наследия', 'Уникальный дизайн', 'Современные технологии'],
        en: ['Experience in historical region', 'Understanding of cultural heritage', 'Unique design', 'Modern technologies'],
        pl: ['Doświadczenie w regionie historycznym', 'Zrozumienie dziedzictwa kulturalnego', 'Unikalny design', 'Nowoczesne technologie']
      }
    }
  },
  mazyr: {
    code: 'mazyr',
    name: { ru: 'Мозырь', en: 'Mazyr', pl: 'Mazyr' },
    nameLocative: { ru: 'Мозыре', en: 'Mazyr', pl: 'Mazyrze' },
    region: { ru: 'Гомельская область', en: 'Gomel Region', pl: 'Obwód homelski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-HO', placename: 'Мозырь', position: '52.0500;29.2333', ICBM: '52.0500, 29.2333' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов мозырь', 'разработка сайтов мозырь', 'заказать сайт мозырь', 'сайт под ключ мозырь', 'веб студия мозырь', 'сделать сайт мозырь', 'лендинг мозырь', 'интернет магазин мозырь', 'корпоративный сайт мозырь', 'веб разработка мозырь', 'создать сайт мозырь', 'сайт дешево мозырь', 'сайт бесплатно мозырь', 'сайт на заказ мозырь', 'заказать сайт недорого мозырь', 'создать сайт самому мозырь', 'сайт под ключ недорого мозырь', 'itshka мозырь'],
      en: ['website development mazyr', 'web development mazyr', 'create website mazyr', 'web studio mazyr', 'itshka mazyr'],
      pl: ['tworzenie stron mazyr', 'strony www mazyr', 'itshka mazyr']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Мозырь — важный промышленный и культурный центр Гомельской области. Создаём сайты для мозырских компаний с учётом промышленной специфики и культурного наследия региона.',
        en: 'Mazyr is an important industrial and cultural center of Gomel Region. We create websites for Mazyr companies considering industrial specifics and cultural heritage of the region.',
        pl: 'Mazyr to ważne centrum przemysłowe i kulturalne obwodu homelskiego. Tworzymy strony internetowe dla firm z Mazyru, uwzględniając specyfikę przemysłową i dziedzictwo kulturalne regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Мозыре и Гомельской области. Понимаем особенности промышленного и культурного центра и создаём сайты, которые помогают компаниям развиваться.',
        en: 'We work with businesses in Mazyr and Gomel Region. We understand the specifics of an industrial and cultural center and create websites that help companies develop.',
        pl: 'Pracujemy z firmami w Mazyrze i obwodzie homelskim. Rozumiemy specyfikę centrum przemysłowego i kulturalnego i tworzymy strony internetowe, które pomagają firmom rozwijać się.'
      },
      cityFeatures: {
        ru: ['Опыт работы в промышленном регионе', 'Понимание культурного контекста', 'Комплексные решения', 'Надёжная поддержка'],
        en: ['Experience in industrial region', 'Understanding of cultural context', 'Comprehensive solutions', 'Reliable support'],
        pl: ['Doświadczenie w regionie przemysłowym', 'Zrozumienie kontekstu kulturalnego', 'Kompleksowe rozwiązania', 'Niezawodne wsparcie']
      }
    }
  },
  slutsk: {
    code: 'slutsk',
    name: { ru: 'Слуцк', en: 'Slutsk', pl: 'Słuck' },
    nameLocative: { ru: 'Слуцке', en: 'Slutsk', pl: 'Słucku' },
    region: { ru: 'Минская область', en: 'Minsk Region', pl: 'Obwód miński' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'BY-MI', placename: 'Слуцк', position: '53.0167;27.5500', ICBM: '53.0167, 27.5500' },
    countryCode: 'BY',
    keywords: {
      ru: ['создание сайтов слуцк', 'разработка сайтов слуцк', 'заказать сайт слуцк', 'сайт под ключ слуцк', 'веб студия слуцк', 'сделать сайт слуцк', 'лендинг слуцк', 'интернет магазин слуцк', 'корпоративный сайт слуцк', 'веб разработка слуцк', 'создать сайт слуцк', 'сайт дешево слуцк', 'сайт бесплатно слуцк', 'сайт на заказ слуцк', 'заказать сайт недорого слуцк', 'создать сайт самому слуцк', 'сайт под ключ недорого слуцк', 'itshka слуцк'],
      en: ['website development slutsk', 'web development slutsk', 'create website slutsk', 'web studio slutsk', 'itshka slutsk'],
      pl: ['tworzenie stron słuck', 'strony www słuck', 'itshka słuck']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Слуцк — исторический город Минской области с развивающимся бизнесом. Создаём сайты для слуцких компаний с учётом исторического наследия и современных потребностей рынка.',
        en: 'Slutsk is a historical city in Minsk Region with developing business. We create websites for Slutsk companies considering historical heritage and modern market needs.',
        pl: 'Słuck to historyczne miasto w obwodzie mińskim z rozwijającym się biznesem. Tworzymy strony internetowe dla firm ze Słucka, uwzględniając dziedzictwo historyczne i nowoczesne potrzeby rynku.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Слуцке и Минской области. Понимаем важность исторического контекста и создаём сайты, которые помогают компаниям эффективно работать.',
        en: 'We work with businesses in Slutsk and Minsk Region. We understand the importance of historical context and create websites that help companies work effectively.',
        pl: 'Pracujemy z firmami w Słucku i obwodzie mińskim. Rozumiemy wagę kontekstu historycznego i tworzymy strony internetowe, które pomagają firmom efektywnie działać.'
      },
      cityFeatures: {
        ru: ['Опыт работы в столичном регионе', 'Понимание исторического контекста', 'Современные решения', 'Быстрая разработка'],
        en: ['Experience in capital region', 'Understanding of historical context', 'Modern solutions', 'Fast development'],
        pl: ['Doświadczenie w regionie stołecznym', 'Zrozumienie kontekstu historycznego', 'Nowoczesne rozwiązania', 'Szybki rozwój']
      }
    }
  },
  moscow: {
    code: 'moscow',
    name: { ru: 'Москва', en: 'Moscow', pl: 'Moskwa' },
    nameLocative: { ru: 'Москве', en: 'Moscow', pl: 'Moskwie' },
    region: { ru: 'Московская область', en: 'Moscow Region', pl: 'Obwód moskiewski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-MOS', placename: 'Москва', position: '55.7558;37.6173', ICBM: '55.7558, 37.6173' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов москва', 'разработка сайтов москва', 'заказать сайт москва', 'сайт под ключ москва', 'веб студия москва', 'сделать сайт москва', 'лендинг москва', 'интернет магазин москва', 'корпоративный сайт москва', 'веб разработка москва', 'создать сайт москва', 'сайт дешево москва', 'сайт бесплатно москва', 'сайт на заказ москва', 'заказать сайт недорого москва', 'создать сайт самому москва', 'сайт под ключ недорого москва', 'itshka москва', 'сделать сайт в москве', 'создать сайт в москве'],
      en: ['website development moscow', 'web development moscow', 'create website moscow', 'web studio moscow', 'itshka moscow'],
      pl: ['tworzenie stron moskwa', 'strony www moskwa', 'itshka moskwa']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Москва — столица России и крупнейший деловой центр. Создаём современные сайты для московских компаний, используя передовые технологии и учитывая высокую конкуренцию столичного рынка.',
        en: 'Moscow is the capital of Russia and the largest business center. We create modern websites for Moscow companies, using advanced technologies and considering the high competition of the capital market.',
        pl: 'Moskwa to stolica Rosji i największe centrum biznesowe. Tworzymy nowoczesne strony internetowe dla firm moskiewskich, wykorzystując zaawansowane technologie i uwzględniając wysoką konkurencję rynku stołecznego.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Москве и Московской области. Понимаем специфику столичного рынка и создаём сайты, которые помогают компаниям выделиться среди конкурентов в условиях высокой конкуренции.',
        en: 'We work with businesses in Moscow and Moscow Region. We understand the specifics of the capital market and create websites that help companies stand out among competitors in conditions of high competition.',
        pl: 'Pracujemy z firmami w Moskwie i obwodzie moskiewskim. Rozumiemy specyfikę rynku stołecznego i tworzymy strony internetowe, które pomagają firmom wyróżnić się na tle konkurencji w warunkach wysokiej konkurencji.'
      },
      cityFeatures: {
        ru: ['Столичный уровень качества', 'Опыт с крупными компаниями', 'Инновационные решения', 'Высокая конкурентоспособность'],
        en: ['Capital level quality', 'Experience with large companies', 'Innovative solutions', 'High competitiveness'],
        pl: ['Stołeczny poziom jakości', 'Doświadczenie z dużymi firmami', 'Innowacyjne rozwiązania', 'Wysoka konkurencyjność']
      }
    }
  },
  spb: {
    code: 'spb',
    name: { ru: 'Санкт-Петербург', en: 'Saint Petersburg', pl: 'Sankt Petersburg' },
    nameLocative: { ru: 'Санкт-Петербурге', en: 'Saint Petersburg', pl: 'Sankt Petersburgu' },
    region: { ru: 'Ленинградская область', en: 'Leningrad Region', pl: 'Obwód leningradzki' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-LEN', placename: 'Санкт-Петербург', position: '59.9343;30.3351', ICBM: '59.9343, 30.3351' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов санкт-петербург', 'разработка сайтов спб', 'заказать сайт спб', 'сайт под ключ спб', 'веб студия спб', 'сделать сайт спб', 'лендинг спб', 'интернет магазин спб', 'корпоративный сайт спб', 'веб разработка спб', 'создать сайт спб', 'сайт дешево спб', 'сайт бесплатно спб', 'сайт на заказ спб', 'заказать сайт недорого спб', 'создать сайт самому спб', 'сайт под ключ недорого спб', 'itshka спб', 'сделать сайт в спб', 'создать сайт в спб'],
      en: ['website development saint petersburg', 'web development spb', 'create website spb', 'web studio spb', 'itshka spb'],
      pl: ['tworzenie stron sankt petersburg', 'strony www sankt petersburg', 'itshka sankt petersburg']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Санкт-Петербург — культурная столица России с развитым IT-сектором. Создаём сайты для петербургских компаний, сочетая эстетику культурного наследия с современными технологиями.',
        en: 'Saint Petersburg is the cultural capital of Russia with a developed IT sector. We create websites for Saint Petersburg companies, combining the aesthetics of cultural heritage with modern technologies.',
        pl: 'Sankt Petersburg to kulturalna stolica Rosji z rozwiniętym sektorem IT. Tworzymy strony internetowe dla firm z Sankt Petersburga, łącząc estetykę dziedzictwa kulturalnego z nowoczesnymi technologiami.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Санкт-Петербурге и Ленинградской области. Понимаем важность эстетики и создаём сайты, которые отражают культурное наследие города и современные бизнес-задачи.',
        en: 'We work with businesses in Saint Petersburg and Leningrad Region. We understand the importance of aesthetics and create websites that reflect the cultural heritage of the city and modern business tasks.',
        pl: 'Pracujemy z firmami w Sankt Petersburgu i obwodzie leningradzkim. Rozumiemy wagę estetyki i tworzymy strony internetowe, które odzwierciedlają dziedzictwo kulturalne miasta i nowoczesne zadania biznesowe.'
      },
      cityFeatures: {
        ru: ['Культурная эстетика', 'Опыт с IT-компаниями', 'Современные технологии', 'Уникальный дизайн'],
        en: ['Cultural aesthetics', 'Experience with IT companies', 'Modern technologies', 'Unique design'],
        pl: ['Estetyka kulturalna', 'Doświadczenie z firmami IT', 'Nowoczesne technologie', 'Unikalny design']
      }
    }
  },
  novosibirsk: {
    code: 'novosibirsk',
    name: { ru: 'Новосибирск', en: 'Novosibirsk', pl: 'Nowosybirsk' },
    nameLocative: { ru: 'Новосибирске', en: 'Novosibirsk', pl: 'Nowosybirsku' },
    region: { ru: 'Новосибирская область', en: 'Novosibirsk Region', pl: 'Obwód nowosybirski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-NVS', placename: 'Новосибирск', position: '55.0084;82.9357', ICBM: '55.0084, 82.9357' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов новосибирск', 'разработка сайтов новосибирск', 'заказать сайт новосибирск', 'сайт под ключ новосибирск', 'веб студия новосибирск', 'сделать сайт новосибирск', 'лендинг новосибирск', 'интернет магазин новосибирск', 'корпоративный сайт новосибирск', 'веб разработка новосибирск', 'создать сайт новосибирск', 'сайт дешево новосибирск', 'сайт бесплатно новосибирск', 'сайт на заказ новосибирск', 'заказать сайт недорого новосибирск', 'создать сайт самому новосибирск', 'сайт под ключ недорого новосибирск', 'itshka новосибирск', 'сделать сайт в новосибирске', 'создать сайт в новосибирске'],
      en: ['website development novosibirsk', 'web development novosibirsk', 'create website novosibirsk', 'web studio novosibirsk', 'itshka novosibirsk'],
      pl: ['tworzenie stron nowosybirsk', 'strony www nowosybirsk', 'itshka nowosybirsk']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Новосибирск — крупнейший город Сибири и важный научный центр. Создаём сайты для новосибирских компаний, учитывая специфику сибирского рынка и научно-технический потенциал региона.',
        en: 'Novosibirsk is the largest city in Siberia and an important scientific center. We create websites for Novosibirsk companies, considering the specifics of the Siberian market and the scientific and technical potential of the region.',
        pl: 'Nowosybirsk to największe miasto Syberii i ważne centrum naukowe. Tworzymy strony internetowe dla firm z Nowosybirska, uwzględniając specyfikę rynku syberyjskiego i potencjał naukowo-techniczny regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Новосибирске и Новосибирской области. Понимаем особенности сибирского рынка и создаём сайты, которые помогают компаниям эффективно работать в условиях Сибири.',
        en: 'We work with businesses in Novosibirsk and Novosibirsk Region. We understand the specifics of the Siberian market and create websites that help companies work effectively in Siberian conditions.',
        pl: 'Pracujemy z firmami w Nowosybirsku i obwodzie nowosybirskim. Rozumiemy specyfikę rynku syberyjskiego i tworzymy strony internetowe, które pomagają firmom efektywnie działać w warunkach syberyjskich.'
      },
      cityFeatures: {
        ru: ['Опыт работы в Сибири', 'Понимание регионального рынка', 'Научно-технический подход', 'Надёжные решения'],
        en: ['Experience in Siberia', 'Understanding of regional market', 'Scientific and technical approach', 'Reliable solutions'],
        pl: ['Doświadczenie w Syberii', 'Zrozumienie rynku regionalnego', 'Podejście naukowo-techniczne', 'Niezawodne rozwiązania']
      }
    }
  },
  ekaterinburg: {
    code: 'ekaterinburg',
    name: { ru: 'Екатеринбург', en: 'Yekaterinburg', pl: 'Jekaterynburg' },
    nameLocative: { ru: 'Екатеринбурге', en: 'Yekaterinburg', pl: 'Jekaterynburgu' },
    region: { ru: 'Свердловская область', en: 'Sverdlovsk Region', pl: 'Obwód swierdłowski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-SVE', placename: 'Екатеринбург', position: '56.8380;60.6056', ICBM: '56.8380, 60.6056' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов екатеринбург', 'разработка сайтов екатеринбург', 'заказать сайт екатеринбург', 'сайт под ключ екатеринбург', 'веб студия екатеринбург', 'сделать сайт екатеринбург', 'лендинг екатеринбург', 'интернет магазин екатеринбург', 'корпоративный сайт екатеринбург', 'веб разработка екатеринбург', 'создать сайт екатеринбург', 'сайт дешево екатеринбург', 'сайт бесплатно екатеринбург', 'сайт на заказ екатеринбург', 'заказать сайт недорого екатеринбург', 'создать сайт самому екатеринбург', 'сайт под ключ недорого екатеринбург', 'itshka екатеринбург', 'сделать сайт в екатеринбурге', 'создать сайт в екатеринбурге'],
      en: ['website development yekaterinburg', 'web development yekaterinburg', 'create website yekaterinburg', 'web studio yekaterinburg', 'itshka yekaterinburg'],
      pl: ['tworzenie stron jekaterynburg', 'strony www jekaterynburg', 'itshka jekaterynburg']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Екатеринбург — крупный промышленный и деловой центр Урала. Создаём сайты для екатеринбургских компаний с учётом промышленной специфики и деловой активности региона.',
        en: 'Yekaterinburg is a major industrial and business center of the Urals. We create websites for Yekaterinburg companies considering industrial specifics and business activity of the region.',
        pl: 'Jekaterynburg to ważne centrum przemysłowe i biznesowe Uralu. Tworzymy strony internetowe dla firm z Jekaterynburga, uwzględniając specyfikę przemysłową i aktywność biznesową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Екатеринбурге и Свердловской области. Понимаем особенности уральского рынка и создаём сайты, которые помогают компаниям развиваться в промышленном регионе.',
        en: 'We work with businesses in Yekaterinburg and Sverdlovsk Region. We understand the specifics of the Ural market and create websites that help companies develop in an industrial region.',
        pl: 'Pracujemy z firmami w Jekaterynburgu i obwodzie swierdłowskim. Rozumiemy specyfikę rynku uralskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w regionie przemysłowym.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Урале', 'Понимание промышленного рынка', 'Деловые решения', 'Быстрая разработка'],
        en: ['Experience in the Urals', 'Understanding of industrial market', 'Business solutions', 'Fast development'],
        pl: ['Doświadczenie na Uralu', 'Zrozumienie rynku przemysłowego', 'Rozwiązania biznesowe', 'Szybki rozwój']
      }
    }
  },
  kazan: {
    code: 'kazan',
    name: { ru: 'Казань', en: 'Kazan', pl: 'Kazań' },
    nameLocative: { ru: 'Казани', en: 'Kazan', pl: 'Kazaniu' },
    region: { ru: 'Республика Татарстан', en: 'Republic of Tatarstan', pl: 'Republika Tatarstanu' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-TA', placename: 'Казань', position: '55.7961;49.1089', ICBM: '55.7961, 49.1089' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов казань', 'разработка сайтов казань', 'заказать сайт казань', 'сайт под ключ казань', 'веб студия казань', 'сделать сайт казань', 'лендинг казань', 'интернет магазин казань', 'корпоративный сайт казань', 'веб разработка казань', 'создать сайт казань', 'сайт дешево казань', 'сайт бесплатно казань', 'сайт на заказ казань', 'заказать сайт недорого казань', 'создать сайт самому казань', 'сайт под ключ недорого казань', 'itshka казань', 'сделать сайт в казани', 'создать сайт в казани'],
      en: ['website development kazan', 'web development kazan', 'create website kazan', 'web studio kazan', 'itshka kazan'],
      pl: ['tworzenie stron kazań', 'strony www kazań', 'itshka kazań']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Казань — столица Татарстана с богатым культурным наследием и развитой экономикой. Создаём сайты для казанских компаний, учитывая многонациональный характер города и деловую активность.',
        en: 'Kazan is the capital of Tatarstan with rich cultural heritage and developed economy. We create websites for Kazan companies, considering the multinational character of the city and business activity.',
        pl: 'Kazań to stolica Tatarstanu z bogatym dziedzictwem kulturalnym i rozwiniętą gospodarką. Tworzymy strony internetowe dla firm z Kazania, uwzględniając wielonarodowy charakter miasta i aktywność biznesową.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Казани и Республике Татарстан. Понимаем особенности многонационального региона и создаём сайты, которые помогают компаниям эффективно работать в условиях культурного разнообразия.',
        en: 'We work with businesses in Kazan and the Republic of Tatarstan. We understand the specifics of a multinational region and create websites that help companies work effectively in conditions of cultural diversity.',
        pl: 'Pracujemy z firmami w Kazaniu i Republice Tatarstanu. Rozumiemy specyfikę regionu wielonarodowego i tworzymy strony internetowe, które pomagają firmom efektywnie działać w warunkach różnorodności kulturalnej.'
      },
      cityFeatures: {
        ru: ['Многонациональный подход', 'Понимание культурного контекста', 'Деловые решения', 'Современные технологии'],
        en: ['Multinational approach', 'Understanding of cultural context', 'Business solutions', 'Modern technologies'],
        pl: ['Podejście wielonarodowe', 'Zrozumienie kontekstu kulturalnego', 'Rozwiązania biznesowe', 'Nowoczesne technologie']
      }
    }
  },
  'nizhny-novgorod': {
    code: 'nizhny-novgorod',
    name: { ru: 'Нижний Новгород', en: 'Nizhny Novgorod', pl: 'Niżny Nowogród' },
    nameLocative: { ru: 'Нижнем Новгороде', en: 'Nizhny Novgorod', pl: 'Niżnym Nowogrodzie' },
    region: { ru: 'Нижегородская область', en: 'Nizhny Novgorod Region', pl: 'Obwód niżnonowogrodzki' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-NIZ', placename: 'Нижний Новгород', position: '56.3287;44.0020', ICBM: '56.3287, 44.0020' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов нижний новгород', 'разработка сайтов нижний новгород', 'заказать сайт нижний новгород', 'сайт под ключ нижний новгород', 'веб студия нижний новгород', 'сделать сайт нижний новгород', 'лендинг нижний новгород', 'интернет магазин нижний новгород', 'корпоративный сайт нижний новгород', 'веб разработка нижний новгород', 'создать сайт нижний новгород', 'сайт дешево нижний новгород', 'сайт бесплатно нижний новгород', 'сайт на заказ нижний новгород', 'заказать сайт недорого нижний новгород', 'создать сайт самому нижний новгород', 'сайт под ключ недорого нижний новгород', 'itshka нижний новгород', 'сделать сайт в нижнем новгороде', 'создать сайт в нижнем новгороде'],
      en: ['website development nizhny novgorod', 'web development nizhny novgorod', 'create website nizhny novgorod', 'web studio nizhny novgorod', 'itshka nizhny novgorod'],
      pl: ['tworzenie stron niżny nowogród', 'strony www niżny nowogród', 'itshka niżny nowogród']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Нижний Новгород — крупный промышленный и культурный центр Поволжья. Создаём сайты для нижегородских компаний с учётом промышленной специфики и культурного наследия региона.',
        en: 'Nizhny Novgorod is a major industrial and cultural center of the Volga region. We create websites for Nizhny Novgorod companies considering industrial specifics and cultural heritage of the region.',
        pl: 'Niżny Nowogród to ważne centrum przemysłowe i kulturalne regionu Wołgi. Tworzymy strony internetowe dla firm z Niżnego Nowogrodu, uwzględniając specyfikę przemysłową i dziedzictwo kulturalne regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Нижнем Новгороде и Нижегородской области. Понимаем особенности поволжского рынка и создаём сайты, которые помогают компаниям развиваться в промышленном и культурном центре.',
        en: 'We work with businesses in Nizhny Novgorod and Nizhny Novgorod Region. We understand the specifics of the Volga market and create websites that help companies develop in an industrial and cultural center.',
        pl: 'Pracujemy z firmami w Niżnym Nowogrodzie i obwodzie niżnonowogrodzkim. Rozumiemy specyfikę rynku wołżańskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum przemysłowym i kulturalnym.'
      },
      cityFeatures: {
        ru: ['Опыт работы в Поволжье', 'Понимание промышленного рынка', 'Культурный контекст', 'Надёжные решения'],
        en: ['Experience in the Volga region', 'Understanding of industrial market', 'Cultural context', 'Reliable solutions'],
        pl: ['Doświadczenie w regionie Wołgi', 'Zrozumienie rynku przemysłowego', 'Kontekst kulturalny', 'Niezawodne rozwiązania']
      }
    }
  },
  chelyabinsk: {
    code: 'chelyabinsk',
    name: { ru: 'Челябинск', en: 'Chelyabinsk', pl: 'Czelabińsk' },
    nameLocative: { ru: 'Челябинске', en: 'Chelyabinsk', pl: 'Czelabińsku' },
    region: { ru: 'Челябинская область', en: 'Chelyabinsk Region', pl: 'Obwód czelabiński' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-CHE', placename: 'Челябинск', position: '55.1540;61.4291', ICBM: '55.1540, 61.4291' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов челябинск', 'разработка сайтов челябинск', 'заказать сайт челябинск', 'сайт под ключ челябинск', 'веб студия челябинск', 'сделать сайт челябинск', 'лендинг челябинск', 'интернет магазин челябинск', 'корпоративный сайт челябинск', 'веб разработка челябинск', 'создать сайт челябинск', 'сайт дешево челябинск', 'сайт бесплатно челябинск', 'сайт на заказ челябинск', 'заказать сайт недорого челябинск', 'создать сайт самому челябинск', 'сайт под ключ недорого челябинск', 'itshka челябинск', 'сделать сайт в челябинске', 'создать сайт в челябинске'],
      en: ['website development chelyabinsk', 'web development chelyabinsk', 'create website chelyabinsk', 'web studio chelyabinsk', 'itshka chelyabinsk'],
      pl: ['tworzenie stron czelabińsk', 'strony www czelabińsk', 'itshka czelabińsk']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Челябинск — крупный промышленный центр Урала с развитой металлургией. Создаём сайты для челябинских компаний с учётом промышленной специфики и деловой активности региона.',
        en: 'Chelyabinsk is a major industrial center of the Urals with developed metallurgy. We create websites for Chelyabinsk companies considering industrial specifics and business activity of the region.',
        pl: 'Czelabińsk to ważne centrum przemysłowe Uralu z rozwiniętą metalurgią. Tworzymy strony internetowe dla firm z Czelabińska, uwzględniając specyfikę przemysłową i aktywność biznesową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Челябинске и Челябинской области. Понимаем особенности уральского промышленного рынка и создаём сайты, которые помогают компаниям эффективно работать в условиях высокой конкуренции.',
        en: 'We work with businesses in Chelyabinsk and Chelyabinsk Region. We understand the specifics of the Ural industrial market and create websites that help companies work effectively in conditions of high competition.',
        pl: 'Pracujemy z firmami w Czelabińsku i obwodzie czelabińskim. Rozumiemy specyfikę rynku przemysłowego Uralu i tworzymy strony internetowe, które pomagają firmom efektywnie działać w warunkach wysokiej konkurencji.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Урале', 'Понимание промышленного рынка', 'Металлургическая специфика', 'Быстрая разработка'],
        en: ['Experience in the Urals', 'Understanding of industrial market', 'Metallurgical specifics', 'Fast development'],
        pl: ['Doświadczenie na Uralu', 'Zrozumienie rynku przemysłowego', 'Specyfika metalurgiczna', 'Szybki rozwój']
      }
    }
  },
  samara: {
    code: 'samara',
    name: { ru: 'Самара', en: 'Samara', pl: 'Samara' },
    nameLocative: { ru: 'Самаре', en: 'Samara', pl: 'Samarze' },
    region: { ru: 'Самарская область', en: 'Samara Region', pl: 'Obwód samarski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-SAM', placename: 'Самара', position: '53.1959;50.1002', ICBM: '53.1959, 50.1002' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов самара', 'разработка сайтов самара', 'заказать сайт самара', 'сайт под ключ самара', 'веб студия самара', 'сделать сайт самара', 'лендинг самара', 'интернет магазин самара', 'корпоративный сайт самара', 'веб разработка самара', 'создать сайт самара', 'сайт дешево самара', 'сайт бесплатно самара', 'сайт на заказ самара', 'заказать сайт недорого самара', 'создать сайт самому самара', 'сайт под ключ недорого самара', 'itshka самара', 'сделать сайт в самаре', 'создать сайт в самаре'],
      en: ['website development samara', 'web development samara', 'create website samara', 'web studio samara', 'itshka samara'],
      pl: ['tworzenie stron samara', 'strony www samara', 'itshka samara']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Самара — крупный промышленный и культурный центр Поволжья. Создаём сайты для самарских компаний с учётом промышленной специфики и культурного наследия региона.',
        en: 'Samara is a major industrial and cultural center of the Volga region. We create websites for Samara companies considering industrial specifics and cultural heritage of the region.',
        pl: 'Samara to ważne centrum przemysłowe i kulturalne regionu Wołgi. Tworzymy strony internetowe dla firm z Samary, uwzględniając specyfikę przemysłową i dziedzictwo kulturalne regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Самаре и Самарской области. Понимаем особенности поволжского рынка и создаём сайты, которые помогают компаниям развиваться в промышленном и культурном центре.',
        en: 'We work with businesses in Samara and Samara Region. We understand the specifics of the Volga market and create websites that help companies develop in an industrial and cultural center.',
        pl: 'Pracujemy z firmami w Samarze i obwodzie samarskim. Rozumiemy specyfikę rynku wołżańskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum przemysłowym i kulturalnym.'
      },
      cityFeatures: {
        ru: ['Опыт работы в Поволжье', 'Понимание промышленного рынка', 'Культурный контекст', 'Надёжные решения'],
        en: ['Experience in the Volga region', 'Understanding of industrial market', 'Cultural context', 'Reliable solutions'],
        pl: ['Doświadczenie w regionie Wołgi', 'Zrozumienie rynku przemysłowego', 'Kontekst kulturalny', 'Niezawodne rozwiązania']
      }
    }
  },
  omsk: {
    code: 'omsk',
    name: { ru: 'Омск', en: 'Omsk', pl: 'Omsk' },
    nameLocative: { ru: 'Омске', en: 'Omsk', pl: 'Omsku' },
    region: { ru: 'Омская область', en: 'Omsk Region', pl: 'Obwód omski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-OMS', placename: 'Омск', position: '54.9924;73.3686', ICBM: '54.9924, 73.3686' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов омск', 'разработка сайтов омск', 'заказать сайт омск', 'сайт под ключ омск', 'веб студия омск', 'сделать сайт омск', 'лендинг омск', 'интернет магазин омск', 'корпоративный сайт омск', 'веб разработка омск', 'создать сайт омск', 'сайт дешево омск', 'сайт бесплатно омск', 'сайт на заказ омск', 'заказать сайт недорого омск', 'создать сайт самому омск', 'сайт под ключ недорого омск', 'itshka омск', 'сделать сайт в омске', 'создать сайт в омске'],
      en: ['website development omsk', 'web development omsk', 'create website omsk', 'web studio omsk', 'itshka omsk'],
      pl: ['tworzenie stron omsk', 'strony www omsk', 'itshka omsk']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Омск — крупный промышленный и транспортный центр Сибири. Создаём сайты для омских компаний с учётом промышленной специфики и транспортной логистики региона.',
        en: 'Omsk is a major industrial and transport center of Siberia. We create websites for Omsk companies considering industrial specifics and transport logistics of the region.',
        pl: 'Omsk to ważne centrum przemysłowe i transportowe Syberii. Tworzymy strony internetowe dla firm z Omska, uwzględniając specyfikę przemysłową i logistykę transportową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Омске и Омской области. Понимаем особенности сибирского рынка и создаём сайты, которые помогают компаниям эффективно работать в условиях транспортной логистики Сибири.',
        en: 'We work with businesses in Omsk and Omsk Region. We understand the specifics of the Siberian market and create websites that help companies work effectively in conditions of transport logistics in Siberia.',
        pl: 'Pracujemy z firmami w Omsku i obwodzie omskim. Rozumiemy specyfikę rynku syberyjskiego i tworzymy strony internetowe, które pomagają firmom efektywnie działać w warunkach logistyki transportowej w Syberii.'
      },
      cityFeatures: {
        ru: ['Опыт работы в Сибири', 'Понимание транспортной логистики', 'Промышленные решения', 'Надёжная поддержка'],
        en: ['Experience in Siberia', 'Understanding of transport logistics', 'Industrial solutions', 'Reliable support'],
        pl: ['Doświadczenie w Syberii', 'Zrozumienie logistyki transportowej', 'Rozwiązania przemysłowe', 'Niezawodne wsparcie']
      }
    }
  },
  'rostov-on-don': {
    code: 'rostov-on-don',
    name: { ru: 'Ростов-на-Дону', en: 'Rostov-on-Don', pl: 'Rostów nad Donem' },
    nameLocative: { ru: 'Ростове-на-Дону', en: 'Rostov-on-Don', pl: 'Rostowie nad Donem' },
    region: { ru: 'Ростовская область', en: 'Rostov Region', pl: 'Obwód rostowski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-ROS', placename: 'Ростов-на-Дону', position: '47.2357;39.7015', ICBM: '47.2357, 39.7015' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов ростов-на-дону', 'разработка сайтов ростов', 'заказать сайт ростов', 'сайт под ключ ростов', 'веб студия ростов', 'сделать сайт ростов', 'лендинг ростов', 'интернет магазин ростов', 'корпоративный сайт ростов', 'веб разработка ростов', 'создать сайт ростов', 'сайт дешево ростов', 'сайт бесплатно ростов', 'сайт на заказ ростов', 'заказать сайт недорого ростов', 'создать сайт самому ростов', 'сайт под ключ недорого ростов', 'itshka ростов', 'сделать сайт в ростове-на-дону', 'создать сайт в ростове-на-дону'],
      en: ['website development rostov-on-don', 'web development rostov', 'create website rostov', 'web studio rostov', 'itshka rostov'],
      pl: ['tworzenie stron rostów nad donem', 'strony www rostów', 'itshka rostów']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Ростов-на-Дону — крупный деловой и культурный центр Юга России. Создаём сайты для ростовских компаний с учётом деловой активности и культурного наследия региона.',
        en: 'Rostov-on-Don is a major business and cultural center of the South of Russia. We create websites for Rostov companies considering business activity and cultural heritage of the region.',
        pl: 'Rostów nad Donem to ważne centrum biznesowe i kulturalne Południa Rosji. Tworzymy strony internetowe dla firm z Rostowa, uwzględniając aktywność biznesową i dziedzictwo kulturalne regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Ростове-на-Дону и Ростовской области. Понимаем особенности южного рынка и создаём сайты, которые помогают компаниям развиваться в деловом и культурном центре Юга России.',
        en: 'We work with businesses in Rostov-on-Don and Rostov Region. We understand the specifics of the southern market and create websites that help companies develop in a business and cultural center of the South of Russia.',
        pl: 'Pracujemy z firmami w Rostowie nad Donem i obwodzie rostowskim. Rozumiemy specyfikę rynku południowego i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum biznesowym i kulturalnym Południa Rosji.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Юге России', 'Понимание делового рынка', 'Культурный контекст', 'Современные решения'],
        en: ['Experience in the South of Russia', 'Understanding of business market', 'Cultural context', 'Modern solutions'],
        pl: ['Doświadczenie na Południu Rosji', 'Zrozumienie rynku biznesowego', 'Kontekst kulturalny', 'Nowoczesne rozwiązania']
      }
    }
  },
  ufa: {
    code: 'ufa',
    name: { ru: 'Уфа', en: 'Ufa', pl: 'Ufa' },
    nameLocative: { ru: 'Уфе', en: 'Ufa', pl: 'Ufie' },
    region: { ru: 'Республика Башкортостан', en: 'Republic of Bashkortostan', pl: 'Republika Baszkortostanu' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-BA', placename: 'Уфа', position: '54.7352;55.9587', ICBM: '54.7352, 55.9587' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов уфа', 'разработка сайтов уфа', 'заказать сайт уфа', 'сайт под ключ уфа', 'веб студия уфа', 'сделать сайт уфа', 'лендинг уфа', 'интернет магазин уфа', 'корпоративный сайт уфа', 'веб разработка уфа', 'создать сайт уфа', 'сайт дешево уфа', 'сайт бесплатно уфа', 'сайт на заказ уфа', 'заказать сайт недорого уфа', 'создать сайт самому уфа', 'сайт под ключ недорого уфа', 'itshka уфа', 'сделать сайт в уфе', 'создать сайт в уфе'],
      en: ['website development ufa', 'web development ufa', 'create website ufa', 'web studio ufa', 'itshka ufa'],
      pl: ['tworzenie stron ufa', 'strony www ufa', 'itshka ufa']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Уфа — столица Башкортостана с развитой промышленностью и многонациональной культурой. Создаём сайты для уфимских компаний с учётом промышленной специфики и культурного разнообразия региона.',
        en: 'Ufa is the capital of Bashkortostan with developed industry and multinational culture. We create websites for Ufa companies considering industrial specifics and cultural diversity of the region.',
        pl: 'Ufa to stolica Baszkortostanu z rozwiniętym przemysłem i wielonarodową kulturą. Tworzymy strony internetowe dla firm z Ufy, uwzględniając specyfikę przemysłową i różnorodność kulturalną regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Уфе и Республике Башкортостан. Понимаем особенности многонационального региона и создаём сайты, которые помогают компаниям эффективно работать в условиях культурного разнообразия.',
        en: 'We work with businesses in Ufa and the Republic of Bashkortostan. We understand the specifics of a multinational region and create websites that help companies work effectively in conditions of cultural diversity.',
        pl: 'Pracujemy z firmami w Ufie i Republice Baszkortostanu. Rozumiemy specyfikę regionu wielonarodowego i tworzymy strony internetowe, które pomagają firmom efektywnie działać w warunkach różnorodności kulturalnej.'
      },
      cityFeatures: {
        ru: ['Многонациональный подход', 'Понимание промышленного рынка', 'Культурное разнообразие', 'Надёжные решения'],
        en: ['Multinational approach', 'Understanding of industrial market', 'Cultural diversity', 'Reliable solutions'],
        pl: ['Podejście wielonarodowe', 'Zrozumienie rynku przemysłowego', 'Różnorodność kulturalna', 'Niezawodne rozwiązania']
      }
    }
  },
  krasnoyarsk: {
    code: 'krasnoyarsk',
    name: { ru: 'Красноярск', en: 'Krasnoyarsk', pl: 'Krasnojarsk' },
    nameLocative: { ru: 'Красноярске', en: 'Krasnoyarsk', pl: 'Krasnojarsku' },
    region: { ru: 'Красноярский край', en: 'Krasnoyarsk Krai', pl: 'Kraj Krasnojarski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-KYA', placename: 'Красноярск', position: '56.0184;92.8672', ICBM: '56.0184, 92.8672' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов красноярск', 'разработка сайтов красноярск', 'заказать сайт красноярск', 'сайт под ключ красноярск', 'веб студия красноярск', 'сделать сайт красноярск', 'лендинг красноярск', 'интернет магазин красноярск', 'корпоративный сайт красноярск', 'веб разработка красноярск', 'создать сайт красноярск', 'сайт дешево красноярск', 'сайт бесплатно красноярск', 'сайт на заказ красноярск', 'заказать сайт недорого красноярск', 'создать сайт самому красноярск', 'сайт под ключ недорого красноярск', 'itshka красноярск', 'сделать сайт в красноярске', 'создать сайт в красноярске'],
      en: ['website development krasnoyarsk', 'web development krasnoyarsk', 'create website krasnoyarsk', 'web studio krasnoyarsk', 'itshka krasnoyarsk'],
      pl: ['tworzenie stron krasnojarsk', 'strony www krasnojarsk', 'itshka krasnojarsk']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Красноярск — крупный промышленный и научный центр Сибири. Создаём сайты для красноярских компаний с учётом промышленной специфики и научно-технического потенциала региона.',
        en: 'Krasnoyarsk is a major industrial and scientific center of Siberia. We create websites for Krasnoyarsk companies considering industrial specifics and scientific and technical potential of the region.',
        pl: 'Krasnojarsk to ważne centrum przemysłowe i naukowe Syberii. Tworzymy strony internetowe dla firm z Krasnojarska, uwzględniając specyfikę przemysłową i potencjał naukowo-techniczny regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Красноярске и Красноярском крае. Понимаем особенности сибирского рынка и создаём сайты, которые помогают компаниям эффективно работать в условиях промышленного и научного центра Сибири.',
        en: 'We work with businesses in Krasnoyarsk and Krasnoyarsk Krai. We understand the specifics of the Siberian market and create websites that help companies work effectively in conditions of an industrial and scientific center in Siberia.',
        pl: 'Pracujemy z firmami w Krasnojarsku i Kraju Krasnojarskim. Rozumiemy specyfikę rynku syberyjskiego i tworzymy strony internetowe, które pomagają firmom efektywnie działać w warunkach centrum przemysłowego i naukowego w Syberii.'
      },
      cityFeatures: {
        ru: ['Опыт работы в Сибири', 'Понимание промышленного рынка', 'Научно-технический подход', 'Надёжные решения'],
        en: ['Experience in Siberia', 'Understanding of industrial market', 'Scientific and technical approach', 'Reliable solutions'],
        pl: ['Doświadczenie w Syberii', 'Zrozumienie rynku przemysłowego', 'Podejście naukowo-techniczne', 'Niezawodne rozwiązania']
      }
    }
  },
  voronezh: {
    code: 'voronezh',
    name: { ru: 'Воронеж', en: 'Voronezh', pl: 'Woroneż' },
    nameLocative: { ru: 'Воронеже', en: 'Voronezh', pl: 'Woroneżu' },
    region: { ru: 'Воронежская область', en: 'Voronezh Region', pl: 'Obwód woroneski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-VOR', placename: 'Воронеж', position: '51.6608;39.2003', ICBM: '51.6608, 39.2003' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов воронеж', 'разработка сайтов воронеж', 'заказать сайт воронеж', 'сайт под ключ воронеж', 'веб студия воронеж', 'сделать сайт воронеж', 'лендинг воронеж', 'интернет магазин воронеж', 'корпоративный сайт воронеж', 'веб разработка воронеж', 'создать сайт воронеж', 'сайт дешево воронеж', 'сайт бесплатно воронеж', 'сайт на заказ воронеж', 'заказать сайт недорого воронеж', 'создать сайт самому воронеж', 'сайт под ключ недорого воронеж', 'itshka воронеж', 'сделать сайт в воронеже', 'создать сайт в воронеже'],
      en: ['website development voronezh', 'web development voronezh', 'create website voronezh', 'web studio voronezh', 'itshka voronezh'],
      pl: ['tworzenie stron woroneż', 'strony www woroneż', 'itshka woroneż']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Воронеж — крупный промышленный и научный центр Центральной России. Создаём сайты для воронежских компаний с учётом промышленной специфики и научно-технического потенциала региона.',
        en: 'Voronezh is a major industrial and scientific center of Central Russia. We create websites for Voronezh companies considering industrial specifics and scientific and technical potential of the region.',
        pl: 'Woroneż to ważne centrum przemysłowe i naukowe Centralnej Rosji. Tworzymy strony internetowe dla firm z Woroneża, uwzględniając specyfikę przemysłową i potencjał naukowo-techniczny regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Воронеже и Воронежской области. Понимаем особенности центрального рынка и создаём сайты, которые помогают компаниям эффективно работать в условиях промышленного и научного центра.',
        en: 'We work with businesses in Voronezh and Voronezh Region. We understand the specifics of the central market and create websites that help companies work effectively in conditions of an industrial and scientific center.',
        pl: 'Pracujemy z firmami w Woroneżu i obwodzie woroneskim. Rozumiemy specyfikę rynku centralnego i tworzymy strony internetowe, które pomagają firmom efektywnie działać w warunkach centrum przemysłowego i naukowego.'
      },
      cityFeatures: {
        ru: ['Опыт работы в Центральной России', 'Понимание промышленного рынка', 'Научно-технический подход', 'Современные решения'],
        en: ['Experience in Central Russia', 'Understanding of industrial market', 'Scientific and technical approach', 'Modern solutions'],
        pl: ['Doświadczenie w Centralnej Rosji', 'Zrozumienie rynku przemysłowego', 'Podejście naukowo-techniczne', 'Nowoczesne rozwiązania']
      }
    }
  },
  perm: {
    code: 'perm',
    name: { ru: 'Пермь', en: 'Perm', pl: 'Perm' },
    nameLocative: { ru: 'Перми', en: 'Perm', pl: 'Permie' },
    region: { ru: 'Пермский край', en: 'Perm Krai', pl: 'Kraj Permski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-PER', placename: 'Пермь', position: '58.0105;56.2502', ICBM: '58.0105, 56.2502' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов пермь', 'разработка сайтов пермь', 'заказать сайт пермь', 'сайт под ключ пермь', 'веб студия пермь', 'сделать сайт пермь', 'лендинг пермь', 'интернет магазин пермь', 'корпоративный сайт пермь', 'веб разработка пермь', 'создать сайт пермь', 'сайт дешево пермь', 'сайт бесплатно пермь', 'сайт на заказ пермь', 'заказать сайт недорого пермь', 'создать сайт самому пермь', 'сайт под ключ недорого пермь', 'itshka пермь', 'сделать сайт в перми', 'создать сайт в перми'],
      en: ['website development perm', 'web development perm', 'create website perm', 'web studio perm', 'itshka perm'],
      pl: ['tworzenie stron perm', 'strony www perm', 'itshka perm']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Пермь — крупный промышленный и культурный центр Урала. Создаём сайты для пермских компаний с учётом промышленной специфики и культурного наследия региона.',
        en: 'Perm is a major industrial and cultural center of the Urals. We create websites for Perm companies considering industrial specifics and cultural heritage of the region.',
        pl: 'Perm to ważne centrum przemysłowe i kulturalne Uralu. Tworzymy strony internetowe dla firm z Permu, uwzględniając specyfikę przemysłową i dziedzictwo kulturalne regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Перми и Пермском крае. Понимаем особенности уральского рынка и создаём сайты, которые помогают компаниям развиваться в промышленном и культурном центре.',
        en: 'We work with businesses in Perm and Perm Krai. We understand the specifics of the Ural market and create websites that help companies develop in an industrial and cultural center.',
        pl: 'Pracujemy z firmami w Permie i Kraju Permskim. Rozumiemy specyfikę rynku uralskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum przemysłowym i kulturalnym.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Урале', 'Понимание промышленного рынка', 'Культурный контекст', 'Надёжные решения'],
        en: ['Experience in the Urals', 'Understanding of industrial market', 'Cultural context', 'Reliable solutions'],
        pl: ['Doświadczenie na Uralu', 'Zrozumienie rynku przemysłowego', 'Kontekst kulturalny', 'Niezawodne rozwiązania']
      }
    }
  },
  volgograd: {
    code: 'volgograd',
    name: { ru: 'Волгоград', en: 'Volgograd', pl: 'Wołgograd' },
    nameLocative: { ru: 'Волгограде', en: 'Volgograd', pl: 'Wołgogradzie' },
    region: { ru: 'Волгоградская область', en: 'Volgograd Region', pl: 'Obwód wołgogradzki' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'RU-VGG', placename: 'Волгоград', position: '48.7071;44.5170', ICBM: '48.7071, 44.5170' },
    countryCode: 'RU',
    keywords: {
      ru: ['создание сайтов волгоград', 'разработка сайтов волгоград', 'заказать сайт волгоград', 'сайт под ключ волгоград', 'веб студия волгоград', 'сделать сайт волгоград', 'лендинг волгоград', 'интернет магазин волгоград', 'корпоративный сайт волгоград', 'веб разработка волгоград', 'создать сайт волгоград', 'сайт дешево волгоград', 'сайт бесплатно волгоград', 'сайт на заказ волгоград', 'заказать сайт недорого волгоград', 'создать сайт самому волгоград', 'сайт под ключ недорого волгоград', 'itshka волгоград', 'сделать сайт в волгограде', 'создать сайт в волгограде'],
      en: ['website development volgograd', 'web development volgograd', 'create website volgograd', 'web studio volgograd', 'itshka volgograd'],
      pl: ['tworzenie stron wołgograd', 'strony www wołgograd', 'itshka wołgograd']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Волгоград — крупный промышленный и исторический центр Юга России. Создаём сайты для волгоградских компаний с учётом промышленной специфики и исторического наследия региона.',
        en: 'Volgograd is a major industrial and historical center of the South of Russia. We create websites for Volgograd companies considering industrial specifics and historical heritage of the region.',
        pl: 'Wołgograd to ważne centrum przemysłowe i historyczne Południa Rosji. Tworzymy strony internetowe dla firm z Wołgogradu, uwzględniając specyfikę przemysłową i dziedzictwo historyczne regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Волгограде и Волгоградской области. Понимаем особенности южного рынка и создаём сайты, которые помогают компаниям развиваться в промышленном и историческом центре Юга России.',
        en: 'We work with businesses in Volgograd and Volgograd Region. We understand the specifics of the southern market and create websites that help companies develop in an industrial and historical center of the South of Russia.',
        pl: 'Pracujemy z firmami w Wołgogradzie i obwodzie wołgogradzkim. Rozumiemy specyfikę rynku południowego i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum przemysłowym i historycznym Południa Rosji.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Юге России', 'Понимание промышленного рынка', 'Исторический контекст', 'Надёжные решения'],
        en: ['Experience in the South of Russia', 'Understanding of industrial market', 'Historical context', 'Reliable solutions'],
        pl: ['Doświadczenie na Południu Rosji', 'Zrozumienie rynku przemysłowego', 'Kontekst historyczny', 'Niezawodne rozwiązania']
      }
    }
  },
  almaty: {
    code: 'almaty',
    name: { ru: 'Алматы', en: 'Almaty', pl: 'Ałmaty' },
    nameLocative: { ru: 'Алматы', en: 'Almaty', pl: 'Ałmatach' },
    region: { ru: 'Алматинская область', en: 'Almaty Region', pl: 'Obwód ałmacki' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-ALM', placename: 'Алматы', position: '43.2220;76.8512', ICBM: '43.2220, 76.8512' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов алматы', 'разработка сайтов алматы', 'заказать сайт алматы', 'сайт под ключ алматы', 'веб студия алматы', 'сделать сайт алматы', 'лендинг алматы', 'интернет магазин алматы', 'корпоративный сайт алматы', 'веб разработка алматы', 'создать сайт алматы', 'сайт дешево алматы', 'сайт бесплатно алматы', 'сайт на заказ алматы', 'заказать сайт недорого алматы', 'создать сайт самому алматы', 'сайт под ключ недорого алматы', 'itshka алматы', 'сделать сайт в алматы', 'создать сайт в алматы'],
      en: ['website development almaty', 'web development almaty', 'create website almaty', 'web studio almaty', 'itshka almaty'],
      pl: ['tworzenie stron ałmaty', 'strony www ałmaty', 'itshka ałmaty']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Алматы — крупнейший мегаполис Казахстана и деловой центр Центральной Азии. Создаём сайты для алматинских компаний с учётом динамичного развития города и международного бизнес-климата.',
        en: 'Almaty is the largest metropolis of Kazakhstan and the business center of Central Asia. We create websites for Almaty companies considering the dynamic development of the city and international business climate.',
        pl: 'Ałmaty to największa metropolia Kazachstanu i centrum biznesowe Azji Środkowej. Tworzymy strony internetowe dla firm z Ałmat, uwzględniając dynamiczny rozwój miasta i międzynarodowy klimat biznesowy.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Алматы и Алматинской области. Понимаем особенности казахстанского рынка и создаём сайты, которые помогают компаниям развиваться в крупнейшем экономическом центре страны.',
        en: 'We work with businesses in Almaty and Almaty Region. We understand the specifics of the Kazakhstani market and create websites that help companies develop in the largest economic center of the country.',
        pl: 'Pracujemy z firmami w Ałmatach i obwodzie ałmackim. Rozumiemy specyfikę rynku kazachstańskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w największym centrum gospodarczym kraju.'
      },
      cityFeatures: {
        ru: ['Опыт работы в Казахстане', 'Понимание центральноазиатского рынка', 'Международный подход', 'Современные технологии'],
        en: ['Experience in Kazakhstan', 'Understanding of Central Asian market', 'International approach', 'Modern technologies'],
        pl: ['Doświadczenie w Kazachstanie', 'Zrozumienie rynku środkowoazjatyckiego', 'Podejście międzynarodowe', 'Nowoczesne technologie']
      }
    }
  },
  'nur-sultan': {
    code: 'nur-sultan',
    name: { ru: 'Нур-Султан', en: 'Nur-Sultan', pl: 'Nur-Sułtan' },
    nameLocative: { ru: 'Нур-Султане', en: 'Nur-Sultan', pl: 'Nur-Sułtanie' },
    region: { ru: 'Акмолинская область', en: 'Akmola Region', pl: 'Obwód akmolski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-AKM', placename: 'Нур-Султан', position: '51.1694;71.4491', ICBM: '51.1694, 71.4491' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов нур-султан', 'разработка сайтов астана', 'заказать сайт нур-султан', 'сайт под ключ астана', 'веб студия нур-султан', 'сделать сайт астана', 'лендинг нур-султан', 'интернет магазин астана', 'корпоративный сайт нур-султан', 'веб разработка астана', 'создать сайт астана', 'сайт дешево нур-султан', 'сайт бесплатно астана', 'сайт на заказ нур-султан', 'заказать сайт недорого астана', 'создать сайт самому нур-султан', 'сайт под ключ недорого астана', 'itshka нур-султан', 'сделать сайт в нур-султане', 'создать сайт в астане'],
      en: ['website development nur-sultan', 'web development astana', 'create website nur-sultan', 'web studio nur-sultan', 'itshka nur-sultan'],
      pl: ['tworzenie stron nur-sułtan', 'strony www nur-sułtan', 'itshka nur-sułtan']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Нур-Султан — столица Казахстана и современный административный центр. Создаём сайты для столичных компаний с учётом государственного сектора и инновационных проектов.',
        en: 'Nur-Sultan is the capital of Kazakhstan and a modern administrative center. We create websites for capital companies considering the public sector and innovative projects.',
        pl: 'Nur-Sułtan to stolica Kazachstanu i nowoczesne centrum administracyjne. Tworzymy strony internetowe dla firm stołecznych, uwzględniając sektor publiczny i projekty innowacyjne.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Нур-Султане и Акмолинской области. Понимаем специфику столичного рынка и создаём сайты, которые помогают компаниям работать с государственными структурами и крупными проектами.',
        en: 'We work with businesses in Nur-Sultan and Akmola Region. We understand the specifics of the capital market and create websites that help companies work with government structures and large projects.',
        pl: 'Pracujemy z firmami w Nur-Sułtanie i obwodzie akmolskim. Rozumiemy specyfikę rynku stołecznego i tworzymy strony internetowe, które pomagają firmom współpracować ze strukturami rządowymi i dużymi projektami.'
      },
      cityFeatures: {
        ru: ['Столичный уровень', 'Опыт с госсектором', 'Инновационные решения', 'Административный контекст'],
        en: ['Capital level', 'Experience with public sector', 'Innovative solutions', 'Administrative context'],
        pl: ['Poziom stołeczny', 'Doświadczenie z sektorem publicznym', 'Innowacyjne rozwiązania', 'Kontekst administracyjny']
      }
    }
  },
  shymkent: {
    code: 'shymkent',
    name: { ru: 'Шымкент', en: 'Shymkent', pl: 'Szymkent' },
    nameLocative: { ru: 'Шымкенте', en: 'Shymkent', pl: 'Szymkencie' },
    region: { ru: 'Туркестанская область', en: 'Turkestan Region', pl: 'Obwód turkiestański' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-TUR', placename: 'Шымкент', position: '42.3419;69.5901', ICBM: '42.3419, 69.5901' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов шымкент', 'разработка сайтов шымкент', 'заказать сайт шымкент', 'сайт под ключ шымкент', 'веб студия шымкент', 'сделать сайт шымкент', 'лендинг шымкент', 'интернет магазин шымкент', 'корпоративный сайт шымкент', 'веб разработка шымкент', 'создать сайт шымкент', 'сайт дешево шымкент', 'сайт бесплатно шымкент', 'сайт на заказ шымкент', 'заказать сайт недорого шымкент', 'создать сайт самому шымкент', 'сайт под ключ недорого шымкент', 'itshka шымкент', 'сделать сайт в шымкенте', 'создать сайт в шымкенте'],
      en: ['website development shymkent', 'web development shymkent', 'create website shymkent', 'web studio shymkent', 'itshka shymkent'],
      pl: ['tworzenie stron szymkent', 'strony www szymkent', 'itshka szymkent']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Шымкент — третий по величине город Казахстана с богатой историей и развитой промышленностью. Создаём сайты для шымкентских компаний с учётом промышленной специфики и культурного наследия региона.',
        en: 'Shymkent is the third largest city in Kazakhstan with rich history and developed industry. We create websites for Shymkent companies considering industrial specifics and cultural heritage of the region.',
        pl: 'Szymkent to trzecie co do wielkości miasto w Kazachstanie z bogatą historią i rozwiniętym przemysłem. Tworzymy strony internetowe dla firm z Szymkentu, uwzględniając specyfikę przemysłową i dziedzictwo kulturalne regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Шымкенте и Туркестанской области. Понимаем особенности южного рынка Казахстана и создаём сайты, которые помогают компаниям развиваться в промышленном и культурном центре.',
        en: 'We work with businesses in Shymkent and Turkestan Region. We understand the specifics of the southern market of Kazakhstan and create websites that help companies develop in an industrial and cultural center.',
        pl: 'Pracujemy z firmami w Szymkencie i obwodzie turkiestańskim. Rozumiemy specyfikę rynku południowego Kazachstanu i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum przemysłowym i kulturalnym.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Юге Казахстана', 'Понимание промышленного рынка', 'Культурный контекст', 'Надёжные решения'],
        en: ['Experience in South Kazakhstan', 'Understanding of industrial market', 'Cultural context', 'Reliable solutions'],
        pl: ['Doświadczenie na Południu Kazachstanu', 'Zrozumienie rynku przemysłowego', 'Kontekst kulturalny', 'Niezawodne rozwiązania']
      }
    }
  },
  karaganda: {
    code: 'karaganda',
    name: { ru: 'Караганда', en: 'Karaganda', pl: 'Karaganda' },
    nameLocative: { ru: 'Караганде', en: 'Karaganda', pl: 'Karagandzie' },
    region: { ru: 'Карагандинская область', en: 'Karaganda Region', pl: 'Obwód karagandyjski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-KAR', placename: 'Караганда', position: '49.8014;73.1024', ICBM: '49.8014, 73.1024' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов караганда', 'разработка сайтов караганда', 'заказать сайт караганда', 'сайт под ключ караганда', 'веб студия караганда', 'сделать сайт караганда', 'лендинг караганда', 'интернет магазин караганда', 'корпоративный сайт караганда', 'веб разработка караганда', 'создать сайт караганда', 'сайт дешево караганда', 'сайт бесплатно караганда', 'сайт на заказ караганда', 'заказать сайт недорого караганда', 'создать сайт самому караганда', 'сайт под ключ недорого караганда', 'itshka караганда', 'сделать сайт в караганде', 'создать сайт в караганде'],
      en: ['website development karaganda', 'web development karaganda', 'create website karaganda', 'web studio karaganda', 'itshka karaganda'],
      pl: ['tworzenie stron karaganda', 'strony www karaganda', 'itshka karaganda']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Караганда — крупный промышленный центр Казахстана с развитой угольной и металлургической отраслью. Создаём сайты для карагандинских компаний с учётом промышленной специфики и деловой активности региона.',
        en: 'Karaganda is a major industrial center of Kazakhstan with developed coal and metallurgical industry. We create websites for Karaganda companies considering industrial specifics and business activity of the region.',
        pl: 'Karaganda to ważne centrum przemysłowe Kazachstanu z rozwiniętym przemysłem węglowym i metalurgicznym. Tworzymy strony internetowe dla firm z Karagandy, uwzględniając specyfikę przemysłową i aktywność biznesową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Караганде и Карагандинской области. Понимаем особенности промышленного рынка Центрального Казахстана и создаём сайты, которые помогают компаниям эффективно работать в условиях промышленного региона.',
        en: 'We work with businesses in Karaganda and Karaganda Region. We understand the specifics of the industrial market of Central Kazakhstan and create websites that help companies work effectively in an industrial region.',
        pl: 'Pracujemy z firmami w Karagandzie i obwodzie karagandyjskim. Rozumiemy specyfikę rynku przemysłowego Centralnego Kazachstanu i tworzymy strony internetowe, które pomagają firmom efektywnie działać w regionie przemysłowym.'
      },
      cityFeatures: {
        ru: ['Опыт работы в Центральном Казахстане', 'Понимание промышленного рынка', 'Металлургическая специфика', 'Быстрая разработка'],
        en: ['Experience in Central Kazakhstan', 'Understanding of industrial market', 'Metallurgical specifics', 'Fast development'],
        pl: ['Doświadczenie w Centralnym Kazachstanie', 'Zrozumienie rynku przemysłowego', 'Specyfika metalurgiczna', 'Szybki rozwój']
      }
    }
  },
  aktobe: {
    code: 'aktobe',
    name: { ru: 'Актобе', en: 'Aktobe', pl: 'Aktobe' },
    nameLocative: { ru: 'Актобе', en: 'Aktobe', pl: 'Aktobe' },
    region: { ru: 'Актюбинская область', en: 'Aktobe Region', pl: 'Obwód aktobijski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-AKT', placename: 'Актобе', position: '50.2833;57.1667', ICBM: '50.2833, 57.1667' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов актобе', 'разработка сайтов актобе', 'заказать сайт актобе', 'сайт под ключ актобе', 'веб студия актобе', 'сделать сайт актобе', 'лендинг актобе', 'интернет магазин актобе', 'корпоративный сайт актобе', 'веб разработка актобе', 'создать сайт актобе', 'сайт дешево актобе', 'сайт бесплатно актобе', 'сайт на заказ актобе', 'заказать сайт недорого актобе', 'создать сайт самому актобе', 'сайт под ключ недорого актобе', 'itshka актобе', 'сделать сайт в актобе', 'создать сайт в актобе'],
      en: ['website development aktobe', 'web development aktobe', 'create website aktobe', 'web studio aktobe', 'itshka aktobe'],
      pl: ['tworzenie stron aktobe', 'strony www aktobe', 'itshka aktobe']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Актобе — крупный промышленный центр Западного Казахстана с развитой нефтегазовой отраслью. Создаём сайты для актюбинских компаний с учётом энергетической специфики и деловой активности региона.',
        en: 'Aktobe is a major industrial center of Western Kazakhstan with developed oil and gas industry. We create websites for Aktobe companies considering energy specifics and business activity of the region.',
        pl: 'Aktobe to ważne centrum przemysłowe Zachodniego Kazachstanu z rozwiniętym przemysłem naftowo-gazowym. Tworzymy strony internetowe dla firm z Aktobe, uwzględniając specyfikę energetyczną i aktywność biznesową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Актобе и Актюбинской области. Понимаем особенности энергетического рынка Западного Казахстана и создаём сайты, которые помогают компаниям развиваться в нефтегазовом регионе.',
        en: 'We work with businesses in Aktobe and Aktobe Region. We understand the specifics of the energy market of Western Kazakhstan and create websites that help companies develop in an oil and gas region.',
        pl: 'Pracujemy z firmami w Aktobe i obwodzie aktobijskim. Rozumiemy specyfikę rynku energetycznego Zachodniego Kazachstanu i tworzymy strony internetowe, które pomagają firmom rozwijać się w regionie naftowo-gazowym.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Западе Казахстана', 'Понимание энергетического рынка', 'Нефтегазовая специфика', 'Надёжные решения'],
        en: ['Experience in Western Kazakhstan', 'Understanding of energy market', 'Oil and gas specifics', 'Reliable solutions'],
        pl: ['Doświadczenie na Zachodzie Kazachstanu', 'Zrozumienie rynku energetycznego', 'Specyfika naftowo-gazowa', 'Niezawodne rozwiązania']
      }
    }
  },
  taraz: {
    code: 'taraz',
    name: { ru: 'Тараз', en: 'Taraz', pl: 'Taraz' },
    nameLocative: { ru: 'Таразе', en: 'Taraz', pl: 'Tarazie' },
    region: { ru: 'Жамбылская область', en: 'Zhambyl Region', pl: 'Obwód żambylski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-ZHA', placename: 'Тараз', position: '42.9000;71.3667', ICBM: '42.9000, 71.3667' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов тараз', 'разработка сайтов тараз', 'заказать сайт тараз', 'сайт под ключ тараз', 'веб студия тараз', 'сделать сайт тараз', 'лендинг тараз', 'интернет магазин тараз', 'корпоративный сайт тараз', 'веб разработка тараз', 'создать сайт тараз', 'сайт дешево тараз', 'сайт бесплатно тараз', 'сайт на заказ тараз', 'заказать сайт недорого тараз', 'создать сайт самому тараз', 'сайт под ключ недорого тараз', 'itshka тараз', 'сделать сайт в таразе', 'создать сайт в таразе'],
      en: ['website development taraz', 'web development taraz', 'create website taraz', 'web studio taraz', 'itshka taraz'],
      pl: ['tworzenie stron taraz', 'strony www taraz', 'itshka taraz']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Тараз — древний город с богатой историей и развитой промышленностью. Создаём сайты для таразских компаний с учётом исторического наследия и промышленной специфики региона.',
        en: 'Taraz is an ancient city with rich history and developed industry. We create websites for Taraz companies considering historical heritage and industrial specifics of the region.',
        pl: 'Taraz to starożytne miasto z bogatą historią i rozwiniętym przemysłem. Tworzymy strony internetowe dla firm z Tarazu, uwzględniając dziedzictwo historyczne i specyfikę przemysłową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Таразе и Жамбылской области. Понимаем особенности южного рынка Казахстана и создаём сайты, которые помогают компаниям развиваться в историческом и промышленном центре.',
        en: 'We work with businesses in Taraz and Zhambyl Region. We understand the specifics of the southern market of Kazakhstan and create websites that help companies develop in a historical and industrial center.',
        pl: 'Pracujemy z firmami w Tarazie i obwodzie żambylskim. Rozumiemy specyfikę rynku południowego Kazachstanu i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum historycznym i przemysłowym.'
      },
      cityFeatures: {
        ru: ['Исторический контекст', 'Понимание регионального рынка', 'Промышленная специфика', 'Культурное наследие'],
        en: ['Historical context', 'Understanding of regional market', 'Industrial specifics', 'Cultural heritage'],
        pl: ['Kontekst historyczny', 'Zrozumienie rynku regionalnego', 'Specyfika przemysłowa', 'Dziedzictwo kulturalne']
      }
    }
  },
  pavlodar: {
    code: 'pavlodar',
    name: { ru: 'Павлодар', en: 'Pavlodar', pl: 'Pawłodar' },
    nameLocative: { ru: 'Павлодаре', en: 'Pavlodar', pl: 'Pawłodarze' },
    region: { ru: 'Павлодарская область', en: 'Pavlodar Region', pl: 'Obwód pawłodarski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-PAV', placename: 'Павлодар', position: '52.2833;76.9667', ICBM: '52.2833, 76.9667' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов павлодар', 'разработка сайтов павлодар', 'заказать сайт павлодар', 'сайт под ключ павлодар', 'веб студия павлодар', 'сделать сайт павлодар', 'лендинг павлодар', 'интернет магазин павлодар', 'корпоративный сайт павлодар', 'веб разработка павлодар', 'создать сайт павлодар', 'сайт дешево павлодар', 'сайт бесплатно павлодар', 'сайт на заказ павлодар', 'заказать сайт недорого павлодар', 'создать сайт самому павлодар', 'сайт под ключ недорого павлодар', 'itshka павлодар', 'сделать сайт в павлодаре', 'создать сайт в павлодаре'],
      en: ['website development pavlodar', 'web development pavlodar', 'create website pavlodar', 'web studio pavlodar', 'itshka pavlodar'],
      pl: ['tworzenie stron pawłodar', 'strony www pawłodar', 'itshka pawłodar']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Павлодар — крупный промышленный центр Северного Казахстана с развитой энергетикой и машиностроением. Создаём сайты для павлодарских компаний с учётом промышленной специфики и деловой активности региона.',
        en: 'Pavlodar is a major industrial center of Northern Kazakhstan with developed energy and engineering industries. We create websites for Pavlodar companies considering industrial specifics and business activity of the region.',
        pl: 'Pawłodar to ważne centrum przemysłowe Północnego Kazachstanu z rozwiniętym przemysłem energetycznym i maszynowym. Tworzymy strony internetowe dla firm z Pawłodaru, uwzględniając specyfikę przemysłową i aktywność biznesową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Павлодаре и Павлодарской области. Понимаем особенности промышленного рынка Северного Казахстана и создаём сайты, которые помогают компаниям развиваться в энергетическом и машиностроительном центре.',
        en: 'We work with businesses in Pavlodar and Pavlodar Region. We understand the specifics of the industrial market of Northern Kazakhstan and create websites that help companies develop in an energy and engineering center.',
        pl: 'Pracujemy z firmami w Pawłodarze i obwodzie pawłodarskim. Rozumiemy specyfikę rynku przemysłowego Północnego Kazachstanu i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum energetycznym i maszynowym.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Севере Казахстана', 'Понимание энергетического рынка', 'Машиностроительная специфика', 'Промышленные решения'],
        en: ['Experience in Northern Kazakhstan', 'Understanding of energy market', 'Engineering specifics', 'Industrial solutions'],
        pl: ['Doświadczenie na Północy Kazachstanu', 'Zrozumienie rynku energetycznego', 'Specyfika maszynowa', 'Rozwiązania przemysłowe']
      }
    }
  },
  oskemen: {
    code: 'oskemen',
    name: { ru: 'Оскемен', en: 'Oskemen', pl: 'Oskemen' },
    nameLocative: { ru: 'Оскемене', en: 'Oskemen', pl: 'Oskemenie' },
    region: { ru: 'Восточно-Казахстанская область', en: 'East Kazakhstan Region', pl: 'Obwód wschodniokazachstański' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-VOS', placename: 'Оскемен', position: '49.9561;82.6144', ICBM: '49.9561, 82.6144' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов оскемен', 'разработка сайтов усть-каменогорск', 'заказать сайт оскемен', 'сайт под ключ усть-каменогорск', 'веб студия оскемен', 'сделать сайт усть-каменогорск', 'лендинг оскемен', 'интернет магазин усть-каменогорск', 'корпоративный сайт оскемен', 'веб разработка усть-каменогорск', 'создать сайт оскемен', 'сайт дешево усть-каменогорск', 'сайт бесплатно оскемен', 'сайт на заказ усть-каменогорск', 'заказать сайт недорого оскемен', 'создать сайт самому усть-каменогорск', 'сайт под ключ недорого оскемен', 'itshka оскемен', 'сделать сайт в оскемене', 'создать сайт в усть-каменогорске'],
      en: ['website development oskemen', 'web development ust-kamenogorsk', 'create website oskemen', 'web studio oskemen', 'itshka oskemen'],
      pl: ['tworzenie stron oskemen', 'strony www oskemen', 'itshka oskemen']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Оскемен — крупный промышленный центр Восточного Казахстана с развитой цветной металлургией. Создаём сайты для оскеменских компаний с учётом промышленной специфики и деловой активности региона.',
        en: 'Oskemen is a major industrial center of East Kazakhstan with developed non-ferrous metallurgy. We create websites for Oskemen companies considering industrial specifics and business activity of the region.',
        pl: 'Oskemen to ważne centrum przemysłowe Wschodniego Kazachstanu z rozwiniętą metalurgią kolorową. Tworzymy strony internetowe dla firm z Oskemenu, uwzględniając specyfikę przemysłową i aktywność biznesową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Оскемене и Восточно-Казахстанской области. Понимаем особенности промышленного рынка Восточного Казахстана и создаём сайты, которые помогают компаниям развиваться в металлургическом центре.',
        en: 'We work with businesses in Oskemen and East Kazakhstan Region. We understand the specifics of the industrial market of East Kazakhstan and create websites that help companies develop in a metallurgical center.',
        pl: 'Pracujemy z firmami w Oskemenie i obwodzie wschodniokazachstańskim. Rozumiemy specyfikę rynku przemysłowego Wschodniego Kazachstanu i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum metalurgicznym.'
      },
      cityFeatures: {
        ru: ['Опыт работы на Востоке Казахстана', 'Понимание металлургического рынка', 'Цветная металлургия', 'Промышленные решения'],
        en: ['Experience in East Kazakhstan', 'Understanding of metallurgical market', 'Non-ferrous metallurgy', 'Industrial solutions'],
        pl: ['Doświadczenie na Wschodzie Kazachstanu', 'Zrozumienie rynku metalurgicznego', 'Metalurgia kolorowa', 'Rozwiązania przemysłowe']
      }
    }
  },
  semey: {
    code: 'semey',
    name: { ru: 'Семей', en: 'Semey', pl: 'Semiej' },
    nameLocative: { ru: 'Семее', en: 'Semey', pl: 'Semieju' },
    region: { ru: 'Абайская область', en: 'Abai Region', pl: 'Obwód abajski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-ABA', placename: 'Семей', position: '50.4111;80.2275', ICBM: '50.4111, 80.2275' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов семей', 'разработка сайтов семипалатинск', 'заказать сайт семей', 'сайт под ключ семипалатинск', 'веб студия семей', 'сделать сайт семипалатинск', 'лендинг семей', 'интернет магазин семипалатинск', 'корпоративный сайт семей', 'веб разработка семипалатинск', 'создать сайт семей', 'сайт дешево семипалатинск', 'сайт бесплатно семей', 'сайт на заказ семипалатинск', 'заказать сайт недорого семей', 'создать сайт самому семипалатинск', 'сайт под ключ недорого семей', 'itshka семей', 'сделать сайт в семее', 'создать сайт в семипалатинске'],
      en: ['website development semey', 'web development semipalatinsk', 'create website semey', 'web studio semey', 'itshka semey'],
      pl: ['tworzenie stron semiej', 'strony www semiej', 'itshka semiej']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Семей — исторический город Восточного Казахстана с богатым культурным наследием. Создаём сайты для семейских компаний с учётом культурного контекста и деловой активности региона.',
        en: 'Semey is a historical city of East Kazakhstan with rich cultural heritage. We create websites for Semey companies considering cultural context and business activity of the region.',
        pl: 'Semiej to historyczne miasto Wschodniego Kazachstanu z bogatym dziedzictwem kulturalnym. Tworzymy strony internetowe dla firm z Semieju, uwzględniając kontekst kulturalny i aktywność biznesową regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Семее и Абайской области. Понимаем особенности культурного и делового рынка Восточного Казахстана и создаём сайты, которые помогают компаниям развиваться в историческом центре.',
        en: 'We work with businesses in Semey and Abai Region. We understand the specifics of the cultural and business market of East Kazakhstan and create websites that help companies develop in a historical center.',
        pl: 'Pracujemy z firmami w Semieju i obwodzie abajskim. Rozumiemy specyfikę rynku kulturalnego i biznesowego Wschodniego Kazachstanu i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum historycznym.'
      },
      cityFeatures: {
        ru: ['Культурный контекст', 'Историческое наследие', 'Понимание регионального рынка', 'Деловые решения'],
        en: ['Cultural context', 'Historical heritage', 'Understanding of regional market', 'Business solutions'],
        pl: ['Kontekst kulturalny', 'Dziedzictwo historyczne', 'Zrozumienie rynku regionalnego', 'Rozwiązania biznesowe']
      }
    }
  },
  atyrau: {
    code: 'atyrau',
    name: { ru: 'Атырау', en: 'Atyrau', pl: 'Atyrau' },
    nameLocative: { ru: 'Атырау', en: 'Atyrau', pl: 'Atyrau' },
    region: { ru: 'Атырауская область', en: 'Atyrau Region', pl: 'Obwód atyrauski' },
    phone: { display: '+375 29 121-09-08', tel: '+375291210908' },
    geo: { region: 'KZ-ATY', placename: 'Атырау', position: '47.1167;51.8833', ICBM: '47.1167, 51.8833' },
    countryCode: 'KZ',
    keywords: {
      ru: ['создание сайтов атырау', 'разработка сайтов атырау', 'заказать сайт атырау', 'сайт под ключ атырау', 'веб студия атырау', 'сделать сайт атырау', 'лендинг атырау', 'интернет магазин атырау', 'корпоративный сайт атырау', 'веб разработка атырау', 'создать сайт атырау', 'сайт дешево атырау', 'сайт бесплатно атырау', 'сайт на заказ атырау', 'заказать сайт недорого атырау', 'создать сайт самому атырау', 'сайт под ключ недорого атырау', 'itshka атырау', 'сделать сайт в атырау', 'создать сайт в атырау'],
      en: ['website development atyrau', 'web development atyrau', 'create website atyrau', 'web studio atyrau', 'itshka atyrau'],
      pl: ['tworzenie stron atyrau', 'strony www atyrau', 'itshka atyrau']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Атырау — нефтяная столица Казахстана с развитой нефтегазовой отраслью. Создаём сайты для атырауских компаний с учётом энергетической специфики и международного бизнес-климата региона.',
        en: 'Atyrau is the oil capital of Kazakhstan with developed oil and gas industry. We create websites for Atyrau companies considering energy specifics and international business climate of the region.',
        pl: 'Atyrau to naftowa stolica Kazachstanu z rozwiniętym przemysłem naftowo-gazowym. Tworzymy strony internetowe dla firm z Atyrau, uwzględniając specyfikę energetyczną i międzynarodowy klimat biznesowy regionu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Атырау и Атырауской области. Понимаем особенности нефтегазового рынка Западного Казахстана и создаём сайты, которые помогают компаниям развиваться в энергетическом центре с международными проектами.',
        en: 'We work with businesses in Atyrau and Atyrau Region. We understand the specifics of the oil and gas market of Western Kazakhstan and create websites that help companies develop in an energy center with international projects.',
        pl: 'Pracujemy z firmami w Atyrau i obwodzie atyrauskim. Rozumiemy specyfikę rynku naftowo-gazowego Zachodniego Kazachstanu i tworzymy strony internetowe, które pomagają firmom rozwijać się w centrum energetycznym z projektami międzynarodowymi.'
      },
      cityFeatures: {
        ru: ['Опыт работы в нефтегазовой отрасли', 'Международный подход', 'Энергетическая специфика', 'Современные технологии'],
        en: ['Experience in oil and gas industry', 'International approach', 'Energy specifics', 'Modern technologies'],
        pl: ['Doświadczenie w przemyśle naftowo-gazowym', 'Podejście międzynarodowe', 'Specyfika energetyczna', 'Nowoczesne technologie']
      }
    }
  },
  berlin: {
    code: 'berlin',
    name: { ru: 'Берлин', en: 'Berlin', pl: 'Berlin' },
    nameLocative: { ru: 'Берлине', en: 'Berlin', pl: 'Berlinie' },
    region: { ru: 'Берлин', en: 'Berlin', pl: 'Berlin' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'DE-BE', placename: 'Berlin', position: '52.5200;13.4050', ICBM: '52.5200, 13.4050' },
    countryCode: 'DE',
    keywords: {
      ru: ['создание сайтов берлин', 'разработка сайтов берлин', 'заказать сайт берлин', 'веб студия берлин', 'itshka берлин'],
      en: ['website development berlin', 'web development berlin', 'create website berlin', 'web studio berlin', 'itshka berlin', 'website design berlin', 'web design berlin'],
      pl: ['tworzenie stron berlin', 'strony www berlin', 'itshka berlin']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Берлин — столица Германии и крупный технологический хаб Европы. Создаём современные сайты для берлинских компаний с учётом международных стандартов и европейского рынка.',
        en: 'Berlin is the capital of Germany and a major technology hub in Europe. We create modern websites for Berlin companies considering international standards and the European market.',
        pl: 'Berlin to stolica Niemiec i ważne centrum technologiczne w Europie. Tworzymy nowoczesne strony internetowe dla firm z Berlina, uwzględniając międzynarodowe standardy i rynek europejski.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Берлине и Германии. Понимаем особенности европейского рынка и создаём сайты, которые помогают компаниям эффективно работать в технологическом центре Европы.',
        en: 'We work with businesses in Berlin and Germany. We understand the specifics of the European market and create websites that help companies work effectively in Europe\'s technology center.',
        pl: 'Pracujemy z firmami w Berlinie i Niemczech. Rozumiemy specyfikę rynku europejskiego i tworzymy strony internetowe, które pomagają firmom efektywnie działać w centrum technologicznym Europy.'
      },
      cityFeatures: {
        ru: ['Международные стандарты', 'Европейский рынок', 'Технологический подход', 'Современные решения'],
        en: ['International standards', 'European market', 'Technology approach', 'Modern solutions'],
        pl: ['Standardy międzynarodowe', 'Rynek europejski', 'Podejście technologiczne', 'Nowoczesne rozwiązania']
      }
    }
  },
  paris: {
    code: 'paris',
    name: { ru: 'Париж', en: 'Paris', pl: 'Paryż' },
    nameLocative: { ru: 'Париже', en: 'Paris', pl: 'Paryżu' },
    region: { ru: 'Иль-де-Франс', en: 'Île-de-France', pl: 'Île-de-France' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'FR-IDF', placename: 'Paris', position: '48.8566;2.3522', ICBM: '48.8566, 2.3522' },
    countryCode: 'FR',
    keywords: {
      ru: ['создание сайтов париж', 'разработка сайтов париж', 'веб студия париж', 'itshka париж'],
      en: ['website development paris', 'web development paris', 'create website paris', 'web studio paris', 'itshka paris', 'website design paris'],
      pl: ['tworzenie stron paryż', 'strony www paryż', 'itshka paryż']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Париж — столица Франции и мировой центр моды и культуры. Создаём элегантные сайты для парижских компаний, сочетая эстетику с функциональностью.',
        en: 'Paris is the capital of France and a global center of fashion and culture. We create elegant websites for Paris companies, combining aesthetics with functionality.',
        pl: 'Paryż to stolica Francji i światowe centrum mody i kultury. Tworzymy eleganckie strony internetowe dla firm z Paryża, łącząc estetykę z funkcjonalnością.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Париже и Франции. Понимаем важность эстетики и создаём сайты, которые отражают французский стиль и современные бизнес-задачи.',
        en: 'We work with businesses in Paris and France. We understand the importance of aesthetics and create websites that reflect French style and modern business tasks.',
        pl: 'Pracujemy z firmami w Paryżu i Francji. Rozumiemy wagę estetyki i tworzymy strony internetowe, które odzwierciedlają francuski styl i nowoczesne zadania biznesowe.'
      },
      cityFeatures: {
        ru: ['Эстетический подход', 'Французский стиль', 'Культурный контекст', 'Элегантные решения'],
        en: ['Aesthetic approach', 'French style', 'Cultural context', 'Elegant solutions'],
        pl: ['Podejście estetyczne', 'Styl francuski', 'Kontekst kulturalny', 'Eleganckie rozwiązania']
      }
    }
  },
  london: {
    code: 'london',
    name: { ru: 'Лондон', en: 'London', pl: 'Londyn' },
    nameLocative: { ru: 'Лондоне', en: 'London', pl: 'Londynie' },
    region: { ru: 'Англия', en: 'England', pl: 'Anglia' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'GB-ENG', placename: 'London', position: '51.5074;-0.1278', ICBM: '51.5074, -0.1278' },
    countryCode: 'GB',
    keywords: {
      ru: ['создание сайтов лондон', 'разработка сайтов лондон', 'веб студия лондон', 'itshka лондон'],
      en: ['website development london', 'web development london', 'create website london', 'web studio london', 'itshka london', 'website design london'],
      pl: ['tworzenie stron londyn', 'strony www londyn', 'itshka londyn']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Лондон — столица Великобритании и крупный финансовый центр мира. Создаём профессиональные сайты для лондонских компаний с учётом международных стандартов бизнеса.',
        en: 'London is the capital of the United Kingdom and a major financial center of the world. We create professional websites for London companies considering international business standards.',
        pl: 'Londyn to stolica Wielkiej Brytanii i ważne centrum finansowe świata. Tworzymy profesjonalne strony internetowe dla firm z Londynu, uwzględniając międzynarodowe standardy biznesowe.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Лондоне и Великобритании. Понимаем особенности британского рынка и создаём сайты, которые помогают компаниям работать в условиях международной конкуренции.',
        en: 'We work with businesses in London and the United Kingdom. We understand the specifics of the British market and create websites that help companies work in conditions of international competition.',
        pl: 'Pracujemy z firmami w Londynie i Wielkiej Brytanii. Rozumiemy specyfikę rynku brytyjskiego i tworzymy strony internetowe, które pomagają firmom działać w warunkach międzynarodowej konkurencji.'
      },
      cityFeatures: {
        ru: ['Международные стандарты', 'Финансовый сектор', 'Профессиональный подход', 'Британское качество'],
        en: ['International standards', 'Financial sector', 'Professional approach', 'British quality'],
        pl: ['Standardy międzynarodowe', 'Sektor finansowy', 'Podejście profesjonalne', 'Brytyjska jakość']
      }
    }
  },
  rome: {
    code: 'rome',
    name: { ru: 'Рим', en: 'Rome', pl: 'Rzym' },
    nameLocative: { ru: 'Риме', en: 'Rome', pl: 'Rzymie' },
    region: { ru: 'Лацио', en: 'Lazio', pl: 'Lacjum' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'IT-LAZ', placename: 'Rome', position: '41.9028;12.4964', ICBM: '41.9028, 12.4964' },
    countryCode: 'IT',
    keywords: {
      ru: ['создание сайтов рим', 'разработка сайтов рим', 'веб студия рим', 'itshka рим'],
      en: ['website development rome', 'web development rome', 'create website rome', 'web studio rome', 'itshka rome', 'website design rome'],
      pl: ['tworzenie stron rzym', 'strony www rzym', 'itshka rzym']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Рим — столица Италии с богатым историческим наследием. Создаём сайты для римских компаний, сочетая итальянскую эстетику с современными технологиями.',
        en: 'Rome is the capital of Italy with rich historical heritage. We create websites for Rome companies, combining Italian aesthetics with modern technologies.',
        pl: 'Rzym to stolica Włoch z bogatym dziedzictwem historycznym. Tworzymy strony internetowe dla firm z Rzymu, łącząc włoską estetykę z nowoczesnymi technologiami.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Риме и Италии. Понимаем особенности итальянского рынка и создаём сайты, которые отражают итальянский стиль и современные бизнес-задачи.',
        en: 'We work with businesses in Rome and Italy. We understand the specifics of the Italian market and create websites that reflect Italian style and modern business tasks.',
        pl: 'Pracujemy z firmami w Rzymie i Włoszech. Rozumiemy specyfikę rynku włoskiego i tworzymy strony internetowe, które odzwierciedlają włoski styl i nowoczesne zadania biznesowe.'
      },
      cityFeatures: {
        ru: ['Итальянская эстетика', 'Исторический контекст', 'Современные технологии', 'Стильные решения'],
        en: ['Italian aesthetics', 'Historical context', 'Modern technologies', 'Stylish solutions'],
        pl: ['Estetyka włoska', 'Kontekst historyczny', 'Nowoczesne technologie', 'Stylowe rozwiązania']
      }
    }
  },
  madrid: {
    code: 'madrid',
    name: { ru: 'Мадрид', en: 'Madrid', pl: 'Madryt' },
    nameLocative: { ru: 'Мадриде', en: 'Madrid', pl: 'Madrycie' },
    region: { ru: 'Мадрид', en: 'Madrid', pl: 'Madryt' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'ES-MD', placename: 'Madrid', position: '40.4168;-3.7038', ICBM: '40.4168, -3.7038' },
    countryCode: 'ES',
    keywords: {
      ru: ['создание сайтов мадрид', 'разработка сайтов мадрид', 'веб студия мадрид', 'itshka мадрид'],
      en: ['website development madrid', 'web development madrid', 'create website madrid', 'web studio madrid', 'itshka madrid', 'website design madrid'],
      pl: ['tworzenie stron madryt', 'strony www madryt', 'itshka madryt']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Мадрид — столица Испании и крупный деловой центр. Создаём современные сайты для мадридских компаний с учётом испанского рынка и международных стандартов.',
        en: 'Madrid is the capital of Spain and a major business center. We create modern websites for Madrid companies considering the Spanish market and international standards.',
        pl: 'Madryt to stolica Hiszpanii i ważne centrum biznesowe. Tworzymy nowoczesne strony internetowe dla firm z Madrytu, uwzględniając rynek hiszpański i standardy międzynarodowe.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Мадриде и Испании. Понимаем особенности испанского рынка и создаём сайты, которые помогают компаниям развиваться в условиях европейской конкуренции.',
        en: 'We work with businesses in Madrid and Spain. We understand the specifics of the Spanish market and create websites that help companies develop in conditions of European competition.',
        pl: 'Pracujemy z firmami w Madrycie i Hiszpanii. Rozumiemy specyfikę rynku hiszpańskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w warunkach konkurencji europejskiej.'
      },
      cityFeatures: {
        ru: ['Испанский рынок', 'Европейские стандарты', 'Деловой подход', 'Современные решения'],
        en: ['Spanish market', 'European standards', 'Business approach', 'Modern solutions'],
        pl: ['Rynek hiszpański', 'Standardy europejskie', 'Podejście biznesowe', 'Nowoczesne rozwiązania']
      }
    }
  },
  amsterdam: {
    code: 'amsterdam',
    name: { ru: 'Амстердам', en: 'Amsterdam', pl: 'Amsterdam' },
    nameLocative: { ru: 'Амстердаме', en: 'Amsterdam', pl: 'Amsterdamie' },
    region: { ru: 'Северная Голландия', en: 'North Holland', pl: 'Holandia Północna' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'NL-NH', placename: 'Amsterdam', position: '52.3676;4.9041', ICBM: '52.3676, 4.9041' },
    countryCode: 'NL',
    keywords: {
      ru: ['создание сайтов амстердам', 'разработка сайтов амстердам', 'веб студия амстердам', 'itshka амстердам'],
      en: ['website development amsterdam', 'web development amsterdam', 'create website amsterdam', 'web studio amsterdam', 'itshka amsterdam', 'website design amsterdam'],
      pl: ['tworzenie stron amsterdam', 'strony www amsterdam', 'itshka amsterdam']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Амстердам — столица Нидерландов и крупный технологический хаб. Создаём инновационные сайты для амстердамских компаний с учётом голландского подхода к бизнесу.',
        en: 'Amsterdam is the capital of the Netherlands and a major technology hub. We create innovative websites for Amsterdam companies considering the Dutch approach to business.',
        pl: 'Amsterdam to stolica Holandii i ważne centrum technologiczne. Tworzymy innowacyjne strony internetowe dla firm z Amsterdamu, uwzględniając holenderskie podejście do biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Амстердаме и Нидерландах. Понимаем особенности голландского рынка и создаём сайты, которые помогают компаниям работать в условиях высокой технологической конкуренции.',
        en: 'We work with businesses in Amsterdam and the Netherlands. We understand the specifics of the Dutch market and create websites that help companies work in conditions of high technological competition.',
        pl: 'Pracujemy z firmami w Amsterdamie i Holandii. Rozumiemy specyfikę rynku holenderskiego i tworzymy strony internetowe, które pomagają firmom działać w warunkach wysokiej konkurencji technologicznej.'
      },
      cityFeatures: {
        ru: ['Технологический подход', 'Голландский стиль', 'Инновационные решения', 'Высокая конкуренция'],
        en: ['Technology approach', 'Dutch style', 'Innovative solutions', 'High competition'],
        pl: ['Podejście technologiczne', 'Styl holenderski', 'Innowacyjne rozwiązania', 'Wysoka konkurencja']
      }
    }
  },
  brussels: {
    code: 'brussels',
    name: { ru: 'Брюссель', en: 'Brussels', pl: 'Bruksela' },
    nameLocative: { ru: 'Брюсселе', en: 'Brussels', pl: 'Brukseli' },
    region: { ru: 'Брюссельский столичный регион', en: 'Brussels-Capital Region', pl: 'Region Stołeczny Brukseli' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'BE-BRU', placename: 'Brussels', position: '50.8503;4.3517', ICBM: '50.8503, 4.3517' },
    countryCode: 'BE',
    keywords: {
      ru: ['создание сайтов брюссель', 'разработка сайтов брюссель', 'веб студия брюссель', 'itshka брюссель'],
      en: ['website development brussels', 'web development brussels', 'create website brussels', 'web studio brussels', 'itshka brussels', 'website design brussels'],
      pl: ['tworzenie stron bruksela', 'strony www bruksela', 'itshka bruksela']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Брюссель — столица Бельгии и Европейского союза. Создаём многоязычные сайты для брюссельских компаний с учётом международного характера города.',
        en: 'Brussels is the capital of Belgium and the European Union. We create multilingual websites for Brussels companies considering the international character of the city.',
        pl: 'Bruksela to stolica Belgii i Unii Europejskiej. Tworzymy wielojęzyczne strony internetowe dla firm z Brukseli, uwzględniając międzynarodowy charakter miasta.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Брюсселе и Бельгии. Понимаем особенности европейского рынка и создаём сайты, которые помогают компаниям работать в столице ЕС.',
        en: 'We work with businesses in Brussels and Belgium. We understand the specifics of the European market and create websites that help companies work in the EU capital.',
        pl: 'Pracujemy z firmami w Brukseli i Belgii. Rozumiemy specyfikę rynku europejskiego i tworzymy strony internetowe, które pomagają firmom działać w stolicy UE.'
      },
      cityFeatures: {
        ru: ['Многоязычность', 'Европейские стандарты', 'Международный подход', 'Столица ЕС'],
        en: ['Multilingual', 'European standards', 'International approach', 'EU capital'],
        pl: ['Wielojęzyczność', 'Standardy europejskie', 'Podejście międzynarodowe', 'Stolica UE']
      }
    }
  },
  vienna: {
    code: 'vienna',
    name: { ru: 'Вена', en: 'Vienna', pl: 'Wiedeń' },
    nameLocative: { ru: 'Вене', en: 'Vienna', pl: 'Wiedniu' },
    region: { ru: 'Вена', en: 'Vienna', pl: 'Wiedeń' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'AT-9', placename: 'Vienna', position: '48.2082;16.3738', ICBM: '48.2082, 16.3738' },
    countryCode: 'AT',
    keywords: {
      ru: ['создание сайтов вена', 'разработка сайтов вена', 'веб студия вена', 'itshka вена'],
      en: ['website development vienna', 'web development vienna', 'create website vienna', 'web studio vienna', 'itshka vienna', 'website design vienna'],
      pl: ['tworzenie stron wiedeń', 'strony www wiedeń', 'itshka wiedeń']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Вена — столица Австрии и культурный центр Европы. Создаём элегантные сайты для венских компаний, сочетая австрийское качество с современными технологиями.',
        en: 'Vienna is the capital of Austria and a cultural center of Europe. We create elegant websites for Vienna companies, combining Austrian quality with modern technologies.',
        pl: 'Wiedeń to stolica Austrii i centrum kulturalne Europy. Tworzymy eleganckie strony internetowe dla firm z Wiednia, łącząc austriacką jakość z nowoczesnymi technologiami.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Вене и Австрии. Понимаем особенности австрийского рынка и создаём сайты, которые отражают австрийское качество и европейские стандарты.',
        en: 'We work with businesses in Vienna and Austria. We understand the specifics of the Austrian market and create websites that reflect Austrian quality and European standards.',
        pl: 'Pracujemy z firmami w Wiedniu i Austrii. Rozumiemy specyfikę rynku austriackiego i tworzymy strony internetowe, które odzwierciedlają austriacką jakość i standardy europejskie.'
      },
      cityFeatures: {
        ru: ['Австрийское качество', 'Культурный контекст', 'Европейские стандарты', 'Элегантные решения'],
        en: ['Austrian quality', 'Cultural context', 'European standards', 'Elegant solutions'],
        pl: ['Austriacka jakość', 'Kontekst kulturalny', 'Standardy europejskie', 'Eleganckie rozwiązania']
      }
    }
  },
  prague: {
    code: 'prague',
    name: { ru: 'Прага', en: 'Prague', pl: 'Praga' },
    nameLocative: { ru: 'Праге', en: 'Prague', pl: 'Pradze' },
    region: { ru: 'Прага', en: 'Prague', pl: 'Praga' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'CZ-10', placename: 'Prague', position: '50.0755;14.4378', ICBM: '50.0755, 14.4378' },
    countryCode: 'CZ',
    keywords: {
      ru: ['создание сайтов прага', 'разработка сайтов прага', 'веб студия прага', 'itshka прага'],
      en: ['website development prague', 'web development prague', 'create website prague', 'web studio prague', 'itshka prague', 'website design prague'],
      pl: ['tworzenie stron praga', 'strony www praga', 'itshka praga']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Прага — столица Чехии и красивейший город Европы. Создаём современные сайты для пражских компаний с учётом чешского рынка и европейских стандартов.',
        en: 'Prague is the capital of the Czech Republic and one of the most beautiful cities in Europe. We create modern websites for Prague companies considering the Czech market and European standards.',
        pl: 'Praga to stolica Czech i jedno z najpiękniejszych miast w Europie. Tworzymy nowoczesne strony internetowe dla firm z Pragi, uwzględniając rynek czeski i standardy europejskie.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Праге и Чехии. Понимаем особенности чешского рынка и создаём сайты, которые помогают компаниям развиваться в условиях европейской конкуренции.',
        en: 'We work with businesses in Prague and the Czech Republic. We understand the specifics of the Czech market and create websites that help companies develop in conditions of European competition.',
        pl: 'Pracujemy z firmami w Pradze i Czechach. Rozumiemy specyfikę rynku czeskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w warunkach konkurencji europejskiej.'
      },
      cityFeatures: {
        ru: ['Чешский рынок', 'Европейские стандарты', 'Современный подход', 'Качественные решения'],
        en: ['Czech market', 'European standards', 'Modern approach', 'Quality solutions'],
        pl: ['Rynek czeski', 'Standardy europejskie', 'Nowoczesne podejście', 'Jakościowe rozwiązania']
      }
    }
  },
  stockholm: {
    code: 'stockholm',
    name: { ru: 'Стокгольм', en: 'Stockholm', pl: 'Sztokholm' },
    nameLocative: { ru: 'Стокгольме', en: 'Stockholm', pl: 'Sztokholmie' },
    region: { ru: 'Стокгольм', en: 'Stockholm', pl: 'Sztokholm' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'SE-AB', placename: 'Stockholm', position: '59.3293;18.0686', ICBM: '59.3293, 18.0686' },
    countryCode: 'SE',
    keywords: {
      ru: ['создание сайтов стокгольм', 'разработка сайтов стокгольм', 'веб студия стокгольм', 'itshka стокгольм'],
      en: ['website development stockholm', 'web development stockholm', 'create website stockholm', 'web studio stockholm', 'itshka stockholm', 'website design stockholm'],
      pl: ['tworzenie stron sztokholm', 'strony www sztokholm', 'itshka sztokholm']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Стокгольм — столица Швеции и крупный технологический центр. Создаём инновационные сайты для стокгольмских компаний с учётом скандинавского подхода к бизнесу.',
        en: 'Stockholm is the capital of Sweden and a major technology center. We create innovative websites for Stockholm companies considering the Scandinavian approach to business.',
        pl: 'Sztokholm to stolica Szwecji i ważne centrum technologiczne. Tworzymy innowacyjne strony internetowe dla firm ze Sztokholmu, uwzględniając skandynawskie podejście do biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Стокгольме и Швеции. Понимаем особенности скандинавского рынка и создаём сайты, которые помогают компаниям работать в условиях высокой технологической конкуренции.',
        en: 'We work with businesses in Stockholm and Sweden. We understand the specifics of the Scandinavian market and create websites that help companies work in conditions of high technological competition.',
        pl: 'Pracujemy z firmami w Sztokholmie i Szwecji. Rozumiemy specyfikę rynku skandynawskiego i tworzymy strony internetowe, które pomagają firmom działać w warunkach wysokiej konkurencji technologicznej.'
      },
      cityFeatures: {
        ru: ['Скандинавский подход', 'Технологические инновации', 'Высокое качество', 'Современные решения'],
        en: ['Scandinavian approach', 'Technology innovations', 'High quality', 'Modern solutions'],
        pl: ['Podejście skandynawskie', 'Innowacje technologiczne', 'Wysoka jakość', 'Nowoczesne rozwiązania']
      }
    }
  },
  copenhagen: {
    code: 'copenhagen',
    name: { ru: 'Копенгаген', en: 'Copenhagen', pl: 'Kopenhaga' },
    nameLocative: { ru: 'Копенгагене', en: 'Copenhagen', pl: 'Kopenhadze' },
    region: { ru: 'Ховедстаден', en: 'Capital Region', pl: 'Region Stołeczny' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'DK-84', placename: 'Copenhagen', position: '55.6761;12.5683', ICBM: '55.6761, 12.5683' },
    countryCode: 'DK',
    keywords: {
      ru: ['создание сайтов копенгаген', 'разработка сайтов копенгаген', 'веб студия копенгаген', 'itshka копенгаген'],
      en: ['website development copenhagen', 'web development copenhagen', 'create website copenhagen', 'web studio copenhagen', 'itshka copenhagen', 'website design copenhagen'],
      pl: ['tworzenie stron kopenhaga', 'strony www kopenhaga', 'itshka kopenhaga']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Копенгаген — столица Дании и один из самых счастливых городов мира. Создаём современные сайты для копенгагенских компаний с учётом датского подхода к бизнесу.',
        en: 'Copenhagen is the capital of Denmark and one of the happiest cities in the world. We create modern websites for Copenhagen companies considering the Danish approach to business.',
        pl: 'Kopenhaga to stolica Danii i jedno z najszczęśliwszych miast na świecie. Tworzymy nowoczesne strony internetowe dla firm z Kopenhagi, uwzględniając duńskie podejście do biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Копенгагене и Дании. Понимаем особенности датского рынка и создаём сайты, которые помогают компаниям работать в условиях скандинавской конкуренции.',
        en: 'We work with businesses in Copenhagen and Denmark. We understand the specifics of the Danish market and create websites that help companies work in conditions of Scandinavian competition.',
        pl: 'Pracujemy z firmami w Kopenhadze i Danii. Rozumiemy specyfikę rynku duńskiego i tworzymy strony internetowe, które pomagają firmom działać w warunkach konkurencji skandynawskiej.'
      },
      cityFeatures: {
        ru: ['Датский подход', 'Скандинавские стандарты', 'Современный дизайн', 'Качественные решения'],
        en: ['Danish approach', 'Scandinavian standards', 'Modern design', 'Quality solutions'],
        pl: ['Podejście duńskie', 'Standardy skandynawskie', 'Nowoczesny design', 'Jakościowe rozwiązania']
      }
    }
  },
  helsinki: {
    code: 'helsinki',
    name: { ru: 'Хельсинки', en: 'Helsinki', pl: 'Helsinki' },
    nameLocative: { ru: 'Хельсинки', en: 'Helsinki', pl: 'Helsinkach' },
    region: { ru: 'Уусимаа', en: 'Uusimaa', pl: 'Uusimaa' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'FI-18', placename: 'Helsinki', position: '60.1699;24.9384', ICBM: '60.1699, 24.9384' },
    countryCode: 'FI',
    keywords: {
      ru: ['создание сайтов хельсинки', 'разработка сайтов хельсинки', 'веб студия хельсинки', 'itshka хельсинки'],
      en: ['website development helsinki', 'web development helsinki', 'create website helsinki', 'web studio helsinki', 'itshka helsinki', 'website design helsinki'],
      pl: ['tworzenie stron helsinki', 'strony www helsinki', 'itshka helsinki']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Хельсинки — столица Финляндии и технологический центр Северной Европы. Создаём инновационные сайты для хельсинкских компаний с учётом финского подхода к инновациям.',
        en: 'Helsinki is the capital of Finland and a technology center of Northern Europe. We create innovative websites for Helsinki companies considering the Finnish approach to innovation.',
        pl: 'Helsinki to stolica Finlandii i centrum technologiczne Europy Północnej. Tworzymy innowacyjne strony internetowe dla firm z Helsinek, uwzględniając fińskie podejście do innowacji.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Хельсинки и Финляндии. Понимаем особенности финского рынка и создаём сайты, которые помогают компаниям работать в условиях высокой технологической конкуренции.',
        en: 'We work with businesses in Helsinki and Finland. We understand the specifics of the Finnish market and create websites that help companies work in conditions of high technological competition.',
        pl: 'Pracujemy z firmami w Helsinkach i Finlandii. Rozumiemy specyfikę rynku fińskiego i tworzymy strony internetowe, które pomagają firmom działać w warunkach wysokiej konkurencji technologicznej.'
      },
      cityFeatures: {
        ru: ['Финские инновации', 'Технологический подход', 'Высокое качество', 'Современные решения'],
        en: ['Finnish innovations', 'Technology approach', 'High quality', 'Modern solutions'],
        pl: ['Fińskie innowacje', 'Podejście technologiczne', 'Wysoka jakość', 'Nowoczesne rozwiązania']
      }
    }
  },
  oslo: {
    code: 'oslo',
    name: { ru: 'Осло', en: 'Oslo', pl: 'Oslo' },
    nameLocative: { ru: 'Осло', en: 'Oslo', pl: 'Oslo' },
    region: { ru: 'Осло', en: 'Oslo', pl: 'Oslo' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'NO-03', placename: 'Oslo', position: '59.9139;10.7522', ICBM: '59.9139, 10.7522' },
    countryCode: 'NO',
    keywords: {
      ru: ['создание сайтов осло', 'разработка сайтов осло', 'веб студия осло', 'itshka осло'],
      en: ['website development oslo', 'web development oslo', 'create website oslo', 'web studio oslo', 'itshka oslo', 'website design oslo'],
      pl: ['tworzenie stron oslo', 'strony www oslo', 'itshka oslo']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Осло — столица Норвегии и один из самых дорогих городов мира. Создаём качественные сайты для ословских компаний с учётом норвежского подхода к бизнесу.',
        en: 'Oslo is the capital of Norway and one of the most expensive cities in the world. We create quality websites for Oslo companies considering the Norwegian approach to business.',
        pl: 'Oslo to stolica Norwegii i jedno z najdroższych miast na świecie. Tworzymy jakościowe strony internetowe dla firm z Oslo, uwzględniając norweskie podejście do biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Осло и Норвегии. Понимаем особенности норвежского рынка и создаём сайты, которые помогают компаниям работать в условиях скандинавской конкуренции.',
        en: 'We work with businesses in Oslo and Norway. We understand the specifics of the Norwegian market and create websites that help companies work in conditions of Scandinavian competition.',
        pl: 'Pracujemy z firmami w Oslo i Norwegii. Rozumiemy specyfikę rynku norweskiego i tworzymy strony internetowe, które pomagają firmom działać w warunkach konkurencji skandynawskiej.'
      },
      cityFeatures: {
        ru: ['Норвежский подход', 'Скандинавские стандарты', 'Высокое качество', 'Премиум решения'],
        en: ['Norwegian approach', 'Scandinavian standards', 'High quality', 'Premium solutions'],
        pl: ['Podejście norweskie', 'Standardy skandynawskie', 'Wysoka jakość', 'Rozwiązania premium']
      }
    }
  },
  dublin: {
    code: 'dublin',
    name: { ru: 'Дублин', en: 'Dublin', pl: 'Dublin' },
    nameLocative: { ru: 'Дублине', en: 'Dublin', pl: 'Dublinie' },
    region: { ru: 'Ленстер', en: 'Leinster', pl: 'Leinster' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'IE-D', placename: 'Dublin', position: '53.3498;-6.2603', ICBM: '53.3498, -6.2603' },
    countryCode: 'IE',
    keywords: {
      ru: ['создание сайтов дублин', 'разработка сайтов дублин', 'веб студия дублин', 'itshka дублин'],
      en: ['website development dublin', 'web development dublin', 'create website dublin', 'web studio dublin', 'itshka dublin', 'website design dublin'],
      pl: ['tworzenie stron dublin', 'strony www dublin', 'itshka dublin']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Дублин — столица Ирландии и крупный технологический хаб Европы. Создаём современные сайты для дублинских компаний с учётом ирландского подхода к бизнесу.',
        en: 'Dublin is the capital of Ireland and a major technology hub in Europe. We create modern websites for Dublin companies considering the Irish approach to business.',
        pl: 'Dublin to stolica Irlandii i ważne centrum technologiczne w Europie. Tworzymy nowoczesne strony internetowe dla firm z Dublina, uwzględniając irlandzkie podejście do biznesu.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Дублине и Ирландии. Понимаем особенности ирландского рынка и создаём сайты, которые помогают компаниям работать в условиях европейской конкуренции.',
        en: 'We work with businesses in Dublin and Ireland. We understand the specifics of the Irish market and create websites that help companies work in conditions of European competition.',
        pl: 'Pracujemy z firmami w Dublinie i Irlandii. Rozumiemy specyfikę rynku irlandzkiego i tworzymy strony internetowe, które pomagają firmom działać w warunkach konkurencji europejskiej.'
      },
      cityFeatures: {
        ru: ['Ирландский подход', 'Технологический хаб', 'Европейские стандарты', 'Современные решения'],
        en: ['Irish approach', 'Technology hub', 'European standards', 'Modern solutions'],
        pl: ['Podejście irlandzkie', 'Centrum technologiczne', 'Standardy europejskie', 'Nowoczesne rozwiązania']
      }
    }
  },
  lisbon: {
    code: 'lisbon',
    name: { ru: 'Лиссабон', en: 'Lisbon', pl: 'Lizbona' },
    nameLocative: { ru: 'Лиссабоне', en: 'Lisbon', pl: 'Lizbonie' },
    region: { ru: 'Лиссабон', en: 'Lisbon', pl: 'Lizbona' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'PT-11', placename: 'Lisbon', position: '38.7223;-9.1393', ICBM: '38.7223, -9.1393' },
    countryCode: 'PT',
    keywords: {
      ru: ['создание сайтов лиссабон', 'разработка сайтов лиссабон', 'веб студия лиссабон', 'itshka лиссабон'],
      en: ['website development lisbon', 'web development lisbon', 'create website lisbon', 'web studio lisbon', 'itshka lisbon', 'website design lisbon'],
      pl: ['tworzenie stron lizbona', 'strony www lizbona', 'itshka lizbona']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Лиссабон — столица Португалии и один из самых красивых городов Европы. Создаём современные сайты для лиссабонских компаний с учётом португальского рынка.',
        en: 'Lisbon is the capital of Portugal and one of the most beautiful cities in Europe. We create modern websites for Lisbon companies considering the Portuguese market.',
        pl: 'Lizbona to stolica Portugalii i jedno z najpiękniejszych miast w Europie. Tworzymy nowoczesne strony internetowe dla firm z Lizbony, uwzględniając rynek portugalski.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Лиссабоне и Португалии. Понимаем особенности португальского рынка и создаём сайты, которые помогают компаниям развиваться в условиях европейской конкуренции.',
        en: 'We work with businesses in Lisbon and Portugal. We understand the specifics of the Portuguese market and create websites that help companies develop in conditions of European competition.',
        pl: 'Pracujemy z firmami w Lizbonie i Portugalii. Rozumiemy specyfikę rynku portugalskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w warunkach konkurencji europejskiej.'
      },
      cityFeatures: {
        ru: ['Португальский рынок', 'Европейские стандарты', 'Современный подход', 'Качественные решения'],
        en: ['Portuguese market', 'European standards', 'Modern approach', 'Quality solutions'],
        pl: ['Rynek portugalski', 'Standardy europejskie', 'Nowoczesne podejście', 'Jakościowe rozwiązania']
      }
    }
  },
  athens: {
    code: 'athens',
    name: { ru: 'Афины', en: 'Athens', pl: 'Ateny' },
    nameLocative: { ru: 'Афинах', en: 'Athens', pl: 'Atenach' },
    region: { ru: 'Аттика', en: 'Attica', pl: 'Attyka' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'GR-I', placename: 'Athens', position: '37.9838;23.7275', ICBM: '37.9838, 23.7275' },
    countryCode: 'GR',
    keywords: {
      ru: ['создание сайтов афины', 'разработка сайтов афины', 'веб студия афины', 'itshka афины'],
      en: ['website development athens', 'web development athens', 'create website athens', 'web studio athens', 'itshka athens', 'website design athens'],
      pl: ['tworzenie stron aten', 'strony www aten', 'itshka aten']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Афины — столица Греции с богатым историческим наследием. Создаём современные сайты для афинских компаний, сочетая греческую эстетику с современными технологиями.',
        en: 'Athens is the capital of Greece with rich historical heritage. We create modern websites for Athens companies, combining Greek aesthetics with modern technologies.',
        pl: 'Ateny to stolica Grecji z bogatym dziedzictwem historycznym. Tworzymy nowoczesne strony internetowe dla firm z Aten, łącząc grecką estetykę z nowoczesnymi technologiami.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Афинах и Греции. Понимаем особенности греческого рынка и создаём сайты, которые помогают компаниям развиваться в условиях европейской конкуренции.',
        en: 'We work with businesses in Athens and Greece. We understand the specifics of the Greek market and create websites that help companies develop in conditions of European competition.',
        pl: 'Pracujemy z firmami w Atenach i Grecji. Rozumiemy specyfikę rynku greckiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w warunkach konkurencji europejskiej.'
      },
      cityFeatures: {
        ru: ['Греческий рынок', 'Исторический контекст', 'Европейские стандарты', 'Современные решения'],
        en: ['Greek market', 'Historical context', 'European standards', 'Modern solutions'],
        pl: ['Rynek grecki', 'Kontekst historyczny', 'Standardy europejskie', 'Nowoczesne rozwiązania']
      }
    }
  },
  budapest: {
    code: 'budapest',
    name: { ru: 'Будапешт', en: 'Budapest', pl: 'Budapeszt' },
    nameLocative: { ru: 'Будапеште', en: 'Budapest', pl: 'Budapeszcie' },
    region: { ru: 'Будапешт', en: 'Budapest', pl: 'Budapeszt' },
    phone: { display: '+48 502 420 839', tel: '+48502420839' },
    geo: { region: 'HU-BU', placename: 'Budapest', position: '47.4979;19.0402', ICBM: '47.4979, 19.0402' },
    countryCode: 'HU',
    keywords: {
      ru: ['создание сайтов будапешт', 'разработка сайтов будапешт', 'веб студия будапешт', 'itshka будапешт'],
      en: ['website development budapest', 'web development budapest', 'create website budapest', 'web studio budapest', 'itshka budapest', 'website design budapest'],
      pl: ['tworzenie stron budapeszt', 'strony www budapeszt', 'itshka budapeszt']
    },
    uniqueContent: {
      heroDescription: {
        ru: 'Будапешт — столица Венгрии и один из красивейших городов Европы. Создаём современные сайты для будапештских компаний с учётом венгерского рынка и европейских стандартов.',
        en: 'Budapest is the capital of Hungary and one of the most beautiful cities in Europe. We create modern websites for Budapest companies considering the Hungarian market and European standards.',
        pl: 'Budapeszt to stolica Węgier i jedno z najpiękniejszych miast w Europie. Tworzymy nowoczesne strony internetowe dla firm z Budapesztu, uwzględniając rynek węgierski i standardy europejskie.'
      },
      bonusDescription: {
        ru: 'Работаем с бизнесом в Будапеште и Венгрии. Понимаем особенности венгерского рынка и создаём сайты, которые помогают компаниям развиваться в условиях европейской конкуренции.',
        en: 'We work with businesses in Budapest and Hungary. We understand the specifics of the Hungarian market and create websites that help companies develop in conditions of European competition.',
        pl: 'Pracujemy z firmami w Budapeszcie i na Węgrzech. Rozumiemy specyfikę rynku węgierskiego i tworzymy strony internetowe, które pomagają firmom rozwijać się w warunkach konkurencji europejskiej.'
      },
      cityFeatures: {
        ru: ['Венгерский рынок', 'Европейские стандарты', 'Современный подход', 'Качественные решения'],
        en: ['Hungarian market', 'European standards', 'Modern approach', 'Quality solutions'],
        pl: ['Rynek węgierski', 'Standardy europejskie', 'Nowoczesne podejście', 'Jakościowe rozwiązania']
      }
    }
  }
};

// Маппинг стран на города (для автоопределения)
export const countryToCity: Record<string, CityCode> = {
  'BY': 'minsk', // По умолчанию Минск для Беларуси
  'PL': 'warsaw',
  'RU': 'moscow', // По умолчанию Москва для России
  'UA': 'minsk',
  'KZ': 'almaty', // По умолчанию Алматы для Казахстана
  // Европейские столицы
  'DE': 'berlin', 'FR': 'paris', 'GB': 'london', 'IT': 'rome', 'ES': 'madrid',
  'NL': 'amsterdam', 'BE': 'brussels', 'AT': 'vienna', 'CZ': 'prague',
  'SE': 'stockholm', 'DK': 'copenhagen', 'FI': 'helsinki', 'NO': 'oslo',
  'IE': 'dublin', 'PT': 'lisbon', 'GR': 'athens', 'HU': 'budapest'
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
  'варшава': 'warsaw',
  'brest': 'brest',
  'брест': 'brest',
  'brześć': 'brest',
  'vitebsk': 'vitebsk',
  'витебск': 'vitebsk',
  'witebsk': 'vitebsk',
  'gomel': 'gomel',
  'гомель': 'gomel',
  'homel': 'gomel',
  'grodno': 'grodno',
  'гродно': 'grodno',
  'mogilev': 'mogilev',
  'могилев': 'mogilev',
  'могилёв': 'mogilev',
  'mohylew': 'mogilev',
  'baranovichi': 'baranovichi',
  'барановичи': 'baranovichi',
  'baranavichy': 'baranovichi',
  'bobruisk': 'bobruisk',
  'бобруйск': 'bobruisk',
  'babruysk': 'bobruisk',
  'pinsk': 'pinsk',
  'пинск': 'pinsk',
  'orsha': 'orsha',
  'орша': 'orsha',
  'maladzyechna': 'maladzyechna',
  'молодечно': 'maladzyechna',
  'salihorsk': 'salihorsk',
  'солигорск': 'salihorsk',
  'soligorsk': 'salihorsk',
  'navapolatsk': 'navapolatsk',
  'новополоцк': 'navapolatsk',
  'polatsk': 'polatsk',
  'полоцк': 'polatsk',
  'polotsk': 'polatsk',
  'mazyr': 'mazyr',
  'мозырь': 'mazyr',
  'slutsk': 'slutsk',
  'слуцк': 'slutsk',
  'moscow': 'moscow',
  'москва': 'moscow',
  'spb': 'spb',
  'saint-petersburg': 'spb',
  'saint petersburg': 'spb',
  'санкт-петербург': 'spb',
  'санкт петербург': 'spb',
  'спб': 'spb',
  'novosibirsk': 'novosibirsk',
  'новосибирск': 'novosibirsk',
  'ekaterinburg': 'ekaterinburg',
  'yekaterinburg': 'ekaterinburg',
  'екатеринбург': 'ekaterinburg',
  'kazan': 'kazan',
  'казань': 'kazan',
  'nizhny-novgorod': 'nizhny-novgorod',
  'nizhny novgorod': 'nizhny-novgorod',
  'нижний новгород': 'nizhny-novgorod',
  'нижний-новгород': 'nizhny-novgorod',
  'chelyabinsk': 'chelyabinsk',
  'челябинск': 'chelyabinsk',
  'samara': 'samara',
  'самара': 'samara',
  'omsk': 'omsk',
  'омск': 'omsk',
  'rostov-on-don': 'rostov-on-don',
  'rostov on don': 'rostov-on-don',
  'ростов-на-дону': 'rostov-on-don',
  'ростов на дону': 'rostov-on-don',
  'ростов': 'rostov-on-don',
  'ufa': 'ufa',
  'уфа': 'ufa',
  'krasnoyarsk': 'krasnoyarsk',
  'красноярск': 'krasnoyarsk',
  'voronezh': 'voronezh',
  'воронеж': 'voronezh',
  'perm': 'perm',
  'пермь': 'perm',
  'volgograd': 'volgograd',
  'волгоград': 'volgograd',
  'almaty': 'almaty',
  'алматы': 'almaty',
  'nur-sultan': 'nur-sultan',
  'nur sultan': 'nur-sultan',
  'нур-султан': 'nur-sultan',
  'нур султан': 'nur-sultan',
  'astana': 'nur-sultan',
  'астана': 'nur-sultan',
  'shymkent': 'shymkent',
  'шымкент': 'shymkent',
  'karaganda': 'karaganda',
  'караганда': 'karaganda',
  'aktobe': 'aktobe',
  'актобе': 'aktobe',
  'taraz': 'taraz',
  'тараз': 'taraz',
  'pavlodar': 'pavlodar',
  'павлодар': 'pavlodar',
  'oskemen': 'oskemen',
  'оскемен': 'oskemen',
  'ust-kamenogorsk': 'oskemen',
  'ust kamenogorsk': 'oskemen',
  'усть-каменогорск': 'oskemen',
  'усть каменогорск': 'oskemen',
  'semey': 'semey',
  'семей': 'semey',
  'semipalatinsk': 'semey',
  'семипалатинск': 'semey',
  'atyrau': 'atyrau',
  'атырау': 'atyrau',
  'berlin': 'berlin',
  'берлин': 'berlin',
  'paris': 'paris',
  'париж': 'paris',
  'london': 'london',
  'лондон': 'london',
  'rome': 'rome',
  'рим': 'rome',
  'madrid': 'madrid',
  'мадрид': 'madrid',
  'amsterdam': 'amsterdam',
  'амстердам': 'amsterdam',
  'brussels': 'brussels',
  'брюссель': 'brussels',
  'vienna': 'vienna',
  'вена': 'vienna',
  'prague': 'prague',
  'прага': 'prague',
  'stockholm': 'stockholm',
  'стокгольм': 'stockholm',
  'copenhagen': 'copenhagen',
  'копенгаген': 'copenhagen',
  'helsinki': 'helsinki',
  'хельсинки': 'helsinki',
  'oslo': 'oslo',
  'осло': 'oslo',
  'dublin': 'dublin',
  'дублин': 'dublin',
  'lisbon': 'lisbon',
  'лиссабон': 'lisbon',
  'athens': 'athens',
  'афины': 'athens',
  'budapest': 'budapest',
  'будапешт': 'budapest'
};

