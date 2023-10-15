## Torrent to Magnet

A Telegram bot to convert .torrent file into magnet link.
Just send any .torrent file to the bot and it'll give you
magnet link in return.

## Available commands

```
/start - Start the bot
/help - Display help message
/stats - only owner can execute this 
To Convert torrent file into magnet links just send any .torrent file.
```

## Requirements

Navigate to the cloned directory

Install dependencies: `npm install`

Create a `.env` file inside the directory and fill in all the details.

Example `.env` file:

```
BOT_TOKEN=//grab your token from https://t.me/BotFather
TELE_GRAPH_URL=https://api.telegra.ph/createPage
TELE_GRAPH_TOKEN=//grab the telegraph token
MONGO_DB=//Mongodb url for saving counts
SUDO_USER= //TG Userid
```

### Start server

To run the server locally, use the following command: `npm run dev`

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

Show your support by starring [⭐️](https://github.com/joybiswas007/torrent2magnet/stargazers) this project!
