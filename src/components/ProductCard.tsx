import React, { useState } from 'react';
import { Product } from '../types';
import { useStore } from '../store';
import { translations } from '../translations';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: React.Key | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, addToCart, showToast } = useStore();
  const t = translations[language];

  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset quantity after adding to cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
    
    // Create custom success toast
    const productName = product.name[language];
    showToast(`${productName} - ${quantity}x ${t.toastAdded}`, 'success');
    
    setQuantity(1);
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Determine weight label
  const getWeightLabel = () => {
    const value = product.weight;
    if (product.unit === 'kg') {
      return `${value} kg`;
    } else if (product.unit === 'g') {
      return `${value} g`;
    } else {
      // pcs
      const suffix = {
        az: 'ədəd',
        en: 'pcs',
        ru: 'шт'
      };
      return `${value} ${suffix[language]}`;
    }
  };

  return (
    <article 
      className="group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300
        bg-white border-stone-200 shadow-xs hover:shadow-md
        dark:bg-[#111827] dark:border-neutral-800"
      id={`product-card-${product.id}`}
    >
      {/* Product Image Panel with Skeleton Loader */}
      <div className="relative aspect-video overflow-hidden bg-stone-100 dark:bg-neutral-900 m-3 rounded-lg" id={`img-container-${product.id}`}>
        {!imageLoaded && (
          <div 
            className="absolute inset-0 animate-pulse bg-stone-200 dark:bg-neutral-800" 
            id={`image-skeleton-${product.id}`}
          />
        )}
        <img
          src={product.image}
          alt={product.name[language]}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-103
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          id={`product-img-${product.id}`}
        />
        
        {/* Weight Stamp */}
        <span 
          className="absolute top-2.5 right-2.5 z-10 rounded px-2 py-0.5 text-[10px] font-mono font-medium tracking-tight shadow-xs backdrop-blur-md uppercase
            bg-white/90 border border-stone-200/60 text-stone-800
            dark:bg-neutral-900/90 dark:border-neutral-850 dark:text-neutral-200"
          id={`weight-tag-${product.id}`}
        >
          {getWeightLabel()}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4 pt-1" id={`details-container-${product.id}`}>
        <div className="flex justify-between items-start gap-2">
          <h3 
            className="font-sans text-base font-bold tracking-tight text-[#111827] dark:text-stone-100 line-clamp-1"
            id={`product-title-${product.id}`}
          >
            {product.name[language]}
          </h3>
          <span 
            className="text-base font-bold text-stone-900 dark:text-white whitespace-nowrap"
            id={`product-price-${product.id}`}
          >
            {product.price} <span className="text-xs font-semibold">₼</span>
          </span>
        </div>
        
        <p 
          className="mt-1.5 text-xs leading-relaxed text-stone-500 dark:text-stone-400 line-clamp-2 min-h-8 font-sans font-light uppercase tracking-tighter"
          id={`product-desc-${product.id}`}
        >
          {product.description[language]}
        </p>

        {/* Quantity and Actions */}
        <div className="mt-4 flex items-center space-x-2 pt-3 border-t border-stone-100 dark:border-stone-900" id={`price-action-${product.id}`}>
          {/* Quantity Selector Counter */}
          <div className="flex items-center border border-stone-200 dark:border-stone-800 rounded bg-stone-50/50 dark:bg-stone-950/30 overflow-hidden" id={`quantity-selector-${product.id}`}>
            <button
              onClick={decrement}
              className="flex h-8 w-8 items-center justify-center text-stone-500 hover:text-stone-800 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-200 dark:hover:bg-stone-800 transition-colors"
              id={`quantity-dec-${product.id}`}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span 
              className="w-7 text-center font-mono text-xs font-semibold text-stone-900 dark:text-stone-100"
              id={`quantity-val-${product.id}`}
            >
              {quantity}
            </span>
            <button
              onClick={increment}
              className="flex h-8 w-8 items-center justify-center text-stone-500 hover:text-stone-800 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-200 dark:hover:bg-stone-800 transition-colors"
              id={`quantity-inc-${product.id}`}
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          {/* Add To Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-1.5 rounded bg-[#3A3A3A] hover:bg-stone-800 text-white py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 cursor-pointer font-sans
              dark:bg-stone-200 dark:hover:bg-stone-100 dark:text-[#3A3A3A]"
            id={`add-btn-${product.id}`}
          >
            <ShoppingCart className="h-3.5 w-3.5" id={`cart-icon-${product.id}`} />
            {t.addToCart}
          </button>
        </div>
      </div>
    </article>
  );
}
