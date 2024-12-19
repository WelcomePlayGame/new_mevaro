import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

// === Константы клавиатуры ===
const mainMenuKeyboard = Markup.keyboard([['📞 Контакти', 'Про нас']]).resize();

// === Команда /start ===
bot.command('start', async (ctx) => {
  try {
    await ctx.reply('Ласкаво просимо до нашого бота компанії Mevaro!');
    await ctx.reply('Будь ласка, оберіть опцію:', mainMenuKeyboard);
  } catch (error) {
    console.error('Error in start command:', error);
    await ctx.reply('Вибачте, сталася помилка. Спробуйте ще раз пізніше.');
  }
});

// === Обработчики кнопок ===
bot.hears('📞 Контакти', async (ctx) => {
  await ctx.reply(
    "Зв'яжіться з нами:",
    Markup.inlineKeyboard([
      Markup.button.url('Написати @romaniv21', 'https://t.me/romaniv21'),
    ])
  );
});

bot.hears('Про нас', async (ctx) => {
  await ctx.reply(
    'Інформація про нашу компанію: ми займаємося перетяжкою меблів.'
  );
});

// === Обработка других сообщений ===
bot.on('text', async (ctx) => {
  await ctx.reply('Будь ласка, скористайтеся меню:', mainMenuKeyboard);
});

// === Запуск бота ===
bot.launch();
export default bot;
