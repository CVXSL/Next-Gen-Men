const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

const update = "2.0.12'

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} c:`);
	
    bot.channels.cache.get('851575942795100208').send(`No errors, I have restarted!`)
	
    bot.user.setActivity(`Update ${update}`, {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

//    bot.user.setPresence({
//        status: 'idle'
//    })

    //Remember Chat History
    const tdc = bot.guilds.cache.get('720659736990842880');
    tdc.channels.cache.filter(channel => channel.type != "voice" && channel.type != "category").forEach(channel => {
        channel.messages.fetch();

    })
});

//help command 
bot.on('message', async message => {
    if (message.content === "=help") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Help')
            .setDescription(`Thanks for asking for help <@!${message.author.id}>!\n\n**🛠️ Moderation**\n\`\`=help mod\`\`\n\n**⚙️ Utility**\n\`\`=help util\`\`\n\n**🎲 Fun**\n\`\`=help fun\`\``)
            .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
            .setDescription(`Thanks for asking for help <@!${message.author.id}>!\n\n\`\`=love <@user>\`\` | To send an anonymous message to the pinged user.\n\`\`"gay"\`\` | Say the word "gay" in any of your sentances to see!\n\`\`=8ball <question>\`\` | Ask the 8ball a question!\n\`\`=dice\`\` | Check all of the dice types!\n\`\`=d<number>\`\` | To roll a dice, but make sure to use the \`\`=dice\`\` command to check the list of dice types!\n\`\`=flip\`\` | To flip a coin for heads or tails!`)
	    .setFooter(`Update: ${update}`)
            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
})

// MODERATION ------------------------------------

//Invite Tracker
bot.on('inviteCreate', async invite => {
	const inviteEmbed = new Discord.MessageEmbed()
	        inviteEmbed.setColor('')
		inviteEmbed.setTitle(`${invite.inviter.tag} has created an invite link!`)
		inviteEmbed.setDescription(`${invite.url}`)
		inviteEmbed.setFooter(`Update: ${update} - User ID: ${invite.inviter.id}`)
	const invPost = await bot.channels.cache.get('879814840863035432').send(inviteEmbed)
	await invPost.react('🚫');
})

//DM Command
bot.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const tdc = bot.guilds.cache.get('720659736990842880');
    if (command === "dm") {
        if (message.author.bot) return;
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Only staff members can use this command.`);
        if (message.content.indexOf(prefix) !== 0) return;
        try {
            let userID = (args[0] || message.author.id).toString();

            userID = userID.replace(/[^0-9]/g, '');

            const member = tdc.members.cache.get(userID);
            const content = args.join(' ').replace(`<@!${userID}>`, '')

            if (!member) return message.channel.send('Unable to find that user');

            const embed = new Discord.MessageEmbed()
            embed.setColor('');
            embed.setTitle(`${message.author.username} has sent you a message!`);
            const attachment = message.attachments.first();
            if (attachment) embed.setImage(attachment.url);
            embed.setDescription(`<@${message.author.id}> \n ${content}`);
            embed.setThumbnail(message.author.avatarURL());
            embed.setFooter(`Update: ${update} - User ID: ` + message.author.id);

            member.send(embed);

            message.channel.send(`Your message has been sent to <@${userID}>.`)
        } catch (e) {
            message.channel.send(e.toString());
        }
    }
})

//Message Us Post	
bot.on('message', async message => {
    if (message.content === "=message-us") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('How to use this channel!')
            .setDescription('Simply post any message or image (or both) in this channel and I will delete it, then I will forward your message to a channel that only the staff members can see~')

        message.channel.send(exampleEmbed);
    }

//Message Inbox
    if (message.author.id === '851567176548352041') return
    if (message.channel.id == '853059839965396992' || !message.guild) {
        const embed = new Discord.MessageEmbed()
        const guild = bot.guilds.cache.get('763565098978770954');

        embed.setColor('');
        embed.setTitle(`${message.author.tag} sent us a message!`);

        const attachment = message.attachments.first();
        if (attachment) embed.setImage(attachment.url);

        embed.setDescription(`<@${message.author.id}> \n ${message.content}`);
        embed.setThumbnail(message.author.avatarURL());
        embed.setFooter(`Update: ${update} User ID: ` + message.author.id);

        const msg = await bot.channels.cache.get('853059647896420392').send(embed)
        msg.react('❌');
        if (message.guild) message.delete();
    }
})

//Message Inbox Reactions
bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.channel.id === '853059647896420392') {
        const tdc = bot.guilds.cache.get('720659736990842880')
        if (user.id === bot.user.id) return
        if (reaction.message.author.id === bot.user.id) {
            if (reaction._emoji.name === '❌') {
                await reaction.message.reactions.removeAll()
                await reaction.message.react('✅')
            }
            if (reaction._emoji.name === '✅') {
                await reaction.message.reactions.removeAll()
                await reaction.message.react('❌')
            }
            if (reaction._emoji.name === '🚫') {
                const description = reaction.message.embeds[0].description
                const invites = await tdc.fetchInvites();
                const invite = invites.find(invite => invite.url === description);
                if (invite) {
		    await reaction.message.reactions.removeAll()
                    await invite.delete();
                    await reaction.message.channel.send(`The invite link \`\`(${invite.url})\`\` has been disabled.`)
                } else {
                    return
                }
            }
        }
    }
});

