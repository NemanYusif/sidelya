export type Language = 'az' | 'en' | 'ru';

export type Theme = 'light' | 'dark';

export interface Product {
  id: number;
  name: {
    az: string;
    en: string;
    ru: string;
  };
  description: {
    az: string;
    en: string;
    ru: string;
  };
  price: number; // in AZN (₼)
  weight: number;
  unit: 'kg' | 'g' | 'pcs';
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ToastMessage {
  text: string;
  type: 'success' | 'info' | 'error';
}

export interface StoreState {
  cart: CartItem[];
  theme: Theme;
  language: Language;
  toast: ToastMessage | null;
  isCartOpen: boolean;
  
  // Cart Actions
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  
  // Preference Actions
  setTheme: (theme: Theme) => void;
  setLanguage: (lang: Language) => void;

  // Toast Actions
  showToast: (text: string, type?: 'success' | 'info' | 'error') => void;
  clearToast: () => void;
}
