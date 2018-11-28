const Commando = require('discord.js-commando');

class AllianceCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'a',
            group : 'grepolis',
            memberName : 'a',
            description : 'Permet de gérer l\'alliance.'
        });
    }

    async run(message, args) {
        const arg = message.content.slice(1).trim().split(/ +/g);
        let arg_1 = (String)(arg[2]).toLowerCase();
        var monde_nom;
        if (arg_1=="pharès") {
            monde_nom = "Pharès";
        } else if (arg_1=="phares") {
            monde_nom = "Pharès";
        } else if (arg_1=="modon") {
            monde_nom = "Modon";
        } else if (arg_1=="oréos") {
            monde_nom = "Oréos";
        } else if (arg_1=="oreos") {
            monde_nom = "Oréos";
        } else if (arg_1=="amisos") {
            monde_nom = "Amisos";
        } else if (arg_1=="byblos") {
            monde_nom = "Byblos";
        } else if (arg_1=="carystos") {
            monde_nom = "Carystos";
        } else if (arg_1=="dion") {
            monde_nom = "Dion";
        } else if (arg_1=="épidamne") {
            monde_nom = "Epidamne";
        } else if (arg_1=="epidamne") {
            monde_nom = "Epidamne";
        } else if (arg_1=="gortyne") {
            monde_nom = "Gortyne";
        } else if (arg_1=="héliopolis") {
            monde_nom = "Héliopolis";
        } else if (arg_1=="heliopolis") {
            monde_nom = "Héliopolis";
        } else if (arg_1=="istros") {
            monde_nom = "Istros";
        } else if (arg_1=="kastoria") {
            monde_nom = "Kastoria";
        } else if (arg_1=="lentini") {
            monde_nom = "Lentini";
        } else if (arg_1=="naucratis") {
            monde_nom = "Naucratis";
        }
        let arg_2 = (String)(arg[1]);
        message.delete();
        if (arg_2=="create") {
            let nom_alliance = (String)(arg.slice(3).join(" "));
    
            let role_nom1 = monde_nom+" - "+nom_alliance+" - Fondateur";
            message.guild.createRole({
                name: role_nom1,
                color: 'GOLD',
            });

            let leader = monde_nom+" - "+nom_alliance+" - Leader";
            message.guild.createRole({
                name: leader,
                color: 'GOLD',
            });

            let recruteur = monde_nom+" - "+nom_alliance+" - Recruteur";
            message.guild.createRole({
                name: recruteur,
                color: 'GOLD',
            });

            let diplo = monde_nom+" - "+nom_alliance+" - Diplomatie";
            message.guild.createRole({
                name: diplo,
                color: 'GOLD',
            });

            let membre = monde_nom+" - "+nom_alliance+" - Membre";
            message.guild.createRole({
                name: membre,
                color: 'GOLD',
            });

            let invite = monde_nom+" - "+nom_alliance+" - Invitation";
            message.guild.createRole({
                name: invite,
                color: 'BLUE',
            });
            let bot = message.guild.channels.get("517383572181614604");
            bot.send("!addrole "+message.author.id+" "+role_nom1);
            bot.send("!addrole "+message.author.id+" "+leader);
            bot.send("!addrole "+message.author.id+" "+recruteur);
            bot.send("!addrole "+message.author.id+" "+diplo);
            bot.send("!addrole "+message.author.id+" "+membre);
            bot.send("!perms "+monde_nom+" "+nom_alliance);
        } else if (arg_2=="invite") {
            let nom_alliance = (String)(arg.slice(4).join(" "));
            let role_nom = monde_nom+" - "+nom_alliance+" - Invitation";
            let mem = message.guild.members.find('id',message.author.id);
            if (mem.roles.exists('name',monde_nom+" - "+nom_alliance+" - Recruteur")) {
                mem = message.mentions.members.first();
                message.guild.channels.get("517383572181614604").send("!addrole "+mem.id+" "+role_nom);
                mem.send("Vous avez été invter à rejoindre "+nom_alliance+" sur le monde "+monde_nom);
            } else {
                message.channel.send("Vous n'avez pas les droits.");
            }
        } else if (arg_2=="join") {
            let nom_alliance = (String)(arg.slice(3).join(" "));
            let role_nom = monde_nom+" - "+nom_alliance+" - Invitation";
            let mem = message.guild.members.find('id',message.author.id);
            if (mem.roles.exists('name',monde_nom+" - "+nom_alliance+" - Invitation")) {
                message.guild.channels.get("517383572181614604").send("!removerole "+message.author.id+" "+role_nom);
                let membre = monde_nom+" - "+nom_alliance+" - Membre";
                message.guild.channels.get("517383572181614604").send("!addrole "+message.author.id+" "+membre);
            } else {
                message.channel.send("Vous n'êtes pas invité par cette alliance.");
            }
        } else if (arg_2=="promote") {
            let nom_alliance = (String)(arg.slice(5).join(" "));
            let mem = message.guild.members.find('id',message.author.id);
            if (mem.roles.exists('name',monde_nom+" - "+nom_alliance+" - Fondateur")) {
                let role_nom = monde_nom+" - "+nom_alliance+" - "+arg[4];
                message.guild.channels.get("517383572181614604").send("!addrole "+message.mentions.members.first().id+" "+role_nom);
            } else {
                message.channel.send("Vous n'avez pas les droits.");
            }
        } else if (arg_2=="demote") {
            let nom_alliance = (String)(arg.slice(5).join(" "));
            let mem = message.guild.members.find('id',message.author.id);
            if (mem.roles.exists('name',monde_nom+" - "+nom_alliance+" - Fondateur")) {
                let role_nom = monde_nom+" - "+nom_alliance+" - "+arg[4];
                message.guild.channels.get("517383572181614604").send("!removerole "+message.mentions.members.first().id+" "+role_nom);
            } else {
                message.channel.send("Vous n'avez pas les droits.");
            }
        } else if (arg_2=="delete") {
            let nom_alliance = (String)(arg.slice(3).join(" "));
            let mem = message.guild.members.find('id',message.author.id);
            if (mem.roles.exists('name',monde_nom+" - "+nom_alliance+" - Fondateur")) {
                message.guild.roles.find('name',monde_nom+" - "+nom_alliance+" - Fondateur").delete();
                message.guild.roles.find('name',monde_nom+" - "+nom_alliance+" - Leader").delete();
                message.guild.roles.find('name',monde_nom+" - "+nom_alliance+" - Recruteur").delete();
                message.guild.roles.find('name',monde_nom+" - "+nom_alliance+" - Diplomatie").delete();
                message.guild.roles.find('name',monde_nom+" - "+nom_alliance+" - Membre").delete();
                message.guild.roles.find('name',monde_nom+" - "+nom_alliance+" - Invitation").delete();
            } else {
                message.channel.send("Vous n'avez pas les droits.");
            }
        } else if (arg_2=="leave") {
            let nom_alliance = (String)(arg.slice(3).join(" "));
            let role_l = monde_nom+" - "+nom_alliance+" - Leader";
            let role_r = monde_nom+" - "+nom_alliance+" - Recruteur";
            let role_d = monde_nom+" - "+nom_alliance+" - Diplomatie";
            let role_m = monde_nom+" - "+nom_alliance+" - Membre";
            let mem = message.guild.members.find('id',message.author.id);
            if (mem.roles.exists('name',monde_nom+" - "+nom_alliance+" - Membre")) {
                message.guild.channels.get("517383572181614604").send("!removerole "+message.author.id+" "+role_l);
                message.guild.channels.get("517383572181614604").send("!removerole "+message.author.id+" "+role_r);
                message.guild.channels.get("517383572181614604").send("!removerole "+message.author.id+" "+role_d);
                message.guild.channels.get("517383572181614604").send("!removerole "+message.author.id+" "+role_m);
            } else {
                message.channel.send("Vous n'êtes pas dans cette alliance.");
            }
        }
    }
}

module.exports = AllianceCommand;