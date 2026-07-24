import React from 'react';
import { ShieldCheck, Zap, Heart, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import heroGlassImg from '../assets/images/siriswada_hero_glass_1784833304476.jpg';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-amber-50/20 to-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Top Tagline */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200/60 text-amber-900 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-600 -ml-4" />
            <span>Complete Family Nutrition • All Ages</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-neutral-900 tracking-tight font-sans leading-[1.1]">
            Siriswada Nutrimix<span className="text-amber-800">.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Premium Nut & Superseed Energy Blend handcrafted with 12 nutrient-dense nuts, seeds, and aromatic cardamom.
          </p>

          {/* Key Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 border border-neutral-200/80 shadow-xs text-xs sm:text-sm font-medium text-neutral-800">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Energy Booster</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 border border-neutral-200/80 shadow-xs text-xs sm:text-sm font-medium text-neutral-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Added Sugar</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 border border-neutral-200/80 shadow-xs text-xs sm:text-sm font-medium text-neutral-800">
              <Heart className="w-4 h-4 text-rose-600" />
              <span>100% Chemical Free</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-semibold text-emerald-900">
              <div className="w-3 h-3 border-2 border-emerald-700 p-0.5 flex items-center justify-center rounded-xs">
                <div className="w-1.5 h-1.5 bg-emerald-700 rounded-full" />
              </div>
              <span>100% Pure Veg</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('shop')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-900 text-white font-medium text-base hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Shop Packs</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919148256469?text=Hi%20Siriswada%20Foods,%20I%20would%20like%20to%20order%20Nutrimix"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-700 text-white font-medium text-base hover:bg-emerald-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order via WhatsApp (9148256469)</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Card with Glassmorphism Overlays */}
        <div className="mt-14 relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-stone-900 group">
          <img
            src={heroGlassImg}
            alt="Siriswada Nutrimix Glass with spoon and superseed ingredients"
            className="w-full h-[380px] sm:h-[520px] lg:h-[600px] object-cover object-center group-hover:scale-102 transition-transform duration-700 opacity-95"
            referrerPolicy="no-referrer"
          />

          {/* Floating Feature Badges */}
          <div className="absolute top-6 left-6 max-w-xs backdrop-blur-md bg-white/80 border border-white/60 p-4 rounded-2xl shadow-lg hidden sm:block">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>12 Raw Super Ingredients</span>
            </div>
            <p className="text-xs text-neutral-600 mt-1">
              Almonds, Cashews, Walnuts, Pistachios, Chia, Flax, Basil, Watermelon, Pumpkin, Sunflower, Makhana & Cardamom.
            </p>
          </div>

          <div className="absolute bottom-6 right-6 backdrop-blur-md bg-neutral-900/85 text-white border border-neutral-700 p-4 rounded-2xl shadow-xl max-w-xs">
            <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
              Siriswada Foods Guarantee
            </div>
            <div className="text-sm font-medium mt-0.5">
              Taste the excellence in every morning scoop.
            </div>
            <div className="text-xs text-neutral-400 mt-1 flex items-center gap-1.5">
              <span>Fresh Batch Handcrafted</span> • <span>Fast Direct Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
