import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    preferredTime: '',
    experience: '',
    goals: '',
    additionalInfo: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });

        setFormData({
          name: '',
          phone: '',
          serviceType: '',
          preferredTime: '',
          experience: '',
          goals: '',
          additionalInfo: ''
        });
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Анкета предзаписи
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
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Ваше имя
                  </Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Какая услуга вас интересует?
                </Label>
                <RadioGroup
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  required
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-yellow-50 transition-all cursor-pointer">
                    <RadioGroupItem value="consultation" id="consultation" />
                    <Label htmlFor="consultation" className="cursor-pointer flex-1 text-base">
                      Консультация
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-yellow-50 transition-all cursor-pointer">
                    <RadioGroupItem value="training" id="training" />
                    <Label htmlFor="training" className="cursor-pointer flex-1 text-base">
                      Тренировка
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-yellow-50 transition-all cursor-pointer">
                    <RadioGroupItem value="program" id="program" />
                    <Label htmlFor="program" className="cursor-pointer flex-1 text-base">
                      Программа на месяц
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-yellow-50 transition-all cursor-pointer">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer flex-1 text-base">
                      Другое
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Удобное время для связи
                </Label>
                <RadioGroup
                  value={formData.preferredTime}
                  onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                  required
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-amber-50 transition-all cursor-pointer">
                    <RadioGroupItem value="morning" id="morning" />
                    <Label htmlFor="morning" className="cursor-pointer flex-1 text-base">
                      Утро (9:00 - 12:00)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-amber-50 transition-all cursor-pointer">
                    <RadioGroupItem value="day" id="day" />
                    <Label htmlFor="day" className="cursor-pointer flex-1 text-base">
                      День (12:00 - 17:00)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-amber-50 transition-all cursor-pointer">
                    <RadioGroupItem value="evening" id="evening" />
                    <Label htmlFor="evening" className="cursor-pointer flex-1 text-base">
                      Вечер (17:00 - 20:00)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-base font-medium">
                  Расскажите о вашем опыте
                </Label>
                <Textarea
                  id="experience"
                  placeholder="Например: занимался спортом год назад, сейчас нет физической активности..."
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  required
                  className="min-h-[100px] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals" className="text-base font-medium">
                  Какие цели вы хотите достичь?
                </Label>
                <Textarea
                  id="goals"
                  placeholder="Например: похудеть на 5 кг, набрать мышечную массу, улучшить выносливость..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  required
                  className="min-h-[100px] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-base font-medium">
                  Дополнительная информация
                  <span className="text-sm text-gray-500 ml-2">(необязательно)</span>
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Укажите любую дополнительную информацию, которую считаете важной..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="min-h-[100px] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500 animate-fade-in">
          <Icon name="Lock" className="inline-block h-4 w-4 mr-1" />
          Ваши данные защищены и не передаются третьим лицам
        </div>
      </div>
    </div>
  );
};

export default Index;