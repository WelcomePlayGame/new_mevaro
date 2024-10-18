import { Telegraf, Markup } from 'telegraf';
const bot = new Telegraf(process.env.BOT_TOKEN as string);
bot.telegram.sendMessage('mevaro_kiev', 'Новое сообщение в канале');
