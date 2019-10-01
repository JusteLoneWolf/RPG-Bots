module.exports = (client,message) => {
    let guildDb = client.guilddb.get(message.guild.id);
        prefix = guildDb.prefix;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

        let user = client.rpg.get(message.author.id);
if(!user){
    client.rpg.set(message.author.id,{
        id:message.author.id,
        username:message.author.username,

        colonist:{

        },
        building:{

        },
        production:{

        },
        storage:{

        },

    });
}


    const command = message.content.split(' ')[0].slice(prefix.length).toLowerCase();
    const params = message.content.split(' ').slice(1);
    let cmd;

    if (client.commandes.has(command)){
        cmd = client.commandes.get(command)
    }else if(client.aliases.has(command)){
        cmd = client.commandes.get(client.aliases.get(command))
    }
    if(!cmd) return;
    if(cmd.conf.category === "Owner" && message.author.id !== '379705914824851469' && message.author.id !== '236627494764150784') return message.channel.send('You don\'t the owner of the bot');
    try {
        cmd.run(client, message, params);
    } catch (e) {
        client.emit("error", e, message);
    }
};
const fetch = require('node-superfetch');
imageToAscii("https://cdn.discordapp.com/avatars/613339080658255895/b246fa9e8de98a6c5037294561b65f1b.webp?size=512", {
    colored: false,
    white_bg: false
}, (err, converted) => {
fetch.post(`https://hastebin.com/documents`).send(converted).then(body => {
        console.log(`https://hastebin.com/${body.body.key} `);
    });
});