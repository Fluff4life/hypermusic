to start the bot do npm install

if you would like to change your bot status go to events/ready.js and change the status from there if you want to have a streaming status copy this code below,

//do not disturb status client.user.setStatus('dnd')

//online status client.user.setStatus('online')

//idle status client.user.setStatus('idle');

//streaming status client.user.setActivity("your status", { type: "STREAMING", url: "https://www.twitch.tv/monstercat" });

if did not work please contact me on discord Nrzt#8601

