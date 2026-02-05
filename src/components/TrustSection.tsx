import { motion } from "framer-motion";
import { Shield, Eye, Zap, Award } from "lucide-react";
import { MediaCarousel } from "./MediaCarousel";

const pillars = [
  {
    icon: Shield,
    title: "Segurança",
    description:
      "Gestão de riscos rigorosa e compliance com as melhores práticas do mercado financeiro global.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Relatórios detalhados, comunicação clara e total visibilidade sobre seus investimentos.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description:
      "Decisões rápidas baseadas em dados, aproveitando as melhores oportunidades do mercado.",
  },
];

export const TrustSection = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        {/* Media Carousel */}
        <MediaCarousel />

        {/* Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm font-medium text-accent uppercase tracking-wider">
            Nossos Valores
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-4">
            Nossos Pilares
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-navy transition-all duration-500">
                <pillar.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-secondary/50 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Award className="w-12 h-12 text-accent" />
              <div>
                <h3 className="font-serif text-xl font-bold text-primary">
                  Certificações & Regulamentação
                </h3>
                <p className="font-sans text-muted-foreground">
                  Operamos sob supervisão da CVM e Banco Central do Brasil
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center px-6 border-r border-border">
                <p className="font-serif text-2xl font-bold text-primary">CVM</p>
                <p className="font-sans text-xs text-muted-foreground">Registrada</p>
              </div>
              <div className="text-center px-6 border-r border-border">
                <p className="font-serif text-2xl font-bold text-primary">ANBIMA</p>
                <p className="font-sans text-xs text-muted-foreground">Associada</p>
              </div>
              <div className="text-center px-6">
                <p className="font-serif text-2xl font-bold text-primary">ISO</p>
                <p className="font-sans text-xs text-muted-foreground">27001</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
