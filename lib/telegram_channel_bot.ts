import { Telegraf, Markup, Context } from 'telegraf';
import { ChatMemberUpdated } from 'telegraf/typings/core/types/typegram';
const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Channel username without "@"
const CHANNEL_USERNAME = process.env.CHANNEL_USERNAME?.replace(
  '@',
  ''
) as string;
export const mainMenuKeyboard = Markup.keyboard([
  ['🛠️ Перетяжка меблів', 'Заміна Пружинного Блоку'],
  ['📞 Контакти', 'Про нас'],
]).resize();
// Function to check if a user is subscribed to the channel
async function isSubscribed(ctx: Context, userId: number): Promise<boolean> {
  try {
    const chatMember = await ctx.telegram.getChatMember(
      '@' + CHANNEL_USERNAME,
      userId
    );
    return ['member', 'administrator', 'creator'].includes(chatMember.status);
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return false;
  }
}

bot.on('chat_member', async (ctx) => {
  const chatMemberUpdate = ctx.chatMember as ChatMemberUpdated;

  if (
    'username' in chatMemberUpdate.chat &&
    chatMemberUpdate.chat.username === CHANNEL_USERNAME &&
    chatMemberUpdate.new_chat_member.status === 'member' &&
    chatMemberUpdate.old_chat_member.status !== 'member'
  ) {
    const userId = chatMemberUpdate.new_chat_member.user.id;

    try {
      // Send a welcome message to the user
      await ctx.telegram.sendMessage(
        userId,
        `Вітаємо! Дякуємо за підписку на наш канал @${CHANNEL_USERNAME}. Як ми можемо вам допомогти?`,
        {
          reply_markup: mainMenuKeyboard.reply_markup,
        }
      );
    } catch (error) {
      console.error('Error sending welcome message:', error);
    }
  }
});

bot.launch();
