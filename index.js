const Discord = require('discord.js-commando');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
    var interval = setInterval (function () {
        let date = new Date();
        let m = date.getMinutes()
        let s = date.getSeconds();
        if (m == 0 && s == 0) {
            let mess = bot.channels.find('name',"centre-de-la-zone").send("Mutation de la zone !")
        }
    }, 1 * 1000);
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
        case "help" :
            message.author.send("Les commandes n'ont pas de préfixe et doivent être utilisées dans les salons RP. \n\n _*Burst Link*_ : Active le Brain Burst et emmène dans le monde accéléré. \n _*Burst Out*_ : Permet de sortir du monde accéléré. \n _*Unlimited Burst Link*_ : Envoie dans la zone neutre. On ne peut utiliser le Burst Out qu'au pint de sortie.")
            break;
    }
});

bot.login(process.env.TOKEN);