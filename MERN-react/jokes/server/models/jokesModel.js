const mongoose = require('mongoose');
const jokeSchema = mongoose.Schema({
    setUp:{
        type: String, 
        min:10,
        required: true,
    },
    punchline:{ 
        type: String, 
        min: 3, 
        required: true,
    }
},{
    timestamps: true,
})

const Joke = mongoose.model('Joke',jokeSchema)
module.exports = Joke