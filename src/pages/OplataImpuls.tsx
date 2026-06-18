import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const DEADLINE = new Date("2026-06-28T23:59:00");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      expired: diff === 0,
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2">
    <span className="text-[#9A1E14] font-black text-lg flex-shrink-0 leading-snug">✓</span>
    <p className="text-base text-foreground">{text}</p>
  </div>
);

const faqs = [
  {
    q: "У меня маленький блог. Мне вообще есть смысл идти?",
    a: `Да.\n\nБольшинство экспертов уверены, что проблема в количестве подписчиков. На практике гораздо чаще проблема в том, что человеку непонятно, что продавать, кому продавать и как переводить интерес в заявку.\n\nНа интенсиве мы сначала собираем систему продаж, а уже потом масштабируем её.\n\nПоэтому программа подойдёт даже если у вас сейчас 50, 100 или 300 подписчиков.\n\nВаша задача не набрать тысячи людей за 14 дней.\n\nВаша задача — получить первые заявки и понять, как делать это дальше самостоятельно.`,
  },
  {
    q: "А если сейчас лето и люди не покупают?",
    a: `Именно поэтому мы запускаем интенсив сейчас.\n\nЛетом люди продолжают покупать, но принимают решения немного иначе. Долгие программы и большие обязательства заходят хуже, зато растёт спрос на практикумы, разборы, интенсивы и продукты с быстрым результатом.\n\nНа программе мы создадим продукт, который легче продавать именно в летний период, и соберём под него понятную систему получения заявок.\n\nВместо ожидания сентября вы сможете использовать ближайшие недели для продаж и подготовки базы клиентов на осень.`,
  },
  {
    q: "Я не умею продавать и боюсь выглядеть навязчиво. Получится ли у меня?",
    a: `Это один из самых частых запросов участников.\n\nВнутри программы мы отдельно разбираем продажи через переписку, работу с возражениями и экологичную коммуникацию с клиентами.\n\nВам не придётся давить, уговаривать или использовать агрессивные техники.\n\nВы получите готовую структуру общения и нейропомощника, который поможет формулировать сообщения, отвечать на вопросы клиентов и доносить ценность ваших услуг спокойным человеческим языком.\n\nПоэтому даже если сейчас продажи вызывают стресс, вы будете понимать, что говорить клиенту на каждом этапе диалога.`,
  },
  {
    q: "А если у меня нет продукта?",
    a: `На первой встрече мы создадим летний продукт вместе и определим, что именно стоит продавать вашей аудитории.`,
  },
  {
    q: "А если у меня нет времени на сложное обучение?",
    a: `В программе нет длинных уроков и большого количества теории. Вы получаете готовый план действий, выполняете простые задания между созвонами и сразу внедряете их в свой проект.`,
  },
  {
    q: "А если за 14 дней не будет продаж?",
    a: `Невозможно гарантировать продажи каждому участнику. Но за эти 14 дней у вас будет готовый продукт, понятная система продаж, контент, стратегия продвижения и конкретные действия для получения заявок. Даже если первая продажа придёт позже, вы перестанете действовать наугад и будете понимать, что именно приводит клиентов.`,
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-14 px-4 bg-[#faf8f6]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center text-[#1a1a1a] mb-8">Частые вопросы</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-[#e8e0d8] overflow-hidden">
              <button
                className="w-full flex items-center gap-3 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="w-2 h-2 rounded-full bg-[#9A1E14] shrink-0 mt-0.5" />
                <span className="flex-1 font-semibold text-[#1a1a1a] text-sm md:text-base leading-snug">{faq.q}</span>
                <span className={`text-[#9A1E14] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>▾</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-0">
                  <div className="border-t border-[#f0e8e0] pt-4 text-[#444] text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const OplataImpuls = () => {
  const countdown = useCountdown(DEADLINE);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      {/* HERO */}
      <section className="relative px-4 py-8 md:py-14 overflow-hidden bg-white">
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
            </div>
          </div>
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section id="tariffs" className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">Тарифы Импульс PRO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ГРУППОВОЙ */}
            <div className="border-2 border-[#9A1E15] rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-[#9A1E14] px-6 py-5 text-center">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-1">Групповой тариф</p>
                <p className="text-white font-black text-4xl">9.990 <span className="text-2xl">руб.</span></p>
                <p className="text-yellow-300 font-semibold text-sm mt-1">только до 28 июня</p>
                <p className="text-white/60 text-sm line-through">Затем 14.990 руб.</p>
              </div>
              <div className="p-6 space-y-4 flex-1 bg-white">
                <div className="space-y-2">
                  <p className="font-bold text-base text-foreground">В тариф входит:</p>
                  {[
                    "14 дней работы в группе внедрения",
                    "3 групповых встречи со Светланой",
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
                <div className="flex flex-col gap-2 pt-2">
                  {countdown.expired ? (
                    <p className="text-center text-sm font-semibold text-[#9A1E14]">Акция завершена</p>
                  ) : (
                    <div className="bg-[#9A1E14]/5 border border-[#9A1E14]/20 rounded-xl p-3 text-center space-y-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Цена 9.990 руб. действует ещё:</p>
                      <div className="flex justify-center gap-2">
                        {[
                          { v: countdown.days, l: "дней" },
                          { v: countdown.hours, l: "часов" },
                          { v: countdown.minutes, l: "минут" },
                          { v: countdown.seconds, l: "секунд" },
                        ].map(({ v, l }) => (
                          <div key={l} className="flex flex-col items-center">
                            <span className="bg-[#9A1E14] text-white font-black text-xl w-12 h-10 flex items-center justify-center rounded-lg leading-none">
                              {String(v).padStart(2, "0")}
                            </span>
                            <span className="text-[10px] text-muted-foreground mt-0.5">{l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <a href="https://payform.ru/mcbNfl8/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white font-bold py-6 text-lg">
                      Оплатить
                    </Button>
                  </a>
                  <p className="text-center text-sm text-muted-foreground">Картой любой страны, в рассрочку или кредиткой без %</p>
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
                    "2 личных встречи со Светланой",
                    "Создание лид-магнита, который приносит заявки",
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
                <div className="flex flex-col gap-2 pt-2">
                  <a href="https://payform.ru/o6bLOE6/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#9A1E14] hover:bg-[#9A1E14]/90 text-white font-bold py-6 text-lg">
                      Оплатить VIP
                    </Button>
                  </a>
                  <p className="text-center text-sm text-muted-foreground">Картой любой страны, в рассрочку или кредиткой без %</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <section className="py-10 px-4 bg-[#9A1E14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-4 relative">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Остался вопрос?
          </h2>
          <p className="text-base md:text-lg text-white/80">
            Задай мне лично в удобном мессенджере
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a href="https://t.me/m/dRBjZM3ENGEy" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#9A1E14] hover:bg-white/90 px-8 py-6 text-lg font-bold shadow-xl w-full sm:w-auto flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.49l-2.956-.924c-.642-.204-.657-.642.136-.953l11.57-4.461c.537-.194 1.006.131.884.069z" fill="#9A1E14"/>
                </svg>
                Написать в TG
              </Button>
            </a>
            <a href="https://max.ru/u/f9LHodD0cOK6Z21Vn71NOwb_F8aXEEf6NPElRpoc1JvjKPBFGF-VlDNHu6k" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#9A1E14] hover:bg-white/90 px-8 py-6 text-lg font-bold shadow-xl w-full sm:w-auto flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#9A1E14"/>
                  <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">MAX</text>
                </svg>
                Написать в MAX
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OplataImpuls;