import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

// Media logos with placeholder SVG-style representations
const mediaLogos = [
  { name: "Forbes", logo: "FORBES" },
  { name: "Valor Econômico", logo: "VALOR" },
  { name: "Bloomberg", logo: "Bloomberg" },
  { name: "InfoMoney", logo: "InfoMoney" },
  { name: "Exame", logo: "EXAME" },
  { name: "CNN Brasil", logo: "CNN" },
  { name: "Reuters", logo: "Reuters" },
];

export const MediaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      skipSnaps: false,
      dragFree: true,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <span className="font-sans text-sm font-medium text-accent uppercase tracking-wider">
        Reconhecimento
      </span>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-4 mb-12">
        Destaque na Mídia
      </h2>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Gradient overlays for seamless scroll effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {/* Duplicate logos for seamless infinite scroll */}
            {[...mediaLogos, ...mediaLogos].map((media, index) => (
              <div
                key={`${media.name}-${index}`}
                className="flex-[0_0_auto] min-w-0 px-6 md:px-10"
              >
                <div className="group cursor-pointer">
                  <div className="h-16 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                    <span 
                      className="font-serif text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-500 whitespace-nowrap"
                      style={{ 
                        letterSpacing: media.name === "Forbes" ? "0.15em" : "0.05em" 
                      }}
                    >
                      {media.logo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots/indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {mediaLogos.slice(0, 5).map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-2 h-2 rounded-full bg-muted hover:bg-accent transition-colors duration-300"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
