import { Telegraf, Markup, Context } from 'telegraf';
import {
  Update,
  ChatMember,
  ChatMemberUpdated,
} from 'telegraf/typings/core/types/typegram';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Your channel username
const CHANNEL_USERNAME = process.env.CHANNEL_USERNAME as string;

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
  const chatMemberUpdate = ctx.chatMember as ChatMemberUpdated;

  if (
    'username' in chatMemberUpdate.chat &&
    chatMemberUpdate.chat.username === CHANNEL_USERNAME.slice(1) &&
    chatMemberUpdate.new_chat_member.status === 'member' &&
    chatMemberUpdate.old_chat_member.status !== 'member'
  ) {
    // ... rest of the function
  }
});

bot.launch();
