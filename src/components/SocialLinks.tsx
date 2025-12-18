import { PhoneCall, Send, MessageCircleMore } from "lucide-react";

const SocialLinks = () => {
  const phone = "+375291210908";
  const phoneClean = "375291210908";
  const phoneEncoded = encodeURIComponent(phone);

  return (
    <div className="flex items-center gap-3">
      <a
        href={`https://wa.me/${phoneClean}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(160_84%_45%)] to-[hsl(160_84%_35%)] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_14px_32px_rgba(16,185,129,0.3)] hover:scale-110 transition-all"
        title="WhatsApp"
        aria-label="Написать в WhatsApp"
      >
        <MessageCircleMore className="w-5 h-5 text-primary-foreground" />
      </a>
      <a
        href={`https://t.me/${phoneClean}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(200_85%_55%)] to-[hsl(210_90%_45%)] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.55)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.7)] hover:scale-110 transition-all"
        title="Telegram"
        aria-label="Написать в Telegram"
      >
        <Send className="w-5 h-5 text-primary-foreground" />
      </a>
      <a
        href={`viber://chat?number=${phoneEncoded}`}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(270_80%_60%)] to-[hsl(285_75%_50%)] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.55)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.7)] hover:scale-110 transition-all"
        title="Позвонить или написать"
        aria-label="Позвонить или написать по номеру"
      >
        <PhoneCall className="w-5 h-5 text-primary-foreground" />
      </a>
    </div>
  );
};

export default SocialLinks;
