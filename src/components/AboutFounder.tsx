import React from "react";
import founderImg from "../assets/images/founder.jpg"; // rename your image to founder.jpg

export const AboutFounder: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-stone-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold tracking-[0.25em] uppercase">
            Meet the Founder
            </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">

            Crafted with Care,
            <br />
            Powered by Nature

          </h2>
          <div className="w-40 h-1.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200 my-8 shadow-sm"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}

          <div className="relative">

            <img
              src={founderImg}
              alt="Founder"
              className="rounded-3xl shadow-2xl object-cover w-full"
            />

          </div>

          {/* CONTENT */}

          <div>

            <p className="text-lg leading-9 text-neutral-600">

              Siriswada Foods was founded with a simple belief—that healthy food
              should be natural, nourishing, and made with honesty.

            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-600">

              As a women-led brand, we carefully select premium nuts, seeds,
              and wholesome ingredients to create nutritious blends that support
              everyday wellness.

            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-600">

              Every pack is handcrafted with the same care, purity, and quality
              that we would proudly serve to our own family—because we believe
              every family deserves food they can trust.

            </p>

            {/* Feature Cards */}

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
  <div className="text-2xl">❤️</div>

  <h4 className="mt-3 font-semibold text-neutral-900">
    Women-Led Brand
  </h4>

  <p className="text-sm text-neutral-500 mt-1">
    Built with passion, care and a commitment to family wellness.
  </p>
</div>
<div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
  <div className="text-2xl">🌱</div>

  <h4 className="mt-3 font-semibold text-neutral-900">
    Natural Ingredients
  </h4>

  <p className="text-sm text-neutral-500 mt-1">
    Premium nuts, seeds and wholesome superfoods with no unnecessary additives.
  </p>
</div>
<div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
  <div className="text-2xl">🥜</div>

  <h4 className="mt-3 font-semibold text-neutral-900">
    Handcrafted Quality
  </h4>

  <p className="text-sm text-neutral-500 mt-1">
    Every batch is prepared carefully to maintain freshness and nutrition.
  </p>
</div>

<div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
  <div className="text-2xl">🇮🇳</div>

  <h4 className="mt-3 font-semibold text-neutral-900">
    Proudly Made in India
  </h4>

  <p className="text-sm text-neutral-500 mt-1">
    Supporting healthier lifestyles with locally crafted nutrition.
  </p>
</div>

          </div>

        </div>

      </div>
    </section>
  );
};