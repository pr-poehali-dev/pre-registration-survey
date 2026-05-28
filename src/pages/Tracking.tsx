import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Footer from "@/components/Footer";

const Tracking = () => {
  const navigate = useNavigate();
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

      {/* HERO */}
      <section className="relative px-4 py-6 md:py-10 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Фото */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/d8b25a80-a37d-42fa-98a6-a37e9f697b0d.png"
                  alt="Светлана Скорнякова"
                  className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>

            {/* Текст */}
            <div className="space-y-6 text-center md:text-left">
              <div className="relative inline-block">
                <span
                  className="text-5xl md:text-7xl font-black tracking-tight text-[#9A1E14]"
                  style={{ textShadow: '4px 4px 0px rgba(154,30,20,0.15)' }}
                >
                  ТРЕКИНГ
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Сопровождение для экспертов и помогающих практиков,
              </h1>
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                которые хотят выйти на стабильные продажи, перестать хаотично вести блог и выстроить систему клиентов
              </p>
              <Button
                size="lg"
                className="bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse flex items-center gap-2 mx-auto md:mx-0"
                onClick={() => navigate('/usloviya')}
              >
                Хочу продажи и клиентов
              </Button>
              <p className="text-base md:text-lg text-muted-foreground font-medium">
                Без огромного блога, сложных запусков и выгорания.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* БОЛИ */}
      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Скорее всего, сейчас у вас:
          </h2>
          <Card className="border-2 border-[#9A1E15]/30 shadow-lg bg-white">
            <CardContent className="pt-6 space-y-3">
              {[
                "продажи нестабильны",
                "клиенты приходят случайно",
                "вы ведете канал, но заявок почти нет",
                "страшно продавать",
                "вы не понимаете, что именно выкладывать",
                "уже куплено много обучений, но системы так и нет",
                "внутри ощущение хаоса и усталости",
                "кажется, что у всех получается, кроме вас",
              ].map((pain, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#9A1E14] font-bold text-lg flex-shrink-0">—</span>
                  <p className="text-base md:text-lg text-foreground">{pain}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ЧТО ТАКОЕ ТРЕКИНГ */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            «Трекинг» — это сопровождение, где мы вместе:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "упаковываем канал и продающие смыслы",
              "создаем востребованный продукт",
              "создаем контент, который приводит клиентов",
              "выстраиваем простую воронку",
              "внедряем регулярные действия",
              "запускаем трафик",
              "выстраиваем систему продаж",
              "приводим к стабильным продажам",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#9A1E14] font-black text-xl flex-shrink-0 leading-snug">•</span>
                <p className="text-base md:text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <Card className="border-2 border-[#9A1E15] bg-[#9A1E15]/5 shadow-md mt-4">
            <CardContent className="pt-6 space-y-2">
              <p className="text-base md:text-lg font-medium text-foreground text-center">Это не просто обучение.<br />Это внедрение, сопровождение, контроль, индивидуальные разборы и система продаж, которая работает на вас 24/7</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* КОМУ ПОДОЙДЕТ */}
      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Подойдет вам, если вы:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["психолог", "коуч", "эзотерик", "наставник", "помогающий эксперт", "эксперт мягкой ниши"].map((item, i) => (
              <Card key={i} className="border-2 border-[#9A1E15]/30 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-4 pb-4 flex items-center gap-2">
                  <span className="text-[#9A1E14]">✔️</span>
                  <span className="text-base font-medium">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-base md:text-lg text-muted-foreground">
            И хотите не просто вести блог, а начать стабильно зарабатывать на своей экспертности.
          </p>
        </div>
      </section>

      {/* ЭКСПЕРТЫ В СОПРОВОЖДЕНИИ */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Эксперты, которые уже в сопровождении на Трекинге:
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
            {[
              {
                photo: "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/aeee2140-04d7-478d-aea5-46470a1d786c.jpg",
                name: "Ирина Плотникова",
                profession: "Психолог",
                desc: "Помогает женщинам, которые в отношениях с мужчиной терпят, молчат, сохраняют отношения ценой себя — вернуть лёгкость в теле, вкус к жизни и расправить свои крылышки"
              },
              {
                photo: "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/9201e3df-e8a7-4cb5-8437-0fde9dd6689f.jpg",
                name: "Гульмира",
                profession: "Таролог",
                desc: "Помогает выйти из внутреннего тупика в проявленность, уверенность и реализацию себя."
              },
              {
                photo: "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/2fb800ac-ddd9-4514-b78c-a317f74439c8.jpg",
                name: "Анна Малышева",
                profession: "Карьерный трекер",
                desc: "Помогает специалистам, руководителям и лидерам бизнеса соединить карьеру с уникальностью личности и реализовываться в удовольствие."
              },
              {
                photo: "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/060d1ddc-f5de-492a-9fdc-95d1c05d4099.jpg",
                name: "Екатерина Довженко",
                profession: "Психолог, Арт-терапевт",
                desc: "Помогает снять внутреннее напряжение, вернуть контакт с собой и мягко устанавливать границы."
              },
              {
                photo: "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/885c6177-798d-471a-9b78-956568cee681.jpg",
                name: "Людмила Борисенко",
                profession: "Психолог, инструктор ТВТ",
                desc: "Помогает экспертам мягких ниш выйти на доход от 150К за 2 месяца и масштабировать его."
              },
              {
                photo: "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/ffdc46fb-1d91-45d1-96c8-10b596294231.jpg",
                name: "Кирилл Гапонов",
                profession: "Психолог, коуч",
                desc: "Помогает снизить внутреннее напряжение, справиться с тревогой, страхами и внутренними конфликтами, вернуть опору, ясность и устойчивость."
              },
              {
                photo: "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/bf85726e-acf7-45c4-92a3-1a638c12f681.jpg",
                name: "Мару",
                profession: "Цифровой психолог",
                desc: "Помогает женщинам понять свою природу через цифровой анализ и мягко встроить изменения в жизнь."
              }
            ].map((client, i) => (
              <div key={i} className="border-2 border-[#9A1E15] rounded-2xl p-5 flex flex-col items-center gap-3 w-64 bg-[#9A1E15]/5 flex-shrink-0 snap-start">
                <div className="w-28 h-28 rounded-full border-4 border-[#9A1E15] overflow-hidden flex-shrink-0">
                  <img src={client.photo} alt={client.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center space-y-1">
                  <p className="font-bold text-base text-[#9A1E15]">{client.name}</p>
                  <p className="text-sm font-bold text-foreground">{client.profession}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ВНУТРИ СОПРОВОЖДЕНИЯ */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Внутри сопровождения мы вместе создаем:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "упаковку канала",
              "смыслы и позиционирование",
              "контент, который приводит заявки",
              "систему продаж",
              "лид-магниты",
              "воронки",
              "бесплатный и платный трафик",
              "рекламные подачи",
              "продажи через разборы",
              "и выходим на стабильные результаты",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#9A1E14] font-black text-xl flex-shrink-0 leading-snug">•</span>
                <p className="text-base md:text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Button
            size="lg"
            className="bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse"
            onClick={() => navigate('/usloviya')}
          >
            Хочу продажи и клиентов
          </Button>
        </div>
      </section>

      {/* ПОЧЕМУ НЕТ ПРОДАЖ */}
      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            ПОЧЕМУ У МНОГИХ НЕТ ПРОДАЖ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 shadow-lg bg-red-50">
              <CardContent className="pt-6 space-y-3">
                <p className="font-bold text-lg text-foreground mb-2">Большинство экспертов:</p>
                {[
                  "хаотично ведут блог",
                  "выкладывают контент «обо всем»",
                  "не понимают, как продавать экологично",
                  "пытаются копировать других",
                  "не выстраивают систему",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold flex-shrink-0">❌</span>
                    <p className="text-base text-foreground">{item}</p>
                  </div>
                ))}
                <p className="text-base font-medium text-muted-foreground pt-2">
                  Именно поэтому продажи остаются случайными.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#9A1E15] shadow-lg bg-[#9A1E15]/5">
              <CardContent className="pt-6 space-y-3">
                <p className="font-bold text-lg text-[#9A1E14] mb-2">После «Трекинга» у вас появляется:</p>
                {[
                  "понятная система действий",
                  "уверенность в продажах",
                  "контент, который вызывает доверие",
                  "понимание, как привлекать клиентов",
                  "структура, а не хаос",
                  "заявки и продажи",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold flex-shrink-0">✔️</span>
                    <p className="text-base text-foreground">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="format" className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Как проходит <span className="text-[#9A1E14]">работа</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: "Video", text: "Групповые разборы каждую неделю" },
              { icon: "Route", text: "индивидуальный трек под ваш проект" },
              { icon: "MessageCircle", text: "рабочий чат с поддержкой" },
              { icon: "Database", text: "база знаний с инструментами и шаблонами" },
              { icon: "Users", text: "встречи с профильными экспертами (юрист, бухгалтер, продажи в переписке, нейросети)" },
              { icon: "Briefcase", text: "список проверенных подрядчиков" }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-all shadow-md hover:shadow-lg">
                <CardContent className="py-4 px-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-primary" size={20} />
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

      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/telegram-cloud-photo-size-4-5874222278663408774-y 2.png" 
                alt="Светлана Скорнякова"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-2 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#9A1E14] text-left">
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

      <section id="cases" className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Реальные <span className="text-[#9A1E14]">результаты</span> клиентов
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
          <div className="flex justify-center pt-2">
            <Button
              size="lg"
              className="bg-[#C84B40] hover:bg-[#C84B40]/90 text-white px-8 py-5 text-base font-bold animate-pulse"
              onClick={() => window.open('https://t.me/otzyvy_skorny', '_blank')}
            >
              Больше кейсов и отзывов в TG канале
            </Button>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Варианты работы на <span className="text-[#9A1E15]">Трекинге</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-4 border-[#9A1E15] shadow-2xl bg-white hover:shadow-3xl transition-all">
              <CardContent className="pt-8 space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#9A1E15]">
                    Групповое сопровождение 6 месяцев
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Основная программа, которая создаёт вашу личную систему продаж и выводит на стабильный доход 150–300 тысяч. ежемесячно.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-[#9A1E15]">Что входит в основную программу:</h4>
                  <ul className="space-y-3 text-sm text-foreground leading-relaxed">
                    <li><span className="font-bold">• Личная стратегическая сессия,</span> на которой мы выбираем правильную нишу, определяем вашу уникальность, формируем сильное позиционирование и собираем основу продукта.</li>
                    <li><span className="font-bold">• Персональный трек на 180 дней</span> — индивидуальный план, который строится под ваш темп, нишу, уровень, загруженность и финансовые цели.</li>
                    <li><span className="font-bold">• Четыре групповых созвона каждый месяц</span> — глубокие разборы ваших продуктов, контента, постов, каналов, консультаций и переписок. Это формат, где вы получаете не уроки, а индивидуальные задачи и корректировку своих реальных действий.</li>
                    <li><span className="font-bold">• Чат ежедневной поддержки</span> — я лично отвечаю на вопросы, даю корректировки по продажам, контенту, структуре продукта, перепискам. Это сопровождение, которое ускоряет результат.</li>
                    <li><span className="font-bold">• Полный доступ ко всем модулям:</span> позиционирование, продуктовая линейка, продающие смыслы, контент, продажи, переписки, консультации, воронки продаж, трафик, найм команды и делегирование.</li>
                    <li><span className="font-bold">• Библиотека ускорения:</span> ИИ-промпты и нейропомощники, контент-шаблоны, шаблоны воронок, актуальные связки 2026 года, библиотека рабочих офферов.</li>
                    <li><span className="font-bold">• Приглашённые эксперты:</span> юрист, бухгалтер, эксперт по ИИ, специалист по продажам в переписке.</li>
                    <li><span className="font-bold">• Разбор ваших материалов</span> — офферов, консультаций, продуктов, канала, прогревов, контента, чтобы каждая часть вашей системы работала на результат.</li>
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
                  <Button 
                    size="lg" 
                    className="w-full bg-[#9A1E15] hover:bg-[#9A1E15]/90 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse"
                    onClick={() => navigate('/usloviya')}
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
                    VIP-сопровождение 6 месяцев
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Самый быстрый, глубокий и поддерживающий формат. Для тех, кому важны скорость, качество, индивидуальная работа и быстрый рост дохода.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-[#9A1E15]">Что входит в VIP:</h4>
                  <ul className="space-y-3 text-sm text-foreground leading-relaxed">
                    <li><span className="font-bold">• Всё, что есть в Групповом сопровождении</span>, плюс расширенный уровень индивидуальной работы.</li>
                    <li><span className="font-bold">• 5 индивидуальных встреч,</span> на которых мы вместе глубоко прорабатываем ваш продукт, линейку, подачу, смыслы, контент, продажи, консультации, переписки, трафик и воронку. Каждый элемент доводится до состояния, когда он приносит результат.</li>
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
                    onClick={() => navigate('/usloviya')}
                  >
                    Получить персональные условия
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-[#9A1E15] shadow-2xl bg-white hover:shadow-3xl transition-all lg:col-span-2">
              <CardContent className="pt-8 space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#9A1E15]">
                    Тест-драйв<br />(2 недели)
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Для тех, кто хочет понять свой вектор, получить первые результаты и протестировать формат перед входом в основную программу.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-[#9A1E15]">В тест-драйв входит:</h4>
                  <ul className="space-y-3 text-sm text-foreground leading-relaxed">
                    <li><span className="font-bold">• Персональный трек на 14 дней</span> — конкретные шаги, которые избавляют от хаоса и дают первые результаты: понимание клиента, проверка гипотез продукта, первые отклики и продажи.</li>
                    <li><span className="font-bold">• 19 способов собрать заявки без бюджета.</span> Их можно внедрить буквально сразу и получить продажи уже завтра.</li>
                    <li><span className="font-bold">• Две групповых встречи с разбором ваших задач.</span> Разбираем позиционирование, упаковку продукта, контент для канала, офферы.</li>
                    <li><span className="font-bold">• Доступ к базе знаний:</span> основы позиционирования, структура продукта, упаковка канала, продажи, базовая воронка, бесплатные способы привлечения клиентов.</li>
                    <li><span className="font-bold">• Поддержка в общем чате:</span> ответы на вопросы, групповые разборы, корректировка действий.</li>
                  </ul>

                  <h4 className="font-bold text-lg text-[#9A1E15] pt-2">В тест-драйв НЕ входит:</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    работа с автоворонкой, ИИ-промпты, шаблоны, нейропомощники, глубокое формирование продуктовой линейки, анализ переписок и продающих консультаций, работа с холодным трафиком и привлечение новой аудитории.
                  </p>

                  <h4 className="font-bold text-lg text-[#9A1E15] pt-2">Ваш результат за 2 недели:</h4>
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
                    onClick={() => window.open('https://payform.ru/56bCCJD/', '_blank')}
                  >
                    Записаться на тест-драйв
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Почему важно <span className="text-[#9A1E14]">не откладывать</span>
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

      <section id="contact" className="py-6 px-4 bg-[#9A1E14]">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Проведите лето 2026 с продажами!
            </h2>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed">
              Перестаньте действовать наугад и соберите систему, которая будет работать на вас весь год.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-[#9A1E14] px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => navigate('/usloviya')}
            >
              <Icon name="Hand" size={24} />
              Хочу на трекинг
            </Button>
            
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-[#9A1E14] px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse flex items-center gap-2"
              onClick={() => window.open('https://payform.ru/56bCCJD/', '_blank')}
            >
              <Icon name="Hand" size={24} />
              Тест-драйв
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
      <Footer />
    </div>
  );
};

export default Tracking;