const Commando = require('discord.js-commando');

class DiceRollCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'dice',
            group : 'random',
            memberName : 'dice',
            description : 'Lance un dé et renvoie le nombre.'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Vous êtes tombé sur un" + roll);
    }
}

module.exports = DiceRollCommand;