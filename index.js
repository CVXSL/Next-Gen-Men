const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    
    bot.channels.cache.get('851575942795100208').send(`I have restarted!`)
    
    bot.user.setActivity("Update 1.0.0", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)



// THIS IS THE bot.login

bot.login(process.env.token);
