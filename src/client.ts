import { Client, GatewayIntentBits } from 'discord.js';
import { registerEvents } from './utils';
import Events from './events';

import Keys from './keys';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ]
});

registerEvents(client, Events);

client.login(Keys.clientToken)
    .then(() => {
        console.log('🟢 [Login Success] - Logged in as ' + client.user?.tag)
    }
    )
    .catch((e) => {
        console.log('🔴 [Login Error] - Error: ' + e)
        process.exit(1);
    })