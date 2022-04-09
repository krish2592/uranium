const player = require('../entity/playersEntity')

let listOfPlayers = function (req, res) {
    let existingPlayer = player.getPlayers;
    let newPlayer = req.body;
    let flag1=0;

    for (let i in newPlayer) {
        for(let j in existingPlayer){
            if (newPlayer[i].name.toLowerCase() !== existingPlayer[j].name.toLowerCase()){
                flag1=1;
            } else if(newPlayer[i].name.toLowerCase() === existingPlayer[j].name.toLowerCase()){
                flag1=0;
            }
        }
        if(flag1){
            existingPlayer.push(newPlayer[i]);
        }
    }
    res.send({data:existingPlayer, status: true});
}


module.exports.listOfPlayers = listOfPlayers;