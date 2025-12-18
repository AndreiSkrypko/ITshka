import { Palette, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Дизайн",
    description: "Адаптивный"
  },
  {
    icon: TrendingUp,
    title: "SEO", 
    description: "С первого дня"
  },
  {
    icon: Shield,
    title: "Поддержка",
    description: "24/7"
  }
];

const FeatureCards = () => {
  return (
    <div className="flex gap-3 w-full">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="flex-1 bg-card/95 backdrop-blur-xl rounded-2xl px-4 py-4 flex items-center gap-3 opacity-0 animate-fade-in border border-primary/40 shadow-[0_10px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(16,185,129,0.1)] hover:shadow-[0_14px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(16,185,129,0.2)] hover:border-primary/60 hover:scale-[1.02] transition-all group"
          style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_hsl(160_84%_39%/0.2)] group-hover:shadow-[0_0_30px_hsl(160_84%_39%/0.35)] transition-shadow">
            <feature.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-foreground text-sm">{feature.title}</p>
            <p className="text-xs text-muted-foreground truncate">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
