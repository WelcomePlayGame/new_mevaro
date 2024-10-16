import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';
const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Main menu keyboard
export const mainMenuKeyboard = Markup.keyboard([
  ['🛠️ Перетяжка меблів', 'Заміна Пружинного Блоку'],
  ['📞 Контакти', 'Про нас'],
]).resize();

const mainMenuInline = Markup.inlineKeyboard([
  [
    Markup.button.url(
      '🎨 Каталог Тканин',
      'https://www.mevaro.kiev.ua/fabrics'
    ),
  ],
]);

const returnMainMenuKeyboard = Markup.keyboard([
  ['🔙 Назад до головного меню'],
]).resize();

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
    'Заміна Пружинного Блоку без поролону',
    'Заміна Пружинного Блоку з поролоном',
  ],
  ['🔙 Назад до головного меню'],
]).resize();

// Start command
bot.command('start', async (ctx) => {
  try {
    // First, send the video banner
    await ctx.replyWithVideo('https://www.mevaro.kiev.ua/video/mevaro.mp4', {
      caption: 'Ласкаво просимо до нашого бота компанії Mevaro!',
    });

    // Then, send the menu options
    await ctx.reply('Що Вас цікавить?', mainMenuKeyboard);
    await ctx.reply('Обрати тканину', mainMenuInline);
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
    reupholsterySubmenuforSpringBlockKeyboard
  );
});

bot.hears('🎨 Каталог Тканин', async (ctx) => {
  await ctx.reply(
    'Переглянути наш каталог тканин можна на нашому сайті:',
    Markup.inlineKeyboard([
      Markup.button.url('Каталог тканин', 'https://www.mevaro.kiev.ua/fabrics'),
    ])
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
  await ctx.reply('Оберіть тип дивану:', reupholsterySubmenuforSofaKeyboard);
});

bot.hears('🪑 Стільці', async (ctx) => {
  await ctx.reply('Оберіть тип стільця:', reupholsterySubmenuforChairKeyboard);
});

bot.hears('🛏️ Ліжка', async (ctx) => {
  await ctx.reply('Оберіть тип ліжка:', reupholsterySubmenuforBedKeyboard);
});

bot.hears('🔙 Назад до головного меню', async (ctx) => {
  try {
    await ctx.reply('Ви повернулися до головного меню:', mainMenuKeyboard);
  } catch (error) {
    console.error('Error in main menu handler:', error);
    await ctx.reply('Вибачте, сталася помилка. Спробуйте ще раз пізніше.');
  }
});

bot.hears('Заміна Пружинного Блоку без поролону', async (ctx) => {
  await ctx.reply(
    'Вартість заміни пружинного блоку без поролону: 4800 грн',
    returnMainMenuKeyboard
  );
});
bot.hears('Заміна Пружинного Блоку з поролоном', async (ctx) => {
  await ctx.reply(
    'Вартість заміни пружинного блоку з поролоном: 6000 грн +- грн в залежнотсі від щільності та висоти',
    returnMainMenuKeyboard
  );
});

bot.hears("Узголів'я ліжка", async (ctx) => {
  await ctx.reply(
    "В залежності обраної тканини та точних  розмірів вартість узголів'я ліжка:  від 5500 грн",
    returnMainMenuKeyboard
  );
});

// Catch-all handler for any text message
bot.on(message('text'), async (ctx) => {
  await ctx.replyWithVideo('https://www.mevaro.kiev.ua/video/mevaro.mp4', {
    caption: 'Ласкаво просимо до нашого бота компанії Mevaro!',
  });
  await ctx.reply('Будь ласка, скористайтеся меню:', mainMenuKeyboard);
});

// Export the bot for use in your Next.js API routes
export default bot;
