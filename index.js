const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;

const mod = require('./commands/moderation/kick.js');
const de = require('./commands/random/dice_roll.js');

bot.on('ready', () => {
    console.log('Bot is ready !');
  });
bot.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  switch (command) {
    case "kick" :
      let reason = args.slice(1).join(" ");
      console.log(mod);
      break;
    case "say" :
      let text = args.join(" ");
      message.channel.send(text);
      break;
    case "dice" :
      console.log(de);
      break; 
  }
});

bot.login(config.token);