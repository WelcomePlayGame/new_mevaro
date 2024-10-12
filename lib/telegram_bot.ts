import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);

// Create a keyboard menu
const mainMenu = Markup.keyboard([
  ['📚 Перетяжка меблів', '🔍 Каталог Тканин'],
  ['📞 Контакти', '⚙️ Сайт'],
]).resize();

// Command handler for /start
bot.command('start', async (ctx) => {
  console.log('Received /start command');
  try {
    await ctx.reply('Ласкаво просимо!', mainMenu);
    console.log('Sent welcome message with menu');
  } catch (error) {
    console.error('Error sending welcome message:', error);
  }
});

// Handle button clicks
bot.hears('📚   t', async (ctx) => {
  await ctx.reply('This is a Telegram bot built with Next.js');
});

bot.hears('🔍 Search', async (ctx) => {
  console.log('Search button clicked');
  await ctx.reply('What would you like to search for?');
});

bot.hears('📞 Contact', async (ctx) => {
  console.log('Contact button clicked');
  await ctx.reply('Contact us at: contact@example.com');
});

bot.hears('⚙️ Settings', async (ctx) => {
  console.log('Settings button clicked');
  await ctx.reply('Settings are not implemented yet.');
});

// Catch-all handler for any text message
bot.on('text', async (ctx) => {
  console.log('Received text message:', ctx.message.text);
  await ctx.reply('Будь ласка, скористайтеся меню:', mainMenu);
});

// Export the bot for use in your Next.js API routes
export default bot;
