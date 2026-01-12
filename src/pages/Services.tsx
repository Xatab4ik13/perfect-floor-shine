import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "standard",
    name: "Стандарт",
    price: "1 300",
    unit: "₽/м²",
    description: "Базовое восстановление паркета с использованием однокомпонентного лака",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Однокомпонентный лак (3 слоя)",
      "Межслойная шлифовка",
      "Гарантия 2 года",
    ],
    recommended: "Для помещений с низкой проходимостью: спальни, гостевые комнаты",
  },
  {
    id: "premium",
    name: "Премиум",
    price: "1 500",
    unit: "₽/м²",
    description: "Оптимальное решение с двухкомпонентным лаком для повышенной износостойкости",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Двухкомпонентный лак (3 слоя)",
      "Межслойная шлифовка",
      "Гарантия 2 года",
    ],
    recommended: "Для гостиных, детских, кабинетов",
    popular: true,
  },
  {
    id: "luxury",
    name: "Люкс",
    price: "1 700",
    unit: "₽/м²",
    description: "Максимальная прочность покрытия с лаком повышенной износостойкости",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Двухкомпонентный лак повышенной прочности (3 слоя)",
      "Межслойная шлифовка",
      "Гарантия 2 года",
    ],
    recommended: "Для прихожих, коридоров, кухонь",
  },
  {
    id: "eurolux",
    name: "Евролюкс",
    price: "2 000",
    unit: "₽/м²",
    description: "Европейское качество с еврошлифовкой плоскошлифовальным оборудованием",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Еврошлифовка плоскошлифовальным оборудованием",
      "Двухкомпонентный лак повышенной прочности (3 слоя)",
      "Межслойная шлифовка",
      "Гарантия 2 года",
    ],
    recommended: "Для премиальных интерьеров и коммерческих помещений",
  },
  {
    id: "toning",
    name: "Тонирование",
    price: "2 700",
    unit: "₽/м²",
    description: "Изменение цвета паркета с использованием профессиональных масел",
    features: [
      "Циклёвка паркета",
      "Шлифовка паркета",
      "Еврошлифовка плоскошлифовальным оборудованием",
      "Нанесение цветного масла",
      "Защитный слой (лак или масло)",
      "Гарантия 2 года",
    ],
    recommended: "Для изменения цвета паркета под интерьер",
  },
  {
    id: "laminate",
    name: "Укладка ламината",
    price: "от 500",
    unit: "₽/м²",
    description: "Профессиональная укладка ламината любой сложности",
    features: [
      "Подготовка основания",
      "Укладка подложки",
      "Укладка ламината",
      "Установка порожков",
      "Гарантия 1 год",
    ],
    recommended: "Для быстрого обновления напольного покрытия",
  },
  {
    id: "plinth",
    name: "Установка плинтусов",
    price: "от 500",
    unit: "₽/м.п.",
    description: "Монтаж напольных плинтусов из любых материалов",
    features: [
      "Демонтаж старых плинтусов",
      "Монтаж новых плинтусов",
      "Установка уголков и заглушек",
      "Работа с любыми материалами",
    ],
    recommended: "В комплексе с циклёвкой или укладкой",
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Услуги
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
              Наши услуги
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Полный комплекс услуг по циклёвке, реставрации и укладке
              напольных покрытий
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                id={service.id}
                className={`relative rounded-2xl p-8 md:p-10 ${
                  service.popular
                    ? "bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary"
                    : "bg-card border border-border"
                } shadow-card`}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Популярный выбор
                  </span>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="font-display text-2xl md:text-3xl font-bold">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {service.recommended && (
                      <p className="mt-6 text-sm text-muted-foreground">
                        <strong>Рекомендуется:</strong> {service.recommended}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
                    <div className="mb-4">
                      <span className="font-display text-4xl md:text-5xl font-bold text-primary">
                        {service.price}
                      </span>
                      <span className="text-muted-foreground ml-1 text-lg">
                        {service.unit}
                      </span>
                    </div>
                    <Link to={`/services/${service.id}`}>
                      <Button variant={service.popular ? "hero" : "default"} size="lg">
                        Подробнее
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Не знаете, какую услугу выбрать?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Наш специалист бесплатно приедет, оценит состояние пола и подберёт
            оптимальное решение
          </p>
          <Button variant="hero" size="lg" className="mt-6" onClick={scrollToContact}>
            Заказать бесплатный замер
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
