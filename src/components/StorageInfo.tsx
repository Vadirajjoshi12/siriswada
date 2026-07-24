import React from "react";
import { ShieldCheck, AlertTriangle, Package } from "lucide-react";

export const StorageInfo = () => {
  return (
    <section id="storage" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900">
            Storage & Safety
          </h2>

          <p className="text-neutral-600 mt-3">
            Please follow these instructions for the best quality and safety.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow p-6">
            <Package className="text-amber-700 mb-4" />

            <h3 className="text-xl font-semibold mb-4">
              Storage Instructions
            </h3>

            <ul className="space-y-2 text-neutral-600">
              <li>Store in a cool and dry place.</li>
              <li>Keep the pouch tightly sealed after opening.</li>
              <li>Avoid direct sunlight.</li>
              <li>Use a dry spoon.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <ShieldCheck className="text-green-700 mb-4" />

            <h3 className="text-xl font-semibold mb-4">
              Allergen Advice
            </h3>

            <ul className="space-y-2 text-neutral-600">
              <li>Contains tree nuts.</li>
              <li>Contains seeds.</li>
              <li>Not suitable for people with nut allergies.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <AlertTriangle className="text-red-600 mb-4" />

            <h3 className="text-xl font-semibold mb-4">
              Warning
            </h3>

            <ul className="space-y-2 text-neutral-600">
              <li>Contains an oxygen absorber.</li>
              <li>Do NOT consume the oxygen absorber packet.</li>
              <li>Keep away from children.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};