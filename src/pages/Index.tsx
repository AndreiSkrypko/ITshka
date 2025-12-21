import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BonusCard from "@/components/BonusCard";
import FeatureCards from "@/components/FeatureCards";
import SocialLinks from "@/components/SocialLinks";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen overflow-hidden relative bg-[#050809] overflow-x-hidden">
      {/* SEO Content - видимый для поисковиков, скрыт для пользователей */}
      <div className="sr-only" aria-hidden="false">
        <h2>Веб-студия ITshka в Минске — создание сайтов под ключ</h2>
        <p>
          ITshka — профессиональная веб-студия в Минске, специализирующаяся на создании сайтов под ключ. 
          Мы предлагаем разработку сайтов в Минске и Минской области: лендинги, интернет-магазины, 
          корпоративные сайты, сайты-визитки. Сначала делаем сайт — потом вы платите. Без предоплаты, 
          с гарантией результата. Сроки разработки от 3 дней. Звоните: +375 29 121-09-08.
        </p>
        
        <h3>Создание сайтов в Минске</h3>
        <p>
          Разработка сайтов в Минске — наша основная специализация. Мы создаём современные, адаптивные 
          сайты для бизнеса в Минске и Минской области. Каждый сайт оптимизирован для поисковых систем, 
          имеет мобильную версию и работает на всех устройствах.
        </p>
        
        <h3>Услуги веб-разработки в Минске</h3>
        <ul>
          <li>Создание лендингов в Минске — одностраничные сайты для рекламных кампаний</li>
          <li>Разработка интернет-магазинов в Минске — полнофункциональные онлайн-магазины</li>
          <li>Корпоративные сайты под ключ — многостраничные сайты для компаний</li>
          <li>Сайты-визитки для бизнеса в Минске — простые и эффективные решения</li>
          <li>Адаптивный дизайн — сайты работают на всех устройствах</li>
          <li>SEO-оптимизация — продвижение сайтов в поисковых системах</li>
        </ul>
        
        <h3>Почему выбирают ITshka в Минске</h3>
        <p>
          Веб-студия ITshka работает в Минске и Минской области более 5 лет. Мы создали более 100 
          успешных проектов. Наша особенность — сначала делаем сайт, показываем результат, и только 
          потом вы платите. Если результат не нравится — вы не платите. Это наша гарантия качества.
        </p>
        
        <h3>Стоимость создания сайта в Минске</h3>
        <p>
          Стоимость разработки сайта в Минске зависит от типа проекта: лендинг от 500 BYN, сайт-визитка 
          от 800 BYN, корпоративный сайт от 1500 BYN, интернет-магазин от 2500 BYN. Точную стоимость 
          рассчитаем после заполнения брифа. Сроки разработки: лендинг от 3 дней, сайт-визитка от 5 дней, 
          корпоративный сайт от 10 дней, интернет-магазин от 14 дней.
        </p>
        
        <h3>Контакты веб-студии в Минске</h3>
        <p>
          Веб-студия ITshka работает в Минске, Минская область, Беларусь. Телефон: +375 29 121-09-08. 
          Мы создаём сайты для бизнеса в Минске и по всей Минской области. Свяжитесь с нами через 
          WhatsApp, Telegram или Viber для консультации.
        </p>
      </div>
      {/* Decorative background elements */}
      <div aria-hidden="true">
        {/* Optimized gradient orbs - GPU accelerated, reduced blur */}
        <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] bg-primary/12 rounded-full blur-[100px] pointer-events-none will-change-transform transform-gpu" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[80px] pointer-events-none will-change-transform transform-gpu" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-primary/6 rounded-full blur-[60px] pointer-events-none will-change-transform transform-gpu" />

        {/* Radial gradient overlay - combined for performance */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,167,158,0.12),transparent),radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(29,167,158,0.06),transparent)] pointer-events-none" />

        {/* Simplified spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/8 to-transparent blur-[40px] pointer-events-none transform-gpu" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      </div>
      
      <Header />
      <HeroSection />
      
      {/* Right - Features (aligned with image) */}
      <div className="hidden lg:block absolute bottom-[145px] right-0 w-[50%] px-8">
        <FeatureCards />
      </div>
      
      {/* Bottom Section */}
      <div className="px-6 md:px-12 lg:px-16 pb-5 absolute bottom-0 left-0 right-0 h-[140px] flex flex-col justify-end">
        <div className="w-full lg:max-w-[45%]">
          <BonusCard />
        </div>
        
        {/* Footer */}
        <footer className="flex flex-col sm:flex-row items-center justify-between mt-4 lg:mt-2 pt-4 lg:pt-2 border-t border-white/10">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <span className="text-[10px] text-white/60 font-medium tracking-wide">© 2024 ITshka</span>
            <SocialLinks />
          </div>
          <span className="text-[10px] text-white/50 tracking-wide">
            {t("footer.tagline")}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Index;
