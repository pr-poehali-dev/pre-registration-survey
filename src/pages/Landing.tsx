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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#9A1E15] leading-tight">
            90-дневный трекинг продаж для экспертов и предпринимателей
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Кто устал слышать, что 2026 — сложный период и надо как-то адаптироваться.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Если вы хотите запустить / увеличить продажи своих услуг, вырасти в деньгах и вам нужно понимание конкретных действий и что именно надо менять.
          </p>

          <Button
            onClick={() => navigate('/form')}
            size="lg"
            className="px-10 py-7 text-lg bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105 animate-pulse-subtle shadow-xl mt-6"
          >
            ЗАПОЛНЯЙТЕ АНКЕТУ ПРЕДЗАПИСИ
          </Button>
        </div>
      </div>

      {/* Global Tasks */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#9A1E15] text-center mb-8">
            Глобально, в рамках трекинга мы решаем 2 ключевые задачи:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#9A1E15] bg-white">
              <CardContent className="p-6">
                <p className="text-base text-gray-700 font-medium">
                  где брать клиентов (как стабильно получать заявки на свои продукты и услуги)
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#9A1E15] bg-white">
              <CardContent className="p-6">
                <p className="text-base text-gray-700 font-medium">
                  как продавать тем, кто оставил заявку
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15] text-center mb-10">
            КАК ВСЕ ПРОИСХОДИТ:
          </h2>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#9A1E15] mb-3">база знаний</h3>
                <p className="text-gray-700">
                  ключевое, что позволяет всем без исключения двигаться к результату в своем темпе, без поиска дополнительных решений.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#9A1E15] mb-3">12 больших разборов со мной</h3>
                <p className="text-gray-700">
                  Определяем ЦЕЛЕВЫЕ ДЕЙСТВИЯ, которые приносят заявки, клиентов и деньги.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <p className="text-gray-700 text-lg mb-4">
                  За 90 дней на трекинге вы полностью модернизируете и настроите свои продажи под свои финансовые цели.
                </p>
                <p className="text-gray-700 font-medium">
                  А я, мой опыт и моя команда будем вам в этом помогать.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#9A1E15] mb-4">
                  4 встречи с мощными экспертами по самым актуальным вопросам:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#9A1E15]">•</span> юрист
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#9A1E15]">•</span> бухгалтер для онлайн экспертов
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#9A1E15]">•</span> продажи в переписке
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#9A1E15]">•</span> нейросети
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#9A1E15] shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#9A1E15] mb-4">
                  САМОЕ ЦЕННОЕ<br/>
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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#9A1E15] text-center mb-8">
            Результат на трекинге у экспертов выглядит так:
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                <span>упаковали свою экспертность в продукт, создали продуктовую линейку и построили путь своего клиента</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                <span>запустили продажи через блог: сделали первые шаги и настроили поток заявок на консультации, научили на них продавать свой продукт</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                <span>собрали и запустили лид-магнитную воронку и настроили регулярный поток заявок</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                <span>подключили самые эффективные источники трафика с минимальным бюджетом или вообще без вложений</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                <span>разобрались с автоворонками, чтобы начать получать оплаты каждый день</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                <span>внедрили готовые решения для увеличения продаж: написание текстов, исследование аудитории, сайты, презентации, вебинары, прогревы, ИИ-ассистенты и помощники</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => navigate('/form')}
              size="lg"
              className="px-10 py-7 text-lg bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105 shadow-xl"
            >
              ЗАПОЛНИТЬ АНКЕТУ
            </Button>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="container mx-auto px-4 py-12">
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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15] text-center mb-12">
            РЕЗУЛЬТАТЫ ТЕХ, КТО УЖЕ ПРОХОДИЛ ТРЕКИНГ:
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
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
              className="px-10 py-7 text-lg bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105 shadow-xl"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </div>
        </div>
      </div>

      {/* Bonuses */}
      <div className="container mx-auto px-4 py-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-[#9A1E15] shadow-2xl bg-gradient-to-br from-white to-yellow-50">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15] text-center mb-6">
                БОНУСЫ
              </h2>
              
              <p className="text-lg font-semibold text-[#9A1E15] mb-4 text-center">
                Сразу после анкеты вы получите:
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                  <span>видеоурок «Как запустить продажи консультаций и мини-продуктов за 30 минут»</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                  <span>структуру воронки продаж, которая принесла мне и моим клиентам более 10 млн ₽ за 2024–2025 и продолжает работать в 2026</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9A1E15] font-bold flex-shrink-0">—</span>
                  <span>возможность попасть на большую стратегическую сессию по продажам 2026</span>
                </li>
              </ul>

              <div className="text-center">
                <Button
                  onClick={() => navigate('/form')}
                  size="lg"
                  className="px-10 py-7 text-lg bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105 shadow-xl"
                >
                  ЗАПОЛНИТЬ АНКЕТУ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Landing;