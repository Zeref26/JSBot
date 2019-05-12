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

bot.on('presenceUpdate', (o_member,n_member) => {
    if (o_member.presence.status == 'idle') { 
        if (n_member.presence.status == 'online' || n_member.presence.status == 'dnd') {
            bot.channels.find('id', "577115977083256833").send(member+" n'est plus AFK.");
        }
        if (n_member.presence.status == 'offline') {
            bot.channels.find('id', "577115977083256833").send(member+" s'est déconnecté.");
        }
    } else if (n_member.presence.status == 'offline') {
        bot.channels.find('id', "577115977083256833").send(member+" s'est déconnecté.");
    } else if (o_member.presence.status == 'offline') {
        bot.channels.find('id', "577115977083256833").send(member+" s'est connecté.");
    }
});

bot.on('')

bot.login(process.env.TOKEN);