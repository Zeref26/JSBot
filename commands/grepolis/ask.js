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
        const nb1 = arg[1];
        const res1 = arg[2];
        const mem = message.guild.members.find('id',message.author.id).displayName;
        const ville = arg.slice(3).join(" ");
        const em1 = message.guild.emojis.find('name', res1);
        message.guild.channels.find('id', "504336619105681408").send("@everyone, "+mem+" a besoin de "+nb1+ " "+em1+" sur sa ville "+ville+".");
    }
}

module.exports = AskCommand;