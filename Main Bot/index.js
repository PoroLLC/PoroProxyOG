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
    client.user.setActivity("PoroProxy", {
        type: "PLAYING",
      });
});


// DO NOT ADD CODE PLEASE! ONLY EDIT THE TOKEN. CODE IN THE SUB BOTS. \\



// YOUR CODE ABOVE HERE

client.login("") // Type your bot token here.



