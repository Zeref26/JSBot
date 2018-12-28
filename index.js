const Discord = require('discord.js-commando');
const bot = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;

bot.registry.registerGroup('test', 'Test');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on("message", (message) => {
    let mess = message.content.toLowerCase();
    switch (mess) {
        case "burst link" :
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Zone neutre")) {
                message.delete();
            } else {
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde accéléré"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
            }
            break;
        case "burst out" :
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Zone neutre")) {
                if (message.channel.name == "point-de-sortie") {
                    message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                    message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Zone neutre"));
                } else {
                    message.delete();
                }
            } else {
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde accéléré"));
            }
            break;
        case "unlimited burst link" :
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Monde accéléré")) {
                message.delete();
            } else {
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Zone neutre"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
            }
            break;
    }
});

bot.login(config.token);