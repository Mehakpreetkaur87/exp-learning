const express = require("express")

const router = express.Router()


// middlewares

const auth = function (req, res, next){
    console.log("I am inside the authentication middleware!");

    // Added dummy user
    req.user = {
        userId : 1, 
        role : "student"
    }

    if (req.user){
        // if a valid user is there in req, then proceed to the next middlewares
        next();
    }
    else{
        // if not a valid user
        res.json({
            success:false,
            message: "Not a valid user"
        })
    }
}


const isStudent = function(req, res, next){
    console.log("I am inside the student middleware!");

    if(req.user.role === "student"){
        next();
    }
    else{
        res.json({
            success : false,
            message: "Acess Denied, this route is only for students!"
        })
    }   

}


const isAdmin = function(req, res, next){
    console.log("I am inside the Admin middleware!");

    if(req.user.role === "admin"){
        next();
    }
    else{
        res.json({
            success : false,
            message: "Access Denied, this route is only for admin!"
        })
    }   

}

// routes

// Route-Specific Middleware
// It will check, authenticated, isStudent then it reaches to the route handler.
router.get("/student", auth, isStudent, (req, res) =>{
    console.log("I am inside the student route");
    res.send("Student specific page")    
})


router.get("/admin", auth, isAdmin, (req, res) =>{
    console.log("I am inside the admin route");
    res.send("Admin specific page")
    
})
module.exports = router