//link logs Reactions
bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.channel.id === '879814840863035432') {
        const tdc = bot.guilds.cache.get('720659736990842880')
        if (user.id === bot.user.id) return
        if (reaction.message.author.id === bot.user.id) {
            if (reaction._emoji.name === '❌') {
                await reaction.message.reactions.removeAll()
                await reaction.message.react('✅')
            }
            if (reaction._emoji.name === '✅') {
                await reaction.message.reactions.removeAll()
                await reaction.message.react('❌')
            }
            if (reaction._emoji.name === '🚫') {
                const description = reaction.message.embeds[0].description
                const invites = await tdc.fetchInvites();
                const invite = invites.find(invite => invite.url === description);
                if (invite) {
		    await reaction.message.reactions.removeAll()
                    await invite.delete();
                    await reaction.message.channel.send(`The invite link \`\`(${invite.url})\`\` has been disabled.`)
                } else {
                    return
                }
            }
        }
    }
});

//Member Joined
bot.on('guildMemberAdd', async member => {
    if (!member.guild.id === '720659736990842880') return;
    if (member.user.bot) return member.roles.add('797211417031213116');
	//Normal Mode Part 1
    member.send(`**🚀 Welcome to the club, <@${member.id}>!**\nThere are a few steps before you can get added to the rest of the server. Tag \`\`@Facilitators\`\` if you have any questions or would like to find out more about the community.\n> 1. Start by filling out the application form: http://nextgenmen.ca/club/apply\n> 2. After we’ve received it, one of the facilitators will ping you to verify your identity on the voice channel\n> 3. Once you’ve been verified, you’ll get added to the rest of the server`);
    member.roles.add('789252052516864081')
    member.roles.add('811345066681172038')
   
	//Raid Mode
    //await member.send(`Hello. I am Next Gen Men (the bot), and I have been placed into Raid Mode. I am automatically banning anyone who joins the server at this time. If you were banned by mistake, use this form: https://forms.gle/e77hCy5FTGrv5Qsg6.`)
    //await member.ban()
    //const ibannedsomeone = await bot.channels.cache.get('830081903960391720').send(`I have banned user with the ID: ${member.id}`)

    const embed = new Discord.MessageEmbed()
    const target = member.user
    embed.setColor('');
    embed.setDescription(`\n**Member Joined:**\n<@${member.id}>\n\n**Member #:**\n${bot.users.cache.size}\n\n**Account Created**:\n` + member.user.createdAt);
    embed.setAuthor(`${member.user.tag} joined the server`, member.user.avatarURL);
    embed.setThumbnail(member.user.avatarURL());
    embed.setFooter(`Update: ${update} - User ID:` + member.id);

	//Normal Mode part 2
    await bot.channels.cache.get('811344556205277214').send(`**🚀 Welcome to the club, <@${member.id}>!**\nThere are a few steps before you can get added to the rest of the server. Tag \`\`@Facilitators\`\` if you have any questions or would like to find out more about the community.\n> 1. Start by filling out the application form: http://nextgenmen.ca/club/apply\n> 2. After we’ve received it, one of the facilitators will ping you to verify your identity on the voice channel\n> 3. Once you’ve been verified, you’ll get added to the rest of the server`);
    const msg = await bot.channels.cache.get('789257779076268102').send(embed);
});

