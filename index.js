const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "+";

Client.on('ready', ()=>{
    console.log("Bot is online, fellow.");

    Client.user.setPresence({ game: { name: 'Puppys Server Members', type: 3 } });

})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "test")){
        message.channel.send("crypo")
        

    }
    
    
})

Client.login(process.env.BOT_TOKEN)
