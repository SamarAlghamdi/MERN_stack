const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect('mongodb+srv://geeks:geeksgroup5@cluster0.gr0oo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
}

module.exports =connectDB
