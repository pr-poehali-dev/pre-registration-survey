import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const BORDEAUX = "#870016";
const INK = "#191919";
const GOLD = "#D3A052";
const GRAPHITE = "#3A3A3A";

const ADVANTAGES = [
  { num: "01", title: "Без перегруза" },
  { num: "02", title: "Без зависания на контенте" },
  { num: "03", title: "Без хаоса в задачах" },
];

const STEPS = [
  {
    icon: "Target",
    title: "Только то, что нужно для продаж",
    text: "Короткие уроки с конкретными действиями, которые можно сразу применить в своём проекте.",
  },
  {
    icon: "Timer",
    title: "Уроки по 15–20 минут",
    text: "Можно посмотреть между консультациями и сразу перейти к практике.",
  },
  {
    icon: "FileText",
    title: "Готовые шаблоны",
    text: "Офферы, сообщения, таблицы и примеры, которые легко адаптировать под себя.",
  },
  {
    icon: "Bot",
    title: "Нейро-помощники",
    text: "Помогут быстрее писать контент, формулировать предложения и готовить материалы для продаж.",
  },
];

const ArrowDefs = () => (
  <defs>
    <marker id="sys-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
      <path d="M1 1L8 5L1 9" fill="none" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </marker>
  </defs>
);

const SystemSection = () => {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 sm:px-8 lg:px-16 py-14 md:py-24"
      style={{ backgroundColor: "#FAF7F2", fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="max-w-[1280px] mx-auto transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-[20px] px-6 py-10 sm:px-10 md:px-14 md:py-14"
          style={{ border: `1px solid ${GOLD}`, backgroundColor: "#FDFBF7" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(211,160,82,0.14) 0%, rgba(253,251,247,0) 100%)",
            }}
          />

          <div className="relative text-center">
            <p
              className="mx-auto max-w-[820px] leading-relaxed"
              style={{ color: GRAPHITE, fontSize: "clamp(16px, 1.9vw, 23px)" }}
            >
              У тебя уже есть клиенты, работа и миллион задач. А продажи требуют внимания каждый день.
            </p>

            <h2
              className="mx-auto mt-5 md:mt-7 max-w-[1000px] font-extrabold leading-[1.18]"
              style={{ color: INK, fontSize: "clamp(21px, 2.9vw, 38px)" }}
            >
              В «Трекинге» всё устроено так, чтобы ты быстрее переходила к действиям и видела результат своей работы.
            </h2>
          </div>

          <div className="relative mt-9 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {ADVANTAGES.map((item, i) => (
              <div key={item.num} className="relative flex items-center gap-4 md:gap-5 md:px-6 lg:px-10 md:justify-center">
                {i > 0 && (
                  <span
                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20"
                    style={{ background: `linear-gradient(180deg, rgba(211,160,82,0), ${GOLD}, rgba(211,160,82,0))` }}
                  />
                )}
                <span
                  className="flex-shrink-0 w-[58px] h-[58px] md:w-[66px] md:h-[66px] rounded-lg flex items-center justify-center text-white font-extrabold text-xl md:text-[28px]"
                  style={{
                    background: "linear-gradient(135deg, #a00c20 0%, #870016 50%, #5c000d 100%)",
                    boxShadow: "0 10px 22px -12px rgba(135,0,22,0.7)",
                  }}
                >
                  {item.num}
                </span>
                <span
                  className="font-extrabold uppercase leading-snug"
                  style={{ color: INK, fontSize: "clamp(15px, 1.6vw, 21px)" }}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-4 lg:gap-y-0">
          <svg
            className="hidden lg:block absolute pointer-events-none"
            style={{ left: "12.5%", top: "20px", width: "25%", height: "120px" }}
            viewBox="0 0 300 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <ArrowDefs />
            <path d="M70 60 Q 150 -5 230 78" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#sys-arrow)" />
          </svg>
          <svg
            className="hidden lg:block absolute pointer-events-none"
            style={{ left: "43%", top: "92px", width: "14.5%", height: "110px" }}
            viewBox="0 0 185 110"
            fill="none"
          >
            <ArrowDefs />
            <path d="M6 96 Q 70 106 172 14" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#sys-arrow)" />
          </svg>
          <svg
            className="hidden lg:block absolute pointer-events-none"
            style={{ left: "62.5%", top: "20px", width: "25%", height: "120px" }}
            viewBox="0 0 300 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <ArrowDefs />
            <path d="M70 60 Q 150 -5 230 78" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#sys-arrow)" />
          </svg>

          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`relative flex flex-col items-center text-center ${i % 2 === 1 ? "lg:mt-[110px]" : ""}`}
            >
              <div
                className="w-[104px] h-[104px] md:w-[120px] md:h-[120px] rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 30% 25%, #a80f24 0%, #870016 55%, #5c000d 100%)",
                  boxShadow: "0 18px 34px -16px rgba(135,0,22,0.7)",
                  outline: `1px solid ${GOLD}`,
                  outlineOffset: "6px",
                }}
              >
                <Icon name={step.icon} fallback="Circle" size={44} className="text-[#FAF7F2]" strokeWidth={1.5} />
              </div>
              <h3
                className="mt-6 max-w-[260px] font-bold leading-snug"
                style={{ color: INK, fontSize: "clamp(16px, 1.4vw, 19px)" }}
              >
                {step.title}
              </h3>
              <p
                className="mt-2 max-w-[260px] leading-relaxed"
                style={{ color: GRAPHITE, fontSize: "clamp(14px, 1.15vw, 16px)" }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;