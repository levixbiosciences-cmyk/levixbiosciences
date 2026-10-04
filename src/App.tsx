import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { AboutMinimal } from './components/sections/AboutMinimal';
import { FormulationsMinimal } from './components/sections/FormulationsMinimal';
import { QualityMinimal } from './components/sections/QualityMinimal';
import { ServicesMinimal } from './components/sections/ServicesMinimal';
import { ContactMinimal } from './components/sections/ContactMinimal';
import { FooterMinimal } from './components/footer/FooterMinimal';
import { FloatingQuickCall } from './components/common/FloatingQuickCall';
import { CartDrawer } from './components/cart/CartDrawer';
import { AdminPortalModal } from './components/admin/AdminPortalModal';
import { CartItem, Product } from './types';
import { ShoppingBag } from 'lucide-react';
import { NeuralSignalNetwork } from './components/common/NeuralSignalNetwork';
import { LoadingScreen } from './components/common/LoadingScreen';

export function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Custom event listener to replay intro if requested
  useEffect(() => {
    const handleReplayIntro = () => setShowLoading(true);
    window.addEventListener('replay-intro', handleReplayIntro);
    return () => window.removeEventListener('replay-intro', handleReplayIntro);
  }, []);

  // Check URL hash for direct admin access (#admin) and custom cart open events
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin') {
        setIsAdminOpen(true);
      }
    };
    const handleOpenCart = () => setIsCartOpen(true);

    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('open-cart', handleOpenCart);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('open-cart', handleOpenCart);
    };
  }, []);

  // IntersectionObserver to sync active section with Navbar on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'formulations', 'quality', 'services', 'contact'];
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
    <div className="min-h-screen flex flex-col bg-[#FAF8FC] text-[#0F172A] font-['DM_Sans'] antialiased selection:bg-[#7137A5] selection:text-white relative">
      
      {/* Impressive Biotech DNA Intro & Preloader */}
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}

      {/* Global Biological Brain Nerve Process Background */}
      <NeuralSignalNetwork fixed variant="light" opacity={0.42} />

      {/* Clean Minimal Responsive Navbar with Cart Button */}
      <Navbar 
        activeSection={activeSection} 
        onSectionClick={handleSectionClick}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Single-Page Cohesive Flow */}
      <main className="flex-1 w-full overflow-x-hidden relative z-10">
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

        {/* 5. Pharma Capabilities & Services */}
        <ServicesMinimal 
          onContactClick={() => handleSectionClick('contact')} 
          onExploreFormulations={() => handleSectionClick('formulations')} 
        />

        {/* 6. Contact Section (Chennai Headquarters) */}
        <ContactMinimal />
      </main>

      {/* Clean Minimal Footer */}
      <FooterMinimal
        onSectionClick={handleSectionClick}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Floating 1-Tap Mobile Call / WhatsApp Bar */}
      <FloatingQuickCall />

      {/* Floating Cart Trigger Widget (Above mobile bar on mobile, bottom right on desktop) */}
      {totalCartCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 bg-[#7137A5] hover:bg-[#5D278C] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-5 border-2 border-white/40 cursor-pointer touch-target"
          id="floating-cart-btn"
          aria-label="View Cart and Order"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#25D366] text-[#0B1324] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
              {totalCartCount}
            </span>
          </div>
          <span className="inline font-bold text-xs">
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

      {/* Admin Storage Vault Modal */}
      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => {
          setIsAdminOpen(false);
          if (window.location.hash === '#admin') {
            history.pushState('', document.title, window.location.pathname + window.location.search);
          }
        }}
      />

    </div>
  );
}

export default App;
