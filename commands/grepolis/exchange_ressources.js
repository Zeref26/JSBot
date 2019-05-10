const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class ExchangeRessourceCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'exchange',
            group : 'grepolis',
            memberName : 'exchange',
            description : 'Envoie une demande d\'échange de ressources.'
        });
    }

    async run(message, args) {
        message.delete();
        const arg = message.content.slice(1).trim().split(/ +/g);
        const nb1 = arg[1];
        const res1 = arg[2];
        const nb2 = arg[3];
        const res2 = arg[4];
        const mem = message.guild.members.find('id',message.author.id).displayName;
        const ville = arg.slice(5).join(" ");
        const em1 = message.guild.emojis.find('name', res1);
        const em2 = message.guild.emojis.find('name', res2);
        message.guild.channels.find('id', "576534825918267413").send("@everyone, "+mem+" souhaite passer "+nb1+ " "+em1+" contre "+nb2+" "+em2+" sur sa ville "+ville+".");
    }
}

module.exports = ExchangeRessourceCommand;
