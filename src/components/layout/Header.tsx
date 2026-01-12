import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Отзывы", href: "/#reviews" },
  { label: "Контакты", href: "/#contact" },
];

// Pages with dark hero sections where transparent header works
const darkHeroPages = ["/"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if current page has a dark hero section
  const hasDarkHero = darkHeroPages.includes(location.pathname);
  
  // On pages without dark hero, always show solid header
  const showSolidHeader = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidHeader
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`font-display text-2xl font-bold transition-colors duration-300 ${
              showSolidHeader ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Perfect<span className="text-gradient">Floor</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                showSolidHeader
                  ? "text-foreground/80"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end gap-0.5">
            <a
              href="tel:+79339260909"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                showSolidHeader ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <Phone className="h-4 w-4" />
              +7 933 926-09-09
            </a>
            <a
              href="tel:+79111670166"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                showSolidHeader ? "text-foreground/80" : "text-primary-foreground/80"
              }`}
            >
              +7 911 167-01-66
            </a>
          </div>
          <Button variant={showSolidHeader ? "default" : "hero"} size="lg">
            Заказать звонок
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={`h-6 w-6 ${
                showSolidHeader ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${
                showSolidHeader ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary py-2 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="space-y-2 py-2">
                <a
                  href="tel:+79339260909"
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <Phone className="h-4 w-4" />
                  +7 933 926-09-09
                </a>
                <a
                  href="tel:+79111670166"
                  className="flex items-center gap-2 text-foreground/80 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  +7 911 167-01-66
                </a>
              </div>
              <Button variant="hero" size="lg" className="mt-2">
                Заказать звонок
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
