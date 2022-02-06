const Discord = require('discord.js')

const client = new Discord.Client({
    intents:  [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

// YOUR CODE BELOW HERE


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setStatus('invisible') 

});


//client.on("message", msg => {
    //if (msg.content === "!test") {
      //msg.reply("Your test worked.");
    //}
  //})








// YOUR CODE ABOVE HERE

client.login("") // Type your bot token here.



