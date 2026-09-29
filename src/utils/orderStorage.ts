export interface StoredOrderItem {
  productId: string;
  productName: string;
  packSize: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface StoredPrescription {
  fileName: string;
  fileSize: number;
  fileType: string;
  fileSizeFormatted: string;
  dataUrl: string; // Base64 data URL for permanent storage & retrieval
}

export interface StoredOrder {
  id: string; // e.g., "LX-849201"
  timestamp: number;
  formattedDate: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  orderNotes?: string;
  items: StoredOrderItem[];
  totalAmount: number;
  prescription: StoredPrescription;
  status: 'new' | 'verified' | 'dispensed' | 'delivered';
  notes?: string;
}

const DB_NAME = 'LevixAdminStorage_v1';
const STORE_NAME = 'orders';
const DB_VERSION = 1;

// Open or initialize IndexedDB
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('timestamp', 'timestamp', { unique: false });
        store.createIndex('status', 'status', { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Convert File to base64 Data URL
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

// Save an order to IndexedDB and dispatch update event
export async function saveOrder(order: StoredOrder): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(order);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });

    // Also notify other tabs or components in the current window
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('levix-order-saved', { detail: order }));
    }
  } catch (error) {
    console.error('Failed to save order to IndexedDB:', error);
    // Fallback to localStorage without large image if IndexedDB fails
    try {
      const existing = JSON.parse(localStorage.getItem('levix_backup_orders') || '[]');
      const shallowOrder = {
        ...order,
        prescription: {
          ...order.prescription,
          dataUrl: order.prescription.dataUrl.slice(0, 1000) + '...', // truncate to avoid quota error
        },
      };
      existing.unshift(shallowOrder);
      localStorage.setItem('levix_backup_orders', JSON.stringify(existing.slice(0, 50)));
    } catch (e) {
      console.warn('LocalStorage fallback failed:', e);
    }
  }
}

// Get all orders from IndexedDB
export async function getAllOrders(): Promise<StoredOrder[]> {
  try {
    const db = await openDB();
    return await new Promise<StoredOrder[]>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();

      req.onsuccess = () => {
        const results = req.result as StoredOrder[];
        // Sort newest first
        results.sort((a, b) => b.timestamp - a.timestamp);
        resolve(results);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (error) {
    console.error('Failed to get orders from IndexedDB:', error);
    try {
      return JSON.parse(localStorage.getItem('levix_backup_orders') || '[]');
    } catch {
      return [];
    }
  }
}

// Update order status
export async function updateOrderStatus(id: string, status: StoredOrder['status']): Promise<void> {
  const db = await openDB();
  const order = await getOrderById(id);
  if (!order) return;

  order.status = status;
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.put(order);

    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('levix-order-updated', { detail: { id, status } }));
  }
}

// Get single order by ID
export async function getOrderById(id: string): Promise<StoredOrder | null> {
  const db = await openDB();
  return await new Promise<StoredOrder | null>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(id);

    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

// Delete an order by ID
export async function deleteOrder(id: string): Promise<void> {
  const db = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.delete(id);

    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('levix-order-deleted', { detail: { id } }));
  }
}

// Download prescription file helper
export function downloadPrescriptionFile(order: StoredOrder): void {
  if (!order.prescription?.dataUrl) {
    alert('Prescription file data is not available for download.');
    return;
  }

  const link = document.createElement('a');
  link.href = order.prescription.dataUrl;
  link.download = `Prescription_${order.id}_${order.prescription.fileName || 'rx.jpg'}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
