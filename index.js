const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
    bot.user.setActivity("Accel World");
    bot.user.setAvatar("img.png");
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
    let mess = message.content.toLowerCase();
    let member = message.guild.members.find('id',message.author.id);
    switch (mess) {
        case "burst link" :
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker")) {
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Zone neutre")) {
                message.delete();
            } else {
                bot.channels.get("527971056615686144").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg)=> {
                        let mes = "";
                        if (msg.content.includes("```\n"+member.displayName)) {
                            let m = ""+msg.content;
                            let l = m.length-4;
                            for (let i = 4; i<l; i++) {
                                if (m.charAt(i)==':') {
                                    for (let j = i+2; j<l-7; j++) {
                                        mes += m.charAt(j);
                                    }
                                }
                            }
                            if ((parseInt(mes)-1)>0) {
                                let new_m = "```\n"+member.displayName+" : "+(parseInt(mes)-1).toString()+" points\n```";
                                msg.edit(new_m);
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde accéléré"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('hexColor',"#725252").name);                
                            } else {
                                message.author.send("Vous n'avez pas assez de Points Bursts.\n\nVos Points : "+mes);
                                message.delete();
                            }
                        }
                    });
                });
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
                        message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name);
                    } else {
                        message.delete();
                    }
                } else {
                    message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                    message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde accéléré"));
                    message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name);
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
                    bot.channels.get("527971056615686144").fetchMessages({limit:99}).then(messages => {
                        messages.forEach((msg)=> {
                            let mes = "";
                            if (msg.content.includes("```\n"+member.displayName)) {
                                let m = ""+msg.content;
                                let l = m.length-4;
                                for (let i = 4; i<l; i++) {
                                    if (m.charAt(i)==':') {
                                        for (let j = i+2; j<l-7; j++) {
                                            mes += m.charAt(j);
                                        }
                                    }
                                }
                                if ((parseInt(mes)-10)>0) {
                                    let new_m = "```\n"+member.displayName+" : "+(parseInt(mes)-10).toString()+" points\n```";
                                    msg.edit(new_m);
                                    message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Zone neutre"));
                                    message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                    message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('hexColor',"#725252").name);
                                } else {
                                    message.author.send("Vous n'avez pas assez de Points Bursts.\n\nVos Points : "+mes);
                                    message.delete();
                                }
                            }
                        });
                    });
                }
            } else {
                message.delete();
            }
            break;
        case "help" :
            if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
                message.author.send("Les commandes n'ont pas de préfixe et doivent être utilisées dans les salons RP. \n\n **Burst Link** : Active le Brain Burst et emmène dans le monde accéléré. \n **Burst Out** : Permet de sortir du monde accéléré. \n **Unlimited Burst Link** : Envoie dans la zone neutre. On ne peut utiliser le Burst Out qu'au point de sortie. \n\n **-valide <@membre> <Couleur>** : Valide la fiche d'un membre et lui attribue les rôles de base ainsi que sa couleur. \n **-info** : affiche des infos du serveur \n **-nick <@membre> Prénom Nom** : Renomme le membre avec Prénom Nom");
            } else {
                message.author.send("Les commandes n'ont pas de préfixe et doivent être utilisées dans les salons RP. \n\n **Burst Link** : Active le Brain Burst et emmène dans le monde accéléré. \n **Burst Out** : Permet de sortir du monde accéléré. \n **Unlimited Burst Link** : Envoie dans la zone neutre. On ne peut utiliser le Burst Out qu'au point de sortie.")
            }
            break;
    }
    if(message.content.startsWith("-valide")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            member.addRole(message.guild.roles.find('name',"---------[HORS-RP]----------"));
            member.addRole(message.guild.roles.find('name',"--------------[IDENTITE]--------------"));
            member.addRole(message.guild.roles.find('name',"Burst Linker"));
            member.addRole(message.guild.roles.find('name',"Niveau 1"));
            member.addRole(message.guild.roles.find('name',"-------[COMPETENCES]-------"));
            member.addRole(message.guild.roles.find('name',"-----------[GAMER TAG /NOM]----------"));
            member.addRole(message.guild.roles.find('name',"------------------------------"));
            member.addRole(message.guild.roles.find('name',"Monde réel"));
            member.addRole(message.guild.roles.find('name',args[2]));
            message.guild.channels.find('name','général').send("Bienvenue à "+member+" dans le monde accéléré !");
            message.guild.channels.find('name','compteur-de-points').send("");
        }
    }
    if (message.content.startsWith("-pb")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            bot.channels.get("527971056615686144").fetchMessages({limit:99}).then(messages => {
                messages.forEach((msg)=> { 
                    let pts = "";
                    let mes = "";
                    if (msg.content.includes("```\n"+member.roles.find('color',6524045).name)) {
                        let m = ""+msg.content;
                        for (let i = 4; i<m.length-4; i++) {
                            mes += m.charAt(i);
                        }
                        message.channel.send(mes);
                    }
                });
            });
        }
    }
    if (message.content.startsWith("-padd")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            bot.channels.get("527971056615686144").fetchMessages({limit:99}).then(messages => {
                messages.forEach((msg)=> {
                    let mes = "";
                    if (msg.content.includes("```\n"+member.roles.find('color',6524045).name)) {
                        let m = ""+msg.content;
                        let l = m.length-4;
                        for (let i = 4; i<l; i++) {
                            if (m.charAt(i)==':') {
                                for (let j = i+2; j<l-7; j++) {
                                    mes += m.charAt(j);
                                }
                            }
                        }
                        let new_m = "```\n"+member.roles.find('color',6524045).name+" : "+(parseInt(mes)+parseInt(args[2])).toString()+" points\n```";
                        msg.edit(new_m);
                    }
                });
            });
        }
    }
    if (message.content.startsWith("-prem")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            bot.channels.get("527971056615686144").fetchMessages({limit:99}).then(messages => {
                messages.forEach((msg)=> {
                    let mes = "";
                    if (msg.content.includes("```\n"+member.roles.find('color',6524045).name)) {
                        let m = ""+msg.content;
                        let l = m.length-4;
                        for (let i = 4; i<l; i++) {
                            if (m.charAt(i)==':') {
                                for (let j = i+2; j<l-7; j++) {
                                    mes += m.charAt(j);
                                }
                            }
                        }
                        let new_m = "```\n"+member.roles.find('color',6524045).name+" : "+(parseInt(mes)-parseInt(args[2])).toString()+" points\n```";
                        msg.edit(new_m);
                    }
                });
            });
        }
    }
    if (message.content.startsWith("-point start")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            let member = message.mentions.members.first();
            message.guild.channels.find('id','527971056615686144').send("```\n"+member.displayName+" : 20 points\n```");
        }
    }
    if (message.content.startsWith("-info")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            var bl = 0;
            var sf = 0;
            var rouge = 0;
            var bleu = 0;
            var jaune = 0;
            var vert = 0;
            var violet = 0;
            var noir = 0;
            var blanc = 0;
            var metal = 0;
            var membres = message.guild.members.array();
            for (var i = 0; i<membres.length; i++) {
                if(membres[i].roles.exists('name',"Burst Linker")) {
                    bl += 1;
                    if (membres[i].roles.exists('name',"Rouge")) {
                        rouge += 1;
                    } else if (membres[i].roles.exists('name',"Bleu")) {
                        bleu += 1;
                    } else if (membres[i].roles.exists('name',"Jaune")) {
                        jaune += 1;
                    } else if (membres[i].roles.exists('name',"Vert")) {
                        vert += 1;
                    } else if (membres[i].roles.exists('name',"Violet")) {
                        violet += 1;
                    } else if (membres[i].roles.exists('name',"Noir")) {
                        noir += 1;
                    } else if (membres[i].roles.exists('name',"Blanc")) {
                        blanc += 1;
                    } else {
                        metal += 1;
                    }
                } else {
                    sf += 1;
                }
            }
            message.channel.send("Voici les informations du serveur : \n\n - Nombre de Burst Linker : "+bl+"\n - Nombre d'avatars rouges : "+rouge+"\n - Nombre d'avatars bleus : "+bleu+"\n - Nombre d'avatars jaunes : "+jaune+"\n - Nombre d'avatars verts : "+vert+"\n - Nombre d'avatars violets : "+violet+"\n - Nombre d'avatars noirs : "+noir+"\n - Nombre d'avatars blancs : "+blanc+"\n - Nombre d'avatars métalliques : "+metal+"\n\n En attente d'une fiche : "+(sf-3));
        }
    }
    if(message.content.startsWith("-nick")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            member.setNickname(args[2]+" "+args[3]);
        }
    }
    if(message.content.startsWith("-clear")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            message.channel.bulkDelete(args[1]);
        }
    }
});

bot.login(process.env.TOKEN);