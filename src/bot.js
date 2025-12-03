import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";

if (!process.env?.DISCORD_TOKEN) process.exit(1);

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (client) => {
    console.log(`Ready as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
