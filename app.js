const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

//Middleware
//- functions that execute when routes are being hit
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

// Connect to Database
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to Database!');
})

//How do we start listening to the server?
app.listen(3000);