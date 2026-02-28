import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telegramUsername: '',
    niche: '',
    channelLink: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.telegramUsername.startsWith('@')) {
      toast({
        title: "Ошибка валидации",
        description: "Никнейм в Телеграм должен начинаться с символа @",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/22c60bf4-1d43-411f-b723-590683f864b8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        navigate('/thank-you');
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте снова.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#9A1E15] mb-4">
            Анкета предзаписи на Трекинг
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Оставьте заявку, чтобы я и моя команда связались с вами и рассказали как попасть на программу со скидкой 20.000 руб
          </p>
        </div>

        <Card className="shadow-xl border-0 animate-scale-in">
          <CardHeader className="space-y-1 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-t-lg">
            <CardTitle className="text-2xl font-heading">Ваши данные</CardTitle>
            <CardDescription>
              Все поля обязательны для заполнения
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-bold">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 border border-[#9A1E15]/40 focus:border-[#9A1E15] focus:ring-[#9A1E15] hover:bg-[#9A1E15]/5 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegramUsername" className="text-base font-bold">
                  Ваш никнейм в Телеграм
                </Label>
                <Input
                  id="telegramUsername"
                  placeholder="Например @svetlana_skorni"
                  value={formData.telegramUsername}
                  onChange={(e) => setFormData({ ...formData, telegramUsername: e.target.value })}
                  required
                  pattern="@[a-zA-Z0-9_]{5,32}"
                  title="Никнейм должен начинаться с @ и содержать от 5 до 32 символов (буквы, цифры, подчеркивание)"
                  className="h-12 border border-[#9A1E15]/40 focus:border-[#9A1E15] focus:ring-[#9A1E15] hover:bg-[#9A1E15]/5 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="niche" className="text-base font-bold">
                  Какая у вас ниша?
                </Label>
                <Input
                  id="niche"
                  placeholder="Например: психология, коучинг, маркетинг, услуги по дизайну и т.д."
                  value={formData.niche}
                  onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                  required
                  className="h-12 border border-[#9A1E15]/40 focus:border-[#9A1E15] focus:ring-[#9A1E15] hover:bg-[#9A1E15]/5 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="channelLink" className="text-base font-bold">
                  Ссылка на ваш канал
                </Label>
                <Input
                  id="channelLink"
                  type="url"
                  placeholder="https://t.me/millionskorny"
                  value={formData.channelLink}
                  onChange={(e) => setFormData({ ...formData, channelLink: e.target.value })}
                  required
                  className="h-12 border border-[#9A1E15]/40 focus:border-[#9A1E15] focus:ring-[#9A1E15] hover:bg-[#9A1E15]/5 transition-all"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-[#9A1E15] hover:bg-[#7A1811] text-white"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-left max-w-2xl mx-auto bg-white/80 p-6 rounded-lg shadow-sm">
          <p className="text-lg font-semibold text-[#9A1E15] mb-3">
            Сразу после заполнения формы вам будут доступны бонусы:
          </p>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start">
              <span className="text-[#9A1E15] mr-2">—</span>
              <span>Видео урок "Как запустить продажи консультаций и мини-продуктов за 30 минут"</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A1E15] mr-2">—</span>
              <span>Структура воронки продаж, которая принесла мне и моим клиентам более 10 млн рублей за 2024-2025 и продолжает работать в 2026</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9A1E15] mr-2">—</span>
              <span>Возможность попасть на большую стратегическую сессию по продажам в 2026</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
