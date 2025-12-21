export type CityCode = 'minsk' | 'lida' | 'warsaw' | 'brest' | 'vitebsk' | 'gomel' | 'grodno' | 'mogilev' | 'baranovichi' | 'bobruisk' | 'pinsk' | 'orsha' | 'maladzyechna' | 'salihorsk' | 'navapolatsk' | 'polatsk' | 'mazyr' | 'slutsk';

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
  'слуцк': 'slutsk'
};

