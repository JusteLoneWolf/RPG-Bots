module.exports = client => {
    client.guilddb.defer.then(() => {
        if (client.guilddb.isReady) {
client.logger.database('[Guilddb] Database ready')
        } else {
            client.logger.database('[Guilddb] Database not ready')
        }
    });
    client.rpg.defer.then(()=>{
    	if(client.rpg.isReady){
    		client.logger.database('[RPG] Database ready')
    	}else{
    		client.logger.database('[RPG] Database not ready')
    	}
    })
};
