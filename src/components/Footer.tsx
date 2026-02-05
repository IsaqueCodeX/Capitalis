import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  servicos: [
    { name: "Gestão de Wealth", href: "#" },
    { name: "Planejamento Sucessório", href: "#" },
    { name: "Otimização Fiscal", href: "#" },
    { name: "Investimentos Offshore", href: "#" },
    { name: "Consultoria Patrimonial", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Nossa Equipe", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Imprensa", href: "#" },
    { name: "Contato", href: "#" },
  ],
  recursos: [
    { name: "Blog & Insights", href: "#" },
    { name: "Relatórios de Mercado", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Calculadoras", href: "#simulator" },
    { name: "FAQ", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Pronto para construir seu futuro financeiro?
              </h2>
              <p className="font-sans text-white/60">
                Agende uma reunião gratuita com nossos especialistas.
              </p>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-full hover:bg-gold-light transition-colors shadow-gold"
            >
              Agendar Reunião Gratuita
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-3xl font-bold tracking-tight">
              Capitalis
            </a>
            <p className="font-sans text-white/60 mt-4 mb-8 max-w-sm">
              Estratégias financeiras de elite para investidores que exigem 
              solidez e transparência. Construindo patrimônio desde 2009.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="font-sans text-white/80">+55 (11) 3500-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="font-sans text-white/80">contato@capitalis.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="font-sans text-white/80">
                  Av. Faria Lima, 3500 - São Paulo, SP
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-sans font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Recursos
            </h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-sm text-white/40 text-center md:text-left">
              © 2026 Capitalis Gestão de Patrimônio. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-sans text-sm text-white/40 hover:text-white/60 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="font-sans text-sm text-white/40 hover:text-white/60 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="font-sans text-xs text-white/30 leading-relaxed">
              <strong>Aviso Legal:</strong> A Capitalis Gestão de Patrimônio é uma empresa 
              devidamente registrada na CVM. Rentabilidades passadas não são garantia de 
              rentabilidades futuras. Todo investimento envolve riscos, incluindo a possível 
              perda do capital investido. Antes de investir, considere cuidadosamente os 
              objetivos de investimento, nível de experiência e apetite ao risco. As 
              informações contidas neste site são de caráter informativo e não constituem 
              oferta, solicitação ou recomendação de compra ou venda de qualquer instrumento 
              financeiro. Para informações completas, consulte nossos documentos oficiais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
