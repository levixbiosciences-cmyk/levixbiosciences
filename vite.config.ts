import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function uploadPrescriptionPlugin(): Plugin {
  return {
    name: 'upload-prescription-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith('/api/submit-order') && req.method === 'POST') {
          try {
            const chunks: Buffer[] = [];
            req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
            req.on('end', async () => {
              try {
                const bodyStr = Buffer.concat(chunks).toString('utf-8');
                const body = JSON.parse(bodyStr);

                let emailDispatched = false;
                let emailError = null;

                try {
                  const nodemailer = await import('nodemailer');
                  const outlookUser = process.env.OUTLOOK_EMAIL || 'levixbiosciences@outlook.com';
                  const outlookPass = process.env.OUTLOOK_PASSWORD || 'Nabila@2020';

                  const transporter = nodemailer.createTransport({
                    host: 'smtp-mail.outlook.com',
                    port: 587,
                    secure: false,
                    auth: {
                      user: outlookUser,
                      pass: outlookPass,
                    },
                    tls: {
                      ciphers: 'SSLv3',
                      rejectUnauthorized: false,
                    },
                  });

                  const attachments = [];
                  if (body.prescription?.dataUrl) {
                    const match = body.prescription.dataUrl.match(/^data:(.+?);base64,(.+)$/);
                    if (match) {
                      attachments.push({
                        filename: body.prescription.fileName || 'Doctor_Prescription.jpg',
                        content: Buffer.from(match[2], 'base64'),
                        contentType: match[1],
                      });
                    }
                  }

                  await transporter.sendMail({
                    from: `"LEVIX Bio Science Orders" <${outlookUser}>`,
                    to: outlookUser,
                    subject: `🏥 Order #${body.id} - ${body.customerName || 'Customer'} (Prescription Attached)`,
                    text: `New Order #${body.id}\nCustomer: ${body.customerName}\nPhone: ${body.customerPhone}\nAddress: ${body.deliveryAddress}\nTotal: ₹${body.totalAmount}`,
                    attachments,
                  });
                  emailDispatched = true;
                } catch (err: any) {
                  emailError = err.message;
                }

                const orderStore = ((globalThis as any).__levixOrders = (globalThis as any).__levixOrders || []);
                orderStore.unshift(body);

                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    success: true,
                    orderId: body.id,
                    emailDispatched,
                    emailError,
                    storedInVault: true,
                  })
                );
              } catch (parseErr: any) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: parseErr.message }));
              }
            });
          } catch (e: any) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: e.message }));
          }
          return;
        }

        if (req.url?.startsWith('/api/get-orders') && req.method === 'GET') {
          const orderStore = ((globalThis as any).__levixOrders = (globalThis as any).__levixOrders || []);
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(JSON.stringify({ orders: orderStore }));
          return;
        }

        if (req.url?.startsWith('/api/view-prescription') && req.method === 'GET') {
          const urlObj = new URL(req.url, 'http://localhost');
          const id = urlObj.searchParams.get('id');
          const orderStore = ((globalThis as any).__levixOrders = (globalThis as any).__levixOrders || []);
          const found = orderStore.find((o: any) => o.id === id);

          if (found && found.prescription?.dataUrl) {
            const match = found.prescription.dataUrl.match(/^data:(.+?);base64,(.+)$/);
            if (match) {
              res.setHeader('Content-Type', match[1]);
              res.statusCode = 200;
              res.end(Buffer.from(match[2], 'base64'));
              return;
            }
          }

          res.statusCode = 404;
          res.end('Prescription not found');
          return;
        }

        if (req.url?.startsWith('/api/upload-prescription') && req.method === 'POST') {
          try {
            const chunks: Buffer[] = [];
            req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
            req.on('end', async () => {
              try {
                const buffer = Buffer.concat(chunks);
                const contentType = req.headers['content-type'] || '';

                const response = await fetch('https://tmpfiles.org/api/v1/upload', {
                  method: 'POST',
                  headers: {
                    'content-type': contentType,
                  },
                  body: buffer,
                });

                const json = await response.json();
                if (json?.data?.url) {
                  res.setHeader('Content-Type', 'application/json');
                  res.statusCode = 200;
                  res.end(JSON.stringify({ success: true, url: json.data.url }));
                  return;
                }

                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(JSON.stringify({ success: false, error: 'Upload failed' }));
              } catch (err: any) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(JSON.stringify({ success: false, error: err?.message || 'Server error' }));
              }
            });
          } catch (e: any) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: e?.message }));
          }
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), uploadPrescriptionPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
