const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By WESO");


client.on("ready", () => {
let channel =     client.channels.get("575245638766297088")
setInterval(function() {
channel.send(`جري التهكير By WESO :frog: :dancer::skin-tone-3: جري التهكير By WESO :frog: :dancer::skin-tone-3: جري التهكير By WESO :frog: :dancer::skin-tone-3: جري التهكير By WESO :frog: :dancer::skin-tone-3: جري التهكير By WESO :frog: :dancer::skin-tone-3: جري التهكير By WESO :frog: :dancer::skin-tone-3: جري التهكير By WESO :frog: :dancer::skin-tone-3: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
