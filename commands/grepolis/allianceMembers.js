const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const https = require('https');

class AllianceInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'alliance',
            group : 'grepolis',
            memberName : 'alliance',
            description : 'Renvoie les informations de l\'alliance (paramètre n°1).'
        });
    }

    async run(message, args) {
        message.delete();
        var str = '';
        var req = https.request('https://fr113.grepolis.com/data/alliances.txt', function(response) {
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                var str2 = '';
                var req2 = https.request('https://fr113.grepolis.com/data/players.txt', function(response2) {
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
                        let id_alliance;
                        let points_alliance;
                        let rang;
                        var nb_mem = 0;
                        var membres_info = ["","","","",""];
                        if (i>=donnees.length) {
                            id_alliance = "Non défini";
                            points_alliance = "Non défini";
                            rang = "Non défini";
                            nb_mem = "Non défini";
                            membres_info = "Non défini";
                        } else {
                            id_alliance = donnees[i-1];
                            points_alliance = donnees[i+1];
                            rang = donnees[i+4];
                            data = str2;
                            mot = "";
                            var donnees2 = [];
                            for(var j = 0; j<data.length; j++) {
                                if (data.charAt(j)!=','&&data.charAt(j)!='\n') {
                                    mot = mot.concat(data.charAt(j));
                                } else {
                                    donnees2.push(mot);
                                    mot = "";
                                }
                            }
                            for(j = 0; j<donnees2.length; j++){
                                if (j%6!=4) {
                                    if (donnees2[j]==id_alliance){
                                        let psdo = donnees2[j-1];
                                        var pseudo = "";
                                        for(var k = 0; k<psdo.length; k++) {
                                            if (psdo.charAt(k)!='%'&&psdo.charAt(k)!='+') {
                                                pseudo = pseudo.concat(psdo.charAt(k));
                                            } else if (psdo.charAt(k)=='%') {
                                                if (psdo.charAt(k+1)=='C'&&psdo.charAt(k+2)=='3') {
                                                    if (psdo.charAt(k+4)=='A'&&psdo.charAt(k+5)=='9') {
                                                        pseudo = pseudo.concat('é');
                                                    } else if (psdo.charAt(k+4)=='8'&&psdo.charAt(k+5)=='9') {
                                                        pseudo = pseudo.concat('É');
                                                    } else if (psdo.charAt(k+4)=='8'&&psdo.charAt(k+5)=='8') {
                                                        pseudo = pseudo.concat('È');
                                                    } else if (psdo.charAt(k+4)=='A'&&psdo.charAt(k+5)=='8') {
                                                        pseudo = pseudo.concat('è');
                                                    } else if (psdo.charAt(k+4)=='B'&&psdo.charAt(k+5)=='4') {
                                                        pseudo = pseudo.concat('ô');
                                                    } else if (psdo.charAt(k+4)=='A'&&psdo.charAt(k+5)=='0') {
                                                        pseudo = pseudo.concat('à');
                                                    } else if (psdo.charAt(k+4)=='A'&&psdo.charAt(k+5)=='E') {
                                                        pseudo = pseudo.concat('î');
                                                    } else if (psdo.charAt(k+4)=='A'&&psdo.charAt(k+5)=='F') {
                                                        pseudo = pseudo.concat('ï');
                                                    }
                                                    k += 5;
                                                } else if (psdo.charAt(k+1)=='2'&&psdo.charAt(k+2)=='7') {
                                                    pseudo = pseudo.concat('\'');
                                                    k += 2;
                                                } else if (psdo.charAt(k+1)=='2'&&psdo.charAt(k+2)=='A') {
                                                    pseudo = pseudo.concat('*');
                                                    k += 2;
                                                }
                                            } else {
                                                pseudo = pseudo.concat(" ");
                                            }
                                        }
                                        if (nb_mem<=20) {
                                            membres_info[0] = membres_info[0].concat("**¤** "+pseudo+" : "+donnees2[j+1]+" points."+'\n');
                                        } else if (nb_mem<=40) {
                                            membres_info[1] = membres_info[1].concat("**¤** "+pseudo+" : "+donnees2[j+1]+" points."+'\n');
                                        } else if (nb_mem<=60) {
                                            membres_info[2] = membres_info[2].concat("**¤** "+pseudo+" : "+donnees2[j+1]+" points."+'\n');
                                        } else if (nb_mem<=80) {
                                            membres_info[3] = membres_info[3].concat("**¤** "+pseudo+" : "+donnees2[j+1]+" points."+'\n');
                                        } else if (nb_mem<=100) {
                                            membres_info[4] = membres_info[4].concat("**¤** "+pseudo+" : "+donnees2[j+1]+" points."+'\n');
                                        }
                                        nb_mem += 1;
                                    }
                                }
                            }
                        }
                        if (nb_mem<=20) {
                            message.channel.send({embed:{
                                color: 0xFF0000,
                                author: {
                                    name: "Informations de "+param,
                                    icon_url: message.channel.client.user.avatarURL
                                },
                                fields: [{
                                    name: "Nom de l'alliance",
                                    value: param
                                },
                                {
                                    name: "Points",
                                    value: points_alliance
                                },
                                {
                                    name: "Rang",
                                    value: rang
                                },
                                {
                                    name: "Nombre de membres",
                                    value: nb_mem
                                },
                                {
                                    name: "Membres",
                                    value: membres_info[0]
                                }],
                                timestamp: new Date(),
                                footer: {
                                    icon_url: message.channel.client.user.avatarURL,
                                    text: "© JS Bot"
                                }
                            }});
                        } else if (nb_mem<=40) {
                            message.channel.send({embed:{
                                color: 0xFF0000,
                                author: {
                                    name: "Informations de "+param,
                                    icon_url: message.channel.client.user.avatarURL
                                },
                                fields: [{
                                    name: "Nom de l'alliance",
                                    value: param
                                },
                                {
                                    name: "Points",
                                    value: points_alliance
                                },
                                {
                                    name: "Rang",
                                    value: rang
                                },
                                {
                                    name: "Nombre de membres",
                                    value: nb_mem
                                },
                                {
                                    name: "Membres (1)",
                                    value: membres_info[0]
                                },
                                {
                                    name: "Membres (2)",
                                    value: membres_info[1]
                                }],
                                timestamp: new Date(),
                                footer: {
                                    icon_url: message.channel.client.user.avatarURL,
                                    text: "© JS Bot"
                                }
                            }});
                        } else if (nb_mem<=60) {
                            message.channel.send({embed:{
                                color: 0xFF0000,
                                author: {
                                    name: "Informations de "+param,
                                    icon_url: message.channel.client.user.avatarURL
                                },
                                fields: [{
                                    name: "Nom de l'alliance",
                                    value: param
                                },
                                {
                                    name: "Points",
                                    value: points_alliance
                                },
                                {
                                    name: "Rang",
                                    value: rang
                                },
                                {
                                    name: "Nombre de membres",
                                    value: nb_mem
                                },
                                {
                                    name: "Membres (1)",
                                    value: membres_info[0]
                                },
                                {
                                    name: "Membres (2)",
                                    value: membres_info[1]
                                },
                                {
                                    name: "Membres (3)",
                                    value: membres_info[2]
                                }],
                                timestamp: new Date(),
                                footer: {
                                    icon_url: message.channel.client.user.avatarURL,
                                    text: "© JS Bot"
                                }
                            }});
                        } else if (nb_mem<=80) {
                            message.channel.send({embed:{
                                color: 0xFF0000,
                                author: {
                                    name: "Informations de "+param,
                                    icon_url: message.channel.client.user.avatarURL
                                },
                                fields: [{
                                    name: "Nom de l'alliance",
                                    value: param
                                },
                                {
                                    name: "Points",
                                    value: points_alliance
                                },
                                {
                                    name: "Rang",
                                    value: rang
                                },
                                {
                                    name: "Nombre de membres",
                                    value: nb_mem
                                },
                                {
                                    name: "Membres (1)",
                                    value: membres_info[0]
                                },
                                {
                                    name: "Membres (2)",
                                    value: membres_info[1]
                                },
                                {
                                    name: "Membres (3)",
                                    value: membres_info[2]
                                },
                                {
                                    name: "Membres (4)",
                                    value: membres_info[3]
                                }],
                                timestamp: new Date(),
                                footer: {
                                    icon_url: message.channel.client.user.avatarURL,
                                    text: "© JS Bot"
                                }
                            }});
                        } else if (nb_mem<=100) {
                            message.channel.send({embed:{
                                color: 0xFF0000,
                                author: {
                                    name: "Informations de "+param,
                                    icon_url: message.channel.client.user.avatarURL
                                },
                                fields: [{
                                    name: "Nom de l'alliance",
                                    value: param
                                },
                                {
                                    name: "Points",
                                    value: points_alliance
                                },
                                {
                                    name: "Rang",
                                    value: rang
                                },
                                {
                                    name: "Nombre de membres",
                                    value: nb_mem
                                },
                                {
                                    name: "Membres (1)",
                                    value: membres_info[0]
                                },
                                {
                                    name: "Membres (2)",
                                    value: membres_info[1]
                                },
                                {
                                    name: "Membres (3)",
                                    value: membres_info[2]
                                },
                                {
                                    name: "Membres (4)",
                                    value: membres_info[3]
                                },
                                {
                                    name: "Membres (5)",
                                    value: membres_info[4]
                                }],
                                timestamp: new Date(),
                                footer: {
                                    icon_url: message.channel.client.user.avatarURL,
                                    text: "© JS Bot"
                                }
                            }});
                        }
                    });
                }).end();
            });
        }).end();
    }
}

module.exports = AllianceInfoCommand;