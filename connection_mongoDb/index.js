const express = require('express');

const app = express();

const connectDB = require('./db.js');
const PORT = 3000;


app.use(express.json());
// connect to the database
connectDB();

app.get('/', (req, res) =>{
    console.log("I am inside teh home page route handler!");
    res.send("Hello!!")
});

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
})
