import { motion } from "framer-motion";
import { Wind, Clock, CreditCard, Headphones, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: Wind,
    title: "Без пыли и мусора",
    description: "Специализированное оборудование, оснащенное пылесборниками. Чистота в вашем доме гарантирована.",
  },
  {
    icon: Clock,
    title: "Быстросохнущие лаки",
    description: "Качественные немецкие лаки без запаха. Можно ходить по полу уже через 24 часа.",
  },
  {
    icon: CreditCard,
    title: "Прозрачные цены",
    description: "Стоимость всех работ под ключ оговаривается до начала и более не меняется.",
  },
  {
    icon: Headphones,
    title: "Бесплатная консультация",
    description: "Подробная консультация возможна даже по фото. Расскажем всё о вашем паркете.",
  },
  {
    icon: Shield,
    title: "Гарантия 2 года",
    description: "Уверены в качестве своей работы и предоставляем официальную гарантию.",
  },
  {
    icon: Award,
    title: "Опыт с 2010 года",
    description: "Более 3000 успешно выполненных проектов. Работаем с любой сложностью.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-secondary" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Почему выбирают нас
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Работаем на результат
          </h2>
          <p className="mt-4 text-muted-foreground">
            Мы ценим время и комфорт наших клиентов, поэтому делаем всё, чтобы
            процесс реставрации прошёл максимально удобно для вас
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-wood flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
