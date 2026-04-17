// stores item specific routes

const express = require("express");
const router = express.Router();


// (req, res): callback
router.get('/', (req, res) => {
    res.send("Get Request!")
    // res.sendFile('../dummy.html', {root: __dirname})
})

router.get('/items', (req, res) =>{
    // res.send("Post Req");
    res.json({
        x : 1,
        y : 2,
        z : 3
    })
})

router.put('/items/:id', (req, res) =>{
    res.send("Put Request!");
})

router.delete('/items/:id', (req, res) =>{
    res.send("Delete request");
})


module.exports = router