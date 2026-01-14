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
              Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время для уточнения деталей.
            </p>
            <p className="text-base text-gray-600">
              А пока присоединяйтесь к нашему телеграм-каналу, где мы делимся полезными материалами о продажах и трекинге!
            </p>
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto px-8 py-6 text-lg bg-[#9A1E15] hover:bg-[#7A1610] transition-all transform hover:scale-105"
            >
              <a 
                href="https://t.me/+QAl59cl2QetiZmIy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Icon name="Send" size={24} />
                Перейти в Telegram-канал
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;