const express = require('express');
const connectDB = require('./config/mongooseConfig')
const jokesRouters = require('./routes/jokesRouter')
const app = express();

app.use(express.json());
app.use('',jokesRouters);

connectDB();
const port=8000;
app.listen(port,()=>{
    console.log("Server running on port " + port)
});