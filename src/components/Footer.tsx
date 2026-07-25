import React from 'react';
import { Phone, Instagram, MapPin, ShieldCheck } from 'lucide-react';
import logo from "../assets/images/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
                    <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg">
            <img
              src={logo}
              alt="Siriswada Foods Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="font-bold tracking-tight text-white text-3xl leading-tight">
              SIRISWADA FOODS
            </div>

            <div className="text-lg text-amber-400 font-semibold tracking-wider uppercase">
              Taste the Excellence
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
              <li><a href="#ingredients" className="hover:text-white transition-colors">11 Super Ingredients</a></li>
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
