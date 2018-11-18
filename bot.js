const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});


client.on('ready', async() => {
var server = "505380026104152094"; // ايدي السررفر
var channel = "505380026104152096";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('X_PRO , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO , X_PRO  , X_PRO  , X_PRO  , X_PRO  , X_PRO  , ')
    },305);
})

client.login(process.env.BOT_TOKEN);
