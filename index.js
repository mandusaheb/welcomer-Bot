
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
const WELCOME_CHANNEL_ID = "1442227511659466762";

// ✔ Correct ready event
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// When a new member joins
client.on("guildMemberAdd", async (member) => {
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (!channel) return;

    const welcomeEmbed = new EmbedBuilder()
        .setTitle("🎉welcome to the cosmos !")
        .setDescription(`A silent watcher of the stars greets all who step into the void.!`)
        .setColor("#d41717")
        .setImage("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpnMm93ZDdtZ3hmbzcxMGs3cjMxNnJvemltOHRpenp0MG03eHdlMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VFB3cJJne7b5m/giphy.gif")
        .setFooter({ text: "The stars remember your arrival" })
        .setTimestamp();
    
    channel.send({ embeds: [welcomeEmbed] });
    
    channel.send(`<@${member.id}> ARE YOU READY FOR THE FIGHT CHAMP ? 👀`);

    try {
        await member.send("Thank you for joining our server! If you need help, feel free to ask 😊");
    } catch (err) {
        console.log("could not send DM.");
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

















