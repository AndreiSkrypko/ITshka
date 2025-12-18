import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BonusCard from "@/components/BonusCard";
import FeatureCards from "@/components/FeatureCards";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen lg:h-screen relative bg-[#050809] overflow-x-hidden lg:overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px] animate-pulse-soft pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-primary/8 rounded-full blur-[100px] animate-pulse-soft pointer-events-none" style={{ animationDelay: '2s' }} />
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} 
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,167,158,0.15),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(29,167,158,0.08),transparent)] pointer-events-none" />

      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[60px] pointer-events-none" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      
      <Header />
      <HeroSection />
      
      {/* Right - Features (aligned with image) */}
      <div className="hidden lg:block absolute bottom-[85px] right-0 w-[50%] px-8">
        <FeatureCards />
      </div>
      
      {/* Bottom Section */}
      <div className="px-6 md:px-12 lg:px-16 pb-5 mt-10 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
        <div className="w-full lg:max-w-[45%]">
          <BonusCard />
        </div>
        
        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <span className="text-[10px] text-white/40 font-medium tracking-wide">© 2024 ITshka</span>
            <SocialLinks />
          </div>
          <span className="text-[10px] text-white/30 tracking-wide">
            Создаём сайты, которые работают на бизнес
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
