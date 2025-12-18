import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BonusCard from "@/components/BonusCard";
import FeatureCards from "@/components/FeatureCards";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden relative bg-background">
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
      
      <Header />
      <HeroSection />
      
      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 pb-5">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
          {/* Left - Bonus Card */}
          <div className="w-full lg:w-auto lg:max-w-sm">
            <BonusCard />
          </div>
          
          {/* Right - Features */}
          <div className="hidden lg:block">
            <FeatureCards />
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 pt-3 border-t border-border/30">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <span className="text-xs text-muted-foreground">© 2024 ITshka</span>
            <SocialLinks />
          </div>
          <span className="text-xs text-muted-foreground">
            Разработка сайтов для бизнеса
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
