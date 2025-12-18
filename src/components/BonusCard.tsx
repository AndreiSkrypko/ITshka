import { Bot } from "lucide-react";

const BonusCard = () => {
  return (
    <div className="bg-secondary rounded-2xl p-4 md:p-5 flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background flex items-center justify-center flex-shrink-0">
        <Bot className="w-8 h-8 md:w-10 md:h-10 text-primary" />
      </div>
      <div>
        <p className="text-foreground font-semibold text-sm md:text-base leading-tight">
          Персональный подход. Менеджер проводит детальное интервью, чтобы понять ваш бизнес и создать именно то, что нужно.
        </p>
      </div>
    </div>
  );
};

export default BonusCard;
