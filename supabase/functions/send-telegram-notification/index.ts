import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  phone: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID_1 = Deno.env.get('TELEGRAM_CHAT_ID_1');
    const TELEGRAM_CHAT_ID_2 = Deno.env.get('TELEGRAM_CHAT_ID_2');

    if (!TELEGRAM_BOT_TOKEN) {
      throw new Error('TELEGRAM_BOT_TOKEN is not configured');
    }

    if (!TELEGRAM_CHAT_ID_1 && !TELEGRAM_CHAT_ID_2) {
      throw new Error('No Telegram chat IDs configured');
    }

    const { name, phone, message }: ContactFormData = await req.json();

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name and phone are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const telegramMessage = `
🔔 *Новая заявка с сайта PerfectFloor*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
${message ? `💬 *Сообщение:* ${message}` : ''}

📅 *Дата:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    `.trim();

    const chatIds = [TELEGRAM_CHAT_ID_1, TELEGRAM_CHAT_ID_2].filter(Boolean);
    const results = [];

    for (const chatId of chatIds) {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'Markdown',
          }),
        }
      );

      const data = await response.json();
      results.push({ chatId, success: data.ok });
    }

    console.log('Telegram notifications sent:', results);

    return new Response(
      JSON.stringify({ success: true, results }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error sending Telegram notification:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
