export default (bot) => {
  bot.onText(/\/help/, (msg) => {
    const { id: chatId } = msg.chat;
    const msgId = msg.message_id;
    try {
      const message =
        "Sometimes you may face this error <b>read ECONNRESET</b>. Fret not; just send the .torrent file again, and it'll convert the file. There is a <b>maximum message length</b> of 4096 characters, larger messages will be automatically split up into smaller ones and sent separately. Well, some magnet links are larger than 4096 characters. To resolve this issue, <a href='https://telegra.ph/'>telegra.ph</a> is used to send large texts, and small links are sent as regular texts.";

      bot.sendMessage(chatId, `${message}`, {
        parse_mode: "HTML",
        reply_to_message_id: msgId,
      });
    } catch (error) {
      bot.sendMessage(chatId, `${error.message}`, {
        reply_to_message_id: msgId,
      });
    }
  });
};