//Member Left
bot.on('guildMemberRemove', async member => {
    if (!member.guild.id === '720659736990842880') return;
    const embed = new Discord.MessageEmbed()
    const roles = member.roles.cache.filter(role => role.id !== member.guild.id).map(role => role.toString())

    embed.setColor('');
    embed.setDescription(`**Member Left:**\n<@${member.id}>\n\n**Roles:**\n${roles.join(`\n`)}`);
    embed.setAuthor(`${member.user.tag} left the server`, member.user.avatarURL);
    embed.setThumbnail(member.user.avatarURL());
    embed.setFooter(`Update: ${update} User ID: ` + member.id);

    const msg = await bot.channels.cache.get('789257779076268102').send(embed)
});

// UTILITY ------------------------------------

// ping command
bot.on('message', async message => {
	if (message.content === "=ping" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('')
		.setTitle('PONG!')
		.setDescription(`<@${message.author.id}> has pinged the server!\n**⏳ Your ping is:** ${Math.round(bot.ws.ping)}ms`)
		.setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update}`)
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
    const tdc = bot.guilds.cache.get('720659736990842880');
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
//	    embed.setFooter(`Update: ${update}`)

            member.send(embed);

            message.channel.send(`Sorry for the two pings <@!${userID}>, check your DMs, someone has sent you an anonymous message!`)
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
            .setAuthor(`The 8Ball Responds!`)
            .setDescription(`The 8ball responds to <@!${message.author.id}> with **${(outcomes[outcomesIndex])}**`)
	    .setFooter(`Update: ${update}`)

        message.channel.send(exampleEmbed);
      	}
    });

//invalid =8ball command
bot.on('message', async message => {
    if (message.content === "=8ball") {
	if (message.channel.type == "dm") return;
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('')
            .setTitle(`The 8Ball Responds!`)
            .setDescription(`The 8ball responds to <@!${message.author.id}> with **Please use the proper syntax: \`\`=8ball <Your Question>\`\`**`)
	    .setFooter(`Update: ${update}`)

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
	    .setFooter(`Update: ${update}`)
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
	    .setFooter(`Update: ${update} - If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD`)

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
	    .setFooter(`Update: ${update} - If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD`)

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
	    .setFooter(`Update: ${update} - If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD`)

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
	    .setFooter(`Update: ${update} - If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD`)

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
	    .setFooter(`Update: ${update} - If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD`)

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
	    .setFooter(`Update: ${update} - If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD`)

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
            .setTitle('Coin Flip')
            .setDescription(`<@${message.author.id}> flipped heads or tails and **${(outcomes[outcomesIndex])}** came out!`)
	    .setFooter(`Update: ${update} - If the output is "undefined", that means that you have to re-roll, or in other words, nothing came out! xD`)

        message.channel.send(exampleEmbed);
      	}
    });

