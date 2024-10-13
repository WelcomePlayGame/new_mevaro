import { Telegraf, Markup } from 'telegraf';
const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Create a keyboard menu
const mainMenu = Markup.keyboard([
  ['📚 Перетяжка меблів', '🔍 Каталог Тканин'],
  ['📞 Контакти', '⚙️ Сайт'],
]).resize();

// Command handler for /start
bot.command('start', async (ctx) => {
  try {
    await ctx.reply('Ласкаво просимо!', mainMenu);
  } catch (error) {
    console.error('Error sending welcome message:', error);
  }
});

// Handle button clicks
bot.hears('📚 Перетяжка меблів', async (ctx) => {
  await ctx.reply('This is a Telegram bot built with Next.js');
});

bot.hears('🔍 Каталог Тканин', async (ctx) => {
  await ctx.reply('What would you like to search for?');
});

bot.hears('📞 Контакти', async (ctx) => {
  await ctx.reply('Contact us at: contact@example.com');
});

bot.hears('⚙️ Сайт', async (ctx) => {
  await ctx.reply('Settings are not implemented yet.');
});

// Catch-all handler for any text message
bot.on('text', async (ctx) => {
  await ctx.reply('Будь ласка, скористайтеся меню:', mainMenu);
});

// Export the bot for use in your Next.js API routes
export default bot;
