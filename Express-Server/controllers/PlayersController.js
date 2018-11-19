const players=require('../models/players.js');

exports.getPlayer= (req,res,next)=>{
    players.findOne({"id": req.params.id}, (err,docs)=>{
        if(err){
            res.status(500).json({error: 'Internal Server Error, player id is not valid...'})
            return
        }
        res.status(200).json({
            player:docs
        })
    })
}

exports.deletePlayer= (req,res,next)=>{
    players.findOneAndDelete({"id": req.params.id}, (err,docs)=>{
        if(err){
            res.status(500).json({error: 'Internal Server Error, player id is not valid...'})
            return
        }
        res.status(200).json({
            id:docs,
            message: "success"
        })
    })
}

exports.getPlayers= (req,res,next)=>{
    players.find({},(err,docs)=>{
        if(err){
            res.status(500).json({error: 'Internal Server Error...'})
            return
        }
        res.status(200).json({
            players:docs
        })
    })
}

exports.createPlayer=(req,res,next)=>{
    let player=req.body;
    //create a new player document in Mongo DB
    let newPlayer=new players(player);
    newPlayer.save();
    res.status(200).json({
        "message": "Player inserted succssfully!"
    })
}
    exports.updatePlayer=(req,res,next)=>{
        const player=req.body;
       const id=req.params.id
      players.findOneAndUpdate({"id": id},player,(err,docs)=>{
          res.status(200).json({
            "message": "updated Player succssfully!"
        })
    })
}
    