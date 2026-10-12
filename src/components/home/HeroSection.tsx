import Icon from "@/components/ui/icon";

const PORTRAIT_URL =
  "https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/0a63f39e-191b-4a42-86ee-3826d6228842.jpg";

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

      <div
        className="absolute top-1/2 right-0 md:right-[5%] -translate-y-1/2 w-[420px] h-[420px] md:w-[720px] md:h-[720px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,151,75,0.28) 0%, rgba(201,151,75,0.10) 45%, rgba(250,248,243,0) 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[55fr_45fr] items-center gap-8 lg:gap-6 min-h-[auto] lg:min-h-[900px] pt-10 pb-12 lg:py-16">
        <div className="relative z-10 order-1">
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

          <h1 className="font-black uppercase leading-[1.02] tracking-tight text-[40px] sm:text-5xl md:text-6xl xl:text-[80px]">
            <span className="block" style={{ color: "#181818" }}>
              Хватит готовиться к продажам.
            </span>
            <span className="block mt-2 md:mt-4" style={{ color: "#800012" }}>
              Пора получать клиентов!
            </span>
          </h1>

          <p
            className="mt-6 md:mt-8 max-w-[560px] text-base md:text-lg leading-relaxed"
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
            className="mt-6 text-xs md:text-sm font-extrabold tracking-wider uppercase"
            style={{ color: "#800012" }}
          >
            Первые действия на продажи — уже в начале программы.
          </p>

          <div className="mt-8 flex flex-col items-stretch sm:items-start">
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

        <div className="relative order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] lg:max-w-[560px]">
            <img
              src={PORTRAIT_URL}
              alt="Светлана Скорнякова"
              className="relative z-10 w-full h-auto lg:h-[780px] object-cover object-top rounded-[28px]"
              style={{ boxShadow: "0 20px 50px -25px rgba(24,24,24,0.35)" }}
            />
            <div
              className="absolute z-20 -left-2 md:-left-10 bottom-10 md:bottom-16 w-[128px] h-[128px] md:w-[168px] md:h-[168px] rounded-full flex items-center justify-center text-center p-4"
              style={{
                backgroundColor: "#FAF8F3",
                border: "1px solid #C9974B",
                boxShadow: "0 10px 30px -15px rgba(24,24,24,0.3)",
              }}
            >
              <span
                className="text-[10px] md:text-xs font-bold uppercase leading-snug tracking-wide"
                style={{ color: "#181818" }}
              >
                От хаотичных действий — к системе продаж
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center pb-5 -mt-2">
        <div className="w-px h-10" style={{ background: "linear-gradient(#C9974B, rgba(201,151,75,0))" }} />
        <Icon name="ChevronDown" size={18} className="text-[#C9974B]" />
      </div>
    </section>
  );
};

export default HeroSection;
