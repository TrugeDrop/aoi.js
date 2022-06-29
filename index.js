const aoijs = require("aoi.js");
const config = require('./config.js');

const bot = new aoijs.Bot({
    token: config.token,
    prefix: config.prefix,
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

// Events
bot.onMessage();

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,"./komutlar/");

// Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[$userTag[$clientID] hazır!]`
});

// Commands

//Bot Status - You Can Duplicate
bot.status({
	text: 'Herkesi', // status letter
	type: 'WATCHING', // playing part
	status: 'online', // status
	time: 12 // time
});

bot.variables({
    degisken: "degisken",
    degisken2: "degisken2"
})
