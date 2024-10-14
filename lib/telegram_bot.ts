import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';
import { getAllFabrics } from './fabric';
const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Main menu keyboard
const mainMenuKeyboard = Markup.keyboard([
  ['🛠️ Перетяжка меблів', 'Заміна Пружинного Блоку', '🎨 Каталог Тканин'],
  ['📞 Контакти', 'Про нас'],
]).resize();
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
  try {
    const fabrics = await getAllFabrics();
    let page = 0;

    const showFabricsPage = async (page: number) => {
      const startIndex = page * 5;
      const endIndex = startIndex + 5;
      const currentPageFabrics = fabrics.slice(startIndex, endIndex);

      const keyboard = Markup.keyboard([
        ...currentPageFabrics.map((fabric) => [fabric.title]),
        [
          page > 0 ? '⬅️ Попередня' : '',
          endIndex < fabrics.length ? 'Наступна ➡️' : '',
        ].filter(Boolean),
        ['🔙 Назад до головного меню'],
      ]).resize();

      await ctx.reply('Оберіть тканину:', keyboard);
    };

    await showFabricsPage(page);

    // Handle pagination
    bot.hears('Наступна ➡️', async (ctx) => {
      page++;
      await showFabricsPage(page);
    });

    bot.hears('⬅️ Попередня', async (ctx) => {
      page--;
      await showFabricsPage(page);
    });

    // Handle fabric selection
    bot.hears(
      fabrics.map((f) => f.title),
      async (ctx) => {
        const selectedFabric = fabrics.find(
          (f) => f.title === ctx.message.text
        );
        if (selectedFabric) {
          await showFabricInfo(ctx, selectedFabric);
        }
      }
    );
  } catch (error) {
    console.error('Error in Каталог Тканин handler:', error);
    await ctx.reply('Вибачте, сталася помилка. Спробуйте ще раз пізніше.');
  }
});

async function showFabricInfo(ctx: any, fabric: any) {
  let message = `Інформація про тканину ${fabric.title}:\n\n`;
  message += `Опис: ${fabric.description}\n`;
  message += `Ціна: ${fabric.price} грн/м²\n`;

  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback('🔙 Назад до списку тканин', 'back_to_fabrics')],
  ]);

  if (fabric.title === 'Calvados' && fabric.movieUrl) {
    keyboard.reply_markup.inline_keyboard.unshift([
      Markup.button.url('🎬 Дивитися відео про Calvados', fabric.movieUrl),
    ]);
  }

  await ctx.reply(message, keyboard);
}

// Handle the 'back to fabrics' button
bot.action('back_to_fabrics', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.deleteMessage();
  await bot.handleUpdate({
    ...ctx.update,
    message: {
      ...ctx.update.callback_query.message,
      text: '🎨 Каталог Тканин',
    } as any, // Type assertion to bypass type checking
  });
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

// Catch-all handler for any text message
bot.on(message('text'), async (ctx) => {
  await ctx.reply('Будь ласка, скористайтеся меню:', mainMenuKeyboard);
});

// Export the bot for use in your Next.js API routes
export default bot;
