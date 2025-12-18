import { Sparkles } from "lucide-react";

const BonusCard = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/60 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 opacity-0 animate-fade-in border border-border/30" style={{ animationDelay: '0.5s' }}>
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Sparkles className="w-5 h-5 text-primary" />
      </div>
      <p className="text-foreground font-medium text-sm leading-snug">
        <span className="text-primary font-semibold">Персональный подход.</span> Менеджер проводит интервью, чтобы создать именно то, что нужно.
      </p>
    </div>
  );
};

export default BonusCard;
