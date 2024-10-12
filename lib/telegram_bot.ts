import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Create a keyboard menu
const mainMenu = Markup.keyboard([
  ['📚 About', '🔍 Search'],
  ['📞 Contact', '⚙️ Settings'],
]).resize();

// Command handler for /start
bot.command('start', (ctx) => {
  return ctx.reply('Welcome! Please choose an option:', mainMenu);
});

// Handle button clicks
bot.hears('📚 About', (ctx) =>
  ctx.reply('This is a Telegram bot built with Next.js')
);
bot.hears('🔍 Search', (ctx) =>
  ctx.reply('What would you like to search for?')
);
bot.hears('📞 Contact', (ctx) =>
  ctx.reply('Contact us at: contact@example.com')
);
bot.hears('⚙️ Settings', (ctx) =>
  ctx.reply('Settings are not implemented yet.')
);

// Add a catch-all handler
bot.on('text', (ctx) => {
  ctx.reply('Please select an option from the menu:', mainMenu);
});

// Export the bot for use in your Next.js API routes
export default bot;
