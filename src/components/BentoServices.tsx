import { motion, type Variants } from "framer-motion";
import { Shield, Scale, Globe, FileText } from "lucide-react";
import wealthImg from "@/assets/wealth-management.jpg";
import offshoreImg from "@/assets/offshore.jpg";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const BentoServices = () => {
  return (
    <section id="solucoes" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm font-medium text-gold uppercase tracking-wider">
            Soluções
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-6">
            Serviços Personalizados
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços financeiros para
            proteger e multiplicar seu patrimônio.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Large Card - Wealth Management */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden group min-h-[400px] card-hover cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${wealthImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent group-hover:via-navy/70 transition-colors duration-500" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-navy" />
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                Gestão de Wealth
              </h3>
              <p className="font-sans text-white/80 max-w-md group-hover:text-white transition-colors duration-300">
                Administração completa do seu patrimônio com estratégias
                personalizadas, rebalanceamento dinâmico e acompanhamento
                em tempo real.
              </p>
            </div>
          </motion.div>

          {/* Succession Planning */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-card card-hover group cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors duration-300">
              <Scale className="w-7 h-7 text-navy group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
              Planejamento Sucessório
            </h3>
            <p className="font-sans text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Estruturas legais inteligentes para proteger seu legado e
              garantir uma transição patrimonial tranquila para as próximas
              gerações.
            </p>
          </motion.div>

          {/* Tax Optimization */}
          <motion.div
            variants={itemVariants}
            className="bg-navy rounded-2xl p-8 shadow-navy card-hover group cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
              <FileText className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
              Otimização Fiscal
            </h3>
            <p className="font-sans text-white/70 group-hover:text-white transition-colors duration-300">
              Estratégias legais para minimizar sua carga tributária e
              maximizar a eficiência dos seus investimentos dentro da lei.
            </p>
          </motion.div>

          {/* Offshore Investments */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group min-h-[300px] card-hover cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${offshoreImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40 group-hover:via-navy/90 transition-colors duration-500" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-navy" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                Investimentos Offshore
              </h3>
              <p className="font-sans text-white/80 max-w-lg group-hover:text-white transition-colors duration-300">
                Diversificação internacional com acesso a mercados globais,
                proteção cambial e estruturas jurídicas em jurisdições sólidas.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
