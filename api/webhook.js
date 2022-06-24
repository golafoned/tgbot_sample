// https://github.com/yagop/node-telegram-bot-api/issues/319#issuecomment-324963294
// Fixes an error with Promise cancellation
process.env.NTBA_FIX_319 = "test";
const TelegramBot = require("node-telegram-bot-api");
function solut(msg) {
    try {
        if (typeof eval(msg) != "number") return "Somth went wrong. Try again";
        return `${eval(msg)}`;
    } catch {
        return "Somth went wrong. Try again";
    }
}
module.exports = async (request, response) => {
    try {
        const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

        const { body } = request;

        if (body.message) {
            const {
                chat: { id },
                text,
            } = body.message;

            const message = solut(text).toString();

            await bot.sendMessage(id, message);
        }
    } catch (error) {
        console.error("Error sending message");
        console.log(error.toString());
    }
    response.send("OK");
};
