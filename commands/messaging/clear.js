const Commando = require('discord.js-commando');

class ClearCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'clear',
            group : 'messaging',
            memberName : 'clear',
            description : 'Efface un nombre de messages.'
        });
    }

    async run(message, args) {
        args = message.content.slice(1).trim().split(/ +/g);
        let x = args[1];
        for(let i=1; i<=x; i++){
            message.delete().catch(console.error);
        }
    }
}

module.exports = ClearCommand;