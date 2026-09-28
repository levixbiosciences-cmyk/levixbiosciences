export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const contentType = req.headers.get('content-type') || '';
    const arrayBuffer = await req.arrayBuffer();

    const response = await fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      headers: {
        'content-type': contentType,
      },
      body: Buffer.from(arrayBuffer),
    });

    const text = await response.text();
    if (text && text.startsWith('http')) {
      return new Response(JSON.stringify({ success: true, url: text.trim() }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: false, error: text }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error?.message || 'Upload failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
