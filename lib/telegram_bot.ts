import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

// === Константы клавиатур ===
const mainMenuKeyboard = Markup.keyboard([
  ['🛠️ Перетяжка меблів', 'Заміна Пружинного Блоку'],
  ['📞 Контакти', 'Про нас'],
]).resize();

const mainMenuInline = Markup.inlineKeyboard([
  [Markup.button.url('🎨 Каталог Тканин', 'https://mevaro.kiev.ua/fabrics')],
]);

const returnMainMenuKeyboard = Markup.keyboard([
  ['🔙 Назад до головного меню'],
]).resize();

const submenuKeyboards = {
  '🛠️ Перетяжка меблів': Markup.keyboard([
    ['🛋️ Дивани', '🪑 Стільці'],
    ['🛏️ Ліжка', '🔙 Назад до головного меню'],
  ]).resize(),
  'Заміна Пружинного Блоку': Markup.keyboard([
    [
      'Заміна Пружинного Блоку без поролону',
      'Заміна Пружинного Блоку з поролоном',
    ],
    ['🔙 Назад до головного меню'],
  ]).resize(),
  '🛋️ Дивани': Markup.keyboard([
    ['🛋️ Прямий Диван', '🛋️↪️ Кутовий Диван'],
    ['🔙 Назад до головного меню'],
  ]).resize(),
  '🪑 Стільці': Markup.keyboard([
    ['🪑 Стілець зі спинкою', '🔲 Стілець без спинки'],
    ['🔙 Назад до головного меню'],
  ]).resize(),
  '🛏️ Ліжка': Markup.keyboard([
    ["🛌 Узголів'я ліжка", '🛏️ Ліжко'],
    ['🔙 Назад до головного меню'],
  ]).resize(),
};

// === Команда /start ===
bot.command('start', async (ctx) => {
  try {
    await ctx.replyWithVideo('https://www.mevaro.kiev.ua/video/mevaro.mp4', {
      caption: 'Ласкаво просимо до нашого бота компанії Mevaro!',
    });
    await ctx.reply('Що Вас цікавить?', mainMenuKeyboard);
    await ctx.reply('Обрати тканину:', mainMenuInline);
  } catch (error) {
    console.error('Error in start command:', error);
    await ctx.reply('Вибачте, сталася помилка. Спробуйте ще раз пізніше.');
  }
});

// === Обработчики команд меню ===
bot.hears(Object.keys(submenuKeyboards), async (ctx) => {
  const submenu = submenuKeyboards[ctx.message.text];
  if (submenu) {
    await ctx.reply('Оберіть потрібний варіант:', submenu);
  }
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

bot.hears('Заміна Пружинного Блоку без поролону', async (ctx) => {
  await ctx.reply('Вартість: 4800 грн', returnMainMenuKeyboard);
});

bot.hears('Заміна Пружинного Блоку з поролоном', async (ctx) => {
  await ctx.reply(
    'Вартість: 6000 грн (залежить від щільності та висоти)',
    returnMainMenuKeyboard
  );
});

bot.hears("🛌 Узголів'я ліжка", async (ctx) => {
  await ctx.reply(
    "Вартість узголів'я ліжка від 5500 грн",
    returnMainMenuKeyboard
  );
});

bot.hears('🔙 Назад до головного меню', async (ctx) => {
  await ctx.reply('Ви повернулися до головного меню:', mainMenuKeyboard);
});

// === Обработка других сообщений ===
bot.on(message('text'), async (ctx) => {
  await ctx.replyWithVideo('https://www.mevaro.kiev.ua/video/mevaro.mp4', {
    caption: 'Ласкаво просимо до нашого бота компанії Mevaro!',
  });
  await ctx.reply('Будь ласка, скористайтеся меню:', mainMenuKeyboard);
});

// === Запуск бота ===
bot.launch();
export default bot;
