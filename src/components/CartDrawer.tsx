import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Trash2, Tag, ArrowRight, MessageCircle, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (packId: string, quantity: number) => void;
  onRemoveItem: (packId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.pack.price * item.quantity), 0);
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const shipping = subtotal >= 500 ? 0 : 50;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'WELCOME10') {
      setAppliedDiscount(10);
      setPromoSuccess('10% Welcome Discount applied!');
    } else if (code === 'HEALTH20') {
      setAppliedDiscount(15);
      setPromoSuccess('15% Special Health Discount applied!');
    } else {
      setPromoError('Invalid code. Try "WELCOME10" or "HEALTH20"');
    }
  };

  const generateWhatsAppMessage = () => {
    let msg = `Hi Siriswada Foods! I would like to place an order for:\n\n`;
    cart.forEach(item => {
      msg += `• ${item.quantity} x ${item.pack.name} (${item.pack.size}) - ₹${item.pack.price * item.quantity}\n`;
    });
    if (discountAmount > 0) {
      msg += `\nDiscount: -₹${discountAmount}`;
    }
    msg += `\nShipping: ${shipping === 0 ? 'FREE' : `₹${shipping}`}`;
    msg += `\nTotal Amount: ₹${total}`;
    msg += `\n\nPlease confirm delivery address and payment details!`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-200">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-900 text-amber-200 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 font-sans">Your Cart</h3>
                <p className="text-xs text-neutral-500">{cart.reduce((a, b) => a + b.quantity, 0)} items</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-200 text-neutral-500 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {/* Free shipping bar */}
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-700 shrink-0" />
              {subtotal >= 500 ? (
                <span>🎉 You unlocked <strong>FREE Shipping</strong>!</span>
              ) : (
                <span>Add <strong>₹{500 - subtotal}</strong> more to unlock FREE Shipping!</span>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
                <p className="text-sm text-neutral-500 font-medium">Your shopping cart is currently empty.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.pack.id} 
                  className="p-4 rounded-2xl bg-stone-50 border border-neutral-200/80 flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-neutral-900">{item.pack.name}</h4>
                    <p className="text-xs text-amber-800 font-semibold">{item.pack.size}</p>
                    <p className="text-xs text-neutral-500">₹{item.pack.price} each</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border border-neutral-200">
                      <button
                        onClick={() => onUpdateQuantity(item.pack.id, item.quantity - 1)}
                        className="text-neutral-500 font-bold hover:text-neutral-900 cursor-pointer text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-neutral-900">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.pack.id, item.quantity + 1)}
                        className="text-neutral-500 font-bold hover:text-neutral-900 cursor-pointer text-xs"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.pack.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Promo Code Input */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo Code (try WELCOME10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:border-amber-600 bg-stone-50/50"
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-rose-600 mt-1 font-medium">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] text-emerald-600 mt-1 font-medium">{promoSuccess}</p>}
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-stone-50 border-t border-neutral-200 space-y-4">
              <div className="space-y-1.5 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-900">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({appliedDiscount}%)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-neutral-900">
                    {shipping === 0 ? <span className="text-emerald-700">FREE</span> : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>
              </div>

              {/* Checkout buttons */}
              <a
                href={`https://wa.me/919148256469?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-emerald-700 text-white font-medium text-xs sm:text-sm hover:bg-emerald-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Place Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:9148256469"
                className="w-full py-2.5 rounded-full bg-stone-200 text-stone-900 font-semibold text-xs hover:bg-stone-300 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Or Call Direct: +91 9148256469</span>
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
