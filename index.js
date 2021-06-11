const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    
    bot.channels.cache.get('851575942795100208').send(`No errors, I have restarted!`)
    
    bot.user.setActivity("Update 1.5.4", {
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
            .setDescription(`Thanks for asking for help <@!${message.author.id}>!\n\n\`\`=love <@user>\`\` | To send an anonymous message to the pinged user.\n\`\`"gay"\`\` | Say the word "gay" in any of your sentances to see!\n\`\`=8ball <question>\`\` | Ask the 8ball a question!\n\`\`=dice\`\` | Check all of the dice types!\n\`\`=d<number>\`\` | To roll a dice, but make sure to use the ``=dice`` command to check the list of dice types!\n\`\`=coinflip\`\` | To flip a coin for heads or tails!`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

// UTILITY ------------------------------------


// ping command
bot.on('message', async message => {
	if (message.content === "=ping" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('')
		.setTitle('PONG!')
		.addField("⏳ Your ping is:", `${Math.round(bot.ws.ping)}ms`, false)
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//seek help command
bot.on('message', async message => {
    if (message.content === "=sh") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('🚨 Seek Help 🚨')
            .setDescription(`Thanks for seeking help <@!${message.author.id}>!\n\n**🗣️ Reach out**\nRemember, there are many people who you can turn to for support including friends, family, and others that you trust. Reaching out for support is brave. You've got this. <@!400460072649621524>’s DMs are also always 100% open. 📱\n\n**☎️ Contact a helpline**\nThese helplines offer regular phone, text, email and live chat services for young people across Canada that are confidential, anonymous, non-judgemental and supportive. You can also call 211 if you want to know about specific resources in your area.\n\nHere are some of the help lines that we recommend if you need help:\n\`\`=sh khp\`\` | Kids Help Phone \n\`\`=sh yl\`\` | YouthLine\n\`\`=sh tll\`\` | Trands Lifeline\n\`\`=sh byh\`\` | Black Youth Helpline\n\`\`=sh hfw\`\` | Home for Wellness\n\`\`=sh nh\`\` | Naseeha\n\`\`=sh g2t\`\` | Good2Talk`)
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
    if (message.content === "=sh hfw") {
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

// =8ball command
bot.on('message', async message => {
      if (message.content === "=8ball") return;
      if (message.channel.type == "dm") return;
      if (message.content.startsWith("=8ball")) {
        let outcomes = ['Signs point to yes.', 'Without a doubt.', 'My sources say no.', 'Yes, definitely.', 'Outlook not so good.', 'All signs point to yes.', 'Sure'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('')
            .setAuthor('The 8Ball Responds')
            .setDescription(`${(outcomes[outcomesIndex])}`)

        message.channel.send(exampleEmbed);
      	}
    });

//invalid =8ball command
bot.on('message', async message => {
    if (message.content === "=8ball") {
	if (message.channel.type == "dm") return;
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('')
            .setTitle('The 8Ball Responds')
            .setDescription('Please use the proper syntax: ``--8ball <Your Question>``')

        message.channel.send(exampleEmbed);
    }
})

//dice command
bot.on('message', async message => {
    if (message.content === "=dice") {
        if (message.channel.type == "dm") return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor()
            .setTitle('Dice Types')
            .setDescription('**Here is a list of all dice types:**\nD4\nD6\nD8\nD10\nD12\nD20')
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

//d4 command
bot.on('message', async message => {
      if (message.content.startsWith("=d4")) {
        let outcomes = ['1', '2', '3', '4'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor()
            .setAuthor('D4', 'https://www.google.com/logos/fnbx/polyhedral_dice/d4_hires.png')
            .setDescription(`<@${message.author.id}> rolled a D4 and a **${(outcomes[outcomesIndex])}** came out!`)
	    .setFooter('If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD')

        message.channel.send(exampleEmbed);
      	}
    });

//d6 command
bot.on('message', async message => {
      if (message.content.startsWith("=d6")) {
        let outcomes = ['1', '2', '3', '4', '5', '6'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor()
            .setAuthor('D6', 'https://www.google.com/logos/fnbx/polyhedral_dice/d6_hires.png')
            .setDescription(`<@${message.author.id}> rolled a D6 and a **${(outcomes[outcomesIndex])}** came out!`)
	    .setFooter('If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD')

        message.channel.send(exampleEmbed);
      	}
    });

//d8 command
bot.on('message', async message => {
      if (message.content.startsWith("=d8")) {
        let outcomes = ['1', '2', '3', '4', '5', '6', '7', '8'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor()
            .setAuthor('D8', 'https://www.google.com/logos/fnbx/polyhedral_dice/d8_hires.png')
            .setDescription(`<@${message.author.id}> rolled a D8 and a **${(outcomes[outcomesIndex])}** came out!`)
	    .setFooter('If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD')

        message.channel.send(exampleEmbed);
      	}
    });

//d10 command
bot.on('message', async message => {
      if (message.content.startsWith("=d10")) {
        let outcomes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor()
            .setAuthor('D10', 'https://www.google.com/logos/fnbx/polyhedral_dice/d10_hires.png')
            .setDescription(`<@${message.author.id}> rolled a D10 and a **${(outcomes[outcomesIndex])}** came out!`)
	    .setFooter('If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD')

        message.channel.send(exampleEmbed);
      	}
    });

//d12 command
bot.on('message', async message => {
      if (message.content.startsWith("=d12")) {
        let outcomes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor()
            .setAuthor('D12', 'https://www.google.com/logos/fnbx/polyhedral_dice/d12_hires.png')
            .setDescription(`<@${message.author.id}> rolled a D12 and a **${(outcomes[outcomesIndex])}** came out!`)
	    .setFooter('If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD')

        message.channel.send(exampleEmbed);
      	}
    });

//d20 command
bot.on('message', async message => {
      if (message.content.startsWith("=d20")) {
        let outcomes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor()
            .setAuthor('D20', 'https://www.google.com/logos/fnbx/polyhedral_dice/d20_hires.png')
            .setDescription(`<@${message.author.id}> rolled a D20 and a **${(outcomes[outcomesIndex])}** came out!`)
	    .setFooter('If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD')

        message.channel.send(exampleEmbed);
      	}
    });

//flip command
bot.on('message', async message => {
      if (message.content.startsWith("=flip")) {
        let outcomes = ['HEADS', 'TAILS'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor()
            .setAuthor('Coin Flip', '')
            .setDescription(`<@${message.author.id}> rolled heads or tails and **${(outcomes[outcomesIndex])}** came out!`)
	    .setFooter('If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD')

        message.channel.send(exampleEmbed);
      	}
    });

// THIS IS THE bot.login

bot.login(process.env.token);
