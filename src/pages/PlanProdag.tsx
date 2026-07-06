import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const PlanProdag = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(154, 30, 20, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(154, 30, 20, 0); }
        }
        @keyframes pulse-scale-tg {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 158, 217, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(34, 158, 217, 0); }
        }
        .btn-pulse-red { animation: pulse-scale 2s ease-in-out infinite; }
        .btn-pulse-tg { animation: pulse-scale-tg 2s ease-in-out infinite; }
        .btn-pulse-red:hover, .btn-pulse-tg:hover { animation: none; opacity: 0.9; }
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
              <div className="relative inline-block">
                <span
                  className="text-4xl md:text-6xl font-black tracking-tight text-[#9A1E14]"
                  style={{ textShadow: '4px 4px 0px rgba(154,30,20,0.15)' }}
                >
                  ПЛАН ПРОДАЖ
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                AI помог увидеть направление.
              </h1>
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                Теперь давайте вместе превратим его в работающую стратегию именно для вашего бизнеса.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ЧТО БУДЕТ НА РАЗБОРЕ */}
      <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            На бесплатном стратегическом разборе за 30–40 минут мы вместе:
          </h2>
          <Card className="border-2 border-[#9A1E15]/30 shadow-lg bg-white">
            <CardContent className="pt-6 space-y-3">
              {[
                "посмотрим на ваш проект целиком",
                "найдем, что сегодня мешает стабильно получать клиентов",
                "определим, какие действия дадут максимальный результат именно сейчас",
                "скорректируем план с учетом ваших целей, ресурсов и текущей ситуации",
                "составим понятную стратегию на ближайшие 30–60 дней",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#9A1E14] font-bold text-lg flex-shrink-0">✔</span>
                  <p className="text-base md:text-lg text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-2 border-[#9A1E15] bg-[#9A1E15]/5 shadow-md mt-4">
            <CardContent className="pt-6 space-y-2">
              <p className="text-base md:text-lg font-medium text-foreground text-center">
                В результате вы уйдете не просто с идеями, а с четким пониманием, что делать дальше, чтобы выйти на стабильные продажи.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-center text-gray-800 text-base md:text-lg font-medium">
            Выберите удобный мессенджер и напишите мне <strong>«план продаж»</strong> 👇
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/m/CE5kMJC8N2Qy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse-tg flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-semibold text-base"
              style={{ backgroundColor: '#229ED9' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.38 13.627 4.43 12.72c-.658-.207-.672-.658.138-.975l10.868-4.19c.548-.198 1.027.132.858.666z" fill="white"/>
              </svg>
              Записаться через Telegram
            </a>

            <a
              href="https://max.ru/u/f9LHodD0cOKiK4IL5gGmo_SAIKeglsFkhCsvPUrNp6sjZwZbVOfOKEjTFBw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse-red flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-semibold text-base"
              style={{ backgroundColor: '#9A1E14' }}
            >
              <img
                src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/8fc3310f-d083-44cf-a661-9a036b6e2eb3.png"
                alt="MAX"
                width={26}
                height={26}
                className="rounded-md"
              />
              Записаться через MAX
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanProdag;
