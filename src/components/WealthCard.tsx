import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Award } from "lucide-react";

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (end - startValue) * easeOutQuart;
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return { count, startCounter: () => setHasStarted(true) };
};

export const WealthCard = () => {
  const yieldCounter = useCounter(12.5, 2500);
  const portfolioCounter = useCounter(847, 2500);
  const assetsCounter = useCounter(2.4, 2500);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      onViewportEnter={() => {
        yieldCounter.startCounter();
        portfolioCounter.startCounter();
        assetsCounter.startCounter();
      }}
      className="relative"
    >
      {/* Main Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative bg-navy rounded-2xl p-8 shadow-2xl overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-gold/80 font-sans text-sm font-medium tracking-wider uppercase">
                Carteira Premium
              </span>
            </div>
            <Award className="w-6 h-6 text-gold" />
          </div>

          {/* Main Stat */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <motion.span
                className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                +{yieldCounter.count.toFixed(1)}%
              </motion.span>
              <TrendingUp className="w-8 h-8 text-chart-capitalis" />
            </div>
            <p className="text-primary-foreground/60 font-sans text-sm mt-2">
              Rendimento anualizado 2025
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-foreground/5 rounded-lg p-4">
              <p className="text-primary-foreground/50 font-sans text-xs uppercase tracking-wider mb-1">
                Clientes Ativos
              </p>
              <p className="text-primary-foreground font-serif text-2xl font-bold">
                {Math.round(portfolioCounter.count)}+
              </p>
            </div>
            <div className="bg-primary-foreground/5 rounded-lg p-4">
              <p className="text-primary-foreground/50 font-sans text-xs uppercase tracking-wider mb-1">
                Sob Gestão
              </p>
              <p className="text-primary-foreground font-serif text-2xl font-bold">
                R$ {assetsCounter.count.toFixed(1)}B
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="absolute -top-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full shadow-gold font-sans font-semibold text-sm"
      >
        TOP 1% Brasil
      </motion.div>
    </motion.div>
  );
};
