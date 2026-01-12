import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Check, ArrowLeft, Phone, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/sections/Contact";

const servicesData: Record<
  string,
  {
    name: string;
    price: string;
    unit: string;
    description: string;
    longDescription: string;
    features: string[];
    process: string[];
    duration: string;
    guarantee: string;
  }
> = {
  standard: {
    name: "Циклёвка Стандарт",
    price: "1 300",
    unit: "₽/м²",
    description: "Базовое восстановление паркета",
    longDescription:
      "Тариф «Стандарт» — это оптимальный выбор для помещений с низкой проходимостью. Мы используем качественный однокомпонентный лак, который обеспечивает надёжную защиту паркета и красивый внешний вид на долгие годы. Идеально подходит для спален, гостевых комнат и кабинетов.",
    features: [
      "Циклёвка паркета барабанной машиной",
      "Шлифовка паркета в 3 этапа",
      "Шпаклёвка щелей и трещин",
      "Нанесение однокомпонентного немецкого лака (3 слоя)",
      "Межслойная шлифовка для идеального сцепления",
      "Уборка после работ",
    ],
    process: [
      "Осмотр паркета и оценка объёма работ",
      "Защита мебели и стен плёнкой",
      "Циклёвка — снятие старого покрытия",
      "Шлифовка в 3 этапа с уменьшением зернистости",
      "Шпаклёвка щелей специальным составом",
      "Нанесение первого слоя лака",
      "Межслойная шлифовка",
      "Нанесение второго и третьего слоёв",
      "Финальная уборка помещения",
    ],
    duration: "2-3 дня",
    guarantee: "2 года",
  },
  premium: {
    name: "Циклёвка Премиум",
    price: "1 500",
    unit: "₽/м²",
    description: "Оптимальный выбор для дома",
    longDescription:
      "Тариф «Премиум» использует двухкомпонентный лак повышенной износостойкости. Такое покрытие выдерживает более интенсивные нагрузки и дольше сохраняет первоначальный вид. Рекомендуется для гостиных, детских комнат и помещений со средней проходимостью.",
    features: [
      "Циклёвка паркета барабанной машиной",
      "Шлифовка паркета в 3 этапа",
      "Шпаклёвка щелей и трещин",
      "Нанесение двухкомпонентного немецкого лака (3 слоя)",
      "Межслойная шлифовка для идеального сцепления",
      "Уборка после работ",
    ],
    process: [
      "Осмотр паркета и оценка объёма работ",
      "Защита мебели и стен плёнкой",
      "Циклёвка — снятие старого покрытия",
      "Шлифовка в 3 этапа с уменьшением зернистости",
      "Шпаклёвка щелей специальным составом",
      "Нанесение первого слоя двухкомпонентного лака",
      "Межслойная шлифовка",
      "Нанесение второго и третьего слоёв",
      "Финальная уборка помещения",
    ],
    duration: "2-3 дня",
    guarantee: "2 года",
  },
  luxury: {
    name: "Циклёвка Люкс",
    price: "1 700",
    unit: "₽/м²",
    description: "Максимальная прочность покрытия",
    longDescription:
      "Тариф «Люкс» — для тех, кто ценит максимальную прочность и долговечность покрытия. Мы используем двухкомпонентный лак повышенной прочности, который идеально подходит для прихожих, коридоров и других помещений с высокой проходимостью.",
    features: [
      "Циклёвка паркета барабанной машиной",
      "Шлифовка паркета в 3 этапа",
      "Шпаклёвка щелей и трещин",
      "Нанесение двухкомпонентного лака повышенной прочности (3 слоя)",
      "Межслойная шлифовка для идеального сцепления",
      "Уборка после работ",
    ],
    process: [
      "Осмотр паркета и оценка объёма работ",
      "Защита мебели и стен плёнкой",
      "Циклёвка — снятие старого покрытия",
      "Шлифовка в 3 этапа с уменьшением зернистости",
      "Шпаклёвка щелей специальным составом",
      "Нанесение первого слоя лака повышенной прочности",
      "Межслойная шлифовка",
      "Нанесение второго и третьего слоёв",
      "Финальная уборка помещения",
    ],
    duration: "2-3 дня",
    guarantee: "2 года",
  },
  eurolux: {
    name: "Циклёвка Евролюкс",
    price: "2 000",
    unit: "₽/м²",
    description: "Европейское качество",
    longDescription:
      "Тариф «Евролюкс» — это высший уровень обработки паркета. Помимо стандартной шлифовки, мы выполняем еврошлифовку плоскошлифовальным оборудованием, которое обеспечивает идеально ровную поверхность. Результат — безупречный внешний вид, достойный премиальных интерьеров.",
    features: [
      "Циклёвка паркета барабанной машиной",
      "Шлифовка паркета в 3 этапа",
      "Еврошлифовка плоскошлифовальным оборудованием",
      "Шпаклёвка щелей и трещин",
      "Нанесение двухкомпонентного лака повышенной прочности (3 слоя)",
      "Межслойная шлифовка для идеального сцепления",
      "Уборка после работ",
    ],
    process: [
      "Осмотр паркета и оценка объёма работ",
      "Защита мебели и стен плёнкой",
      "Циклёвка — снятие старого покрытия",
      "Шлифовка в 3 этапа с уменьшением зернистости",
      "Еврошлифовка для идеальной ровности",
      "Шпаклёвка щелей специальным составом",
      "Нанесение первого слоя лака повышенной прочности",
      "Межслойная шлифовка",
      "Нанесение второго и третьего слоёв",
      "Финальная уборка помещения",
    ],
    duration: "3-4 дня",
    guarantee: "2 года",
  },
  toning: {
    name: "Тонирование паркета",
    price: "2 700",
    unit: "₽/м²",
    description: "Изменение цвета паркета",
    longDescription:
      "Тонирование позволяет кардинально изменить цвет паркета без его замены. Мы используем профессиональные масла, которые глубоко проникают в древесину и обеспечивают равномерное окрашивание. Можно получить любой оттенок — от светлого до тёмного, под любой интерьер.",
    features: [
      "Циклёвка паркета барабанной машиной",
      "Шлифовка паркета в 3 этапа",
      "Еврошлифовка плоскошлифовальным оборудованием",
      "Шпаклёвка щелей и трещин",
      "Нанесение цветного масла выбранного оттенка",
      "Нанесение защитного слоя (лак или масло)",
      "Уборка после работ",
    ],
    process: [
      "Осмотр паркета и подбор цвета",
      "Защита мебели и стен плёнкой",
      "Циклёвка — снятие старого покрытия",
      "Шлифовка в 3 этапа с уменьшением зернистости",
      "Еврошлифовка для идеальной ровности",
      "Шпаклёвка щелей специальным составом",
      "Нанесение тонировочного масла",
      "Нанесение защитного слоя",
      "Финальная уборка помещения",
    ],
    duration: "3-4 дня",
    guarantee: "2 года",
  },
  laminate: {
    name: "Укладка ламината",
    price: "от 500",
    unit: "₽/м²",
    description: "Профессиональная укладка ламината",
    longDescription:
      "Профессиональная укладка ламината любой сложности — от простых комнат до сложных помещений с большим количеством углов и переходов. Мы работаем с ламинатом любых производителей и обеспечиваем качественную подготовку основания для долговечного результата.",
    features: [
      "Подготовка и выравнивание основания",
      "Укладка пароизоляционной плёнки",
      "Укладка подложки",
      "Профессиональная укладка ламината",
      "Установка порожков и переходов",
      "Уборка после работ",
    ],
    process: [
      "Осмотр основания и замер помещения",
      "Подготовка основания при необходимости",
      "Укладка пароизоляции",
      "Укладка подложки",
      "Укладка ламината выбранным способом",
      "Установка порожков",
      "Финальная уборка помещения",
    ],
    duration: "1-2 дня",
    guarantee: "1 год",
  },
  plinth: {
    name: "Установка плинтусов",
    price: "от 500",
    unit: "₽/м.п.",
    description: "Монтаж напольных плинтусов",
    longDescription:
      "Установка напольных плинтусов из любых материалов — дерево, МДФ, пластик, полиуретан. Мы аккуратно демонтируем старые плинтусы и установим новые с соблюдением всех технологий. Работа выполняется быстро и качественно.",
    features: [
      "Демонтаж старых плинтусов",
      "Подготовка поверхности стен",
      "Монтаж новых плинтусов",
      "Установка уголков и заглушек",
      "Работа с любыми материалами",
      "Уборка после работ",
    ],
    process: [
      "Осмотр и замер помещения",
      "Демонтаж старых плинтусов",
      "Подготовка стен при необходимости",
      "Нарезка плинтусов по размеру",
      "Монтаж плинтусов",
      "Установка уголков и заглушек",
      "Финальная уборка",
    ],
    duration: "1 день",
    guarantee: "1 год",
  },
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold">
              Услуга не найдена
            </h1>
            <Link to="/services">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="h-4 w-4" />
                Вернуться к услугам
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Все услуги
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              {service.name}
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Цена</p>
                  <p className="font-semibold">
                    {service.price} {service.unit}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Срок</p>
                  <p className="font-semibold">{service.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Гарантия</p>
                  <p className="font-semibold">{service.guarantee}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Описание услуги
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>

              <h3 className="font-display text-xl font-semibold mt-8 mb-4">
                Что входит в стоимость
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Этапы работы
              </h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Готовы заказать {service.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
              Оставьте заявку, и мы перезвоним вам в течение 15 минут для
              уточнения деталей
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Оставить заявку
              </Button>
              <a href="tel:+79991234567">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +7 (999) 123-45-67
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />
    </Layout>
  );
};

export default ServiceDetail;
