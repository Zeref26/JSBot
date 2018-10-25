const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const https = require('https');

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
        message.delete();
        var str = '';
        var req = https.request('https://fr111.grepolis.com/data/players.txt', function(response) {
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                var str2 = '';
                var req2 = https.request('https://fr111.grepolis.com/data/alliances.txt', function(response2) {
                    response2.on('data', function (chunk) {
                        str2 += chunk;
                    });
                    response2.on('end', function () {
                        const arg = message.content.slice(1).trim().split(/ +/g);
                        var data = str;
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
                            } else if (param.charAt(i)=='\''){
                                par = par.concat("%27");
                            } else if (param.charAt(i)=='*'){
                                par = par.concat("%2A");
                            } else {
                                par = par.concat(param.charAt(i));
                            }
                        }
                        for(i = 0; i<donnees.length&&par!=donnees[i]; i++) {
                        }
                        let id;
                        let pseudo;
                        let id_alliance;
                        let alliance = "";
                        let points;
                        let rang;
                        let nb_villes;
                        if (i<donnees.length) {
                            id = donnees[i-1];
                            pseudo = donnees[i];
                            if (donnees[i+1]!="") {
                                id_alliance = donnees[i+1];
                                var data = str2;
                                var mot = "";
                                var donnees2 = [];
                                var url_alliance;
                                for(var j = 0; j<data.length; j++) {
                                    if (data.charAt(j)!=','&&data.charAt(j)!='\n') {
                                        mot = mot.concat(data.charAt(j));
                                    } else {
                                        donnees2.push(mot);
                                        mot = "";
                                    }
                                }
                                var j;
                                for(j = 0; j<donnees2.length&&id_alliance!=donnees2[j]; j++) {
                                }
                                url_alliance = donnees2[j+1];
                                for(j = 0; j<url_alliance.length; j++) {
                                    if (url_alliance.charAt(j)!='%'&&url_alliance.charAt(j)!='+') {
                                        alliance = alliance.concat(url_alliance.charAt(j));
                                    } else if (url_alliance.charAt(j)=='%') {
                                        if (url_alliance.charAt(j+1)=='C'&&url_alliance.charAt(j+2)=='3') {
                                            if (url_alliance.charAt(j+4)=='A'&&url_alliance.charAt(j+5)=='9') {
                                                alliance = alliance.concat('é');
                                            } else if (url_alliance.charAt(j+4)=='8'&&url_alliance.charAt(j+5)=='9') {
                                                alliance = alliance.concat('É');
                                            } else if (url_alliance.charAt(j+4)=='8'&&url_alliance.charAt(j+5)=='8') {
                                                alliance = alliance.concat('È');
                                            } else if (url_alliance.charAt(j+4)=='A'&&url_alliance.charAt(j+5)=='8') {
                                                alliance = alliance.concat('è');
                                            } else if (url_alliance.charAt(j+4)=='B'&&url_alliance.charAt(j+5)=='4') {
                                                alliance = alliance.concat('ô');
                                            } else if (url_alliance.charAt(j+4)=='A'&&url_alliance.charAt(j+5)=='0') {
                                                alliance = alliance.concat('à');
                                            } else if (url_alliance.charAt(j+4)=='A'&&url_alliance.charAt(j+5)=='E') {
                                                alliance = alliance.concat('î');
                                            } else if (url_alliance.charAt(j+4)=='A'&&url_alliance.charAt(j+5)=='F') {
                                                alliance = alliance.concat('ï');
                                            }
                                            j += 5;
                                        } else if (url_alliance.charAt(j+1)=='2'&&url_alliance.charAt(j+2)=='7') {
                                            alliance = alliance.concat('\'');
                                            j += 2;
                                        } else if (url_alliance.charAt(j+1)=='2'&&url_alliance.charAt(j+2)=='A') {
                                            alliance = alliance.concat('*');
                                            j += 2;
                                        }
                                    } else {
                                        alliance = alliance.concat(" ");
                                    }
                                }
                            } else {
                                id_alliance = "Sans Alliance";
                                alliance = "Sans Alliance";
                            }
                            points = donnees[i+2];
                            rang = donnees[i+3];
                            nb_villes = donnees[i+4];
                        } else {
                            id = "Non défini";
                            pseudo = "Non défini";
                            id_alliance = "Non défini";
                            alliance = "Non défini";
                            points = "Non défini";
                            rang = "Non défini";
                            nb_villes = "Non défini";
                        }
                        message.channel.send({embed:{
                            color: 0xFFBF00,
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
                                name: "Nom de l'alliance",
                                value: alliance
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
                            }],
                            timestamp: new Date(),
                            footer: {
                                icon_url: message.channel.client.user.avatarURL,
                                text: "© JS Bot"
                            }
                        }});
                    });
                }).end();
            });
        }).end();
    }
}

module.exports = PlayerInfoCommand;