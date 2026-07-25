import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyHighlights } from './components/KeyHighlights';
import { IngredientsSection } from './components/IngredientsSection';
import { HealthBenefits } from './components/HealthBenefits';
import { HowToUse } from './components/HowToUse';
import { ShopSection } from './components/ShopSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { CartItem, ProductPack } from './types';
import { StorageInfo } from "./components/StorageInfo";
import { ComingSoon } from "./components/comingsoon";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { AboutFounder } from "./components/AboutFounder";
export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (pack: ProductPack, quantity: number) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.pack.id === pack.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { pack, quantity }];
    });

    // Show temporary feedback banner and open cart
    setToastMessage(`Added ${quantity} x ${pack.name} to your cart!`);
    setTimeout(() => setToastMessage(null), 3000);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (packId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(packId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.pack.id === packId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (packId: string) => {
    setCart(prev => prev.filter(item => item.pack.id !== packId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <Routes>

    {/* ================= HOME PAGE ================= */}
    <Route
      path="/"
      element={
        <div className="min-h-screen bg-stone-50 text-neutral-900 font-sans selection:bg-amber-200 selection:text-amber-950">

          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-neutral-900 text-white text-xs font-semibold shadow-2xl border border-neutral-700 animate-bounce">
              {toastMessage}
            </div>
          )}

          {/* Navigation */}
          <Navbar
            cartCount={cartCount}
            onOpenCart={() => setIsCartOpen(true)}
            onNavigate={handleNavigate}
          />

          {/* Main Content */}
          <main>
            <Hero onNavigate={handleNavigate} />

            <KeyHighlights />

            <IngredientsSection />

            <HealthBenefits />

            <HowToUse />

            <ShopSection onAddToCart={handleAddToCart} />

            <ComingSoon />

            <Testimonials />

            <FAQSection />

            <StorageInfo />
            
            <AboutFounder />
          </main>

          {/* Cart Drawer */}
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />

          {/* Footer */}
          <Footer />

        </div>
      }
    />

    {/* ================= ADMIN LOGIN ================= */}
    <Route
      path="/admin"
      element={<AdminLogin />}
    />

    {/* ================= ADMIN DASHBOARD ================= */}
    <Route
      path="/dashboard"
      element={<AdminDashboard />}
    />

    </Routes>
  );
}