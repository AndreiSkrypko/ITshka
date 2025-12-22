import { Helmet } from "react-helmet-async";
import { useCity } from "@/contexts/CityContext";
import { getPhoneByCountry } from "@/utils/phoneSelector";
import { useTranslation } from "react-i18next";

const SEOMeta = () => {
  const { cityConfig, userCountry } = useCity();
  const { i18n } = useTranslation();
  const lang = i18n.language as 'ru' | 'en' | 'pl';

  // Используем правильные склонения для русского языка
  const cityName = lang === 'ru' 
    ? cityConfig.nameLocative[lang] 
    : cityConfig.name[lang] || cityConfig.name.ru;
  const cityNameNominative = cityConfig.name[lang] || cityConfig.name.ru; // Для некоторых мест нужен именительный падеж
  const regionName = cityConfig.region[lang] || cityConfig.region.ru;
  const keywords = cityConfig.keywords[lang] || cityConfig.keywords.ru;
  
  // Выбираем телефон в зависимости от страны города (не пользователя!)
  // Это важно: если город в Беларуси - белорусский номер, если в Польше - польский
  const currentPhone = cityConfig.countryCode === 'PL' 
    ? getPhoneByCountry('PL')
    : cityConfig.phone;

  // Генерируем title и description в зависимости от города и языка
  const getTitle = () => {
    const base = lang === 'ru' 
      ? `Сделать сайт в ${cityName} | Создание сайтов под ключ недорого — ITshka`
      : lang === 'en'
      ? `Make a Website in ${cityNameNominative} | Website Development — ITshka`
      : `Zrobić stronę w ${cityNameNominative} | Tworzenie stron internetowych — ITshka`;
    return base;
  };

  const getDescription = () => {
    const base = lang === 'ru'
      ? `🚀 Создание сайтов в ${cityName} и ${regionName}. Сначала делаем сайт — потом платите! ✅ Без предоплаты ✅ Гарантия результата ✅ От 3 дней. Звоните: ${currentPhone.display}`
      : lang === 'en'
      ? `🚀 Website development in ${cityNameNominative} and ${regionName}. Website first — pay later! ✅ No prepayment ✅ Result guarantee ✅ From 3 days. Call: ${currentPhone.display}`
      : `🚀 Tworzenie stron internetowych w ${cityNameNominative} i ${regionName}. Najpierw strona — potem płatność! ✅ Bez przedpłaty ✅ Gwarancja wyniku ✅ Od 3 dni. Zadzwoń: ${currentPhone.display}`;
    return base;
  };

  const baseUrl = 'https://itshka.by';
  const currentPath = `/${cityConfig.code}`;
  const canonicalUrl = `${baseUrl}${currentPath}`;

  // Генерируем структурированные данные JSON-LD
  const getStructuredData = () => {
    const [lat, lon] = cityConfig.geo.ICBM.split(',').map(Number);
    
    // LocalBusiness Schema для каждого города
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${canonicalUrl}#business`,
      "name": `ITshka — Веб-студия в ${cityName}`,
      "alternateName": "ITshka",
      "description": getDescription(),
      "url": canonicalUrl,
      "telephone": currentPhone.tel,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityNameNominative,
        "addressRegion": regionName,
        "addressCountry": cityConfig.countryCode
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": lat,
        "longitude": lon
      },
      "areaServed": {
        "@type": "City",
        "name": cityNameNominative
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": lat,
          "longitude": lon
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": lang === 'ru' 
          ? `Услуги веб-разработки в ${cityName}` 
          : `Web development services in ${cityNameNominative}`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": lang === 'ru' ? `Создание лендингов в ${cityName}` : `Landing page creation in ${cityNameNominative}`,
              "description": lang === 'ru' ? `Разработка одностраничных сайтов для рекламных кампаний в ${cityName}` : `Single-page website development for advertising campaigns in ${cityNameNominative}`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": lang === 'ru' ? `Разработка интернет-магазинов в ${cityName}` : `Online store development in ${cityNameNominative}`,
              "description": lang === 'ru' ? `Создание полнофункциональных интернет-магазинов в ${cityName}` : `Full-featured online store development in ${cityNameNominative}`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": lang === 'ru' ? `Корпоративные сайты в ${cityName}` : `Corporate websites in ${cityNameNominative}`,
              "description": lang === 'ru' ? `Разработка многостраничных корпоративных сайтов в ${cityName}` : `Multi-page corporate website development in ${cityNameNominative}`
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "100"
      }
    };

    // Organization Schema
    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      "name": "ITshka",
      "alternateName": "ITshka Web Studio",
      "url": baseUrl,
      "logo": `${baseUrl}/favicon.svg`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": currentPhone.tel,
        "contactType": "customer service",
        "areaServed": cityConfig.countryCode,
        "availableLanguage": ["ru", "en", "pl"]
      },
      "sameAs": [
        "https://www.facebook.com/itshka",
        "https://www.instagram.com/itshka"
      ]
    };

    // BreadcrumbList Schema
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": lang === 'ru' ? 'Главная' : lang === 'en' ? 'Home' : 'Strona główna',
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": cityNameNominative,
          "item": canonicalUrl
        }
      ]
    };

    // FAQPage Schema
    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": lang === 'ru' 
            ? `Сколько стоит создание сайта в ${cityName}?`
            : lang === 'en'
            ? `How much does website development cost in ${cityName}?`
            : `Ile kosztuje tworzenie strony w ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'ru'
              ? `Стоимость разработки сайта в ${cityName} зависит от типа проекта: лендинг от 500 BYN, сайт-визитка от 800 BYN, корпоративный сайт от 1500 BYN, интернет-магазин от 2500 BYN.`
              : lang === 'en'
              ? `The cost of website development in ${cityName} depends on the project type: landing page from 500 BYN, business card site from 800 BYN, corporate website from 1500 BYN, online store from 2500 BYN.`
              : `Koszt tworzenia strony w ${cityName} zależy od typu projektu: strona landingowa od 500 BYN, strona wizytówkowa od 800 BYN, strona korporacyjna od 1500 BYN, sklep internetowy od 2500 BYN.`
          }
        },
        {
          "@type": "Question",
          "name": lang === 'ru'
            ? `Сколько времени занимает разработка сайта в ${cityName}?`
            : lang === 'en'
            ? `How long does website development take in ${cityName}?`
            : `Ile czasu zajmuje tworzenie strony w ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'ru'
              ? `Сроки разработки: лендинг от 3 дней, сайт-визитка от 5 дней, корпоративный сайт от 10 дней, интернет-магазин от 14 дней.`
              : lang === 'en'
              ? `Development time: landing page from 3 days, business card site from 5 days, corporate website from 10 days, online store from 14 days.`
              : `Czas realizacji: strona landingowa od 3 dni, strona wizytówkowa od 5 dni, strona korporacyjna od 10 dni, sklep internetowy od 14 dni.`
          }
        },
        {
          "@type": "Question",
          "name": lang === 'ru'
            ? `Нужна ли предоплата за создание сайта в ${cityName}?`
            : lang === 'en'
            ? `Is prepayment required for website development in ${cityName}?`
            : `Czy wymagana jest przedpłata za tworzenie strony w ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'ru'
              ? `Нет, предоплата не требуется. Мы сначала делаем сайт, показываем результат, и только потом вы платите. Если результат не нравится — вы не платите.`
              : lang === 'en'
              ? `No, prepayment is not required. We make the website first, show the result, and only then you pay. If you don't like the result — you don't pay.`
              : `Nie, przedpłata nie jest wymagana. Najpierw robimy stronę, pokazujemy wynik, a dopiero potem płacisz. Jeśli wynik Ci się nie podoba — nie płacisz.`
          }
        }
      ]
    };

    return { localBusiness, organization, breadcrumb, faqPage };
  };

  const structuredData = getStructuredData();

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
      
      {/* Дополнительные SEO мета-теги */}
      <meta name="theme-color" content="#1DA79E" />
      <meta name="msapplication-TileColor" content="#1DA79E" />
      <meta name="application-name" content={`ITshka ${cityNameNominative}`} />
      <meta name="apple-mobile-web-app-title" content={`ITshka ${cityNameNominative}`} />
      
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
      <meta property="og:image:alt" content={lang === 'ru' ? `ITshka — Создание сайтов в ${cityName}` : `ITshka — Website Development in ${cityNameNominative}`} />
      <meta property="og:locale" content={lang === 'ru' ? 'ru_RU' : lang === 'en' ? 'en_US' : 'pl_PL'} />
      <meta property="og:site_name" content={lang === 'ru' ? `ITshka — Создание сайтов в ${cityName}` : `ITshka — Website Development in ${cityNameNominative}`} />
      <meta property="og:phone_number" content={currentPhone.tel} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={getTitle()} />
      <meta name="twitter:description" content={getDescription()} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      <meta name="twitter:image:alt" content={lang === 'ru' ? `ITshka — Создание сайтов в ${cityName}` : `ITshka — Website Development in ${cityNameNominative}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate для других языков */}
      <link rel="alternate" hreflang="ru" href={`${baseUrl}/${cityConfig.code}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}/${cityConfig.code}`} />
      <link rel="alternate" hreflang="pl" href={`${baseUrl}/${cityConfig.code}`} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* Структурированные данные JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.localBusiness)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(structuredData.organization)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(structuredData.breadcrumb)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(structuredData.faqPage)}
      </script>
    </Helmet>
  );
};

export default SEOMeta;

