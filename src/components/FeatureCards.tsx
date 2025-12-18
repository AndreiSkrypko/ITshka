import { Check } from "lucide-react";

const features = [
  {
    title: "Современный дизайн",
    description: "Адаптив под мобильные"
  },
  {
    title: "SEO-оптимизация", 
    description: "Продвижение в поиске"
  },
  {
    title: "Техподдержка",
    description: "7 дней в неделю"
  }
];

const FeatureCards = () => {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-card rounded-xl p-4 shadow-card flex items-start gap-3 opacity-0 animate-fade-in"
          style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        >
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-4 h-4 text-primary-foreground" />
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
