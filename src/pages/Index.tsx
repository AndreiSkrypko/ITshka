import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BonusCard from "@/components/BonusCard";
import FeatureCards from "@/components/FeatureCards";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="h-screen relative bg-[#050809] overflow-hidden">
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
      <div className="hidden lg:block absolute bottom-[85px] right-0 w-[50%] px-8">
        <FeatureCards />
      </div>
      
      {/* Bottom Section */}
      <div className="px-6 md:px-12 lg:px-16 pb-5 mt-10 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
        <div className="w-full lg:max-w-[45%]">
          <BonusCard />
        </div>
        
        {/* Footer */}
        <footer className="flex flex-col sm:flex-row items-center justify-between mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <span className="text-[10px] text-white/60 font-medium tracking-wide">© 2024 ITshka</span>
            <SocialLinks />
          </div>
          <span className="text-[10px] text-white/50 tracking-wide">
            Создаём сайты, которые работают на бизнес
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Index;
