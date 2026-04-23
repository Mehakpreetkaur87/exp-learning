// Import the Express library
// require() is used in Node.js to import modules (like libraries)
const express = require('express')

// Create an Express application
// express() returns an object → we store it in "app"
const app = express()

// Define the port number where the server will run
// Port = a door through which users access your server
const port = 3000


// loading middleware into the app
// inbuilt middleware
app.use(express.json());


// middleware - logging, auth, validation

// const loggingMiddleware = function(req, res, next){
//     console.log("LOGGED!");
//     next(); // move to next middleware
// }

// app.use(loggingMiddleware);

// const authMiddleware = function (req, res, next){
//     console.log("Authentication!!")
//     // res.send("Stop!")
//     next();
// }

// app.use(authMiddleware);

// const validationMiddlware = function (req, res, next){
//     console.log("Validate");
//     next();
// }

// app.use(validationMiddlware);


const route = require("./routers/route.js");
// mounting the routes
app.use('/api', route);



// Define a route
// app.get → handles HTTP GET requests
// '/' → root route (homepage)
app.get('/', (req, res) => {

    // req → request object (data coming from client)
    // res → response object (data sent back to client)
    console.log("I am Route Handler!");
    console.log(req.body);

    // res.send() → sends response back to browser
    res.send(req.body)
})

// Start the server
// app.listen() → tells server to start listening
// port → where server runs
// callback → runs when server starts
app.listen(port, () => {

    // Console log shows server is running
    console.log(`Server is running at ${port}`);    
})



