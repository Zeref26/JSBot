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
    if (!(o_member.id == '295196682268835851' || o_member.id == '373444058598735882')) {
        if (o_member.presence.status == 'idle') { 
            if (n_member.presence.status == 'online' || n_member.presence.status == 'dnd') {
                bot.channels.find('id', "577115977083256833").send(n_member.displayName+" n'est plus AFK.");
            } else if (n_member.presence.status == 'offline') {
                bot.channels.find('id', "577115977083256833").send(n_member.displayName+" s'est déconnecté.");
            }
        } else if (n_member.presence.status == 'offline') {
            bot.channels.find('id', "577115977083256833").send(n_member.displayName+" s'est déconnecté.");
        } else if (o_member.presence.status == 'offline') {
            bot.channels.find('id', "577115977083256833").send(n_member.displayName+" s'est connecté.");
        } else if (o_member.presence.status == 'online' && n_member.presence.status == 'idle') {
            bot.channels.find('id', "577115977083256833").send(n_member.displayName+" est AFK.");
        }
    }
});

bot.login(process.env.TOKEN);