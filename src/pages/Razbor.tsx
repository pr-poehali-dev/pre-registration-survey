const Razbor = () => {
  const totalSlots = 5;
  const takenSlots = 3;
  const freeSlots = totalSlots - takenSlots;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto space-y-8">

        {/* Заголовок в рамке */}
        <div
          className="text-center py-5 px-6 rounded-2xl border-2 font-bold text-2xl md:text-3xl leading-tight"
          style={{ borderColor: '#9A1E14', color: '#9A1E14' }}
        >
          Запись на бесплатный стратегический разбор
        </div>

        {/* Описание */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
          Мы посмотрим ваш блог, продукт и модель продаж,{' '}
          <strong>найдём 2–3 ключевые точки роста, которые быстрее всего могут привести заявки</strong>,
          и соберём понятный план действий,
          чтобы блог начал приводить клиентов, а продажи перестали зависеть от сарафана.
        </p>

        {/* Предупреждение */}
        <p className="text-gray-800 text-base md:text-lg text-center font-medium">
          ⚠️ Чтобы погрузиться в каждый проект, я возьму только 5 проектов.
        </p>

        {/* Счётчик мест — прогресс-бар */}
        <div
          className="rounded-2xl p-6 space-y-4"
          style={{ backgroundColor: '#FFF5F5', border: '1px solid #f3c3c0' }}
        >
          <div className="flex items-center justify-between text-sm font-semibold" style={{ color: '#9A1E14' }}>
            <span>Свободных мест</span>
            <span className="text-2xl font-black">{freeSlots} из {totalSlots}</span>
          </div>

          {/* Прогресс-бар */}
          <div className="w-full h-4 rounded-full bg-white overflow-hidden" style={{ border: '1px solid #f3c3c0' }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${(takenSlots / totalSlots) * 100}%`,
                backgroundColor: '#9A1E14',
              }}
            />
          </div>

          {/* Слоты */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlots }).map((_, i) => (
              <div key={i} className="flex-1 text-center">
                <div
                  className="rounded-lg py-2 text-xs font-bold"
                  style={
                    i < takenSlots
                      ? { backgroundColor: '#9A1E14', color: 'white' }
                      : { backgroundColor: 'white', color: '#9A1E14', border: '1.5px dashed #9A1E14' }
                  }
                >
                  {i < takenSlots ? '✗' : '✓'}
                </div>
                <p className="text-xs mt-1" style={{ color: i < takenSlots ? '#9A1E14' : '#888' }}>
                  {i < takenSlots ? 'занято' : 'свободно'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Призыв */}
        <p className="text-center text-gray-800 text-base md:text-lg font-medium">
          Выберите удобный способ записи и отправьте заявку 👇
        </p>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#229ED9' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.38 13.627 4.43 12.72c-.658-.207-.672-.658.138-.975l10.868-4.19c.548-.198 1.027.132.858.666z" fill="white"/>
            </svg>
            Записаться через Telegram
          </a>

          <a
            href="https://max.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90"
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
