import React, { useState } from 'react';
import { 
  X, ShoppingBag, Plus, Minus, Trash2, 
  ArrowRight, ShieldCheck, MessageSquare, CheckCircle2, User, MapPin, Phone 
} from 'lucide-react';
import { CartItem } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);
  const totalMrp = cartItems.reduce((acc, item) => acc + (item.product.mrp || item.product.price || 0) * item.quantity, 0);
  const savings = totalMrp - subtotal;
  const targetWhatsAppNumber = "919655053327"; // Provided testing WhatsApp number

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    // Generate formatted WhatsApp message
    let message = `*NEW ORDER - LEVIX BIO SCIENCE PVT LTD*\n`;
    message += `----------------------------------------\n`;
    
    if (customerName.trim()) {
      message += `*Customer:* ${customerName.trim()}\n`;
    }
    if (customerPhone.trim()) {
      message += `*Phone:* ${customerPhone.trim()}\n`;
    }
    if (deliveryAddress.trim()) {
      message += `*Delivery Address:* ${deliveryAddress.trim()}\n`;
    }
    if (orderNotes.trim()) {
      message += `*Notes:* ${orderNotes.trim()}\n`;
    }

    message += `----------------------------------------\n`;
    message += `*ITEMS ORDERED:*\n`;
    
    cartItems.forEach((item, index) => {
      const price = item.product.price || 0;
      const itemTotal = price * item.quantity;
      message += `${index + 1}. *${item.product.name}* (${item.product.packSize})\n`;
      message += `   Qty: ${item.quantity} x ₹${price.toLocaleString('en-IN')} = *₹${itemTotal.toLocaleString('en-IN')}*\n`;
    });

    message += `----------------------------------------\n`;
    message += `*TOTAL AMOUNT: ₹${subtotal.toLocaleString('en-IN')}*\n`;
    if (savings > 0) {
      message += `*Total Savings:* ₹${savings.toLocaleString('en-IN')}\n`;
    }
    message += `----------------------------------------\n`;
    message += `Please confirm my order and share payment/delivery schedule. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#0B1324]/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#CBD5E1] text-left animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0066CC] text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#0B1324] font-['Manrope']">
                  Your Order Cart
                </h2>
                <p className="text-xs text-[#64748B] font-mono">
                  {totalItemsCount} item{totalItemsCount !== 1 ? 's' : ''} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#64748B] hover:text-[#0B1324] hover:bg-[#E2E8F0] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body: Cart Items & Details */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F1F5F9] text-[#64748B] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="text-base font-bold text-[#0B1324]">Your cart is empty</h3>
                <p className="text-xs text-[#64748B] max-w-xs mx-auto">
                  Browse our formulations and click &quot;Add to Cart&quot; to order directly via WhatsApp.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-[#0066CC] text-white text-xs font-bold shadow hover:bg-[#0052CC] transition-colors"
                >
                  Explore Formulations
                </button>
              </div>
            ) : (
              <>
                {/* List of Products in Cart */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                    <span>Selected Products</span>
                    <button 
                      onClick={onClearCart}
                      className="text-red-600 hover:underline font-semibold"
                    >
                      Clear All
                    </button>
                  </div>

                  {cartItems.map((item) => {
                    const price = item.product.price || 0;
                    const itemTotal = price * item.quantity;
                    return (
                      <div
                        key={item.product.id}
                        className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center gap-3.5"
                      >
                        {/* Thumbnail */}
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-[#E2E8F0] shrink-0"
                        />

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#0B1324] truncate font-['Manrope']">
                            {item.product.name}
                          </h4>
                          <p className="text-[11px] text-[#64748B] truncate">
                            {item.product.packSize}
                          </p>
                          <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="text-xs font-bold font-mono text-[#0066CC]">
                              ₹{price.toLocaleString('en-IN')}
                            </span>
                            {item.product.mrp && item.product.mrp > price && (
                              <span className="text-[10px] text-[#94A3B8] line-through font-mono">
                                ₹{item.product.mrp.toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 bg-white border border-[#CBD5E1] rounded-xl p-1 shrink-0">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 rounded-lg text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0B1324]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold font-mono text-[#0B1324]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 rounded-lg text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0B1324]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1.5 text-[#94A3B8] hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Customer Details Form (Optional for WhatsApp message) */}
                <div className="p-4 rounded-2xl bg-white border border-[#CBD5E1] space-y-3">
                  <div className="text-xs font-bold font-mono uppercase text-[#0066CC] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Delivery Details (For WhatsApp Bill)</span>
                  </div>

                  <div className="space-y-2.5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name (e.g. Dr. Ramesh / Patient)"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#0066CC]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#0066CC]"
                      />
                      <input
                        type="text"
                        placeholder="City / Pincode"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#0066CC]"
                      />
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-2 text-xs">
                  <div className="flex justify-between text-[#64748B]">
                    <span>Items Total ({totalItemsCount} items)</span>
                    <span className="font-mono text-[#0B1324] font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Discount / MRP Savings</span>
                      <span className="font-mono">-₹{savings.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#64748B]">
                    <span>Delivery</span>
                    <span className="text-emerald-600 font-bold">Free Shipping</span>
                  </div>
                  <div className="pt-2 border-t border-[#E2E8F0] flex justify-between text-sm font-bold text-[#0B1324] font-['Manrope']">
                    <span>Total Amount</span>
                    <span className="text-[#0066CC] font-mono text-base">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#E2E8F0] bg-white space-y-2.5">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 hover:shadow-xl transition-all duration-300 touch-target group"
                id="whatsapp-checkout-btn"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Order via WhatsApp (₹{subtotal.toLocaleString('en-IN')})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0066CC]" />
                <span>Orders forwarded directly to WhatsApp: 9655053327</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
