export default (bot) => {
  bot.onText(/\/start/, (msg) => {
    const { id: chatId } = msg.chat;
    const msgId = msg.message_id;
    try {
      bot.sendMessage(
        chatId,
        "Hi, I'm <b>Torrent to Magnet</b> bot. Just send me any .torrent file and I'll give you <b>Magnet</b> link.",
        {
          parse_mode: "HTML",
          reply_to_message_id: msgId,
        }
      );
    } catch (error) {
      bot.sendMessage(chatId, `${error.message}`, {
        reply_to_message_id: msgId,
      });
    }
  });
};
