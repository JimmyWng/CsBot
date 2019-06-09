const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require("fs");
const moment = require('moment');
const prefix = "c";
Client.on('ready', () => {
    console.log('Bot is Online and Works Fine!')

    Client.user.setActivity('chelp for Help', {type: 'PLAYING'})

});
Client.login(process.env.BOT_TOKEN);
