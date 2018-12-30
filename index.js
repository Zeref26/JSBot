const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
    var interval = setInterval (function () {
        let date = new Date();
        let m = date.getMinutes()
        let s = date.getSeconds();
        if (m == 0 && s == 0) {
            let zone_n = Math.floor((Math.random() * 5) + 1);
            switch (zone_n) {
                case 1 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n L'endroit se transforme en une grande ville inhabitée avec des bâtiments sombres faits en métal dur]**")
                    break;
                case 2 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n La zone se transforme en une jungle dense et humide, l'ensemble de l'endroit est recouvert de plantes et de rochers]**")
                    break;
                case 3 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n Un vent glacial se lève et la zone se transforme en peine enneigée, la température ambiante est de -5 degrés et les mouvements dans la neige sont difficiles]**")
                    break;
                case 4 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n Une chaleur intense se lève dans la zone, le sol se fragmente par endroit laissant s'échapper des lacs de lave]**")
                    break;
                case 5 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n L'endroit se vide complètement et devient une simple plaine sans aucun arbre, juste de l'herbe à perte de vue, cependant la gravité ici est extrêmement élevée, les mouvements sont difficiles et les avatars lents perdent 50 Pv par minutes]**")
                    break;
                }
        }
    }, 1 * 1000);
});

bot.on("message", (message) => {
    message.guild.client.user.setAvatar("img.png");
    let mess = message.content.toLowerCase();
    switch (mess) {
        case "burst link" :
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker")) {
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Zone neutre")) {
                message.delete();
            } else {
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde accéléré"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
            }
        } else {
            message.delete();
        }
        break;
        case "burst out" :
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker")) {
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
            } else {
                message.delete();
            }
            break;
        case "unlimited burst link" :
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker")) {
                if (message.guild.members.find('id',message.author.id).roles.exists('name',"Monde accéléré")) {
                    message.delete();
                } else {
                    message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Zone neutre"));
                    message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                }
            } else {
                message.delete();
            }
            break;
        case "help" :
            message.author.send("Les commandes n'ont pas de préfixe et doivent être utilisées dans les salons RP. \n\n **Burst Link** : Active le Brain Burst et emmène dans le monde accéléré. \n **Burst Out** : Permet de sortir du monde accéléré. \n **Unlimited Burst Link** : Envoie dans la zone neutre. On ne peut utiliser le Burst Out qu'au point de sortie.");
            break;
    }
    if(message.content.startsWith("-valide")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            const args = message.content.slice(0).trim().split(/ +/g);
            let member = message.mentions.members.first();
            member.addRole(message.guild.roles.find('name',"--------------[IDENTITE]--------------"));
            member.addRole(message.guild.roles.find('name',"Burst Linker"));
            member.addRole(message.guild.roles.find('name',"Niveau 1"));
            member.addRole(message.guild.roles.find('name',"-------[COMPETENCES]-------"));
            member.addRole(message.guild.roles.find('name',"------------------------------"));
            member.addRole(message.guild.roles.find('name',"Monde réel"));
            member.addRole(message.guild.roles.find('name',args[2]));
        }
    }
});

bot.login(process.env.TOKEN);
