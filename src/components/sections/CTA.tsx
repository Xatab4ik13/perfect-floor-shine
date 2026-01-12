import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-wood relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Готовы вернуть красоту вашему паркету?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Закажите бесплатный выезд мастера для оценки состояния пола и
            расчёта стоимости работ
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" onClick={scrollToContact}>
              Заказать бесплатный замер
              <ArrowRight className="h-5 w-5" />
            </Button>
            <a href="tel:+79991234567">
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Phone className="h-5 w-5" />
                Позвонить сейчас
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
