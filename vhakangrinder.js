const express = require('express');
const config = require("./config.json");
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`Wellcome ${client.user.username}, bot is ready.`);
});

    let vhakangrindervhakan = [];
client.on("message", async vhakancode => {
  if (vhakancode.channel.type === "dm") {

    if (vhakancode.author.id === client.user.id) {
    } else {
      if (vhakancode.author.bot) {
      } else {
        let vhakan = await data.get(vhakancode.author.id)
        
        if (vhakan === 1) {
        } else {
          
          if(vhakangrindervhakan.includes(vhakancode.author.id)) return;
          vhakangrindervhakan.push(vhakancode.author.id)
          vhakancode.channel.startTyping();
          await sleep(5500)
          
          await vhakancode.channel.send("")
          await vhakancode.channel.stopTyping();
          await sleep(7000)
          vhakancode.channel.startTyping();
          await vhakancode.channel.send("")
          await vhakancode.channel.stopTyping(); 
      }
      }
    }
  }
})

client.on("guildCreate", vhakangrinder => {

  });

client.on("ready", () => {
      setInterval(() => {
       let vhakangrinder = client.channels.cache.get(config.channelid)

       vhakangrinder.send("k trawl")
       vhakangrinder.send("k sell salmon all")
       vhakangrinder.send("k sell carp all")
       vhakangrinder.send("k sell trout all")
       vhakangrinder.send("k buy cool yacht all")
       vhakangrinder.send("k bal top")

      }, 155000); //Delay default is 155 seconds. It will wait 155 seconds and send the messages above.
})


client.login(config.token) 