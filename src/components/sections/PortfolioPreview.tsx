import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import work1 from "@/assets/portfolio/work-1.jpg";
import work4 from "@/assets/portfolio/work-4.jpg";
import work5 from "@/assets/portfolio/work-5.jpg";
import work10 from "@/assets/portfolio/work-10.jpg";

const portfolioItems = [
  { image: work1, title: "Квартира в ЖК", area: "45 м²" },
  { image: work4, title: "Лофт-пространство", area: "120 м²" },
  { image: work5, title: "Квартира в сталинке", area: "35 м²" },
  { image: work10, title: "Дизайнерский паркет", area: "60 м²" },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Портфолио
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Наши работы
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Посмотрите примеры реставрации паркета — от классических квартир
              до современных лофтов
            </p>
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="group">
              Все работы
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  {item.area}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
