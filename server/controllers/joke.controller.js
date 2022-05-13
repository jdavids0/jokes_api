const Joke = require('../models/joke.model')

// create a new joke
module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
        .then(newJoke => {
            res.json({results: newJoke})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// find all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// find one joke
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params.id})
        .then(oneJoke => res.json({results: oneJoke}))
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedQuote => {
            res.json({results: updatedQuote})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}

// delete a joke
module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err =>{
            res.json({msg: "Something went wrong", error: err})
        })
}