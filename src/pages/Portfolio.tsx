import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";

import work1 from "@/assets/portfolio/work-1.jpg";
import work2 from "@/assets/portfolio/work-2.jpg";
import work3 from "@/assets/portfolio/work-3.jpg";
import work4 from "@/assets/portfolio/work-4.jpg";
import work5 from "@/assets/portfolio/work-5.jpg";
import work6 from "@/assets/portfolio/work-6.jpg";
import work7 from "@/assets/portfolio/work-7.jpg";
import work8 from "@/assets/portfolio/work-8.jpg";
import work9 from "@/assets/portfolio/work-9.jpg";
import work10 from "@/assets/portfolio/work-10.jpg";
import work11 from "@/assets/portfolio/work-11.jpg";
import work12 from "@/assets/portfolio/work-12.jpg";
import work13 from "@/assets/portfolio/work-13.jpg";
import work14 from "@/assets/portfolio/work-14.jpg";
import work15 from "@/assets/portfolio/work-15.jpg";

const portfolioItems = [
  {
    image: work1,
    title: "Квартира в ЖК",
    area: "45 м²",
    type: "Циклёвка Премиум",
  },
  {
    image: work2,
    title: "Квартира в хрущёвке",
    area: "28 м²",
    type: "Циклёвка Стандарт",
  },
  {
    image: work3,
    title: "Современный лофт",
    area: "80 м²",
    type: "Тонирование",
  },
  {
    image: work4,
    title: "Лофт-пространство",
    area: "120 м²",
    type: "Циклёвка Евролюкс",
  },
  {
    image: work5,
    title: "Квартира в сталинке",
    area: "35 м²",
    type: "Циклёвка Люкс",
  },
  {
    image: work6,
    title: "Квартира бизнес-класса",
    area: "65 м²",
    type: "Циклёвка Премиум",
  },
  {
    image: work7,
    title: "Загородный дом",
    area: "90 м²",
    type: "Циклёвка Евролюкс",
  },
  {
    image: work8,
    title: "Процесс тонирования",
    area: "50 м²",
    type: "Тонирование",
  },
  {
    image: work9,
    title: "Премиальная отделка",
    area: "40 м²",
    type: "Циклёвка Люкс",
  },
  {
    image: work10,
    title: "Дизайнерский паркет",
    area: "60 м²",
    type: "Реставрация художественного паркета",
  },
  {
    image: work11,
    title: "Паркет ёлочка в коридоре",
    area: "25 м²",
    type: "Циклёвка Премиум",
  },
  {
    image: work12,
    title: "3D-паркет с оптической иллюзией",
    area: "18 м²",
    type: "Укладка художественного паркета",
  },
  {
    image: work13,
    title: "Тёмный паркет в квартире",
    area: "55 м²",
    type: "Тонирование",
  },
  {
    image: work14,
    title: "Модульный паркет ромбами",
    area: "30 м²",
    type: "Циклёвка Евролюкс",
  },
  {
    image: work15,
    title: "Сцена концертного зала",
    area: "100 м²",
    type: "Циклёвка Стандарт",
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Портфолио | PerfectFloor — Примеры работ по циклёвке паркета";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Смотрите примеры наших работ: циклёвка паркета в квартирах, загородных домах и офисах Москвы. Более 500 выполненных проектов.');
    }
  }, []);

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
              Наши работы
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
              Портфолио
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Посмотрите примеры наших работ — от классических квартир до
              современных лофтов и загородных домов
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-gold text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {item.type}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    Площадь: {item.area}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-wood-dark/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={portfolioItems[selectedImage].image}
              alt={portfolioItems[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-primary-foreground">
              <h3 className="font-display text-xl font-semibold">
                {portfolioItems[selectedImage].title}
              </h3>
              <p className="text-primary-foreground/70 mt-1">
                {portfolioItems[selectedImage].type} •{" "}
                {portfolioItems[selectedImage].area}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
