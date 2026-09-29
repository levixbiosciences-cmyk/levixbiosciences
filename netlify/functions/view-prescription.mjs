import { getStore } from '@netlify/blobs';

export default async (req) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response('Order ID required', { status: 400 });
  }

  try {
    const ordersStore = getStore('levix-orders');
    if (!ordersStore) {
      return new Response('Storage not found', { status: 404 });
    }

    const dataUrl = await ordersStore.get(`rx-${id}`, { type: 'text' });
    if (!dataUrl) {
      return new Response('Prescription not found for order #' + id, { status: 404 });
    }

    const match = dataUrl.match(/^data:(.+?);base64,(.+)$/);
    if (!match) {
      return new Response('Invalid prescription format', { status: 500 });
    }

    const contentType = match[1];
    const buffer = Buffer.from(match[2], 'base64');

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="prescription_${id}.jpg"`,
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response('Error loading prescription: ' + err.message, { status: 500 });
  }
};
