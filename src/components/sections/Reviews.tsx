import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Рамазан",
    date: "17 декабря 2025",
    text: "Мастера своего дела, пунктуальные, очень вежливые в общении. Помогли перенести вещи чтобы освободить пол. Отциклевали быстро и очень качественно и хорошо покрыли лаком в три слоя. После себя убрали весь мусор. Прозрачные цены которые не меняются в процессе работ.",
    initial: "Р",
  },
  {
    name: "Анастасия Мазур",
    date: "7 декабря 2025",
    text: "Очень вежливые и хорошие мастера, приехали вовремя, отреставрировали и покрасили паркет, вся работа выполнена на высоком уровне! Рекомендую!",
    initial: "А",
  },
  {
    name: "Анна",
    date: "9 сентября 2025",
    text: "Договоренности соблюдены, вышли в срок и закончили за 1 день 3 комнаты, общая площадь 45 м² — циклевка и нанесение лака. Довольна результатом, все четко, быстро и качественно. Рекомендую!",
    initial: "А",
  },
  {
    name: "Ирина",
    date: "26 августа 2025",
    text: "Отличные ребята. Сделали свою работу быстро и четко. Прекрасный результат! Рада, что набрала их номер. Однозначно рекомендую.",
    initial: "И",
  },
  {
    name: "Наби",
    date: "27 декабря 2025",
    text: "Профессионалы своего дела, в краткие сроки приехали сделали, теперь новый год с новым полом, рекомендую! Ожидания были другие, но ребята сделали ещё лучше ожидаемого!",
    initial: "Н",
  },
  {
    name: "Анна Родькина",
    date: "24 августа 2025",
    text: "Работа выполнена качественно. Очень понравился тот факт, что итоговая цена осталась такой, как и обговаривали. За 7 часов работа была выполнена, у меня 18 м². Также хочу отметить, что в работе использовались качественные материалы.",
    initial: "А",
  },
  {
    name: "Шубина Светлана",
    date: "24 августа 2025",
    text: "Работой довольна, договорились быстро! Сделано все добросовестно, огромное спасибо Аркадию который и выполнил всю работу!",
    initial: "Ш",
  },
  {
    name: "Кирилл Шварцманн",
    date: "21 августа 2025",
    text: "Добросовестно сделанная работа. Сделали все быстро, качественно и на совесть. Мастера своего дела!",
    initial: "К",
  },
  {
    name: "Ольга",
    date: "21 августа 2025",
    text: "Прекрасная работа! Мастера своего дела. Вся работа сделана на 5+ с любовью! Паркет как новый! Спасибо!",
    initial: "О",
  },
];

export function Reviews() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Отзывы клиентов
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Нам доверяют
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Реальные отзывы наших клиентов с Авито — более 100 выполненных заказов
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-lg font-semibold">5.0</span>
            <span className="text-muted-foreground ml-1">на Авито</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
              
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {review.text}
              </p>
              
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-xs text-primary font-medium">
                  ✓ Сделка состоялась · Циклевка паркета
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://www.avito.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Смотреть все отзывы на Авито
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
