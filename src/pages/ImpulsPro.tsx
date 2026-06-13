import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const ImpulsPro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      {/* HERO */}
      <section className="relative px-4 py-8 md:py-14 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Фото */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/d8b25a80-a37d-42fa-98a6-a37e9f697b0d.png"
                  alt="Светлана Скорнякова"
                  className="w-56 md:w-72 lg:w-80 h-auto object-contain drop-shadow-2xl"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>

            {/* Текст */}
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
                className="bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all animate-pulse flex items-center gap-2 mx-auto md:mx-0"
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

      {/* ЧТО ЭТО */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что такое «Импульс PRO»?
          </h2>
          <Card className="border-2 border-[#9A1E15] bg-[#9A1E15]/5 shadow-md">
            <CardContent className="pt-6 space-y-3">
              <p className="text-base md:text-lg font-medium text-foreground text-center leading-relaxed">
                Это группа внедрения, где мы вместе создадим ваш летний продукт, определим аудиторию, выстроим понятную систему продаж и начнём получать заявки уже в ближайшие <span className="text-[#9A1E14] font-bold">14 дней.</span>
              </p>
              <p className="text-base md:text-lg text-foreground text-center leading-relaxed">
                Только конкретные действия, которые приводят к результату.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* БОЛИ */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Узнаёте себя?
          </h2>
          <Card className="border-2 border-[#9A1E15]/30 shadow-lg bg-white">
            <CardContent className="pt-6 space-y-3">
              {[
                "Лето — и клиентов почти нет, все «уехали» и «не до того»",
                "Готовитесь к продажам уже несколько месяцев, но так и не начали",
                "Есть экспертность, но непонятно, как превратить её в заявки",
                "Ведёте канал, пишете посты — а клиенты не приходят",
                "Кажется, что нужно ещё одно обучение, и тогда уже точно",
                "Страшно продавать: вдруг откажут, вдруг не купят",
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

      {/* ЧТО СДЕЛАЕМ */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что мы сделаем вместе за 14 дней:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { num: "01", text: "Создадим ваш летний продукт, который захотят купить" },
              { num: "02", text: "Определим аудиторию и её актуальный летний запрос" },
              { num: "03", text: "Упакуем продающие смыслы и оффер" },
              { num: "04", text: "Выстроим простую систему продаж без сложных запусков" },
              { num: "05", text: "Запустим контент, который приводит заявки" },
              { num: "06", text: "Сделаем первые продажи — прямо в процессе интенсива" },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-[#9A1E15]/30 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-4 pb-4 flex items-start gap-4">
                  <span className="text-[#9A1E14] font-black text-2xl flex-shrink-0 leading-tight">{item.num}</span>
                  <p className="text-base font-medium text-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ДЛЯ КОГО */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Подойдёт вам, если вы:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["психолог", "коуч", "эзотерик", "наставник", "помогающий практик", "эксперт мягкой ниши"].map((item, i) => (
              <Card key={i} className="border-2 border-[#9A1E15]/30 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-4 pb-4 flex items-center gap-2">
                  <span className="text-[#9A1E14]">✔️</span>
                  <span className="text-base font-medium">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-base md:text-lg text-muted-foreground">
            И хотите не просто пережить лето, а получить реальные заявки и продажи.
          </p>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Что вы получите в итоге:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Готовый летний продукт, который продаётся",
              "Понятный оффер и продающие смыслы",
              "Систему контента, которая приводит клиентов",
              "Первые заявки уже в процессе интенсива",
              "Уверенность в продажах без страха и хаоса",
              "Работающую систему, а не ещё одно обучение",
            ].map((result, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#9A1E14] font-black text-xl flex-shrink-0 leading-snug">•</span>
                <p className="text-base md:text-lg text-foreground">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОБ АВТОРЕ */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-[#9A1E15]/30 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/d8b25a80-a37d-42fa-98a6-a37e9f697b0d.png"
                  alt="Светлана Скорнякова"
                  className="w-32 h-32 object-contain rounded-full flex-shrink-0"
                  style={{ mixBlendMode: "multiply" }}
                />
                <div className="space-y-2 text-center sm:text-left">
                  <p className="text-xl font-bold text-[#9A1E14]">Светлана Скорнякова</p>
                  <p className="text-base text-muted-foreground font-medium">Трекер для экспертов и помогающих практиков</p>
                  <p className="text-base text-foreground leading-relaxed">
                    Помогаю экспертам выстраивать стабильные продажи без хаоса, сложных запусков и выгорания. Сопровождаю на каждом шаге — от идеи до результата.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* СТОИМОСТЬ / CTA */}
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
            className="bg-white text-[#9A1E14] hover:bg-white/90 px-12 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all"
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
