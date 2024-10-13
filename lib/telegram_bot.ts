import { Telegraf, Markup } from 'telegraf';
const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Main menu keyboard
const mainMenuKeyboard = Markup.keyboard([
  ['🛠️ Перетяжка меблів', '🛏️ Заміна Пружинного Блоку', '🎨 Каталог Тканин'],
  ['📞 Контакти', 'ℹ️ Про нас'],
]).resize();

// Submenu keyboard for "Перетяжка меблів"
const reupholsterySubmenuKeyboard = Markup.keyboard([
  ['🛋️ Дивани', '🪑 Стільці'],
  ['🛏️ Ліжка', '🔙 Назад до головного меню'],
]).resize();

const reupholsterySubmenuforSofaKeyboard = Markup.keyboard([
  ['🛋️ Прямий Диван', '🛋️↪️ Кутовий Диван'],
  ['🔙 Назад до головного меню'],
]).resize();

const reupholsterySubmenuforChairKeyboard = Markup.keyboard([
  ['🪑 Стілець зі спинкою', '🔲 Стілець без спинки'],
  ['🔙 Назад до головного меню'],
]).resize();

const reupholsterySubmenuforBedKeyboard = Markup.keyboard([
  ["🛌 Узголів'я ліжка", '🛏️ Ліжко'],
  ['🔙 Назад до головного меню'],
]).resize();

const reupholsterySubmenuforSpringBlockKeyboard = Markup.keyboard([
  [
    '🔩 Заміна Пружинного Блоку без поролону',
    '🔩 Заміна Пружинного Блоку з поролоном',
  ],
  ['🔙 Назад до головного меню'],
]).resize();

// Start command
bot.command('start', async (ctx) => {
  await ctx.reply('Ласкаво просимо! Оберіть опцію:', mainMenuKeyboard);
});

// Main menu options
bot.hears('🛠️ Перетяжка меблів', async (ctx) => {
  await ctx.reply(
    'Оберіть тип меблів для перетяжки:',
    reupholsterySubmenuKeyboard
  );
});

bot.hears('🛏️ Заміна Пружинного Блоку', async (ctx) => {
  await ctx.reply(
    'Оберіть тип робіт з заміною пружинного блоку:',
    reupholsterySubmenuforSpringBlockKeyboard
  );
});

bot.hears('🎨 Каталог Тканин', async (ctx) => {
  await ctx.reply('Який тип тканини вас цікавить?');
});

bot.hears('📞 Контакти', async (ctx) => {
  await ctx.reply("Зв'яжіться з нами: @romaniv21");
});

bot.hears('ℹ️ Про нас', async (ctx) => {
  await ctx.reply('Інформація про нашу компанію...');
});

// Submenu options for "Перетяжка меблів"
bot.hears('🛋️ Дивани', async (ctx) => {
  await ctx.reply('Оберіть тип дивану:', reupholsterySubmenuforSofaKeyboard);
});

bot.hears('🪑 Стільці', async (ctx) => {
  await ctx.reply('Оберіть тип стільця:', reupholsterySubmenuforChairKeyboard);
});

bot.hears('🛏️ Ліжка', async (ctx) => {
  await ctx.reply('Оберіть тип ліжка:', reupholsterySubmenuforBedKeyboard);
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
