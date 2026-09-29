import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Lock,
  Mail,
  ShieldCheck,
  Search,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  ExternalLink,
  Trash2,
  RefreshCw,
  Phone,
  MessageCircle,
  FileText,
  AlertCircle,
  ZoomIn,
  ZoomOut,
  RotateCw,
  LogOut,
  Package,
} from 'lucide-react';
import {
  StoredOrder,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
  downloadPrescriptionFile,
} from '../../utils/orderStorage';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ADMIN_EMAIL = 'levixbiosciences@outlook.com';
const ADMIN_PASS = 'Nabila@2020';

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('levix_admin_auth') === 'true';
  });

  const [loginEmail, setLoginEmail] = useState(ADMIN_EMAIL);
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'verified' | 'delivered'>('all');

  // Fullscreen Prescription Lightbox Viewer state
  const [viewingPrescription, setViewingPrescription] = useState<{
    order: StoredOrder;
    zoom: number;
    rotation: number;
  } | null>(null);

  const loadOrders = async () => {
    setIsLoading(true);
    try {
      const localData = await getAllOrders();
      let cloudData: StoredOrder[] = [];

      try {
        const res = await fetch('/api/get-orders');
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json?.orders)) {
            cloudData = json.orders;
          }
        }
      } catch (cloudErr) {
        console.warn('Cloud orders fetch note:', cloudErr);
      }

      // Merge unique by Order ID
      const orderMap = new Map<string, StoredOrder>();
      [...cloudData, ...localData].forEach((ord) => {
        if (ord && ord.id && !orderMap.has(ord.id)) {
          orderMap.set(ord.id, ord);
        }
      });

      const merged = Array.from(orderMap.values()).sort(
        (a, b) => (b.timestamp || 0) - (a.timestamp || 0)
      );

      setOrders(merged);
    } catch (err) {
      console.error('Failed to load orders:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadOrders();
    }
  }, [isOpen, isAuthenticated]);

  // Listen for real-time order updates
  useEffect(() => {
    const handleOrderEvent = () => {
      if (isAuthenticated) {
        loadOrders();
      }
    };

    window.addEventListener('levix-order-saved', handleOrderEvent);
    window.addEventListener('levix-order-updated', handleOrderEvent);
    window.addEventListener('levix-order-deleted', handleOrderEvent);

    return () => {
      window.removeEventListener('levix-order-saved', handleOrderEvent);
      window.removeEventListener('levix-order-updated', handleOrderEvent);
      window.removeEventListener('levix-order-deleted', handleOrderEvent);
    };
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = loginEmail.trim().toLowerCase();
    const cleanPass = loginPassword.trim();

    if (
      (cleanEmail === ADMIN_EMAIL.toLowerCase() || cleanEmail === 'admin') &&
      cleanPass === ADMIN_PASS
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem('levix_admin_auth', 'true');
      setLoginError(null);
      loadOrders();
    } else {
      setLoginError('Invalid Email ID or Password. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('levix_admin_auth');
    setLoginPassword('');
  };

  const handleStatusChange = async (id: string, newStatus: StoredOrder['status']) => {
    await updateOrderStatus(id, newStatus);
    setOrders((prev) =>
      prev.map((ord) => (ord.id === id ? { ...ord, status: newStatus } : ord))
    );
  };

  const handleDelete = async (id: string) => {
    if (window.confirm(`Are you sure you want to delete order #${id}? This will remove the stored prescription.`)) {
      await deleteOrder(id);
      setOrders((prev) => prev.filter((ord) => ord.id !== id));
      if (viewingPrescription?.order.id === id) {
        setViewingPrescription(null);
      }
    }
  };

  // Filtered orders list
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerPhone.includes(searchQuery) ||
        order.deliveryAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.some((i) => i.productName.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;
      if (statusFilter === 'all') return true;
      if (statusFilter === 'new') return order.status === 'new';
      if (statusFilter === 'verified') return order.status === 'verified';
      if (statusFilter === 'delivered') return order.status === 'delivered';
      return true;
    });
  }, [orders, searchQuery, statusFilter]);

  // Statistics
  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const pendingRx = orders.filter((o) => o.status === 'new').length;
    const verifiedRx = orders.filter((o) => o.status === 'verified').length;
    const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
    return { totalOrders, pendingRx, verifiedRx, totalRevenue };
  }, [orders]);

  // Export to CSV
  const handleExportCSV = () => {
    if (orders.length === 0) {
      alert('No orders available to export.');
      return;
    }

    const headers = ['Order ID', 'Date', 'Customer Name', 'Phone', 'Address', 'Items', 'Total (₹)', 'Rx File', 'Status'];
    const rows = orders.map((o) => [
      `"${o.id}"`,
      `"${o.formattedDate}"`,
      `"${o.customerName.replace(/"/g, '""')}"`,
      `"${o.customerPhone}"`,
      `"${o.deliveryAddress.replace(/"/g, '""')}"`,
      `"${o.items.map((i) => `${i.productName} (x${i.quantity})`).join(', ')}"`,
      o.totalAmount,
      `"${o.prescription?.fileName || 'N/A'}"`,
      `"${o.status}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Levix_Orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#070C18]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] text-[#0B1324] w-full max-w-6xl rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col max-h-[92vh]">

        {/* Top Header */}
        <div className="bg-[#120826] text-white px-6 py-4.5 flex items-center justify-between border-b border-[#2E1854] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7137A5] to-[#B060ED] flex items-center justify-center text-white shadow-lg">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold font-['Manrope'] text-white">
                  LEVIX BIO SCIENCES • Admin Storage Vault
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#7137A5]/40 text-[#D8B4FE] border border-[#7137A5]/60">
                  PRESCRIPTIONS & ORDERS
                </span>
              </div>
              <p className="text-xs text-white/60 font-mono">
                Direct secure database & doctor prescription storage portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {isAuthenticated && (
              <>
                <a
                  href="https://outlook.live.com/mail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors border border-white/10"
                  title="Open Outlook Web Mail"
                >
                  <Mail className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Open Outlook</span>
                  <ExternalLink className="w-3 h-3 text-white/50" />
                </a>

                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-medium transition-colors border border-red-500/20"
                  title="Log out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close Admin Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isAuthenticated ? (
          /* ========================================================
             LOGIN SCREEN
             ======================================================== */
          <div className="flex-1 p-6 sm:p-12 flex items-center justify-center bg-gradient-to-b from-[#FAF8FC] to-[#F1F5F9]">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-[#E2E8F0]">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#7137A5]/10 text-[#7137A5] mx-auto flex items-center justify-center mb-3">
                  <Lock className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-bold text-[#0B1324]">Admin Access Required</h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Enter your Levix Outlook ID & Password to access orders and patient prescriptions
                </p>
              </div>

              {loginError && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-1.5">
                    Outlook / Admin Email ID
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="levixbiosciences@outlook.com"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-sm text-[#0B1324] focus:outline-none focus:border-[#7137A5] focus:ring-2 focus:ring-[#7137A5]/20 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-sm text-[#0B1324] focus:outline-none focus:border-[#7137A5] focus:ring-2 focus:ring-[#7137A5]/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#7137A5] hover:bg-[#5C2B88] text-white font-bold rounded-xl shadow-lg shadow-[#7137A5]/30 transition-all text-sm flex items-center justify-center gap-2 mt-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Unlock Admin Vault</span>
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-[#F1F5F9] text-center text-[11px] text-[#94A3B8]">
                Protected prescription archive for LEVIX BIO SCIENCE PVT LTD
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================
             AUTHENTICATED ADMIN VAULT DASHBOARD
             ======================================================== */
          <div className="flex-1 flex flex-col overflow-hidden bg-[#FAF8FC]">

            {/* Quick Metrics Bar */}
            <div className="p-4 sm:p-5 border-b border-[#E2E8F0] bg-white grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              <div className="p-3 rounded-2xl bg-[#FAF5FF] border border-[#F3E8FF] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#7137A5] uppercase tracking-wider">
                    Total Orders
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0B1324]">
                    {stats.totalOrders}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#7137A5]/10 text-[#7137A5] flex items-center justify-center">
                  <Package className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#FFFBEB] border border-[#FEF3C7] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#B45309] uppercase tracking-wider">
                    Needs Rx Check
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#B45309]">
                    {stats.pendingRx}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#15803D] uppercase tracking-wider">
                    Verified Rx
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#15803D]">
                    {stats.verifiedRx}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#475569] uppercase tracking-wider">
                    Total Volume
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0B1324]">
                    ₹{stats.totalRevenue.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#E2E8F0] text-[#475569] flex items-center justify-center font-bold text-sm">
                  ₹
                </div>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="p-4 sm:px-6 bg-[#FFFFFF] border-b border-[#E2E8F0] flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0">
              {/* Search Box */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by customer, phone, order ID..."
                  className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1324] focus:outline-none focus:border-[#7137A5]"
                />
              </div>

              {/* Status Filter Tabs & Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <div className="inline-flex rounded-xl p-1 bg-[#F1F5F9] border border-[#E2E8F0] text-xs">
                  <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      statusFilter === 'all'
                        ? 'bg-white text-[#7137A5] font-bold shadow-xs'
                        : 'text-[#64748B] hover:text-[#0B1324]'
                    }`}
                  >
                    All ({orders.length})
                  </button>
                  <button
                    onClick={() => setStatusFilter('new')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      statusFilter === 'new'
                        ? 'bg-[#FEF3C7] text-[#B45309] font-bold shadow-xs'
                        : 'text-[#64748B] hover:text-[#0B1324]'
                    }`}
                  >
                    Pending ({stats.pendingRx})
                  </button>
                  <button
                    onClick={() => setStatusFilter('verified')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      statusFilter === 'verified'
                        ? 'bg-[#DCFCE7] text-[#15803D] font-bold shadow-xs'
                        : 'text-[#64748B] hover:text-[#0B1324]'
                    }`}
                  >
                    Verified ({stats.verifiedRx})
                  </button>
                </div>

                <button
                  onClick={loadOrders}
                  disabled={isLoading}
                  className="p-2 rounded-xl border border-[#CBD5E1] text-[#64748B] hover:text-[#0B1324] hover:bg-[#F1F5F9] transition-colors"
                  title="Refresh Orders"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#7137A5]' : ''}`} />
                </button>

                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] text-xs font-semibold text-[#334155] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#7137A5]" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Orders Feed */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {filteredOrders.length === 0 ? (
                <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-dashed border-[#CBD5E1] p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#FAF5FF] text-[#7137A5] mx-auto flex items-center justify-center">
                    <FileText className="w-8 h-8 opacity-60" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1324]">
                    {orders.length === 0
                      ? 'No orders stored yet'
                      : 'No orders match your search criteria'}
                  </h3>
                  <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                    {orders.length === 0
                      ? 'Every time a patient uploads a doctor prescription and places an order on the website, it is permanently saved in this vault with high-resolution photo inspection.'
                      : 'Try adjusting your search query or switching filters.'}
                  </p>
                </div>
              ) : (
                filteredOrders.map((order) => {
                  const hasPrescription = !!order.prescription?.dataUrl;
                  const isImage = order.prescription?.fileType?.startsWith('image/');

                  return (
                    <div
                      key={order.id}
                      className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col lg:flex-row gap-5"
                    >
                      {/* Left: Order Info & Items */}
                      <div className="flex-1 space-y-3.5">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F1F5F9] pb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono font-black text-sm px-2.5 py-1 rounded-lg bg-[#7137A5]/10 text-[#7137A5] border border-[#7137A5]/20">
                              #{order.id}
                            </span>
                            <span className="text-xs text-[#64748B] flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {order.formattedDate}
                            </span>
                          </div>

                          {/* Status Selector */}
                          <div className="flex items-center gap-2">
                            <label className="text-[11px] font-bold text-[#64748B] uppercase">Status:</label>
                            <select
                              value={order.status}
                              onChange={(e) =>
                                handleStatusChange(order.id, e.target.value as StoredOrder['status'])
                              }
                              className={`text-xs font-bold rounded-lg px-2.5 py-1 border transition-colors cursor-pointer ${
                                order.status === 'verified'
                                  ? 'bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]'
                                  : order.status === 'delivered'
                                  ? 'bg-[#E0E7FF] text-[#4338CA] border-[#C7D2FE]'
                                  : 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]'
                              }`}
                            >
                              <option value="new">Pending Rx Check</option>
                              <option value="verified">✓ Prescription Verified</option>
                              <option value="dispensed">Dispensed</option>
                              <option value="delivered">Delivered</option>
                            </select>
                          </div>
                        </div>

                        {/* Customer Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F8FAFC] p-3 rounded-xl border border-[#F1F5F9] text-xs">
                          <div>
                            <span className="text-[#64748B] block text-[10px] uppercase font-bold">Customer</span>
                            <span className="font-bold text-[#0B1324] text-sm">{order.customerName || 'Guest Customer'}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-mono text-[#334155]">{order.customerPhone || 'No phone'}</span>
                              {order.customerPhone && (
                                <>
                                  <a
                                    href={`tel:${order.customerPhone}`}
                                    className="p-1 rounded bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#0B1324]"
                                    title="Call Customer"
                                  >
                                    <Phone className="w-3 h-3" />
                                  </a>
                                  <a
                                    href={`https://wa.me/${order.customerPhone.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 rounded bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#128C7E]"
                                    title="WhatsApp Customer"
                                  >
                                    <MessageCircle className="w-3 h-3" />
                                  </a>
                                </>
                              )}
                            </div>
                          </div>

                          <div>
                            <span className="text-[#64748B] block text-[10px] uppercase font-bold">Delivery Address</span>
                            <span className="text-[#334155] leading-relaxed">
                              {order.deliveryAddress || 'No address provided'}
                            </span>
                            {order.orderNotes && (
                              <p className="mt-1 text-[11px] text-[#7137A5] italic">
                                Note: {order.orderNotes}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Medicines Table */}
                        <div className="border border-[#F1F5F9] rounded-xl overflow-hidden text-xs">
                          <table className="w-full text-left">
                            <thead className="bg-[#F1F5F9] text-[#475569] text-[10px] uppercase font-bold">
                              <tr>
                                <th className="p-2 pl-3">Formulation</th>
                                <th className="p-2 text-center">Pack</th>
                                <th className="p-2 text-center">Qty</th>
                                <th className="p-2 text-right pr-3">Subtotal</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F1F5F9]">
                              {order.items.map((item, idx) => (
                                <tr key={idx} className="hover:bg-[#FAF8FC]">
                                  <td className="p-2 pl-3 font-semibold text-[#0B1324]">{item.productName}</td>
                                  <td className="p-2 text-center text-[#64748B] font-mono text-[11px]">{item.packSize}</td>
                                  <td className="p-2 text-center font-bold text-[#0B1324]">{item.quantity}</td>
                                  <td className="p-2 text-right pr-3 font-mono font-bold text-[#0B1324]">
                                    ₹{item.totalPrice.toLocaleString('en-IN')}
                                  </td>
                                </tr>
                              ))}
                              <tr className="bg-[#F8FAFC] font-bold">
                                <td colSpan={3} className="p-2 pl-3 text-right text-[#475569]">Total Amount:</td>
                                <td className="p-2 text-right pr-3 text-[#7137A5] font-black text-sm">
                                  ₹{order.totalAmount.toLocaleString('en-IN')}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Right: Doctor Prescription Inspector Card */}
                      <div className="w-full lg:w-72 bg-gradient-to-b from-[#FAF5FF] to-[#F3E8FF]/40 rounded-2xl border border-[#E9D5FF] p-4 flex flex-col justify-between shrink-0">
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-[#7137A5]" />
                              <span className="text-xs font-bold text-[#7137A5] uppercase tracking-wider">
                                Prescription Rx
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-[#7137A5] border border-[#E9D5FF]">
                              {order.prescription?.fileSizeFormatted || 'Photo'}
                            </span>
                          </div>

                          {/* Thumbnail / Preview Area */}
                          <div className="relative group rounded-xl overflow-hidden bg-white border border-[#E9D5FF] aspect-4/3 flex items-center justify-center shadow-xs">
                            {hasPrescription && isImage ? (
                              <img
                                src={order.prescription.dataUrl}
                                alt={`Prescription ${order.prescription.fileName}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="p-4 text-center">
                                <FileText className="w-10 h-10 text-[#7137A5] mx-auto mb-1 opacity-70" />
                                <span className="text-[11px] font-mono text-[#64748B] block truncate max-w-[180px]">
                                  {order.prescription?.fileName || 'prescription_file'}
                                </span>
                              </div>
                            )}

                            {/* Hover Overlay Button to View Full Size */}
                            <div className="absolute inset-0 bg-[#0B1324]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                              <button
                                onClick={() =>
                                  setViewingPrescription({ order, zoom: 1, rotation: 0 })
                                }
                                className="px-3 py-1.5 rounded-lg bg-white text-[#0B1324] text-xs font-bold flex items-center gap-1 shadow hover:bg-[#F1F5F9]"
                              >
                                <Eye className="w-3.5 h-3.5 text-[#7137A5]" />
                                <span>Inspect</span>
                              </button>
                            </div>
                          </div>

                          <div className="mt-2 text-[11px] text-[#475569] font-mono truncate" title={order.prescription?.fileName}>
                            📎 {order.prescription?.fileName || 'Attached Rx'}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2 mt-4 pt-3 border-t border-[#E9D5FF]">
                          <button
                            onClick={() =>
                              setViewingPrescription({ order, zoom: 1, rotation: 0 })
                            }
                            className="w-full py-2 bg-white hover:bg-[#FAF5FF] text-[#7137A5] border border-[#D8B4FE] font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Full Resolution</span>
                          </button>

                          <button
                            onClick={() => downloadPrescriptionFile(order)}
                            className="w-full py-2 bg-[#7137A5] hover:bg-[#5C2B88] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Prescription</span>
                          </button>

                          <div className="flex items-center justify-between pt-1">
                            <button
                              onClick={() => {
                                const subject = encodeURIComponent(`Prescription Order #${order.id} - ${order.customerName}`);
                                const body = encodeURIComponent(
                                  `Order ID: #${order.id}\nCustomer: ${order.customerName}\nPhone: ${order.customerPhone}\nAddress: ${order.deliveryAddress}\nTotal: ₹${order.totalAmount}\nPrescription: ${order.prescription?.fileName}`
                                );
                                window.open(`mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`, '_blank');
                              }}
                              className="text-[11px] text-[#7137A5] hover:underline flex items-center gap-1 font-semibold"
                            >
                              <Mail className="w-3 h-3" />
                              <span>Email to Outlook</span>
                            </button>

                            <button
                              onClick={() => handleDelete(order.id)}
                              className="text-[11px] text-red-500 hover:text-red-700 flex items-center gap-1 font-medium transition-colors"
                              title="Delete Order Record"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

      </div>

      {/* ========================================================
          FULL RESOLUTION PRESCRIPTION LIGHTBOX VIEWER
          ======================================================== */}
      {viewingPrescription && (
        <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex flex-col p-4 animate-in fade-in duration-200">
          {/* Lightbox Controls Header */}
          <div className="flex items-center justify-between text-white p-3 border-b border-white/10 shrink-0">
            <div>
              <h3 className="text-sm font-bold font-['Manrope']">
                Prescription Inspection • Order #{viewingPrescription.order.id}
              </h3>
              <p className="text-xs text-white/60 font-mono">
                {viewingPrescription.order.customerName} ({viewingPrescription.order.customerPhone}) • {viewingPrescription.order.prescription.fileName}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setViewingPrescription((prev) =>
                    prev ? { ...prev, zoom: Math.max(0.5, prev.zoom - 0.25) } : null
                  )
                }
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-bold px-2 text-white/80">
                {Math.round(viewingPrescription.zoom * 100)}%
              </span>

              <button
                onClick={() =>
                  setViewingPrescription((prev) =>
                    prev ? { ...prev, zoom: Math.min(3, prev.zoom + 0.25) } : null
                  )
                }
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  setViewingPrescription((prev) =>
                    prev ? { ...prev, rotation: (prev.rotation + 90) % 360 } : null
                  )
                }
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                title="Rotate 90°"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <button
                onClick={() => downloadPrescriptionFile(viewingPrescription.order)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#7137A5] hover:bg-[#5C2B88] text-white text-xs font-bold"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>

              <button
                onClick={() => setViewingPrescription(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                title="Close Viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Stage */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            {viewingPrescription.order.prescription.fileType.startsWith('image/') ? (
              <img
                src={viewingPrescription.order.prescription.dataUrl}
                alt="Prescription Full Resolution"
                style={{
                  transform: `scale(${viewingPrescription.zoom}) rotate(${viewingPrescription.rotation}deg)`,
                  transition: 'transform 0.2s ease',
                  maxHeight: '80vh',
                  maxWidth: '85vw',
                }}
                className="rounded-lg shadow-2xl object-contain"
              />
            ) : (
              <div className="bg-white p-8 rounded-2xl text-center text-[#0B1324] max-w-md">
                <FileText className="w-16 h-16 text-[#7137A5] mx-auto mb-3" />
                <h4 className="font-bold text-base mb-1">
                  {viewingPrescription.order.prescription.fileName}
                </h4>
                <p className="text-xs text-[#64748B] mb-4">
                  This document is stored in PDF/Doc format.
                </p>
                <button
                  onClick={() => downloadPrescriptionFile(viewingPrescription.order)}
                  className="px-4 py-2 bg-[#7137A5] text-white font-bold rounded-xl text-xs"
                >
                  Download & Open Document
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
