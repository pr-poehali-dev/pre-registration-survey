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
        className="absolute top-4 right-2 w-[140px] h-[100px] md:w-[260px] md:h-[180px] pointer-events-none"
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
          className="absolute top-1/2 right-0 lg:right-[4vw] -translate-y-1/2 w-[420px] h-[420px] lg:w-[760px] lg:h-[760px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,151,75,0.30) 0%, rgba(201,151,75,0.11) 45%, rgba(250,248,243,0) 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-10 pb-6 lg:pt-14 lg:pb-14 lg:min-h-[860px] flex items-center">
          <div className="relative z-10 w-full lg:w-[55%]">
            <div className="flex flex-wrap items-center gap-2.5 mb-6 md:mb-8">
              <span
                className="rounded-md px-3.5 py-2 text-[11px] md:text-xs font-bold tracking-wider text-white"
                style={{ backgroundColor: "#800012" }}
              >
                3 МЕСЯЦА
              </span>
              <span
                className="rounded-md px-3.5 py-2 text-[11px] md:text-xs font-bold tracking-wider"
                style={{ backgroundColor: "#FAF8F3", border: "1px solid #C9974B", color: "#181818" }}
              >
                СТРАТЕГИЯ + ВНЕДРЕНИЕ
              </span>
            </div>

            <h1 className="font-black uppercase leading-[1.02] tracking-tight text-[40px] sm:text-5xl md:text-6xl xl:text-[76px]">
              <span className="block" style={{ color: "#181818" }}>
                Хватит готовиться к продажам.
              </span>
              <span className="block mt-2 md:mt-3" style={{ color: "#800012" }}>
                Пора получать клиентов!
              </span>
            </h1>

            <p
              className="mt-6 md:mt-7 max-w-[560px] text-base md:text-lg leading-relaxed"
              style={{ color: "#181818" }}
            >
              Преврати свои знания, продукт и аудиторию в понятную систему привлечения клиентов и продаж.
            </p>

            <div className="mt-5 max-w-[560px] pl-4 border-l-2" style={{ borderColor: "#C9974B" }}>
              <p className="text-sm md:text-base font-semibold leading-relaxed" style={{ color: "#181818" }}>
                Без бесконечных прогревов, хаотичных запусков и ожидания, когда канал наконец станет идеальным.
              </p>
            </div>

            <p
              className="mt-5 text-xs md:text-sm font-extrabold tracking-wider uppercase"
              style={{ color: "#800012" }}
            >
              Первые действия на продажи — уже в начале программы.
            </p>

            <div className="mt-7 flex flex-col items-stretch sm:items-start">
              <button
                onClick={scrollToTariffs}
                className="group inline-flex items-center justify-center gap-3 h-16 md:h-[72px] px-8 md:px-10 rounded-lg text-white text-sm md:text-base font-extrabold tracking-wider shadow-lg transition-colors hover:brightness-75 w-full sm:w-auto"
                style={{ backgroundColor: "#800012" }}
              >
                ХОЧУ ПРОДАВАТЬ СИСТЕМНО
                <Icon name="ArrowRight" size={20} className="transition-transform group-hover:translate-x-1.5" />
              </button>
              <button
                onClick={scrollToTariffs}
                className="mt-4 text-sm text-center sm:text-left transition-colors hover:text-[#800012]"
                style={{ color: "#181818", opacity: 0.75 }}
              >
                Посмотреть программу и выбрать формат участия
              </button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-[88%] max-w-[440px] aspect-[3/4] lg:absolute lg:bottom-0 lg:right-[2vw] lg:mx-0 lg:h-full lg:w-auto lg:max-w-none lg:aspect-[3/4] pointer-events-none">
          <img
            src={PORTRAIT_URL}
            alt="Светлана Скорнякова"
            className="relative z-10 w-full h-full object-contain object-bottom"
          />
          <div
            className="absolute z-20 left-[2%] lg:left-[6%] bottom-[8%] lg:bottom-[22%] w-[116px] h-[116px] md:w-[148px] md:h-[148px] rounded-full flex items-center justify-center text-center p-3.5"
            style={{
              backgroundColor: "#FAF8F3",
              border: "1px solid #C9974B",
              boxShadow: "0 10px 30px -15px rgba(24,24,24,0.3)",
            }}
          >
            <span
              className="text-[9px] md:text-[11px] font-bold uppercase leading-snug tracking-wide"
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
