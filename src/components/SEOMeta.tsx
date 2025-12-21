import { Helmet } from "react-helmet-async";
import { useCity } from "@/contexts/CityContext";
import { useTranslation } from "react-i18next";

const SEOMeta = () => {
  const { cityConfig } = useCity();
  const { i18n } = useTranslation();
  const lang = i18n.language as 'ru' | 'en' | 'pl';

  const cityName = cityConfig.name[lang] || cityConfig.name.ru;
  const regionName = cityConfig.region[lang] || cityConfig.region.ru;
  const keywords = cityConfig.keywords[lang] || cityConfig.keywords.ru;

  // Генерируем title и description в зависимости от города и языка
  const getTitle = () => {
    const base = lang === 'ru' 
      ? `Создание сайтов в ${cityName} под ключ | Разработка сайтов недорого — ITshka`
      : lang === 'en'
      ? `Website Development in ${cityName} | ITshka`
      : `Tworzenie stron internetowych w ${cityName} | ITshka`;
    return base;
  };

  const getDescription = () => {
    const base = lang === 'ru'
      ? `🚀 Создание сайтов в ${cityName} и ${regionName}. Сначала делаем сайт — потом платите! ✅ Без предоплаты ✅ Гарантия результата ✅ От 3 дней. Звоните: ${cityConfig.phone.display}`
      : lang === 'en'
      ? `🚀 Website development in ${cityName} and ${regionName}. Website first — pay later! ✅ No prepayment ✅ Result guarantee ✅ From 3 days. Call: ${cityConfig.phone.display}`
      : `🚀 Tworzenie stron internetowych w ${cityName} i ${regionName}. Najpierw strona — potem płatność! ✅ Bez przedpłaty ✅ Gwarancja wyniku ✅ Od 3 dni. Zadzwoń: ${cityConfig.phone.display}`;
    return base;
  };

  const baseUrl = 'https://itshka.by';
  const currentPath = `/${cityConfig.code}`;
  const canonicalUrl = `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{getTitle()}</title>
      <meta name="description" content={getDescription()} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={`ITshka — Веб-студия в ${cityName}`} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="yandex" content="index, follow" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content={cityConfig.geo.region} />
      <meta name="geo.placename" content={cityConfig.geo.placename} />
      <meta name="geo.position" content={cityConfig.geo.position} />
      <meta name="ICBM" content={cityConfig.geo.ICBM} />
      <meta name="language" content={lang === 'ru' ? 'Russian' : lang === 'en' ? 'English' : 'Polish'} />
      <meta name="content-language" content={lang} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={getTitle()} />
      <meta property="og:description" content={getDescription()} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={lang === 'ru' ? 'ru_RU' : lang === 'en' ? 'en_US' : 'pl_PL'} />
      <meta property="og:site_name" content={`ITshka — Создание сайтов в ${cityName}`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={getTitle()} />
      <meta name="twitter:description" content={getDescription()} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate для других языков */}
      <link rel="alternate" hreflang="ru" href={`${baseUrl}/${cityConfig.code}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}/${cityConfig.code}`} />
      <link rel="alternate" hreflang="pl" href={`${baseUrl}/${cityConfig.code}`} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOMeta;

