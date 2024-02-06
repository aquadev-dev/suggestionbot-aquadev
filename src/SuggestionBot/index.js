require('dotenv/config');
const { Client, GatewayIntentBits, Guild, ActivityType } = require('discord.js');
const { CommandKit } = require('commandkit');
const mongoose = require('mongoose');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

new CommandKit({
    client,
    devGuildIds: ['879384420807737405'],
    devUserIds: ['422043862509551627'],
    eventsPath: `${__dirname}/events`,
    commandsPath: `${__dirname}/commands`,
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    client.login(process.env.TOKEN)
})





