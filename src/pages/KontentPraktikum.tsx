import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Footer from "@/components/Footer";

const PAYMENT_URL = "https://payform.ru/q8c46DE/";

const KontentPraktikum = () => {
  const scrollToPrice = () =>
    document.getElementById("price")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(154, 30, 20, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(154, 30, 20, 0); }
        }
        .btn-pulse-red { animation: pulse-scale 2s ease-in-out infinite; }
        .btn-pulse-red:hover { animation: none; opacity: 0.9; }
      `}</style>

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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
                «Контент, после которого <span className="text-[#9A1E14]">покупают</span>»
              </h1>

              <p className="text-lg md:text-xl text-[#9A1E14] font-bold">
                14-дневный практикум
              </p>

              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                Как превратить посты в систему, которая приводит к продажам даже в маленьком блоге
              </p>

              <Button
                size="lg"
                className="bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all btn-pulse-red mx-auto md:mx-0"
                onClick={scrollToPrice}
              >
                Хочу на практикум
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* БОЛЬ / ПРОБЛЕМА */}
      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto space-y-4 text-foreground text-base md:text-lg leading-relaxed">
          <p>
            Вы ведете канал, пишете полезные посты, стараетесь быть активными и даже выкладываете продающие публикации.
          </p>
          <p>Но каждый раз возникает ощущение, что вы начинаете всё сначала.</p>
          <p>
            Сегодня рассказали о себе, завтра поделились кейсом, послезавтра написали полезный пост, через день решили что-то продать.
          </p>
          <p className="font-semibold">А заявок и продаж снова нет.</p>

          <Card className="border-2 border-[#C99A4A] bg-white shadow-md">
            <CardContent className="pt-6 pb-6 text-center">
              <p className="text-xl md:text-2xl font-bold text-[#9A1E14]">
                « Наверное, сейчас никто не покупает. »
              </p>
            </CardContent>
          </Card>

          <p>
            Но проблема чаще всего <strong>не в рынке и даже не в количестве подписчиков.</strong>
          </p>
          <p>
            Проблема в том, что ваши посты не работают друг с другом. Они не складываются в единую систему, которая постепенно помогает человеку:
          </p>
          <ul className="space-y-1 pl-2">
            {[
              "сначала узнать себя",
              "затем осознать проблему",
              "увидеть новое решение",
              "довериться вам",
              "и только после этого принять решение купить",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#9A1E14] font-bold flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-center text-lg md:text-xl text-[#9A1E14]">
            Именно такую систему мы создадим за 14 дней. Не в теории, а прямо в вашем блоге!
          </p>
        </div>
      </section>

      {/* ЧТО ВЫ ПОЛУЧИТЕ */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что вы получите
          </h2>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            За две недели вы создадите полноценную цепочку контента, где каждый следующий пост усиливает предыдущий и постепенно подводит аудиторию к покупке вашего продукта.
          </p>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Не шаблон, не контент-план «на месяц» и не список идей, а работающую систему, которую сразу начнете внедрять.
          </p>
          <Card className="border-2 border-[#9A1E15]/30 shadow-md bg-gray-50">
            <CardContent className="pt-6 space-y-2">
              <p className="font-medium">Пока другие продолжают думать: «Что бы сегодня написать?», вы будете точно понимать:</p>
              {["какой пост публиковать сегодня", "зачем он нужен", "какую задачу он решает", "как он будет подводить подписчика к покупке"].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#9A1E14] font-bold flex-shrink-0">✔️</span>
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            В результате ваш блог перестанет быть набором отдельных публикаций и превратится в понятный маршрут для клиента — от первого интереса до заявки или покупки.
          </p>
          <Card className="border-2 border-[#9A1E15] bg-[#9A1E15]/5 shadow-md">
            <CardContent className="pt-6">
              <p className="font-medium text-center">
                Мы не будем писать тексты «в стол» — уже с первых дней вы начнете публиковать новые посты в своем блоге, увидите активность аудитории и выстроите систему, которая начинает работать на продажи.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ДЛЯ КОГО */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Этот практикум для вас, если...
          </h2>
          <Card className="border-2 border-[#9A1E15]/30 shadow-lg bg-white">
            <CardContent className="pt-6 space-y-3">
              {[
                "Вы регулярно ведете блог, но продажи появляются от случая к случаю",
                "Каждый раз долго думаете, о чем написать, потому что не понимаете, какой пост действительно приблизит к продаже",
                "Ваши посты набирают просмотры и реакции, но заявок практически нет",
                "Вам кажется, что проблема в контенте, хотя на самом деле вы уже много пишете",
                "Вы хотите продавать без давления, ежедневных призывов «купить» и бесконечных запусков",
                "Вы понимаете, что даже маленький блог может приносить клиентов, если контент выстроен правильно",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#9A1E14] font-bold text-lg flex-shrink-0">—</span>
                  <p className="text-base md:text-lg text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            В результате через 14 дней у вас будет
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Понятная стратегия, какой продукт продавать через блог",
              "Четкое понимание своей аудитории и смыслов, которые действительно влияют на решение о покупке",
              "Ваш собственный стиль написания постов без шаблонных и «нейросетевых» текстов",
              "Готовая цепочка, где каждый следующий пост усиливает предыдущий",
              "Уже опубликованный прогрев в вашем блоге",
              "Вовлеченная аудитория, которая начинает отвечать и интересоваться вашим продуктом",
              "Первые заявки или продажи",
              "Пошаговый план действий на следующие 30 дней",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-gray-50 rounded-xl p-4">
                <span className="text-[#9A1E14] font-bold flex-shrink-0">✔️</span>
                <p className="text-base text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЧТО НЕ ПОЛУЧИТЕ */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что вы НЕ получите
          </h2>
          <Card className="border-2 border-gray-300 bg-white shadow-sm">
            <CardContent className="pt-6 space-y-3">
              {[
                "Еще один курс по копирайтингу",
                "Контент-план на месяц без понимания, как он должен работать",
                "Универсальные шаблоны, которые одинаково пишут все",
                "Две недели теории без практики",
                "Волшебную кнопку «один пост = сто продаж»",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gray-400 flex-shrink-0">❌</span>
                  <p className="text-base md:text-lg text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-center text-base md:text-lg font-semibold text-[#9A1E14]">
            Вы превратите хаотичный контент в систему, которая приводит аудиторию к заявкам и продажам.
          </p>
        </div>
      </section>

      {/* ПРОГРАММА 4 ШАГА */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что мы сделаем за 14 дней
          </h2>

          {[
            {
              num: "1",
              icon: "Users",
              title: "Поймем, кто действительно покупает ваш продукт",
              text: "Чтобы писать контент, который приводит к продажам, сначала нужно понять, кому именно вы продаете.",
              points: [
                "кто ваш идеальный клиент",
                "в какой точке он находится сейчас",
                "что его беспокоит, чего он хочет и почему до сих пор не решил свою проблему",
                "какие мысли, страхи и возражения мешают ему купить",
                "какие смыслы помогут постепенно подвести его к покупке",
              ],
              note: "Для этого вы получите моего авторского AI-ассистента, который поможет глубоко распаковать вашу целевую аудиторию и превратить ее боли, желания и возражения в готовые смыслы для контента.",
            },
            {
              num: "2",
              icon: "Package",
              title: "Упакуем продукт так, чтобы его хотелось купить",
              text: "Контент начинает продавать только тогда, когда вы точно понимаете, что именно хотите продать и к какому действию хотите привести человека.",
              points: [
                "какой продукт станет основным предложением",
                "какую ценность он несет",
                "какое действие должен совершить читатель после вашей цепочки постов",
                "какие смыслы должны привести его к этому решению",
              ],
              note: "На этом этапе AI-ассистент поможет сформулировать ценность вашего продукта простым и понятным языком.",
            },
            {
              num: "3",
              icon: "Sparkles",
              title: "Сделаем так, чтобы контент звучал как вы, а не как нейросеть",
              text: "Чтобы контент не выглядел шаблонным или написанным нейросетью, мы сохраним вашу индивидуальность.",
              points: [
                "свою манеру общения",
                "характерные речевые обороты",
                "стиль подачи",
                "интонацию, по которой вас узнают подписчики",
              ],
              note: "После этого AI-ассистент будет создавать тексты с учетом именно вашего стиля, а не безликих шаблонов.",
            },
            {
              num: "4",
              icon: "Link",
              title: "Создадим цепочку контента, после которого покупают",
              text: "Каждый день вы будете создавать один элемент системы контента, которая постепенно приводит подписчиков к покупке.",
              points: [
                "цель и задачу, которую он должен решить",
                "ключевой смысл, который важно донести до аудитории",
                "понимание, как этот пост связан с предыдущим и следующим",
                "готовую структуру и пример, которые легко адаптировать под свою нишу",
              ],
              note: "На каждом этапе вам будет помогать мой авторский AI-ассистент, который адаптирует структуру под вашу нишу, поможет сохранить ваш стиль и значительно ускорит создание контента.",
            },
          ].map((step) => (
            <Card key={step.num} className="border-2 border-[#9A1E15]/30 shadow-md bg-gray-50">
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#9A1E14] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.num}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-base text-foreground">{step.text}</p>
                <div className="space-y-1 pl-2">
                  {step.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#9A1E14] flex-shrink-0">✔️</span>
                      <span className="text-sm md:text-base text-foreground">{p}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground italic border-t border-gray-200 pt-3">
                  {step.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* БОНУС */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-[#C99A4A] bg-white shadow-lg">
            <CardContent className="pt-6 space-y-3">
              <p className="text-center text-2xl">🎁</p>
              <h2 className="text-xl md:text-2xl font-bold text-[#9A1E14] text-center">
                Специальный бонус: индивидуальная стратегия продаж на 30 дней
              </h2>
              <p className="text-base text-foreground text-center">
                Каждый участник практикума получит персональную стратегическую сессию со мной, на которой мы разработаем индивидуальный план развития вашего проекта с учетом вашей текущей ситуации, продукта и финансовой цели.
              </p>
              <div className="space-y-2 pl-2">
                {[
                  "проанализируем результаты практикума и определим точки роста",
                  "разложим вашу финансовую цель на конкретные показатели и действия",
                  "составим пошаговый план продаж на ближайшие 30 дней",
                  "определим, какой контент, действия и каналы привлечения помогут регулярно получать заявки и клиентов",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#9A1E14] flex-shrink-0">✔️</span>
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ФОРМАТ */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Формат участия
          </h2>
          <p className="text-center text-lg font-semibold text-[#9A1E14]">
            📅 Старт — 3 августа · Продолжительность — 14 дней
          </p>

          <div className="space-y-3">
            {[
              {
                icon: "Users",
                title: "2 групповых встречи",
                text: "На первой определим вашу целевую аудиторию, продукт и подготовим основу для цепочки контента. На второй — разберем результаты, скорректируем работу и усилим продающую часть.",
              },
              {
                icon: "Video",
                title: "10 практических видеоуроков",
                text: "Каждый день вы получаете новый этап системы контента с готовой структурой поста, примером и заданием, которое сразу внедряете в своем блоге.",
              },
              {
                icon: "Bot",
                title: "Авторские AI-ассистенты",
                text: "Для каждого этапа практикума вы получите AI-ассистента, который поможет быстрее выполнять задания, сохранять ваш стиль и адаптировать контент под вашу аудиторию и продукт.",
              },
              {
                icon: "Rocket",
                title: "Практика с первого дня",
                text: "Вы не будете писать тексты «в стол». Каждый день вы будете публиковать новый пост, анализировать реакцию аудитории и собирать работающую систему контента.",
              },
              {
                icon: "MessageCircle",
                title: "Чат участников и обратная связь",
                text: "На протяжении всего практикума я лично буду проверять ваши посты и помогать доработать их, чтобы они доводили до продажи.",
              },
              {
                icon: "Target",
                title: "Индивидуальная стратегия продаж на 30 дней",
                text: "В завершение практикума каждый участник получит персональную стратегическую сессию и готовый план дальнейших действий.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-[#9A1E15]/20 shadow-sm bg-gray-50">
                <CardContent className="pt-5 pb-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#9A1E14]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={20} className="text-[#9A1E14]" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm md:text-base text-muted-foreground">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Отзывы учеников:
          </h2>
          <div className="relative">
            <div id="reviews-carousel" className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              {[
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/0ba76b0e-e0f5-46c1-adc8-920ca4e881c8.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/cdb221d0-67c4-4fee-96cc-606c25d3c806.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/6a4f83c8-ab33-476a-a284-edc51c36803f.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/79cab33d-8313-4f5a-8ad0-d2567ffc709a.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/8418ef70-f647-4baa-b55a-377fff350855.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/05c26f4c-ce0d-4808-92aa-d9bea67003e0.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/7fc652c5-9dd0-4690-b1a5-71621dcb08e8.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/f8a739f2-bf16-4608-8ad3-102a74276ca6.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/b4db252e-6e82-4b40-8a85-242a0ae88bad.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/4124a46d-3cd7-4805-8bf4-625d981679d2.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/33eec339-67cf-413e-b894-399b97fe8527.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/9f43954e-3e82-4af7-9454-069deb33e8d1.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/75928077-bd48-4bf5-a742-e546c0ed4414.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/68cad181-e2ce-4db2-8933-03d9651660cb.png",
                "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/353e4b65-fbba-4b3e-8007-52f1e1046476.png",
              ].map((src, i) => (
                <div key={i} className="flex-shrink-0 snap-start border-2 border-[#9A1E15] rounded-2xl overflow-hidden w-72">
                  <img src={src} alt={`Отзыв ${i + 1}`} className="w-full h-auto object-contain" />
                </div>
              ))}
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 rounded-full bg-[#9A1E15] text-white flex items-center justify-center shadow-lg hover:bg-[#9A1E15]/80 transition-all z-10"
              onClick={() => { const el = document.getElementById('reviews-carousel'); if (el) el.scrollBy({ left: -290, behavior: 'smooth' }); }}
            >‹</button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 rounded-full bg-[#9A1E15] text-white flex items-center justify-center shadow-lg hover:bg-[#9A1E15]/80 transition-all z-10"
              onClick={() => { const el = document.getElementById('reviews-carousel'); if (el) el.scrollBy({ left: 290, behavior: 'smooth' }); }}
            >›</button>
          </div>
          <p className="text-center text-sm text-muted-foreground">← листайте →</p>
        </div>
      </section>

      {/* ЦЕНА / CTA */}
      <section id="price" className="py-10 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Card className="border-2 border-[#9A1E15] shadow-xl bg-white">
            <CardContent className="pt-8 pb-8 space-y-4">
              <span className="inline-block bg-[#9A1E14] text-white font-bold text-xs md:text-sm tracking-wide px-4 py-1.5 rounded-full">
                СПЕЦЦЕНА ТОЛЬКО ДО 26 ИЮЛЯ · 3 МЕСТА
              </span>
              <p className="text-base md:text-lg text-foreground">Стоимость участия</p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-2xl md:text-3xl font-bold text-gray-400 line-through">9 900 ₽</p>
                <p className="text-4xl md:text-5xl font-black text-[#9A1E14]">7 900 ₽</p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                Старт — 3 августа.
              </p>
              <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  size="lg"
                  className="bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all btn-pulse-red w-full sm:w-auto"
                >
                  Записаться и оплатить участие
                </Button>
              </a>
            </CardContent>
          </Card>

          <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
            Если вы устали каждый день начинать продажи с нуля, этот практикум поможет превратить ваш блог в систему, которая постепенно приводит подписчиков к покупке.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KontentPraktikum;