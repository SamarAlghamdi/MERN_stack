const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
    {
    name: {
        type: Number,
    },
    players: [{type:mongoose.Schema.ObjectId,ref:"Player"}],
    },
    {
    timestamps: true,
    }
);

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;