import { PhoneCall, Send, MessageCircleMore } from "lucide-react";
import { useTranslation } from "react-i18next";

const BY_PHONE_CLEAN = "375291210908";
const PL_PHONE_CLEAN = "48502420839";

const SocialLinks = () => {
  const { i18n } = useTranslation();

  const phoneClean = i18n.language === "ru" ? BY_PHONE_CLEAN : PL_PHONE_CLEAN;
  const phone = `+${phoneClean}`;
  const phoneEncoded = encodeURIComponent(phone);

  const links = [
    {
      href: `https://wa.me/${phoneClean}`,
      icon: MessageCircleMore,
      label: "WhatsApp",
      gradient: "from-[#25D366] to-[#128C7E]",
      shadow: "hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)]"
    },
    {
      href: `https://t.me/${phoneClean}`,
      icon: Send,
      label: "Telegram",
      gradient: "from-[#2AABEE] to-[#229ED9]",
      shadow: "hover:shadow-[0_10px_30px_rgba(42,171,238,0.3)]"
    },
    {
      href: `viber://chat?number=${phoneEncoded}`,
      icon: PhoneCall,
      label: "Viber",
      gradient: "from-[#7360F2] to-[#59267C]",
      shadow: "hover:shadow-[0_10px_30px_rgba(115,96,242,0.3)]"
    }
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('http') ? "_blank" : undefined}
          rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
          className={`group relative w-9 h-9 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center transition-all duration-300 hover:scale-110 ${link.shadow} overflow-hidden`}
          title={link.label}
          aria-label={link.label}
        >
          <link.icon className="w-4 h-4 text-white relative z-10" />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;


