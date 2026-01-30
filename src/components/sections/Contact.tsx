import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
      const { data, error } = await supabase.functions.invoke('send-telegram-notification', {
        body: { name, phone, message },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позвонить нам напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-secondary" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Контакты
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Свяжитесь с нами
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Оставьте заявку, и мы перезвоним вам в течение 15 минут.
              Консультация бесплатная!
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-wood flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефоны</p>
                  <a href="tel:+79339260909" className="block font-semibold text-lg hover:text-primary transition-colors">
                    +7 933 926-09-09
                  </a>
                  <a href="tel:+79111670166" className="block font-semibold text-lg hover:text-primary transition-colors">
                    +7 911 167-01-66
                  </a>
                </div>
              </div>

              <a
                href="mailto:info@perfectfloor.ru"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-wood flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                    info@perfectfloor.ru
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-wood flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-semibold text-lg">
                    Москва и Московская область
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">
                  Спасибо за заявку!
                </h3>
                <p className="text-muted-foreground">
                  Мы перезвоним вам в ближайшее время
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Отправить ещё
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Иван Иванов"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Сообщение (необязательно)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Опишите ваш проект или задайте вопрос..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Отправка..."
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy" className="underline hover:text-primary">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
