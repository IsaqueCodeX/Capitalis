import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Navigation links in Portuguese
const navLinks = [
  { name: "Soluções", href: "#solucoes" },
  { name: "Sobre", href: "#sobre" },
  { name: "Insights", href: "#" }, // Changed to # to prevent jump, handled by click
  { name: "Área do Cliente", href: "#" }, // Changed to #
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    if (name === "Insights" || name === "Área do Cliente") {
      e.preventDefault();
      toast.info("Em breve", {
        description: "Esta funcionalidade estará disponível no lançamento oficial.",
        duration: 3000,
      });
      return;
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass py-3 shadow-lg"
          : "bg-transparent py-6"
        }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-serif text-2xl md:text-3xl font-bold text-navy tracking-tight"
          whileHover={{ scale: 1.02 }}
        >
          Capitalis
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative font-sans text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onClick={(e) => handleNavClick(e, link.name, link.href)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button variant="gold" size="xl">
              Agendar Reunião
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-lg font-medium text-foreground/80 hover:text-foreground py-2"
                  onClick={(e) => handleNavClick(e, link.name, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="gold" size="xl" className="mt-4">
                Agendar Reunião
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
