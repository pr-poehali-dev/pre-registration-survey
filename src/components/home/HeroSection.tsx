import Icon from "@/components/ui/icon";

const PORTRAIT_URL =
  "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/a91fcde5-0377-4833-ba71-eaa692cd2269.png";

const HeroSection = () => {
  const scrollToTariffs = () =>
    document.getElementById("tariffs")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FAF8F3", fontFamily: "'Montserrat', sans-serif" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <svg
        className="absolute -top-24 -left-24 w-[280px] h-[280px] md:w-[460px] md:h-[460px] pointer-events-none"
        viewBox="0 0 460 460"
        fill="none"
      >
        {[120, 160, 200, 240, 280].map((r) => (
          <circle key={r} cx="0" cy="0" r={r} stroke="#C9974B" strokeWidth="1" opacity="0.55" />
        ))}
      </svg>

      <svg
        className="absolute top-4 right-2 w-[110px] h-[80px] md:w-[260px] md:h-[180px] pointer-events-none"
        viewBox="0 0 260 180"
      >
        <defs>
          <linearGradient id="dots-fade" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
          <mask id="dots-mask">
            <rect width="260" height="180" fill="url(#dots-fade)" />
          </mask>
        </defs>
        <g mask="url(#dots-mask)" fill="#C9974B">
          {Array.from({ length: 9 }).map((_, row) =>
            Array.from({ length: 13 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="2" />
            ))
          )}
        </g>
      </svg>

      <div className="relative">
        <div
          className="absolute top-1/2 right-0 lg:right-[4vw] -translate-y-1/2 w-[70vw] h-[70vw] max-w-[760px] max-h-[760px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,151,75,0.30) 0%, rgba(201,151,75,0.11) 45%, rgba(250,248,243,0) 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-8 pb-8 lg:pt-14 lg:pb-14 lg:min-h-[860px] flex items-center">
          <div className="relative z-10 w-[56%] lg:w-[55%]">
            <div className="flex flex-wrap items-center gap-1.5 md:gap-2.5 mb-3 md:mb-4">
              <span
                className="rounded-md px-2 py-1.5 md:px-3.5 md:py-2 text-[9px] md:text-xs font-bold tracking-wider text-white"
                style={{ backgroundColor: "#800012" }}
              >
                3 МЕСЯЦА
              </span>
              <span
                className="rounded-md px-2 py-1.5 md:px-3.5 md:py-2 text-[9px] md:text-xs font-bold tracking-wider"
                style={{ backgroundColor: "#FAF8F3", border: "1px solid #C9974B", color: "#181818" }}
              >
                СТРАТЕГИЯ + ВНЕДРЕНИЕ
              </span>
            </div>

            <p
              className="mb-3 md:mb-6 font-semibold uppercase"
              style={{
                color: "#C9974B",
                fontSize: "clamp(8px, 1.2vw, 13px)",
                letterSpacing: "0.32em",
              }}
            >
              Программа сопровождения
            </p>

            <h1
              className="font-black uppercase leading-[1.04] tracking-tight"
              style={{ fontSize: "clamp(21px, 6vw, 76px)" }}
            >
              <span className="block" style={{ color: "#800012" }}>
                Хватит готовиться к продажам.
              </span>
              <span className="block mt-1.5 md:mt-3" style={{ color: "#181818" }}>
                Пора получать клиентов!
              </span>
            </h1>

            <p
              className="mt-4 md:mt-7 max-w-[560px] leading-relaxed"
              style={{ color: "#181818", fontSize: "clamp(12px, 1.9vw, 18px)" }}
            >
              Преврати свои знания, продукт и аудиторию в понятную систему привлечения клиентов и продаж.
            </p>

            <div className="mt-3 md:mt-5 max-w-[560px] pl-2.5 md:pl-4 border-l-2" style={{ borderColor: "#C9974B" }}>
              <p
                className="font-semibold leading-relaxed"
                style={{ color: "#181818", fontSize: "clamp(11px, 1.6vw, 16px)" }}
              >
                Без бесконечных прогревов, хаотичных запусков и ожидания, когда канал наконец станет идеальным.
              </p>
            </div>

            <p
              className="mt-3 md:mt-5 font-extrabold tracking-wide md:tracking-wider uppercase leading-snug"
              style={{ color: "#800012", fontSize: "clamp(9px, 1.4vw, 14px)" }}
            >
              Первые действия на продажи — уже в начале программы.
            </p>

            <div className="mt-5 md:mt-7 flex flex-col items-stretch sm:items-start">
              <button
                onClick={scrollToTariffs}
                className="group inline-flex items-center justify-center gap-2 md:gap-3 min-h-[48px] md:h-16 lg:h-[72px] px-3 md:px-8 lg:px-10 py-2 rounded-lg text-white font-extrabold tracking-wide md:tracking-wider shadow-lg transition-colors hover:brightness-75 w-full sm:w-auto text-center"
                style={{
                  background: "linear-gradient(135deg, #9a0a1e 0%, #800012 45%, #5c000d 100%)",
                  border: "1px solid rgba(201,151,75,0.7)",
                  boxShadow: "0 12px 28px -12px rgba(128,0,18,0.65)",
                  fontSize: "clamp(10px, 1.5vw, 16px)",
                }}
              >
                ХОЧУ ПРОДАВАТЬ СИСТЕМНО
                <Icon name="ArrowRight" size={18} className="flex-shrink-0 transition-transform group-hover:translate-x-1.5" />
              </button>
              <button
                onClick={scrollToTariffs}
                className="group mt-3 md:mt-4 flex items-center gap-2.5 text-left transition-colors hover:text-[#800012]"
                style={{ color: "#181818", fontSize: "clamp(10px, 1.4vw, 14px)" }}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-transform group-hover:translate-y-0.5"
                  style={{ border: "1px solid #C9974B", color: "#C9974B" }}
                >
                  <Icon name="ArrowDown" size={14} />
                </span>
                <span className="opacity-75">Посмотреть программу и выбрать формат участия</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-[78px] md:top-[96px] right-[-4vw] w-[58vw] aspect-[3/4] lg:top-auto lg:bottom-0 lg:right-[2vw] lg:w-auto lg:h-[84%] xl:h-full pointer-events-none">
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] h-[112%] pointer-events-none"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="200" cy="200" r="150" stroke="#C9974B" strokeWidth="1" opacity="0.45" />
            <circle cx="200" cy="200" r="182" stroke="#C9974B" strokeWidth="1" opacity="0.3" />
            <ellipse cx="200" cy="200" rx="190" ry="120" stroke="#C9974B" strokeWidth="1" opacity="0.35" transform="rotate(-35 200 200)" />
          </svg>
          <img
            src={PORTRAIT_URL}
            alt="Светлана Скорнякова"
            className="relative z-10 w-full h-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,#000_72%,transparent_100%)] lg:[mask-image:none]"
          />
          <div
            className="absolute z-20 right-[10%] lg:right-[-1vw] bottom-[8%] lg:bottom-[20%] w-[22vw] h-[22vw] min-w-[84px] min-h-[84px] max-w-[148px] max-h-[148px] rounded-full flex items-center justify-center text-center p-2 md:p-3.5"
            style={{
              backgroundColor: "#FAF8F3",
              border: "1px solid #C9974B",
              outline: "1px solid rgba(201,151,75,0.55)",
              outlineOffset: "5px",
              boxShadow: "0 10px 30px -15px rgba(24,24,24,0.3)",
            }}
          >
            <span
              className="text-[7px] md:text-[11px] font-bold uppercase leading-snug tracking-wide"
              style={{ color: "#181818" }}
            >
              От хаотичных действий — к системе продаж
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-20 hidden lg:flex flex-col items-center py-3 -mt-14">
        <div className="w-px h-8" style={{ background: "linear-gradient(#C9974B, rgba(201,151,75,0))" }} />
        <Icon name="ChevronDown" size={18} className="text-[#C9974B]" />
      </div>
    </section>
  );
};

export default HeroSection;