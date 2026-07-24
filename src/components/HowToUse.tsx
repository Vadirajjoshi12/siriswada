import React from 'react';
import { Milk, Sparkles, Smile, CupSoda } from 'lucide-react';
import { ChefHat } from "lucide-react";

export const HowToUse: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Scoop Pure Goodness',
      desc: 'Take 1 to 2 scoops (approx. 15g - 20g) of Siriswada Nutrimix powder using a clean dry spoon.',
      icon: CupSoda
    },
    {
      num: '02',
      title: 'Blend or Stir',
      desc: 'Add to a glass of warm milk, water, plant milk, morning smoothie, porridge, or pancake batter.',
      icon: Milk
    },
    {
      num: "03",
      title: "Healthy Nutrimix Laddoos",
      desc: "Mix Siriswada Nutrimix with warm ghee and jaggery. Roll into bite-sized laddoos and enjoy a delicious homemade snack packed with natural nutrition.",
      icon: ChefHat
    }
  ];

  return (
    <section id="how-to-use" className="py-20 bg-stone-50 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            Preparation Guide
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 font-sans">
            Ready in 30 seconds<span className="text-amber-800">.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            No cooking, boiling, or complicated prep required. Seamlessly fits into your morning routine.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-serif font-bold text-amber-800/30">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mt-2.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-amber-900 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Traditional Healthy Snack</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro Tip Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-neutral-200/80 max-w-2xl mx-auto text-center space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            Pro Tip for Busy Mornings
          </span>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Mix with warm milk, porridge or smoothies for a quick and nutritious meal any time of the day.
          </p>
        </div>

      </div>
    </section>
  );
};
