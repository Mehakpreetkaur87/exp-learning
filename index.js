
// Initialize the app
const express = require("express");
const app = express();

const port = 3000;

// (req, res): callback
app.get('/', (req, res) => {
    res.send("Get Request!")
    // res.sendFile('./dummy.html', {root: __dirname})
})

app.post('/items', (req, res) =>{
    // res.send("Post Req");
    res.json({
        x:1, y: 2, z:3
    })
})

app.put('/items/:id', (req, res) =>{
    res.send("Put Request!");
})

app.delete('/items/:id', (req, res) =>{
    res.send("Delete request");
})


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})