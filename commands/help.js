const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can use to interact with the bot, Right now there are only 9 commands available.")
      .addField("🎁 Giveaway 🎁",`${prefix}create ~ Interactive Menu\n${prefix}start [channel-name] [Time] [winners] [Prize]\n${prefix}reroll [prize name]\n${prefix}end [prize name]`, true)
      .addField("Examples", "g!start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing")
      .addField("Utility", `${prefix}ping, ${prefix}invite`, true)
      .addField("ℹ Information", `${prefix}stats`, false)
      .addField("Check out", "[This Channel](https://www.youtube.com/c/ZeroSync) to make your own giveaway bot")
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Sent the commands in Direct Messages! 💌, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
