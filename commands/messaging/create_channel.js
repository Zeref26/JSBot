const Commando = require('discord.js-commando');

class CreateChannelCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'tchannel',
            group : 'messaging',
            memberName : 'tchannel',
            description : 'Créer un nouveau salon textuel.'
        });
    }

    async run(message, args) {
        args = message.content.slice(1).trim().split(/ +/g);
        let nom = args.slice(1).join(' ');
        message.guild.createChannel(nom, 'text');
        
    }
}

module.exports = CreateChannelCommand;