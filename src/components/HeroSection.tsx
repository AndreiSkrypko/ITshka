import { useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Layers, Zap } from "lucide-react";

// Lazy load heavy modal component
const ProjectBriefModal = lazy(() => import("./ProjectBriefModal"));

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative flex mt-20 md:mt-24 mb-8 lg:mt-16 lg:mb-0 lg:h-[calc(100vh-220px)]">
      {/* Left Content */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-16 z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.05s' }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">
              {t('hero.badge')}
            </span>
          </div>
          
          {/* Main heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.1] mb-6 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.1s' }}
          >
            {t('hero.title1')}{' '}
            <span className="relative inline-block">
              <span className="text-primary">{t('hero.title2')}</span>
              {/* Underline effect */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path 
                  d="M2 6C50 2 150 2 198 6" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="text-primary/40"
                />
              </svg>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed opacity-0 animate-fade-in max-w-lg" 
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-white/70 font-medium">{t('hero.subtitle')}</span> {t('hero.subtitleText')}
            <br className="hidden sm:block" />
            {t('hero.subtitleText2')}
          </p>
          
          {/* CTA Button */}
          <div 
            className="flex flex-col items-start gap-4 opacity-0 animate-fade-in w-full" 
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              size="lg"
              className="relative group text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-14 py-6 sm:py-7 md:py-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_20px_60px_-15px_rgba(25,167,158,0.5)] hover:shadow-[0_25px_70px_-15px_rgba(25,167,158,0.6)] transition-all duration-300 hover:scale-[1.02] overflow-hidden max-w-full"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2 sm:gap-3">
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </span>
            </Button>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-white/40">{t('hero.response')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <span className="text-xs text-white/40">{t('hero.projects')}</span>
              </div>
            </div>
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
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full pointer-events-none">
        <div 
          className="relative w-full h-full opacity-0 animate-slide-in-right" 
          style={{ animationDelay: '0.2s' }}
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
          
          {/* Feature cards - pointer-events-auto to make them interactive */}
          <div className="absolute top-[8%] right-[5%] p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] animate-fade-in pointer-events-auto hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{t('hero.cleanCode')}</p>
                <p className="text-[11px] text-white/35">{t('hero.modernTech')}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-[32%] left-[5%] p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] animate-fade-in pointer-events-auto hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{t('hero.adaptive')}</p>
                <p className="text-[11px] text-white/35">{t('hero.anyDevice')}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[22%] right-[8%] p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] animate-fade-in pointer-events-auto hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{t('hero.speed')}</p>
                <p className="text-[11px] text-white/35">{t('hero.fastLoading')}</p>
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
          
          {/* Stats - bottom left of the right section */}
          <div className="absolute bottom-[10%] left-[10%] flex items-center gap-8 pointer-events-auto">
            <div className="text-center">
              <p className="text-4xl font-black text-primary">100+</p>
              <p className="text-xs text-white/30 mt-1">{t('hero.projectsCount')}</p>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="text-center">
              <p className="text-4xl font-black text-primary">5+</p>
              <p className="text-xs text-white/30 mt-1">{t('hero.yearsExp')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
