const TelegramBot = require('node-telegram-bot-api');
const token = '5306549693:AAGwZ-6F-589xONPdx5t3v4OJBCVj_CWK9g';
const bot = new TelegramBot(token, {polling: true});
function solut(msg) {
    try {
    if (typeof(eval(msg)) != 'number') return ('Somth went wrong. Try again')
    return (`${eval(msg)}`)
    } catch {
    return 'Somth went wrong. Try again'
    }
}
bot.on("message", async (msg) => {
      bot.sendMessage(msg.chat.id, solut(msg.text).toString());
});
