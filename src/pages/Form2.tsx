import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Form2 = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telegramUsername: '',
    niche: '',
    timeInNiche: '',
    salesStatus: '',
    productType: '',
    channelLink: '',
    salesDifficulties: '',
    trackingGoals: [] as string[],
    trackingFormat: '',
    readyToStart: ''
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
          <div className="text-left max-w-2xl mx-auto bg-white/80 p-6 rounded-lg shadow-sm">
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

              <div className="space-y-3">
                <Label className="text-base font-bold">
                  Сколько времени вы в нише?
                </Label>
                <RadioGroup
                  value={formData.timeInNiche}
                  onValueChange={(value) => setFormData({ ...formData, timeInNiche: value })}
                  required
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="less-than-1-year" id="f2-less-than-1-year" />
                    <Label htmlFor="f2-less-than-1-year" className="cursor-pointer flex-1 text-base">
                      До 1 года
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="1-2-years" id="f2-1-2-years" />
                    <Label htmlFor="f2-1-2-years" className="cursor-pointer flex-1 text-base">
                      1-2 года
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="more-than-2-years" id="f2-more-than-2-years" />
                    <Label htmlFor="f2-more-than-2-years" className="cursor-pointer flex-1 text-base">
                      Более 2х лет
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold">
                  Как у вас сейчас обстоят дела с продажами?
                </Label>
                <RadioGroup
                  value={formData.salesStatus}
                  onValueChange={(value) => setFormData({ ...formData, salesStatus: value })}
                  required
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="no-sales" id="f2-no-sales" />
                    <Label htmlFor="f2-no-sales" className="cursor-pointer flex-1 text-base">
                      Нет продаж совсем
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="rare-sales" id="f2-rare-sales" />
                    <Label htmlFor="f2-rare-sales" className="cursor-pointer flex-1 text-base">
                      Редкие продажи по сарафану
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="inconsistent" id="f2-inconsistent" />
                    <Label htmlFor="f2-inconsistent" className="cursor-pointer flex-1 text-base">
                      То густо, то пусто
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="want-to-scale" id="f2-want-to-scale" />
                    <Label htmlFor="f2-want-to-scale" className="cursor-pointer flex-1 text-base">
                      Нормально, хочу масштабировать
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold">
                  Какой продукт вы продаете?
                </Label>
                <RadioGroup
                  value={formData.productType}
                  onValueChange={(value) => setFormData({ ...formData, productType: value })}
                  required
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="no-product" id="f2-no-product" />
                    <Label htmlFor="f2-no-product" className="cursor-pointer flex-1 text-base">
                      Нет продукта
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="consultations" id="f2-consultations" />
                    <Label htmlFor="f2-consultations" className="cursor-pointer flex-1 text-base">
                      Консультации (сессии)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="group-programs" id="f2-group-programs" />
                    <Label htmlFor="f2-group-programs" className="cursor-pointer flex-1 text-base">
                      Групповые программы
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="individual-work" id="f2-individual-work" />
                    <Label htmlFor="f2-individual-work" className="cursor-pointer flex-1 text-base">
                      Индивидуальная работа (наставничество, сопровождение)
                    </Label>
                  </div>
                </RadioGroup>
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

              <div className="space-y-2">
                <Label htmlFor="salesDifficulties" className="text-base font-bold">
                  С какими проблемами вы сталкиваетесь сейчас в продажах / трафике / контенте и ведении блога? С чем бы хотели разобраться сейчас?
                </Label>
                <Textarea
                  id="salesDifficulties"
                  placeholder="Сформулируйте своими словами."
                  value={formData.salesDifficulties}
                  onChange={(e) => setFormData({ ...formData, salesDifficulties: e.target.value })}
                  required
                  className="min-h-[100px] resize-none border border-[#9A1E15]/40 focus:border-[#9A1E15] focus:ring-[#9A1E15] hover:bg-[#9A1E15]/5 transition-all"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold">
                  Какие задачи хотите решить на трекинге? (выберите несколько)
                </Label>
                <div className="space-y-3">
                  {[
                    'Запустить продажи с нуля',
                    'Продавать проще и быстрее',
                    'Привлечь новую аудиторию',
                    'Переупаковать / создать сильный продукт',
                    'Уйти от хаоса и продаж наугад',
                    'Научиться создавать контент',
                    'Внедрить в работу нейросети',
                    'Научиться создавать автоворонки',
                    'Найти рабочие связки по трафику и проверенных подрядчиков',
                    'Разобраться с новыми законами и налогами'
                  ].map((goal) => (
                    <div key={goal} className="flex items-start space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all">
                      <Checkbox
                        id={`f2-${goal}`}
                        checked={formData.trackingGoals.includes(goal)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({ ...formData, trackingGoals: [...formData.trackingGoals, goal] });
                          } else {
                            setFormData({ ...formData, trackingGoals: formData.trackingGoals.filter(g => g !== goal) });
                          }
                        }}
                        className="mt-0.5 h-5 w-5 border-[#9A1E15] data-[state=checked]:bg-[#9A1E15] data-[state=checked]:border-[#9A1E15]"
                      />
                      <Label htmlFor={`f2-${goal}`} className="cursor-pointer flex-1 text-base leading-relaxed">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold">
                  Какой формат трекинга вам больше подходит?
                </Label>
                <RadioGroup
                  value={formData.trackingFormat}
                  onValueChange={(value) => setFormData({ ...formData, trackingFormat: value })}
                  required
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="test-drive" id="f2-test-drive" />
                    <Label htmlFor="f2-test-drive" className="cursor-pointer flex-1 text-base">
                      Тест-драйв
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="group-format" id="f2-group-format" />
                    <Label htmlFor="f2-group-format" className="cursor-pointer flex-1 text-base">
                      Групповой формат (от 49.900 рублей за 3 месяца)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="individual" id="f2-individual" />
                    <Label htmlFor="f2-individual" className="cursor-pointer flex-1 text-base">
                      Индивидуальная работа
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="readyToStart" className="text-base font-bold">
                  Готов(-а) ли в ближайшие 2 недели зайти в работу, чтобы решить все свои актуальные сложности по продажам и трафику, и вырасти в деньгах уже в следующем месяце?
                </Label>
                <Input
                  id="readyToStart"
                  placeholder="Да / Нет"
                  value={formData.readyToStart}
                  onChange={(e) => setFormData({ ...formData, readyToStart: e.target.value })}
                  required
                  className="h-12 border border-[#9A1E15]/40 focus:border-[#9A1E15] focus:ring-[#9A1E15] hover:bg-[#9A1E15]/5 transition-all"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-[#9A1E15] hover:bg-[#7A1811] text-white animate-pulse-subtle"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Form2;
