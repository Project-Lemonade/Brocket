import client from './index.js';

const Discord = require('discord.js');

const fs = require('fs');
const Enmap = require('enmap');

const prefix = "!!";

client.commands = new Enmap();

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.run(client, message, args)

});

fs.readdir('./commands', async(err, files) => {
    if (err) return console.log;

    files.forEach(file => {
        if (!file.endsWith('.js')) return;

        let props = require(`./commands./${file}`);
        let cmdName = file.split('.')[0];

        console.log(`${cmdName} has been loaded with no errors.`);
        client.commands.set(cmdName, props);
    });
});