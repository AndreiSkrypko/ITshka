import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BonusCard from "@/components/BonusCard";
import FeatureCards from "@/components/FeatureCards";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden relative bg-background">
      <Header />
      <HeroSection />
      
      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-6">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
          {/* Left - Bonus Card */}
          <div className="w-full lg:w-auto lg:max-w-md">
            <BonusCard />
          </div>
          
          {/* Right - Features */}
          <div className="hidden md:block">
            <FeatureCards />
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-4 mb-3 sm:mb-0">
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
