
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
        .setTitle("🌌 Cosmic Gate") // Dark-cosmic title
        .setDescription("A silent watcher of the stars greets all who step into the void.") // Dark welcome message
        .setColor("#0a0a0a") // Deep dark color
        .setThumbnail("https://i.imgur.com/yourCosmicImage.png") // Optional cosmic image
        .setFooter({ text: "The stars remember your arrival" }) // Footer text
        .setTimestamp(); // Adds current timestamp

    channel.send(`<@${member.id}> how did you find this server? 👀`);

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








