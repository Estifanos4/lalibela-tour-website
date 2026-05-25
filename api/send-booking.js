
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, country, tour, message } = req.body;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Missing Telegram environment variables');
    return res.status(500).json({ error: 'Internal server error: Bot configuration missing' });
  }

  const telegramMessage = `
🌟 *New Booking Request* 🌟

👤 *Name:* ${name}
📧 *Email:* ${email}
🌍 *Country:* ${country || 'Not specified'}
🚩 *Tour:* ${tour || 'Not specified'}

💬 *Message:*
${message || 'No message provided'}

---
📅 *Sent from Lalibela Soul Tours*
  `.trim();

  try {
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
      console.error('Telegram API error:', data);
      return res.status(500).json({ error: 'Failed to send notification' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Service error:', error);
    return res.status(500).json({ error: 'Failed to process booking' });
  }
}
