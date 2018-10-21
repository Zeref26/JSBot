exports.run = (client, message, reason) => {
    const kickMember = message.mentions.members.first();
    kickMember.kick(reason.join(" "));
};