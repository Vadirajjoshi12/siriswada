import { Ingredient, ProductPack, Testimonial, FAQItem } from '../types';
import cashewsImg from '../assets/images/ingredient_cashews_1784834586513.jpg';
import walnutsImg from '../assets/images/ingredient_walnuts_1784834620111.jpg';
import pistachiosImg from '../assets/images/ingredient_pistachios_1784834631126.jpg';
import chiaSeedsImg from '../assets/images/ingredient_chia_seeds_1784834640850.jpg';
import pumpkinSeedsImg from '../assets/images/ingredient_pumpkin_seeds.jpeg';
import sunflowerSeedsImg from '../assets/images/ingredient_sunflower_seeds.webp';
import foxNutsImg from '../assets/images/ingredient_fox_nuts.avif';
import greenCardamomImg from '../assets/images/ingredient_green_cardamom.jpg';
import basilSeedsImg from '../assets/images/ingredient_basil_seeds.webp';
import watermelonSeedsImg from '../assets/images/ingredient_watermelon_seeds.webp';
import flaxseedsImg from '../assets/images/ingredients_flax_seeds.jpg';

export const INGREDIENTS: Ingredient[] = [
  // NUTS
  {
    id: 'almonds',
    name: 'Almonds',
    category: 'nuts',
    shortDesc: 'Rich in Vitamin E, supports heart health & brain function.',
    fullDesc: 'Premium handpicked California almonds, lightly ground to retain healthy monounsaturated fats, dietary fiber, and Vitamin E.',
    benefits: ['Supports cardiovascular wellness', 'Boosts memory & cognitive vitality', 'Enhances skin health'],
    nutrients: 'Vitamin E, Magnesium, Protein, Fiber',
    imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=600',
    badge: 'Brain Booster'
  },
  {
    id: 'cashews',
    name: 'Cashews',
    category: 'nuts',
    shortDesc: 'Good source of protein, healthy fats & essential minerals.',
    fullDesc: 'Whole creamy raw cashews naturally packed with zinc, copper, and plant-based protein to sustain daily energy levels.',
    benefits: ['Essential mineral replenishment', 'Natural stamina enhancer', 'Supports bone strength'],
    nutrients: 'Copper, Zinc, Magnesium, Healthy Fats',
    imageUrl: cashewsImg,
    badge: 'High Protein'
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    category: 'nuts',
    shortDesc: 'Boosts brain health, improves memory & heart function.',
    fullDesc: 'Crisp premium walnut halves packed with ALA Omega-3 fatty acids that fight inflammation and support clear cognitive focus.',
    benefits: ['Rich in Plant Omega-3 (ALA)', 'Improves focus & mental sharpness', 'Promotes healthy vascular flow'],
    nutrients: 'Omega-3 Fatty Acids, Antioxidants, Vitamin B6',
    imageUrl: walnutsImg,
    badge: 'Omega-3 Rich'
  },
  {
    id: 'pistachios',
    name: 'Pistachios',
    category: 'nuts',
    shortDesc: 'Rich in antioxidants, supports eye health & healthy digestion.',
    fullDesc: 'Vibrant shelled green pistachios containing lutein and zeaxanthin for vision support along with prebiotic fiber for gut microbiome balance.',
    benefits: ['Protects eye health', 'Aids smooth digestion', 'Supports blood sugar management'],
    nutrients: 'Lutein, Zeaxanthin, Vitamin B6, Potassium',
    imageUrl: pistachiosImg,
    badge: 'Eye & Gut Health'
  },

  // SEEDS
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    category: 'seeds',
    shortDesc: 'High in fiber, omega-3 & supports overall health.',
    fullDesc: 'Organic chia seeds that expand with moisture to create a feeling of fullness, regulating digestion and sustained hydration.',
    benefits: ['Exceptional soluble dietary fiber', 'Sustained hydration & stamina', 'Supports healthy weight management'],
    nutrients: 'Dietary Fiber, Calcium, Omega-3, Phosphorus',
    imageUrl: chiaSeedsImg,
    badge: 'Super Fiber'
  },
  {
    id: 'flax-seeds',
    name: 'Flax Seeds',
    category: 'seeds',
    shortDesc: 'Rich in omega-3, aids digestion & supports heart health.',
    fullDesc: 'Finely ground cold-milled flax seeds rich in lignans and soluble fiber for heart and metabolic protection.',
    benefits: ['High concentration of lignans', 'Aids smooth intestinal mobility', 'Supports cholesterol balance'],
    nutrients: 'Lignans, Alpha-Linolenic Acid (ALA), Fiber',
    imageUrl: flaxseedsImg,
    badge: 'Heart Care'
  },
  {
    id: 'basil-seeds',
    name: 'Basil Seeds (Sabja)',
    category: 'seeds',
    shortDesc: 'Cooling for the body, aids digestion & supports skin health.',
    fullDesc: 'Traditional Indian cooling seeds renowned for reducing body heat, soothing acidity, and enhancing skin glow.',
    benefits: ['Natural body coolant', 'Relieves acidity & bloat', 'Rich in skin-nourishing flavonoids'],
    nutrients: 'Flavonoids, Polyphenols, Iron, Fiber',
    imageUrl: basilSeedsImg,
    badge: 'Body Coolant'
  },
  {
    id: 'watermelon-seeds',
    name: 'Watermelon Seeds',
    category: 'seeds',
    shortDesc: 'Good source of protein, iron & supports muscle health.',
    fullDesc: 'Nutrient-dense roasted kernels bursting with zinc, magnesium, and essential amino acids for muscle repair.',
    benefits: ['Accelerates muscle recovery', 'Boosts cellular metabolism', 'Supports healthy blood pressure'],
    nutrients: 'Iron, Protein, Magnesium, Zinc',
    imageUrl: watermelonSeedsImg,
    badge: 'Muscle Fuel'
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin Seeds',
    category: 'seeds',
    shortDesc: 'Rich in magnesium, supports better sleep & immunity.',
    fullDesc: 'Pristine raw green pumpkin seeds filled with tryptophan and magnesium to encourage deep restful sleep and strong immunity.',
    benefits: ['Supports serotonin & sleep cycles', 'Strengthens immune defenses', 'Promotes prostate & bone health'],
    nutrients: 'Tryptophan, Magnesium, Zinc, Antioxidants',
    imageUrl: pumpkinSeedsImg,
    badge: 'Immunity & Sleep'
  },
  {
    id: 'sunflower-seeds',
    name: 'Sunflower Seeds',
    category: 'seeds',
    shortDesc: 'High in Vitamin E, supports skin health & immunity.',
    fullDesc: 'Delicate nutty seeds packed with selenium and Vitamin E that neutralize free radicals and promote glowing skin.',
    benefits: ['Cellular antioxidant protection', 'Nourishes hair & skin', 'Improves vitality'],
    nutrients: 'Vitamin E, Selenium, Copper, Vitamin B1',
    imageUrl: sunflowerSeedsImg,
    badge: 'Radiant Skin'
  },

  // SUPER INGREDIENTS
  {
    id: 'fox-nuts',
    name: 'Fox Nuts (Makhana)',
    category: 'others',
    shortDesc: 'Low in calories, high in protein, supports bone health & digestion.',
    fullDesc: 'Puffed lotus seeds known in Ayurveda as a superfood — low glycemic index, high calcium, and easily digestible.',
    benefits: ['Ideal for weight management', 'High bioavailable calcium for bones', 'Soothes gastrointestinal tract'],
    nutrients: 'Calcium, Protein, Magnesium, Potassium',
    imageUrl: foxNutsImg,
    badge: 'Low Calorie Superfood'
  },
  {
    id: 'cardamom',
    name: 'Green Cardamom',
    category: 'others',
    shortDesc: 'Aids digestion, freshens breath & adds a natural aroma.',
    fullDesc: 'Hand-picked green aromatic pods providing natural fragrance without synthetic flavorings, while soothing stomach lining.',
    benefits: ['Natural soothing aroma', 'Relieves indigestion & gas', 'Fresh breath & oral health'],
    nutrients: 'Essential Oils, Cineole, Terpinene',
    imageUrl: greenCardamomImg,
    badge: 'Aromatic Digestion'
  }
];

