import fsPromises from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Quando o bot estiver pronto
client.once('clientReady', () => {
  console.log(`Bot online! 🟢`);
});

// Responde a mensagens com comandos simples
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('Pong! 🏓');
  };
  if (message.content === '!meow') {
    message.reply('meow!!!')
  };
});

// Faz login usando o token
client.login(process.env.TOKEN);