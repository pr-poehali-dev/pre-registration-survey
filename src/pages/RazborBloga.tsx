import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';

const RazborBloga = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 w-full px-4 pt-6 pb-12 md:py-16 flex flex-col items-center overflow-x-hidden relative">
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(154, 30, 20, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(154, 30, 20, 0); }
        }
        @keyframes pulse-scale-tg {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 158, 217, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(34, 158, 217, 0); }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes float-y-slow {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.08); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        .btn-pulse-red { animation: pulse-scale 2s ease-in-out infinite; }
        .btn-pulse-tg { animation: pulse-scale-tg 2s ease-in-out infinite; }
        .btn-pulse-red:hover, .btn-pulse-tg:hover { animation: none; opacity: 0.9; }
        .float-badge { animation: float-y 4s ease-in-out infinite; }
        .float-badge-slow { animation: float-y-slow 5.5s ease-in-out infinite; }
        .blob { animation: blob-move 9s ease-in-out infinite; filter: blur(40px); }
        .tilt-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .tilt-card:hover { transform: translateY(-6px) rotate(-0.4deg); }
        .badge-3d {
          background: linear-gradient(135deg, #9A1E14 0%, #C84B40 60%, #C99A4A 100%);
          box-shadow: 0 10px 25px -8px rgba(154,30,20,0.55), inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.2);
        }
      `}</style>

      {/* decorative blobs */}
      <div className="blob absolute -top-10 -left-10 w-56 h-56 rounded-full bg-[#C99A4A]/25 pointer-events-none" />
      <div className="blob absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-[#9A1E14]/15 pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="float-badge absolute top-10 right-6 md:right-24 w-12 h-12 rounded-2xl badge-3d flex items-center justify-center rotate-6 pointer-events-none">
        <Icon name="Compass" size={22} className="text-white" />
      </div>
      <div className="float-badge-slow absolute bottom-10 left-4 md:left-16 w-11 h-11 rounded-full badge-3d flex items-center justify-center pointer-events-none">
        <Icon name="TrendingUp" size={20} className="text-white" />
      </div>

      <div className="max-w-2xl w-full space-y-8 relative">

        <div
          className="relative text-center py-7 px-6 rounded-3xl border-2 font-bold text-2xl md:text-3xl leading-tight bg-white shadow-lg tilt-card"
          style={{ borderColor: '#9A1E14', color: '#9A1E14' }}
        >
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full badge-3d flex items-center justify-center">
            <Icon name="Sparkles" size={20} className="text-white" />
          </span>
          Что именно вашему каналу поможет начать привлекать клиентов и приносить продажи?
        </div>

        <div className="text-gray-700 text-base md:text-lg leading-relaxed text-left md:text-center space-y-5">
          <p className="font-semibold text-gray-900 text-center text-lg">На разборе мы вместе:</p>

          <div className="grid gap-3">
            {[
              { icon: "SearchX", text: "разберем, что сегодня мешает вашему каналу стабильно приносить заявки" },
              { icon: "Filter", text: "посмотрим, на каком этапе вы теряете потенциальных клиентов" },
              { icon: "Target", text: "определим точки роста именно для вашей ситуации — от привлечения новой аудитории до контента, прогрева и продаж" },
              { icon: "ListChecks", text: "составим понятный план действий, который поможет превратить канал в работающую систему привлечения клиентов" },
            ].map((item, i) => (
              <div key={i} className="tilt-card flex items-start gap-3 text-left bg-white rounded-2xl p-4 shadow-md border border-[#9A1E15]/10">
                <span className="w-9 h-9 rounded-xl badge-3d flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={17} className="text-white" />
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-[#9A1E15]/5 to-[#C99A4A]/10 border-2 border-[#9A1E15]/20 rounded-2xl p-5 text-center">
            <p>После встречи у вас будет не набор общих рекомендаций, а персональная стратегия развития канала с конкретными шагами, которые вы сможете начать внедрять сразу после встречи.</p>
          </div>

          <p className="text-center font-medium text-gray-900">Если вы готовы превратить канал в инструмент, который регулярно приводит клиентов и продажи, — выберите удобный способ записи.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/m/wcpuigGZYWUy"
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
            href="https://max.ru/u/f9LHodD0cOI6casC86OoYGGKnM0aU5HtuLKxBMGckt5xXfawji2_2uSz33c"
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

      <Footer />
    </div>
  );
};

export default RazborBloga;