import { useStore } from '../store';
import { translations } from '../translations';
import { ShoppingBag } from 'lucide-react';
import { Language } from '../types';

export default function Header() {
  const { language, cart, isCartOpen, setLanguage, setCartOpen } = useStore();
  const t = translations[language];

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header
      className="sticky top-0 z-40 w-full border-b backdrop-blur-md transition-all duration-300 h-20 flex items-center
        bg-white border-stone-200 text-stone-900
        dark:bg-[#111827] dark:border-neutral-800 dark:text-neutral-50"
      id="main-header"
    >
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3" id="header-logo-container">
          <div className="w-8 h-8 bg-[#3A3A3A] dark:bg-stone-200 rounded flex items-center justify-center text-white dark:text-stone-900 font-bold text-lg transition-colors" id="logo-icon-bg">
            <span id="logo-initial">S</span>
          </div>
          <div>
            <span
              className="font-sans text-2xl text-base font-semibold tracking-tight uppercase block leading-none"
              id="logo-text"
            >
              {t.shopName}
            </span>
            <span
              className="text-[9px] tracking-widest uppercase font-sans text-stone-400 dark:text-stone-500 block mt-1"
              id="logo-tagline"
            >
            </span>
          </div>
        </div>
        {/* Controls */}
        <div className="flex items-center gap-3 md:gap-5" id="header-controls">

          {/* Language Switcher */}
          <div className="flex items-center bg-stone-100 dark:bg-stone-900 rounded-md p-1 border border-stone-200 dark:border-stone-800" id="lang-switcher">
            {(['az', 'en', 'ru'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLangChange(lang)}
                className={`px-3 py-1 text-[11px] font-semibold rounded uppercase tracking-wider transition-all font-sans cursor-pointer
                  ${language === lang
                    ? 'bg-white text-[#3A3A3A] shadow-xs rounded border border-stone-200/60 dark:bg-[#3A3A3A] dark:text-white dark:border-none'
                    : 'text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200'
                  }`}
                id={`lang-btn-${lang}`}
                aria-label={`Switch language to ${lang}`}
              >
                {lang}
              </button>
            ))}
          </div>



          {/* Shopping Cart Button */}
          <button
            onClick={() => setCartOpen(!isCartOpen)}
            className="relative flex h-8 gap-2 items-center justify-center rounded-md border px-3 transition-all cursor-pointer font-sans
              bg-[#3A3A3A] border-[#3A3A3A] hover:bg-stone-800 text-white
              dark:bg-white dark:border-white dark:hover:bg-stone-100 dark:text-[#3A3A3A]"
            id="cart-toggle-btn"
            aria-label="Open shopping cart"
          >
            <ShoppingBag className="h-3.5 w-3.5" id="cart-btn-icon" />

            {totalItems > 0 ? (
              <span
                className="font-mono text-[10px] font-bold bg-amber-500 text-stone-950 dark:bg-[#3A3A3A] dark:text-white rounded-full px-1.5 min-w-4.5 h-4.5 flex items-center justify-center leading-none"
                id="cart-items-count"
              >
                {totalItems}
              </span>
            ) : (
              <span className="text-xs font-semibold uppercase tracking-wider" id="cart-empty-text">0</span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}
