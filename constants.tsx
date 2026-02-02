
import React from 'react';
import { 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Settings, 
  Clock, 
  PhoneCall, 
  MapPin, 
  Truck, 
  Layout, 
  HardHat, 
  FileText, 
  UserPlus
} from 'lucide-react';
import { ServicePackage, ProcessStep, Advantage, ExtraService, Project } from './types';

export const ADVANTAGES: Advantage[] = [
  {
    icon: Briefcase,
    title: "18 лет опыта",
    description: "16 лет в ремонтно-отделочных работах и 8 лет в строительстве коттеджей."
  },
  {
    icon: Users,
    title: "Команда профи",
    description: "Специалисты с профильным образованием (электрики, сантехники, маляры и др.)."
  },
  {
    icon: ShieldCheck,
    title: "Гарантия 3 года",
    description: "Предоставляем официальную гарантию до 3 лет на все выполненные работы."
  }
];

export const RESULTS_STATS = [
  { label: "Год", value: "2025" },
  { label: "Проектов", value: "19+" },
  { label: "Классы", value: "Standard, Comfort, Business" }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    title: "Ремонт 'Стандарт'",
    price: "От 18 000 руб/м²",
    features: ["Базовая отделка", "Качественные материалы", "Соблюдение СНиП"]
  },
  {
    title: "Ремонт 'Комфорт'",
    price: "От 25 000 руб/м²",
    features: ["Улучшенная отделка", "Дизайнерские решения", "Комплексный подход"]
  },
  {
    title: "Ремонт 'Бизнес'",
    price: "От 30 000 руб/м²",
    features: ["Премиум материалы", "Авторский надзор", "Эксклюзивные решения"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Бесплатный выезд и замер",
    description: "Приедем, осмотрим помещение, разберемся в нюансах конструкций и коммуникаций."
  },
  {
    title: "Точная Смета за 48 Часов",
    description: "Пришлем детальную смету с графиком. Все прозрачно и честно."
  },
  {
    title: "Реализация поэтапно",
    description: "Начинаем работу. Вы платите только за фактически выполненный результат."
  },
  {
    title: "Сдача с Гарантией",
    description: "Чистовая уборка, оформление документов, гарантийное обслуживание."
  }
];

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: "01",
    title: "Узаконивание перепланировок",
    description: "Осмотрим помещение, разберемся в нюансах, подготовим документы и зарегистрируем."
  },
  {
    id: "02",
    title: "Закупки материалов",
    description: "Скидки от партнеров. Поможем подобрать нужные материалы по выгодным ценам."
  },
  {
    id: "03",
    title: "Коммуникации 'под ключ'",
    description: "Берем общение с УК и дизайнерами на себя. Ваше спокойствие — наша работа."
  },
  {
    id: "04",
    title: "Консультации и сопровождение",
    description: "Участвуем в разработке проекта для экономии ваших денег и времени."
  },
  {
    id: "05",
    title: "Программа лояльности",
    description: "Постоянным клиентам и партнерам специальные условия и скидки."
  }
];

export const WORK_LIST = [
  "Гидро-шумоизоляция помещений",
  "Разметка, кладка блоков",
  "Штукатурка и стяжка",
  "Электромонтажные и сантехнические работы",
  "Вентиляция и кондиционирование",
  "Укладка плитки, доски, кварц-винила",
  "Малярные работы любой сложности",
  "Покраска, обои, декоративная штукатурка",
  "Багеты, плинтуса полиуретан, скрытые",
  "Натяжные потолки, гипсокартон, грильяты",
  "Ресепшены и многое другое"
];

export const PROJECTS: Project[] = [
  {
    title: "ЖК 'Скандинавия'",
    description: "Полная перепланировка и дизайн в стиле минимализм.",
    beforeImg: "https://storage.yandexcloud.net/213/1%20(2).png",
    afterImg: "https://storage.yandexcloud.net/213/1-1.png",
    category: "Комфорт"
  },
  {
    title: "Апартаменты на Пресне",
    description: "Комплексный ремонт с заменой всех коммуникаций.",
    beforeImg: "https://storage.yandexcloud.net/213/2.png",
    afterImg: "https://storage.yandexcloud.net/213/2-2.png",
    category: "Бизнес"
  },
  {
    title: "Однокомнатная квартира в Одинцово",
    description: "Ремонт без перепланировки",
    beforeImg: "https://storage.yandexcloud.net/213/3.png",
    afterImg: "https://storage.yandexcloud.net/213/3-3.png",
    category: "Стандарт"
  },
   {
    title: "Загородный дом",
    description: "Ремонт без перепланировки",
    beforeImg: "https://storage.yandexcloud.net/213/4.png",
    afterImg: "https://storage.yandexcloud.net/213/4-4.png",
    category: "Бизнес"
  }
];
