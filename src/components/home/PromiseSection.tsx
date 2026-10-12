import { useEffect, useRef, useState } from "react";

const BORDEAUX = "#800012";
const MILK = "#FAF7F2";
const INK = "#191919";
const GOLD = "#D3A052";
const GOLD_SOFT = "#F1E1C8";

const Arrow = () => (
  <svg width="64" height="14" viewBox="0 0 64 14" fill="none" aria-hidden="true">
    <path d="M0 7H62M62 7L56 1M62 7L56 13" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BubblesIcon = () => (
  <svg width="92" height="56" viewBox="0 0 92 56" fill="none" aria-hidden="true">
    <path
      d="M6 6H46a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H22l-9 8v-8H6a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4Z"
      stroke={GOLD}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M86 18H50.5M86 18a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4h-6v8l-9-8H46a4 4 0 0 1-4-4v-6"
      stroke={GOLD}
      strokeWidth="1.4"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const CARDS = [
  {
    num: "01",
    title: "Клиенты, а не вечная подготовка",
    text: "Не нужно сначала переделывать весь блог. Начинаешь работать с тем, что у тебя уже есть: продуктом, контактами и аудиторией.",
    bg: MILK,
    layout: "lg:-translate-y-5 lg:-rotate-1",
    footer: <Arrow />,
  },
  {
    num: "02",
    title: "Контент, после которого спрашивают «Как к тебе попасть?»",
    text: "Вместо публикаций ради охватов — понятные смыслы, предложения и поводы обратиться к тебе.",
    bg: GOLD_SOFT,
    layout: "lg:rotate-1",
    footer: (
      <div
        className="relative inline-block rounded-2xl rounded-bl-sm px-4 py-2 text-sm font-semibold text-white"
        style={{ backgroundColor: BORDEAUX }}
      >
        Как записаться?
      </div>
    ),
  },
  {
    num: "03",
    title: "Продажи, после которых не хочется провалиться сквозь землю",
    text: "Учишься вести диалог, приглашать на консультацию и называть стоимость уверенно, без навязывания.",
    bg: MILK,
    layout: "lg:translate-y-6 lg:-rotate-1",
    footer: <BubblesIcon />,
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 sm:px-8 lg:px-16 py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: BORDEAUX, fontFamily: "'Montserrat', sans-serif" }}
    >
      <svg
        className="absolute -top-28 -right-28 w-[260px] h-[260px] md:w-[460px] md:h-[460px] pointer-events-none"
        viewBox="0 0 460 460"
        fill="none"
      >
        {[120, 160, 200, 240, 280].map((r) => (
          <circle key={r} cx="460" cy="0" r={r} stroke={GOLD} strokeWidth="1" opacity="0.45" />
        ))}
      </svg>
      <svg
        className="absolute -bottom-28 -left-28 w-[260px] h-[260px] md:w-[460px] md:h-[460px] pointer-events-none"
        viewBox="0 0 460 460"
        fill="none"
      >
        {[120, 160, 200, 240, 280].map((r) => (
          <circle key={r} cx="0" cy="460" r={r} stroke={GOLD} strokeWidth="1" opacity="0.45" />
        ))}
      </svg>
      <svg
        className="absolute top-6 left-4 md:top-10 md:left-10 w-[90px] h-[70px] md:w-[200px] md:h-[140px] pointer-events-none"
        viewBox="0 0 200 140"
        fill={GOLD}
        opacity="0.55"
      >
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="1.8" />
          ))
        )}
      </svg>
      <svg
        className="absolute bottom-6 right-4 md:bottom-10 md:right-10 w-[90px] h-[70px] md:w-[200px] md:h-[140px] pointer-events-none"
        viewBox="0 0 200 140"
        fill={GOLD}
        opacity="0.55"
      >
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="1.8" />
          ))
        )}
      </svg>

      <div
        className="relative max-w-[1280px] mx-auto transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <span
          className="inline-block rounded-full px-4 py-2 md:px-5 md:py-2.5 font-semibold uppercase tracking-wider"
          style={{
            color: MILK,
            border: `1px solid ${GOLD}`,
            fontSize: "clamp(11px, 1.3vw, 16px)",
          }}
        >
          Не ещё один курс про продажи
        </span>

        <h2
          className="mt-6 md:mt-9 font-extrabold uppercase leading-[1.06] tracking-tight"
          style={{ fontSize: "clamp(30px, 5.4vw, 74px)" }}
        >
          <span className="block" style={{ color: MILK }}>
            Хватит знать, как надо.
          </span>
          <span className="block mt-2 md:mt-4" style={{ color: MILK }}>
            Пора{" "}
            <span style={{ color: GOLD }}>видеть заявки</span>
            <br className="hidden sm:block" /> в своих сообщениях.
          </span>
        </h2>

        <div className="mt-7 md:mt-10 max-w-[850px]">
          <p
            className="leading-relaxed"
            style={{ color: "rgba(250,247,242,0.82)", fontSize: "clamp(16px, 1.8vw, 23px)" }}
          >
            Ты уже достаточно училась, сохраняла полезные посты и собиралась «вот-вот начать».
          </p>
          <p
            className="mt-4 md:mt-6 font-semibold leading-relaxed"
            style={{ color: MILK, fontSize: "clamp(17px, 1.9vw, 24px)" }}
          >
            На «Трекинге» мы превращаем знания в конкретные действия, которые помогают привлекать клиентов и продавать свой продукт.
          </p>
        </div>

        <div className="mt-12 md:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 lg:pb-8">
          {CARDS.map((card) => (
            <article
              key={card.num}
              className={`flex flex-col rounded-[20px] lg:rounded-[24px] p-6 md:p-7 lg:p-8 lg:min-h-[310px] shadow-[0_24px_50px_-24px_rgba(0,0,0,0.55)] ${card.layout}`}
              style={{ backgroundColor: card.bg }}
            >
              <span
                className="font-extrabold leading-none"
                style={{ color: BORDEAUX, fontSize: "clamp(48px, 5vw, 68px)" }}
              >
                {card.num}
              </span>
              <h3
                className="mt-4 font-bold uppercase leading-snug"
                style={{ color: INK, fontSize: "clamp(15px, 1.4vw, 18px)" }}
              >
                {card.title}
              </h3>
              <p
                className="mt-3 leading-relaxed"
                style={{ color: "#3A3A3A", fontSize: "clamp(15px, 1.2vw, 16px)" }}
              >
                {card.text}
              </p>
              <div className="mt-auto pt-5">{card.footer}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
