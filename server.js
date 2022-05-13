const express = require("express");
const app = express(); // create app variable which is an instance of express
const port = 8000 // declare a port for backend api to run in

// ***** these two lines required to handle post req *****
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.config'); // importing config file

// routes - need to pass in (app) here
require('./server/routes/joke.routes') (app);

app.listen(port, ()=>console.log(`listening on port ${port}`));