import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import confetti from 'canvas-confetti';

const ThankYou = () => {
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <Card className="shadow-xl border-0 animate-scale-in text-center">
          <CardHeader className="space-y-6 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-t-lg pb-8">
            <div className="mx-auto w-20 h-20 bg-[#9A1E15] rounded-full flex items-center justify-center animate-bounce-slow">
              <Icon name="Check" size={40} className="text-white" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-heading text-[#9A1E15]">
              Спасибо за заявку!
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8 pb-10 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ваша заявка успешно отправлена. Я свяжусь с вами в ближайшее время для уточнения деталей.
            </p>
            <div className="bg-yellow-50 border-2 border-[#9A1E15] rounded-lg p-6 text-left">
              <p className="text-base font-semibold text-[#9A1E15] mb-3">
                А прямо сейчас нажимайте на кнопку ниже и забирайте БОНУСЫ за заполнение анкеты:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#9A1E15] mr-2 font-bold">—</span>
                  <span>Видео урок "Как запустить продажи консультаций и мини-продуктов за 30 минут"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9A1E15] mr-2 font-bold">—</span>
                  <span>Структура воронки продаж, которая принесла мне и моим клиентам более 10 млн рублей за 2024-2025 и продолжает работать в 2026</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9A1E15] mr-2 font-bold">—</span>
                  <span>Возможность попасть на большую стратегическую сессию по продажам 2026</span>
                </li>
              </ul>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto px-8 py-6 text-lg bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105 animate-pulse-subtle"
            >
              <a 
                href="https://t.me/klienty_telegramya_bot?start=b_KhHJZcfUBc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white"
              >
                <Icon name="Send" size={24} />
                Забрать бонусы
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;