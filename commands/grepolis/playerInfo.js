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
        var request = require('request');
        message.channel.bulkDelete(1);
        request.get('https://fr111.grepolis.com/data/players.txt', function (error, response, body) {
            if (!error && response.statusCode == 200) {    
                const arg = message.content.slice(1).trim().split(/ +/g);
                var data = body;
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
                var param = (String)(arg.slice(1).join(" "));
                var par = "";
                for(i = 0; i<param.length; i++){
                    if (param.charAt(i)==" "){
                        par = par.concat("+");
                    } else if (param.charAt(i)=='é'){
                        par = par.concat("%C3%A9");
                    } else if (param.charAt(i)=='É') {
                        par = par.concat("%C3%89");
                    } else if (param.charAt(i)=='È') {
                        par = par.concat("%C3%88");
                    } else if (param.charAt(i)=='è'){
                        par = par.concat("%C3%A8");
                    } else if (param.charAt(i)=='ô'){
                        par = par.concat("%C3%B4");
                    } else if (param.charAt(i)=='à'){
                        par = par.concat("%C3%A0");
                    } else if (param.charAt(i)=='î'){
                        par = par.concat("%C3%AE");
                    } else if (param.charAt(i)=='ï'){
                        par = par.concat("%C3%AF");
                    } else {
                        par = par.concat(param.charAt(i));
                    }
                }
                for(i = 0; i<donnees.length&&par!=donnees[i]; i++) {
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
                    if (donnees[i+1]!="") {
                        id_alliance = donnees[i+1];
                    } else {
                        id_alliance = "Sans Alliance";
                    }
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
                        value: param
                    },
                    {
                        name: "Pseudo URL",
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
            }
        });
    }
}

module.exports = PlayerInfoCommand;
