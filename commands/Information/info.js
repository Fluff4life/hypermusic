const { Command } = require(`reconlx`);
const ee = require(`../../settings/embed.json`);
const config = require(`../../settings/config.json`);
const { MessageEmbed, version } = require(`discord.js`);
const emoji = require(`../../settings/emoji.json`);
const { duration } = require(`../../handlers/functions`);

module.exports = new Command({
  // options
  name: `info`,
  description: `get info of bot`,
  userPermissions: [`SEND_MESSAGES`],
  botPermissions: [`SEND_MESSAGES`],
  category: `Information`,
  cooldown: 10,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    interaction.followUp({
      embeds: [
        new MessageEmbed()
          .setColor(ee.color)
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL({ dynamic: true }),
          })
          .setDescription(
            ` ** Name: Hyper.gg Music bot** `
          )
          //off  .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .addFields([
            {
              name: `🎛️ Servers`,
              value: ` \`\`\`ini\n[ ${client.guilds.cache.size} Servers ]\`\`\` `,
              inline: true,
            }, 
            {
              name: `🔗 Node.js Version`,
              value: ` \`\`\`fix\n[ ${process.version} ] \`\`\` `,
              inline: true,
            },
            {
              name: `🔗 Discord.js Version`,
              value: ` \`\`\`${version}\`\`\` `,
              inline: true,
            },
            {
              name: `${emoji.setup} Bot Commands`,
              value: ` \`\`\`Commands ${client.commands.size} , SubCommands ${client.subcmd.size}\`\`\``,
              inline: true,
            },
            {
              name: `🏓 Ping`,
              value: ` \`\`\`yml\n[ ${client.ws.ping}ms ] \`\`\` `,
              inline: true,
            },
            {
              name: `${emoji.time} Bot Uptime`,
              value: ` \`\`\`css\n[ ${duration(client.uptime)
                .map((i) => `${i}`)
                .join(` , `)} ]\`\`\``,
                inline: true,
            },
            {
              name: `Developers`,
              value: ` \`\`\`xml\n<D Nrzt#8601>\`\`\` `,
              inline: true,
            }, 
          ])
          .setFooter({ text: ee.footertext, iconURL: ee.footericon }),
      ],
    });
  },
});
 