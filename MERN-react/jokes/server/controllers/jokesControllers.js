const Joke = require('../models/jokesModel')

const getAllJokes= (req, res) =>{
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
} 

const getJoke= (req, res) =>{
    Joke.findById(req.params.id)
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
} 

const getRandomJoke= (req, res) =>{
    Joke.find()
        .then(allJokes => {
            var rand= Math.floor(Math.random() * (allJokes.length - 0) ) + 0;
            console.log(rand)
            res.json({ jokes: allJokes.splice(rand,1) })
        }
            )
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
} 

const createJoke= (req, res) =>{
    console.log(req.body);
    console.log("Hello")
    Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

const updateJoke = (req, res) =>{
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

const deleteJoke = (req, res) =>{
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports = {getAllJokes,getJoke,createJoke,getRandomJoke,updateJoke,deleteJoke}