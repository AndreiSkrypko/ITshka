import { Palette, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeatureCards = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Palette,
      title: t('features.design'),
      description: t('features.designDesc'),
      gradient: "from-primary/30 to-primary/10"
    },
    {
      icon: TrendingUp,
      title: t('features.seo'), 
      description: t('features.seoDesc'),
      gradient: "from-primary/25 to-primary/5"
    },
    {
      icon: Shield,
      title: t('features.guarantee'),
      description: t('features.guaranteeDesc'),
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <div className="flex gap-3 w-full">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="group relative flex-1 overflow-hidden rounded-2xl animate-fade-in"
          style={{ animationDelay: `${0.2 + index * 0.05}s` }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Border */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors duration-300" />
          
          {/* Content */}
          <div className="relative px-4 py-5 flex items-center gap-3">
            {/* Icon */}
            <div className="relative flex-shrink-0" aria-hidden="true">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Text */}
            <div className="min-w-0">
              <p className="font-bold text-white text-sm group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </p>
              <p className="text-xs text-white/60 truncate">
                {feature.description}
              </p>
            </div>
          </div>
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
