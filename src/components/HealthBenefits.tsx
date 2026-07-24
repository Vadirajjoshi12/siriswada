import React, { useState } from 'react';
import { Brain, Heart, Shield, Activity, Bone, Sparkles, Check, Calculator } from 'lucide-react';

export const HealthBenefits: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<'kids' | 'adults' | 'seniors'>('adults');

  const ageData = {
    kids: {
      title: 'Kids & School Children (Ages 2 – 12)',
      dosage: '1 Scoop (approx. 10g) daily',
      recommendedWith: 'Warm Milk or Morning Porridge',
      benefits: [
        'Natural DHA & Omega-3 for school focus and memory',
        'Calcium & Zinc for healthy bone development',
        'Replaces sugary commercial drink powders',
        'Improves natural appetite and daily activity level'
      ]
    },
    adults: {
      title: 'Adults & Working Professionals (Ages 13 – 50)',
      dosage: '2 Scoops (approx. 20g) daily',
      recommendedWith: 'Post-workout Shake, Warm Milk, or Smoothie',
      benefits: [
        'Sustained plant protein energy without sudden sugar crashes',
        'Reduces afternoon fatigue and brain fog',
        'Supports lean muscle recovery after exercise',
        'Zero added sugar keeps caloric intake clean'
      ]
    },
    seniors: {
      title: 'Seniors & Elderly (Ages 50+)',
      dosage: '1.5 Scoops (approx. 15g) daily',
      recommendedWith: 'Warm Almond/Cow Milk before bedtime or breakfast',
      benefits: [
        'Easy on delicate stomach lining with gentle cardamom digestion',
        'High bioavailable magnesium for calm, deep sleep cycles',
        'Monounsaturated healthy fats for vascular and heart care',
        'Rich in fox nuts (makhana) calcium for joint support'
      ]
    }
  };

  const currentAdvisor = ageData[selectedAge];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            Targeted Wellness
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 font-sans">
            Engineered for every body<span className="text-amber-800">.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            A harmonious synthesis of ancient Ayurvedic wisdom and modern clinical nutrition.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Brain & Memory (Span 2 on large) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-amber-900 via-stone-900 to-neutral-950 text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Cognitive Function
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold mt-1 tracking-tight">
                Sharp Memory & Mental Sharpness
              </h3>
              <p className="text-stone-300 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
                Packed with California walnuts, almonds, and raw flax seeds providing ALA Omega-3 fatty acids that strengthen neural synaptic connections and prevent mental exhaustion.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap gap-4 text-xs font-medium text-amber-200">
              <span>✓ Memory Retention</span>
              <span>✓ Reduced Brain Fog</span>
              <span>✓ Focus for Students & Professionals</span>
            </div>
          </div>

          {/* Card 2: Heart Health */}
          <div className="p-8 rounded-3xl bg-stone-50 border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">
                Cardiovascular Wellness
              </span>
              <h3 className="text-xl font-semibold text-neutral-900 mt-1">
                Zero Cholesterol Support
              </h3>
              <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                Clean monounsaturated fats from pistachios and cashews maintain healthy blood flow and flexible arteries.
              </p>
            </div>
            <div className="mt-6 text-xs text-rose-900 font-semibold">
              100% Plant-derived Lipids
            </div>
          </div>

          {/* Card 3: Digestion & Gut */}
          <div className="p-8 rounded-3xl bg-stone-50 border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:border-orange-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">
                Digestive Soothing
              </span>
              <h3 className="text-xl font-semibold text-neutral-900 mt-1">
                Cooling Sabja & Cardamom
              </h3>
              <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                Basil seeds (sabja) and green cardamom soothe acidity, reduce bloat, and cultivate a thriving gut microbiome.
              </p>
            </div>
            <div className="mt-6 text-xs text-orange-900 font-semibold">
              Zero Bloating Guarantee
            </div>
          </div>

          {/* Card 4: Immunity & Sleep (Span 2) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-emerald-900 text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-800/80 border border-emerald-600 flex items-center justify-center text-emerald-300 mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                Immunity & Restorative Sleep
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold mt-1 tracking-tight">
                Natural Zinc, Magnesium & Tryptophan
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
                Pumpkin and sunflower seeds provide essential tryptophan and zinc that trigger natural melatonin synthesis for restorative sleep and robust daily immune defenses.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-800/80 flex flex-wrap gap-4 text-xs font-medium text-emerald-200">
              <span>✓ Natural Tryptophan for Sleep</span>
              <span>✓ High Bioavailable Zinc</span>
              <span>✓ Cellular Antioxidant Protection</span>
            </div>
          </div>

        </div>

        {/* Daily Scoop Calculator Widget */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-amber-50/80 border border-amber-200/80 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-amber-900 font-semibold text-sm uppercase tracking-wider mb-2">
            <Calculator className="w-5 h-5 text-amber-700" />
            <span>Interactive Nutrition Advisor</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight font-sans">
            How much Siriswada Nutrimix should I take?
          </h3>
          <p className="text-sm text-neutral-600 mt-1">
            Select an age group below to calculate your customized daily scoop dosage and mixing guide.
          </p>

          {/* Toggle buttons */}
          <div className="mt-6 grid grid-cols-3 gap-2 bg-white/80 p-1.5 rounded-2xl border border-amber-200/60 max-w-md">
            <button
              onClick={() => setSelectedAge('kids')}
              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedAge === 'kids'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              Kids (2 - 12)
            </button>
            <button
              onClick={() => setSelectedAge('adults')}
              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedAge === 'adults'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              Adults (13 - 50)
            </button>
            <button
              onClick={() => setSelectedAge('seniors')}
              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedAge === 'seniors'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              Seniors (50+)
            </button>
          </div>

          {/* Result Card */}
          <div className="mt-6 p-6 rounded-2xl bg-white border border-amber-200/70 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-4">
              <div>
                <h4 className="text-lg font-bold text-neutral-900">{currentAdvisor.title}</h4>
                <p className="text-xs text-amber-900 font-medium mt-0.5">Recommended Mix: {currentAdvisor.recommendedWith}</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-amber-100 text-amber-900 font-bold text-sm tracking-wide self-start sm:self-auto">
                {currentAdvisor.dosage}
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700 pt-1">
              {currentAdvisor.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
