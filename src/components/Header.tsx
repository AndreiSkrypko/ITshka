import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12 py-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className="text-2xl md:text-3xl font-extrabold text-primary">IT</span>
          <span className="text-2xl md:text-3xl font-extrabold text-foreground">shka</span>
        </div>
        <span className="hidden md:inline text-sm text-muted-foreground ml-4">
          Создаём сайты для вашего бизнеса
        </span>
      </div>
      
      <a 
        href="tel:+375291210908" 
        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Phone className="w-5 h-5 text-primary" />
        </div>
        <span className="font-bold text-lg hidden sm:inline">+375 29 121-09-08</span>
      </a>
    </header>
  );
};

export default Header;
