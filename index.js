const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

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
    case "dice" :
      var roll = Math.floor(Math.random() * 6) + 1;
      message.reply("Vous êtes tombé sur un" + roll);
      break;
    case "kick" :
      let reason = args.slice(1).join(" ");
      const member = message.mentions.members.first();
      member.kick(reason.join(" "));
      break;
    case "say" :
      let text = args.join(" ");
      message.channel.send(text);
      break;
  }
});

bot.login(config.token);