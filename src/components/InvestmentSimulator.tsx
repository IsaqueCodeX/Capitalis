import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, PiggyBank, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const InvestmentSimulator = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(2000);
  const [years, setYears] = useState(10);
  const [isCalculating, setIsCalculating] = useState(false);
  const [debouncedContribution, setDebouncedContribution] = useState(2000);
  const [debouncedYears, setDebouncedYears] = useState(10);

  // Handle input changes with debounce for "Labor Illusion"
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      setDebouncedContribution(monthlyContribution);
      setDebouncedYears(years);
      setIsCalculating(false);
    }, 600); // 600ms delay for "Labor Illusion"

    return () => clearTimeout(timer);
  }, [monthlyContribution, years]);

  // Investment calculation logic (uses debounced values)
  const calculations = useMemo(() => {
    const months = debouncedYears * 12;
    const capitalissRate = 0.018; // 1.8% monthly (approx 24% annual)
    const savingsRate = 0.006; // 0.6% monthly (approx 7.5% annual)
    const mattressRate = 0; // 0% - just saving cash

    let capitalisTotal = 0;
    let savingsTotal = 0;
    const mattressTotal = debouncedContribution * months;

    // Compound interest calculation
    for (let i = 0; i < months; i++) {
      capitalisTotal = (capitalisTotal + debouncedContribution) * (1 + capitalissRate);
      savingsTotal = (savingsTotal + debouncedContribution) * (1 + savingsRate);
    }

    const totalInvested = debouncedContribution * months;
    const capitalisProfitt = capitalisTotal - totalInvested;
    const savingsProfit = savingsTotal - totalInvested;

    return {
      capitalisTotal: Math.round(capitalisTotal),
      savingsTotal: Math.round(savingsTotal),
      mattressTotal: Math.round(mattressTotal),
      totalInvested: Math.round(totalInvested),
      capitalisProfitt: Math.round(capitalisProfitt),
      savingsProfit: Math.round(savingsProfit),
      advantage: Math.round(capitalisTotal - savingsTotal),
    };
  }, [debouncedContribution, debouncedYears]);

  // Format currency in BRL
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleContributionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/\D/g, ""));
    setMonthlyContribution(Math.min(Math.max(value, 0), 1000000));
  };

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setYears(Math.min(Math.max(value, 1), 50));
  };

  return (
    <section id="simulator" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm font-medium text-gold uppercase tracking-wider">
            Simulador
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-6">
            Simule Seu Futuro
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a diferença entre guardar dinheiro e investir com estratégia.
            Use os controles abaixo para simular seu cenário.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary/50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy">
                  Configure sua simulação
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Ajuste os valores conforme sua realidade
                </p>
              </div>
            </div>

            {/* Monthly Contribution Slider */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <label className="font-sans font-medium text-foreground">
                  Aporte Mensal (R$)
                </label>
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={handleContributionChange}
                  className="font-serif text-xl font-bold text-navy bg-white border border-border rounded-md px-3 py-1 w-32 text-right focus:outline-none focus:ring-2 focus:ring-gold/50"
                  min="0"
                />
              </div>
              <Slider
                value={[monthlyContribution]}
                onValueChange={(value) => setMonthlyContribution(value[0])}
                min={500}
                max={50000}
                step={500}
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                <span className="font-sans text-xs text-muted-foreground">R$ 500</span>
                <span className="font-sans text-xs text-muted-foreground">R$ 50.000</span>
              </div>
            </div>

            {/* Years Slider */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="font-sans font-medium text-foreground">
                  Tempo (Anos)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={handleYearsChange}
                  className="font-serif text-xl font-bold text-navy bg-white border border-border rounded-md px-3 py-1 w-24 text-right focus:outline-none focus:ring-2 focus:ring-gold/50"
                  min="1"
                  max="50"
                />
              </div>
              <Slider
                value={[years]}
                onValueChange={(value) => setYears(value[0])}
                min={1}
                max={30}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                <span className="font-sans text-xs text-muted-foreground">1 ano</span>
                <span className="font-sans text-xs text-muted-foreground">30 anos</span>
              </div>
            </div>

            {/* Total Invested */}
            <div className="mt-8 p-4 bg-white rounded-xl border border-border">
              <p className="font-sans text-sm text-muted-foreground mb-1">
                Total que você investirá:
              </p>
              <div className="font-serif text-xl font-bold text-navy flex items-center gap-2">
                {isCalculating ? (
                  <span className="animate-pulse bg-gray-200 h-7 w-32 rounded block" />
                ) : (
                  formatCurrency(debouncedContribution * debouncedYears * 12)
                )}
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Capitalis Result */}
            <div className="bg-navy rounded-2xl p-6 relative overflow-hidden group hover:shadow-navy transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl opacity-50" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-white/70">Investir com</p>
                    <p className="font-serif font-bold text-white">Capitalis</p>
                  </div>
                </div>

                {isCalculating ? (
                  <div className="my-4 space-y-2">
                    <div className="h-12 w-3/4 bg-white/10 rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse" />
                  </div>
                ) : (
                  <>
                    <p className="font-serif text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-300">
                      {formatCurrency(calculations.capitalisTotal)}
                    </p>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold" />
                      <span className="font-sans text-sm text-gold">
                        +{formatCurrency(calculations.capitalisProfitt)} de lucro
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Savings Result */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-card opacity-80">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <PiggyBank className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-sans text-sm text-muted-foreground">Deixar na</p>
                  <p className="font-serif font-bold text-foreground">Poupança/CDI</p>
                </div>
              </div>

              {isCalculating ? (
                <div className="h-8 w-1/2 bg-gray-100 rounded animate-pulse" />
              ) : (
                <p className="font-serif text-3xl font-bold text-foreground mb-2">
                  {formatCurrency(calculations.savingsTotal)}
                </p>
              )}
            </div>

            {/* Advantage highlight - Primary Focus */}
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold to-gold-light rounded-2xl p-8 text-center shadow-gold transform transition-all duration-500 hover:scale-[1.02]"
            >
              <p className="font-sans text-sm text-navy/80 font-semibold mb-2 uppercase tracking-wide">
                Você deixa de ganhar
              </p>
              {isCalculating ? (
                <div className="h-10 w-1/2 mx-auto bg-navy/10 rounded animate-pulse" />
              ) : (
                <p className="font-serif text-4xl md:text-5xl font-bold text-navy">
                  {formatCurrency(calculations.advantage)}
                </p>
              )}
              <p className="font-sans text-xs text-navy/60 mt-2">
                Se não investir com a Capitalis
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
