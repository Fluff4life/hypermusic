const client = require("..");
const player = require("../handlers/player");
const { databasing } = require("../handlers/functions");

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setStatus('online');
   client.user.setActivity({
    name: `/help - 3.8 GG`,
    type: "COMPETING",
  });


  // player
  await client.guilds.fetch();

  await client.guilds.cache.forEach(async (guild) => {
    await databasing(guild.id);
    client.updatemusic(guild);
  });
});

