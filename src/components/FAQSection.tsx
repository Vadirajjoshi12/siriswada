import React, { useState } from 'react';
import { FAQS } from '../data/productData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-neutral-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 font-sans">
            Frequently Asked Questions<span className="text-amber-800">.</span>
          </h2>
          <p className="text-sm text-neutral-600">
            Everything you need to know about Siriswada Nutrimix ingredients, safety, and delivery.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200/80 overflow-hidden bg-stone-50/50 transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 text-base sm:text-lg hover:bg-stone-100/70 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-800' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/40 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          Have more questions? Reach out to us directly on WhatsApp at{' '}
          <a href="tel:9148256469" className="text-amber-900 font-bold underline">
            +91 9148256469
          </a>
        </div>

      </div>
    </section>
  );
};
