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

const Index = () => {
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

    // Валидация никнейма Telegram
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
          <p className="text-lg text-gray-600">
            Заполните форму, и мы свяжемся с вами для уточнения деталей
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
                    <RadioGroupItem value="less-than-1-year" id="less-than-1-year" />
                    <Label htmlFor="less-than-1-year" className="cursor-pointer flex-1 text-base">
                      До 1 года
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="1-2-years" id="1-2-years" />
                    <Label htmlFor="1-2-years" className="cursor-pointer flex-1 text-base">
                      1-2 года
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="more-than-2-years" id="more-than-2-years" />
                    <Label htmlFor="more-than-2-years" className="cursor-pointer flex-1 text-base">
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
                    <RadioGroupItem value="no-sales" id="no-sales" />
                    <Label htmlFor="no-sales" className="cursor-pointer flex-1 text-base">
                      Нет продаж совсем
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="rare-sales" id="rare-sales" />
                    <Label htmlFor="rare-sales" className="cursor-pointer flex-1 text-base">
                      Редкие продажи по сарафану
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="inconsistent" id="inconsistent" />
                    <Label htmlFor="inconsistent" className="cursor-pointer flex-1 text-base">
                      То густо, то пусто
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="want-to-scale" id="want-to-scale" />
                    <Label htmlFor="want-to-scale" className="cursor-pointer flex-1 text-base">
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
                    <RadioGroupItem value="no-product" id="no-product" />
                    <Label htmlFor="no-product" className="cursor-pointer flex-1 text-base">
                      Нет продукта
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="consultations" id="consultations" />
                    <Label htmlFor="consultations" className="cursor-pointer flex-1 text-base">
                      Консультации (сессии)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="group-programs" id="group-programs" />
                    <Label htmlFor="group-programs" className="cursor-pointer flex-1 text-base">
                      Групповые программы
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="individual-work" id="individual-work" />
                    <Label htmlFor="individual-work" className="cursor-pointer flex-1 text-base">
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
                  С какими проблемами вы сталкиваетесь сейчас в продажах / трафике/ контенте и ведении блога? С чем бы хотели разобраться сейчас?
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
                        id={goal}
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
                      <Label htmlFor={goal} className="cursor-pointer flex-1 text-base leading-relaxed">
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
                    <RadioGroupItem value="test-drive" id="test-drive" />
                    <Label htmlFor="test-drive" className="cursor-pointer flex-1 text-base">
                      Тест-драйв
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="group-format" id="group-format" />
                    <Label htmlFor="group-format" className="cursor-pointer flex-1 text-base">
                      Групповой формат (от 49.900 рублей за 3 месяца)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#9A1E15]/40 hover:bg-[#9A1E15]/10 transition-all cursor-pointer">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="cursor-pointer flex-1 text-base">
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

export default Index;