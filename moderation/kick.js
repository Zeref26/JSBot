const Commando = require('discord.js-commando');

class KickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'kick',
            group : 'moderation',
            memberName : 'kick',
            description : 'Exclu un joueur.'
        });
    }

    async run(message, args) {
        args = message.content.slice(1).trim().split(/ +/g);
        let member = message.mentions.members.first();
        let reason = args.slice(2).join(" ");
        member.kick(reason);
        message.channel.send(member+" a été exclu pour la raison suivante : "+reason);
    }
}

module.exports = KickCommand;