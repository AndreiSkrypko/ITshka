import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20 pb-8 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 opacity-0 animate-fade-in">
            Сначала сайт — потом деньги!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Без рисков. Вы видите результат до оплат.<br />
            Не нравится — не платите.
          </p>
          
          <Button 
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-button hover:shadow-lg transition-all hover:scale-105 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
            onClick={() => window.open('https://wa.me/375291210908', '_blank')}
          >
            Получить проект бесплатно
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <div className="relative w-full h-full opacity-0 animate-slide-in-right">
          <img 
            src={heroImage} 
            alt="Разработка сайтов ITshka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