export const PRODUCT_PACKS: ProductPack[] = [
  {
    id: 'pack-250g',
    name: 'Nutrimix Starter Pack',
    size: '250 grams',
    price: 299,
    originalPrice: 399,
    savings: 'Save ₹100 (25% OFF)',
    description: 'Perfect for first-time tasters. Lasts ~12-15 servings for a single person.',
    features: [
      '100% Pure Nuts & Superseeds',
      'Zero Added Refined Sugar',
      'Chemical & Preservative Free',
      'Airtight Resealable Pouch'
    ]
  },
  {
    id: 'pack-500g',
    name: 'Nutrimix Family Pack',
    size: '500 grams',
    price: 549,
    originalPrice: 749,
    isPopular: true,
    savings: 'Save ₹200 (27% OFF)',
    description: 'Our most loved family pack. Keeps parents, kids, and elders energized all month long.',
    features: [
      'Best Value for Daily Family Scoop',
      'Includes 12+ Super Nuts & Seeds',
      'Free Express Delivery',
      'Airtight Eco-Glass Storage Jar'
    ]
  },
  {
    id: 'pack-1000g',
    name: 'Nutrimix Super Saver Pack',
    size: '1000 grams (1 KG)',
    price: 999,
    originalPrice: 1399,
    savings: 'Save ₹400 (29% OFF)',
    description: 'Maximum savings for fitness enthusiasts and large families.',
    features: [
      'Maximum Savings Per Gram',
      'Free Express Home Delivery',
      'Bonus Healthy Recipe E-Booklet',
      'Priority Customer Support'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [];

export const FAQS: FAQItem[] = [
  {
    category: 'Product & Quality',
    question: 'Does Siriswada Nutrimix contain any added sugar or sweetening agents?',
    answer: 'No, absolutely zero added refined sugar, artificial sweeteners, or preservatives. The mild sweetness comes naturally from premium nuts and fox nuts.'
  },
  {
    category: 'Product & Quality',
    question: 'Is it suitable for toddlers and young children?',
    answer: 'Yes! Siriswada Nutrimix is formulated for complete family nutrition across all ages. For young toddlers (under 2 years), start with half a teaspoon in warm milk or porridge.'
  },
  {
    category: 'Usage & Preparation',
    question: 'How should I consume Siriswada Nutrimix?',
    answer: 'Simply add 1-2 scoops (approx. 15g-20g) to a glass of warm or cold milk, water, morning smoothie, oat bowl, or porridge. Stir thoroughly and enjoy!'
  },
  {
    category: 'Ordering & Delivery',
    question: 'How can I place an order?',
    answer: 'You can order directly through our website shop, or click the "Order via WhatsApp / Call" button to chat with our team directly at +91 9148256469.'
  },
  {
    category: 'Storage & Shelf Life',
    question: 'What is the shelf life and storage instructions?',
    answer: 'Siriswada Nutrimix stays fresh for 6 months from the date of manufacture. Store in a cool, dry place inside an airtight container or seal our resealable pouch tightly after every use.'
  }
];
