import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WealthCard } from "@/components/WealthCard";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "R$ 2.4B", label: "Sob Gestão" },
  { value: "847+", label: "Famílias Atendidas" },
];

const MobileStatsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, containScroll: "trimSnaps" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="overflow-hidden px-4" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {/* Duplicate array for infinite look if needed, but 'loop: true' handles it if content is wide enough. 
            However, with few items, explicit duplication is safer for seamless loop. */}
        {[...stats, ...stats, ...stats].map((stat, index) => (
          <div key={index} className="flex-[0_0_45%] min-w-0 pr-6">
            <div className="text-left border-l-2 border-gold/30 pl-4 my-2">
              <p className="font-serif text-3xl font-bold text-navy whitespace-nowrap">{stat.value}</p>
              <p className="font-sans text-sm text-muted-foreground whitespace-nowrap">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center overflow-hidden">
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
      <div className="relative container-custom pt-32 pb-20 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 min-w-0">
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
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6 break-words hyphens-auto">
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
                {/* Desktop View (Static) */}
                <div className="hidden md:flex items-center gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="font-serif text-3xl font-bold text-navy">{stat.value}</p>
                        <p className="font-sans text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                      {index < stats.length - 1 && (
                        <div className="w-px h-12 bg-border block" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile View (Carousel) */}
                <div className="md:hidden -mx-4">
                  <MobileStatsCarousel />
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
