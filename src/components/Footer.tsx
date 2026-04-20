const Footer = () => {
  return (
    <footer className="w-full text-center py-6 px-4 mt-auto">
      <p className="text-xs text-gray-400 mb-2">ИП Скорнякова Светлана Сергеевна · ИНН 470318276006</p>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-gray-400">
        <a href="https://disk.yandex.ru/d/TqWWjY03oMx7xg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline underline-offset-2 transition-colors">
          Договор оферты
        </a>
        <span className="hidden sm:inline">·</span>
        <a href="https://disk.yandex.ru/d/TqWWjY03oMx7xg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline underline-offset-2 transition-colors">
          Политика конфиденциальности
        </a>
        <span className="hidden sm:inline">·</span>
        <a href="https://disk.yandex.ru/d/TqWWjY03oMx7xg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline underline-offset-2 transition-colors">
          Согласие на обработку персональных данных
        </a>
      </div>
    </footer>
  );
};

export default Footer;
