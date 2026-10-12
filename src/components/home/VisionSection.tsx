import { useEffect, useRef, useState } from "react";

const WINE = "#870016";
const INK = "#191919";
const GOLD = "#C6A46C";
const MILK = "#FAF7F2";
const GRAPHITE = "#3A3A3A";

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
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 sm:px-8 lg:px-14 py-16 md:py-28 lg:py-36"
      style={{ backgroundColor: MILK, fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="absolute rounded-full pointer-events-none aspect-square w-[150vw] -right-[85vw] top-[22%] md:w-[96vw] md:-right-[44vw] md:top-[6%] lg:w-[78vw] lg:-right-[30vw] lg:top-[4%] max-w-[1500px]"
        style={{ border: `1px solid ${GOLD}` }}
        aria-hidden="true"
      />

      <div
        className="relative max-w-[1280px] mx-auto transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div
          className="mx-auto max-w-[940px] px-6 py-7 sm:px-12 md:px-20 md:py-9 text-center"
          style={{ border: `1px solid ${GOLD}`, backgroundColor: MILK }}
        >
          <p
            className="font-semibold uppercase leading-relaxed"
            style={{
              color: INK,
              fontSize: "clamp(11px, 1.25vw, 16px)",
              letterSpacing: "0.16em",
            }}
          >
            Представь, что тебе больше не нужно гадать, откуда придут следующие клиенты
          </p>
        </div>

        <h2
          className="relative mt-14 md:mt-24 font-extrabold uppercase tracking-tight"
          style={{
            color: INK,
            fontSize: "clamp(34px, 8.6vw, 124px)",
            lineHeight: 1.0,
          }}
        >
          <span className="block">Ты знаешь, что</span>
          <span className="block lg:pl-[7%]">делать, чтобы</span>
          <span className="block lg:pl-[7%]">к тебе</span>
          <span className="block lg:pl-[15%]" style={{ color: WINE }}>
            приходили
          </span>
          <span className="block lg:pl-[24%]" style={{ color: WINE }}>
            и покупали.
          </span>
        </h2>

        <div className="relative mt-10 md:mt-14 lg:mt-16 flex lg:justify-end">
          <div className="max-w-[420px] lg:mr-[2%]">
            <span className="block h-px w-16 md:w-24 mb-5" style={{ backgroundColor: WINE }} />
            <p
              className="leading-relaxed"
              style={{ color: GRAPHITE, fontSize: "clamp(15px, 1.35vw, 18px)" }}
            >
              У тебя есть понятный план, сильное предложение и действия, которые помогают привлекать клиентов и доводить их до покупки.
            </p>
          </div>
        </div>

        <div className="relative mt-16 md:mt-24 flex flex-col">
          <div className="lg:w-[40%]">
            <h3
              className="font-extrabold uppercase leading-[1.05]"
              style={{ color: INK, fontSize: "clamp(26px, 3.4vw, 46px)" }}
            >
              Клиенты
              <br />и заявки
            </h3>
            <span className="block h-px w-12 mt-5" style={{ backgroundColor: GOLD }} />
            <p
              className="mt-5 max-w-[360px] leading-relaxed"
              style={{ color: GRAPHITE, fontSize: "clamp(15px, 1.25vw, 17px)" }}
            >
              Ты понимаешь, как привлекать внимание к своим услугам и превращать интерес в обращения.
            </p>
          </div>

          <div
            className="mt-12 lg:mt-0 lg:-translate-y-6 lg:ml-auto lg:w-[46%] p-7 md:p-10 lg:p-12"
            style={{ backgroundColor: WINE }}
          >
            <h3
              className="font-extrabold uppercase leading-[1.05]"
              style={{ color: MILK, fontSize: "clamp(26px, 3.4vw, 46px)" }}
            >
              Продажи
              <br />без ступора
            </h3>
            <span className="block h-px w-12 mt-5" style={{ backgroundColor: GOLD }} />
            <p
              className="mt-5 max-w-[400px] leading-relaxed"
              style={{ color: "rgba(250,247,242,0.88)", fontSize: "clamp(15px, 1.25vw, 17px)" }}
            >
              Можешь спокойно назвать цену, предложить свой продукт и провести разговор с потенциальным клиентом.
            </p>
          </div>

          <div className="mt-12 lg:mt-0 lg:-translate-y-2 lg:ml-[14%] lg:w-[42%]">
            <h3
              className="font-extrabold uppercase leading-[1.05]"
              style={{ color: INK, fontSize: "clamp(26px, 3.4vw, 46px)" }}
            >
              Ясность
              <br />
              <span style={{ color: WINE }}>в действиях</span>
            </h3>
            <span className="block h-px w-12 mt-5" style={{ backgroundColor: GOLD }} />
            <p
              className="mt-5 max-w-[380px] leading-relaxed"
              style={{ color: GRAPHITE, fontSize: "clamp(15px, 1.25vw, 17px)" }}
            >
              Знаешь, что делать сегодня, на этой неделе и в следующем месяце, чтобы развивать продажи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;