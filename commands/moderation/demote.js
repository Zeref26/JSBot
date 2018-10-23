const Commando = require('discord.js-commando');

class DemoteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'demote',
            group : 'moderation',
            memberName : 'demote',
            description : 'Retrograde un membre du rôle.'
        });
    }

    async run(message, args) {
        message.delete();
        const arg = message.content.slice(1).trim().split(/ +/g);
        let member = message.author;
        let r;
        if (member.id == '295196682268835851') {
            let mem = message.mentions.members.first();
            const role = message.guild.roles.find('name', arg.slice(2).join(" "));
            mem.removeRole(role, "");
        } else {
            message.channel.send("Vous n'avez pas l'autorisation.");
        }

    }
}

module.exports = DemoteCommand;