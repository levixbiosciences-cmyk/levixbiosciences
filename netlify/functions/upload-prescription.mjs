export default async (req) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

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
    const formData = await req.formData();
    const file = formData.get('file') || formData.get('fileToUpload');

    if (!file) {
      return new Response(JSON.stringify({ success: false, error: 'No file provided' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // 1. Upload to FreeImage.host CDN (Permanent Image CDN Hosting)
    try {
      const uploadFd = new FormData();
      uploadFd.append('key', '6d207e02198a847aa98d0a2a901485a5');
      uploadFd.append('action', 'upload');
      uploadFd.append('source', file);
      uploadFd.append('format', 'json');

      const res = await fetch('https://freeimage.host/api/1/upload', {
        method: 'POST',
        body: uploadFd,
      });

      const data = await res.json();
      if (data?.status_code === 200 && data?.image?.url) {
        return new Response(
          JSON.stringify({
            success: true,
            url: data.image.url,
            thumb: data.image.thumb?.url || data.image.url,
          }),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }
    } catch (cdnErr) {
      console.warn('FreeImage upload error, trying backup...', cdnErr.message);
    }

    // 2. Backup upload to tmpfiles.org
    try {
      const backupFd = new FormData();
      backupFd.append('file', file);
      const res = await fetch('https://tmpfiles.org/api/v1/upload', {
        method: 'POST',
        body: backupFd,
      });
      const data = await res.json();
      if (data?.data?.url) {
        const directUrl = data.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
        return new Response(JSON.stringify({ success: true, url: directUrl }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    } catch (tmpErr) {
      console.warn('Backup upload error:', tmpErr.message);
    }

    return new Response(JSON.stringify({ success: false, error: 'Upload failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error?.message || 'Server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};
