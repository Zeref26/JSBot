const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const https = require('https');

class PlayerInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'player',
            group : 'grepolis',
            memberName : 'player',
            description : 'Renvoie les informations du joueur (paramètre n°1).'
        });
    }

    async run(message, args) {
        message.delete();
        var str = '';
        var req = https.request('https://fr113.grepolis.com/data/players.txt', function(response) {
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                var str2 = '';
                var req2 = https.request('https://fr113.grepolis.com/data/alliances.txt', function(response2) {
                    response2.on('data', function (chunk) {
                        str2 += chunk;
                    });
                    response2.on('end', function () {
                        var str3 = '';
                        var req3 = https.request('https://fr113.grepolis.com/data/towns.txt', function(response3) {
                            response3.on('data', function (chunk) {
                                str3 += chunk;
                            });
                            response3.on('end', function () {
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
                                for(i = 1; i<donnees.length&&par!=donnees[i]; i++) {
                                    i += 5;
                                }
                                let id;
                                let id_alliance;
                                let alliance = "";
                                let points;
                                let rang;
                                let nb_villes;
                                let villes = ["","","","",""];
                                let n_v = 0;
                                if (i<donnees.length) {
                                    id = donnees[i-1];
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
                                            j += 5;
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
                                    if (nb_villes!="0") {
                                        var data = str3;
                                        var mot = "";
                                        var donnees3 = [];
                                        for(var j = 0; j<data.length; j++) {
                                            if (data.charAt(j)!=','&&data.charAt(j)!='\n') {
                                                mot = mot.concat(data.charAt(j));
                                            } else {
                                                donnees3.push(mot);
                                                mot = "";
                                            }
                                        }
                                        var j;
                                        for(j = 0; j<donnees3.length; j++) {
                                            if (j%7==1&&donnees3[j]==id) {
                                                var ville_nom = "";
                                                for(var k = 0; k<donnees3[j+1].length; k++) {
                                                    if (donnees3[j+1].charAt(k)!='%'&&donnees3[j+1].charAt(k)!='+') {
                                                        ville_nom = ville_nom.concat(donnees3[j+1].charAt(k));
                                                    } else if (donnees3[j+1].charAt(k)=='%') {
                                                        if (donnees3[j+1].charAt(k+1)=='C'&&donnees3[j+1].charAt(k+2)=='3') {
                                                            if (donnees3[j+1].charAt(k+4)=='A'&&donnees3[j+1].charAt(k+5)=='9') {
                                                                ville_nom = ville_nom.concat('é');
                                                            } else if (donnees3[j+1].charAt(k+4)=='8'&&donnees3[j+1].charAt(k+5)=='9') {
                                                                ville_nom = ville_nom.concat('É');
                                                            } else if (donnees3[j+1].charAt(k+4)=='8'&&donnees3[j+1].charAt(k+5)=='8') {
                                                                ville_nom = ville_nom.concat('È');
                                                            } else if (donnees3[j+1].charAt(k+4)=='A'&&donnees3[j+1].charAt(k+5)=='8') {
                                                                ville_nom = ville_nom.concat('è');
                                                            } else if (donnees3[j+1].charAt(k+4)=='B'&&donnees3[j+1].charAt(k+5)=='4') {
                                                                ville_nom = ville_nom.concat('ô');
                                                            } else if (donnees3[j+1].charAt(k+4)=='A'&&donnees3[j+1].charAt(k+5)=='0') {
                                                                ville_nom = ville_nom.concat('à');
                                                            } else if (donnees3[j+1].charAt(k+4)=='A'&&donnees3[j+1].charAt(k+5)=='E') {
                                                                ville_nom = ville_nom.concat('î');
                                                            } else if (donnees3[j+1].charAt(k+4)=='A'&&donnees3[j+1].charAt(k+5)=='F') {
                                                                ville_nom = ville_nom.concat('ï');
                                                            }
                                                            k += 5;
                                                        } else if (donnees3[j+1].charAt(k+1)=='2'&&donnees3[j+1].charAt(k+2)=='7') {
                                                            ville_nom = ville_nom.concat('\'');
                                                            k += 2;
                                                        } else if (donnees3[j+1].charAt(k+1)=='2'&&donnees3[j+1].charAt(k+2)=='A') {
                                                            ville_nom = ville_nom.concat('*');
                                                            k += 2;
                                                        }
                                                    } else {
                                                        ville_nom = ville_nom.concat(" ");
                                                    }
                                                }
                                                n_v += 1;
                                                if (n_v<=20) {
                                                    villes[0] = villes[0].concat("**¤** "+ville_nom+" : "+donnees3[j+5]+" points\n");
                                                } else if (n_v<=40) {
                                                    villes[1] = villes[1].concat("**¤** "+ville_nom+" : "+donnees3[j+5]+" points\n");
                                                } else if (n_v<=60) {
                                                    villes[2] = villes[2].concat("**¤** "+ville_nom+" : "+donnees3[j+5]+" points\n");
                                                } else if (n_v<=80) {
                                                    villes[3] = villes[3].concat("**¤** "+ville_nom+" : "+donnees3[j+5]+" points\n");
                                                } else if (n_v<=100) {
                                                    villes[4] = villes[4].concat("**¤** "+ville_nom+" : "+donnees3[j+5]+" points\n");
                                                }
                                            }
                                        }
                                    } else {
                                        villes[0] = villes[0].concat("Aucune ville");
                                    }

                                } else {
                                    id = "Non défini";
                                    id_alliance = "Non défini";
                                    alliance = "Non défini";
                                    points = "Non défini";
                                    rang = "Non défini";
                                    nb_villes = "Non défini";
                                    villes[0] = "Non défini";
                                }
                                if (n_v<=20) {
                                    message.channel.send({embed:{
                                        color: 0xFFBF00,
                                        author: {
                                            name: "Informations de "+param,
                                            icon_url: message.channel.client.user.avatarURL
                                        },
                                        fields: [{
                                            name: "Pseudo",
                                            value: param
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
                                        },
                                        {
                                            name: "Ville(s)",
                                            value: villes[0]
                                        }],
                                        timestamp: new Date(),
                                        footer: {
                                            icon_url: message.channel.client.user.avatarURL,
                                            text: "© JS Bot"
                                        }
                                    }});
                                } else if (n_v<=40) {
                                    message.channel.send({embed:{
                                        color: 0xFFBF00,
                                        author: {
                                            name: "Informations de "+param,
                                            icon_url: message.channel.client.user.avatarURL
                                        },
                                        fields: [{
                                            name: "Pseudo",
                                            value: param
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
                                        },
                                        {
                                            name: "Villes (1)",
                                            value: villes[0]
                                        },
                                        {
                                            name: "Villes (2)",
                                            value: villes[1]
                                        }],
                                        timestamp: new Date(),
                                        footer: {
                                            icon_url: message.channel.client.user.avatarURL,
                                            text: "© JS Bot"
                                        }
                                    }});
                                } else if (n_v<=60) {
                                    message.channel.send({embed:{
                                        color: 0xFFBF00,
                                        author: {
                                            name: "Informations de "+param,
                                            icon_url: message.channel.client.user.avatarURL
                                        },
                                        fields: [{
                                            name: "Pseudo",
                                            value: param
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
                                        },
                                        {
                                            name: "Villes (1)",
                                            value: villes[0]
                                        },
                                        {
                                            name: "Villes (2)",
                                            value: villes[1]
                                        },
                                        {
                                            name: "Villes (3)",
                                            value: villes[2]
                                        }],
                                        timestamp: new Date(),
                                        footer: {
                                            icon_url: message.channel.client.user.avatarURL,
                                            text: "© JS Bot"
                                        }
                                    }});
                                } else if (n_v<=80) {
                                    message.channel.send({embed:{
                                        color: 0xFFBF00,
                                        author: {
                                            name: "Informations de "+param,
                                            icon_url: message.channel.client.user.avatarURL
                                        },
                                        fields: [{
                                            name: "Pseudo",
                                            value: param
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
                                        },
                                        {
                                            name: "Villes (1)",
                                            value: villes[0]
                                        },
                                        {
                                            name: "Villes (2)",
                                            value: villes[1]
                                        },
                                        {
                                            name: "Villes (3)",
                                            value: villes[2]
                                        },
                                        {
                                            name: "Villes (4)",
                                            value: villes[3]
                                        }],
                                        timestamp: new Date(),
                                        footer: {
                                            icon_url: message.channel.client.user.avatarURL,
                                            text: "© JS Bot"
                                        }
                                    }});
                                } else if (n_v<=100) {
                                    message.channel.send({embed:{
                                        color: 0xFFBF00,
                                        author: {
                                            name: "Informations de "+param,
                                            icon_url: message.channel.client.user.avatarURL
                                        },
                                        fields: [{
                                            name: "Pseudo",
                                            value: param
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
                                        },
                                        {
                                            name: "Villes (1)",
                                            value: villes[0]
                                        },
                                        {
                                            name: "Villes (2)",
                                            value: villes[1]
                                        },
                                        {
                                            name: "Villes (3)",
                                            value: villes[2]
                                        },
                                        {
                                            name: "Villes (4)",
                                            value: villes[3]
                                        },
                                        {
                                            name: "Villes (5)",
                                            value: villes[4]
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
            });
        }).end();
    }
}

module.exports = PlayerInfoCommand;