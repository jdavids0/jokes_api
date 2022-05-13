const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required!"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "Punchline must be at least 3 characters long"]
    }
}, {timestamps: true})

// create collection (i.e. table) based on model
const Joke = mongoose.model('Joke', JokesSchema);
// export collection Joke
module.exports = Joke;