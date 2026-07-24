import React, { useState } from 'react';
import { INGREDIENTS } from '../data/productData';
import { Ingredient, IngredientCategory } from '../types';
import { IngredientModal } from './IngredientModal';
import { Info, Sparkles } from 'lucide-react';

export const IngredientsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<IngredientCategory | 'all'>('all');
  const [activeIngredient, setActiveIngredient] = useState<Ingredient | null>(null);

  const filteredIngredients = selectedCategory === 'all'
    ? INGREDIENTS
    : INGREDIENTS.filter(i => i.category === selectedCategory);

  return (
    <section id="ingredients" className="py-20 bg-stone-50/70 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Pure Sourcing • Zero Additives</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 font-sans">
            12 Super Ingredients<span className="text-amber-800">.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Every single scoop of Siriswada Nutrimix blends these 12 power ingredients in precise Ayurvedic & dietary proportions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            All 12 Ingredients
          </button>
          <button
            onClick={() => setSelectedCategory('nuts')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedCategory === 'nuts'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            Nuts (4)
          </button>
          <button
            onClick={() => setSelectedCategory('seeds')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedCategory === 'seeds'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            Super Seeds (6)
          </button>
          <button
            onClick={() => setSelectedCategory('others')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedCategory === 'others'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            Fox Nuts & Cardamom (2)
          </button>
        </div>

        {/* Ingredient Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredIngredients.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveIngredient(item)}
              className="group bg-white rounded-3xl p-5 border border-neutral-200/80 shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-amber-900 text-[10px] font-bold uppercase tracking-wider border border-amber-200 shadow-2xs">
                      {item.badge}
                    </span>
                  )}
                  <button 
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="View details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 tracking-tight font-sans group-hover:text-amber-900 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-medium text-amber-800">
                <span className="uppercase tracking-wider font-semibold">Nutrients</span>
                <span className="text-neutral-500 truncate max-w-[150px]">{item.nutrients}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <IngredientModal
          ingredient={activeIngredient}
          onClose={() => setActiveIngredient(null)}
        />
      </div>
    </section>
  );
};
