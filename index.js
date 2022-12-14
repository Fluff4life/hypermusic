const Discord = require('discord.js')

const { Client, Collection, Intents } = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  ws : {
    properties: {
      $browser: "Discord iOS",
    },
  },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    // Intents.FLAGS.GUILD_BANS,
    // Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    // Intents.FLAGS.GUILD_INTEGRATIONS,
    // Intents.FLAGS.GUILD_WEBHOOKS,
    // Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    // Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    // Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    // Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    // Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    // Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
});
module.exports = client;

const config = require("./settings/config.json");

// Global Variables
client.events = new Collection();
client.cooldowns = new Collection();
client.subcmd = new Collection();
client.commands = new Collection();
client.temp = new Map();
client.temp2 = new Map();
client.categories = fs.readdirSync("./commands/");

// Initializing the project
//Loading files, with the client variable like Command Handler, Event Handler, ...
["event_handler", "slash_handler", "Player_Handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

// // database connection
const Enmap = require("enmap");
client.settings = new Enmap({
  name: "settings",
  dataDir: "./Database/Settings",
});
client.music = new Enmap({
  name: "music",
  dataDir: "./Database/Music",
});

client.login(process.env.token || config.token);

process.on("unhandledRejection", (reason, p) => {
  console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  //console.log(" [Error_Handling] :: Multiple Resolves");
  //console.log(type, promise, reason);
});
