const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class PlayerInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'player',
            group : 'grepolis',
            memberName : 'player',
            description : 'Renvoie les informations du joueur nommé.'
        });
    }

    async run(message, args) {
        var fs = require('fs');
        const arg = message.content.slice(1).trim().split(/ +/g);
        fs.readFile('players.txt', 'utf8', (err, data) => {
            if (err) throw err;
            var mot = "";
            var donnees = [];
            for(var i = 0; i<data.length; i++) {
                if (data.charAt(i)!=','&&data.charAt(i)!='\n') {
                    mot = mot.concat(data.charAt(i));
                } else {
                    donnees.push(mot);
                    mot = "";
                }
            }
            var i;
            for(i = 0; i<donnees.length&&arg.slice(1).join(" ")!=donnees[i]; i++) {
            }
            let id;
            let pseudo;
            let id_alliance;
            let points;
            let rang;
            let nb_villes;
            if (i<donnees.length) {
                id = donnees[i-1];
                pseudo = donnees[i];
                id_alliance = donnees[i+1];
                points = donnees[i+2];
                rang = donnees[i+3];
                nb_villes = donnees[i+4];
            } else {
                id = "Non défini";
                pseudo = "Non défini";
                id_alliance = "Non défini";
                points = "Non défini";
                rang = "Non défini";
                nb_villes = "Non défini";

            }
            message.channel.send({embed:{
                color: 0xffffff,
                author: {
                  name: "Informations de "+donnees[i],
                  icon_url: message.channel.client.user.avatarURL
                },
                fields: [{
                    name: "ID",
                    value: id
                },
                {
                    name: "Pseudo",
                    value: pseudo
                },
                {
                    name: "ID de l'alliance",
                    value: id_alliance
                },
                {
                    name: "Points",
                    value: points
                },
                {
                    name: "Rang",
                    value: rang
                },
                {
                    name: "Nombre de villes",
                    value: nb_villes
                }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: message.channel.client.user.avatarURL,
                  text: "© JS Bot"
                }
            }},"",{file: "https://wiki.en.grepolis.com/images/2/20/HoF_Arms.png"}
            );
        });
    }
}

module.exports = PlayerInfoCommand;