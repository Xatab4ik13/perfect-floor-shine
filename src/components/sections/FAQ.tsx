import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько времени занимает циклёвка паркета?",
    answer:
      "Время работы зависит от площади и состояния паркета. В среднем, для квартиры площадью 50 м² требуется 2-3 рабочих дня. Мы всегда сообщаем точные сроки после осмотра.",
  },
  {
    question: "Можно ли находиться в квартире во время работ?",
    answer:
      "Мы рекомендуем на время основных работ покинуть помещение. Наше оборудование оснащено пылесборниками, но для комфорта лучше переехать на 2-3 дня. После нанесения лака нужно подождать 24-48 часов для полного высыхания.",
  },
  {
    question: "Какой лак лучше выбрать?",
    answer:
      "Выбор зависит от проходимости помещения. Для жилых комнат подойдёт однокомпонентный лак (Стандарт). Для прихожих и кухонь рекомендуем двухкомпонентный лак повышенной прочности (Люкс или Евролюкс).",
  },
  {
    question: "Что делать со старым лаком и царапинами?",
    answer:
      "Циклёвка полностью снимает старое покрытие вместе со всеми царапинами, пятнами и неровностями. После обработки паркет выглядит как новый.",
  },
  {
    question: "Даёте ли вы гарантию на работу?",
    answer:
      "Да, мы предоставляем гарантию 2 года на все виды работ. В течение гарантийного срока устраним любые дефекты бесплатно.",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "Оплата производится после завершения работ и вашей приёмки. Возможен как наличный, так и безналичный расчёт. Предоплата не требуется.",
  },
  {
    question: "Выезжаете ли вы в Московскую область?",
    answer:
      "Да, мы работаем по всей Москве и Московской области. Выезд замерщика бесплатный в пределах МКАД, за МКАД — по договорённости.",
  },
  {
    question: "Можно ли изменить цвет паркета?",
    answer:
      "Да, с помощью тонирования можно изменить цвет паркета. Мы используем профессиональные масла и морилки, которые позволяют получить любой оттенок — от светлого до тёмного.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Частые вопросы
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ответы на популярные вопросы о циклёвке паркета
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display text-lg font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
