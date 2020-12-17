exports.run = (client, message, args) => {
    message.channel.send(`${message.author.toString()}, Brocket's current version is: 1.0`)
};

exports.help = {
    name: "clientv",
    description: "client version."
}