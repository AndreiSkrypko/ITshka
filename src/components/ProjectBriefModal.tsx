import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Lightbulb, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  User, 
  Building2, 
  Phone,
  CheckCircle2,
  Loader2,
  FileText,
  Target,
  Layout,
  Settings,
  Palette,
  Headphones,
  MessageSquare,
  Sparkles,
  Rocket
} from "lucide-react";

// Telegram Bot credentials
const TELEGRAM_BOT_TOKEN = '8564727516:AAEX57w1Tp8NKq07nVk9baP3lz9na4Vi5Vo';
const TELEGRAM_CHAT_ID = '1053151551';

interface ProjectBriefModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = 'choice' | 'quick' | 'brief' | 'success';

interface QuickFormData {
  name: string;
  organization: string;
  phone: string;
}

interface BriefFormData {
  companyName: string;
  contactInfo: string;
  websiteUrl: string;
  businessArea: string;
  projectDescription: string;
  targetAudience: string;
  advantages: string;
  goals: string;
  existingSite: string;
  competitors: string;
  budget: string;
  timeline: string;
  siteSections: string;
  mainPageStructure: string;
  programModules: string;
  languages: string;
  contentReadiness: string;
  technicalAspects: string;
  integrations: string;
  mobileVersion: string;
  brandStyle: string;
  positiveSites: string;
  negativeSites: string;
  visualDescription: string;
  updateFrequency: string;
  hostingNeeded: string;
  supportNeeded: string;
  promotionPlanned: string;
  promotionMethods: string;
  promotionCalculation: string;
  otherRequirements: string;
  howDidYouFindUs: string;
}

const initialBriefData: BriefFormData = {
  companyName: '',
  contactInfo: '',
  websiteUrl: '',
  businessArea: '',
  projectDescription: '',
  targetAudience: '',
  advantages: '',
  goals: '',
  existingSite: '',
  competitors: '',
  budget: '',
  timeline: '',
  siteSections: '',
  mainPageStructure: '',
  programModules: '',
  languages: '',
  contentReadiness: '',
  technicalAspects: '',
  integrations: '',
  mobileVersion: '',
  brandStyle: '',
  positiveSites: '',
  negativeSites: '',
  visualDescription: '',
  updateFrequency: '',
  hostingNeeded: '',
  supportNeeded: '',
  promotionPlanned: '',
  promotionMethods: '',
  promotionCalculation: '',
  otherRequirements: '',
  howDidYouFindUs: '',
};

const briefSteps = [
  { id: 1, title: 'О компании', subtitle: 'Расскажите о себе', icon: Building2 },
  { id: 2, title: 'Маркетинг', subtitle: 'Ваш бизнес', icon: Target },
  { id: 3, title: 'Задачи', subtitle: 'Цели проекта', icon: FileText },
  { id: 4, title: 'Контент', subtitle: 'Структура сайта', icon: Layout },
  { id: 5, title: 'Технологии', subtitle: 'Требования', icon: Settings },
  { id: 6, title: 'Дизайн', subtitle: 'Визуальный стиль', icon: Palette },
  { id: 7, title: 'Поддержка', subtitle: 'После запуска', icon: Headphones },
  { id: 8, title: 'Финал', subtitle: 'Пожелания', icon: MessageSquare },
];

