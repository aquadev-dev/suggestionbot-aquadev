const { ActivityType } = require('discord.js')

module.exports = (c, client, handler) => {
    console.log(`${c.user.username} is ready`);
    client.user.setActivity('Suggestions', {type: ActivityType.Watching});
};