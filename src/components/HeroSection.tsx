import { useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Layers, Zap } from "lucide-react";
import { useCity } from "@/contexts/CityContext";

// Lazy load heavy modal component
const ProjectBriefModal = lazy(() => import("./ProjectBriefModal"));

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { cityConfig, isInCity } = useCity();
  const lang = i18n.language as 'ru' | 'en' | 'pl';
  // Используем склонение только если пользователь в городе
  const cityName = (isInCity && lang === 'ru') 
    ? cityConfig.nameLocative[lang] 
    : cityConfig.name[lang] || cityConfig.name.ru;
  const badgeText = lang === 'ru' 
    ? `Веб-студия в ${cityName}`
    : lang === 'en'
    ? `Web Studio in ${cityName}`
    : `Studio Internetowe w ${cityName}`;

  return (
    <section className="relative flex mt-0 lg:mt-16 mb-0 h-auto lg:h-[calc(100vh-180px)] flex-shrink-0">
      {/* Left Content */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-0 lg:px-16 z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 lg:mb-7 animate-fade-in"
            role="status"
          >
            <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-primary" aria-hidden="true" />
            <span className="text-xs lg:text-sm uppercase tracking-[0.15em] lg:tracking-[0.2em] text-white/70 font-medium">
              {badgeText}
            </span>
          </div>
          
          {/* Main heading */}
          <h1 
            className="text-4xl lg:text-[4rem] xl:text-[4.5rem] font-black text-white leading-[1.1] mb-5 lg:mb-6 animate-fade-in" 
            style={{ animationDelay: '0.05s' }}
          >
            {t('hero.title1')}{' '}
            <span className="relative inline-block">
              <span className="text-primary">{t('hero.title2')}</span>
              {/* Underline effect */}
              <svg className="absolute -bottom-1 lg:-bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                <path 
                  d="M2 6C50 2 150 2 198 6" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="text-primary/40 lg:stroke-[3]"
                />
              </svg>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-lg lg:text-xl text-white/60 mb-7 lg:mb-8 leading-relaxed animate-fade-in" 
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-white/80 font-medium">{t('hero.subtitle')}</span> {t('hero.subtitleText')}
            <br />
            {t('hero.subtitleText2')}
          </p>
          
          {/* CTA Button */}
          <div 
            className="flex flex-col items-start gap-4 animate-fade-in w-full" 
            style={{ animationDelay: '0.15s' }}
          >
            <Button 
              size="lg"
              className="relative group text-xl lg:text-3xl px-10 lg:px-20 py-7 lg:py-10 rounded-2xl lg:rounded-3xl bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_20px_60px_-15px_rgba(25,167,158,0.5)] hover:shadow-[0_25px_70px_-15px_rgba(25,167,158,0.6)] transition-all duration-300 hover:scale-[1.02] overflow-hidden w-full lg:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center justify-center gap-4 lg:gap-6">
                {t('hero.cta')}
                <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Brief Modal - lazy loaded */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ProjectBriefModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </Suspense>
      )}

      {/* Right - Abstract Premium Design (seamless with background) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full pointer-events-none" aria-hidden="true">
        <div 
          className="relative w-full h-full animate-slide-in-right" 
          style={{ animationDelay: '0.1s' }}
        >
          {/* Optimized glows - reduced blur for better performance */}
          <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] transform-gpu" />
          <div className="absolute bottom-[20%] right-[30%] w-[300px] h-[300px] bg-primary/12 rounded-full blur-[60px] transform-gpu" />
          <div className="absolute top-[40%] left-[10%] w-[250px] h-[250px] bg-primary/8 rounded-full blur-[50px] transform-gpu" />
          
          {/* Floating geometric shapes - optimized with will-change */}
          <div className="absolute top-[12%] right-[15%] w-28 h-28 border-2 border-primary/25 rounded-3xl rotate-12 will-change-transform" />
          <div className="absolute top-[22%] right-[35%] w-20 h-20 border border-primary/15 rounded-2xl rotate-45 will-change-transform" />
          <div className="absolute bottom-[25%] right-[10%] w-24 h-24 border-2 border-primary/20 rounded-full will-change-transform" />
          <div className="absolute top-[50%] right-[45%] w-16 h-16 bg-primary/8 rounded-2xl rotate-12 will-change-transform" />
          <div className="absolute bottom-[40%] right-[25%] w-12 h-12 border border-primary/20 rounded-xl -rotate-12 will-change-transform" />
          
          {/* Decorative dots */}
          <div className="absolute top-[18%] right-[25%] w-2 h-2 bg-primary/40 rounded-full" />
          <div className="absolute top-[35%] right-[12%] w-3 h-3 bg-primary/30 rounded-full" />
          <div className="absolute bottom-[35%] right-[40%] w-2 h-2 bg-primary/50 rounded-full" />
          <div className="absolute top-[60%] right-[18%] w-2 h-2 bg-primary/35 rounded-full" />
          
          {/* Feature cards */}
          <div className="absolute top-[18%] right-[12%] p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] animate-float pointer-events-auto hover:bg-white/[0.06] hover:border-primary/30 hover:scale-105 hover:shadow-[0_10px_30px_-5px_rgba(25,167,158,0.3)] transition-all duration-300 group z-30" style={{ animationDelay: '0.2s', animation: 'fade-in 0.6s ease-out 0.2s forwards, float 3s ease-in-out 0.2s infinite' }}>
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center group-hover:from-primary/35 group-hover:to-primary/10 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
                <Code2 className="w-5 h-5 text-primary relative z-10 animate-icon-pulse" />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors duration-300">{t('hero.cleanCode')}</p>
                <p className="text-[11px] text-white/50 group-hover:text-white/70 transition-colors duration-300">{t('hero.modernTech')}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-[32%] left-[12%] p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] animate-float-slow pointer-events-auto hover:bg-white/[0.06] hover:border-primary/30 hover:scale-105 hover:shadow-[0_10px_30px_-5px_rgba(25,167,158,0.3)] transition-all duration-300 group z-30" style={{ animationDelay: '0.25s', animation: 'fade-in 0.6s ease-out 0.25s forwards, float-slow 4s ease-in-out 0.75s infinite' }}>
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center group-hover:from-primary/35 group-hover:to-primary/10 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
                <Layers className="w-5 h-5 text-primary relative z-10 animate-icon-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors duration-300">{t('hero.adaptive')}</p>
                <p className="text-[11px] text-white/50 group-hover:text-white/70 transition-colors duration-300">{t('hero.anyDevice')}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[32%] right-[22%] p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] animate-float-fast pointer-events-auto hover:bg-white/[0.06] hover:border-primary/30 hover:scale-105 hover:shadow-[0_10px_30px_-5px_rgba(25,167,158,0.3)] transition-all duration-300 group z-30" style={{ animationDelay: '0.3s', animation: 'fade-in 0.6s ease-out 0.3s forwards, float-fast 2.5s ease-in-out 1.3s infinite' }}>
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center group-hover:from-primary/35 group-hover:to-primary/10 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
                <Zap className="w-5 h-5 text-primary relative z-10 animate-icon-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors duration-300">{t('hero.speed')}</p>
                <p className="text-[11px] text-white/50 group-hover:text-white/70 transition-colors duration-300">{t('hero.fastLoading')}</p>
              </div>
            </div>
          </div>
          
          {/* Central glowing element - optimized */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu">
            <div className="relative">
              {/* Outer rings - static for performance */}
              <div className="absolute -inset-8 w-56 h-56 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute -inset-4 w-48 h-48 rounded-full bg-gradient-to-br from-primary/15 to-transparent" />
              
              {/* Center glow */}
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 via-primary/15 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
