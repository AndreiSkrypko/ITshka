import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BonusCard from "@/components/BonusCard";
import FeatureCards from "@/components/FeatureCards";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden relative bg-background">
      {/* Premium background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(16,185,129,0.08),transparent)] pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Ambient glow effects */}
      <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      
      <Header />
      <HeroSection />
      
      {/* Right - Features (aligned with image) */}
      <div className="hidden lg:block absolute bottom-[85px] right-0 w-[50%] px-8">
        <FeatureCards />
      </div>
      
      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 pb-5">
        <div className="w-full lg:max-w-[45%]">
          <BonusCard />
        </div>
        
        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-3 pt-3 border-t border-border/20">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <span className="text-[10px] text-muted-foreground/70 font-medium tracking-wide">© 2024 ITshka</span>
            <SocialLinks />
          </div>
          <span className="text-[10px] text-muted-foreground/50 tracking-wide">
            Создаём сайты, которые работают на бизнес
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
