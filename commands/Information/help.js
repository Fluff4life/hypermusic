
const { Command } = require(`reconlx`);
const ee = require(`../../settings/embed.json`);
const config = require(`../../settings/config.json`);
const { MessageEmbed } = require(`discord.js`);
const emoji = require(`../../settings/emoji.json`);


module.exports = new Command({
  // options
  name: `help`,
  description: `get all commands info of bot`,
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
          .setDescription(`d.v.Name :<@!766700505421709330> `)
          //.setImage(`https://cdn.discordapp.com/attachments/959874301660647505/972672310530150470/giphy.png`)
          //off  .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .addFields([
            {
              name: `about info`,
              value: ` 
            **bot Commands [4]**
            𝗶𝗻𝗳𝗼. 𝗵𝗲𝗹𝗽. 𝗶𝗻𝘃𝗶𝘁𝗲. 𝗽𝗶𝗻𝗴

            **Music [24]**
  
            𝗮𝘂𝘁𝗼𝗽𝗹𝗮𝘆,𝗰𝗹𝗲𝗮𝗿𝗾𝘂𝗲𝘂𝗲,𝗴𝗿𝗮𝗯,𝗷𝘂𝗺𝗽,𝗹𝗼𝗼𝗽,𝗺𝗼𝘃𝗲,𝗻𝗼𝘄𝗽𝗹𝗮𝘆𝗶𝗻𝗴,𝗽𝗮𝘂𝘀𝗲,𝗽𝗹𝗮𝘆,𝗽𝗹𝗮𝘆𝗹𝗶𝘀𝘁,𝗽𝗹𝗮𝘆𝗽𝗿𝗲𝘃𝗶𝗼𝘂𝘀,𝗽𝗹𝗮𝘆𝘀𝗸𝗶𝗽,𝗽𝗹𝗮𝘆𝘁𝗼𝗽,𝗾𝘂𝗲𝘂𝗲, 
            𝗿𝗲𝗺𝗼𝘃𝗲,𝗿𝗲𝗺𝗼𝘃𝗲𝗱𝘂𝗽𝗲𝘀,𝗿𝗲𝗽𝗹𝗮𝘆,𝗿𝗲𝘀𝘂𝗺𝗲,𝘀𝗲𝗮𝗿𝗰𝗵,𝘀𝗲𝗲𝗸,𝘀𝗸𝗶𝗽,𝘀𝘁𝗼𝗽,
            𝘃𝗼𝗹𝘂𝗺𝗲, config, dj

            **filter [25]**
            𝟴𝗱,𝗯𝗮𝘀𝘀𝗯𝗼𝗼𝘀𝘁,𝗰𝗹𝗲𝗮𝗿,𝗲𝗮𝗿𝗿𝗮𝗽𝗲,𝗳𝗹𝗮𝗻𝗴𝗲𝗿,𝗴𝗮𝘁𝗲, 𝗵𝗮𝗮𝘀,𝗵𝗲𝗮𝘃𝘆𝗯𝗮𝘀𝘀,𝗸𝗮𝗿𝗮𝗼𝗸𝗲,𝗹𝗶𝗴𝗵𝘁𝗯𝗮𝘀𝘀,𝗺𝗰𝗼𝗺𝗽𝗮𝗱,𝗻𝗶𝗴𝗵𝘁𝗰𝗼𝗿𝗲,𝗽𝗵𝗮𝘀𝗲𝗿,𝗽𝘂𝗹𝘀𝗮𝘁𝗼𝗿,𝗽𝘂𝗿𝗲𝗯𝗮𝘀𝘀, 
            𝗿𝗲𝘃𝗲𝗿𝘀𝗲,𝘀𝘂𝗯𝗯𝗼𝗼𝘀𝘁,𝘀𝘂𝗿𝗿𝗼𝘂𝗻𝗱,𝘁𝗿𝗲𝗯𝗹𝗲,𝘁𝗿𝗲𝗺𝗼𝗹𝗼,𝘃𝗮𝗽𝗼𝗿𝘄𝗮𝗿𝗲,𝘃𝗶𝗯𝗿𝗮𝘁𝗼,𝗰𝘂𝘀𝘁𝗼𝗺𝗯𝗮𝘀𝘀𝗯𝗼𝗼𝘀𝘁, 𝗰𝘂𝘀𝘁𝗼𝗺𝘀𝗽𝗲𝗲𝗱
            Discord : [discord.gg/e6rVzcjaTs](discord.gg/e6rVzcjaTs)`,
            inline: false,
            },
           {
              name: `invite me `,
              value: ` \`\`\`/invite \`\`\``,
                inline: true,
            },
            {
              name: `Developers`,
              value: ` \`\`\`xml\n<D Nrzt#8601>\`\`\` `,
              inline: true,
            }, 
          ])
          .setFooter({ text: `hypermusic.ga`, iconURL: ee.footericon }),                   //ee.footertext
      ],
    });
  },
});