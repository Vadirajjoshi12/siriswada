import React from 'react';
import { Leaf, Flame, Shield, Activity, Brain, Heart, Sparkles } from 'lucide-react';

export const KeyHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Leaf,
      title: '100% Natural',
      desc: 'No artificial flavors, synthetic colors, or filler starches.',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      icon: Flame,
      title: 'Rich in Protein',
      desc: 'Natural plant-based amino acids for muscle strength.',
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      icon: Shield,
      title: 'Boosts Immunity',
      desc: 'Zinc, Vitamin E, and antioxidants for daily defense.',
      color: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      icon: Activity,
      title: 'Aids Digestion',
      desc: 'High fiber seeds soothe acidity and regulate microbiome.',
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      icon: Brain,
      title: 'Supports Brain Health',
      desc: 'Omega-3 ALA from walnuts & flax for mental clarity.',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      icon: Heart,
      title: 'Good for Heart',
      desc: 'Heart-healthy monounsaturated fats from California almonds.',
      color: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      icon: Sparkles,
      title: 'Overall Wellness',
      desc: 'Formulated for toddlers, active adults, and elderly.',
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    }
  ];

  return (
    <section id="overview" className="py-20 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            Why Siriswada Foods
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 font-sans">
            Clean, uncompromised nutrition<span className="text-amber-800">.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Carefully selected raw ingredients, slow-blended to retain full bioavailability without heating or chemical stripping.
          </p>
        </div>

        {/* Highlights Row */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-stone-50/60 border border-neutral-200/70 hover:border-amber-300 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
