import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-180px)] flex mt-20">
      {/* Left Content */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-16 z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 opacity-0 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(142_70%_50%/0.8)]" />
            Разрабатываем сайты под ключ
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-foreground leading-[1.1] mb-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Сначала сайт —{' '}
            <span className="text-primary">потом деньги!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in max-w-lg" style={{ animationDelay: '0.2s' }}>
            Без рисков. Вы видите результат до оплаты.
            <br className="hidden sm:block" />
            Не нравится — не платите.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-button hover:shadow-[0_4px_30px_-2px_hsl(142_70%_50%/0.6)] transition-all hover:scale-105 group bg-primary text-primary-foreground"
              onClick={() => window.open('https://wa.me/375291210908', '_blank')}
            >
              Получить проект бесплатно
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <a 
              href="tel:+375291210908"
              className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base font-medium"
            >
              или позвоните: +375 29 121-09-08
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block absolute top-0 right-0 w-[50%] h-full">
        <div className="relative w-full h-full opacity-0 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl border border-border/30">
            <img 
              src={heroImage} 
              alt="Разработка сайтов ITshka"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
