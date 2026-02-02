
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  User, 
  Menu, 
  X,
  ChevronRight,
  ArrowLeft,
  Image as ImageIcon
} from 'lucide-react';
import GlassCard from './components/GlassCard';
import { 
  ADVANTAGES, 
  SERVICE_PACKAGES, 
  PROCESS_STEPS, 
  EXTRA_SERVICES, 
  WORK_LIST,
  RESULTS_STATS,
  PROJECTS
} from './constants';

type View = 'home' | 'gallery';

const Navbar: React.FC<{ setView: (v: View) => void; currentView: View }> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-serif font-bold tracking-tight text-accent cursor-pointer"
          onClick={() => setView('home')}
        >
          SVN STUDIO
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-accent transition-colors">О нас</a>
          <button onClick={() => setView('gallery')} className={`hover:text-accent transition-colors ${currentView === 'gallery' ? 'text-accent' : ''}`}>Галерея работ</button>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-accent transition-colors">Услуги</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-accent transition-colors">Процесс</a>
          <button 
            onClick={(e) => scrollToSection(e, 'contacts')}
            className="bg-accent text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
          >
            Заказать расчет
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#about" className="py-2 border-b border-accent/10" onClick={(e) => scrollToSection(e, 'about')}>О нас</a>
          <button onClick={() => { setView('gallery'); setIsOpen(false); }} className="py-2 border-b border-accent/10 text-left">Галерея работ</button>
          <a href="#services" className="py-2 border-b border-accent/10" onClick={(e) => scrollToSection(e, 'services')}>Услуги</a>
          <a href="#process" className="py-2 border-b border-accent/10" onClick={(e) => scrollToSection(e, 'process')}>Процесс</a>
          <button 
            onClick={(e) => scrollToSection(e, 'contacts')} 
            className="bg-accent text-white py-3 rounded-xl text-center font-bold"
          >
            Заказать расчет
          </button>
        </div>
      )}
    </nav>
  );
};

