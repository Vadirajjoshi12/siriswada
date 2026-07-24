import React from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import { Ingredient } from '../types';

interface IngredientModalProps {
  ingredient: Ingredient | null;
  onClose: () => void;
}

export const IngredientModal: React.FC<IngredientModalProps> = ({ ingredient, onClose }) => {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden text-neutral-900 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 bg-stone-900 overflow-hidden">
          <img
            src={ingredient.imageUrl}
            alt={ingredient.name}
            className="w-full h-full object-cover object-center opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-stone-950 text-[11px] font-bold uppercase tracking-wider">
              {ingredient.badge || ingredient.category}
            </span>
            <h3 className="text-2xl font-semibold tracking-tight mt-1">
              {ingredient.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-semibold text-amber-800 uppercase tracking-widest mb-1">
              Overview
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              {ingredient.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
              Key Health Benefits
            </h4>
            <ul className="space-y-2">
              {ingredient.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Nutrient Profile</span>
            </div>
            <p className="text-sm text-amber-950 font-medium mt-1">
              {ingredient.nutrients}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-neutral-200 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Close Insight
          </button>
        </div>
      </div>
    </div>
  );
};
