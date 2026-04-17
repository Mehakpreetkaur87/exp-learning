const express  = require('express')

const router = express.Router()

// define the home page rpute

router.get('/', (req, res) => {
    res.send('Products home page')
})


// define the about route

router.get('/about', (req, res) =>{
    res.send("About Products")
})


module.exports = router