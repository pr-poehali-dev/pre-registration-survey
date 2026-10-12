import { useEffect, useRef, useState } from "react";

const WINE = "#870016";
const INK = "#191919";
const GOLD = "#C6A46C";
const GRAPHITE = "#3A3A3A";

const COLUMNS = [
  {
    num: "01",
    title: "Клиенты и заявки",
    text: "Ты понимаешь, как привлекать внимание к своим услугам и превращать интерес в обращения.",
    offset: "lg:mt-0",
  },
  {
    num: "02",
    title: "Продажи без ступора",
    text: "Можешь спокойно назвать цену, предложить свой продукт и провести разговор с потенциальным клиентом.",
    offset: "lg:mt-14",
  },
  {
    num: "03",
    title: "Ясность в действиях",
    text: "Знаешь, что делать сегодня, на этой неделе и в следующем месяце, чтобы развивать продажи.",
    offset: "lg:mt-28",
  },
];

const VisionSection = () => {
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 sm:px-8 lg:px-14 py-16 md:py-28 lg:py-36"
      style={{ backgroundColor: "#FAF7F2", fontFamily: "'Montserrat', sans-serif" }}
    >
      <svg
        className="absolute pointer-events-none -right-[38vw] top-[18%] w-[96vw] h-[96vw] md:-right-[22vw] md:top-[6%] md:w-[64vw] md:h-[64vw] max-w-[1000px] max-h-[1000px]"
        viewBox="0 0 1000 1000"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="500" cy="500" r="480" stroke={GOLD} strokeWidth="1" opacity="0.55" />
        <circle cx="500" cy="500" r="400" stroke={GOLD} strokeWidth="1" opacity="0.28" />
      </svg>

      <div
        className="relative max-w-[1280px] mx-auto transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div
          className="relative px-6 py-10 sm:px-12 md:px-20 md:py-14 lg:px-28 lg:py-16 text-center"
          style={{ border: `1px solid ${INK}` }}
        >
          <span
            className="absolute -top-px left-1/2 -translate-x-1/2 h-[3px] w-20 md:w-32"
            style={{ backgroundColor: WINE }}
          />
          <p
            className="mx-auto max-w-[900px] font-semibold uppercase leading-relaxed"
            style={{
              color: INK,
              fontSize: "clamp(12px, 1.5vw, 19px)",
              letterSpacing: "0.14em",
            }}
          >
            Представь, что тебе больше не нужно гадать, откуда придут следующие клиенты
          </p>
        </div>

        <h2
          className="relative mt-14 md:mt-24 lg:mt-28 text-center font-extrabold uppercase tracking-tight"
          style={{
            color: INK,
            fontSize: "clamp(30px, 6.6vw, 98px)",
            lineHeight: 1.04,
          }}
        >
          <span className="block">Ты знаешь, что делать, чтобы</span>
          <span className="block" style={{ color: WINE }}>
            к тебе приходили
          </span>
          <span className="block">и покупали.</span>
        </h2>

        <div className="relative mt-10 md:mt-16 flex flex-col items-center">
          <span className="block w-px h-12 md:h-20" style={{ backgroundColor: GOLD }} />
          <p
            className="mt-8 md:mt-10 max-w-[720px] text-center leading-relaxed"
            style={{ color: GRAPHITE, fontSize: "clamp(16px, 1.7vw, 22px)" }}
          >
            У тебя есть понятный план, сильное предложение и действия, которые помогают привлекать клиентов и доводить их до покупки.
          </p>
        </div>

        <div className="relative mt-16 md:mt-28 grid grid-cols-1 lg:grid-cols-3 lg:pb-28">
          {COLUMNS.map((col, i) => (
            <div
              key={col.num}
              className={`relative pt-8 pb-10 lg:pb-0 lg:pt-0 lg:px-10 xl:px-14 ${col.offset} ${
                i === 0 ? "lg:pl-0 xl:pl-0 border-t lg:border-t-0" : "border-t lg:border-t-0 lg:border-l"
              }`}
              style={{ borderColor: GOLD }}
            >
              <div className="flex flex-row items-baseline gap-5 lg:flex-col lg:gap-0">
                <span
                  className="font-extrabold leading-none"
                  style={{ color: WINE, fontSize: "clamp(44px, 6vw, 92px)" }}
                >
                  {col.num}
                </span>
                <h3
                  className="lg:mt-8 font-extrabold uppercase leading-tight"
                  style={{ color: INK, fontSize: "clamp(18px, 1.9vw, 26px)" }}
                >
                  {col.title}
                </h3>
              </div>
              <p
                className="mt-4 lg:mt-5 max-w-[380px] leading-relaxed"
                style={{ color: GRAPHITE, fontSize: "clamp(15px, 1.25vw, 18px)" }}
              >
                {col.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
