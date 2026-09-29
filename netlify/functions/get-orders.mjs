import { getStore } from '@netlify/blobs';

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  try {
    const ordersStore = getStore('levix-orders');
    if (!ordersStore) {
      return new Response(JSON.stringify({ orders: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const { blobs } = await ordersStore.list();
    // Exclude raw rx- keys when fetching order list to keep it fast
    const orderBlobs = blobs.filter((b) => !b.key.startsWith('rx-'));
    
    const orders = await Promise.all(
      orderBlobs.map(async (b) => {
        try {
          return await ordersStore.get(b.key, { type: 'json' });
        } catch {
          return null;
        }
      })
    );

    const validOrders = orders.filter(Boolean);
    validOrders.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    return new Response(JSON.stringify({ orders: validOrders }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ orders: [], error: error?.message }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
};
