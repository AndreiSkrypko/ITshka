import { MessageCircle, Send } from "lucide-react";

const SocialLinks = () => {
  const phone = "+375291210908";
  const phoneClean = "375291210908";

  return (
    <div className="flex items-center gap-3">
      <a
        href={`https://wa.me/${phoneClean}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center hover:scale-110 transition-transform"
        title="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-primary-foreground" />
      </a>
      <a
        href={`https://t.me/${phoneClean}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[hsl(200_80%_50%)] flex items-center justify-center hover:scale-110 transition-transform"
        title="Telegram"
      >
        <Send className="w-5 h-5 text-primary-foreground" />
      </a>
      <a
        href={`viber://chat?number=${phoneClean}`}
        className="w-10 h-10 rounded-full bg-[hsl(270_60%_55%)] flex items-center justify-center hover:scale-110 transition-transform"
        title="Viber"
      >
        <MessageCircle className="w-5 h-5 text-primary-foreground" />
      </a>
    </div>
  );
};

export default SocialLinks;
