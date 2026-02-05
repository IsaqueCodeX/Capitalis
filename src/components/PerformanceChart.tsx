import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample performance data comparing Capitalis vs Market
const performanceData = [
  { month: "Jan", capitalis: 100, market: 100 },
  { month: "Fev", capitalis: 103.5, market: 101.2 },
  { month: "Mar", capitalis: 108.2, market: 102.8 },
  { month: "Abr", capitalis: 106.8, market: 101.5 },
  { month: "Mai", capitalis: 112.4, market: 103.2 },
  { month: "Jun", capitalis: 118.1, market: 104.8 },
  { month: "Jul", capitalis: 122.5, market: 105.6 },
  { month: "Ago", capitalis: 128.3, market: 106.9 },
  { month: "Set", capitalis: 132.7, market: 107.8 },
  { month: "Out", capitalis: 138.4, market: 108.5 },
  { month: "Nov", capitalis: 145.2, market: 109.2 },
  { month: "Dez", capitalis: 152.8, market: 110.1 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { color: string; name: string; value: number }[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
        <p className="font-sans font-semibold text-navy mb-2">{label} 2025</p>
        {payload.map((entry, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-semibold text-foreground">
              R$ {(entry.value * 1000).toLocaleString("pt-BR")}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const PerformanceChart = () => {
  return (
    <section id="performance" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm font-medium text-gold uppercase tracking-wider">
            Performance
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-6">
            Resultados que Superam o Mercado
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparativo de rentabilidade entre nossa carteira gerenciada e
            investimentos tradicionais de renda fixa (CDI/Poupança).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-card"
        >
          {/* Chart Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-navy">
                Evolução de R$ 100.000 em 12 meses
              </h3>
              <p className="font-sans text-sm text-muted-foreground mt-1">
                Valores simulados baseados em rentabilidade histórica
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 rounded-full bg-chart-capitalis" />
                <span className="font-sans text-sm text-foreground">Carteira Capitalis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 rounded-full bg-chart-market" />
                <span className="font-sans text-sm text-muted-foreground">CDI/Poupança</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(214 32% 91%)"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(215 16% 47%)", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(215 16% 47%)", fontSize: 12 }}
                  tickFormatter={(value) => `R$ ${value}k`}
                  domain={[95, 160]}
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="capitalis"
                  name="Carteira Capitalis"
                  stroke="hsl(142 71% 45%)"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: "hsl(142 71% 45%)" }}
                />
                <Line
                  type="monotone"
                  dataKey="market"
                  name="CDI/Poupança"
                  stroke="hsl(215 16% 60%)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={{ r: 5, fill: "hsl(215 16% 60%)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart Footer Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
            <div className="text-center">
              <p className="font-serif text-2xl md:text-3xl font-bold text-chart-capitalis">
                +52.8%
              </p>
              <p className="font-sans text-sm text-muted-foreground">Rentabilidade Capitalis</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl md:text-3xl font-bold text-chart-market">
                +10.1%
              </p>
              <p className="font-sans text-sm text-muted-foreground">Rentabilidade CDI</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl md:text-3xl font-bold text-gold">
                5.2x
              </p>
              <p className="font-sans text-sm text-muted-foreground">Melhor que o CDI</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl md:text-3xl font-bold text-navy">
                R$ 52.8k
              </p>
              <p className="font-sans text-sm text-muted-foreground">Lucro em 12 meses</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
