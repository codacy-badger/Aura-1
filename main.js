const {CommandoClient} = require("discord.js-commando");
const client = new CommandoClient({
    commandPrefix: "!",
    owner: "281193735788953601",
    disableEveryone: true,
    unknownCommandResponse: false
});

client.registry
    .registerDefaults()
    .registerGroups([])
    .registerCommandsIn(require("path").join(__dirname, "commands"));

client.on("ready", () => console.log(`Logged in as ${client.user.tag}`));
client.login(require("./config"));