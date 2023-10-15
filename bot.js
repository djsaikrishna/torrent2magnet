import { config } from "dotenv";
config();
import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Import command
import start from "./bot/commands/start.js";
import torrent2magnet from "./bot/commands/torrent2magnet.js";
import help from "./bot/commands/help.js";
import stats from "./bot/commands/stats.js";

//Use command
start(bot);
torrent2magnet(bot);
help(bot);
stats(bot);
