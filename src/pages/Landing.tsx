import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#9A1E15] leading-tight">
            Трекинг продаж в Telegram
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Персональное сопровождение для увеличения ваших продаж. 
            Проверенные стратегии, которые принесли клиентам более 10 млн рублей.
          </p>

          <Button
            onClick={() => navigate('/form')}
            size="lg"
            className="px-12 py-8 text-xl bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105 animate-pulse-subtle shadow-xl"
          >
            Записаться на трекинг
            <Icon name="ArrowRight" size={24} className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15] text-center mb-12">
            Что вы получите
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#9A1E15] rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#9A1E15]">
                  Персональная стратегия
                </h3>
                <p className="text-gray-600">
                  Индивидуальный план продаж, адаптированный под вашу нишу и цели
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#9A1E15] rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#9A1E15]">
                  Еженедельная поддержка
                </h3>
                <p className="text-gray-600">
                  Регулярная обратная связь и корректировка действий для достижения результата
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#9A1E15] rounded-full flex items-center justify-center mx-auto">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#9A1E15]">
                  Рост продаж
                </h3>
                <p className="text-gray-600">
                  Проверенные техники и инструменты для увеличения конверсии и прибыли
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bonuses Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-[#9A1E15] shadow-2xl bg-gradient-to-br from-white to-yellow-50">
            <CardContent className="p-8 md:p-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15] text-center mb-8">
                Бонусы при предзаписи
              </h2>
              
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <Icon name="Gift" size={24} className="text-[#9A1E15] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Видео урок "Как запустить продажи консультаций и мини-продуктов за 30 минут"
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <Icon name="Gift" size={24} className="text-[#9A1E15] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Структура воронки продаж, которая принесла мне и моим клиентам более 10 млн рублей за 2024-2025 и продолжает работать в 2026
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <Icon name="Gift" size={24} className="text-[#9A1E15] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Возможность попасть на большую стратегическую сессию по продажам 2026
                  </p>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button
                  onClick={() => navigate('/form')}
                  size="lg"
                  className="px-12 py-8 text-xl bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105 shadow-xl"
                >
                  Заполнить анкету и получить бонусы
                  <Icon name="ArrowRight" size={24} className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#9A1E15]">
            Готовы начать?
          </h2>
          <p className="text-xl text-gray-700">
            Заполните анкету предзаписи прямо сейчас и получите доступ к бонусным материалам
          </p>
          <Button
            onClick={() => navigate('/form')}
            size="lg"
            className="px-12 py-8 text-xl bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105 animate-pulse-subtle shadow-xl"
          >
            Записаться на трекинг
            <Icon name="ArrowRight" size={24} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
