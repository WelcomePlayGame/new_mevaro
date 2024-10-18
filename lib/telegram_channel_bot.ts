import { Telegraf, Markup, Context } from 'telegraf';
import { ChatMemberUpdated } from 'telegraf/typings/core/types/typegram';
const bot = new Telegraf(process.env.BOT_TOKEN as string);

const CHANNEL_USERNAME = 'mevaro_kiev';

export const mainMenuKeyboard = Markup.keyboard([
  ['🛠️ Перетяжка меблів', 'Заміна Пружинного Блоку'],
  ['📞 Контакти', 'Про нас'],
]).resize();
// Function to check if a user is subscribed to the channel
async function isSubscribed(ctx: Context, userId: number): Promise<boolean> {
  try {
    const chatMember = await ctx.telegram.getChatMember(
      CHANNEL_USERNAME,
      userId
    );
    return ['member', 'administrator', 'creator'].includes(chatMember.status);
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return false;
  }
}

bot.on('chat_member', async (ctx) => {
  console.log('Chat member update received:', ctx.chatMember);
  const chatMemberUpdate = ctx.chatMember as ChatMemberUpdated;

  if (
    'username' in chatMemberUpdate.chat &&
    chatMemberUpdate.chat.username === CHANNEL_USERNAME &&
    chatMemberUpdate.new_chat_member.status === 'member' &&
    chatMemberUpdate.old_chat_member.status !== 'member'
  ) {
    console.log(
      'User joined the channel:',
      chatMemberUpdate.new_chat_member.user.username
    );
    const userId = chatMemberUpdate.new_chat_member.user.id;

    try {
      const subscribed = await isSubscribed(ctx, userId);

      if (subscribed) {
        await ctx.telegram.sendMessage(
          userId,
          `Вітаємо! Дякуємо за підписку на наш канал @${CHANNEL_USERNAME}. Як ми можемо вам допомогти?`,
          {
            reply_markup: mainMenuKeyboard.reply_markup,
          }
        );
      } else {
        console.log('User is not subscribed');
      }
    } catch (error) {
      console.error(
        'Error checking subscription or sending welcome message:',
        error
      );
    }
  }
});

bot.launch();
