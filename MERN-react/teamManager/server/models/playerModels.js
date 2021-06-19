const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
		{
		name: {
			type: String,
			required: [true, "you should enter a player name"],
			minLength: [2, "Player name should be at least 2 characters"],
		},
		position: String,
		age: Number,
		},
		{
		timestamps: true,
		}
);

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
