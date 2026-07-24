export type IngredientCategory = 'nuts' | 'seeds' | 'others';

export interface Ingredient {
  id: string;
  name: string;
  category: IngredientCategory;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  nutrients: string;
  imageUrl: string;
  badge?: string;
}

export interface ProductPack {
  id: string;
  name: string;
  size: string;
  price: number;
  originalPrice: number;
  isPopular?: boolean;
  savings: string;
  description: string;
  features: string[];
}

export interface CartItem {
  pack: ProductPack;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  verified: boolean;
  avatar: string;
  tag: 'Family' | 'Fitness' | 'Senior' | 'Kids';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
