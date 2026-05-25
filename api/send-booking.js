export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, country, tour, message } = req.body || {};

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return res.status(500).json({ 
        error: 'Bot configuration missing', 
        details: 'TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set in Vercel environment variables.' 
      });
    }

    const telegramMessage = `
🌟 *New Booking Request* 🌟

👤 *Name:* ${name || 'N/A'}
📧 *Email:* ${email || 'N/A'}
🌍 *Country:* ${country || 'Not specified'}
🚩 *Tour:* ${tour || 'Not specified'}

💬 *Message:*
${message || 'No message provided'}

---
📅 *Sent from Lalibela Soul Tours*
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      return res.status(500).json({ 
        error: 'Telegram API Error', 
        details: data.description || 'Failed to send message to Telegram' 
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      details: error.message 
    });
  }
}
