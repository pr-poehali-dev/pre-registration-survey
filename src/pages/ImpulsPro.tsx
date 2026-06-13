import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const ImpulsPro = () => {
  const navigate = useNavigate();

  const results = [
    "Поставите реалистичную финансовую цель на ближайшие 14 дней и получите план действий под неё",
    "Чёткое позиционирование и понимание своей ценности",
    "Понимание, кому и что продавать именно сейчас",
    "Лёгкий летний продукт, который люди готовы покупать",
    "Понимание, где брать заявки без больших вложений в рекламу",
    "Систему продаж, которую можно использовать дальше самостоятельно",
    "Структуру продающих переписок без давления и навязывания",
    "Контент, который вызывает доверие и приводит клиентов",
    "Первые заявки и продажи",
    "Персональную стратегию продвижения на лето",
  ];

  const format = [
    { icon: "🎯", text: "3 групповых созвона" },
    { icon: "🗺️", text: "Персональная дорожная xmind-карта действий" },
    { icon: "📋", text: "Простые задания между созвонами, которые ведут к результату" },
    { icon: "💬", text: "Проверка и обратная связь от меня" },
    { icon: "⚡", text: "7-дневный контент-челлендж" },
    { icon: "📝", text: "Шаблоны продающих постов и продающих переписок" },
  ];

  const why = [
    "Мы не создаём сложный бизнес на годы вперёд — мы собираем понятную систему продаж на ближайшие 14 дней",
    "Каждый шаг программы направлен на заявки и продажи, а не на получение очередных знаний",
    "Вы работаете по готовому плану действий, который создаётся под вашу ситуацию",
    "Для старта достаточно того опыта и экспертности, которые уже есть у вас сегодня",
    "Вы получаете поддержку, обратную связь и помощь на каждом этапе внедрения",
    "Вместо хаотичных действий у вас — чёткая система, которая даёт результат",
  ];

  const CheckItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2">
      <span className="text-[#9A1E14] font-bold flex-shrink-0">✔</span>
      <p className="text-base text-foreground">{text}</p>
    </div>
  );

  const DotItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2">
      <span className="text-[#9A1E14] font-black text-lg flex-shrink-0 leading-snug">•</span>
      <p className="text-base text-foreground">{text}</p>
    </div>
  );

  const ArrowItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2">
      <span className="text-[#9A1E14] font-bold flex-shrink-0">→</span>
      <p className="text-base text-foreground">{text}</p>
    </div>
  );

  const StarItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2">
      <span className="text-[#9A1E14] flex-shrink-0">★</span>
      <p className="text-base text-foreground">{text}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      {/* HERO */}
      <section className="relative px-4 py-8 md:py-14 overflow-hidden bg-white">
        {/* Декоративный элемент */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9A1E14]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#9A1E14]/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/d8b25a80-a37d-42fa-98a6-a37e9f697b0d.png"
                alt="Светлана Скорнякова"
                className="w-56 md:w-72 lg:w-80 h-auto object-contain drop-shadow-2xl"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="space-y-5 text-center md:text-left">
              <p className="text-base font-semibold text-muted-foreground">📅 29 июня — 12 июля</p>
              <div>
                <span
                  className="text-4xl md:text-6xl font-black tracking-tight text-[#9A1E14]"
                  style={{ textShadow: "4px 4px 0px rgba(154,30,20,0.15)" }}
                >
                  ИМПУЛЬС PRO
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Заявки и продажи за 14 дней — даже летом
              </h1>
              <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                Для экспертов и помогающих практиков, которые хотят получать заявки даже летом, перестать бесконечно готовиться, сомневаться и ждать клиентов.
              </p>
              <Button
                size="lg"
                className="bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse mx-auto md:mx-0"
                onClick={() => navigate("/form")}
              >
                Хочу заявки уже через 14 дней
              </Button>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                Без сложных запусков, бесконечного обучения и долгой подготовки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ЧТО ТАКОЕ */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-[#9A1E15] bg-[#9A1E15]/5 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#9A1E14]" />
            <CardContent className="pt-6 space-y-3 pl-8">
              <p className="text-base md:text-xl font-bold text-[#9A1E14] text-center">
                Импульс PRO — это группа внедрения,
              </p>
              <p className="text-base md:text-lg font-medium text-foreground text-center leading-relaxed">
                где мы вместе создадим ваш летний продукт, определим аудиторию, выстроим понятную систему продаж и начнём получать заявки уже в ближайшие <span className="text-[#9A1E14] font-bold">14 дней.</span>
              </p>
              <p className="text-base md:text-lg text-foreground text-center leading-relaxed">
                Только конкретные действия, которые приводят к результату.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ЧТО ПОЛУЧИТЕ */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что вы получите за 14 дней:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-[#9A1E15]/20 rounded-xl p-4 shadow-sm hover:border-[#9A1E15]/50 hover:shadow-md transition-all">
                <span className="bg-[#9A1E14] text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-base text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМАТ */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Формат работы
          </h2>
          <p className="text-center text-base md:text-lg font-semibold text-[#9A1E14]">
            14 дней лично со мной в группе внедрения
          </p>
          <p className="text-center text-base md:text-lg text-muted-foreground">Внутри вас ждут:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {format.map((item, i) => (
              <Card key={i} className="border-2 border-[#9A1E15]/30 shadow-sm hover:shadow-md transition-all hover:border-[#9A1E15]/60">
                <CardContent className="pt-4 pb-4 flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-base font-medium text-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ ПОЛУЧИТСЯ */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Почему у вас получится:
          </h2>
          <Card className="border-2 border-[#9A1E15]/30 shadow-lg bg-white">
            <CardContent className="pt-6 space-y-3">
              {why.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-1 border-b border-gray-100 last:border-0">
                  <span className="w-7 h-7 rounded-full bg-[#9A1E14]/10 text-[#9A1E14] font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-base md:text-lg text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ОБ АВТОРЕ */}
      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
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

      {/* ПРОГРАММА */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">Программа</h2>
          <p className="text-center text-base md:text-lg text-muted-foreground">14 дней — 3 созвона — конкретный результат</p>

          <div className="space-y-4">

            {/* СОЗВОН 1 */}
            <div className="border-2 border-[#9A1E15] rounded-2xl overflow-hidden">
              <div className="bg-[#9A1E14] px-6 py-4 flex items-center gap-4">
                <span className="text-white/30 font-black text-5xl leading-none select-none">01</span>
                <div>
                  <p className="text-white/70 font-semibold text-sm uppercase tracking-widest">Созвон №1</p>
                  <p className="text-white font-bold text-xl md:text-2xl">Создаём ваш план заявок и продаж</p>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  На первом созвоне мы разберём вашу текущую ситуацию и создадим персональную дорожную карту действий на ближайшие 14 дней.
                </p>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Вы точно будете понимать:</p>
                  <div className="space-y-1 pl-2">
                    {["что продавать", "кому продавать", "почему люди должны выбрать именно вас", "какие действия приведут к заявкам именно в вашей ситуации"].map((item, j) => (
                      <ArrowItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Распакуем целевую аудиторию. Определим:</p>
                  <div className="space-y-1 pl-2">
                    {["кто ваши идеальные клиенты", "какие проблемы их беспокоят прямо сейчас", "чего они хотят на самом деле", "что мешает им принять решение", "какие смыслы вызывают доверие и желание купить"].map((item, j) => (
                      <DotItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Создадим летний продукт. Мы определим:</p>
                  <div className="space-y-1 pl-2">
                    {["результат продукта", "формат работы", "ценность для клиента", "что должно входить в продукт", "как объяснять его простым и понятным языком", "почему люди захотят его купить"].map((item, j) => (
                      <StarItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Составим план продаж без вложений. Разберём:</p>
                  <div className="space-y-1 pl-2">
                    {["где искать клиентов", "как получать заявки без сложных запусков", "какие действия действительно приводят к продажам", "на что не стоит тратить время и силы"].map((item, j) => (
                      <CheckItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="bg-[#9A1E14]/5 border border-[#9A1E14]/30 rounded-xl p-4 space-y-2">
                  <p className="font-bold text-base text-[#9A1E14]">Результат первого созвона:</p>
                  <p className="text-sm text-muted-foreground">После первого созвона у вас будет:</p>
                  {["персональная дорожная карта на 14 дней", "понимание своей аудитории", "готовый летний продукт для продажи", "понятное предложение для клиентов", "стратегия получения заявок под вашу финансовую цель"].map((item, i) => (
                    <CheckItem key={i} text={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* СОЗВОН 2 */}
            <div className="border-2 border-[#9A1E15] rounded-2xl overflow-hidden">
              <div className="bg-[#9A1E14] px-6 py-4 flex items-center gap-4">
                <span className="text-white/30 font-black text-5xl leading-none select-none">02</span>
                <div>
                  <p className="text-white/70 font-semibold text-sm uppercase tracking-widest">Созвон №2</p>
                  <p className="text-white font-bold text-xl md:text-2xl">Превращаем интерес в заявки</p>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  На втором созвоне мы переходим от подготовки к реальным продажам. Именно здесь начинается работа с заявками, диалогами и интересом аудитории.
                </p>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Создадим структуру продающей переписки. Без навязчивых продаж — вы сможете:</p>
                  <div className="space-y-1 pl-2">
                    {["вызывать доверие", "доносить ценность своих услуг", "уверенно рассказывать о своих продуктах", "переводить интерес в заявки", "продавать экологично"].map((item, j) => (
                      <ArrowItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Уберём главные страхи продаж:</p>
                  <div className="space-y-1 pl-2">
                    {["боюсь продавать", "не умею доносить ценность", "не знаю, что отвечать клиентам", "боюсь показаться навязчивым"].map((item, j) => (
                      <DotItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Работа с нейро-продажником. Специальный помощник поможет:</p>
                  <div className="space-y-1 pl-2">
                    {["создавать продающие переписки", "отвечать на возражения", "доносить ценность продукта", "переводить интерес в заявку", "уверенно вести диалог с клиентом", "собирать заявки и оплаты"].map((item, j) => (
                      <StarItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="bg-[#9A1E14]/5 border border-[#9A1E14]/30 rounded-xl p-4 space-y-2">
                  <p className="font-bold text-base text-[#9A1E14]">Результат второго созвона:</p>
                  {["понятная система общения с клиентами", "уверенность в продажах без давления", "первые заявки или активные диалоги с потенциальными клиентами", "понимание, как вызывать интерес у аудитории и превращать его в продажи"].map((item, i) => (
                    <CheckItem key={i} text={item} />
                  ))}
                </div>

                {/* КОНТЕНТ-ЧЕЛЛЕНДЖ */}
                <div className="border border-[#9A1E15]/40 rounded-xl overflow-hidden">
                  <div className="bg-[#9A1E14]/10 px-5 py-3 flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <p className="font-black text-base text-[#9A1E14] uppercase tracking-wide">7-дневный контент-челлендж</p>
                      <p className="text-sm text-muted-foreground">Стартует после второго созвона</p>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="space-y-2">
                      <p className="font-bold text-base text-foreground">Каждый день вы будете получать:</p>
                      {["короткий видеоурок", "шаблон поста", "нейропомощника для создания текста", "мою обратную связь"].map((item, i) => (
                        <ArrowItem key={i} text={item} />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-base text-foreground">За 7 дней вы создадите контент, который:</p>
                      {["вовлекает аудиторию", "вызывает доверие", "показывает вашу экспертность", "помогает подписчикам узнать себя", "прогревает к покупке", "приводит заявки"].map((item, i) => (
                        <StarItem key={i} text={item} />
                      ))}
                    </div>
                    <div className="bg-[#9A1E14]/5 border border-[#9A1E14]/20 rounded-lg p-3 space-y-1">
                      <p className="font-bold text-sm text-[#9A1E14]">Результат челленджа:</p>
                      {["понимание, как через контент вызывать доверие и получать заявки без постоянных продаж в лоб", "7 постов, которые последовательно ведут подписчиков от интереса к заявке", "активная и вовлечённая аудитория", "система создания контента без мучений и ступора", "заявки из контента"].map((item, i) => (
                        <CheckItem key={i} text={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* СОЗВОН 3 */}
            <div className="border-2 border-[#9A1E15] rounded-2xl overflow-hidden">
              <div className="bg-[#9A1E14] px-6 py-4 flex items-center gap-4">
                <span className="text-white/30 font-black text-5xl leading-none select-none">03</span>
                <div>
                  <p className="text-white/70 font-semibold text-sm uppercase tracking-widest">Созвон №3</p>
                  <p className="text-white font-bold text-xl md:text-2xl">Докручиваем результат и создаём план на лето</p>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  На финальном созвоне мы подведём итоги и посмотрим, что уже сработало именно у вас.
                </p>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Разберём:</p>
                  <div className="space-y-1 pl-2">
                    {["какие действия дали лучший результат", "что привело заявки", "что можно усилить", "какие действия стоит убрать", "как увеличить количество заявок дальше"].map((item, j) => (
                      <ArrowItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Создадим личную летнюю стратегию. Вы поймёте:</p>
                  <div className="space-y-1 pl-2">
                    {["что делать дальше", "как продолжать получать заявки", "как развивать свой канал", "как масштабировать результат", "как прийти к стабильным продажам"].map((item, j) => (
                      <StarItem key={j} text={item} />
                    ))}
                  </div>
                </div>

                <div className="bg-[#9A1E14]/5 border border-[#9A1E14]/30 rounded-xl p-4 space-y-2">
                  <p className="font-bold text-base text-[#9A1E14]">Результат третьего созвона:</p>
                  {["персональная стратегия на лето", "понимание дальнейших шагов", "рабочая система продаж", "ясность и уверенность в своих действиях"].map((item, i) => (
                    <CheckItem key={i} text={item} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* БОНУСЫ */}
      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">Бонусы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🧬", name: "Нейро-Распаковщик аудитории", desc: "Поможет быстро понять свою целевую аудиторию, её боли, желания и триггеры принятия решения.", result: "Вы будете точно понимать, кому продаёте и какие смыслы приводят клиентов." },
              { icon: "🧬", name: "Нейро-Методолог", desc: "Поможет быстро собрать продукт под запрос вашей аудитории и упаковать его в понятное предложение, которое хочется купить.", result: "Готовый продукт, который можно продавать уже сейчас." },
              { icon: "🧬", name: "Нейро-Продажник", desc: "Ваш помощник по продажам и перепискам. Поможет уверенно доносить ценность своих услуг и не терять заявки.", result: "Больше уверенности в продажах и больше диалогов, которые приводят к оплатам." },
              { icon: "🎁", name: "Мастер-класс «Диагностики, после которых покупают»", desc: "Вы узнаете, как проводить встречи так, чтобы клиент видел ценность вашей помощи и принимал решение о работе.", result: "Больше продаж без давления и уговоров." },
            ].map((bonus, i) => (
              <Card key={i} className="border-2 border-[#9A1E15]/30 shadow-sm hover:shadow-md transition-all hover:border-[#9A1E15]/60">
                <CardContent className="pt-5 pb-5 space-y-2">
                  <p className="text-3xl">{bonus.icon}</p>
                  <p className="font-bold text-base text-[#9A1E14]">{bonus.name}</p>
                  <p className="text-base text-foreground leading-relaxed">{bonus.desc}</p>
                  <div className="pt-2 border-t border-[#9A1E15]/20">
                    <p className="text-sm font-bold text-[#9A1E14]">Результат:</p>
                    <p className="text-sm text-foreground">{bonus.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ЧТО БУДЕТ ЧЕРЕЗ 14 ДНЕЙ */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">Что будет через 14 дней</h2>
          <Card className="border-2 border-[#9A1E15] bg-[#9A1E15]/5 shadow-md">
            <CardContent className="pt-6 space-y-3">
              {[
                "У вас будет продукт, который можно продавать уже сейчас",
                "Вы будете понимать, кому и как его предлагать",
                "У вас появится система получения заявок без хаотичных действий",
                "Вы создадите контент, который приводит клиентов",
                "У вас будет план продвижения на всё лето",
                "И самое главное — вы перестанете гадать, что делать дальше",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#9A1E14] font-black text-xl flex-shrink-0">✔</span>
                  <p className="text-base md:text-lg text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">Тарифы Импульс PRO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ГРУППОВОЙ */}
            <div className="border-2 border-[#9A1E15] rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-[#9A1E14] px-6 py-5 text-center">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-1">Групповой тариф</p>
                <p className="text-white font-black text-4xl">9.990 <span className="text-2xl">руб.</span></p>
                <p className="text-yellow-300 font-semibold text-sm mt-1">До 21 июня</p>
                <p className="text-white/60 text-sm line-through">Затем 14.990 руб.</p>
              </div>
              <div className="p-6 space-y-4 flex-1 bg-white">
                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">В тариф входит:</p>
                  {[
                    "14 дней работы в группе внедрения",
                    "3 групповых созвона со Светланой",
                    "Персональная дорожная карта действий",
                    "Проверка заданий и обратная связь",
                    "7-дневный контент-челлендж",
                    "Персональная стратегия продаж на лето",
                    "Доступ к записям — 14 дней",
                    "Доступ к нейропомощникам — 14 дней",
                  ].map((item, i) => (
                    <CheckItem key={i} text={item} />
                  ))}
                </div>
                <div className="space-y-2 border-t border-[#9A1E15]/20 pt-3">
                  <p className="font-bold text-base text-foreground">Бонусы:</p>
                  {[
                    "🧬 Нейро-Распаковщик аудитории",
                    "🧬 Нейро-Методолог",
                    "🧬 Нейро-Продажник",
                    "🎁 Мастер-класс «Диагностики, после которых покупают»",
                  ].map((item, i) => (
                    <p key={i} className="text-base text-foreground pl-2">{item}</p>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <Button
                    className="w-full bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white font-bold py-6 text-lg"
                    onClick={() => navigate("/form")}
                  >
                    Оплатить
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#9A1E14] text-[#9A1E14] hover:bg-[#9A1E14]/5 font-bold py-6 text-lg"
                    onClick={() => navigate("/form")}
                  >
                    Оплатить в рассрочку
                  </Button>
                </div>
              </div>
            </div>

            {/* VIP */}
            <div className="border-2 border-[#9A1E15] rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-br from-[#9A1E14] to-[#6b1510] px-6 py-5 text-center">
                <p className="text-yellow-300 text-sm font-semibold uppercase tracking-widest mb-1">VIP</p>
                <p className="text-white font-black text-4xl">24.990 <span className="text-2xl">₽</span></p>
                <p className="text-white/80 text-sm mt-2 leading-snug">Для тех, кто хочет пройти этот путь со мной максимально близко и получить персональную стратегию роста</p>
              </div>
              <div className="p-6 space-y-4 flex-1 bg-white">
                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">Всё из группового тарифа +</p>
                  {[
                    "Персональная адаптация всей стратегии под вашу ситуацию",
                    "2 личных созвона со Светланой",
                    "Персональный аудит канала и продаж",
                    "Личная докрутка продукта и оффера",
                    "Индивидуальная стратегия роста на 90 дней",
                    "Приоритетная проверка заданий",
                    "Приоритетная обратная связь в чате",
                    "Разбор одной продающей консультации или диагностики",
                    "Доступ к записям — 30 дней",
                    "Доступ к нейропомощникам — 30 дней",
                  ].map((item, i) => (
                    <CheckItem key={i} text={item} />
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <Button
                    className="w-full bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white font-bold py-6 text-lg"
                    onClick={() => navigate("/form")}
                  >
                    Оплатить VIP
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#9A1E14] text-[#9A1E14] hover:bg-[#9A1E14]/5 font-bold py-6 text-lg"
                    onClick={() => navigate("/form")}
                  >
                    Оплатить в рассрочку
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 bg-[#9A1E14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Готовы получить заявки уже через 14 дней?
          </h2>
          <Button
            size="lg"
            className="bg-white text-[#9A1E14] hover:bg-white/90 px-12 py-7 text-xl font-bold shadow-2xl transition-all"
            onClick={() => navigate("/form")}
          >
            Записаться на Импульс PRO
          </Button>
          <p className="text-white/70 text-sm">
            Без сложных запусков и долгой подготовки — только действия и результат
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpulsPro;