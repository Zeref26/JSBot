const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class AskCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'ask',
            group : 'grepolis',
            memberName : 'ask',
            description : 'Envoie une demande de ressources.'
        });
    }

    async run(message, args) {
        message.delete();
        const arg = message.content.slice(1).trim().split(/ +/g);
        let monde;
        switch (arg[1].toLowerCase()) {
            case "achille" : monde = 32; break;
            case "bellérophon"||"bellerophon" : monde = 37; break;
            case "hyperborea" : monde = 39; break;
            case "dion" : monde = 104; break;
            case "épidamne"||"epidamne" : monde = 105; break;
            case "gortyne" : monde = 106; break;
            case "héliopolis"||"heliopolis" : monde = 107; break;
            case "istros" : monde = 108; break;
            case "kastoria" : monde = 109; break;
            case "lentini" : monde = 110; break;
            case "modon" : monde = 111; break;
            case "naucratis" : monde = 112; break;
            case "oreos"||"oréos" : monde = 113; break;
            case "pharès"||"phares" : monde = 114; break;
            case "sidé"||"side" : monde = 115; break;
            case "téos"||"teos" : monde = 116; break;
            case "amphipolis" : monde = 117; break;
        }
        const nb1 = arg[2];
        const res1 = arg[3];
        const mem = message.guild.members.find('id',message.author.id).displayName;
        const ville = arg.slice(3).join(" ");
        const em1 = message.guild.emojis.find('name', res1);
        message.guild.channels.find('id', "576534803407568900").send("@everyone, "+mem+" a besoin de "+nb1+ " "+em1+" sur sa ville "+ville+" dans le monde "+monde+".");
    }
}

module.exports = AskCommand;
