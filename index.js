const Discord = require('discord.js-commando');
const bot = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('grepolis', 'Grepolis');
bot.registry.registerGroup('messaging', 'Messaging');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.login(process.env.TOKEN);
