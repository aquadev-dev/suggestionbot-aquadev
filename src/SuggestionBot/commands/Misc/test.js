module.exports = {
    data: {
        name: 'test',
        description: 'Tests the ping of the bot.',
    },

    run: ({ interaction, client, handler}) => {
        interaction.reply(`${client.ws.ping}ms`);
    },

    options: {
        devOnly: true,
        userPermissions: ['Administrator', `AddReactions`],
        botPermissions: ['Administrator', 'AddReactions'],
        deleted: false,
    },
};