const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    
    bot.channels.cache.get('851575942795100208').send(`No errors, I have restarted!`)
    
    bot.user.setActivity("Update 1.4.0", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)

//help command
bot.on('message', async message => {
    if (message.content === "=help") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Help')
            .setDescription(`Thanks for asking for help <@!${message.author.id}>!\n\n**🛠️ Moderation**\n\`\`=help mod\`\`\n\n**⚙️ Utility**\n\`\`=help util\`\`\n\n**🎲 Fun**\n\`\`=help fun\`\``)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//help mod command
bot.on('message', async message => {
    if (message.content === "=help mod") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('🛠️ Help Moderation 🛠️')
            .setDescription(`Thanks for asking for help <@!${message.author.id}>!\n\nComing Soon!`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//help util command
bot.on('message', async message => {
    if (message.content === "=help util") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('⚙️ Help Utility ⚙️')
            .setDescription(`Thanks for asking for help <@!${message.author.id}>!\n\n\`\`=ping\`\` | To check the ping of the bot.`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//help fun command
bot.on('message', async message => {
    if (message.content === "=help fun") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('🎲 Help Fun 🎲')
            .setDescription(`Thanks for asking for help <@!${message.author.id}>!\n\n\`\`=love <@user>\`\` | To send an anonymous message to the pinged user.\n\`\`"gay"\`\` | Say the word "gay" in any of your sentances to see!`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

// UTILITY ------------------------------------


// ping command
bot.on('message', message => {

    if (message.content === `${prefix}` + `ping`) {

        message.channel.send('Pinging...').then(message => {

            message.edit('Pong!\nPonged back the ping in milliseconds!');
        })
    }
});

//seek help command
bot.on('message', async message => {
    if (message.content === "=sh") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('🚨 Seek Help 🚨')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\n**🗣️ Reach out**\nRemember, there are many people who you can turn to for support including friends, family, and others that you trust. Reaching out for support is brave. You've got this. <@!400460072649621524>’s DMs are also always 100% open. 📱\n\n**☎️ Contact a helpline**\nThese helplines offer regular phone, text, email and live chat services for young people across Canada that are confidential, anonymous, non-judgemental and supportive. You can also call 211 if you want to know about specific resources in your area.\n\nHere are some of the help lines that we recommend if you need help:\n\`\`=sh khl\`\` | Kids Help Line\n\`\`=sh yl\`\` | YouthLine\n\`\`=sh tll\`\` | Trands Lifeline\n\`\`=sh byh\`\` | Black Youth Helpline\n\`\`=sh hfw\`\` | Home for Wellness\n\`\`=sh nh\`\` | Naseeha\n\`\`=sh g2t\`\` | Good2Talk`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//seek help (Kids Help Phone) command
bot.on('message', async message => {
    if (message.content === "=sh khp") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Kids Help Phone')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\nKids Help Phone\n> Available 24/7\n> https://kidshelpphone.ca/`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//seek help (YouthLine) command
bot.on('message', async message => {
    if (message.content === "=sh yl") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('YouthLine')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\nYouthLine\n> Non-crisis support for LGBTQ+ youth\n> https://www.youthline.ca/`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//seek help (Trans Lifeline) command
bot.on('message', async message => {
    if (message.content === "=sh tll") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Trans Lifeline')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\nTrans Lifeline\n> Crisis response line for trans people\n> https://www.translifeline.org/`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//seek help (Black Youth Helpline) command
bot.on('message', async message => {
    if (message.content === "=sh byh") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Black Youth Helpline')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\nBlack Youth Helpline\n> Phone helpline for Black youth\n> https://blackyouth.ca/`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//seek help (Hope for Wellness) command
bot.on('message', async message => {
    if (message.content === "=sh hfq") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Hope for Wellness')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\nHope for Wellness\n> Counselling for Indigenous youth\n> https://www.hopeforwellness.ca/`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//seek help (Naseeha) command
bot.on('message', async message => {
    if (message.content === "=sh nh") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Naseeha')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\nNaseeha\n> Confidential support for young Muslims\n> https://naseeha.org/`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//seek help (Good2Talk) command
bot.on('message', async message => {
    if (message.content === "=sh g2t") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Good2Talk')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\nGood2Talk\n> Support for post-secondary students\n> https://good2talk.ca/`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

// FUN ------------------------------------

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
        message.delete().catch(O_o => { });
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
