import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const tasks = [
    'переупаковать или создать продукт',
    'научиться доносить ценность своей работы',
    'запустить или увеличить продажи',
    'уйти от хаоса и продаж наугад',
    'привлечь новую аудиторию',
    'научиться создавать контент',
    'автоматизировать процессы',
    'делать стабильные продажи',
    'внедрить в работу нейросети',
    'разобраться и внедрить автоворонки',
    'найти рабочие связки по трафику',
    'выстроить свою работу на ближайшие 6-12 мес'
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#EAEAEB'}}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#9A1E15] leading-tight">
            90-дневный трекинг продаж для экспертов и предпринимателей
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-bold">
            Кто устал слышать, что 2026 — сложный период и надо как-то адаптироваться.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Если вы хотите запустить / увеличить продажи своих услуг, вырасти в деньгах и вам нужно понимание конкретных действий и что именно надо менять.
          </p>

          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-lg border-2 border-[#9A1E15]" style={{margin: '-4px', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
            <Button
              onClick={() => navigate('/form')}
              size="lg"
              className="px-10 py-7 text-lg bg-[#9A1E15] hover:bg-[#7A1610] text-white transition-all transform hover:scale-105 shadow-xl relative z-10"
            >
              ЗАПОЛНЯЙТЕ АНКЕТУ ПРЕДЗАПИСИ
            </Button>
          </div>
        </div>
      </div>

      {/* Global Tasks */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#9A1E15] text-center mb-8">
            Глобально, в рамках трекинга мы решаем 2 ключевые задачи:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#9A1E15] bg-white">
              <CardContent className="p-6 flex items-center justify-center">
                <p className="text-xl text-gray-700 font-medium text-center">
                  как стабильно получать заявки на свои продукты и услуги
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#9A1E15] bg-white">
              <CardContent className="p-6 flex items-center justify-center">
                <p className="text-xl text-gray-700 font-medium text-center">
                  как продавать тем, кто оставил заявку
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15] text-center mb-10">
            КАК ВСЕ ПРОИСХОДИТ:
          </h2>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white overflow-visible">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#9A1E15] mb-3">База знаний</h3>
                    <p className="text-gray-700">
                      Это ключевое, что позволяет всем без исключения двигаться к результату в своем темпе, без поиска дополнительных решений.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-center p-4">
                    <div className="w-2/3" style={{transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)', filter: 'drop-shadow(8px 8px 20px rgba(0,0,0,0.25))'}}>
                      <img 
                        src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/2d8619e2-ef40-4025-a471-5d91ea3ab982.png"
                        alt="База знаний"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white overflow-visible">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-3/5">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#9A1E15] mb-3">12 больших разборов со мной</h3>
                    <p className="text-gray-700">
                      Определяем ЦЕЛЕВЫЕ ДЕЙСТВИЯ, которые приносят заявки, клиентов и деньги.
                    </p>
                    <p className="text-gray-700 mt-3">
                      За 90 дней на трекинге вы полностью модернизируете и настроите свои продажи под свои финансовые цели.
                    </p>
                    <p className="text-gray-700 mt-3">
                      А я, мой опыт и моя команда будем вам в этом помогать.
                    </p>
                  </div>
                  <div className="md:w-2/5 flex-shrink-0 -mt-8 md:mt-0 md:mr-2">
                    <div className="relative" style={{transform: 'perspective(1200px) rotateY(-8deg) translateZ(30px)', filter: 'drop-shadow(25px 25px 50px rgba(0,0,0,0.35))'}}>
                      <img 
                        src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/3daf4adc-09dc-47cf-83f2-b8ec44259f81.png"
                        alt="Светлана Скорнякова"
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-8 py-3 shadow-xl whitespace-nowrap z-10 text-center" style={{transform: 'translateX(-50%) perspective(1200px) rotateY(-8deg)', minWidth: '85%'}}>
                        <p className="text-base font-semibold text-gray-800 text-center">Светлана Скорнякова</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#9A1E15] mb-4 text-center">
                  4 встречи с мощными экспертами по самым актуальным вопросам:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-[#9A1E15]/30 rounded-lg p-4 text-center bg-white">
                    <p className="text-gray-700 font-medium">юрист</p>
                  </div>
                  <div className="border-2 border-[#9A1E15]/30 rounded-lg p-4 text-center bg-white">
                    <p className="text-gray-700 font-medium">бухгалтер для онлайн экспертов</p>
                  </div>
                  <div className="border-2 border-[#9A1E15]/30 rounded-lg p-4 text-center bg-white">
                    <p className="text-gray-700 font-medium">продажи в переписке</p>
                  </div>
                  <div className="border-2 border-[#9A1E15]/30 rounded-lg p-4 text-center bg-white">
                    <p className="text-gray-700 font-medium">нейросети</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#9A1E15] shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#9A1E15] mb-4 text-center">
                  САМОЕ ЦЕННОЕ:<br/>
                  ИНДИВИДУАЛЬНЫЙ ТРЕК (ПУТЬ) ДЛЯ КАЖДОГО УЧАСТНИКА
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Под ваш продукт и уникальность строим стратегию, которая реализуется на трекинге нашими с вами совместными усилиями. 
                  Это ваш персональный маршрут, построенный исключительно под вас, ваш опыт, экспертность, вашу нишу и продукт
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#9A1E15] text-center mb-8">
            Результат на трекинге у экспертов выглядит так:
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] text-2xl flex-shrink-0 leading-none">•</span>
                <span>упаковали свою экспертность в продукт, создали продуктовую линейку и построили путь своего клиента</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] text-2xl flex-shrink-0 leading-none">•</span>
                <span>запустили продажи через блог: сделали первые шаги и настроили поток заявок на консультации, научили на них продавать свой продукт</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] text-2xl flex-shrink-0 leading-none">•</span>
                <span>собрали и запустили лид-магнитную воронку и настроили регулярный поток заявок</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] text-2xl flex-shrink-0 leading-none">•</span>
                <span>подключили самые эффективные источники трафика с минимальным бюджетом или вообще без вложений</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] text-2xl flex-shrink-0 leading-none">•</span>
                <span>разобрались с автоворонками, чтобы начать получать оплаты каждый день</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] text-2xl flex-shrink-0 leading-none">•</span>
                <span>внедрили готовые решения для увеличения продаж: написание текстов, исследование аудитории, сайты, презентации, вебинары, прогревы, ИИ-ассистенты и помощники</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => navigate('/form')}
              size="lg"
              className="px-10 py-7 text-lg bg-[#9A1E15] hover:bg-[#7A1610] text-white transition-all transform hover:scale-105 animate-pulse shadow-xl"
            >
              ЗАПОЛНИТЬ АНКЕТУ
            </Button>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#9A1E15] text-center mb-8">
            Какие задачи мы решаем на Трекинге:
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <Card key={index} className="border-2 border-[#9A1E15]/30 bg-white hover:border-[#9A1E15] transition-all">
                <CardContent className="p-5">
                  <p className="text-sm text-gray-700 font-medium text-center">
                    {task}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15] text-center mb-12">
            РЕЗУЛЬТАТЫ ТЕХ, КТО УЖЕ ПРОХОДИЛ ТРЕКИНГ:
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/93438950-9a3a-472c-89df-e4b4e4c553ac.png"
                alt="Ольга Квартальнова - Брейн-тренер"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/048949a5-dbaf-4eb0-8b09-29382ba139ac.png"
                alt="Ольга Мар - Специалист по трафику"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/703c3a7c-b15f-46a5-a12b-5e37ee2b8159.png"
                alt="Ольга Никонова - Психолог"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/104089d4-0ec6-41e4-b3b5-2b44f9e25b65.png"
                alt="Наталья Смирнова - Коуч"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/974cf5a1-3d99-4910-bfba-d1fdc2a901b1.png"
                alt="Мария Алейникова - Эксперт по продажам"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/8f401afa-540d-4b28-a126-85acc491a15c.png"
                alt="Зульфия - Наставник для экспертов"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/0321d580-e0a1-47e5-b169-daeca31432e7.png"
                alt="Светлана Даниленко - Нумеролог"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/e9ee2b4e-34a3-4544-914f-3227e24f6dbc.png"
                alt="Марина Головко - Наставник для МЛМ"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate('/form')}
              size="lg"
              className="px-10 py-7 text-lg bg-[#9A1E15] hover:bg-[#7A1610] text-white transition-all transform hover:scale-105 animate-pulse shadow-xl"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </div>
        </div>
      </div>

      {/* Bonuses */}
      <div className="container mx-auto px-4 py-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-[#9A1E15] shadow-2xl bg-gradient-to-br from-white to-yellow-50">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15] text-center mb-6">
                    БОНУСЫ
                  </h2>
                  
                  <p className="text-lg font-semibold text-[#9A1E15] mb-4 text-center">
                    Сразу после анкеты вы получите:
                  </p>

                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-[#9A1E15] font-bold flex-shrink-0">1.</span>
                      <span>Видеоурок «Как запустить продажи консультаций и мини-продуктов за 30 минут»</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9A1E15] font-bold flex-shrink-0">2.</span>
                      <span>Структуру воронки продаж, которая принесла мне и моим клиентам более 10 млн ₽ за 2024–2025 и продолжает работать в 2026</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9A1E15] font-bold flex-shrink-0">3.</span>
                      <span>Возможность попасть на большую стратегическую сессию по продажам 2026</span>
                    </li>
                  </ul>

                  <div className="text-center">
                    <Button
                      onClick={() => navigate('/form')}
                      size="lg"
                      className="px-10 py-7 text-lg bg-[#9A1E15] hover:bg-[#7A1610] text-white transition-all transform hover:scale-105 animate-pulse shadow-xl"
                    >
                      ЗАПОЛНИТЬ АНКЕТУ
                    </Button>
                  </div>
                </div>
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="relative">
                    <img 
                      src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/6eba5e4e-13c4-4e53-b8ad-1b5f62466eb5.png"
                      alt="Подарки"
                      className="w-full h-auto"
                      style={{transform: 'perspective(1000px) rotateY(8deg) rotateX(-3deg) translateZ(20px)', filter: 'drop-shadow(20px 20px 40px rgba(0,0,0,0.3))'}}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Landing;