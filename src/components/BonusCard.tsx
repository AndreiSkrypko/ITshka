import { Handshake } from "lucide-react";

const BonusCard = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-card/95 via-card/85 to-card/50 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center gap-4 opacity-0 animate-fade-in border border-primary/30 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.03)] hover:border-primary/50 hover:shadow-[0_8px_45px_rgba(16,185,129,0.15)] transition-all lg:w-full group"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all shadow-[0_0_20px_hsl(160_84%_39%/0.2)]">
        <Handshake className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-foreground font-semibold text-sm leading-tight mb-0.5">
          <span className="text-primary">Персональный подход</span> к каждому проекту
        </p>
        <p className="text-muted-foreground text-xs">
          Интервью → Анализ → Решение под ваш бизнес
        </p>
      </div>
    </div>
  );
};

export default BonusCard;
