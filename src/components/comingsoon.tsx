import React from "react";
import { Sparkles } from "lucide-react";

export const ComingSoon = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <Sparkles className="mx-auto text-amber-600 mb-4" size={40} />

        <h2 className="text-4xl font-bold">
          Coming Soon
        </h2>

        <p className="mt-4 text-neutral-600">
          More delicious flavours are on the way.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          <div className="rounded-2xl border p-8">
            <h3 className="text-2xl font-semibold">
              🍫 Chocolate Flavour
            </h3>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="text-2xl font-semibold">
              🌼 Kesar Flavour
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
};