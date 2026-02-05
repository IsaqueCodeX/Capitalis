import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WealthCard } from "@/components/WealthCard";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="font-sans text-sm text-navy/70">
                  Gestão de Patrimônio de Elite
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                A Ciência da{" "}
                <span className="text-gradient-gold">Multiplicação</span>{" "}
                de Patrimônio.
              </h1>

              {/* Subheadline */}
              <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Estratégias financeiras de elite para investidores que exigem 
                solidez e transparência. Construa riqueza geracional com quem 
                entende o mercado.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="gold" size="xl" className="group">
                    Análise de Portfólio Gratuita
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="navyOutline" size="xl">
                    Conheça Nossos Serviços
                  </Button>
                </motion.div>
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 pt-8 border-t border-border"
              >
                <div className="flex flex-wrap items-center gap-8">
                  <div className="text-center">
                    <p className="font-serif text-3xl font-bold text-navy">15+</p>
                    <p className="font-sans text-sm text-muted-foreground">Anos de Experiência</p>
                  </div>
                  <div className="w-px h-12 bg-border hidden sm:block" />
                  <div className="text-center">
                    <p className="font-serif text-3xl font-bold text-navy">R$ 2.4B</p>
                    <p className="font-sans text-sm text-muted-foreground">Sob Gestão</p>
                  </div>
                  <div className="w-px h-12 bg-border hidden sm:block" />
                  <div className="text-center">
                    <p className="font-serif text-3xl font-bold text-navy">847+</p>
                    <p className="font-sans text-sm text-muted-foreground">Famílias Atendidas</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Wealth Card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <WealthCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById("performance")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
            Explorar
          </span>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
