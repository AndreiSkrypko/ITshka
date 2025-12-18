import { Smartphone, Search, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Современный дизайн",
    description: "Адаптив под мобильные"
  },
  {
    icon: Search,
    title: "SEO-оптимизация", 
    description: "Продвижение в поиске"
  },
  {
    icon: HeadphonesIcon,
    title: "Техподдержка",
    description: "7 дней в неделю"
  }
];

const FeatureCards = () => {
  return (
    <div className="flex gap-3">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-card/60 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3 opacity-0 animate-fade-in border border-border/40 hover:border-primary/30 hover:bg-card/80 transition-all group"
          style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        >
          <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
            <feature.icon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">{feature.title}</p>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
