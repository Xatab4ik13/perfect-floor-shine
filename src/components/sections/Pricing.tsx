import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    id: "standard",
    name: "Стандарт",
    price: "1 300",
    unit: "₽/м²",
    description: "Базовое восстановление паркета",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Однокомпонентный лак (3 слоя)",
      "Межслойная шлифовка",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Премиум",
    price: "1 500",
    unit: "₽/м²",
    description: "Оптимальный выбор для дома",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Двухкомпонентный лак (3 слоя)",
      "Межслойная шлифовка",
    ],
    popular: true,
  },
  {
    id: "luxury",
    name: "Люкс",
    price: "1 700",
    unit: "₽/м²",
    description: "Максимальная прочность покрытия",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Лак повышенной прочности (3 слоя)",
      "Межслойная шлифовка",
    ],
    popular: false,
  },
  {
    id: "eurolux",
    name: "Евролюкс",
    price: "2 000",
    unit: "₽/м²",
    description: "Европейское качество",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Еврошлифовка плоскошлифовальным оборудованием",
      "Лак повышенной прочности (3 слоя)",
      "Межслойная шлифовка",
    ],
    popular: false,
  },
  {
    id: "toning",
    name: "Тонирование",
    price: "2 700",
    unit: "₽/м²",
    description: "Изменение цвета паркета",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Еврошлифовка плоскошлифовальным оборудованием",
      "Нанесение цветного масла",
      "Защитный слой (лак или масло)",
    ],
    popular: false,
  },
];

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Тарифы
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Выберите подходящий тариф
          </h2>
          <p className="mt-4 text-muted-foreground">
            Прозрачные цены без скрытых платежей. Стоимость фиксируется до
            начала работ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? "bg-gradient-wood text-primary-foreground shadow-gold scale-105"
                  : "bg-card shadow-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-gold text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    <Star className="h-3 w-3 fill-current" />
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`font-display text-xl font-semibold ${
                    plan.popular ? "" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    plan.popular
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="text-center mb-6">
                <span
                  className={`font-display text-4xl font-bold ${
                    plan.popular ? "" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    plan.popular
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-gold" : "text-primary"
                      }`}
                    />
                    <span
                      className={
                        plan.popular
                          ? "text-primary-foreground/90"
                          : "text-foreground/80"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to={`/services/${plan.id}`}>
                <Button
                  variant={plan.popular ? "white" : "outline"}
                  className="w-full"
                >
                  Подробнее
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Не знаете, какой тариф выбрать?
          </p>
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Получить консультацию
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
