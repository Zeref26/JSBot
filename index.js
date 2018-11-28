const Discord = require('discord.js-commando');
const bot = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('grepolis', 'Grepolis');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on("message", (message) => {
    if (message.content.startsWith("!addrole")) {
        message.delete();
        const arg = message.content.slice(1).trim().split(/ +/g);
        let arg_1 = (String)(arg[1]);
        let arg_2 = (String)(arg.slice(2).join(" "));
        let mem = message.guild.members.find('id',arg_1);
        let role = message.guild.roles.find('name',arg_2);
        mem.addRole(role);
    } else if (message.content.startsWith("!removerole")) {
        message.delete();
        const arg = message.content.slice(1).trim().split(/ +/g);
        let arg_1 = (String)(arg[1]);
        let arg_2 = (String)(arg.slice(2).join(" "));
        let mem = message.guild.members.find('id',arg_1);
        let role = message.guild.roles.find('name',arg_2);
        mem.removeRole(role);
    } else if (message.content.startsWith("!perms")) {
        message.delete();
        const arg = message.content.slice(1).trim().split(/ +/g);
        let monde_nom = arg[1];
        let nom_alliance = arg.slice(2).join(" ");
        let role = message.guild.roles.find('name',monde_nom+" - "+nom_alliance+" - Membre");
        message.guild.createChannel(monde_nom+" "+nom_alliance+" général", 'text', [{
            id: role.id,
            allow: ['READ_MESSAGES']
        }]);
    }
});

bot.login(config.token);