import React, { useState } from 'react';
import { useStore } from '../store';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react';
import { SHOP_PHONE } from '../constants';
import { jsPDF } from 'jspdf';

// Minimum order amount (AZN) required to be able to submit the order
const MIN_ORDER_AMOUNT = 25;

// Fixed character width for the monospace WhatsApp "receipt" block
const RECEIPT_WIDTH = 32;

// Truncates text with an ellipsis so it never overflows the receipt width
const truncateText = (str: string, max: number) =>
  str.length > max ? `${str.slice(0, Math.max(0, max - 1))}…` : str;

// Left-aligns a label and right-aligns a value within RECEIPT_WIDTH columns
const receiptRow = (label: string, value: string) => {
  const combined = label.length + value.length;
  if (combined >= RECEIPT_WIDTH) return `${label} ${value}`;
  return `${label}${' '.repeat(RECEIPT_WIDTH - combined)}${value}`;
};

// Centers a line of text within RECEIPT_WIDTH columns
const receiptCenter = (str: string) => {
  const clipped = truncateText(str, RECEIPT_WIDTH);
  const padTotal = RECEIPT_WIDTH - clipped.length;
  const padLeft = Math.floor(padTotal / 2);
  return `${' '.repeat(Math.max(0, padLeft))}${clipped}`;
};

const receiptDivider = (char: string = '-') => char.repeat(RECEIPT_WIDTH);

