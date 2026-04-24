const {
    Schema, model
} = require("mongoose"); // destructured schema and model from mongoose library


// create the Schema
const userSchema = new Schema({
    name: {
        type : String, 
        required: true, 
        maxlength: 50
    },
    age:{
        type: Number,
        required: true
    },
    weight: {
        type: Number
    },
    createdAt:{
        type : Date,
        default: Date.now()
    }
});

//create the model

const UserModel = model("User",userSchema)

// export the model
module.exports = UserModel; 