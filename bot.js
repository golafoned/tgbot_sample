const TelegramBot = require('node-telegram-bot-api');
const token = '5306549693:AAGwZ-6F-589xONPdx5t3v4OJBCVj_CWK9g';
const bot = new TelegramBot(token, {polling: true});

bot.on("message", async (msg) => {
      bot.sendMessage(msg.chat.id, `${Number(msg.text)*2}`);
});
