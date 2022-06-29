const aoijs = require("aoi.js");
const config = require('./config.js');

const bot = new aoijs.Bot({
    token: config.token,
    prefix: config.prefix,
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

//Events
bot.onMessage();

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,"./komutlar/");

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[$userTag[$clientID] hazır!]`
});

//Komutları alta yazın.

//Komutları üste yazın.

//Bot Durumu - Çoğalta bilirsiniz
bot.status({
	text: 'Herkesi', //durum yazısı
	type: 'WATCHING', //oynuyor kısmı
	status: 'online', //durum
	time: 12 //zaman 
});

bot.variables({
    degisken: "degisken",
    degisken2: "degisken2"
})