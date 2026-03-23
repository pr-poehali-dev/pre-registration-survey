import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Tracking = () => {
  const cases = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/files/MARINA-GOLOVKO-Nastavnik-dlya-MLM.png",
      name: "Марина Головко",
      role: "Наставник для МЛМ",
      result: "+375.000 руб."
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/files/MARIYa-ALEJNIKOVA.png",
      name: "Мария Алейникова",
      role: "Эксперт по продажам",
      result: "337.000 руб на тесте новой воронки"
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/files/NATALYa-SMIRNOVA-Kouch.png",
      name: "Наталья Смирнова",
      role: "Коуч",
      result: "300.000₽ в первую неделю запуска"
    },
    {
      id: 4,
      image: "https://cdn.poehali.dev/files/OLGA-KVARTALNOVA-Brejn-trener-245000-rub.png",
      name: "Ольга Кварталнова",
      role: "Брейн-тренер",
      result: "+245.000 руб."
    },
    {
      id: 5,
      image: "https://cdn.poehali.dev/files/OLGA-MAR-185000-rub-Specialist-po-trafiku.png",
      name: "Ольга Мар",
      role: "Специалист по трафику",
      result: "+185.000 руб."
    },
    {
      id: 6,
      image: "https://cdn.poehali.dev/files/Zulfiya-Nastavnik-mentor-dlya-ekspertov.png",
      name: "Зульфия",
      role: "Наставник, ментор для экспертов",
      result: "858.000 руб. за 2 месяца"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Годовое сопровождение для экспертов и предпринимателей
            </h1>
            <div className="flex justify-center">
              <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#9A1E15] border-4 border-[#9A1E15] rounded-2xl inline-block px-6 py-2 shadow-lg">Трекинг</p>
            </div>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed font-medium">
              Совместная работа над вашим проектом, где мы пересобираем или запускаем продажи под реалии 2026 года 
              и доводим 1-2 целевых действия до заявок и денег.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/9UrM7yc3NTRi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Узнать подробности
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Calendar" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">365 дней сопровождения</h3>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Target" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Персональная стратегия</h3>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Ограниченное количество мест</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Что мы делаем на <span className="text-primary">трекинге</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="RefreshCw" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Пересборка продаж под рынок 2026</h3>
                <p className="text-muted-foreground">
                  Учитываем изменения в законодательстве, налогах, стоимости трафика и поведении клиентов. 
                  Собираем продажи так, чтобы они были устойчивыми, а не «на удаче».
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="GitBranch" className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Рабочие модели продаж и воронки</h3>
                <p className="text-muted-foreground">
                  Выбираем одну модель, которая подходит именно вам, и доводим её до результата. 
                  Без лишних инструментов и хаоса.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Продукт и оффер</h3>
                <p className="text-muted-foreground">
                  Упаковываем экспертность в понятный продукт, формируем оффер, который легко объяснить и легко продать.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Send" className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Продажи через блог и базу</h3>
                <p className="text-muted-foreground">
                  Настраиваем поток заявок из Telegram и MAX: через контент, диагностики, переписки и автоворонки.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Нейросети в работе эксперта</h3>
                <p className="text-muted-foreground">
                  Внедряем ИИ для ускорения работы: тексты, контент, презентации, сайты, воронки — быстрее и без перегруза.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="UserCheck" className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Персональный трек</h3>
                <p className="text-muted-foreground">
                  Стратегия, решения и фокус под ваш опыт, нишу и цели.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold"
              onClick={() => window.open('https://t.me/m/9UrM7yc3NTRi', '_blank')}
            >
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              С какими запросами приходят на <span className="text-primary">трекинг</span>
            </h2>
          </div>

          <Card className="border-4 border-[#9A1E15] shadow-2xl bg-gradient-to-br from-[#9A1E15]/10 to-white">
            <CardContent className="pt-8 space-y-6">
              <p className="text-xl font-semibold text-[#9A1E15]">
                Трекинг подходит тем, кто хочет:
              </p>
              <div className="space-y-4">
                {[
                  "запустить продажи с нуля или перестать метаться между инструментами",
                  "увеличить доход и сделать продажи стабильными",
                  "понять, что именно делать дальше, а не «пробовать всё подряд»",
                  "автоматизировать процессы и освободить время",
                  "внедрить автоворонки и рабочие связки по трафику",
                  "собрать понятный план роста на 12 месяцев и быть в курсе всех изменений на рынке"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 bg-[#9A1E15] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Icon name="Check" className="text-white" size={16} />
                    </div>
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="format" className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Как проходит <span className="text-primary">работа</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Video", text: "Групповые разборы каждую неделю" },
              { icon: "Route", text: "индивидуальный трек под ваш проект" },
              { icon: "MessageCircle", text: "рабочий чат с поддержкой" },
              { icon: "Database", text: "база знаний с инструментами и шаблонами" },
              { icon: "Users", text: "встречи с профильными экспертами (юрист, бухгалтер, продажи в переписке, нейросети)" },
              { icon: "Briefcase", text: "список проверенных подрядчиков" }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-lg">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <p className="text-base text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary bg-primary/5 shadow-lg">
            <CardContent className="pt-6 text-center">
              <p className="text-lg md:text-xl text-foreground font-semibold">
                Мы определяем целевые действия и идём в них до результата,<br />
                а не до очередных инсайтов.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-6 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold"
              onClick={() => window.open('https://t.me/m/9UrM7yc3NTRi', '_blank')}
            >
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Что вы получаете:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "Settings", text: "понятная система продаж под ваш продукт" },
              { icon: "Rocket", text: "запущенные или усиленные продажи" },
              { icon: "Filter", text: "рабочие воронки и источники заявок" },
              { icon: "Shield", text: "уверенность в продукте, цене и действиях" },
              { icon: "TrendingUp", text: "чёткий план масштабирования на 2026 год" },
              { icon: "Compass", text: "понимание, как адаптироваться к изменениям рынка" }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-secondary" size={24} />
                    </div>
                    <p className="text-lg text-foreground font-medium pt-2">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Хочу на трекинг
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-bold animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/9UrM7yc3NTRi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/telegram-cloud-photo-size-4-5874222278663408774-y 2.png" 
                alt="Светлана Скорнякова"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-2 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary text-left">
                Светлана Скорнякова
              </h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed text-left">
                <p>— более 100 экспертов вышли на доход 300.000 ₽+</p>
                <p>— средний рост дохода за 90 дней — x2–x4</p>
                <p>— заработала 15+ млн ₽ в Telegram за 2 года</p>
                <p>— инвестировала в своё развитие более 2 млн ₽</p>
                <p>— работаю с мягкими и твёрдыми нишами: психологи, коучи, наставники, эксперты услуг</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Реальные <span className="text-primary">результаты</span> клиентов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((caseItem, index) => (
              <div 
                key={caseItem.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={caseItem.image} 
                  alt={caseItem.name}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Варианты работы на <span className="text-[#9A1E15]">Трекинге</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-4 border-[#9A1E15] shadow-2xl bg-white hover:shadow-3xl transition-all">
              <CardContent className="pt-8 space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#9A1E15]">
                    Групповое сопровождение
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Основная программа, которая создаёт вашу личную систему продаж и выводит на стабильный доход 150–300 тысяч. ежемесячно.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-[#9A1E15]">Что входит в основную программу:</h4>
                  <ul className="space-y-3 text-sm text-foreground leading-relaxed">
                    <li><span className="font-bold">• Личная стратегическая сессия,</span> на которой мы выбираем правильную нишу, определяем вашу уникальность, формируем сильное позиционирование и собираем основу продукта.</li>
                    <li><span className="font-bold">• Персональный трек на 365 дней</span> — индивидуальный план, который строится под ваш темп, нишу, уровень, загруженность и финансовые цели.</li>
                    <li><span className="font-bold">• Четыре групповых созвона каждый месяц</span> — глубокие разборы ваших продуктов, контента, постов, каналов, консультаций и переписок. Это формат, где вы получаете не уроки, а индивидуальные задачи и корректировку своих реальных действий.</li>
                    <li><span className="font-bold">• Чат ежедневной поддержки</span> — я лично отвечаю на вопросы, даю корректировки по продажам, контенту, структуре продукта, перепискам. Это сопровождение, которое ускоряет результат.</li>
                    <li><span className="font-bold">• Полный доступ ко всем модулям:</span> позиционирование, продуктовая линейка, продающие смыслы, контент, продажи, переписки, консультации, воронки продаж, трафик, найм команды и делегирование.</li>
                    <li><span className="font-bold">• Библиотека ускорения:</span> ИИ-промпты и нейропомощники, контент-шаблоны, шаблоны воронок, актуальные связки 2026 года, библиотека рабочих офферов.</li>
                    <li><span className="font-bold">• Приглашённые эксперты:</span> юрист, бухгалтер, эксперт по ИИ, специалист по продажам в переписке.</li>
                    <li><span className="font-bold">• Разбор ваших материалов</span> — офферов, консультаций, продуктов, Telegram-канала, прогревов, контента, чтобы каждая часть вашей системы работала на результат.</li>
                  </ul>

                  <h4 className="font-bold text-lg text-[#9A1E15] pt-2">Преимущества тарифа:</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    вы идёте по персональному треку, внедряете всё под моим контролем, избегаете ошибок, получаете быстрые корректировки и создаёте систему, которая работает долго и приносит заявки ежедневно.
                  </p>

                  <h4 className="font-bold text-lg text-[#9A1E15] pt-2">Ваш результат на групповом сопровождении:</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    готовый продукт, воронка, упаковка, уверенная подача, контент, который ведёт к заявкам, трафик от 100 рублей в день, поток клиентов, продажи на высокие чеки на консультациях и стабильный доход 150–300 тысяч. ежемесячно.
                  </p>
                </div>

                <div className="pt-4 space-y-4">
                  <p className="text-2xl font-bold text-[#9A1E15] text-center">
                    От 6.500 ₽ в месяц
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-[#9A1E15] hover:bg-[#9A1E15]/90 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse"
                    onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
                  >
                    Иду на трекинг
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-[#9A1E15] shadow-2xl bg-white hover:shadow-3xl transition-all">
              <CardContent className="pt-8 space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#9A1E15]">
                    VIP-сопровождение
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Самый быстрый, глубокий и поддерживающий формат. Для тех, кому важны скорость, качество, индивидуальная работа и быстрый рост дохода.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-[#9A1E15]">Что входит в VIP:</h4>
                  <ul className="space-y-3 text-sm text-foreground leading-relaxed">
                    <li><span className="font-bold">• Всё, что есть в Групповом сопровождении</span>, плюс расширенный уровень индивидуальной работы.</li>
                    <li><span className="font-bold">• 3 индивидуальные встречи,</span> на которых мы вместе глубоко прорабатываем ваш продукт, линейку, подачу, смыслы, контент, продажи, консультации, переписки, трафик и воронку. Каждый элемент доводится до состояния, когда он приносит результат.</li>
                    <li><span className="font-bold">• Полный разбор всех ваших материалов,</span> вы отправляете посты, переписки, консультации, офферы, воронки, сценарии. Всё проходит детальную корректировку, чтобы убрать ошибки и дать максимально сильный результат.</li>
                    <li><span className="font-bold">• Работа с уверенностью, внутренними ограничителями и подачей,</span> чтобы убрать страхи продажи, сомнения в цене и сложности с самопрезентацией.</li>
                    <li><span className="font-bold">• Разработка продуктовой линейки от низкого до высокого чека,</span> так, чтобы вы могли продавать дороже, уверенно и экологично.</li>
                    <li><span className="font-bold">• Персональная стратегия масштабирования до 500 тысяч и выше</span> — пошаговый план, как вырастить проект без перегруза, хаоса и бесконечного тестирования.</li>
                    <li><span className="font-bold">• Индивидуальная поддержка в приоритетном режиме.</span> Решения на любой вопрос в моменте: отправили переписку → получили корректировку, придумали оффер → получили правки, сомневаетесь → получили стратегию.</li>
                  </ul>

                  <h4 className="font-bold text-lg text-[#9A1E15] pt-2">Преимущества VIP:</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    самый быстрый путь к результату, минимум ошибок, максимальная глубина, поддержка «здесь и сейчас» и персональная стратегия под ваши сильные стороны и цели. Вы растёте в 2–4 раза быстрее, чем в группе.
                  </p>

                  <h4 className="font-bold text-lg text-[#9A1E15] pt-2">Ваш результат на VIP:</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    дорогие продажи, сильная система, высокий чек, уверенная подача, стабильный поток клиентов и быстрый, предсказуемый рост под моим личным контролем.
                  </p>
                </div>

                <div className="pt-4 space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-[#9A1E15] hover:bg-[#9A1E15]/90 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse"
                    onClick={() => window.open('https://t.me/m/Mw4nmAZiNjZi', '_blank')}
                  >
                    Получить персональные условия
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-[#9A1E15] shadow-2xl bg-white hover:shadow-3xl transition-all">
              <CardContent className="pt-8 space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#9A1E15]">
                    Тест-драйв<br />(1 месяц)
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Для тех, кто хочет понять свой вектор, получить первые результаты и протестировать формат перед входом в основную программу.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-[#9A1E15]">В тест-драйв входит:</h4>
                  <ul className="space-y-3 text-sm text-foreground leading-relaxed">
                    <li><span className="font-bold">• Персональный трек на 30 дней</span> — конкретные шаги, которые избавляют от хаоса и дают первые результаты: понимание клиента, проверка гипотез продукта, первые отклики и продажи.</li>
                    <li><span className="font-bold">• 19 способов собрать заявки без бюджета.</span> Их можно внедрить буквально сразу и получить продажи уже завтра.</li>
                    <li><span className="font-bold">• Четыре групповых встречи с разбором ваших задач.</span> Разбираем позиционирование, упаковку продукта, контент для канала, офферы.</li>
                    <li><span className="font-bold">• Доступ к базе знаний:</span> основы позиционирования, структура продукта, упаковка канала, продажи, базовая воронка, бесплатные способы привлечения клиентов.</li>
                    <li><span className="font-bold">• Поддержка в общем чате:</span> ответы на вопросы, групповые разборы, корректировка действий.</li>
                  </ul>

                  <h4 className="font-bold text-lg text-[#9A1E15] pt-2">В тест-драйв НЕ входит:</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    работа с автоворонкой, ИИ-промпты, шаблоны, нейропомощники, глубокое формирование продуктовой линейки, анализ переписок и продающих консультаций, работа с холодным трафиком и привлечение новой аудитории.
                  </p>

                  <h4 className="font-bold text-lg text-[#9A1E15] pt-2">Ваш результат за 1 месяц:</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    четкое позиционирование, понимание идеального клиента, готовый продукт под запрос ЦА, структура телеграм-канала, первые отклики от аудитории, первые заявки, продажи и уверенность, что вы двигаетесь правильно.
                  </p>
                </div>

                <div className="pt-4 space-y-4">
                  <p className="text-2xl font-bold text-[#9A1E15] text-center">
                    10.000 ₽
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-[#9A1E15] hover:bg-[#9A1E15]/90 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse"
                    onClick={() => window.open('https://t.me/m/xinPDaoNNDYy', '_blank')}
                  >
                    Записаться на тест-драйв
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Почему важно <span className="text-primary">не откладывать</span>
            </h2>
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-8 space-y-6 text-center">
              <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                Рынок уже изменился, и дальше будет только сложнее и дороже.
              </p>
              <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                Сейчас ещё можно спокойно протестировать модели, собрать продукт и выстроить систему 
                без давления и гонки.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-8 px-4 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Начните 2026 год с продаж!
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Перестаньте действовать наугад и соберите систему, которая будет работать на вас весь год.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-[#F5C83A] hover:bg-[#F5C83A]/90 text-black px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/Ax9hlnZWM2Zi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Хочу на трекинг
            </Button>
            
            <Button 
              size="lg"
              className="bg-[#F5C83A] hover:bg-[#F5C83A]/90 text-black px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/xinPDaoNNDYy', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Тест-драйв
            </Button>
            
            <Button 
              size="lg"
              className="bg-[#F5C83A] hover:bg-[#F5C83A]/90 text-black px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://t.me/m/KOA-jbpiMDVi', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Бронь места
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2026 Светлана Скорнякова. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Tracking;
