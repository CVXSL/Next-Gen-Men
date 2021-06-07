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

//love Command
bot.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const tdc = bot.guilds.cache.get('840284368425582663');
    if (command === "love") {
        if (message.author.bot) return;
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Only staff members can use this command.`);
        if (message.content.indexOf(prefix) !== 0) return;
        try {
            let userID = (args[0] || message.author.id).toString();

            userID = userID.replace(/[^0-9]/g, '');

            const member = tdc.members.cache.get(userID);
            const content = args.join(' ').replace(`<@!${userID}> `, '')

            if (!member) return message.channel.send('Unable to find that user');

            const embed = new Discord.MessageEmbed()
            embed.setColor('');
            embed.setTitle(`You have received an anonymous message!`);
            embed.setDescription(`You are loved!`);
//            embed.setFooter('You can DM this bot if you have any questions, comments or concerns. I will send your message to NGM staff.');

            member.send(embed);

            message.channel.send(`Sorry for the two pings <@${userID}>, check your DMs, someone has sent you an anonymous message!`)
        } catch (e) {
            message.channel.send(e.toString());
        }
    }
})

// THIS IS THE bot.login

bot.login(process.env.token);
