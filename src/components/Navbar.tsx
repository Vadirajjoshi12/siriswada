import React from 'react';
import { ShoppingBag, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/85 border-b border-neutral-200/60 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-neutral-900 text-amber-100 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span>Fresh Batch Handcrafted Daily • Free Shipping on Family Packs</span>
        <a 
          href="tel:9148256469" 
          className="hidden md:inline-span ml-2 underline underline-offset-2 text-amber-300 hover:text-white"
        >
          Call: +91 9148256469
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-800 to-stone-900 text-amber-200 flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
            SS
          </div>
          <div>
            <div className="font-semibold tracking-tight text-neutral-900 text-base leading-tight font-sans">
              SIRISWADA FOODS
            </div>
            <div className="text-[11px] text-amber-800 font-medium tracking-wider uppercase">
              Taste the excellence
            </div>
          </div>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <button 
            onClick={() => onNavigate('overview')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Overview
          </button>
          <button 
            onClick={() => onNavigate('ingredients')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            12 Super Ingredients
          </button>
          <button 
            onClick={() => onNavigate('benefits')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Health Benefits
          </button>
          <button 
            onClick={() => onNavigate('how-to-use')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            How to Enjoy
          </button>
          <button 
            onClick={() => onNavigate('shop')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Shop Packs
          </button>
          <button 
            onClick={() => onNavigate('testimonials')}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Testimonials
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919148256469?text=Hi%20Siriswada%20Foods,%20I%20want%20to%20know%20more%20about%20Nutrimix"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80 hover:bg-emerald-100 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>9148256469</span>
          </a>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 transition-all cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-700 text-white text-[11px] font-bold flex items-center justify-center animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('shop')}
            className="px-4 py-2 rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </nav>
    </header>
  );
};
