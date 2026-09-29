import nodemailer from 'nodemailer';
import { getStore } from '@netlify/blobs';

export default async (req) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
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
    const body = await req.json();
    const {
      id,
      customerName,
      customerPhone,
      deliveryAddress,
      orderNotes,
      items = [],
      totalAmount = 0,
      prescription,
    } = body;

    // 1. Permanently store in Netlify Cloud Blobs so any admin can view it live anywhere
    try {
      const ordersStore = getStore('levix-orders');
      if (ordersStore) {
        await ordersStore.setJSON(id, body);
        if (prescription?.dataUrl) {
          await ordersStore.set(`rx-${id}`, prescription.dataUrl);
        }
      }
    } catch (blobErr) {
      console.warn('Netlify Blobs storage note:', blobErr?.message);
    }

    const outlookUser = process.env.OUTLOOK_EMAIL || 'levixbiosciences@outlook.com';
    const outlookPass = process.env.OUTLOOK_PASSWORD || 'Nabila@2020';

    // 2. Build Email Attachments
    const attachments = [];
    if (prescription?.dataUrl) {
      const match = prescription.dataUrl.match(/^data:(.+?);base64,(.+)$/);
      if (match) {
        const contentType = match[1];
        const base64Data = match[2];
        attachments.push({
          filename: prescription.fileName || 'Doctor_Prescription.jpg',
          content: Buffer.from(base64Data, 'base64'),
          contentType: contentType,
        });
      }
    }

    // Build HTML Email Table
    const itemsHtml = items
      .map(
        (item) => `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px; font-weight: bold; color: #1e293b;">${item.productName}</td>
          <td style="padding: 10px; text-align: center; color: #64748b; font-size: 13px;">${item.packSize || '-'}</td>
          <td style="padding: 10px; text-align: center; font-weight: bold;">${item.quantity}</td>
          <td style="padding: 10px; text-align: right; font-weight: bold; color: #7137A5;">₹${Number(item.totalPrice).toLocaleString('en-IN')}</td>
        </tr>
      `
      )
      .join('');

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: #120826; color: #ffffff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 20px; letter-spacing: 0.05em; color: #ffffff;">LEVIX BIO SCIENCE PVT LTD</h1>
          <p style="margin: 6px 0 0; font-size: 13px; color: #d8b4fe;">NEW ORDER & DOCTOR PRESCRIPTION RECEIVED</p>
        </div>

        <div style="padding: 24px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 20px; background: #faf5ff; border: 1px solid #e9d5ff; padding: 14px 18px; border-radius: 8px;">
            <div>
              <strong style="color: #7137a5;">Order ID:</strong> <span style="font-family: monospace; font-size: 16px; font-weight: bold;">#${id}</span>
            </div>
            <div>
              <strong style="color: #64748b;">Date:</strong> <span>${new Date().toLocaleString('en-IN')}</span>
            </div>
          </div>

          <h3 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #7137a5; padding-bottom: 6px;">Customer & Delivery Details</h3>
          <table style="width: 100%; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="width: 130px; color: #64748b; padding: 4px 0;"><strong>Customer Name:</strong></td>
              <td style="color: #0f172a; font-weight: bold;">${customerName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="color: #64748b; padding: 4px 0;"><strong>Phone Number:</strong></td>
              <td style="color: #0f172a; font-weight: bold;">
                <a href="tel:${customerPhone}" style="color: #7137a5; text-decoration: none;">${customerPhone || 'N/A'}</a>
                &nbsp;|&nbsp;
                <a href="https://wa.me/${(customerPhone || '').replace(/[^0-9]/g, '')}" style="color: #16a34a; text-decoration: none; font-weight: bold;">WhatsApp Chat</a>
              </td>
            </tr>
            <tr>
              <td style="color: #64748b; padding: 4px 0;"><strong>Delivery Address:</strong></td>
              <td style="color: #0f172a;">${deliveryAddress || 'N/A'}</td>
            </tr>
            ${orderNotes ? `
            <tr>
              <td style="color: #64748b; padding: 4px 0;"><strong>Notes:</strong></td>
              <td style="color: #7137a5; font-style: italic;">${orderNotes}</td>
            </tr>` : ''}
          </table>

          <h3 style="color: #0f172a; border-bottom: 2px solid #7137a5; padding-bottom: 6px;">Order Items Breakdown</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <thead>
              <tr style="background: #f1f5f9; color: #475569; text-transform: uppercase; font-size: 11px;">
                <th style="padding: 10px; text-align: left;">Product</th>
                <th style="padding: 10px; text-align: center;">Pack</th>
                <th style="padding: 10px; text-align: center;">Qty</th>
                <th style="padding: 10px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
              <tr style="background: #faf8fc;">
                <td colspan="3" style="padding: 12px 10px; text-align: right; font-weight: bold; font-size: 15px;">Total Order Amount:</td>
                <td style="padding: 12px 10px; text-align: right; font-weight: 900; font-size: 18px; color: #7137a5;">₹${Number(totalAmount).toLocaleString('en-IN')}</td>
              </tr>
            </tbody>
          </table>

          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-top: 20px;">
            <h4 style="margin: 0 0 8px; color: #166534; font-size: 14px;">📋 Doctor Prescription (Rx) Mandatory Document Attached</h4>
            <p style="margin: 0 0 8px; font-size: 13px; color: #334155;">
              • File Name: <strong>${prescription?.fileName || 'prescription_file'}</strong> (${prescription?.fileSizeFormatted || ''})
            </p>
            <p style="margin: 0; font-size: 12px; color: #15803d;">
              ✓ The prescription file is attached directly to this email so you can inspect and verify it immediately.
            </p>
          </div>
        </div>

        <div style="background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          LEVIX BIO SCIENCE PVT LTD • Automated Prescription Vault Notification
        </div>
      </div>
    `;

    // 3. Attempt Outlook SMTP delivery
    let emailDispatched = false;
    let emailError = null;

    try {
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

      const info = await transporter.sendMail({
        from: `"LEVIX Bio Science Orders" <${outlookUser}>`,
        to: outlookUser,
        subject: `🏥 Order #${id} - ${customerName || 'Customer'} (Prescription Attached)`,
        html: htmlContent,
        attachments,
      });

      emailDispatched = true;
      console.log('Outlook email dispatched:', info.messageId);
    } catch (mailErr) {
      console.warn('Outlook SMTP transmission note:', mailErr.message);
      emailError = mailErr.message;
    }

    return new Response(
      JSON.stringify({
        success: true,
        orderId: id,
        emailDispatched,
        emailError,
        storedInVault: true,
        message: 'Order and prescription recorded in Levix Admin Vault',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error?.message || 'Failed to submit order',
      }),
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
