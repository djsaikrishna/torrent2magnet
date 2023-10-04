import { existsSync, mkdirSync, readFileSync, unlinkSync } from "fs";
import parseTorrent from "parse-torrent";
import axios from "axios";

export default (bot) => {
  bot.on("document", async (msg) => {
    const chatId = msg.chat.id;
    const msgId = msg.message_id;
    const { file_id, file_name } = msg.document;
    const downloadDir = "./torrents";
    try {
      //if user doesn't send .torrent file then stop executing rest of the codes
      if (!/\.torrent$/i.test(file_name)) {
        return bot.sendMessage(
          chatId,
          "Invalid .torrent file. Try again!",
          { reply_to_message_id: msgId }
        );
      }
      //check if directory exists or not if not then create
      if (!existsSync(downloadDir)) {
        mkdirSync(downloadDir);
      }
      //download file and save it to directory
      const downloaded_file = await bot.downloadFile(file_id, downloadDir);
      const metadata = await parseTorrent(readFileSync(downloaded_file));
      const magnet =
        `magnet:?xt=urn:btih:${metadata.infoHash}&dn=${encodeURIComponent(
          metadata.name
        )}` +
        metadata.announce
          .map((tracker) => `&tr=${encodeURIComponent(tracker)}`)
          .join("");

      //If message length is over 4096 then use telegraph
      if (magnet.length >= 4096) {
        const paste = await axios.post(process.env.TELE_GRAPH_URL, {
          access_token: process.env.TELE_GRAPH_TOKEN,
          title: "magnet link",
          content: [{ tag: "p", children: [magnet] }],
          return_content: true,
        });
        bot.sendMessage(chatId, `${paste.data.result.url}`, {
          reply_to_message_id: msgId,
        });
      } else {
        bot.sendMessage(chatId, `<em>${magnet}</em>`, {
          parse_mode: "HTML",
          reply_to_message_id: msgId,
        });
      }
      //and Now delete the .torrent file from directory;
      unlinkSync(downloaded_file);
    } catch (error) {
      bot.sendMessage(chatId, `${error.message}`);
    }
  });
};
