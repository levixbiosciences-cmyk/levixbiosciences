export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const contentType = req.headers.get('content-type') || '';
    const arrayBuffer = await req.arrayBuffer();

    // 1. Upload to tmpfiles.org
    try {
      const response = await fetch('https://tmpfiles.org/api/v1/upload', {
        method: 'POST',
        headers: {
          'content-type': contentType,
        },
        body: Buffer.from(arrayBuffer),
      });

      const json = await response.json();
      if (json?.data?.url) {
        return new Response(JSON.stringify({ success: true, url: json.data.url }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    } catch (tmpErr) {
      console.warn('tmpfiles error in serverless:', tmpErr.message);
    }

    return new Response(JSON.stringify({ success: false, error: 'Upload failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error?.message || 'Upload failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};
