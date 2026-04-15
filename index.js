
// Initialize the app
const express = require("express");
const app = express();

const port = 3000;


// import item router file
const item  = require('./routes/item');


// add router file of the products
const products = require('./routes/products.js')

// load into application
app.use('/api', item);

// need to use the products routers 

app.use('/p', products)


//  - /api/ -> item home page
//  - /api/items -> item post request
//  - /api/items/id -> put/ delete request

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})