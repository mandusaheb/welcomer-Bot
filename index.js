

require("dotenv").config();

const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Your welcome channel ID
const WELCOME_CHANNEL_ID = "1308146229775040655";

// ✔ Correct ready event
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// When a new member joins
client.on("guildMemberAdd", async (member) => {
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (!channel) return;

    const welcomeEmbed = new EmbedBuilder()
        .setTitle("🎉 Welcome to the Server!")
        .setDescription(Hey <@${member.id}>! We're glad you're here!)
        .setColor("#00BFFF")
        .setImage("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG90aDJpcnN1OGFmemsyMzg4eHhvZmgxNHNheWtzNDhlNzh2c3FxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pVWuLuV1JESZJdebkI/giphy.gif")
        .setTimestamp();

    channel.send({ embeds: [welcomeEmbed] });

    channel.send(<@${member.id}> how did you find this server? 👀);

    try {
        await member.send("Thank you for joining our server! If you need help, feel free to ask 😊");
    } catch (err) {
        console.log("Could not send DM.");
    }
});

// ⬇ Your commands go here
client.on("messageCreate", (msg) => {
    if (msg.author.bot) return;

    if (msg.content === "!ping") {
        msg.reply("Pong! 🏓");
    }
});

// Login

client.login(process.env.TOKEN);
