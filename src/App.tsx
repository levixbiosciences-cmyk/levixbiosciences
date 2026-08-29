import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { AboutMinimal } from './components/sections/AboutMinimal';
import { FormulationsMinimal } from './components/sections/FormulationsMinimal';
import { QualityMinimal } from './components/sections/QualityMinimal';
import { ContactMinimal } from './components/sections/ContactMinimal';
import { FooterMinimal } from './components/footer/FooterMinimal';
import { FloatingQuickCall } from './components/common/FloatingQuickCall';
import { CartDrawer } from './components/cart/CartDrawer';
import { CartItem, Product } from './types';
import { ShoppingBag } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // IntersectionObserver to sync active section with Navbar on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'formulations', 'quality', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart Management Functions
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const cartProductIds = cartItems.reduce((acc, item) => {
    acc[item.product.id] = item.quantity;
    return acc;
  }, {} as { [key: string]: number });

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-['DM_Sans'] antialiased selection:bg-[#0066CC] selection:text-white">
      
      {/* Clean Minimal Responsive Navbar with Cart Button */}
      <Navbar 
        activeSection={activeSection} 
        onSectionClick={handleSectionClick}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Single-Page Cohesive Flow */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero 
          onExploreClick={() => handleSectionClick('formulations')} 
          onContactClick={() => handleSectionClick('contact')} 
        />

        {/* 2. About Section */}
        <AboutMinimal 
          onContactClick={() => handleSectionClick('contact')} 
        />

        {/* 3. Formulations Showcase with Add to Cart and WhatsApp buy */}
        <FormulationsMinimal 
          onAddToCart={handleAddToCart}
          cartProductIds={cartProductIds}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 4. Quality Standards */}
        <QualityMinimal />

        {/* 5. Contact Section (Chennai Headquarters) */}
        <ContactMinimal />
      </main>

      {/* Clean Minimal Footer */}
      <FooterMinimal onSectionClick={handleSectionClick} />

      {/* Floating 1-Tap Mobile Call / WhatsApp Bar */}
      <FloatingQuickCall />

      {/* Floating Cart Trigger Widget (Desktop & Tablet) */}
      {totalCartCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#0066CC] hover:bg-[#0052CC] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-5 border-2 border-white/20 touch-target"
          id="floating-cart-btn"
          aria-label="View Cart and Order"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#25D366] text-[#0B1324] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
              {totalCartCount}
            </span>
          </div>
          <span className="hidden sm:inline font-bold text-xs">
            View Cart ({totalCartCount})
          </span>
        </button>
      )}

      {/* WhatsApp Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}

export default App;