const ProjectBriefModal = ({ open, onOpenChange }: ProjectBriefModalProps) => {
  const [step, setStep] = useState<Step>('choice');
  const [briefStep, setBriefStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [quickForm, setQuickForm] = useState<QuickFormData>({
    name: '',
    organization: '',
    phone: '',
  });
  
  const [briefForm, setBriefForm] = useState<BriefFormData>(initialBriefData);

  const resetForm = () => {
    setStep('choice');
    setBriefStep(1);
    setQuickForm({ name: '', organization: '', phone: '' });
    setBriefForm(initialBriefData);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(resetForm, 300);
  };

  const escapeHtml = (text: string) => {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };

  const sendToTelegram = async (message: string) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      })
    });

    if (!response.ok) {
      throw new Error('Ошибка отправки');
    }

    return response.json();
  };

  const handleQuickSubmit = async () => {
    if (!quickForm.name || !quickForm.phone) return;
    
    setIsSubmitting(true);
    
    const message = `<b>📞 ЗАЯВКА НА КОНСУЛЬТАЦИЮ</b>\n\n` +
      `<b>👤 Имя:</b> ${escapeHtml(quickForm.name)}\n` +
      `<b>🏢 Организация:</b> ${escapeHtml(quickForm.organization) || 'Не указана'}\n` +
      `<b>📱 Телефон:</b> ${escapeHtml(quickForm.phone)}\n\n` +
      `<i>⚠️ Клиент не знает, каким должен быть проект — нужна консультация</i>\n` +
      `📅 ${new Date().toLocaleString('ru-RU')}`;

    try {
      await sendToTelegram(message);
      setStep('success');
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBriefSubmit = async () => {
    if (!briefForm.companyName || !briefForm.contactInfo) return;
    
    setIsSubmitting(true);

    const messages = [
      `<b>📋 ПОЛНЫЙ БРИФ НА СОЗДАНИЕ САЙТА</b>\n\n` +
      `<b>1️⃣ ОБЩИЕ СВЕДЕНИЯ</b>\n` +
      `<b>Компания:</b> ${escapeHtml(briefForm.companyName)}\n` +
      `<b>Контакты:</b> ${escapeHtml(briefForm.contactInfo)}\n` +
      `<b>Сайт:</b> ${escapeHtml(briefForm.websiteUrl) || 'Нет'}\n\n` +
      `<b>2️⃣ МАРКЕТИНГ</b>\n` +
      `<b>Сфера:</b> ${escapeHtml(briefForm.businessArea) || 'Не указана'}\n` +
      `<b>Описание:</b> ${escapeHtml(briefForm.projectDescription) || 'Не указано'}\n` +
      `<b>ЦА:</b> ${escapeHtml(briefForm.targetAudience) || 'Не указана'}\n` +
      `<b>Преимущества:</b> ${escapeHtml(briefForm.advantages) || 'Не указаны'}`,

      `<b>3️⃣ ПОСТАНОВКА ЗАДАЧИ</b>\n` +
      `<b>Цели:</b> ${escapeHtml(briefForm.goals) || 'Не указаны'}\n` +
      `<b>Текущий сайт:</b> ${escapeHtml(briefForm.existingSite) || 'Нет'}\n` +
      `<b>Конкуренты:</b> ${escapeHtml(briefForm.competitors) || 'Не указаны'}\n` +
      `<b>Бюджет:</b> ${escapeHtml(briefForm.budget) || 'Не указан'}\n` +
      `<b>Сроки:</b> ${escapeHtml(briefForm.timeline) || 'Не указаны'}\n\n` +
      `<b>4️⃣ СОДЕРЖАНИЕ</b>\n` +
      `<b>Разделы:</b> ${escapeHtml(briefForm.siteSections) || 'Не указаны'}\n` +
      `<b>Главная:</b> ${escapeHtml(briefForm.mainPageStructure) || 'Не указана'}\n` +
      `<b>Модули:</b> ${escapeHtml(briefForm.programModules) || 'Не указаны'}\n` +
      `<b>Языки:</b> ${escapeHtml(briefForm.languages) || 'Не указаны'}`,

      `<b>Контент:</b> ${escapeHtml(briefForm.contentReadiness) || 'Не указан'}\n` +
      `<b>Технические:</b> ${escapeHtml(briefForm.technicalAspects) || 'Не указаны'}\n` +
      `<b>Интеграции:</b> ${escapeHtml(briefForm.integrations) || 'Не нужны'}\n` +
      `<b>Мобильная:</b> ${escapeHtml(briefForm.mobileVersion) || 'Не указана'}\n\n` +
      `<b>5️⃣ ВИЗУАЛЬНЫЙ СТИЛЬ</b>\n` +
      `<b>Фирменный стиль:</b> ${escapeHtml(briefForm.brandStyle) || 'Нет'}\n` +
      `<b>Нравятся:</b> ${escapeHtml(briefForm.positiveSites) || 'Не указаны'}\n` +
      `<b>Не нравятся:</b> ${escapeHtml(briefForm.negativeSites) || 'Не указаны'}\n` +
      `<b>Описание:</b> ${escapeHtml(briefForm.visualDescription) || 'Не указано'}`,

      `<b>6️⃣ ПОДДЕРЖКА</b>\n` +
      `<b>Обновление:</b> ${escapeHtml(briefForm.updateFrequency) || 'Не указано'}\n` +
      `<b>Хостинг:</b> ${escapeHtml(briefForm.hostingNeeded) || 'Не указано'}\n` +
      `<b>Поддержка:</b> ${escapeHtml(briefForm.supportNeeded) || 'Не указано'}\n\n` +
      `<b>7️⃣ ПРОДВИЖЕНИЕ</b>\n` +
      `<b>Планируется:</b> ${escapeHtml(briefForm.promotionPlanned) || 'Не указано'}\n` +
      `<b>Способы:</b> ${escapeHtml(briefForm.promotionMethods) || 'Не указаны'}\n` +
      `<b>Расчёт:</b> ${escapeHtml(briefForm.promotionCalculation) || 'Не нужен'}\n\n` +
      `<b>8️⃣ ПРОЧЕЕ</b>\n` +
      `<b>Пожелания:</b> ${escapeHtml(briefForm.otherRequirements) || 'Нет'}\n` +
      `<b>Откуда узнали:</b> ${escapeHtml(briefForm.howDidYouFindUs) || 'Не указано'}\n\n` +
      `📅 ${new Date().toLocaleString('ru-RU')}`
    ];

    try {
      for (const msg of messages) {
        await sendToTelegram(msg);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      setStep('success');
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalBriefSteps = 8;
  const currentStepData = briefSteps[briefStep - 1];
  const StepIcon = currentStepData?.icon || FileText;

  // Стили для полей ввода
  const inputClass = "bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/30 text-sm rounded-xl h-11";
  const textareaClass = "bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/30 text-sm rounded-xl min-h-[70px] resize-none";
  const labelClass = "text-[11px] uppercase tracking-wider text-white/40 font-medium mb-2 block";

  const renderBriefStep = () => {
    switch (briefStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Название компании *</label>
              <Input
                value={briefForm.companyName}
                onChange={(e) => setBriefForm({...briefForm, companyName: e.target.value})}
                placeholder="ООО «Ваша компания»"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Контактная информация *</label>
              <Textarea
                value={briefForm.contactInfo}
                onChange={(e) => setBriefForm({...briefForm, contactInfo: e.target.value})}
                placeholder="ФИО, телефон, email"
                className={textareaClass}
              />
            </div>
            <div>
              <label className={labelClass}>Адрес сайта</label>
              <Input
                value={briefForm.websiteUrl}
                onChange={(e) => setBriefForm({...briefForm, websiteUrl: e.target.value})}
                placeholder="www.example.by"
                className={inputClass}
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Сфера деятельности</label>
              <Textarea
                value={briefForm.businessArea}
                onChange={(e) => setBriefForm({...briefForm, businessArea: e.target.value})}
                placeholder="Опишите область деятельности"
                className={textareaClass}
              />
            </div>
            <div>
              <label className={labelClass}>Описание проекта</label>
              <Textarea
                value={briefForm.projectDescription}
                onChange={(e) => setBriefForm({...briefForm, projectDescription: e.target.value})}
                placeholder="Бренд/продукт/услуга"
                className={textareaClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Целевая аудитория</label>
                <Input
                  value={briefForm.targetAudience}
                  onChange={(e) => setBriefForm({...briefForm, targetAudience: e.target.value})}
                  placeholder="Пол, возраст"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Преимущества</label>
                <Input
                  value={briefForm.advantages}
                  onChange={(e) => setBriefForm({...briefForm, advantages: e.target.value})}
                  placeholder="УТП"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Цели проекта</label>
              <Textarea
                value={briefForm.goals}
                onChange={(e) => setBriefForm({...briefForm, goals: e.target.value})}
                placeholder="Что необходимо сделать?"
                className={textareaClass}
              />
            </div>
            <div>
              <label className={labelClass}>Существующий сайт</label>
              <Input
                value={briefForm.existingSite}
                onChange={(e) => setBriefForm({...briefForm, existingSite: e.target.value})}
                placeholder="Ссылка или описание проблем"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Конкуренты</label>
              <Input
                value={briefForm.competitors}
                onChange={(e) => setBriefForm({...briefForm, competitors: e.target.value})}
                placeholder="Ссылки на сайты конкурентов"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Бюджет</label>
                <Input
                  value={briefForm.budget}
                  onChange={(e) => setBriefForm({...briefForm, budget: e.target.value})}
                  placeholder="от 1000 BYN"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Сроки</label>
                <Input
                  value={briefForm.timeline}
                  onChange={(e) => setBriefForm({...briefForm, timeline: e.target.value})}
                  placeholder="1-2 месяца"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Разделы сайта</label>
              <Textarea
                value={briefForm.siteSections}
                onChange={(e) => setBriefForm({...briefForm, siteSections: e.target.value})}
                placeholder="О компании, услуги, контакты..."
                className={textareaClass}
              />
            </div>
            <div>
              <label className={labelClass}>Структура главной</label>
              <Textarea
                value={briefForm.mainPageStructure}
                onChange={(e) => setBriefForm({...briefForm, mainPageStructure: e.target.value})}
                placeholder="Меню, баннеры, блоки..."
                className={textareaClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Модули</label>
                <Input
                  value={briefForm.programModules}
                  onChange={(e) => setBriefForm({...briefForm, programModules: e.target.value})}
                  placeholder="Каталог, формы..."
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Языки</label>
                <Input
                  value={briefForm.languages}
                  onChange={(e) => setBriefForm({...briefForm, languages: e.target.value})}
                  placeholder="RU, EN..."
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Готовность контента</label>
              <Textarea
                value={briefForm.contentReadiness}
                onChange={(e) => setBriefForm({...briefForm, contentReadiness: e.target.value})}
                placeholder="Есть ли тексты, фото? Нужна помощь?"
                className={textareaClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Платформа/CMS</label>
                <Input
                  value={briefForm.technicalAspects}
                  onChange={(e) => setBriefForm({...briefForm, technicalAspects: e.target.value})}
                  placeholder="WordPress, React..."
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Интеграции</label>
                <Input
                  value={briefForm.integrations}
                  onChange={(e) => setBriefForm({...briefForm, integrations: e.target.value})}
                  placeholder="1С, CRM..."
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Мобильная версия</label>
              <Input
                value={briefForm.mobileVersion}
                onChange={(e) => setBriefForm({...briefForm, mobileVersion: e.target.value})}
                placeholder="Да, адаптивный дизайн"
                className={inputClass}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Фирменный стиль</label>
              <Input
                value={briefForm.brandStyle}
                onChange={(e) => setBriefForm({...briefForm, brandStyle: e.target.value})}
                placeholder="Есть логотип? Нужна разработка?"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Сайты, которые нравятся</label>
              <Textarea
                value={briefForm.positiveSites}
                onChange={(e) => setBriefForm({...briefForm, positiveSites: e.target.value})}
                placeholder="Ссылки и что привлекает"
                className={textareaClass}
              />
            </div>
            <div>
              <label className={labelClass}>Сайты, которые не нравятся</label>
              <Textarea
                value={briefForm.negativeSites}
                onChange={(e) => setBriefForm({...briefForm, negativeSites: e.target.value})}
                placeholder="Ссылки и что отталкивает"
                className={textareaClass}
              />
            </div>
            <div>
              <label className={labelClass}>Желаемый стиль</label>
              <Input
                value={briefForm.visualDescription}
                onChange={(e) => setBriefForm({...briefForm, visualDescription: e.target.value})}
                placeholder="Современный, строгий, яркий..."
                className={inputClass}
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Обновление контента</label>
                <Input
                  value={briefForm.updateFrequency}
                  onChange={(e) => setBriefForm({...briefForm, updateFrequency: e.target.value})}
                  placeholder="Часто / Редко"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Нужен хостинг?</label>
                <Input
                  value={briefForm.hostingNeeded}
                  onChange={(e) => setBriefForm({...briefForm, hostingNeeded: e.target.value})}
                  placeholder="Да / Нет"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Дальнейшая поддержка</label>
              <Input
                value={briefForm.supportNeeded}
                onChange={(e) => setBriefForm({...briefForm, supportNeeded: e.target.value})}
                placeholder="Да, техническая / Нет"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Продвижение</label>
                <Input
                  value={briefForm.promotionPlanned}
                  onChange={(e) => setBriefForm({...briefForm, promotionPlanned: e.target.value})}
                  placeholder="Да / Нет"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Способы</label>
                <Input
                  value={briefForm.promotionMethods}
                  onChange={(e) => setBriefForm({...briefForm, promotionMethods: e.target.value})}
                  placeholder="SEO, реклама..."
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Расчёт продвижения</label>
              <Input
                value={briefForm.promotionCalculation}
                onChange={(e) => setBriefForm({...briefForm, promotionCalculation: e.target.value})}
                placeholder="Ключевые слова для расчёта"
                className={inputClass}
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Дополнительные пожелания</label>
              <Textarea
                value={briefForm.otherRequirements}
                onChange={(e) => setBriefForm({...briefForm, otherRequirements: e.target.value})}
                placeholder="Любая дополнительная информация..."
                className={`${textareaClass} min-h-[100px]`}
              />
            </div>
            <div>
              <label className={labelClass}>Откуда узнали о нас?</label>
              <Input
                value={briefForm.howDidYouFindUs}
                onChange={(e) => setBriefForm({...briefForm, howDidYouFindUs: e.target.value})}
                placeholder="Поиск, рекомендация..."
                className={inputClass}
              />
            </div>
            
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/30 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Почти готово!</p>
                  <p className="text-xs text-white/50">Нажмите «Отправить» и мы свяжемся с вами</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-hidden bg-[#0a0f14] border-white/10 p-0 gap-0">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-50%] left-[-20%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-30%] right-[-20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
        </div>

        {step === 'choice' && (
          <div className="relative p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Расскажите о проекте</h2>
              <p className="text-sm text-white/50">Выберите подходящий вариант</p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => setStep('brief')}
                className="group w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-0.5">Я знаю, каким должен быть проект</h3>
                    <p className="text-sm text-white/50">Заполните бриф с описанием</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </button>

              <button
                onClick={() => setStep('quick')}
                className="group w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-0.5">Я не знаю, каким должен быть проект</h3>
                    <p className="text-sm text-white/50">Оставьте контакты — поможем</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 'quick' && (
          <div className="relative flex flex-col">
            {/* Gradient Header */}
            <div className="relative p-5 pb-6 bg-gradient-to-b from-primary/20 to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <HelpCircle className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Нужна консультация</h2>
                  <p className="text-sm text-white/50">Мы перезвоним и поможем разобраться</p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="px-5 pb-5 space-y-4">
              {/* Имя */}
              <div className="group">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 focus-within:border-primary/40 focus-within:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 font-medium block mb-1">Имя *</label>
                    <input
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({...quickForm, name: e.target.value})}
                      placeholder="Как к вам обращаться?"
                      className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/30 text-sm"
                    />
                  </div>
                </div>
              </div>
              
              {/* Организация */}
              <div className="group">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 focus-within:border-primary/40 focus-within:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 font-medium block mb-1">Организация</label>
                    <input
                      value={quickForm.organization}
                      onChange={(e) => setQuickForm({...quickForm, organization: e.target.value})}
                      placeholder="Название компании (необязательно)"
                      className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/30 text-sm"
                    />
                  </div>
                </div>
              </div>
              
              {/* Телефон */}
              <div className="group">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 focus-within:border-primary/40 focus-within:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 font-medium block mb-1">Телефон *</label>
                    <input
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({...quickForm, phone: e.target.value})}
                      placeholder="+375 29 123-45-67"
                      className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/30 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Бесплатная консультация</p>
                    <p className="text-xs text-white/50">Поможем определиться с проектом</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 pt-0">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep('choice')}
                  className="w-28 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  size="sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Назад
                </Button>
                <Button
                  onClick={handleQuickSubmit}
                  disabled={!quickForm.name || !quickForm.phone || isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-[0_10px_30px_-10px_rgba(29,185,176,0.5)]"
                  size="sm"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 'brief' && (
          <div className="relative flex flex-col h-full max-h-[90vh]">
            {/* Gradient Header */}
            <div className="relative p-5 pb-4 bg-gradient-to-b from-primary/20 to-transparent">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                    <StepIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">{currentStepData?.title}</h3>
                    <p className="text-xs text-white/50">{currentStepData?.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">{briefStep}</span>
                  <span className="text-sm text-white/30">/{totalBriefSteps}</span>
                </div>
              </div>
              
              {/* Progress Steps */}
              <div className="flex gap-1.5">
                {briefSteps.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setBriefStep(s.id)}
                    className={`relative flex-1 h-1.5 rounded-full transition-all duration-300 ${
                      s.id === briefStep 
                        ? 'bg-primary shadow-[0_0_10px_rgba(29,185,176,0.5)]' 
                        : s.id < briefStep 
                          ? 'bg-primary/50' 
                          : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto px-5 pb-4">
              {renderBriefStep()}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gradient-to-t from-[#0a0f14] to-transparent">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => briefStep === 1 ? setStep('choice') : setBriefStep(briefStep - 1)}
                  className="w-28 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  size="sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Назад
                </Button>
                
                {briefStep < totalBriefSteps ? (
                  <Button
                    onClick={() => setBriefStep(briefStep + 1)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-[0_10px_30px_-10px_rgba(29,185,176,0.5)]"
                    size="sm"
                  >
                    Далее
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleBriefSubmit}
                    disabled={!briefForm.companyName || !briefForm.contactInfo || isSubmitting}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-[0_10px_30px_-10px_rgba(29,185,176,0.5)]"
                    size="sm"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    Отправить
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="relative p-8 text-center">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Отлично!</h3>
            <p className="text-white/50 mb-6">
              Заявка отправлена. Мы свяжемся с вами<br />в ближайшее время.
            </p>
            <Button 
              onClick={handleClose} 
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Закрыть
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectBriefModal;