//cards for masculinity command
bot.on('message', async message => {
      if (message.content.startsWith("=card")) {
        let outcomes = ['https://lh3.google.com/u/0/d/1_wjOoE5MJiNXvGygcI-Kx6DDNI81pbbn=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/10Fh-ADIOSEd6PiW-eB9NiUGkxmkEVXDH=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/10rxYlvcir_wjqWg1wjm0wZPvuBtiMs1u=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/12psmNJf-Y_SbevyRhQNBjUCFZnwdFbpw=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/13Kv_C4KO4i2FTAWiZzapgzj1IWmMsSSs=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/14ocpBc3KGKozWLCfk2dnN1_fs2XAIDw3=w1366-h617-iv1', 'https://lh3.google.com/u/0/d/14ocpBc3KGKozWLCfk2dnN1_fs2XAIDw3=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/15BwxyfxbCVhfU_xnid7tcdxB8o1WLwY6=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/15ff1jye3zevoUAba29qFDa63vFyQdcRG=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/16XQBrr8Wmm0yeG0d9hL006UVSKJNCU-R=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1A-NDHHGZHaPiP9Hq3pAQ0EzvbnnJUUI5=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1A5_VCq0oZbxNGK40Krrrg4J85e5uXOvY=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1ad3u8OhkHwD2Nwy8HekwBv6I25_XaE7S=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1AivJ-o4QQ-isVAqxiNerq3relUsA03Or=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1av2HlwWn2-ejA-lMEpgEq45DDMaA6Gh1=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1av2HlwWn2-ejA-lMEpgEq45DDMaA6Gh1=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1Bdvc_yJmvgnuueE4DR72L_8ZwsixxZnv=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1BG-IhS77o-uoJqyfqGNHhQeIUO7Lukjy=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1BpQi9MIiu97pvqm2egU_XnT8r96Xjecm=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1CWInnxdCmb25snwp1KU0ODdJ8RqhOhbn=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1FTvV7P2EuQ5YKaSscLZvVN5E3IOXFXK9=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1G33TQxZXemLgJYaNF5kScbFOrW4-cBLA=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1H1LNg13n6u4oYYbMYafvv00wuzT0fKUj=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1HZ4io3zFlSQPIvmMY1VIvV1iyJ1Ip7tu=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1IrN-_ARV-Z68C9_pHjpIEOoH8l8BGtUf=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1J_1j8qrFKyco1y5ZhRYASjCk1jChdOii=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1jpofE3DFba5HGDjcOmckq2piYIV9sHDI=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1KOu4Gxzorzra0eYpv3nMEuiqRMhNSO6t=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1KQvYjSKIpnO0ynmLIOdNDXwSEgHArLov=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1Kzr4YnHvYESlL79bCpItIuIVPm3EMviG=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1LFBgiM6cQHgHLdtXrhIZx5wwpT3TU1Ae=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1NF4_kdCpzBel0KJemGK-TzlzUqydSftf=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1ni3rQug4LlK12ebO4cnfnyJ7ASFJ0MFM=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1Nkwof1FGjpgAxpWUPJ-Ax2HS_mATTRf3=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1oiXOas87eEbutPJQgq79Po5aGZnvScOp=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1OjPOL9adOAUgRAUR1-dSpe-gJ8H2zbAa=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1oNObir_XQ801vblZF-aevJnfignSR_3Z=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1Opc7phB0BHhKPbBs-1_aQtyaoOCJT3EF=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1QTn9ev1KEsE2j-z1jx5XFbCRS05yT0VV=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1s6AKr3nIK4lkR39zaXKw02WtDBe-ctpE=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1sxp3KnyAujro7llxId_rsohhVONwRZfs=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1SYaMheZ5G57tEnTaFeaeD16hKBrttzaE=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1TsD3vB98ONW3kEpX6PUl2V_7xC6-_J0_=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1uGlBg-2OKsqZsZ571sr41OWtFm_fiejx=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1v4oVe3SluUWMzOupN6C-UPlnVbbZQqgN=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1W1AILDYpx8FT43WtvgqV1ko5kYYVDAWO=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1WY6j8WIgxEHZvIU8ITJwnNRmPZEQ3yEH=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1x-Z2WowgE6xvHQto8jWlVTLCz-VQ4x-c=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1x942gYNpNfSOsNfDC9MGn3d8iKuqvhE4=w1366-h617-iv1', 'https://lh3.google.com/u/0/d/1x942gYNpNfSOsNfDC9MGn3d8iKuqvhE4=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1x942gYNpNfSOsNfDC9MGn3d8iKuqvhE4=w853-h617-iv1', 'https://lh3.google.com/u/0/d/1yKLEalcjaOHFDjVfUdVkmIqsRe7Oezy-=w200-h190-p-k-nu-iv1', 'https://lh3.google.com/u/0/d/1ZTN8rboM46jdpklIoezCTdaU-2Ccx7_H=w200-h190-p-k-nu-iv1', 'https://lh3.googleusercontent.com/fife/AAWUweXu33fQcG3772BDGzSw6n8oecA_3xhYHbX87jUwB-LhzmY5z-RFFOekbqLNf_EpFKtxX3Qni-QRd81rpFOhjv6vvs-r8TznDLyBB6oDsNucMqaFEbcu0EGoItHTmq1SinwOIAP5C0hvKgzMrrMhXKISoi58eugkBu1xOJhcD1YRFIEqg7li0gD55qi57jtXC5NiGPAo7m1yc5d98fRLBHMB6fq6r0zdSwrgGQW5RUZMsmxnEd9uWOtHyTd9n9cJekuGouQGU5ynL6mH7nhLes6I5nXz7Gi2W80I_eZV1MIYjPNGJ7q_yucm5VW64cOtqtLT66aSFe15bAGmVEUxuhQLxrUsKgSGalue9-X3KxcEp4oXE8wDQIWrgJgO9FeeJbojWuIir_cAal0u3bT6fy0jIF2TaGsrrJwpnUG8MymuBePp01U1sAfLy4jrNslwMSvFVoWUUqjX4xr3Lg3e09ZeyYmfZyWirTjBXt5_t9iiH5xCxt5DipsiC6cTOBRb_k8lB7TVfYbq19pLAW8TYF6PMl6pS6As3IPKJlX3vnYy6m0TM_iFcZGwYABqyTy31PZ-u7YOJKUN2A9oFoyPfd5sgGS1XMRC-eB1WZeZCwhfBIF6TgjtO0Q0Ga9VhT_bCzeotjmuA8ZyTjkKEHJHqUbaBsmMMZCrc8o9gLTA8Ge0fBlFORFIwLzHgS627K6QU-P2BvvptXWFqkBF3ckV8lJcsMr3bbPOUQ=w853-h601-ft'];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor()
            .setTitle('Cards ~~Against~~ For Masculinity')
	    .setDescription(`<@!${message.author.id}> has drawn a card!`)
            .setImage(`${(outcomes[outcomesIndex])}`)
	    .setFooter(`Update: ${update} - Find the physical copy here: https://www.nextgenmen.ca/cards`)

        message.channel.send(exampleEmbed);
      	}
    });

