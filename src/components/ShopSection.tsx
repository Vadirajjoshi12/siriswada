import React, { useState } from 'react';
import { PRODUCT_PACKS } from '../data/productData';
import { ProductPack } from '../types';
import productImage from '../assets/images/product.png';
import { ShoppingBag, MessageCircle, Check, Sparkles, Truck, ShieldCheck, Star } from 'lucide-react';

interface ShopSectionProps {
  onAddToCart: (pack: ProductPack, quantity: number) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onAddToCart }) => {
  const [quantities, setQuantities] = useState({
    'pack-50g':1,
    'pack-250g':1
  });

  const handleQuantityChange = (packId: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [packId]: Math.max(1, (prev[packId] || 1) + delta)
    }));
  };

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-stone-100 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Fast Pan-India Express Home Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 font-sans">
            Choose your Nutrimix pack<span className="text-amber-800">.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Handpacked fresh in hygienic air-sealed containers. Delivered straight to your doorstep.
          </p>
        </div>

        {/* Feature showcase bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-neutral-700">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>4.9/5 Rated by 20+ Families</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero Preservatives</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Freshly Ground Batches</span>
          </div>
        </div>

        {/* Product Cards Container */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 gap-8 items-stretch">
          {PRODUCT_PACKS.map((pack) => {
            const qty = quantities[pack.id] || 1;
            const isPopular = pack.isPopular;

            return (
              <div
                key={pack.id}
                className={`relative rounded-3xl bg-gradient-to-b from-amber-50 via-white to-amber-50 p-7 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  isPopular 
                    ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-lg scale-102 z-10' 
                    : 'border-neutral-200/90 hover:border-amber-300'
                }`}
              >
                {/* Popular Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-800 to-amber-900 text-amber-100 text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Most Popular • Best Family Value</span>
                  </div>
                )}

                <div>
                  {/* Jar Preview Image */}
                 {/* Product Image */}
                {/* Product Image */}
              <div className="relative bg-gradient-to-b from-amber-50 to-white rounded-3xl border border-amber-100 p-6 mb-8 flex justify-center items-center">

                <img
                  src={productImage}
                  alt={pack.name}
                  className="h-[340px] object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />

                {/* Veg Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold shadow-sm">
                  🌱 100% Pure Veg
                </div>

                {/* Size Badge */}
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-bold shadow-lg">
                  {pack.size}
                </div>

                </div>

                  {/* Pack Title & Size */}
                  <div className="space-y-2 text-center">
                    {pack.savings && (
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      {pack.savings}
                    </span>
)}
                    <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight font-sans">
                      {pack.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      {pack.description}
                    </p>
                  </div>

                  {/* Price */}
                 <div className="mt-5 flex justify-center items-center gap-2 flex-wrap">
                    <span className="text-3xl font-bold text-neutral-900 font-sans">
                      ₹{pack.price}
                    </span>

                    {pack.originalPrice > pack.price && (
                      <span className="text-sm text-neutral-400 line-through">
                        ₹{pack.originalPrice}
                      </span>
                    )}

                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Inclusive of all taxes
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3 border-t border-neutral-100 pt-5">
                    {pack.features.map((feat, i) => (
                      <li key={i} className="flex items-center justify-center gap-2 text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity & Actions */}
                <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                  {/* Quantity selector */}
                  <div className="flex items-center justify-between bg-stone-50 p-2 rounded-2xl border border-neutral-200">
                    <span className="text-xs font-semibold text-neutral-700 ml-2">Quantity:</span>
                    <div className="flex items-center gap-3 bg-white px-3 py-1 rounded-xl border border-neutral-200">
                      <button
                        onClick={() => handleQuantityChange(pack.id, -1)}
                        className="text-neutral-500 hover:text-neutral-900 font-bold text-sm px-1 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold text-neutral-900">{qty}</span>
                      <button
                        onClick={() => handleQuantityChange(pack.id, 1)}
                        className="text-neutral-500 hover:text-neutral-900 font-bold text-sm px-1 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => onAddToCart(pack, qty)}
                    className="w-full py-3 rounded-full bg-neutral-900 text-white font-medium text-xs sm:text-sm hover:bg-neutral-800 transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {qty} to Cart • ₹{pack.price * qty}</span>
                  </button>

                  {/* Direct WhatsApp Order */}
                  <a
                    href={`https://wa.me/919148256469?text=Hi%20Siriswada%20Foods,%20I%20want%20to%20order%20${qty}%20x%20${encodeURIComponent(pack.name)}%20(${pack.size})%20for%20Rs.${pack.price * qty}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold text-xs hover:bg-emerald-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-700" />
                    <span>Buy Now via WhatsApp (9148256469)</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order by phone contact bar */}
        <div className="mt-16 p-6 rounded-3xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-semibold tracking-tight">Need assistance or bulk corporate orders?</h4>
            <p className="text-xs text-neutral-400">Our nutrition support team is available Mon-Sat 9am - 8pm.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:9148256469"
              className="px-6 py-2.5 rounded-full bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors"
            >
              Call 9148256469
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
