import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Footer from "@/components/Footer";

const PAYMENT_URL = "https://payform.ru/jdcc9xu/";
const DEADLINE = new Date("2026-08-04T23:59:00");

const getTimeLeft = () => {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
};

const KontentPraktikum = () => {
  const scrollToPrice = () =>
    document.getElementById("price")?.scrollIntoView({ behavior: "smooth" });

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(154, 30, 20, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(154, 30, 20, 0); }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes float-y-slow {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.08); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes sparkle-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(15deg); }
        }
        @keyframes ribbon-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(201,154,74,0.5), 0 0 30px rgba(201,154,74,0.2); }
          50% { box-shadow: 0 0 25px rgba(201,154,74,0.8), 0 0 45px rgba(201,154,74,0.4); }
        }
        .font-handwritten { font-family: 'Caveat', cursive; }
        .gift-card {
          background: linear-gradient(135deg, #2b0e0a 0%, #4a140d 35%, #6b1810 65%, #2b0e0a 100%);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }
        .gift-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(120deg, #C99A4A, #f5d98f, #C99A4A, #8a6423, #C99A4A);
          background-size: 300% 300%;
          animation: shimmer 4s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 1;
        }
        .sparkle { animation: sparkle-twinkle 2.4s ease-in-out infinite; }
        .shine-text {
          background: linear-gradient(90deg, #f5d98f 0%, #C99A4A 25%, #fff5db 50%, #C99A4A 75%, #f5d98f 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 3.5s linear infinite;
        }
        .btn-pulse-red { animation: pulse-scale 2s ease-in-out infinite; }
        .btn-pulse-red:hover { animation: none; opacity: 0.9; }
        .float-badge { animation: float-y 4s ease-in-out infinite; }
        .float-badge-slow { animation: float-y-slow 5.5s ease-in-out infinite; }
        .blob { animation: blob-move 9s ease-in-out infinite; filter: blur(40px); }
        .spin-slow { animation: spin-slow 12s linear infinite; }
        .tilt-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .tilt-card:hover { transform: translateY(-6px) rotate(-0.5deg); }
        .badge-3d {
          background: linear-gradient(135deg, #9A1E14 0%, #C84B40 60%, #C99A4A 100%);
          box-shadow: 0 10px 25px -8px rgba(154,30,20,0.55), inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.2);
        }
      `}</style>

      {/* HERO */}
      <section className="relative px-4 py-10 md:py-14 overflow-hidden bg-white">
        {/* decorative blobs */}
        <div className="blob absolute -top-10 -left-10 w-56 h-56 rounded-full bg-[#C99A4A]/25 pointer-events-none" />
        <div className="blob absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-[#9A1E14]/15 pointer-events-none" style={{ animationDelay: '2s' }} />
        <span className="float-badge absolute top-10 right-8 md:right-24 text-4xl md:text-5xl select-none pointer-events-none drop-shadow-lg">✨</span>
        <span className="float-badge-slow absolute bottom-8 left-4 md:left-16 text-3xl md:text-4xl select-none pointer-events-none drop-shadow-lg">🚀</span>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Фото */}
            <div className="flex-shrink-0 flex justify-center md:justify-start relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#C99A4A]/30 via-[#9A1E14]/10 to-transparent blur-2xl" />
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/d8b25a80-a37d-42fa-98a6-a37e9f697b0d.png"
                  alt="Светлана Скорнякова"
                  className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl relative z-10"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>

            {/* Текст */}
            <div className="space-y-6 text-center md:text-left relative z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
                «Контент, после которого{" "}
                <span className="relative inline-block text-[#9A1E14]">
                  покупают
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                    <path d="M0 6 Q50 0 100 5 T200 4" stroke="#C99A4A" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                »
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
      <section className="relative py-6 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="blob absolute top-10 right-0 w-64 h-64 rounded-full bg-[#9A1E14]/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-4 text-foreground text-base md:text-lg leading-relaxed relative">
          <p>
            Вы ведете канал, пишете полезные посты, стараетесь быть активными и даже выкладываете продающие публикации.
          </p>
          <p>Но каждый раз возникает ощущение, что вы начинаете всё сначала.</p>
          <p>
            Сегодня рассказали о себе, завтра поделились кейсом, послезавтра написали полезный пост, через день решили что-то продать.
          </p>
          <p className="font-semibold">А заявок и продаж снова нет.</p>

          <Card className="relative border-2 border-[#C99A4A] bg-white shadow-md tilt-card overflow-visible">
            <span className="float-badge absolute -top-6 -left-4 text-4xl select-none drop-shadow-md">💭</span>
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
          <ul className="space-y-2 pl-2">
            {[
              "сначала узнать себя",
              "затем осознать проблему",
              "увидеть новое решение",
              "довериться вам",
              "и только после этого принять решение купить",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full badge-3d text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
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
      <section className="relative py-6 px-4 bg-white overflow-hidden">
        <span className="float-badge-slow absolute top-6 right-6 md:right-16 text-4xl select-none pointer-events-none drop-shadow-md">💡</span>
        <div className="max-w-3xl mx-auto space-y-4 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что вы получите
          </h2>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            За две недели вы создадите полноценную цепочку контента, где каждый следующий пост усиливает предыдущий и постепенно подводит аудиторию к покупке вашего продукта.
          </p>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Не шаблон, не контент-план «на месяц» и не список идей, а работающую систему, которую сразу начнете внедрять.
          </p>
          <Card className="border-2 border-[#9A1E15]/30 shadow-md bg-gray-50 tilt-card">
            <CardContent className="pt-6 space-y-3">
              <p className="font-medium">Пока другие продолжают думать: «Что бы сегодня написать?», вы будете точно понимать:</p>
              {["какой пост публиковать сегодня", "зачем он нужен", "какую задачу он решает", "как он будет подводить подписчика к покупке"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg badge-3d text-white flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={14} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            В результате ваш блог перестанет быть набором отдельных публикаций и превратится в понятный маршрут для клиента — от первого интереса до заявки или покупки.
          </p>
          <Card className="relative border-2 border-[#9A1E15] bg-[#9A1E15]/5 shadow-md overflow-visible">
            <span className="float-badge absolute -top-5 right-6 text-3xl select-none drop-shadow-md">🎯</span>
            <CardContent className="pt-6">
              <p className="font-medium text-center">
                Мы не будем писать тексты «в стол» — уже с первых дней вы начнете публиковать новые посты в своем блоге, увидите активность аудитории и выстроите систему, которая начинает работать на продажи.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ДЛЯ КОГО */}
      <section className="relative py-6 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="blob absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#C99A4A]/20 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-3 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Этот практикум для вас, если...
          </h2>
          <Card className="border-2 border-[#9A1E15]/30 shadow-lg bg-white tilt-card">
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
                  <span className="w-6 h-6 rounded-full badge-3d text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="ArrowRight" size={12} />
                  </span>
                  <p className="text-base md:text-lg text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="relative py-6 px-4 bg-white overflow-hidden">
        <span className="float-badge absolute top-4 left-4 md:left-12 text-4xl select-none pointer-events-none drop-shadow-md">🏆</span>
        <div className="max-w-3xl mx-auto space-y-3 relative">
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
              <div key={i} className="tilt-card flex items-start gap-3 bg-gray-50 rounded-xl p-4 shadow-sm">
                <span className="w-8 h-8 rounded-xl badge-3d text-white flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" size={16} />
                </span>
                <p className="text-base text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЧТО НЕ ПОЛУЧИТЕ */}
      <section className="relative py-6 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что вы НЕ получите
          </h2>
          <Card className="border-2 border-gray-300 bg-white shadow-sm tilt-card">
            <CardContent className="pt-6 space-y-3">
              {[
                "Еще один курс по копирайтингу",
                "Контент-план на месяц без понимания, как он должен работать",
                "Универсальные шаблоны, которые одинаково пишут все",
                "Две недели теории без практики",
                "Волшебную кнопку «один пост = сто продаж»",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={12} />
                  </span>
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

      {/* CTA-1 */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all btn-pulse-red"
            >
              Иду на практикум
            </Button>
          </a>
        </div>
      </section>

      {/* ПРОГРАММА 4 ШАГА */}
      <section className="relative py-6 px-4 bg-white overflow-hidden">
        <div className="blob absolute top-1/2 -right-10 w-72 h-72 rounded-full bg-[#9A1E14]/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-5 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что мы сделаем за 14 дней
          </h2>

          {[
            {
              num: "1",
              icon: "Users",
              emoji: "🔍",
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
              emoji: "🎁",
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
              emoji: "🪄",
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
              emoji: "⛓️",
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
            <Card key={step.num} className="relative border-2 border-[#9A1E15]/30 shadow-md bg-gray-50 tilt-card overflow-visible">
              <span className="absolute -top-4 -right-3 text-3xl select-none drop-shadow-md rotate-6">{step.emoji}</span>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl badge-3d text-white flex items-center justify-center font-black text-xl flex-shrink-0 rotate-3">
                    {step.num}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name={step.icon} size={18} className="text-[#9A1E14] flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
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
      <section className="relative py-10 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* decorative sparkles around section */}
        <span className="sparkle absolute top-8 left-6 md:left-20 text-2xl select-none pointer-events-none">✨</span>
        <span className="sparkle absolute top-20 right-8 md:right-24 text-xl select-none pointer-events-none" style={{ animationDelay: '0.8s' }}>✨</span>
        <span className="sparkle absolute bottom-10 left-1/4 text-lg select-none pointer-events-none" style={{ animationDelay: '1.5s' }}>✨</span>
        <span className="sparkle absolute bottom-16 right-1/4 text-2xl select-none pointer-events-none" style={{ animationDelay: '0.4s' }}>✨</span>

        <div className="max-w-3xl mx-auto relative">
          {/* floating gift badge */}
          <div
            className="float-badge absolute -top-9 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center text-4xl"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #fff5db, #C99A4A 60%, #8a6423 100%)',
              boxShadow: '0 10px 25px -5px rgba(154,30,20,0.5), 0 0 0 4px rgba(255,255,255,0.6)',
            }}
          >
            🎁
          </div>

          <div className="gift-card rounded-3xl p-[3px] shadow-2xl" style={{ animation: 'ribbon-glow 3s ease-in-out infinite' }}>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative pt-16 pb-8 px-6 md:px-10 space-y-5 text-center">
                <span className="inline-block bg-gradient-to-r from-[#C99A4A] to-[#f5d98f] text-[#2b0e0a] font-bold text-xs md:text-sm tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  СПЕЦИАЛЬНЫЙ ПОДАРОК КАЖДОМУ УЧАСТНИКУ
                </span>

                <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
                  <span className="shine-text font-handwritten text-4xl md:text-5xl block mb-1">
                    Индивидуальная стратегия продаж на 30 дней
                  </span>
                </h2>

                <p className="text-sm md:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
                  Каждый участник практикума получит персональную стратегическую сессию со мной, на которой мы разработаем индивидуальный план развития вашего проекта с учетом вашей текущей ситуации, продукта и финансовой цели.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto pt-2">
                  {[
                    "проанализируем результаты практикума и определим точки роста",
                    "разложим вашу финансовую цель на конкретные показатели и действия",
                    "составим пошаговый план продаж на ближайшие 30 дней",
                    "определим, какой контент, действия и каналы привлечения помогут регулярно получать заявки и клиентов",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                      <span className="text-[#f5d98f] flex-shrink-0">✦</span>
                      <span className="text-xs md:text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ФОРМАТ */}
      <section className="relative py-6 px-4 bg-white overflow-hidden">
        <div className="blob absolute bottom-10 -left-16 w-64 h-64 rounded-full bg-[#C99A4A]/15 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-4 relative">
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
              <Card key={i} className="tilt-card border-2 border-[#9A1E15]/20 shadow-sm bg-gray-50">
                <CardContent className="pt-5 pb-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl badge-3d flex items-center justify-center flex-shrink-0 rotate-3">
                    <Icon name={item.icon} size={20} className="text-white" />
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

      {/* CTA-2 */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all btn-pulse-red"
            >
              Вписаться в контент-практикум
            </Button>
          </a>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="relative py-6 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
                <div key={i} className="flex-shrink-0 snap-start border-2 border-[#9A1E15] rounded-2xl overflow-hidden w-72 shadow-md">
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
      <section id="price" className="relative py-10 px-4 bg-gradient-to-br from-[#fff8ec] to-white overflow-hidden">
        <div className="blob absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#9A1E14]/10 pointer-events-none" />
        <div className="blob absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#C99A4A]/20 pointer-events-none" style={{ animationDelay: '3s' }} />
        <span className="float-badge absolute top-6 left-6 md:left-20 text-4xl select-none pointer-events-none drop-shadow-md">🎉</span>
        <span className="float-badge-slow absolute bottom-10 right-6 md:right-20 text-4xl select-none pointer-events-none drop-shadow-md">🎂</span>
        <span className="float-badge absolute top-16 right-10 md:right-32 text-3xl select-none pointer-events-none drop-shadow-md" style={{ animationDelay: '1s' }}>🎈</span>
        <span className="float-badge-slow absolute bottom-24 left-8 md:left-32 text-3xl select-none pointer-events-none drop-shadow-md" style={{ animationDelay: '2s' }}>✨</span>

        <div className="max-w-2xl mx-auto text-center space-y-6 relative">
          <span className="inline-block shine-text font-handwritten text-3xl md:text-4xl">
            Дарю скидку в честь своего дня рождения 🎁
          </span>

          <Card className="gift-card rounded-3xl p-[3px]" style={{ animation: 'ribbon-glow 3s ease-in-out infinite' }}>
            <div className="relative rounded-3xl overflow-hidden bg-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <span className="inline-block bg-[#9A1E14] text-white font-bold text-xs md:text-sm tracking-wide px-4 py-1.5 rounded-full">
                  ПОСЛЕДНИЙ ШАНС ЗАЙТИ НА ПРАКТИКУМ И ПОЛУЧИТЬ 12 GPT-АССИСТЕНТОВ НАВЕЧНО
                </span>

                <div className="flex items-center justify-center gap-3">
                  {[
                    { v: timeLeft.d, l: "дней" },
                    { v: timeLeft.h, l: "часов" },
                    { v: timeLeft.m, l: "минут" },
                    { v: timeLeft.s, l: "секунд" },
                  ].map((t, i) => (
                    <div key={i} className="badge-3d rounded-xl px-3 py-2 min-w-[60px]">
                      <p className="text-xl md:text-2xl font-black text-white leading-none">{String(t.v).padStart(2, "0")}</p>
                      <p className="text-[10px] md:text-xs text-white/80 uppercase tracking-wide">{t.l}</p>
                    </div>
                  ))}
                </div>

                <p className="text-base md:text-lg text-foreground">Стоимость участия</p>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-2xl md:text-3xl font-bold text-gray-400 line-through">9 900 ₽</p>
                  <p className="text-4xl md:text-5xl font-black text-[#9A1E14]">5 490 ₽</p>
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
            </div>
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