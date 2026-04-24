const express = require('express');

const app = express();

const mongoose = require('mongoose');


const PORT = 3000;

app.get('/', (req, res) =>{
    console.log("I am inside teh home page route handler!");
    res.send("Hello!!")
});

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
})
