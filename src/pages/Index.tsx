import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BonusCard from "@/components/BonusCard";
import FeatureCards from "@/components/FeatureCards";
import SocialLinks from "@/components/SocialLinks";
import SEOMeta from "@/components/SEOMeta";
import { useTranslation } from "react-i18next";
import { useCity } from "@/contexts/CityContext";

const Index = () => {
  const { t, i18n } = useTranslation();
  const { cityConfig } = useCity();
  const lang = i18n.language as 'ru' | 'en' | 'pl';

  const cityName = cityConfig.name[lang] || cityConfig.name.ru;
  const regionName = cityConfig.region[lang] || cityConfig.region.ru;

  // Генерируем SEO контент в зависимости от города и языка
  const getSEOContent = () => {
    if (lang === 'ru') {
      return {
        h2: `Сделать сайт в ${cityName} | Веб-студия ITshka — создание сайтов под ключ`,
        intro: `Хотите сделать сайт в ${cityName}? ITshka — профессиональная веб-студия в ${cityName}, специализирующаяся на создании сайтов под ключ. Мы предлагаем разработку сайтов в ${cityName} и ${regionName}: лендинги, интернет-магазины, корпоративные сайты, сайты-визитки. Сначала делаем сайт — потом вы платите. Без предоплаты, с гарантией результата. Сроки разработки от 3 дней. Звоните: ${cityConfig.phone.display}.`,
        h3_1: `Сделать сайт в ${cityName} — быстро и недорого`,
        p1: `Хотите сделать сайт в ${cityName}? Разработка сайтов в ${cityName} — наша основная специализация. Мы создаём современные, адаптивные сайты для бизнеса в ${cityName} и ${regionName}. Каждый сайт оптимизирован для поисковых систем, имеет мобильную версию и работает на всех устройствах. Сделать сайт в ${cityName} можно от 3 дней.`,
        h3_2: `Услуги веб-разработки в ${cityName}`,
        services: [
          `Создание лендингов в ${cityName} — одностраничные сайты для рекламных кампаний`,
          `Разработка интернет-магазинов в ${cityName} — полнофункциональные онлайн-магазины`,
          `Корпоративные сайты под ключ — многостраничные сайты для компаний`,
          `Сайты-визитки для бизнеса в ${cityName} — простые и эффективные решения`,
          `Адаптивный дизайн — сайты работают на всех устройствах`,
          `SEO-оптимизация — продвижение сайтов в поисковых системах`
        ],
        h3_3: `Почему выбирают ITshka в ${cityName}`,
        p2: `Веб-студия ITshka работает в ${cityName} и ${regionName} более 5 лет. Мы создали более 100 успешных проектов. Наша особенность — сначала делаем сайт, показываем результат, и только потом вы платите. Если результат не нравится — вы не платите. Это наша гарантия качества.`,
        h3_4: `Стоимость создания сайта в ${cityName}`,
        p3: `Стоимость разработки сайта в ${cityName} зависит от типа проекта: лендинг от 500 BYN, сайт-визитка от 800 BYN, корпоративный сайт от 1500 BYN, интернет-магазин от 2500 BYN. Точную стоимость рассчитаем после заполнения брифа. Сроки разработки: лендинг от 3 дней, сайт-визитка от 5 дней, корпоративный сайт от 10 дней, интернет-магазин от 14 дней.`,
        h3_5: `Контакты веб-студии в ${cityName}`,
        p4: `Веб-студия ITshka работает в ${cityName}, ${regionName}. Телефон: ${cityConfig.phone.display}. Мы создаём сайты для бизнеса в ${cityName} и по всей ${regionName}. Свяжитесь с нами через WhatsApp, Telegram или Viber для консультации.`
      };
    } else if (lang === 'en') {
      return {
        h2: `ITshka Web Studio in ${cityName} — Website Development`,
        intro: `ITshka is a professional web studio in ${cityName}, specializing in turnkey website development. We offer website development in ${cityName} and ${regionName}: landing pages, online stores, corporate websites, business card sites. Website first — pay later. No prepayment, with result guarantee. Development time from 3 days. Call: ${cityConfig.phone.display}.`,
        h3_1: `Website Development in ${cityName}`,
        p1: `Website development in ${cityName} is our main specialization. We create modern, responsive websites for businesses in ${cityName} and ${regionName}. Every website is optimized for search engines, has a mobile version and works on all devices.`,
        h3_2: `Web Development Services in ${cityName}`,
        services: [
          `Landing page creation in ${cityName} — single-page sites for advertising campaigns`,
          `Online store development in ${cityName} — full-featured online stores`,
          `Corporate websites — multi-page sites for companies`,
          `Business card sites for businesses in ${cityName} — simple and effective solutions`,
          `Responsive design — sites work on all devices`,
          `SEO optimization — website promotion in search engines`
        ],
        h3_3: `Why Choose ITshka in ${cityName}`,
        p2: `ITshka web studio has been working in ${cityName} and ${regionName} for over 5 years. We have created over 100 successful projects. Our feature — we make the website first, show the result, and only then you pay. If you don't like the result — you don't pay. This is our quality guarantee.`,
        h3_4: `Website Development Cost in ${cityName}`,
        p3: `The cost of website development in ${cityName} depends on the project type: landing page from 500 BYN, business card site from 800 BYN, corporate website from 1500 BYN, online store from 2500 BYN. Exact cost will be calculated after filling out the brief. Development time: landing page from 3 days, business card site from 5 days, corporate website from 10 days, online store from 14 days.`,
        h3_5: `Web Studio Contacts in ${cityName}`,
        p4: `ITshka web studio works in ${cityName}, ${regionName}. Phone: ${cityConfig.phone.display}. We create websites for businesses in ${cityName} and throughout ${regionName}. Contact us via WhatsApp, Telegram or Viber for consultation.`
      };
    } else {
      return {
        h2: `ITshka Web Studio w ${cityName} — Tworzenie Stron Internetowych`,
        intro: `ITshka to profesjonalne studio internetowe w ${cityName}, specjalizujące się w tworzeniu stron internetowych pod klucz. Oferujemy tworzenie stron internetowych w ${cityName} i ${regionName}: strony landingowe, sklepy internetowe, strony korporacyjne, strony wizytówkowe. Najpierw strona — potem płatność. Bez przedpłaty, z gwarancją wyniku. Czas realizacji od 3 dni. Zadzwoń: ${cityConfig.phone.display}.`,
        h3_1: `Tworzenie Stron Internetowych w ${cityName}`,
        p1: `Tworzenie stron internetowych w ${cityName} to nasza główna specjalizacja. Tworzymy nowoczesne, responsywne strony internetowe dla firm w ${cityName} i ${regionName}. Każda strona jest zoptymalizowana pod kątem wyszukiwarek, ma wersję mobilną i działa na wszystkich urządzeniach.`,
        h3_2: `Usługi Tworzenia Stron w ${cityName}`,
        services: [
          `Tworzenie stron landingowych w ${cityName} — strony jednoscreenowe dla kampanii reklamowych`,
          `Tworzenie sklepów internetowych w ${cityName} — w pełni funkcjonalne sklepy online`,
          `Strony korporacyjne pod klucz — wielostronne strony dla firm`,
          `Strony wizytówkowe dla firm w ${cityName} — proste i skuteczne rozwiązania`,
          `Projekt responsywny — strony działają na wszystkich urządzeniach`,
          `Optymalizacja SEO — promocja stron w wyszukiwarkach`
        ],
        h3_3: `Dlaczego Wybrać ITshka w ${cityName}`,
        p2: `Studio internetowe ITshka działa w ${cityName} i ${regionName} od ponad 5 lat. Stworzyliśmy ponad 100 udanych projektów. Nasza cecha — najpierw robimy stronę, pokazujemy wynik, a dopiero potem płacisz. Jeśli wynik Ci się nie podoba — nie płacisz. To nasza gwarancja jakości.`,
        h3_4: `Koszt Tworzenia Strony w ${cityName}`,
        p3: `Koszt tworzenia strony w ${cityName} zależy od typu projektu: strona landingowa od 500 BYN, strona wizytówkowa od 800 BYN, strona korporacyjna od 1500 BYN, sklep internetowy od 2500 BYN. Dokładny koszt obliczymy po wypełnieniu briefu. Czas realizacji: strona landingowa od 3 dni, strona wizytówkowa od 5 dni, strona korporacyjna od 10 dni, sklep internetowy od 14 dni.`,
        h3_5: `Kontakty Studia w ${cityName}`,
        p4: `Studio internetowe ITshka działa w ${cityName}, ${regionName}. Telefon: ${cityConfig.phone.display}. Tworzymy strony internetowe dla firm w ${cityName} i w całej ${regionName}. Skontaktuj się z nami przez WhatsApp, Telegram lub Viber w celu konsultacji.`
      };
    }
  };

  const seoContent = getSEOContent();

  return (
    <>
      <SEOMeta />
      {/* Desktop version - fixed layout */}
      <div className="hidden lg:block h-screen overflow-hidden relative bg-[#050809] overflow-x-hidden">
        {/* SEO Content - видимый для поисковиков, скрыт для пользователей */}
        <div className="sr-only" aria-hidden="false">
          <h2>{seoContent.h2}</h2>
          <p>{seoContent.intro}</p>
          
          <h3>{seoContent.h3_1}</h3>
          <p>{seoContent.p1}</p>
          
          <h3>{seoContent.h3_2}</h3>
          <ul>
            {seoContent.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          
          <h3>{seoContent.h3_3}</h3>
          <p>{seoContent.p2}</p>
          
          <h3>{seoContent.h3_4}</h3>
          <p>{seoContent.p3}</p>
          
          <h3>{seoContent.h3_5}</h3>
          <p>{seoContent.p4}</p>
        </div>
        
        {/* Decorative background elements */}
        <div aria-hidden="true">
          <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] bg-primary/12 rounded-full blur-[100px] pointer-events-none will-change-transform transform-gpu" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[80px] pointer-events-none will-change-transform transform-gpu" />
          <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-primary/6 rounded-full blur-[60px] pointer-events-none will-change-transform transform-gpu" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,167,158,0.12),transparent),radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(29,167,158,0.06),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/8 to-transparent blur-[40px] pointer-events-none transform-gpu" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        </div>
        
        <Header />
        
        {/* Stats */}
        <div className="absolute top-[100px] right-[15%] flex items-center gap-8 animate-fade-in z-20" style={{ animationDelay: '0.03s' }}>
          <div className="text-center">
            <p className="text-6xl font-black text-primary leading-none">100+</p>
            <p className="text-base text-white/70 mt-2 font-medium">{t('hero.projectsCount')}</p>
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="text-center">
            <p className="text-6xl font-black text-primary leading-none">5+</p>
            <p className="text-base text-white/70 mt-2 font-medium">{t('hero.yearsExp')}</p>
          </div>
        </div>
        
        <HeroSection />
        
        {/* Right - Features */}
        <div className="absolute bottom-[145px] right-0 w-[50%] px-8">
          <FeatureCards />
        </div>
        
        {/* Bottom Section */}
        <div className="px-16 pb-5 absolute bottom-0 left-0 right-0 h-[140px] flex flex-col justify-end">
          <div className="w-full max-w-[45%]">
            <BonusCard />
          </div>
          
          <footer className="flex flex-row items-center justify-between mt-2 pt-2 border-t border-white/10">
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-white/60 font-medium tracking-wide">© 2024 ITshka</span>
              <SocialLinks />
            </div>
            <span className="text-[10px] text-white/50 tracking-wide">
              {t("footer.tagline")}
            </span>
          </footer>
        </div>
      </div>

      {/* Mobile version - scrollable layout */}
      <div className="lg:hidden min-h-screen relative bg-[#050809] overflow-x-hidden">
        {/* SEO Content */}
        <div className="sr-only" aria-hidden="false">
          <h2>{seoContent.h2}</h2>
          <p>{seoContent.intro}</p>
          <h3>{seoContent.h3_1}</h3>
          <p>{seoContent.p1}</p>
          <h3>{seoContent.h3_2}</h3>
          <ul>
            {seoContent.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <h3>{seoContent.h3_3}</h3>
          <p>{seoContent.p2}</p>
          <h3>{seoContent.h3_4}</h3>
          <p>{seoContent.p3}</p>
          <h3>{seoContent.h3_5}</h3>
          <p>{seoContent.p4}</p>
        </div>
        
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-primary/12 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-primary/8 rounded-full blur-[60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,167,158,0.1),transparent)]" />
        </div>
        
        {/* Header */}
        <div className="relative z-10">
          <Header />
        </div>
        
        {/* Hero Section */}
        <div className="relative z-10 pt-20 pb-8 px-4">
          <HeroSection />
        </div>
        
        {/* Bonus Card */}
        <div className="relative z-10 px-4 pb-6">
          <BonusCard />
        </div>
        
        {/* Footer */}
        <footer className="relative z-10 px-4 pb-6 pt-4 border-t border-white/10">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-white/60 font-medium tracking-wide">© 2024 ITshka</span>
              <SocialLinks />
            </div>
            <span className="text-[10px] text-white/50 tracking-wide text-center">
              {t("footer.tagline")}
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