// Renders the receipt lines into a downloadable PDF, styled like a printed check/receipt
const generateReceiptPDF = (lines: string[], fileName: string) => {
  // Narrow page width mimicking a thermal receipt printout
  const doc = new jsPDF({ unit: 'mm', format: [80, Math.max(120, 20 + lines.length * 5) ] });

  doc.setFont('courier', 'normal');
  doc.setFontSize(9);

  const marginX = 4;
  let cursorY = 8;
  const lineHeight = 4.6;

  lines.forEach((line) => {
    doc.text(line, marginX, cursorY);
    cursorY += lineHeight;
  });

  doc.save(fileName);
};

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    language, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    setCartOpen,
    showToast
  } = useStore();

  const t = translations[language];

  // Checkout info inputs
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  // Close Cart Helper
  const closeCart = () => setCartOpen(false);

  // Math totals
  const totalPrice = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  // Whether current cart total is below the minimum order threshold
  const isBelowMinimum = cart.length > 0 && totalPrice < MIN_ORDER_AMOUNT;

  // Minimum order warning message per language
  const minOrderLabel = {
    az: `Minimum sifariş məbləği ${MIN_ORDER_AMOUNT} ₼-dir`,
    en: `Minimum order amount is ${MIN_ORDER_AMOUNT} ₼`,
    ru: `Минимальная сумма заказа ${MIN_ORDER_AMOUNT} ₼`
  };

  // Compute compiled total weight labels
  const getCompiledWeight = () => {
    let kgTotal = 0;
    let gTotal = 0;
    let pcsTotal = 0;

    cart.forEach(({ product, quantity }) => {
      if (product.unit === 'kg') {
        kgTotal += product.weight * quantity;
      } else if (product.unit === 'g') {
        gTotal += product.weight * quantity;
      } else if (product.unit === 'pcs') {
        pcsTotal += product.weight * quantity;
      }
    });

    if (gTotal >= 1000) {
      kgTotal += Math.floor(gTotal / 1000);
      gTotal = gTotal % 1000;
    }

    const segments: string[] = [];
    if (kgTotal > 0) {
      segments.push(`${kgTotal.toFixed(1).replace('.0', '')} kg`);
    }
    if (gTotal > 0) {
      segments.push(`${gTotal} g`);
    }
    if (pcsTotal > 0) {
      const suffix = { az: 'ədəd', en: 'pcs', ru: 'шт' };
      segments.push(`${pcsTotal} ${suffix[language]}`);
    }

    return segments.length > 0 ? segments.join(' + ') : '0';
  };

  const getProductWeightLabel = (weight: number, unit: 'kg' | 'g' | 'pcs', qty: number) => {
    const total = weight * qty;
    if (unit === 'kg') {
      return `${total.toFixed(1).replace('.0', '')} kg`;
    } else if (unit === 'g') {
      return `${total} g`;
    } else {
      const suffix = { az: 'ədəd', en: 'pcs', ru: 'шт' };
      return `${total} ${suffix[language]}`;
    }
  };

  // WhatsApp Order Submission
  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      showToast(t.emptyCart, 'error');
      return;
    }

    // Enforce minimum order amount before proceeding
    if (totalPrice < MIN_ORDER_AMOUNT) {
      showToast(minOrderLabel[language], 'error');
      return;
    }

    // Generate Invoice message block based on current active language
    const shopNameLabel = { az: 'SIDELYA BAKHLAVA', en: 'SIDELYA BAKHLAVA', ru: 'SIDELYA BAKHLAVA' };
    const orderTitleLabel = { az: 'Yeni Sifariş', en: 'New Order', ru: 'Новый заказ' };
    const clientLabel = { az: 'Müştəri', en: 'Client', ru: 'Клиент' };
    const addressLabel = { az: 'Ünvan', en: 'Address', ru: 'Адрес' };
    const productsLabel = { az: 'MƏHSUL', en: 'PRODUCT', ru: 'ТОВАР' };
    const totalWeightLabel = { az: 'Ümumi çəki', en: 'Total weight', ru: 'Общий вес' };
    const totalPriceLabel = { az: 'CƏMİ', en: 'TOTAL', ru: 'ИТОГО' };
    const thanksLabel = {
      az: 'Sifarişiniz qeydə alındı.\nTezliklə sizinlə əlaqə saxlayacağıq.\nTəşəkkür edirik!',
      en: 'Your order has been received.\nWe will contact you shortly.\nThank you!',
      ru: 'Ваш заказ принят.\nМы скоро свяжемся с вами.\nСпасибо!'
    };

    const orderDate = new Date().toLocaleString(
      language === 'az' ? 'az-AZ' : language === 'ru' ? 'ru-RU' : 'en-GB',
      { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }
    );

    const lines: string[] = [];
    lines.push(receiptCenter(shopNameLabel[language]));
    lines.push(receiptCenter(orderTitleLabel[language]));
    lines.push(receiptDivider('='));
    lines.push(receiptRow(orderDate, ''));
    lines.push(receiptDivider());
    lines.push(`${clientLabel[language]}: ${truncateText(name.trim() || 'Anonim', RECEIPT_WIDTH - clientLabel[language].length - 2)}`);
    if (address.trim()) {
      lines.push(`${addressLabel[language]}: ${truncateText(address.trim(), RECEIPT_WIDTH - addressLabel[language].length - 2)}`);
    }
    lines.push(receiptDivider());
    lines.push(productsLabel[language]);
    lines.push(receiptDivider());

    cart.forEach(({ product, quantity }) => {
      const pName = truncateText(product.name[language], RECEIPT_WIDTH);
      const pPrice = product.price;
      const subtotal = pPrice * quantity;
      const weightStr = getProductWeightLabel(product.weight, product.unit, quantity);

      lines.push(pName);
      lines.push(receiptRow(`  ${quantity} x ${pPrice} ₼ (${weightStr})`, `${subtotal} ₼`));
    });

    lines.push(receiptDivider());
    lines.push(receiptRow(totalWeightLabel[language], getCompiledWeight()));
    lines.push(receiptDivider('='));
    lines.push(receiptRow(totalPriceLabel[language], `${totalPrice} ₼`));
    lines.push(receiptDivider('='));

    // Build and download the receipt as a PDF ("çek")
    const pdfFileName = `sifaris-${Date.now()}.pdf`;
    generateReceiptPDF(lines, pdfFileName);

    const attachNoteLabel = {
      az: '📎 Çek PDF olaraq yükləndi. Zəhmət olmasa endirilən faylı bu söhbətə əlavə edərək göndərin.',
      en: '📎 The receipt was downloaded as a PDF. Please attach the downloaded file to this chat and send it.',
      ru: '📎 Чек был загружен в формате PDF. Пожалуйста, прикрепите скачанный файл к этому чату и отправьте его.'
    };

    let msg = '```\n';
    msg += lines.join('\n');
    msg += '\n```\n\n';
    msg += `_${thanksLabel[language]}_\n\n`;
    msg += attachNoteLabel[language];

    const encodedText = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${SHOP_PHONE}?text=${encodedText}`;

    // Open WhatsApp in a safe manner (slight delay so the PDF download starts first)
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 300);
    
    // Clear and Toast
    showToast(t.toastOrderSent, 'success');
    clearCart();
    setName('');
    setAddress('');
    closeCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop dimming */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-40 bg-black backdrop-blur-xs cursor-pointer"
            id="cart-backdrop"
          />

          {/* Cart Sidebar panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md flex flex-col shadow-2xl overflow-hidden font-sans border-l
              bg-white border-stone-200 text-stone-900
              dark:bg-[#111827] dark:border-neutral-800 dark:text-neutral-50"
            id="cart-drawer-panel"
            aria-label="Shopping cart sidebar"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 dark:border-neutral-850" id="cart-header">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-stone-700 dark:text-neutral-300" />
                <h2 className="font-sans text-base font-bold tracking-tight uppercase">{t.cartTitle}</h2>
              </div>
              <button
                onClick={closeCart}
                className="rounded-full p-1.5 hover:bg-stone-100 dark:hover:bg-neutral-850 transition-colors text-stone-500 hover:text-stone-800 dark:hover:text-neutral-200 cursor-pointer"
                id="cart-close-btn"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content list */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4" id="cart-items-list">
              {cart.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center text-center space-y-3" id="cart-empty-view">
                  <ShoppingBag className="h-12 w-12 text-stone-300 dark:text-neutral-700 stroke-1" />
                  <p className="text-sm font-light text-stone-400 dark:text-neutral-500 uppercase tracking-wider">{t.emptyCart}</p>
                </div>
              ) : (
                cart.map((item) => {
                  const p = item.product;
                  const langName = p.name[language];
                  const totalItemPrice = p.price * item.quantity;
                  const weightStr = getProductWeightLabel(p.weight, p.unit, item.quantity);

                  return (
                    <div 
                      key={p.id}
                      className="flex items-start gap-4 p-4 rounded-xl border border-stone-100 dark:border-neutral-900 bg-stone-50/50 dark:bg-neutral-900/30"
                      id={`cart-item-${p.id}`}
                    >
                      {/* Mini Image */}
                      <img
                        src={p.image}
                        alt={langName}
                        className="h-16 w-16 rounded object-cover bg-stone-100 dark:bg-neutral-950 shrink-0 border border-stone-200/40 dark:border-neutral-800/40"
                      />

                      {/* Info & Quantity controls */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-sans text-sm font-bold text-stone-900 dark:text-neutral-100 leading-tight truncate">
                            {langName}
                          </h4>
                          <button
                            onClick={() => {
                              removeFromCart(p.id);
                              showToast(`${langName} ${t.toastRemoved}`, 'info');
                            }}
                            className="text-stone-400 hover:text-red-500 p-1 rounded transition-colors shrink-0 cursor-pointer"
                            title={t.remove}
                            aria-label={`Remove ${langName} from cart`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <p className="text-[10px] font-mono font-medium text-stone-400 mt-0.5 uppercase tracking-tighter">
                          {weightStr}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          {/* Increment Dec box */}
                          <div className="flex items-center rounded border border-stone-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-950">
                            <button
                              onClick={() => updateQuantity(p.id, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center text-stone-500 hover:text-stone-800 dark:hover:text-neutral-100 hover:bg-stone-50 dark:hover:bg-neutral-900"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-7 text-center font-mono text-xs font-semibold text-stone-900 dark:text-neutral-100">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(p.id, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center text-stone-500 hover:text-stone-800 dark:hover:text-neutral-100 hover:bg-stone-50 dark:hover:bg-neutral-900"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <span className="font-mono text-sm font-bold text-stone-900 dark:text-neutral-100">
                            {totalItemPrice} ₼
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer with checkout form */}
            {cart.length > 0 && (
              <form 
                onSubmit={handleSendOrder}
                className="border-t border-stone-200 dark:border-neutral-800 p-6 space-y-4 bg-stone-50 dark:bg-[#1f2937]/30"
                id="cart-order-form"
              >
                {/* Math values */}
                <div className="space-y-1.5" id="cart-summary-block">
                  <div className="flex justify-between text-xs text-stone-500 dark:text-neutral-400 uppercase tracking-wider">
                    <span>{t.totalWeight}:</span>
                    <span className="font-mono font-medium">{getCompiledWeight()}</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-1">
                    <span className="text-sm font-bold text-stone-800 dark:text-neutral-200 uppercase tracking-wide">{t.totalPrice}:</span>
                    <span className="font-mono text-xl font-bold text-stone-950 dark:text-white">
                      {totalPrice} <span className="text-sm font-sans font-medium text-stone-500">₼</span>
                    </span>
                  </div>
                </div>

                {/* Minimum order warning */}
                {isBelowMinimum && (
                  <div
                    className="rounded border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-600 text-center dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                    id="min-order-warning"
                  >
                    {minOrderLabel[language]}
                  </div>
                )}

                {/* User Order fields */}
                <div className="space-y-3.5 pt-3 border-t border-stone-200 dark:border-neutral-800/50" id="checkout-inputs">
                  <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-neutral-200">
                    {t.orderDetails}
                  </h3>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.placeholderName}
                      className="w-full rounded border px-3 py-2 text-xs outline-none transition-all duration-300 font-sans
                        bg-white border-stone-200 focus:border-[#3A3A3A] text-[#111827]
                        dark:bg-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100 dark:text-neutral-50"
                      id="order-client-name"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 dark:text-neutral-400 uppercase tracking-wider mb-1 flex justify-between items-center">
                      <span>{t.deliveryAddress}</span>
                      <span className="text-[9px] lowercase text-stone-400 font-light italic">({t.optionalLabel})</span>
                    </label>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder={t.placeholderAddress}
                      className="w-full rounded border px-3 py-2 text-xs outline-none transition-all duration-300 resize-none font-sans
                        bg-white border-stone-200 focus:border-[#3A3A3A] text-[#111827]
                        dark:bg-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100 dark:text-neutral-50"
                      id="order-client-address"
                    />
                  </div>
                </div>

                {/* Submit WhatsApp button */}
                <button
                  type="submit"
                  disabled={isBelowMinimum}
                  className={`w-full py-3 rounded font-bold flex items-center justify-center space-x-2 shadow-sm transition-colors text-xs uppercase tracking-wide
                    ${isBelowMinimum
                      ? 'bg-stone-300 text-stone-500 cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-500'
                      : 'bg-[#25D366] hover:bg-[#20ba59] text-white cursor-pointer'}`}
                  id="submit-order-whatsapp-btn"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>{t.sendWhatsapp}</span>
                </button>
              </form>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}