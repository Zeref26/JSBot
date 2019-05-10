const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class ClearCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'clear',
            group : 'messaging',
            memberName : 'clear',
            description : 'Supprime un nombre (paramètre n°1) de message.'
        });
    }

    async run(message, args) {
        message.delete();
        const arg = message.content.slice(1).trim().split(/ +/g);
        message.channel.bulkDelete(arg.slice(1).join(" "));
    }
}

module.exports = ClearCommand;