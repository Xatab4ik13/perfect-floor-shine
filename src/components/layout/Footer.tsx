import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-wood-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold">
              Perfect<span className="text-gold">Floor</span>
            </Link>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              Профессиональная циклёвка и реставрация паркета в Москве и
              Московской области. Возвращаем красоту вашим полам с 2010 года.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link
                  to="/services/standard"
                  className="hover:text-gold transition-colors"
                >
                  Циклёвка Стандарт
                </Link>
              </li>
              <li>
                <Link
                  to="/services/premium"
                  className="hover:text-gold transition-colors"
                >
                  Циклёвка Премиум
                </Link>
              </li>
              <li>
                <Link
                  to="/services/luxury"
                  className="hover:text-gold transition-colors"
                >
                  Циклёвка Люкс
                </Link>
              </li>
              <li>
                <Link
                  to="/services/toning"
                  className="hover:text-gold transition-colors"
                >
                  Тонирование
                </Link>
              </li>
              <li>
                <Link
                  to="/services/laminate"
                  className="hover:text-gold transition-colors"
                >
                  Укладка ламината
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <div className="flex flex-col">
                  <a
                    href="tel:+79339260909"
                    className="hover:text-gold transition-colors"
                  >
                    +7 933 926-09-09
                  </a>
                  <a
                    href="tel:+79111670166"
                    className="hover:text-gold transition-colors"
                  >
                    +7 911 167-01-66
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <a
                  href="mailto:info@perfectfloor.ru"
                  className="hover:text-gold transition-colors"
                >
                  info@perfectfloor.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5" />
                <span>Москва и Московская область</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" />
                <span>Пн-Вс: 8:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Мы работаем</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex justify-between">
                <span>Понедельник - Пятница</span>
                <span>8:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Воскресенье</span>
                <span>10:00 - 18:00</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-primary-foreground/50">
              Бесплатный выезд замерщика по всей Москве и МО
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 PerfectFloor. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
