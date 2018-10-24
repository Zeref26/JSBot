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
        var fs = require('fs');
        const arg = message.content.slice(1).trim().split(/ +/g);
        fs.readFile('players.txt', 'utf8', (err, data) => {
            if (err) throw err;
            var mot = "";
            var donnees = [];
            for(var i = 0; i<data.length; i++) {
                if (data.charAt(i)!=','&&data.charAt(i)!='\n') {
                    mot = mot.concat(data.charAt(i));
                } else {
                    donnees.push(mot);
                    mot = "";
                }
            }
            var i;
            for(i = 0; i<donnees.length&&arg[1]!=donnees[i]; i++) {
            }
            message.channel.send("Points de "+arg[1]+" : "+donnees[i+2]);
        });
    }
}

module.exports = PlayerInfoCommand;