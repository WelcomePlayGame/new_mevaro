import { Telegraf, Markup } from 'telegraf';
const bot = new Telegraf(process.env.BOT_TOKEN as string);
bot.command('check_subscription', async (ctx) => {
  const userId = ctx.from?.id;

  try {
    const chatMember = await ctx.telegram.getChatMember(
      '@your_channel',
      userId
    );
    if (
      chatMember.status === 'member' ||
      chatMember.status === 'administrator'
    ) {
      ctx.reply('Ви підписані на наш канал!');
    } else {
      ctx.reply('Будь ласка, підпишіться на наш канал!');
    }
  } catch (error) {
    ctx.reply('Не вдалося перевірити ваш статус.');
  }
});
