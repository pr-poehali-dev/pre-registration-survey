const Razbor = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(154, 30, 20, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(154, 30, 20, 0); }
        }
        @keyframes pulse-scale-tg {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 158, 217, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(34, 158, 217, 0); }
        }
        .btn-pulse-red { animation: pulse-scale 2s ease-in-out infinite; }
        .btn-pulse-tg { animation: pulse-scale-tg 2s ease-in-out infinite; }
        .btn-pulse-red:hover, .btn-pulse-tg:hover { animation: none; opacity: 0.9; }
      `}</style>

      <div className="max-w-2xl w-full mx-auto space-y-8">

        {/* Заголовок в рамке */}
        <div
          className="text-center py-5 px-6 rounded-2xl border-2 font-bold text-2xl md:text-3xl leading-tight uppercase"
          style={{ borderColor: '#9A1E14', color: '#9A1E14' }}
        >
          Запись на бесплатный стратегический разбор
        </div>

        {/* Описание */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-left">
          Мы посмотрим ваш блог, продукт и модель продаж,{' '}
          <strong>найдём 2–3 ключевые точки роста, которые быстрее всего могут привести заявки</strong>,
          и соберём понятный план действий,
          чтобы блог начал приводить клиентов, а продажи перестали зависеть от сарафана.
        </p>

        {/* Предупреждение */}
        <p className="text-gray-800 text-base md:text-lg text-left font-medium">
          ⚠️ Чтобы погрузиться в каждый проект, я возьму только 5 проектов.
        </p>

        {/* Места */}
        <p className="text-left text-base md:text-lg font-medium text-gray-800">
          Из пяти свободных мест осталось только <span className="font-bold" style={{ color: '#9A1E14' }}>два</span>.
        </p>

        {/* Призыв */}
        <p className="text-left text-gray-800 text-base md:text-lg font-medium">
          Выберите удобный способ записи и отправьте заявку 👇
        </p>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/m/90U-mcg7MDUy"
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
            href="https://max.ru/u/f9LHodD0cOKOjXse9skzPbp9bGsnQ1uYA-cdamaPa_dZ4ZueQW5bWMgAc_o"
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
    </div>
  );
};

export default Razbor;