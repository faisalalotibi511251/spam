﻿const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "510241151895470092"; // ايدي السررفر
var channel = "510241151895470096";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})


client.on('message', message => {
if(message.content.startsWith('bank1')) {
if(message.author.id !== "510252385663320065") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send();
}
});
 
client.login(process.env.BOT_TOKEN);
