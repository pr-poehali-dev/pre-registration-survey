import { useEffect, useRef, useState } from "react";

const BORDEAUX = "#800012";
const GOLD = "#C9974B";
const INK = "#181818";
const GRAPHITE = "#3A3A3A";

const ADVANTAGES = [
  {
    num: "01",
    title: "Без бесконечной подготовки",
    text: "Не ждёшь идеального продукта и красивого канала. Начинаешь с действий, которые могут принести заявки уже сейчас.",
  },
  {
    num: "02",
    title: "Без контента ради контента",
    text: "Понимаешь, что публиковать, чтобы люди не просто читали, а интересовались твоим продуктом.",
  },
  {
    num: "03",
    title: "Без страха перед продажами",
    text: "Знаешь, как начать диалог, провести консультацию и предложить работу без давления и неловкости.",
  },
];

const PromiseSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 sm:px-8 lg:px-16 py-12 md:py-20"
      style={{ backgroundColor: "#FAF8F3", fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="max-w-[1280px] mx-auto transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div
          className="relative overflow-hidden text-center rounded-2xl md:rounded-[20px] px-6 py-10 sm:px-10 md:px-14 md:py-14"
          style={{
            backgroundColor: "#FDFBF6",
            border: `1.5px solid ${BORDEAUX}`,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,151,75,0.16) 0%, rgba(201,151,75,0.05) 55%, rgba(253,251,246,0) 100%)",
            }}
          />

          <div className="relative">
            <p
              className="mx-auto max-w-[760px] font-normal leading-relaxed"
              style={{ color: INK, fontSize: "clamp(16px, 2.1vw, 23px)" }}
            >
              Ты уже знаешь, что умеешь помогать людям, но клиенты почему-то приходят не так регулярно, как хотелось бы.
            </p>

            <div className="flex items-center justify-center gap-3 my-6 md:my-9">
              <span className="h-px w-10 md:w-20" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              <span className="h-px w-10 md:w-20" style={{ background: `linear-gradient(270deg, transparent, ${GOLD})` }} />
            </div>

            <h2
              className="mx-auto max-w-[980px] font-extrabold uppercase leading-[1.15]"
              style={{ color: INK, fontSize: "clamp(24px, 3.5vw, 42px)" }}
            >
              <span style={{ color: BORDEAUX }}>«Трекинг»</span> — программа, в которой ты не просто учишься продажам, а собираешь их в своём проекте.
            </h2>

            <p
              className="mx-auto mt-6 md:mt-9 max-w-[760px] font-medium leading-relaxed"
              style={{ color: GRAPHITE, fontSize: "clamp(15px, 1.8vw, 21px)" }}
            >
              Чтобы не зависеть от вдохновения, удачного запуска или случайного клиента.
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-[62px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 md:gap-y-12 lg:gap-y-0">
          {ADVANTAGES.map((item, i) => (
            <div key={item.num} className="relative">
              {i > 0 && (
                <span
                  className="md:hidden block h-px w-14 my-7"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, rgba(201,151,75,0))` }}
                />
              )}
              {i > 0 && (
                <span
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-[150px]"
                  style={{ background: `linear-gradient(180deg, rgba(201,151,75,0), ${GOLD}, rgba(201,151,75,0))` }}
                />
              )}
              <div className="flex items-start gap-4 md:gap-5 lg:px-8 xl:px-10">
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-[56px] h-[56px] md:w-[62px] md:h-[62px] rounded-lg flex items-center justify-center text-white font-extrabold text-xl md:text-2xl"
                    style={{
                      background: "linear-gradient(135deg, #9a0a1e 0%, #800012 50%, #5c000d 100%)",
                      boxShadow: "0 10px 22px -12px rgba(128,0,18,0.7)",
                    }}
                  >
                    {item.num}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: GOLD }} />
                    <span className="h-px w-4" style={{ backgroundColor: GOLD }} />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-bold uppercase leading-snug"
                    style={{ color: BORDEAUX, fontSize: "clamp(16px, 1.6vw, 21px)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2.5 md:mt-3 leading-relaxed"
                    style={{ color: GRAPHITE, fontSize: "clamp(15px, 1.4vw, 18px)" }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