// UPDATE 3.0

// Welcome Command
bot.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const tdc = bot.guilds.cache.get('720659736990842880');	
    if (command === "welcome") {
	message.delete().catch(O_o => { });
        if (message.author.bot) return;
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Only staff members can use this command.`);
        if (message.content.indexOf(prefix) !== 0) return;
        try {
            let userID = (args[0] || message.author.id).toString();

            userID = userID.replace(/[^0-9]/g, '');

            const member = tdc.members.cache.get(userID);
            const content = args.join(' ').replace(`${userID}`, '')
	    
            let outcomes = [`Welcome <@${userID}>! 🙂`, `💕 We’re glad to have you here, <@${userID}>!`, `<@${userID}> is here, let’s party! 🥳`, `At last, a ray of sunshine in my virtual bot existence. ☀️ Welcome, <@${userID}>!`, `🤯 Someone ask for an autograph, <@${userID}> is here!`];
            let outcomesIndex = Math.round(Math.random() * outcomes.length);

            if (!member) return message.channel.send('Unable to find that user');

            const embed = new Discord.MessageEmbed()
            embed.setColor();
            embed.setTitle(`${message.author.username} has sent you a message!`);
            const attachment = message.attachments.first();
            if (attachment) embed.setImage(attachment.url);
            embed.setDescription(`<@${message.author.id}> \n ${content}`);
            embed.setThumbnail(message.author.avatarURL());
            embed.setFooter(`Update: ${update} - User ID: ` + message.author.id);


            message.channel.send(`${(outcomes[outcomesIndex])}`)
        } catch (e) {
            message.channel.send(e.toString());
        }
    }
})


// THIS IS THE bot.login

bot.login(process.env.token);