const GalleryView: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#faf9f6] min-h-screen">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => setView('home')}
          className="flex items-center space-x-2 text-accent mb-8 hover:opacity-70 transition-opacity uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft size={16} />
          <span>Назад на главную</span>
        </button>

        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Галерея работ</h1>
          <p className="text-gray-500 max-w-2xl text-lg">Посмотрите, как мы преображаем жилые пространства. Каждый проект — это история трансформации от бетонных стен до уютного дома.</p>
        </div>

        <div className="grid gap-20">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-accent/20 pb-4">
                <div>
                  <div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                  <h3 className="text-3xl font-serif">{project.title}</h3>
                </div>
                <p className="text-gray-500 mt-4 md:mt-0 text-sm italic">{project.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 h-[400px] md:h-[500px]">
                {/* Before */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg group/img">
                  <img src={project.beforeImg} alt="До ремонта" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full">
                    <span className="text-xs font-bold uppercase tracking-widest text-white drop-shadow-sm">До ремонта</span>
                  </div>
                </div>

                {/* After */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl group/img">
                  <img src={project.afterImg} alt="После ремонта" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                  <div className="absolute top-6 left-6 bg-accent px-4 py-2 rounded-full shadow-lg">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">После ремонта</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 glass rounded-[40px] text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif mb-6">Хотите такую же трансформацию?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Оставьте заявку на бесплатный замер и расчет сметы. Мы приедем в удобное для вас время и проконсультируем по всем вопросам.</p>
          <button 
            onClick={() => {
              setView('home');
              setTimeout(() => {
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-[#2d2a26] text-white px-10 py-5 rounded-xl font-bold hover:bg-black transition-all shadow-xl inline-flex items-center space-x-3"
          >
            <span>Заказать замер</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/6xSx7X4.jpeg" 
          alt="Modern Interior Background" 
          className="w-full h-full object-cover opacity-65 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl space-y-8 py-20">
          <div className="inline-block py-1 px-4 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider">
            SVN Studio • 18 лет на рынке
          </div>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight">
            Ремонтно-отделочные работы <span className="text-accent italic">любой</span> сложности
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed font-medium max-w-xl">
            Профессионализм, опыт и безупречная гарантия качества. Мы предлагаем комплексный дизайнерский подход к самым сложным задачам.<br className="hidden md:block" /> Наш 18-летний опыт — это ваша уверенность в надежности и долговечности результата.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={(e) => scrollToSection(e, 'process')}
              className="bg-[#2d2a26] text-white px-10 py-5 rounded-xl flex items-center space-x-2 hover:bg-black transition-all group shadow-lg"
            >
              <span className="text-base">Начать проект</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setView('gallery')}
              className="glass px-10 py-5 rounded-xl border border-accent/20 hover:bg-white/50 transition-all text-center text-base flex items-center space-x-2"
            >
              <ImageIcon size={18} className="text-accent" />
              <span>Наши работы</span>
            </button>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading: React.FC<{title: string; subtitle?: string; centered?: boolean}> = ({ title, subtitle, centered }) => (
  <div className={`mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : ''}`}>
    <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>
    {subtitle && <p className="text-gray-500 text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

const HomeView: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  return (
    <>
      <Hero setView={setView} />

      {/* Experience & Stats Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Наш опыт и комплексный подход"
            subtitle="Работая с 2009 года, мы накопили обширный опыт в реализации проектов различного масштаба. Мы гарантируем, что каждый этап работ выполняется с максимальной ответственностью и соблюдением всех технологий."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv, idx) => (
              <GlassCard key={idx} className="bg-white/40 border border-accent/30 shadow-sm hover:border-accent transition-all duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <adv.icon size={28} />
                </div>
                <h3 className="text-xl font-serif mb-4">{adv.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{adv.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-20 pt-20 border-t border-accent/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {RESULTS_STATS.map((stat, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">{stat.label}</p>
                  <p className="text-3xl md:text-5xl font-serif">{stat.value}</p>
                </div>
              ))}
              <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-end">
                 <p className="text-sm text-gray-500 italic max-w-[200px] text-right">
                   Более 19 реализованных проектов в 2024-2025 годах.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="services" className="py-24 bg-cream/30">
        <div className="container mx-auto px-6">
          <SectionHeading 
            centered 
            title="Пакеты услуг" 
            subtitle="Выберите пакет, который соответствует вашим потребностям, и начните свой ремонт с бесплатного выезда и замера." 
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICE_PACKAGES.map((pkg, idx) => (
              <div key={idx} className={`group relative p-10 rounded-3xl transition-all duration-500 hover:scale-[1.02] ${idx === 1 ? 'bg-[#2d2a26] text-white shadow-2xl' : 'bg-white border border-accent/20'}`}>
                {idx === 1 && <span className="absolute top-6 right-6 bg-accent text-[10px] uppercase font-bold px-3 py-1 rounded-full text-white">Популярный</span>}
                <h3 className="text-2xl font-serif mb-2">{pkg.title}</h3>
                <div className="text-accent text-lg font-medium mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm opacity-80">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    const el = document.getElementById('contacts');
                    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                  }}
                  className={`block w-full text-center py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${idx === 1 ? 'bg-accent text-white hover:bg-opacity-90' : 'bg-accent/10 text-accent hover:bg-accent hover:text-white'}`}
                >
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading title="Начните прямо сейчас: простой и прозрачный процесс" />
          
          <div className="relative pt-8">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-6 w-[2px] bg-accent/20 z-0"></div>

            <div className="space-y-16 relative">
              {PROCESS_STEPS.map((step, idx) => {
                const isRight = idx % 2 !== 0; 
                return (
                  <div key={idx} className="flex flex-col md:flex-row items-center relative min-h-[120px]">
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-accent/30 z-10 transition-all duration-300
                                    ${isRight ? 'left-1/2 ml-10 w-16' : 'right-1/2 mr-10 w-16' }`}></div>

                    <div className={`w-full md:w-1/2 flex ${isRight ? 'md:justify-start order-1 md:order-2 md:pl-28' : 'md:justify-end order-1 md:pr-28'}`}>
                      <div className="p-8 w-full max-w-sm glass rounded-2xl border border-accent/10 shadow-sm hover:border-accent/40 transition-colors z-20">
                        <div className="text-accent text-[10px] font-bold uppercase mb-2 tracking-[0.2em] opacity-80">Шаг 0{idx + 1}</div>
                        <h4 className="text-xl font-serif mb-4 leading-snug">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-accent items-center justify-center text-accent text-sm font-bold shadow-md z-30">
                      {idx + 1}
                    </div>
                    
                    <div className={`hidden md:block md:w-1/2 ${isRight ? 'order-1' : 'order-2'}`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Extra Services with Image Side */}
      <section className="py-24 overflow-hidden bg-cream/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeading title="Удобство и сервис" subtitle="Мы делаем ремонт комфортным, беря на себя все организационные вопросы." />
              <div className="space-y-8">
                {EXTRA_SERVICES.map((service) => (
                  <div key={service.id} className="group border-b border-accent/20 pb-8 flex space-x-6">
                    <span className="text-accent font-serif text-2xl opacity-40 group-hover:opacity-100 transition-opacity">{service.id}</span>
                    <div>
                      <h4 className="text-lg font-serif mb-2 group-hover:text-accent transition-colors">{service.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl relative">
                <img src="https://i.imgur.com/uhi6Ph7.jpeg" alt="Service Experience" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-accent/10"></div>
                <div className="absolute bottom-10 left-10 p-10 glass rounded-3xl max-w-xs">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-4">Наши контакты</p>
                  <p className="text-lg font-serif mb-4">Готовы обсудить ваш проект прямо сейчас?</p>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('contacts');
                      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                    }}
                    className="flex items-center space-x-2 text-sm font-bold text-accent hover:underline"
                  >
                    <span>Связаться с Виталием</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* List of Works Section */}
      <section className="py-24 bg-[#2d2a26] text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://i.imgur.com/7zc6Ppj.jpeg" alt="Interior work 1" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
                <img src="https://i.imgur.com/h6NdWyr.jpeg" alt="Interior work 2" className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg" />
                <img src="https://i.imgur.com/pXehkOs.jpeg" alt="Interior work 3" className="rounded-2xl w-full h-64 object-cover -mt-8 shadow-lg" />
                <img src="https://i.imgur.com/HN0HeoU.jpeg" alt="Interior work 4" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading title="Перечень выполняемых работ" subtitle="Мы охватываем весь спектр ремонтных услуг, гарантируя системный подход к каждому метру вашего жилья." />
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {WORK_LIST.map((work, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-gray-300 text-sm leading-snug group-hover:text-white transition-colors">{work}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer id="contacts" className="py-24 bg-cream border-t border-accent/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="text-3xl font-serif font-bold text-accent">SVN STUDIO</div>
              <p className="text-gray-500 text-sm max-w-xs">
                Создаем пространства, в которых хочется жить и работать. 18 лет профессионального опыта в каждой детали.
              </p>
              <div className="flex space-x-4">
                <a href="tel:89153312765" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all cursor-pointer">
                  <Phone size={18} />
                </a>
                <a href="mailto:svn-work@mail.ru" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all cursor-pointer">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-serif">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-sm">
                  <Phone size={18} className="text-accent shrink-0" />
                  <div>
                    <a href="tel:89153312765" className="font-bold block hover:text-accent">8-915-331-27-65</a>
                    <a href="tel:89058784010" className="font-bold block hover:text-accent">8-905-878-40-10</a>
                    <p className="text-gray-500">Виталий</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail size={18} className="text-accent shrink-0" />
                  <a href="mailto:svn-work@mail.ru" className="hover:text-accent">svn-work@mail.ru</a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-serif">Быстрые ссылки</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><button onClick={() => { const el = document.getElementById('about'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="hover:text-accent">О компании</button></li>
                <li><button onClick={() => { const el = document.getElementById('services'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="hover:text-accent">Наши услуги</button></li>
                <li><button onClick={() => { const el = document.getElementById('process'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="hover:text-accent">Как мы работаем</button></li>
                <li><a href="#" className="hover:text-accent">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest gap-4">
            <p>© 2025 SVN STUDIO. Все права защищены.</p>
            <p>Дизайн и разработка: SVN Media</p>
          </div>
        </div>
      </footer>
    </>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  return (
    <div className="antialiased">
      <Navbar setView={setView} currentView={view} />
      
      {view === 'home' ? (
        <HomeView setView={setView} />
      ) : (
        <GalleryView setView={setView} />
      )}
    </div>
  );
};

export default App;
