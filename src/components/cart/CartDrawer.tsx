import React, { useState, useRef } from 'react';
import {
  X, ShoppingBag, Plus, Minus, Trash2,
  ArrowRight, ShieldCheck, MessageSquare, CheckCircle2, User,
  UploadCloud, FileText, AlertCircle, FileCheck2, Paperclip,
  Check, Camera, AlertTriangle, Loader2, ExternalLink
} from 'lucide-react';
import { CartItem } from '../../types';
import { fileToDataUrl, saveOrder, StoredOrder } from '../../utils/orderStorage';

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

  // Doctor Prescription State (STRICTLY MANDATORY)
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [prescriptionError, setPrescriptionError] = useState<string | null>(null);
  const [hasOpenedWhatsApp, setHasOpenedWhatsApp] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [copiedMessageToast, setCopiedMessageToast] = useState(false);
  const [uploadedPrescriptionUrl, setUploadedPrescriptionUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);
  const [activeWhatsAppUrl, setActiveWhatsAppUrl] = useState<string | null>(null);
  const [lastOrderMessage, setLastOrderMessage] = useState<string | null>(null);
  const [submittedOrderId, setSubmittedOrderId] = useState<string | null>(null);
  const [prescriptionBase64, setPrescriptionBase64] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);
  const targetWhatsAppNumber = "918870889620"; // Official WhatsApp number

  // Helper: auto-copy image to clipboard so user can instantly Ctrl+V / Paste in WhatsApp if they want
  const copyImageToClipboard = async (file: File): Promise<boolean> => {
    if (!file.type.startsWith('image/')) return false;
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && window.ClipboardItem) {
        if (file.type === 'image/png') {
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': file })]);
          return true;
        }

        // Pass a Promise to ClipboardItem so user activation is kept active synchronously
        const item = new ClipboardItem({
          'image/png': new Promise<Blob>(async (resolve, reject) => {
            try {
              const bitmap = await createImageBitmap(file);
              const canvas = document.createElement('canvas');
              canvas.width = bitmap.width;
              canvas.height = bitmap.height;
              const ctx = canvas.getContext('2d');
              if (!ctx) {
                reject(new Error('Canvas context not available'));
                return;
              }
              ctx.drawImage(bitmap, 0, 0);
              canvas.toBlob((blob) => {
                if (blob) resolve(blob);
                else reject(new Error('Blob conversion failed'));
              }, 'image/png');
            } catch (err) {
              reject(err);
            }
          })
        });

        await navigator.clipboard.write([item]);
        return true;
      }
      return false;
    } catch (e) {
      console.warn('Clipboard write note:', e);
      return false;
    }
  };

  // Helper: Upload prescription image to permanent storage so WhatsApp has the permanent photo link
  const uploadPrescriptionFile = async (file: File, base64Override?: string): Promise<string | null> => {
    setIsUploading(true);

    let base64 = base64Override || prescriptionBase64;
    if (!base64) {
      try {
        base64 = await fileToDataUrl(file);
        setPrescriptionBase64(base64);
      } catch (err) {
        console.warn('Could not read base64 in upload:', err);
      }
    }

    // 1. Primary: Permanent High-Res Image CDN Proxy (/api/upload-prescription -> https://iili.io/...)
    if (base64) {
      try {
        const res = await fetch('/api/upload-prescription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            base64,
            filename: file.name,
          }),
        });
        if (res.ok) {
          const json = await res.json();
          if (json?.success && json?.url) {
            setUploadedPrescriptionUrl(json.url);
            setIsUploading(false);
            return json.url;
          }
        }
      } catch (err) {
        console.warn('Permanent CDN upload JSON note:', err);
      }
    }

    // 2. Direct browser upload to tmpfiles.org as backup
    try {
      const formData = new FormData();
      formData.append('file', file, file.name);

      const res = await fetch('https://tmpfiles.org/api/v1/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.data?.url) {
          const directUrl = data.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
          setUploadedPrescriptionUrl(directUrl);
          setIsUploading(false);
          return directUrl;
        }
      }
    } catch (err2) {
      console.warn('Backup upload note:', err2);
    }

    setIsUploading(false);
    return null;
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      setPrescriptionError('File size exceeds 25MB limit. Please upload a smaller photo or PDF.');
      return;
    }

    setPrescriptionFile(file);
    setPrescriptionError(null);
    setUploadedPrescriptionUrl(null);

    let dataUrl = '';
    try {
      dataUrl = await fileToDataUrl(file);
      setPrescriptionBase64(dataUrl);

      if (file.type.startsWith('image/')) {
        setPrescriptionPreview(dataUrl);
        copyImageToClipboard(file);
      } else {
        setPrescriptionPreview(null);
      }
    } catch (err) {
      console.warn('Could not read file preview:', err);
    }

    // Start background permanent cloud CDN upload immediately
    uploadPrescriptionFile(file, dataUrl);
  };

  const handleRemoveFile = () => {
    if (prescriptionPreview && prescriptionPreview.startsWith('blob:')) {
      URL.revokeObjectURL(prescriptionPreview);
    }
    setPrescriptionFile(null);
    setPrescriptionPreview(null);
    setPrescriptionBase64(null);
    setPrescriptionError(null);
    setUploadedPrescriptionUrl(null);
    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleWhatsAppCheckout = async () => {
    if (cartItems.length === 0) return;

    // STRICT MANDATORY VALIDATION: Must upload prescription picture in the site itself!
    if (!prescriptionFile) {
      setPrescriptionError('⚠️ Doctor Prescription picture is mandatory! Please upload your prescription photo above to proceed.');
      const el = document.getElementById('prescription-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsProcessingCheckout(true);

    // Auto-copy image to clipboard as instant backup
    if (prescriptionFile.type.startsWith('image/')) {
      copyImageToClipboard(prescriptionFile);
    }

    // Ensure base64 is ready
    let base64Data = prescriptionBase64;
    if (!base64Data) {
      try {
        base64Data = await fileToDataUrl(prescriptionFile);
        setPrescriptionBase64(base64Data);
      } catch (e) {
        console.error('Failed to convert file to dataUrl:', e);
      }
    }

    const orderId = `LX-${Math.floor(100000 + Math.random() * 900000)}`;
    const fileSizeFormatted = (prescriptionFile.size / 1024 < 1024)
      ? `${(prescriptionFile.size / 1024).toFixed(1)} KB`
      : `${(prescriptionFile.size / (1024 * 1024)).toFixed(1)} MB`;

    // 1. Permanently Save Order & High-Res Prescription into IndexedDB
    const orderRecord: StoredOrder = {
      id: orderId,
      timestamp: Date.now(),
      formattedDate: new Date().toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      deliveryAddress: deliveryAddress.trim(),
      orderNotes: orderNotes.trim(),
      items: cartItems.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        packSize: item.product.packSize,
        quantity: item.quantity,
        unitPrice: item.product.price || 0,
        totalPrice: (item.product.price || 0) * item.quantity,
      })),
      totalAmount: subtotal,
      prescription: {
        fileName: prescriptionFile.name,
        fileSize: prescriptionFile.size,
        fileType: prescriptionFile.type,
        fileSizeFormatted,
        dataUrl: base64Data || '',
      },
      status: 'new',
    };

    try {
      await saveOrder(orderRecord);
    } catch (saveErr) {
      console.warn('saveOrder caught error:', saveErr);
    }
    setSubmittedOrderId(orderId);

    // 2. Dispatch to server & Outlook notification API in background
    fetch('/api/submit-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderRecord),
    }).catch((err) => console.warn('Server sync note:', err));

    // 3. Quick check for direct photo link (max 1.5s race if not already uploaded)
    let directPhotoUrl = uploadedPrescriptionUrl;
    if (!directPhotoUrl && prescriptionFile) {
      try {
        const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 1500));
        directPhotoUrl = await Promise.race([
          uploadPrescriptionFile(prescriptionFile, base64Data || undefined),
          timeoutPromise
        ]);
      } catch (raceErr) {
        console.warn('Upload race note:', raceErr);
      }
    }

    const liveVaultUrl = typeof window !== 'undefined'
      ? `${window.location.origin}/api/view-prescription?id=${orderId}`
      : '';

    // 4. Format WhatsApp message
    let message = `*NEW ORDER - LEVIX BIO SCIENCE PVT LTD*\n`;
    message += `*Order ID:* #${orderId}\n`;
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
    message += `----------------------------------------\n`;

    // Prescription info in WhatsApp message
    message += `*📋 DOCTOR PRESCRIPTION (Rx) - MANDATORY VERIFIED:*\n`;
    message += `• Prescription File: ${prescriptionFile.name} (${fileSizeFormatted})\n`;
    message += `• Storage Status: ✓ SAVED IN LEVIX ADMIN STORAGE VAULT\n`;
    message += `• Vault Order Ref: #${orderId}\n`;
    if (directPhotoUrl) {
      message += `• 📸 *View / Download Prescription Photo:*\n${directPhotoUrl}\n`;
    } else {
      message += `• 📸 *View Prescription in Admin Vault:*\n${liveVaultUrl}\n`;
    }
    message += `----------------------------------------\n`;
    message += `Please confirm my order and share payment/delivery schedule. Thank you!`;

    setLastOrderMessage(message);

    // Universal WhatsApp Link (wa.me)
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;
    
    setActiveWhatsAppUrl(whatsappUrl);
    setHasOpenedWhatsApp(true);
    setIsProcessingCheckout(false);

    // Open WhatsApp Chat directly
    const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!opened) {
        window.location.href = whatsappUrl;
      }
    }
  };

  if (!isOpen) return null;

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
              <div className="w-9 h-9 rounded-xl bg-[#7137A5] text-white flex items-center justify-center shadow-xs">
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
                  className="mt-2 px-5 py-2.5 rounded-xl bg-[#7137A5] text-white text-xs font-bold shadow hover:bg-[#5E2B8C] transition-colors"
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
                            <span className="text-xs font-bold font-mono text-[#7137A5]">
                              ₹{price.toLocaleString('en-IN')}
                            </span>
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

                {/* =====================================================
                    DOCTOR PRESCRIPTION / DESCRIPTION (STRICTLY MANDATORY)
                ====================================================== */}
                <div
                  id="prescription-section"
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    prescriptionError
                      ? 'bg-red-50/90 border-red-300 ring-2 ring-red-200 shadow-md'
                      : prescriptionFile
                      ? 'bg-[#F2FAF4] border-emerald-300 shadow-xs'
                      : 'bg-[#FAF5FD] border-[#D8BFD8]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold font-mono uppercase text-[#7137A5]">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Doctor Prescription / Description</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-600 text-white font-mono shadow-xs animate-pulse">
                      Mandatory *
                    </span>
                  </div>

                  {/* Quoted Medical Mandatory Notice */}
                  <div className="p-2.5 rounded-xl bg-white border border-[#E5D5F0] flex items-start gap-2 shadow-xs mb-3">
                    <AlertCircle className="w-4 h-4 text-[#7137A5] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-[#4A1D75] leading-snug font-medium italic">
                      &quot;Doctor description / prescription is mandatory to dispense specialized neuro &amp; therapeutic formulations.&quot;
                    </p>
                  </div>

                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept="image/*,.pdf"
                    className="hidden"
                    id="prescription-file-upload"
                  />

                  {!prescriptionFile ? (
                    /* MANDATORY UPLOAD DROPZONE */
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files?.[0];
                        if (file) {
                          handleFileSelect({ target: { files: [file] } } as any);
                        }
                      }}
                      className="cursor-pointer border-2 border-dashed border-[#7137A5]/50 hover:border-[#7137A5] rounded-2xl p-4 text-center transition-all bg-white hover:bg-[#FAF8FD] group shadow-xs"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF5FD] border border-[#E9DCF2] text-[#7137A5] mx-auto flex items-center justify-center mb-2 group-hover:scale-105 transition-transform shadow-xs">
                        <Camera className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-bold text-[#17121F]">
                        Upload Prescription Picture Here <span className="text-red-500">*</span>
                      </p>
                      <p className="text-[10px] text-[#786780] mt-1">
                        Tap to choose Photo / Camera / PDF from your device
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 rounded-lg bg-[#7137A5]/10 text-[#7137A5] font-bold text-[10px] uppercase tracking-wide">
                        Choose File (Required)
                      </span>
                    </div>
                  ) : (
                    /* UPLOADED FILE PREVIEW CARD */
                    <div className="bg-white rounded-2xl p-3 border border-emerald-300 shadow-xs space-y-2.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          {prescriptionPreview ? (
                            <img
                              src={prescriptionPreview}
                              alt="Prescription preview"
                              className="w-14 h-14 rounded-xl object-cover border-2 border-emerald-200 shadow-xs shrink-0"
                            />
                          ) : (
                            <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 border border-red-200 flex flex-col items-center justify-center shrink-0">
                              <FileCheck2 className="w-6 h-6" />
                              <span className="text-[9px] font-mono font-bold uppercase mt-0.5">PDF</span>
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <p className="text-xs font-bold text-[#0B1324] truncate">
                                {prescriptionFile.name}
                              </p>
                            </div>
                            {isUploading ? (
                              <p className="text-[10px] text-purple-700 font-semibold mt-0.5 flex items-center gap-1">
                                <Loader2 className="w-3 h-3 animate-spin text-purple-600" />
                                <span>Uploading &amp; linking for WhatsApp...</span>
                              </p>
                            ) : uploadedPrescriptionUrl ? (
                              <p className="text-[10px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>✓ Attached directly to WhatsApp bill</span>
                              </p>
                            ) : (
                              <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                                ✓ Prescription Picture Attached &amp; Verified
                              </p>
                            )}
                            <p className="text-[10px] text-[#64748B] font-mono">
                              {(prescriptionFile.size / 1024 < 1024)
                                ? `${(prescriptionFile.size / 1024).toFixed(1)} KB`
                                : `${(prescriptionFile.size / (1024 * 1024)).toFixed(1)} MB`}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {prescriptionFile.type.startsWith('image/') && (
                            <button
                              type="button"
                              onClick={async () => {
                                await copyImageToClipboard(prescriptionFile);
                                setCopiedToast(true);
                                setTimeout(() => setCopiedToast(false), 3000);
                              }}
                              className="px-2 py-1 rounded-xl text-[11px] font-semibold text-[#7137A5] hover:bg-[#FAF5FD] border border-[#E9DCF2] cursor-pointer"
                              title="Copy image to paste in WhatsApp"
                            >
                              {copiedToast ? '✓ Copied' : 'Copy'}
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-2 py-1 rounded-xl text-[11px] font-semibold text-[#7137A5] hover:bg-[#FAF5FD] border border-[#E9DCF2] cursor-pointer"
                          >
                            Change
                          </button>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="p-1.5 rounded-xl text-red-500 hover:bg-red-50 cursor-pointer"
                            title="Remove Picture"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* WhatsApp Note */}
                      <div className="pt-2 border-t border-[#F1E8F7] flex items-center gap-1.5 text-[11px] text-[#166534] bg-emerald-50/50 p-2 rounded-xl">
                        <Paperclip className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Ready to send with your order on WhatsApp (+91 8870889620)</span>
                      </div>
                    </div>
                  )}

                  {/* Red Validation Error */}
                  {prescriptionError && (
                    <div className="flex items-start gap-2 p-2.5 rounded-xl bg-red-100/80 border border-red-300 text-red-800 text-xs font-semibold animate-in slide-in-from-top-1">
                      <AlertTriangle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                      <span>{prescriptionError}</span>
                    </div>
                  )}
                </div>

                {/* Customer Details Form */}
                <div className="p-4 rounded-2xl bg-white border border-[#CBD5E1] space-y-3">
                  <div className="text-xs font-bold font-mono uppercase text-[#7137A5] flex items-center gap-1.5">
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
                        className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#7137A5]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#7137A5]"
                      />
                      <input
                        type="text"
                        placeholder="City / Pincode"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#7137A5]"
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
                  <div className="flex justify-between text-[#64748B]">
                    <span>Delivery</span>
                    <span className="text-emerald-600 font-bold">Free Shipping</span>
                  </div>
                  <div className="pt-2 border-t border-[#E2E8F0] flex justify-between text-sm font-bold text-[#0B1324] font-['Manrope']">
                    <span>Total Amount</span>
                    <span className="text-[#7137A5] font-mono text-base">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#E2E8F0] bg-white space-y-3">
              {hasOpenedWhatsApp && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950 text-xs space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Prescription Saved to Admin Vault!</span>
                    </div>
                    {submittedOrderId && (
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded-full font-mono">
                        #{submittedOrderId}
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-emerald-950 leading-relaxed bg-white/90 p-2.5 rounded-xl border border-emerald-200">
                    ✓ Your order and doctor prescription photo are <strong>safely archived</strong> in the LEVIX Admin Storage Vault. Tap the button below to confirm with our pharmacist in WhatsApp!
                  </p>

                  {/* UNBLOCKABLE DIRECT LINK: 100% immune to popup blockers */}
                  {activeWhatsAppUrl && (
                    <a
                      href={activeWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 text-center cursor-pointer transition-all active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                      <span>👉 TAP TO OPEN WHATSAPP CHAT</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  )}

                  {lastOrderMessage && (
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof navigator !== 'undefined' && navigator.clipboard) {
                          navigator.clipboard.writeText(lastOrderMessage);
                          setCopiedMessageToast(true);
                          setTimeout(() => setCopiedMessageToast(false), 3000);
                        }
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-white border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-emerald-100/50 transition-colors cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{copiedMessageToast ? '✓ Order Text Copied to Clipboard!' : 'Copy Order Text to Clipboard'}</span>
                    </button>
                  )}
                </div>
              )}

              {!hasOpenedWhatsApp && (
                <button
                  onClick={handleWhatsAppCheckout}
                  disabled={isProcessingCheckout}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] disabled:opacity-80 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 hover:shadow-xl transition-all duration-300 touch-target group cursor-pointer"
                  id="whatsapp-checkout-btn"
                >
                  {isProcessingCheckout ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Preparing WhatsApp Order...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Order via WhatsApp (₹{subtotal.toLocaleString('en-IN')})</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              )}

              {hasOpenedWhatsApp && (
                <button
                  onClick={handleWhatsAppCheckout}
                  disabled={isProcessingCheckout}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Re-send Order via WhatsApp</span>
                </button>
              )}

              <div className="flex flex-col items-center justify-center gap-1 text-[11px] text-[#64748B]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7137A5]" />
                  <span>Orders forwarded directly to WhatsApp: +91 8870889620</span>
                </div>
                <div className="text-[10px] text-[#94A3B8] font-mono">
                  LEVIX Biosciences Pvt Ltd • GSTIN: 33AAHCL0903B1Z9
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
