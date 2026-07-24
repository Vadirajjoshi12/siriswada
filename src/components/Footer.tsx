import React from 'react';
import instagramQrImg from '../assets/images/siriswada_jar_pack_1784833318192.jpg';
import { Phone, Instagram, MapPin, Mail, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-900 text-amber-100 flex items-center justify-center font-serif text-lg font-bold">
                SS
              </div>
              <div>
                <div className="font-semibold tracking-tight text-white text-base leading-tight font-sans">
                  SIRISWADA FOODS
                </div>
                <div className="text-[11px] text-amber-400 font-medium tracking-wider uppercase">
                  Taste the excellence
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Premium Nut & Superseed Energy Blend handcrafted with 12 nutrient-dense superfoods for complete family wellness.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="w-4 h-4 border-2 border-emerald-500 p-0.5 flex items-center justify-center rounded-xs">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              </div>
              <span className="text-xs font-semibold text-emerald-400">100% Pure Vegetarian</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#overview" className="hover:text-white transition-colors">Why Siriswada</a></li>
              <li><a href="#ingredients" className="hover:text-white transition-colors">12 Super Ingredients</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Health Benefits</a></li>
              <li><a href="#how-to-use" className="hover:text-white transition-colors">Preparation Guide</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Shop Packs</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Direct Order */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
              Orders & Enquiries
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:9148256469" className="hover:text-amber-300 font-semibold text-neutral-200">
                  +91 9148256469
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-rose-400 shrink-0" />
                <a 
                  href="https://instagram.com/siriswada_foods" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-rose-300 text-neutral-300 font-medium"
                >
                  @SIRISWADA_FOODS
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Made with care in India • Pan-India Shipping</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Instagram QR Scan Box */}
          <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Instagram className="w-4 h-4" />
              <span>Follow Us On Instagram</span>
            </div>
            
            {/* Simulated QR Code Badge */}
            <div className="p-3 bg-white rounded-xl max-w-[150px] mx-auto shadow-md">
              <div className="w-full aspect-square bg-amber-50 border-2 border-amber-600 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                <Instagram className="w-8 h-8 text-amber-700" />
                <span className="text-[9px] font-bold text-amber-900 mt-1 uppercase">Scan QR Code</span>
              </div>
            </div>

            <p className="text-[11px] font-semibold text-amber-400">
              @SIRISWADA_FOODS
            </p>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Siriswada Foods. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Hygienically Handcrafted & Sealed
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
