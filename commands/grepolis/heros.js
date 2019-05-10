const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class HerosCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'heros',
            group : 'grepolis',
            memberName : 'heros',
            description : 'Affiche la liste des héros ou affiche les effets d\'un héros.'
        });
    }

    async run(message, args) {
        message.delete();
        const arg = message.content.slice(1).trim().split(/ +/g);
        let option = arg[1];
        if (option=="liste") {
            message.channel.send({embed:{
                color: 0x00A0A0,
                author: {
                    name: "Héros",
                    icon_url: message.channel.client.user.avatarURL
                },
                fields: [{
                    name: "Liste des héros",
                    value: "Agamemnon \n Ajax \n Alexandrios \n Andromède \n Apheledes \n Aristote \n Atalante \n Chiron \n Christopholus \n Dédale \n Déimos \n Démocrite \n Eurybie \n Ferkyon \n Hector \n Hélène \n Héraclès \n Jason \n Léonidas \n Médée \n Orphée \n Pariphaistes \n Pélops \n Persée \n Rekonos \nTélémaque \n Terylea \n Thémistocle \n Ulysse \n Urephon \n Ylestres \n Zuretha"
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: message.channel.client.user.avatarURL,
                    text: "© JS Bot"
                }
            }});
        } else {
            if (option=="Agamemnon") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de Agamemnon",
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les valeurs offensives et défensives des hoplites et des archers augmentent de 11% lorsqu'ils combattent avec Agamemnon."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Ajax") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les statistiques offensives et défensives des hoplites augmentent de 16,5% lorsqu'ils combattent aux cotés d'Ajax."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Alexandrios") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les statistiques offensives et défensives des archers augmentent de 16% lorsqu'ils combattent aux cotés d'Alexandrios."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Andromède") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsqu'Andromède est attribuée à la ville, sa production de base de bois, de pierre et d'argent est augmenté de 16,5 %."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Apheledes") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Quand le satyre Apheledes est attribué à une ville, les recherches dans cette ville coûteront 22% de ressources en moins et seront 22% plus rapides."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Aristote") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsqu'Aristote est attribué à une ville, il réduit le coût et le temps de construction des bateaux feu de 20%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Atalante") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Une armée menée par Atalante avance 11% plus vite. Cela s'applique à n'importe quelle unité de l'armée. Au niveau 20, le bonus augmente jusqu'à 30%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Chiron") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Chiron est attribué à la ville, il réduit le coût et le temps de recrutement des hoplites de 22%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Christopholus") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Christopholus est attribué à une ville, la durée de construction des bâtiments dans cette ville est réduite de 11%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Dédale") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Dédale est attribué à une ville, il réduira les coûts et la durée de construction des birèmes de 11%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Déimos") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Toutes les unités ont leurs statistiques offensives augmentées de 5.5% lorsqu'ils combattent avec Déimos."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Démocrite") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Démocrite est attribué à une ville, la durée des effets positifs a 22% de chance d'être multipliée par deux."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Eurybie") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsqu'Eurybie est attribuée à une ville, la durée et le coût de construction des trirèmes sont réduits de 11%"
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Ferkyon") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Ferkyon est attribué à la ville, le recrutement des unités terrestres est 11% plus rapide. "
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Hector") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les statistiques offensives et défensives des combattants à l'épée et des frondeurs augmentent de 11% lorsqu'ils combattent aux côtés d'Hector."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Hélène") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Hélène accompagne une armée pour provoquer une révolte ou un siège, le délai avant la révolte/la fin du siège sera réduit de 5.5%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Héraclès") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "A chaque fois qu'Héraclès gagne un combat honorable, vous recevrez instantanément 22 faveur pour la divinité vénérée dans votre ville."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Jason") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Une armée menée par Jason peut porter 22% de butin en plus."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Léonidas") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Léonidas défend une ville, tous les défenseurs voient leurs caractéristiques de combat augmentées de 5,5%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Médée") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les statistiques offensives et défensives des frondeurs augmentent de 16% lorsqu'ils combattent aux côtés de Médée."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Orphée") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsqu'Orphée est attribué à une ville, tous les points de culture générés dans cette ville ont 33% de chance d'être multipliés par deux."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Pariphaistes") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Pariphaistes est attribué à la ville, le recrutement des unités navales est 11% plus rapide."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Pélops") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les statistiques offensives et défensives des hoplites et des chars augmentent de 11% lorsqu'ils combattent aux côtés de Pélops."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Persée") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Persée combat toutes les unités mythiques, leurs valeurs d'attaque de de défense sont diminuées de 6%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Rekonos") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Rekonos est attribuée à une ville, sa production de base de pierre est augmentée de 44%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Télémaque") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les statistiques offensives et défensives des combattants à l'épée augmentent de 16% lorsqu'ils combattent aux côtés de Télémaque."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Terylea") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Terylea est attribuée à une ville, sa production de base d'argent est augmentée de 44%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Thémistocle") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les statistiques offensives et défensives des envoyés divins et des cavaliers augmentent de 11% lorsqu'ils combattent aux côtés de Thémistocle."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Ulysse") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Ulysse est attribué à la ville, il réduit le coût et le temps de recrutement des combattants à l'épée de 22%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Urephon") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les unités mythiques voient leurs statistiques offensives et défensives augmentés de 5,5% lorsqu'ils combattent avec Urephon."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Ylestres") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Sagesse"
                    },
                    {
                        name: "Effet",
                        value: "Lorsque Ylestres est attribuée à une ville, sa production de base de bois est augmentée de 44%. Au niveau 20, la production de base est augmentée de 120%."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            } else if (option=="Zuretha") {
                message.channel.send({embed:{
                    color: 0x00A0A0,
                    author: {
                        name: "Information de "+option,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "Type",
                        value: "Guerre"
                    },
                    {
                        name: "Effet",
                        value: "Les statisques offensives et défensives des navires augmentent de 5.5% lorsqu'ils combattent avec Zuretha."
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            }
        }
    }
}

module.exports = HerosCommand;