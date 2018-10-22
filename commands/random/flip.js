const Commando = require('discord.js-commando');

class FlipCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'flip',
            group : 'random',
            memberName : 'flip',
            description : 'Lance une pièce et renvoie le résultat.'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 2) + 1;
        if (roll==1){
            message.reply("Vous êtes tombé sur face.");
        } else {
            message.reply("Vous êtes tombé sur pile.");
        }
    }
}

module.exports = FlipCommand;