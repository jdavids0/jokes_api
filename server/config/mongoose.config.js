const mongoose = require("mongoose");

// ***** MONGOOSE CONNECTION *****
// nb that connecting mongoose.connect() returns a promise, bc connection to a ddb takes time
mongoose.connect('mongodb+srv://root:root@cluster0.qj05l.mongodb.net/jokes_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));