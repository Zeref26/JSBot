const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class PlayerInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'player',
            group : 'grepolis',
            memberName : 'player',
            description : 'Renvoie les informations du joueur nommé.'
        });
    }

    async run(message, args) {
        var request = require('request');
        request('http://fr111.grepolis.com/data/players.txt').pipe(fs.createWriteStream('players.txt'));
    }
}

module.exports = PlayerInfoCommand;