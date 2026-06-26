import { create } from 'zustand';
import { StoreState, Product, CartItem, Language, Theme, ToastMessage } from './types';

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('artisan_theme') as Theme;
    if (saved === 'light' || saved === 'dark') return saved;
    
    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('artisan_lang') as Language;
    if (saved === 'az' || saved === 'en' || saved === 'ru') return saved;
  }
  return 'az'; // Azerbaijani default
};

const getInitialCart = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('artisan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse cart from localStorage:', e);
      return [];
    }
  }
  return [];
};

let toastTimeout: NodeJS.Timeout | null = null;

export const useStore = create<StoreState>((set) => ({
  cart: getInitialCart(),
  theme: getInitialTheme(),
  language: getInitialLanguage(),
  toast: null,
  isCartOpen: false,

  addToCart: (product: Product, quantity = 1) => {
    set((state) => {
      const existingIndex = state.cart.findIndex(item => item.product.id === product.id);
      let updatedCart: CartItem[];

      if (existingIndex > -1) {
        updatedCart = state.cart.map((item, index) => {
          if (index === existingIndex) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
      } else {
        updatedCart = [...state.cart, { product, quantity }];
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('artisan_cart', JSON.stringify(updatedCart));
      }
      return { cart: updatedCart, isCartOpen: true };
    });
  },

  removeFromCart: (productId: number) => {
    set((state) => {
      const updatedCart = state.cart.filter(item => item.product.id !== productId);
      if (typeof window !== 'undefined') {
        localStorage.setItem('artisan_cart', JSON.stringify(updatedCart));
      }
      return { cart: updatedCart };
    });
  },

  updateQuantity: (productId: number, quantity: number) => {
    set((state) => {
      if (quantity <= 0) {
        const updatedCart = state.cart.filter(item => item.product.id !== productId);
        if (typeof window !== 'undefined') {
          localStorage.setItem('artisan_cart', JSON.stringify(updatedCart));
        }
        return { cart: updatedCart };
      }

      const updatedCart = state.cart.map(item => {
        if (item.product.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });

      if (typeof window !== 'undefined') {
        localStorage.setItem('artisan_cart', JSON.stringify(updatedCart));
      }
      return { cart: updatedCart };
    });
  },

  clearCart: () => {
    set(() => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('artisan_cart');
      }
      return { cart: [] };
    });
  },

  setCartOpen: (open: boolean) => {
    set({ isCartOpen: open });
  },

  setTheme: (theme: Theme) => {
    set(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('artisan_theme', theme);
        
        // Sync HTML class
        const root = window.document.documentElement;
        if (theme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
      return { theme };
    });
  },

  setLanguage: (language: Language) => {
    set(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('artisan_lang', language);
      }
      return { language };
    });
  },

  showToast: (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    
    set({ toast: { text, type } });
    
    toastTimeout = setTimeout(() => {
      set({ toast: null });
    }, 3000);
  },

  clearToast: () => {
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    set({ toast: null });
  }
}));
