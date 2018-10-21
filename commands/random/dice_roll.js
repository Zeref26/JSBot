class DiceRollCommand {
    async run(message, args){
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Vous êtes tombé sur un" + roll);
    }
}

module.exports = DiceRollCommand;