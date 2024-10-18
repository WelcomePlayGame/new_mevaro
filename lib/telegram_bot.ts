import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';
const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Main menu keyboard with an inline button for the "Каталог Тканин"
export const mainMenuKeyboard = Markup.keyboard([
  ['🛠️ Перетяжка меблів', 'Заміна Пружинного Блоку'],
  ['📞 Контакти', 'Про нас'],
  [
    Markup.button.url(
      '🎨 Каталог Тканин',
      'https://www.mevaro.kiev.ua/fabrics'
    ),
  ], // Inline URL button
]).resize();

// Return to main menu button
const returnMainMenuKeyboard = Markup.keyboard([
  ['🔙 Назад до головного меню'],
]).resize();

// Submenu for "Перетяжка меблів"
const reupholsterySubmenuKeyboard = Markup.keyboard([
  ['🛋️ Дивани', '🪑 Стільці'],
  ['🛏️ Ліжка', '🔙 Назад до головного меню'],
]).resize();

// Start command
bot.command('start', async (ctx) => {
  try {
    // First, send the video banner
    await ctx.replyWithVideo('https://www.mevaro.kiev.ua/video/mevaro.mp4', {
      caption: 'Ласкаво просимо до нашого бота компанії Mevaro!',
    });

    // Then, send the main menu with inline and regular buttons
    await ctx.reply('Що Вас цікавить?', mainMenuKeyboard);
  } catch (error) {
    console.error('Error in start command:', error);
    await ctx.reply('Вибачте, сталася помилка. Спробуйте ще раз пізніше.');
  }
});

// Main menu options
bot.hears('🛠️ Перетяжка меблів', async (ctx) => {
  await ctx.reply(
    'Оберіть тип меблів для перетяжки:',
    reupholsterySubmenuKeyboard
  );
});

bot.hears('Заміна Пружинного Блоку', async (ctx) => {
  await ctx.reply(
    'Оберіть тип робіт з заміною пружинного блоку:',
    reupholsterySubmenuKeyboard
  );
});

bot.hears('📞 Контакти', async (ctx) => {
  await ctx.reply(
    "Зв'яжіться з нами:",
    Markup.inlineKeyboard([
      Markup.button.url('Написати @romaniv21', 'https://t.me/romaniv21'),
    ])
  );
});

bot.hears('Про нас', async (ctx) => {
  await ctx.reply('Інформація про нашу компанію...');
});

// Submenu options for "Перетяжка меблів"
bot.hears('🛋️ Дивани', async (ctx) => {
  await ctx.reply('Оберіть тип дивану:', reupholsterySubmenuKeyboard);
});

bot.hears('🪑 Стільці', async (ctx) => {
  await ctx.reply('Оберіть тип стільця:', reupholsterySubmenuKeyboard);
});

bot.hears('🛏️ Ліжка', async (ctx) => {
  await ctx.reply('Оберіть тип ліжка:', reupholsterySubmenuKeyboard);
});

bot.hears('🔙 Назад до головного меню', async (ctx) => {
  try {
    await ctx.reply('Ви повернулися до головного меню:', mainMenuKeyboard);
  } catch (error) {
    console.error('Error in main menu handler:', error);
    await ctx.reply('Вибачте, сталася помилка. Спробуйте ще раз пізніше.');
  }
});

// Catch-all handler for any text message
bot.on(message('text'), async (ctx) => {
  await ctx.reply('Будь ласка, скористайтеся меню:', mainMenuKeyboard);
});

// Export the bot for use in your Next.js API routes
export default bot;
