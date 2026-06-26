import { useStore } from '../store';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  const language = useStore((state) => state.language);
  const t = translations[language];

  const scrollToMenu = () => {
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 lg:px-8 font-sans"
      id="hero-section"
    >
      <div 
        className="bg-[#3A3A3A] dark:bg-stone-900 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-lg overflow-hidden relative"
        id="hero-banner-inner"
      >
        {/* Background decorative soft blur */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

        <div className="max-w-2xl relative z-10 text-center md:text-left" id="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[10px] font-semibold uppercase tracking-widest mb-6
              bg-white/10 border-white/20 text-white backdrop-blur-sm"
            id="hero-badge"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            {t.qualityGuarantee}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight uppercase"
            id="hero-title"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-stone-300 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-xl"
            id="hero-desc"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            id="hero-actions"
          >
            <button
              onClick={scrollToMenu}
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-white text-[#3A3A3A] px-6 py-3 text-xs font-bold tracking-wider uppercase hover:bg-stone-100 transition-all duration-300 cursor-pointer font-sans shadow-sm"
              id="hero-cta-btn"
            >
              {t.viewMenuBtn}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#3A3A3A]" />
            </button>

            <a
              href="tel:+994551234567"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 text-xs font-bold tracking-wider uppercase text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 font-sans"
              id="hero-contact-link"
            >
              {t.phoneVal}
            </a>
          </motion.div>
        </div>

        {/* Decorative elements - nested circles exactly matching the Sleek design */}
        <div 
          className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shrink-0 hidden md:flex relative z-10"
          id="hero-decor-circles"
        >
          <div className="w-36 h-36 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/5 rounded-full border border-white/5 flex items-center justify-center">
              <span className="text-white/20 text-xs tracking-widest uppercase font-mono">SWEET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
