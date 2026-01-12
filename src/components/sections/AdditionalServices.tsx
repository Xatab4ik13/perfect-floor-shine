import { motion } from "framer-motion";
import { Layers, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "laminate",
    icon: Layers,
    title: "Укладка ламината",
    price: "от 500",
    unit: "₽/м²",
    description: "Профессиональная укладка ламината любой сложности с подготовкой основания",
  },
  {
    id: "plinth",
    icon: Square,
    title: "Установка плинтусов",
    price: "от 500",
    unit: "₽/м.п.",
    description: "Монтаж напольных плинтусов из любых материалов: дерево, МДФ, пластик",
  },
];

export function AdditionalServices() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Дополнительно
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Другие услуги
          </h2>
          <p className="mt-4 text-muted-foreground">
            Полный комплекс работ по устройству и ремонту напольных покрытий
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-wood flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {service.title}
                  </h3>
                  <div className="mt-1">
                    <span className="font-display text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {service.unit}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground flex-1">
                {service.description}
              </p>
              <Link to={`/services/${service.id}`} className="mt-6">
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
