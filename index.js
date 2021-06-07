const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    
    bot.channels.cache.get('851575942795100208').send(`I have restarted!`)
    
    bot.user.setActivity("Update 1.1.1", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)

// "gay" response
bot.on("message", async (message) => {
    let gay = ['gay'];
    let foundInText = false;
    for (var i in gay) {
      if (message.content.toLowerCase().includes(gay[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
            
        message.channel.send('yay pride 🏳️‍🌈')
        
    }
});

// THIS IS THE bot.login

bot.login(process.env.token);
