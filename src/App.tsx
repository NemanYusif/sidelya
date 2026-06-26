import { useEffect } from 'react';
import { useStore } from './store';
import { products } from './data';
import { translations } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import LocationMap from './components/LocationMap';
import Testimonials from './components/Testimonials';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { Instagram, Facebook, Sparkles, Phone, MapPin, CheckCircle } from 'lucide-react';
import { SHOP_PHONE } from './constants';

export default function App() {
  const { theme, language } = useStore();
  const t = translations[language];

  // Bootstrap theme setting on mount and change
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div 
      className="min-h-screen flex flex-col transition-colors duration-300 antialiased
        bg-[#F5F5F4] text-stone-900
        dark:bg-[#111827] dark:text-neutral-50"
      id="app-root-container"
    >
      {/* Navigation Header */}
      <Header />

      {/* Hero Welcome Block */}
      <main className="flex-1" id="main-content-flow">
        <Hero />

        {/* Brand Core Strengths / trust banners */}
        <section 
          className="border-y transition-colors duration-300 py-10 bg-white border-stone-200 dark:bg-stone-900/10 dark:border-neutral-850"
          id="trust-features-strip"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4" id="trust-feat-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-neutral-50 dark:bg-white dark:text-neutral-950 transition-colors">
                <Sparkles className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  {t.qualityGuarantee}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                  {t.qualityDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4" id="trust-feat-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-neutral-50 dark:bg-white dark:text-neutral-950 transition-colors">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  {language === 'az' ? 'Sənətkar Əl İşləri' : language === 'en' ? 'Artisan Handcraft' : 'Ручная работа'}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                  {language === 'az' 
                    ? 'Hər məhsulumuz dahi ustalar tərəfindən sevgi ilə bəzədilir.' 
                    : language === 'en' 
                      ? 'Every sweet is meticulously decorated by hand with absolute love.' 
                      : 'Каждое лакомство бережно украшается нашими кондитерами вручную.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4" id="trust-feat-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-neutral-50 dark:bg-white dark:text-neutral-950 transition-colors">
                <Phone className="h-5 w-5 text-sky-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  {language === 'az' ? 'Sürətli Sifariş' : language === 'en' ? 'Direct WhatsApp Ordering' : 'Быстрый WhatsApp заказ'}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                  {language === 'az' 
                    ? 'Səbəti doldurun və bir toxunuşla birbaşa mağazaya göndərin.' 
                    : language === 'en' 
                      ? 'Assemble your perfect selection and send the request via one tap.' 
                      : 'Выберите любимые вкусы и отправьте готовый заказ в один клик.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Digital Sweet Menu Section */}
        <section 
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 font-sans scroll-mt-20"
          id="products-section"
        >
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16" id="products-heading-group">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl" id="products-section-title">
              {language === 'az' ? 'Şirniyyat Menyumuz' : language === 'en' ? 'Our Sweet Menu' : 'Наше Сладкое Меню'}
            </h2>
            <div className="h-0.5 w-16 bg-neutral-950 dark:bg-white mx-auto mt-5" />
            <p className="mt-4 text-sm font-light text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto" id="products-section-desc">
              {language === 'az' 
                ? 'İstədiyiniz məhsulu seçin, miqdarını müəyyən edin və səbətinizə əlavə edərək sifarişinizi tamamlayın.' 
                : language === 'en' 
                  ? 'Select your favorite delicacies, specify quantities, and add them to your cart to prepare your WhatsApp order.' 
                  : 'Выберите любимые десерты, укажите их количество и добавьте в корзину для оформления WhatsApp заказа.'}
            </p>
          </div>

          {/* Clean Grid display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10" id="products-grid-container">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        </section>

        {/* Testimonials Review Strip */}
        <div className="border-t border-neutral-200/50 dark:border-neutral-900 bg-neutral-100/30 dark:bg-neutral-950/20" id="testimonials-strip">
          <Testimonials />
        </div>

        {/* Map & Store Info section */}
        <div className="border-t border-neutral-200/40 dark:border-neutral-900 bg-neutral-50/20 dark:bg-[#080c10]" id="location-map-strip">
          <LocationMap />
        </div>
      </main>

      {/* Global Compact Footer */}
      <footer 
        className="mt-auto border-t transition-colors duration-300 bg-stone-900 border-stone-800 text-stone-100"
        id="app-footer"
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" id="footer-inner-layout">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start" id="footer-links-grid">
            
            {/* Branding col */}
            <div className="md:col-span-5 space-y-3.5" id="footer-branding-col">
              <div className="flex items-center gap-2">
                <span className="font-sans text-base font-bold tracking-wider uppercase text-white">{t.shopName}</span>
              </div>
              <p className="text-xs font-light leading-relaxed text-stone-400 max-w-sm uppercase tracking-wide">
                {language === 'az' 
                  ? 'Bakıda premium şirniyyat sənətkarı. Hər məhsul sənət əsəridir.' 
                  : language === 'en' 
                    ? 'Premium pastry artisans in Baku. Each item is a masterpiece of flavor.' 
                    : 'Кондитеры премиум-класса в Баку. Каждое изделие — кулинарный шедевр.'}
              </p>
            </div>

            {/* Contact quick column */}
            <div className="md:col-span-4 space-y-3" id="footer-contact-col">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                {language === 'az' ? 'Ünvan & Əlaqə' : language === 'en' ? 'Address & Contact' : 'Адрес и Контакты'}
              </h4>
              <ul className="space-y-2.5 text-xs font-light text-stone-300" id="footer-contact-list">
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-stone-500" />
                  <span>{t.addressVal}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-stone-500" />
                  <a href={`tel:+${SHOP_PHONE}`} className="hover:text-white transition-colors">
                    {t.phoneVal}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social column */}
            <div className="md:col-span-3 space-y-3" id="footer-social-col">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                {t.socialFollow}
              </h4>
              <div className="flex gap-2.5" id="footer-social-links">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 text-stone-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  aria-label="Instagram handle"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 text-stone-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  aria-label="Facebook page"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          <div 
            className="mt-10 pt-5 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4" 
            id="footer-bottom-row"
          >
            <span className="text-[10px] font-light text-stone-500 uppercase tracking-wider" id="copyright-text">
              {t.footerCopy}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase" id="credits-label">
              Baku, Azerbaijan
            </span>
          </div>
        </div>
      </footer>

      {/* Slide-out Cart Drawer sidebar */}
      <CartDrawer />

      {/* Toast Notification Bar */}
      <Toast />
    </div>
  );
}
