const Player = require('../models/PlayerModels')
const createNewPlayer = (req, res) => {
    const {name,position,age}= req.body
    Player.create({name,position,age})
      .then(newPlayer => res.json({ player: newPlayer }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };
  const getAllPlayers = (req, res) => {
    Player.find()
      .then(allPlayers => res.json({ players: allPlayers }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  const getListPlayerByage = (req, res) => {
    Player.find({ age: {$gt: 20, $lte: 30}}
    )
      .then(allPlayers => res.json({ players: allPlayers }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  const getListPlayersByName = (req, res) => {
    Player.find({name: { $regex: req.query.name }}
    ).limit(2).sort("-createdAt").select("name position")
      .then(allPlayers => res.json({ players: allPlayers }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  const getOnePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
      .then(onePlayer => res.json({ player: onePlayer }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  const editPlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, )
      .then(onePlayer => res.json({ player: onePlayer }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };

  const deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
      .then(onePlayer => res.json({ player: onePlayer }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports={createNewPlayer, getAllPlayers, getOnePlayer, editPlayer, deletePlayer,getListPlayerByage, getListPlayersByName}