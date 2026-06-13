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
    "3 групповых созвона",
    "Персональная дорожная xmind-карта действий",
    "Простые задания между созвонами, которые ведут к результату",
    "Проверка и обратная связь от меня",
    "7-дневный контент-челлендж",
    "Шаблоны продающих постов и продающих переписок",
  ];

  const why = [
    "Мы не создаём сложный бизнес на годы вперёд — мы собираем понятную систему продаж на ближайшие 14 дней",
    "Каждый шаг программы направлен на заявки и продажи, а не на получение очередных знаний",
    "Вы работаете по готовому плану действий, который создаётся под вашу ситуацию",
    "Для старта достаточно того опыта и экспертности, которые уже есть у вас сегодня",
    "Вы получаете поддержку, обратную связь и помощь на каждом этапе внедрения",
    "Вместо хаотичных действий у вас — чёткая система, которая даёт результат",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      {/* HERO */}
      <section className="relative px-4 py-8 md:py-14 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto">
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
          <Card className="border-2 border-[#9A1E15] bg-[#9A1E15]/5 shadow-md">
            <CardContent className="pt-6 space-y-3">
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
              <div key={i} className="flex items-start gap-3 bg-white border border-[#9A1E15]/20 rounded-xl p-4 shadow-sm">
                <span className="text-[#9A1E14] font-black text-xl flex-shrink-0 leading-snug">✔</span>
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
              <Card key={i} className="border-2 border-[#9A1E15]/30 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-4 pb-4 flex items-start gap-3">
                  <span className="text-[#9A1E14] font-black text-xl flex-shrink-0">✔</span>
                  <p className="text-base font-medium text-foreground">{item}</p>
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
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#9A1E14] font-bold text-lg flex-shrink-0">✔</span>
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

      {/* CTA */}
      <section className="py-10 px-4 bg-[#9A1E14]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Готовы получить заявки уже через 14 дней?
          </h2>
          <p className="text-base md:text-lg text-white/90">
            Стоимость и даты — уточняйте при записи
          </p>
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