import { Telegraf, Markup } from 'telegraf';
const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Main menu keyboard
const mainMenuKeyboard = Markup.keyboard([
  ['✅ Перетяжка меблів', '🛋️ Нові меблі'],
  ['📞 Контакти', 'ℹ️ Про нас'],
]).resize();

// Submenu keyboard for "Перетяжка меблів"
const reupholsterySubmenuKeyboard = Markup.keyboard([
  ['🛋️ Дивани', '🪑 Стільці'],
  ['🛏️ Ліжка', '🔙 Назад до головного меню'],
]).resize();

// Start command
bot.command('start', async (ctx) => {
  await ctx.reply('Ласкаво просимо! Оберіть опцію:', mainMenuKeyboard);
});

// Main menu options
bot.hears('✅ Перетяжка меблів', async (ctx) => {
  await ctx.reply(
    'Оберіть тип меблів для перетяжки:',
    reupholsterySubmenuKeyboard
  );
});

bot.hears('👀 Каталог Тканин', async (ctx) => {
  await ctx.reply('What would you like to search for?');
});

bot.hears('📞 Контакти', async (ctx) => {
  await ctx.reply('Contact us at: contact@example.com');
});

bot.hears(' ❗ Сайт', async (ctx) => {
  await ctx.reply('Settings are not implemented yet.');
});

// Submenu options for "Перетяжка меблів"
bot.hears('🛋️ Дивани', async (ctx) => {
  await ctx.reply('Інформація про перетяжку диванів...');
  // Optionally, you can show the submenu again
  await ctx.reply(
    'Оберіть інший тип меблів або поверніться до головного меню:',
    reupholsterySubmenuKeyboard
  );
});

bot.hears('🪑 Стільці', async (ctx) => {
  await ctx.reply('Інформація про перетяжку стільців...');
  await ctx.reply(
    'Оберіть інший тип меблів або поверніться до головного меню:',
    reupholsterySubmenuKeyboard
  );
});

bot.hears('🛏️ Ліжка', async (ctx) => {
  await ctx.reply('Інформація про перетяжку ліжок...');
  await ctx.reply(
    'Оберіть інший тип меблів або поверніться до головного меню:',
    reupholsterySubmenuKeyboard
  );
});

bot.hears('🔙 Назад до головного меню', async (ctx) => {
  await ctx.reply('Головне меню:', mainMenuKeyboard);
});

// Catch-all handler for any text message
bot.on('text', async (ctx) => {
  await ctx.reply('Будь ласка, скористайтеся меню:', mainMenuKeyboard);
});

// Export the bot for use in your Next.js API routes
export default bot;
